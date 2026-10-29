import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'

const ATMOSPHERES = {
  hub: {
    fog: 0x2a2436, fogDensity: 0.0042,
    sun: 0xffd9a0, sunIntensity: 2.2, sunPos: [38, 62, 26],
    hemiSky: 0xa8c7ff, hemiGround: 0x55423a, hemiIntensity: 1.25,
    skyTop: 0x1a1e46, skyMid: 0x4a3f78, skyBottom: 0xf0a06a, stars: 0.82
  },
  verdant: {
    fog: 0x1d3b2e, fogDensity: 0.0046,
    sun: 0xfff0c4, sunIntensity: 2.35, sunPos: [30, 66, -18],
    hemiSky: 0xbfe3a8, hemiGround: 0x2c4a33, hemiIntensity: 1.3,
    skyTop: 0x14324e, skyMid: 0x3f8f6a, skyBottom: 0xd6f5a8, stars: 0.22
  },
  ember: {
    fog: 0x2a1410, fogDensity: 0.0056,
    sun: 0xffb56b, sunIntensity: 2.6, sunPos: [58, 48, 20],
    hemiSky: 0xffab7a, hemiGround: 0x3a1f18, hemiIntensity: 1.1,
    skyTop: 0x241024, skyMid: 0x6b2020, skyBottom: 0xff8a4c, stars: 0.16
  },
  tide: {
    fog: 0x14344a, fogDensity: 0.0042,
    sun: 0xffe9c9, sunIntensity: 2.4, sunPos: [-42, 62, 30],
    hemiSky: 0xa9e6ff, hemiGround: 0x2e6a78, hemiIntensity: 1.35,
    skyTop: 0x123a5e, skyMid: 0x3fa8d8, skyBottom: 0xd9fbff, stars: 0.1
  },
  frost: {
    fog: 0x22384a, fogDensity: 0.005,
    sun: 0xeff6ff, sunIntensity: 2.15, sunPos: [24, 70, 40],
    hemiSky: 0xcfe9ff, hemiGround: 0x5a7a94, hemiIntensity: 1.4,
    skyTop: 0x0e2044, skyMid: 0x2e5e8e, skyBottom: 0xbff3ff, stars: 0.55
  },
  astral: {
    fog: 0x231043, fogDensity: 0.0046,
    sun: 0xd9b8ff, sunIntensity: 1.95, sunPos: [-30, 56, 34],
    hemiSky: 0xb98bff, hemiGround: 0x2c1650, hemiIntensity: 1.2,
    skyTop: 0x12082c, skyMid: 0x4a2482, skyBottom: 0xc48bff, stars: 1
  }
}

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
    this.renderer.toneMappingExposure = 1.06
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.scene = new THREE.Scene()
    this.scene.fog = new THREE.FogExp2(0x2a2436, 0.0042)
    this.camera = new THREE.PerspectiveCamera(55, globalThis.innerWidth / globalThis.innerHeight, 0.1, 400)
    this.camera.position.set(0, 9, 16)
    this.clock = new THREE.Clock()
    this.listeners = new Set()
    this.addBaseLighting(this.scene)
    this.addSky(this.scene)
    this.quality = 'high'
    this.setupComposer()
    globalThis.addEventListener('resize', () => this.resize())
    this.resize()
  }

  addBaseLighting(scene) {
    this.hemi = new THREE.HemisphereLight(0xa8c7ff, 0x55423a, 1.25)
    scene.add(this.hemi)
    this.sun = new THREE.DirectionalLight(0xffd9a0, 2.2)
    this.sun.position.set(38, 62, 26)
    this.sun.castShadow = true
    this.sun.shadow.mapSize.set(2048, 2048)
    this.sun.shadow.camera.near = 20
    this.sun.shadow.camera.far = 340
    this.sun.shadow.camera.left = -124
    this.sun.shadow.camera.right = 124
    this.sun.shadow.camera.top = 124
    this.sun.shadow.camera.bottom = -124
    this.sun.shadow.bias = -0.0016
    this.sun.shadow.normalBias = 0.5
    scene.add(this.sun)
    scene.add(this.sun.target)
    this.rim = new THREE.DirectionalLight(0x8bd4ff, 0.55)
    this.rim.position.set(-42, 25, -38)
    scene.add(this.rim)
    this.fill = new THREE.AmbientLight(0x3f4a70, 0.45)
    scene.add(this.fill)
  }

  addSky(scene) {
    const uniforms = {
      topColor: { value: new THREE.Color(0x1a1e46) },
      midColor: { value: new THREE.Color(0x4a3f78) },
      bottomColor: { value: new THREE.Color(0xf0a06a) },
      offset: { value: 18 },
      exponent: { value: 0.62 }
    }
    this.skyUniforms = uniforms
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(260, 32, 18),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
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
            float upper = smoothstep(-0.06, 0.72, h);
            float lower = smoothstep(-0.38, 0.22, h);
            vec3 color = mix(bottomColor, midColor, lower);
            color = mix(color, topColor, upper * exponent);
            gl_FragColor = vec4(color, 1.0);
          }
        `
      })
    )
    sky.userData.isSky = true
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
      new THREE.PointsMaterial({ color: 0xdde8ff, size: 0.72, transparent: true, opacity: 0.82, depthWrite: false, fog: false })
    )
    scene.add(stars)
    this.stars = stars
  }

  setupComposer() {
    try {
      this.composer = new EffectComposer(this.renderer)
      this.renderPass = new RenderPass(this.scene, this.camera)
      this.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(globalThis.innerWidth, globalThis.innerHeight),
        0.24, 0.72, 0.86
      )
      this.outputPass = new OutputPass()
      this.composer.addPass(this.renderPass)
      this.composer.addPass(this.bloomPass)
      this.composer.addPass(this.outputPass)
    } catch {
      this.composer = null
    }
  }

  resize() {
    const width = globalThis.innerWidth
    const height = globalThis.innerHeight
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height, false)
    this.composer?.setSize(width, height)
  }

  setQuality(quality) {
    this.quality = quality
    this.renderer.setPixelRatio(quality === 'low' ? 1 : Math.min(globalThis.devicePixelRatio || 1, 2))
    this.renderer.shadowMap.enabled = quality !== 'low'
    this.sun.castShadow = quality !== 'low'
    this.resize()
    onShadowMapChange(this.scene)
  }

  setAtmosphere(biome) {
    const preset = ATMOSPHERES[biome] || ATMOSPHERES.hub
    this.atmosphereTarget = preset
  }

  updateAtmosphere(dt) {
    const target = this.atmosphereTarget
    if (!target) return
    const k = 1 - Math.exp(-1.4 * dt)
    const fog = this.scene.fog
    fog.color.lerp(new THREE.Color(target.fog), k)
    fog.density += (target.fogDensity - fog.density) * k
    this.sun.color.lerp(new THREE.Color(target.sun), k)
    this.sun.intensity += (target.sunIntensity - this.sun.intensity) * k
    this.sun.position.lerp(new THREE.Vector3(...target.sunPos), k)
    this.hemi.color.lerp(new THREE.Color(target.hemiSky), k)
    this.hemi.groundColor.lerp(new THREE.Color(target.hemiGround), k)
    this.hemi.intensity += (target.hemiIntensity - this.hemi.intensity) * k
    this.skyUniforms.topColor.value.lerp(new THREE.Color(target.skyTop), k)
    this.skyUniforms.midColor.value.lerp(new THREE.Color(target.skyMid), k)
    this.skyUniforms.bottomColor.value.lerp(new THREE.Color(target.skyBottom), k)
    this.stars.material.opacity += ((target.stars ?? 0.8) - this.stars.material.opacity) * k
    this.fill.intensity += (0.45 - this.fill.intensity) * k
    this.rim.intensity += (0.55 - this.rim.intensity) * k
  }

  onFrame(callback) {
    this.listeners.add(callback)
    return () => this.listeners.delete(callback)
  }

  render(scene = this.scene) {
    if (this.composer && this.quality !== 'low') {
      this.renderPass.scene = scene
      this.composer.render()
    } else {
      this.renderer.render(scene, this.camera)
    }
  }

  start(update) {
    const loop = () => {
      const dt = Math.min(0.05, this.clock.getDelta())
      update(dt, this.clock.elapsedTime)
    }
    this.renderer.setAnimationLoop(loop)
  }
}

function onShadowMapChange(scene) {
  scene.traverse((object) => {
    if (object.material) object.material.needsUpdate = true
  })
}
