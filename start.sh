#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-/home/runner/work/PlayGround/PlayGround}"
OPENCODE_WEB_DIR="${OPENCODE_WEB_DIR:-/home/runner/work/_temp/omgithub-web}"
PORT="${PORT:-3000}"
DEPLOYMENT_OUTPUT="$OPENCODE_WEB_DIR/deployment-output.json"

export PROJECT_DIR OPENCODE_WEB_DIR PORT DEPLOYMENT_OUTPUT

timed() {
  local label="$1"
  shift
  /usr/bin/time -f "[timing] ${label}: %es" "$@"
}

printf '[start] project=%s port=%s\n' "$PROJECT_DIR" "$PORT"
cd "$PROJECT_DIR"
timed "create metadata directory" mkdir -p "$OPENCODE_WEB_DIR"

dep_key="$(timed "hash dependencies" sha256sum package.json package-lock.json | sha256sum | cut -d' ' -f1)"
source_key="$(timed "hash sources" bash -c 'find src -type f -print0 | sort -z | xargs -0 sha256sum; sha256sum index.html vite.config.js' | sha256sum | cut -d' ' -f1)"
build_key="$(timed "hash build inputs" bash -c 'printf "%s\n%s\n" "$1" "$2"' _ "$dep_key" "$source_key" | sha256sum | cut -d' ' -f1)"

dep_stamp="$OPENCODE_WEB_DIR/project-deps.stamp"
build_stamp="$OPENCODE_WEB_DIR/project-build.stamp"
dep_current=""
build_current=""
[[ ! -f "$dep_stamp" ]] || dep_current="$(timed "read dependency stamp" cat "$dep_stamp")"
[[ ! -f "$build_stamp" ]] || build_current="$(timed "read build stamp" cat "$build_stamp")"

if [[ ! -x node_modules/.bin/vite ]] || [[ "$dep_current" != "$dep_key" ]]; then
  printf '[start] installing dependencies\n'
  timed "install dependencies" npm ci --no-audit --no-fund
  timed "write dependency stamp" bash -c 'printf "%s" "$1" > "$2"' _ "$dep_key" "$dep_stamp"
else
  printf '[start] dependencies are current\n'
fi

if [[ ! -f dist/index.html ]] || [[ "$build_current" != "$build_key" ]]; then
  printf '[start] building static output\n'
  timed "build static output" npm run build
  timed "write build stamp" bash -c 'printf "%s" "$1" > "$2"' _ "$build_key" "$build_stamp"
else
  printf '[start] static output is current\n'
fi

timed "write deployment output" node -e '
const fs = require("node:fs")
const path = require("node:path")
const project = path.resolve(process.env.PROJECT_DIR)
const directory = path.join(project, "dist")
if (!fs.existsSync(path.join(directory, "index.html"))) throw new Error("dist/index.html is missing")
fs.mkdirSync(path.dirname(process.env.DEPLOYMENT_OUTPUT), { recursive: true })
fs.writeFileSync(process.env.DEPLOYMENT_OUTPUT, JSON.stringify({ project, directory }))
console.log(`[start] deployment output: ${directory}`)
'

printf '[start] serving %s on 0.0.0.0:%s\n' "$PROJECT_DIR/dist" "$PORT"
exec node - <<'NODE'
const fs = require('node:fs')
const path = require('node:path')
const { createServer } = require('node:http')

const root = path.resolve(process.env.PROJECT_DIR, 'dist')
const port = Number(process.env.PORT || 3000)
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.wasm': 'application/wasm',
  '.glb': 'model/gltf-binary',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
}

const server = createServer((request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost')
    let file = path.resolve(root, `.${decodeURIComponent(url.pathname)}`)
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) {
      response.writeHead(404)
      response.end('Not found')
      return
    }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html')
    if (!fs.existsSync(file) && !path.extname(url.pathname)) file = path.join(root, 'index.html')
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
      response.writeHead(404)
      response.end('Not found')
      return
    }
    response.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream')
    response.setHeader('Cache-Control', 'no-cache')
    response.end(fs.readFileSync(file))
  } catch {
    response.writeHead(404)
    response.end('Not found')
  }
})

server.on('error', (error) => {
  console.error(`[start] server error: ${error.message}`)
  process.exit(1)
})
server.listen(port, '0.0.0.0', () => console.log(`[start] ready on http://0.0.0.0:${port}`))
const stop = () => server.close(() => process.exit(0))
process.on('SIGTERM', stop)
process.on('SIGINT', stop)
NODE
