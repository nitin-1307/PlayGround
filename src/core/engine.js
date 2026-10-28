import * as THREE from 'three'

export class Engine {
  constructor(canvas) {
    this.canvas = canvas
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    })
    this.renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio || 1, 2))
    this.renderer.setSize(globalThis.innerWidth, globalThis.innerHeight, false)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.08
    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0x141a2c, 0.0052)
    this.camera = new THREE.PerspectiveCamera(55, globalThis.innerWidth / globalThis.innerHeight, 0.1, 400)
    this.camera.position.set(0, 9, 16)
    this.clock = new THREE.Clock()
    this.listeners = new Set()
    this.addBaseLighting(this.scene)
    this.addSky(this.scene)
    globalThis.addEventListener('resize', () => this.resize())
    this.resize()
  }

  addBaseLighting(scene) {
    const hemi = new THREE.HemisphereLight(0xa8c7ff, 0x2b241d, 1.35)
    scene.add(hemi)
    const sun = new THREE.DirectionalLight(0xffe1b5, 2.2)
    sun.position.set(38, 62, 26)
    scene.add(sun)
    const rim = new THREE.DirectionalLight(0x8bd4ff, 1.05)
    rim.position.set(-42, 25, -38)
    scene.add(rim)
    const fill = new THREE.AmbientLight(0x3f4a70, 0.55)
    scene.add(fill)
  }

  addSky(scene) {
    const uniforms = {
      topColor: { value: new THREE.Color(0x1a1e46) },
      midColor: { value: new THREE.Color(0x4a3f78) },
      bottomColor: { value: new THREE.Color(0xf0a06a) },
      offset: { value: 18 },
      exponent: { value: 0.72 }
    }
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(260, 32, 18),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        uniforms,
        vertexShader: `
          varying vec3 vWorldPosition;
          void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 topColor;
          uniform vec3 midColor;
          uniform vec3 bottomColor;
          uniform float offset;
          uniform float exponent;
          varying vec3 vWorldPosition;
          void main() {
            float h = normalize(vWorldPosition + vec3(0.0, offset, 0.0)).y;
            float upper = smoothstep(0.0, 0.85, h);
            float lower = smoothstep(-0.35, 0.18, h);
            vec3 color = mix(bottomColor, midColor, lower);
            color = mix(color, topColor, upper * exponent);
            gl_FragColor = vec4(color, 1.0);
          }
        `
      })
    )
    scene.add(sky)
    this.sky = sky

    const starGeometry = new THREE.BufferGeometry()
    const count = 700
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 0.75 + 0.15)
      const radius = 220
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.cos(phi) + 20
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({ color: 0xdde8ff, size: 0.72, transparent: true, opacity: 0.82, depthWrite: false })
    )
    scene.add(stars)
    this.stars = stars
  }

  resize() {
    const width = globalThis.innerWidth
    const height = globalThis.innerHeight
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height, false)
  }

  setQuality(quality) {
    this.renderer.setPixelRatio(quality === 'low' ? 1 : Math.min(globalThis.devicePixelRatio || 1, 2))
    this.renderer.shadowMap.enabled = false
    this.resize()
  }

  onFrame(callback) {
    this.listeners.add(callback)
    return () => this.listeners.delete(callback)
  }

  render(scene = this.scene) {
    this.renderer.render(scene, this.camera)
  }

  start(update) {
    const loop = () => {
      const dt = Math.min(0.05, this.clock.getDelta())
      update(dt, this.clock.elapsedTime)
    }
    this.renderer.setAnimationLoop(loop)
  }
}
