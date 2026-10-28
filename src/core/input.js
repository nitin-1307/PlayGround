export class Input {
  constructor(canvas) {
    this.canvas = canvas
    this.keys = new Set()
    this.justPressed = new Set()
    this.look = { dx: 0, dy: 0 }
    this.wheel = 0
    this.dragging = false
    this.enabled = true
    this.touchMove = { x: 0, y: 0 }
    this.pointerId = null
    this.lastPointer = { x: 0, y: 0 }
    this.sensitivity = 1
    this.invertY = false
    this.actionHandlers = new Map()
    this.bind()
  }

  bind() {
    globalThis.addEventListener('keydown', (event) => {
      if (!this.enabled) return
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) event.preventDefault()
      if (!this.keys.has(event.code)) this.justPressed.add(event.code)
      this.keys.add(event.code)
      const handler = this.actionHandlers.get(event.code)
      if (handler && !event.repeat) handler(event)
    })
    globalThis.addEventListener('keyup', (event) => {
      this.keys.delete(event.code)
    })
    globalThis.addEventListener('blur', () => this.keys.clear())

    this.canvas.addEventListener('pointerdown', (event) => {
      if (!this.enabled) return
      if (event.button !== 0 && event.button !== 2) return
      this.dragging = true
      this.pointerId = event.pointerId
      this.lastPointer.x = event.clientX
      this.lastPointer.y = event.clientY
      this.canvas.setPointerCapture?.(event.pointerId)
    })
    this.canvas.addEventListener('pointermove', (event) => {
      if (!this.enabled || !this.dragging || event.pointerId !== this.pointerId) return
      const dx = event.clientX - this.lastPointer.x
      const dy = event.clientY - this.lastPointer.y
      this.lastPointer.x = event.clientX
      this.lastPointer.y = event.clientY
      this.look.dx += dx
      this.look.dy += dy
    })
    const endDrag = (event) => {
      if (event.pointerId === this.pointerId) {
        this.dragging = false
        this.pointerId = null
      }
    }
    this.canvas.addEventListener('pointerup', endDrag)
    this.canvas.addEventListener('pointercancel', endDrag)
    this.canvas.addEventListener('contextmenu', (event) => event.preventDefault())
    this.canvas.addEventListener('wheel', (event) => {
      if (!this.enabled) return
      this.wheel += Math.sign(event.deltaY)
    }, { passive: true })
  }

  onAction(code, handler) {
    this.actionHandlers.set(code, handler)
  }

  isDown(code) {
    return this.keys.has(code)
  }

  consumePressed(code) {
    if (this.justPressed.has(code)) {
      this.justPressed.delete(code)
      return true
    }
    return false
  }

  consumeLook() {
    const look = { dx: this.look.dx * this.sensitivity, dy: this.look.dy * this.sensitivity * (this.invertY ? -1 : 1) }
    this.look.dx = 0
    this.look.dy = 0
    return look
  }

  consumeWheel() {
    const wheel = this.wheel
    this.wheel = 0
    return wheel
  }

  getMoveVector() {
    let x = 0
    let y = 0
    if (this.isDown('KeyW') || this.isDown('ArrowUp')) y += 1
    if (this.isDown('KeyS') || this.isDown('ArrowDown')) y -= 1
    if (this.isDown('KeyD') || this.isDown('ArrowRight')) x += 1
    if (this.isDown('KeyA') || this.isDown('ArrowLeft')) x -= 1
    if (this.touchMove.x || this.touchMove.y) {
      x += this.touchMove.x
      y += this.touchMove.y
    }
    const length = Math.hypot(x, y)
    if (length > 1) {
      x /= length
      y /= length
    }
    return { x, y }
  }

  setTouchMove(x, y) {
    this.touchMove.x = x
    this.touchMove.y = y
  }

  clearFrame() {
    this.justPressed.clear()
  }

  setEnabled(enabled) {
    this.enabled = enabled
    if (!enabled) {
      this.keys.clear()
      this.touchMove.x = 0
      this.touchMove.y = 0
      this.dragging = false
    }
  }
}
