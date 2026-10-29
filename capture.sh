#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-/home/runner/work/PlayGround/PlayGround}"
RUNTIME_DIR="${RUNTIME_DIR:-/home/runner/work/_temp/omgithub-runtime}"
CAPTURE_URL="${CAPTURE_URL:?Set CAPTURE_URL.}"
CAPTURE_DIR="${CAPTURE_DIR:?Set CAPTURE_DIR.}"

project_real="$(realpath -m "$PROJECT_DIR")"
capture_real="$(realpath -m "$CAPTURE_DIR")"
case "${capture_real}/" in
  "${project_real}/"*)
    echo 'CAPTURE_DIR must be outside the project source tree.' >&2
    exit 1
    ;;
esac

timed() {
  local label="$1"
  shift
  /usr/bin/time -f "[timing] ${label}: %es" "$@"
}

export PROJECT_DIR RUNTIME_DIR CAPTURE_URL CAPTURE_DIR
if [[ -z "${DISPLAY:-}" && -f "$RUNTIME_DIR/../omgithub-playwright/display" ]]; then
  export DISPLAY=":$(cat "$RUNTIME_DIR/../omgithub-playwright/display")"
elif [[ -z "${DISPLAY:-}" && -f "$HOME/.local/share/omgithub-playwright/display" ]]; then
  export DISPLAY=":$(cat "$HOME/.local/share/omgithub-playwright/display")"
fi

printf '[capture] url=%s dir=%s\n' "$CAPTURE_URL" "$CAPTURE_DIR"
timed "create capture directory" mkdir -p "$CAPTURE_DIR"
timed "browser capture" node - <<'NODE'
const fs = require('node:fs')
const path = require('node:path')
const { createRequire } = require('node:module')

const playwrightRoot = process.env.OPENCODE_PLAYWRIGHT_DIR || path.join(process.env.HOME, '.local/share/omgithub-playwright')
const requirePlaywright = createRequire(path.join(playwrightRoot, 'package.json'))
const url = process.env.CAPTURE_URL
const output = path.resolve(process.env.CAPTURE_DIR)
const startedAt = performance.now()
const pageErrorMessages = []
let browser

const timing = (label, start = startedAt) => {
  console.log(`[timing] ${label}: ${((performance.now() - start) / 1000).toFixed(3)}s`)
}
const transient = (error) => Object.assign(error, { exitCode: 75 })
const defect = (message) => Object.assign(new Error(message), { exitCode: 1 })

async function capture(name, width, height, isMobile) {
  const started = performance.now()
  let context
  try {
    try {
      context = await browser.newContext({
        viewport: { width, height },
        deviceScaleFactor: 1,
        isMobile,
        hasTouch: isMobile,
        ignoreHTTPSErrors: true
      })
    } catch (error) {
      throw transient(error)
    }

    let page
    try {
      page = await context.newPage()
    } catch (error) {
      throw transient(error)
    }
    page.setDefaultTimeout(30000)
    page.on('pageerror', (error) => {
      pageErrorMessages.push(`${name}: ${error.message}`)
      console.error(`[pageerror:${name}] ${error.message}`)
    })
    page.on('console', (message) => {
      if (message.type() === 'error') console.error(`[console:${name}] ${message.text()}`)
    })
    page.on('requestfailed', (request) => {
      console.error(`[requestfailed:${name}] ${request.url()} ${request.failure()?.errorText || ''}`)
    })

    let response
    try {
      response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 })
    } catch (error) {
      if (/invalid url/i.test(error.message)) throw defect(error.message)
      throw transient(error)
    }
    if (!response) throw transient(new Error(`No response loading ${url}`))
    if (!response.ok()) {
      const status = response.status()
      const message = new Error(`HTTP ${status} loading ${url}`)
      throw [408, 429, 500, 502, 503, 504].includes(status) ? transient(message) : defect(message)
    }
    timing(`${name} navigation`, started)

    try {
      await page.waitForFunction(() => {
        const shell = document.getElementById('game-shell')
        const scene = document.getElementById('scene')
        const enter = document.getElementById('enter-button')
        const loading = document.getElementById('loading-screen')
        if (document.readyState !== 'complete' || !window.__ASTRA_GAME__ || !shell || !scene || !enter) return false
        if (enter.disabled) return false

        const loadingStyle = loading ? getComputedStyle(loading) : null
        const loadingVisible = loadingStyle
          && loadingStyle.display !== 'none'
          && loadingStyle.visibility !== 'hidden'
          && !loading.classList.contains('leaving')
        if (loadingVisible) return false

        const shellStyle = getComputedStyle(shell)
        const box = shell.getBoundingClientRect()
        return shellStyle.display !== 'none'
          && shellStyle.visibility !== 'hidden'
          && box.width > 0
          && box.height > 0
      }, null, { timeout: 45000 })
      await page.evaluate(() => document.fonts.ready)
    } catch (error) {
      throw defect(`Rendered content did not become ready: ${error.message}`)
    }
    timing(`${name} render ready`, started)

    const canvas = await page.locator('#scene').evaluate((element) => ({
      width: element.width,
      height: element.height,
      clientWidth: element.clientWidth,
      clientHeight: element.clientHeight
    }))
    if (canvas.width < 1 || canvas.height < 1 || canvas.clientWidth < 1 || canvas.clientHeight < 1) {
      throw defect(`Canvas has invalid dimensions: ${JSON.stringify(canvas)}`)
    }

    await page.waitForTimeout(1500)
    const target = path.join(output, `final-${name}.png`)
    fs.rmSync(target, { force: true })
    try {
      await page.screenshot({ path: target, timeout: 30000 })
    } catch (error) {
      if (error.name === 'TimeoutError' || !browser.isConnected()) throw transient(error)
      throw defect(error)
    }
    const size = fs.statSync(target).size
    if (size < 10000) throw defect(`Screenshot is too small to be rendered evidence: ${target} (${size} bytes)`)
    console.log(`[capture] ${name}: ${target} ${width}x${height} ${size} bytes`)
    timing(`${name} screenshot`, started)
  } finally {
    await context?.close().catch((error) => console.error(error))
  }
}

async function main() {
  try {
    const { chromium } = requirePlaywright('playwright')
    const config = JSON.parse(fs.readFileSync(path.join(playwrightRoot, 'linux.json'), 'utf8'))
    try {
      browser = await chromium.launch({ ...config.browser.launchOptions, timeout: 30000 })
    } catch (error) {
      throw transient(error)
    }
    await capture('desktop', 1440, 900, false)
    await capture('mobile', 390, 844, true)
    if (pageErrorMessages.length) {
      throw defect(`${pageErrorMessages.length} page error(s) occurred while rendering the preview: ${pageErrorMessages.slice(0, 3).join(' | ')}`)
    }
    console.log(`[capture] complete: ${output}`)
  } catch (error) {
    console.error(error)
    process.exitCode = error.exitCode || 1
  } finally {
    await browser?.close().catch((error) => {
      console.error(error)
      process.exitCode ||= 75
    })
    timing('capture total')
  }
}

main()
NODE
