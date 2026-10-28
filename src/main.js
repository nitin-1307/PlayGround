import { bootGame } from './game.js'

const canvas = document.getElementById('scene')
const loadingFill = document.getElementById('loading-fill')
const loadingText = document.getElementById('loading-text')

function progress(percent, text) {
  if (loadingFill) loadingFill.style.width = `${percent}%`
  if (loadingText && text) loadingText.textContent = text
}

async function run() {
  try {
    const game = await bootGame(canvas, progress)
    window.__ASTRA_GAME__ = game
    game.start()
    window.addEventListener('beforeunload', () => game.save(true))
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) game.save(true)
    })
  } catch (error) {
    console.error(error)
    progress(100, 'The Astral Scar could not be reached.')
    const loading = document.getElementById('loading-screen')
    if (loading) {
      loading.innerHTML = `
        <div style="max-width:520px;text-align:center;padding:24px">
          <div class="loading-mark" style="color:var(--danger)">!</div>
          <h1 style="font-family:var(--font-display);font-size:24px;margin:14px 0 8px">The expedition could not start</h1>
          <p style="font-size:12px;line-height:1.6;color:var(--muted)">${String(error?.message || error).replace(/</g, '&lt;')}</p>
          <button class="primary-button" style="margin-top:18px" onclick="location.reload()">Try again</button>
        </div>`
    }
  }
}

run()
