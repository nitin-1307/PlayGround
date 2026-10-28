import * as THREE from 'three'
import { BIOMES, BIOME_ORDER, getBiome } from '../data/types.js'
import { seededRng, range, intRange, pick } from '../core/rng.js'

const WORLD_RADIUS = 122
const PLAY_RADIUS = 112

const BIOME_PROP_COUNTS = {
  verdant: { trees: 20, rocks: 10, special: 8, grass: 420, flowers: 110 },
  ember: { spires: 14, rocks: 12, pools: 4, grass: 0, flowers: 0 },
  tide: { corals: 16, rocks: 8, pools: 3, grass: 120, flowers: 40 },
  frost: { pines: 16, rocks: 9, spikes: 12, grass: 90, flowers: 0 },
  astral: { crystals: 18, rocks: 8, floaters: 7, grass: 60, flowers: 30 }
}

const LANDMARKS = {
  'root-shrine': { id: 'root-shrine', biome: 'verdant', name: 'Root Shrine', position: [12, -66], color: '#9cff8a', radius: 7 },
  'warm-gate': { id: 'warm-gate', biome: 'ember', name: 'Warm Gate', position: [68, -8], color: '#ffb35c', radius: 7 },
  'shell-spire': { id: 'shell-spire', biome: 'tide', name: 'Shell Spire', position: [-70, -4], color: '#9be8ff', radius: 7 },
  'ice-obelisk': { id: 'ice-obelisk', biome: 'frost', name: 'Ice Obelisk', position: [42, 86], color: '#e8fbff', radius: 7 },
  'crystal-ring': { id: 'crystal-ring', biome: 'astral', name: 'Crystal Ring', position: [-48, 88], color: '#f5c8ff', radius: 8 }
}

const PATHS = BIOME_ORDER.map((biome) => ({ biome, center: BIOMES[biome].center }))

export function smoothstep(edge0, edge1, value) {
  const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)))
  return t * t * (3 - 2 * t)
}

export function terrainHeight(x, z) {
  const distance = Math.hypot(x, z)
  let height = Math.sin(x * 0.047) * Math.cos(z * 0.041) * 1.1
  height += Math.sin(x * 0.11 + z * 0.07) * 0.45
  height += Math.cos(z * 0.09 - x * 0.03) * 0.42
  height += Math.sin(x * 0.021 - z * 0.019) * 0.9
  const hubFlatten = smoothstep(18, 36, distance)
  height *= hubFlatten
  for (const biome of BIOME_ORDER) {
    const [cx, cz] = BIOMES[biome].center
    const d = Math.hypot(x - cx, z - cz)
    const radius = BIOMES[biome].radius
    const flat = 1 - smoothstep(radius * 0.28, radius * 1.02, d)
    if (flat > 0) height = height * (1 - flat * 0.82) + Math.sin(d * 0.14) * 0.18 * flat
  }
  height += smoothstep(98, WORLD_RADIUS, distance) * 11
  return height
}

function pathDistance(x, z) {
  let closest = Infinity
  for (const path of PATHS) {
    const [cx, cz] = path.center
    const dx = cx
    const dz = cz
    const length = Math.hypot(dx, dz)
    const t = Math.max(0, Math.min(1, (x * dx + z * dz) / (length * length)))
    const px = dx * t
    const pz = dz * t
    closest = Math.min(closest, Math.hypot(x - px, z - pz))
  }
  return closest
}

function biomeAtRaw(x, z) {
  const distance = Math.hypot(x, z)
  if (distance < 24) return 'hub'
  let best = 'verdant'
  let bestScore = Infinity
  for (const biome of BIOME_ORDER) {
    const [cx, cz] = BIOMES[biome].center
    const score = Math.hypot(x - cx, z - cz) / BIOMES[biome].radius
    if (score < bestScore) {
      bestScore = score
      best = biome
    }
  }
  return best
}

export function biomeAt(x, z) {
  return biomeAtRaw(x, z)
}

function biomeColor(x, z) {
  const id = biomeAtRaw(x, z)
  const biome = BIOMES[id]
  const color = new THREE.Color(biome.ground)
  const distance = Math.hypot(x, z)
  const hubBlend = 1 - smoothstep(20, 34, distance)
  if (id !== 'hub' && hubBlend > 0) color.lerp(new THREE.Color(BIOMES.hub.ground), hubBlend * 0.65)
  const noise = Math.sin(x * 0.31 + z * 0.17) * 0.03 + Math.cos(z * 0.23 - x * 0.13) * 0.025
  color.offsetHSL(noise * 0.18, 0, noise)
  return color
}

function mat(color, options = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    flatShading: true,
    roughness: options.roughness ?? 0.86,
    metalness: options.metalness ?? 0.02,
    emissive: options.emissive || 0x000000,
    emissiveIntensity: options.emissiveIntensity || 0,
    transparent: Boolean(options.transparent),
    opacity: options.opacity ?? 1,
    side: options.side || THREE.FrontSide,
    depthWrite: options.depthWrite ?? true
  })
}

function add(group, geometry, material, position, scale = [1, 1, 1], rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(...position)
  mesh.scale.set(...scale)
  mesh.rotation.set(...rotation)
  group.add(mesh)
  return mesh
}

function makeTextSprite(text, color = '#ffe9b8') {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 128
  const context = canvas.getContext('2d')
  context.fillStyle = 'rgba(11,15,24,0.72)'
  context.beginPath()
  context.roundRect(8, 20, 496, 88, 24)
  context.fill()
  context.strokeStyle = color
  context.lineWidth = 4
  context.stroke()
  context.font = 'bold 44px "Trebuchet MS", sans-serif'
  context.fillStyle = color
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillText(text, 256, 66)
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }))
  sprite.scale.set(2.45, 0.6125, 1)
  return sprite
}

export class World {
  constructor(scene, quality = 'high') {
    this.scene = scene
    this.quality = quality
    this.root = new THREE.Group()
    scene.add(this.root)
    this.obstacles = []
    this.hazards = []
    this.interactables = []
    this.landmarks = Object.values(LANDMARKS)
    this.animated = []
    this.particles = []
    this.floating = []
    this.materials = {}
    this.buildTerrain()
    this.buildPaths()
    this.buildHub()
    this.buildBiomes()
    this.buildLandmarks()
    this.buildOuterRim()
  }

  buildTerrain() {
    const geometry = new THREE.PlaneGeometry(260, 260, 112, 112)
    geometry.rotateX(-Math.PI / 2)
    const position = geometry.attributes.position
    const colors = new Float32Array(position.count * 3)
    const color = new THREE.Color()
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i)
      const z = position.getZ(i)
      position.setY(i, terrainHeight(x, z))
      color.copy(biomeColor(x, z))
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.computeVertexNormals()
    const terrain = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 0.95,
      metalness: 0.02
    }))
    this.root.add(terrain)
    this.terrain = terrain

    const ocean = new THREE.Mesh(
      new THREE.CircleGeometry(330, 64),
      mat('#163b52', { roughness: 0.22, metalness: 0.35, transparent: true, opacity: 0.92 })
    )
    ocean.rotation.x = -Math.PI / 2
    ocean.position.y = -2.6
    this.root.add(ocean)
    this.ocean = ocean

    const underwaterHaze = new THREE.Mesh(
      new THREE.RingGeometry(WORLD_RADIUS - 2, 230, 64),
      mat('#2a7c93', { transparent: true, opacity: 0.28, roughness: 0.3, metalness: 0.1 })
    )
    underwaterHaze.rotation.x = -Math.PI / 2
    underwaterHaze.position.y = -0.8
    this.root.add(underwaterHaze)
  }

  buildPaths() {
    for (const { biome, center } of PATHS) {
      const [cx, cz] = center
      const scatter = 3.8
      const points = []
      const steps = 34
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const x = cx * t + Math.sin(t * 8 + cx) * scatter * t * (1 - t)
        const z = cz * t + Math.cos(t * 7 + cz) * scatter * t * (1 - t)
        points.push([x, z])
      }
      const width = 3.4
      const vertices = []
      const indices = []
      const colors = []
      const biomeColorValue = new THREE.Color(BIOMES[biome].accent)
      for (let i = 0; i < points.length; i++) {
        const [x, z] = points[i]
        const prev = points[Math.max(0, i - 1)]
        const next = points[Math.min(points.length - 1, i + 1)]
        const dx = next[0] - prev[0]
        const dz = next[1] - prev[1]
        const len = Math.hypot(dx, dz) || 1
        const nx = -dz / len
        const nz = dx / len
        for (const side of [-1, 1]) {
          const px = x + nx * width * side
          const pz = z + nz * width * side
          const y = terrainHeight(px, pz) + 0.09
          vertices.push(px, y, pz)
          const tone = 0.55 + (i % 3) * 0.04
          colors.push(tone, tone * 0.88, tone * 0.64)
        }
        if (i < points.length - 1) {
          const base = i * 2
          indices.push(base, base + 1, base + 2, base + 1, base + 3, base + 2)
        }
      }
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
      geometry.setIndex(indices)
      geometry.computeVertexNormals()
      const path = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        vertexColors: true,
        flatShading: true,
        roughness: 0.9,
        metalness: 0.04
      }))
      this.root.add(path)
      for (let i = 6; i < points.length - 2; i += 7) {
        const [x, z] = points[i]
        this.addPathLantern(x, z, biomeColorValue)
      }
    }
  }

  addPathLantern(x, z, color) {
    const y = terrainHeight(x, z)
    const post = add(this.root, new THREE.CylinderGeometry(0.08, 0.11, 1.7, 5), mat('#4b4042'), [x, y + 0.85, z])
    post.castShadow = false
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 8, 6),
      mat(color, { emissive: color, emissiveIntensity: 1.2, roughness: 0.4 })
    )
    glow.position.set(x, y + 1.74, z)
    this.root.add(glow)
    const light = new THREE.PointLight(color, 0.9, 7, 2)
    light.position.set(x, y + 1.9, z)
    this.root.add(light)
  }

  buildHub() {
    const hub = new THREE.Group()
    this.root.add(hub)
    const ground = new THREE.Mesh(
      new THREE.CylinderGeometry(23, 24, 0.5, 48),
      mat('#b9a27c', { roughness: 0.9 })
    )
    ground.position.y = 0.0
    hub.add(ground)
    const inner = new THREE.Mesh(
      new THREE.CylinderGeometry(12.5, 13, 0.54, 40),
      mat('#d8c29b', { roughness: 0.82 })
    )
    inner.position.y = 0.03
    hub.add(inner)
    const star = new THREE.Mesh(
      new THREE.CylinderGeometry(5.2, 5.4, 0.58, 8),
      mat('#f3d79f', { roughness: 0.6, metalness: 0.15 })
    )
    star.position.y = 0.06
    hub.add(star)

    // Low stone ring and planter beds.
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2
      add(hub, new THREE.BoxGeometry(3.4, 0.5, 0.75), mat(i % 2 ? '#8e7b63' : '#9d896e'), [Math.cos(angle) * 16.5, 0.38, Math.sin(angle) * 16.5], [1, 1, 1], [0, -angle, 0])
    }
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + 0.4
      const x = Math.cos(angle) * 12
      const z = Math.sin(angle) * 12
      const planter = add(hub, new THREE.CylinderGeometry(1.2, 1.4, 0.65, 8), mat('#6d5847'), [x, 0.34, z])
      planter.rotation.y = angle
      for (let f = 0; f < 5; f++) {
        const fx = x + Math.cos(f * 2.1) * 0.55
        const fz = z + Math.sin(f * 2.1) * 0.55
        add(hub, new THREE.IcosahedronGeometry(0.22, 0), mat('#7fd86c', { emissive: '#3f8f4a', emissiveIntensity: 0.08 }), [fx, 0.85, fz])
      }
    }

    this.buildFountain(hub, -6.5, -2.5)
    this.buildShop(hub, 9.5, 5.5)
    this.buildTreadmillStation(hub, 9.5, -8.5)
    this.buildQuestBoard(hub, -9.5, 6.5)
    this.buildGuide(hub, 0, 8.5)
    this.buildPracticeRing(hub, -3.5, -13)
    this.buildArch(hub, 0, -20, 'verdant')
    this.buildArch(hub, 20, -4, 'ember')
    this.buildArch(hub, -20, -3, 'tide')
    this.buildArch(hub, 13, 18, 'frost')
    this.buildArch(hub, -14, 17, 'astral')

    this.interactables.push({
      id: 'guide', type: 'guide', label: 'Talk to Guide Wren', position: new THREE.Vector3(0, terrainHeight(0, 8.5), 8.5), radius: 3.4
    })
    this.interactables.push({
      id: 'shop', type: 'shop', label: 'Browse Ember & Elm Supplies', position: new THREE.Vector3(9.5, terrainHeight(9.5, 5.5), 5.5), radius: 3.6
    })
    this.interactables.push({
      id: 'treadmill', type: 'training', label: 'Use the Treadmills', position: new THREE.Vector3(9.5, terrainHeight(9.5, -8.5), -8.5), radius: 4
    })
    this.interactables.push({
      id: 'questboard', type: 'quests', label: 'Read the Quest Board', position: new THREE.Vector3(-9.5, terrainHeight(-9.5, 6.5), 6.5), radius: 3.4
    })
    this.interactables.push({
      id: 'fountain', type: 'heal', label: 'Rest at the Starwell', position: new THREE.Vector3(-6.5, terrainHeight(-6.5, -2.5), -2.5), radius: 3.8
    })
    this.interactables.push({
      id: 'practice', type: 'practice', label: 'Enter the Practice Ring', position: new THREE.Vector3(-3.5, terrainHeight(-3.5, -13), -13), radius: 3.6
    })
  }

  buildFountain(group, x, z) {
    const base = add(group, new THREE.CylinderGeometry(2.6, 2.9, 0.9, 12), mat('#8f8069'), [x, 0.45, z])
    const water = new THREE.Mesh(
      new THREE.CylinderGeometry(2.15, 2.15, 0.12, 24),
      mat('#58d8ff', { emissive: '#39b7e8', emissiveIntensity: 0.35, transparent: true, opacity: 0.8, roughness: 0.16 })
    )
    water.position.set(x, 0.94, z)
    group.add(water)
    this.animated.push({ type: 'spin', mesh: water, speed: 0.16 })
    const pillar = add(group, new THREE.CylinderGeometry(0.34, 0.46, 2.6, 8), mat('#b6a88b'), [x, 1.9, z])
    const orb = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.58, 1),
      mat('#9be8ff', { emissive: '#5fc8ff', emissiveIntensity: 1.1, transparent: true, opacity: 0.92 })
    )
    orb.position.set(x, 3.35, z)
    group.add(orb)
    this.animated.push({ type: 'bob', mesh: orb, baseY: 3.35, amplitude: 0.16, speed: 1.7 })
    const light = new THREE.PointLight(0x5fc8ff, 2.2, 14, 2)
    light.position.set(x, 3.4, z)
    group.add(light)
    const rings = []
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2.4 + i * 0.25, 0.02, 6, 40),
        mat('#a9edff', { emissive: '#5fc8ff', emissiveIntensity: 0.5, transparent: true, opacity: 0.35 - i * 0.07 })
      )
      ring.rotation.x = Math.PI / 2
      ring.position.set(x, 1.0 + i * 0.05, z)
      group.add(ring)
      rings.push(ring)
    }
    this.animated.push({ type: 'rings', meshes: rings, center: [x, z] })
    this.obstacles.push({ x, z, r: 2.9 })
  }

  buildShop(group, x, z) {
    const y = terrainHeight(x, z)
    const stall = new THREE.Group()
    stall.position.set(x, y, z)
    stall.rotation.y = -0.4
    group.add(stall)
    add(stall, new THREE.BoxGeometry(4.6, 0.35, 3.2), mat('#7b5a40'), [0, 1.0, 0])
    add(stall, new THREE.BoxGeometry(4.4, 2.0, 0.2), mat('#5c4433'), [0, 2.0, -1.4])
    for (const side of [-1, 1]) {
      add(stall, new THREE.CylinderGeometry(0.1, 0.12, 2.4, 5), mat('#6b4a35'), [side * 2.05, 2.1, 1.4])
    }
    for (let i = 0; i < 5; i++) {
      add(stall, new THREE.BoxGeometry(0.9, 0.12, 3.5), mat(i % 2 ? '#d4814f' : '#f0c07b'), [-1.8 + i * 0.9, 3.2, 0], [1, 1, 1], [0, 0, 0])
    }
    // Goods: discs, jars, and rolled cloth.
    for (let i = 0; i < 4; i++) {
      add(stall, new THREE.CylinderGeometry(0.22, 0.22, 0.1, 8), mat(['#9fe7ff', '#c08bff', '#63c96b', '#ffd166'][i], { emissive: ['#9fe7ff', '#c08bff', '#63c96b', '#ffd166'][i], emissiveIntensity: 0.12 }), [-1.4 + i * 0.85, 1.27, 0.4])
    }
    const keeper = this.makeNpc('#d18b5f', '#48556c', 'shopkeeper')
    keeper.position.set(x + 1.4, y, z - 0.4)
    keeper.rotation.y = 2.5
    group.add(keeper)
    this.animated.push({ type: 'npc', group: keeper, baseY: y })
    const sign = makeTextSprite('EMBER & ELM', '#ffd166')
    sign.position.set(x, y + 4.4, z)
    group.add(sign)
    this.obstacles.push({ x, z, r: 2.8 })
  }

  buildTreadmillStation(group, x, z) {
    const y = terrainHeight(x, z)
    const station = new THREE.Group()
    station.position.set(x, y, z)
    group.add(station)
    add(station, new THREE.CylinderGeometry(5.4, 5.8, 0.4, 10), mat('#85705b'), [0, 0.2, 0])
    add(station, new THREE.BoxGeometry(8, 0.3, 4.6), mat('#5c4a3d'), [0, 0.45, -0.5])
    for (const [index, offset] of [-1.8, 1.8].entries()) {
      const frame = new THREE.Group()
      frame.position.set(offset, 0.65, -0.5)
      add(frame, new THREE.BoxGeometry(2.8, 0.28, 1.6), mat('#3d4652'), [0, 0, 0])
      for (let r = 0; r < 4; r++) {
        const roller = add(frame, new THREE.CylinderGeometry(0.18, 0.18, 2.4, 8), mat('#aeb7bd', { metalness: 0.45, roughness: 0.45 }), [0, 0.18, -0.6 + r * 0.4], [1, 1, 1], [0, 0, Math.PI / 2])
        roller.rotation.z = Math.PI / 2
      }
      add(frame, new THREE.BoxGeometry(0.18, 1.1, 0.18), mat('#d4814f'), [-1.2, 0.8, -0.6])
      add(frame, new THREE.BoxGeometry(0.18, 1.1, 0.18), mat('#d4814f'), [1.2, 0.8, -0.6])
      const pad = add(frame, new THREE.BoxGeometry(2.2, 0.08, 0.6), mat('#ffd166', { emissive: '#ffd166', emissiveIntensity: 0.2 }), [0, 0.5, 0.55])
      pad.rotation.x = -0.35
      station.add(frame)
      this.animated.push({ type: 'treadmill', group: frame, offset: index })
    }
    const attendant = this.makeNpc('#8bbf74', '#d9b56c', 'attendant')
    attendant.position.set(x + 3.4, y, z + 2)
    attendant.rotation.y = -2.3
    group.add(attendant)
    this.animated.push({ type: 'npc', group: attendant, baseY: y })
    const sign = makeTextSprite('TRAINING YARD', '#9be8ff')
    sign.position.set(x, y + 4.0, z)
    group.add(sign)
    this.obstacles.push({ x, z, r: 4.1 })
  }

  buildQuestBoard(group, x, z) {
    const y = terrainHeight(x, z)
    const board = new THREE.Group()
    board.position.set(x, y, z)
    board.rotation.y = 0.4
    group.add(board)
    add(board, new THREE.BoxGeometry(3.6, 2.4, 0.26), mat('#6d5038'), [0, 1.9, 0])
    add(board, new THREE.BoxGeometry(3.2, 2.0, 0.1), mat('#8c6a49'), [0, 1.9, 0.17])
    for (const side of [-1, 1]) add(board, new THREE.CylinderGeometry(0.14, 0.18, 3.4, 5), mat('#513a28'), [side * 1.5, 1.4, 0])
    for (let i = 0; i < 3; i++) {
      add(board, new THREE.BoxGeometry(0.7, 0.48, 0.05), mat('#e8d7ae'), [-0.9 + i * 0.9, 2.2 - (i % 2) * 0.4, 0.25], [1, 1, 1], [0, 0, (i - 1) * 0.05])
    }
    const sign = makeTextSprite('BOUNTIES', '#ffd166')
    sign.position.set(x, y + 3.9, z)
    group.add(sign)
    this.obstacles.push({ x, z, r: 2.2 })
  }

  buildGuide(group, x, z) {
    const y = terrainHeight(x, z)
    const guide = new THREE.Group()
    guide.position.set(x, y, z)
    group.add(guide)
    const robe = add(guide, new THREE.ConeGeometry(0.62, 1.8, 7), mat('#6b7bd8'), [0, 0.9, 0])
    const head = add(guide, new THREE.IcosahedronGeometry(0.4, 1), mat('#f1c9a5'), [0, 1.95, 0])
    add(guide, new THREE.ConeGeometry(0.48, 1.0, 5), mat('#4853a3'), [0, 2.3, -0.05], [1, 1, 1], [0, 0, 0])
    const staff = add(guide, new THREE.CylinderGeometry(0.045, 0.06, 2.2, 5), mat('#a88c60'), [0.55, 1.15, 0.1], [1, 1, 1], [0, 0, -0.12])
    const orb = add(guide, new THREE.IcosahedronGeometry(0.22, 1), mat('#a9edff', { emissive: '#5fc8ff', emissiveIntensity: 1.0 }), [0.68, 2.25, 0.15])
    this.animated.push({ type: 'bob', mesh: orb, baseY: y + 2.25, amplitude: 0.12, speed: 2 })
    this.animated.push({ type: 'npc', group: guide, baseY: y })
    const sign = makeTextSprite('GUIDE WREN', '#9be8ff')
    sign.position.set(x, y + 3.2, z)
    group.add(sign)
    this.obstacles.push({ x, z, r: 1.0 })
  }

  buildPracticeRing(group, x, z) {
    const y = terrainHeight(x, z)
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(4.2, 0.16, 8, 48),
      mat('#9be8ff', { emissive: '#5fc8ff', emissiveIntensity: 0.6, roughness: 0.4 })
    )
    ring.rotation.x = Math.PI / 2
    ring.position.set(x, y + 0.25, z)
    group.add(ring)
    this.animated.push({ type: 'spin', mesh: ring, speed: 0.18 })
    const sign = makeTextSprite('PRACTICE RING', '#9be8ff')
    sign.position.set(x, y + 2.7, z)
    group.add(sign)
  }

  buildArch(group, x, z, biome) {
    const y = terrainHeight(x, z)
    const color = BIOMES[biome].accent
    const arch = new THREE.Group()
    arch.position.set(x, y, z)
    arch.rotation.y = Math.atan2(-x, -z) + Math.PI
    group.add(arch)
    for (const side of [-1, 1]) {
      add(arch, new THREE.CylinderGeometry(0.38, 0.58, 6.8, 5), mat('#75675a'), [side * 3.1, 3.4, 0])
      add(arch, new THREE.ConeGeometry(0.72, 1.2, 4), mat(color, { emissive: color, emissiveIntensity: 0.22 }), [side * 3.1, 7.2, 0])
    }
    add(arch, new THREE.BoxGeometry(7.0, 0.5, 0.6), mat('#75675a'), [0, 6.7, 0])
    const banner = add(arch, new THREE.BoxGeometry(3.6, 1.0, 0.12), mat(color, { emissive: color, emissiveIntensity: 0.15 }), [0, 5.7, 0.35])
    banner.rotation.z = 0.02
    this.obstacles.push({ x: x - 3.1 * Math.cos(arch.rotation.y), z: z + 3.1 * Math.sin(arch.rotation.y), r: 0.8 })
    this.obstacles.push({ x: x + 3.1 * Math.cos(arch.rotation.y), z: z - 3.1 * Math.sin(arch.rotation.y), r: 0.8 })
  }

  makeNpc(primary, secondary, role) {
    const group = new THREE.Group()
    add(group, new THREE.ConeGeometry(0.46, 1.5, 7), mat(primary), [0, 0.75, 0])
    add(group, new THREE.IcosahedronGeometry(0.34, 1), mat('#f1c9a5'), [0, 1.55, 0])
    add(group, new THREE.ConeGeometry(0.4, 0.55, 5), mat(secondary), [0, 1.79, -0.05])
    add(group, new THREE.CylinderGeometry(0.07, 0.09, 1.0, 4), mat(secondary), [-0.36, 1.0, 0], [1, 1, 1], [0, 0, 0.18])
    add(group, new THREE.CylinderGeometry(0.07, 0.09, 1.0, 4), mat(secondary), [0.36, 1.0, 0], [1, 1, 1], [0, 0, -0.18])
    group.userData.role = role
    return group
  }

  buildBiomes() {
    for (const biome of BIOME_ORDER) {
      const rng = seededRng(`biome-${biome}-v3`)
      const center = BIOMES[biome].center
      const radius = BIOMES[biome].radius
      const counts = BIOME_PROP_COUNTS[biome]
      const isBlocked = (x, z, min = 5) => this.isBlocked(x, z, min)
      const sample = (offset = 0) => {
        const angle = rng() * Math.PI * 2
        const distance = radius * (0.32 + rng() * 0.62)
        return [center[0] + Math.cos(angle) * distance, center[1] + Math.sin(angle) * distance]
      }
      if (biome === 'verdant') {
        for (let i = 0; i < counts.trees; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 6)) continue
          this.addTree(x, z, rng, 'verdant')
        }
        for (let i = 0; i < counts.rocks; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 4)) continue
          this.addRock(x, z, rng, '#6e8060', 0.6 + rng() * 0.7)
        }
        for (let i = 0; i < counts.special; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 3)) continue
          this.addMushroom(x, z, rng)
        }
        this.addGrassInstances(center, radius, counts.grass, '#5cc45f', rng)
        this.addFlowerInstances(center, radius, counts.flowers, rng)
        this.addPond(center[0] - 14, center[1] + 10, 6.5, '#3f9bff')
        this.addStream()
      } else if (biome === 'ember') {
        for (let i = 0; i < counts.spires; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 5)) continue
          this.addBasaltSpire(x, z, rng)
        }
        for (let i = 0; i < counts.rocks; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 4)) continue
          this.addRock(x, z, rng, '#463c3a', 0.7 + rng() * 0.8)
        }
        for (let i = 0; i < counts.pools; i++) {
          const [x, z] = sample(7)
          this.addLavaPool(x, z, 3.2 + rng() * 2.4)
        }
        this.addEmberParticles(rng)
      } else if (biome === 'tide') {
        for (let i = 0; i < counts.corals; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 4)) continue
          this.addCoral(x, z, rng)
        }
        for (let i = 0; i < counts.rocks; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 4)) continue
          this.addRock(x, z, rng, '#8b9b9c', 0.55 + rng() * 0.55)
        }
        for (let i = 0; i < counts.pools; i++) {
          const [x, z] = sample(8)
          this.addPond(x, z, 5 + rng() * 3, '#49c7e8')
        }
        this.addGrassInstances(center, radius, counts.grass, '#5b9f8a', rng)
        this.addFlowerInstances(center, radius, counts.flowers, rng, true)
        this.addShellProps(center, radius, rng)
      } else if (biome === 'frost') {
        for (let i = 0; i < counts.pines; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 5)) continue
          this.addPine(x, z, rng)
        }
        for (let i = 0; i < counts.rocks; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 4)) continue
          this.addRock(x, z, rng, '#9fbdc9', 0.6 + rng() * 0.8)
        }
        for (let i = 0; i < counts.spikes; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 4)) continue
          this.addIceSpike(x, z, rng)
        }
        this.addPond(center[0] - 13, center[1] - 8, 6, '#9be8ff', true)
        this.addGrassInstances(center, radius, counts.grass, '#e8fbff', rng)
        this.addSnowParticles(rng)
      } else if (biome === 'astral') {
        for (let i = 0; i < counts.crystals; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 4)) continue
          this.addCrystal(x, z, rng)
        }
        for (let i = 0; i < counts.rocks; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 4)) continue
          this.addRock(x, z, rng, '#62517a', 0.6 + rng() * 0.7)
        }
        for (let i = 0; i < counts.floaters; i++) {
          const [x, z] = sample()
          if (isBlocked(x, z, 4)) continue
          this.addFloatingRock(x, z, rng)
        }
        this.addGrassInstances(center, radius, counts.grass, '#b98bff', rng)
        this.addFlowerInstances(center, radius, counts.flowers, rng, false, true)
      }
    }
    // Outer wilds filler.
    const fillerRng = seededRng('outer-filler-v2')
    for (let i = 0; i < 28; i++) {
      const angle = fillerRng() * Math.PI * 2
      const distance = 52 + fillerRng() * 55
      const x = Math.cos(angle) * distance
      const z = Math.sin(angle) * distance
      if (this.isBlocked(x, z, 6) || pathDistance(x, z) < 7) continue
      if (fillerRng() > 0.55) this.addRock(x, z, fillerRng, '#66715f', 0.8 + fillerRng())
      else this.addTree(x, z, fillerRng, 'verdant')
    }
  }

  buildLandmarks() {
    for (const landmark of this.landmarks) {
      const [x, z] = landmark.position
      const y = terrainHeight(x, z)
      if (landmark.id === 'root-shrine') this.buildRootShrine(x, y, z)
      if (landmark.id === 'warm-gate') this.buildWarmGate(x, y, z)
      if (landmark.id === 'shell-spire') this.buildShellSpire(x, y, z)
      if (landmark.id === 'ice-obelisk') this.buildIceObelisk(x, y, z)
      if (landmark.id === 'crystal-ring') this.buildCrystalRing(x, y, z)
      this.interactables.push({
        id: `landmark-${landmark.id}`,
        type: 'landmark',
        label: `Inspect ${landmark.name}`,
        landmark: landmark.id,
        biome: landmark.biome,
        position: new THREE.Vector3(x, y, z),
        radius: landmark.radius
      })
    }
  }

  buildRootShrine(x, y, z) {
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2
      const root = add(group, new THREE.CylinderGeometry(0.36, 0.7, 3.5, 5), mat('#5f4a33'), [Math.cos(angle) * 2.2, 1.7, Math.sin(angle) * 2.2], [1, 1, 1], [Math.cos(angle) * 0.3, 0, Math.sin(angle) * 0.3])
      root.rotation.z = Math.sin(angle) * 0.2
    }
    const altar = add(group, new THREE.CylinderGeometry(2.2, 2.6, 0.7, 8), mat('#7c8f66'), [0, 0.35, 0])
    const orb = add(group, new THREE.IcosahedronGeometry(0.8, 1), mat('#a7ff8f', { emissive: '#63c96b', emissiveIntensity: 1.0, transparent: true, opacity: 0.9 }), [0, 2.7, 0])
    this.animated.push({ type: 'bob', mesh: orb, baseY: y + 2.7, amplitude: 0.18, speed: 1.2 })
    this.animated.push({ type: 'spin', mesh: orb, speed: 0.22 })
    this.obstacles.push({ x, z, r: 2.4 })
    const sign = makeTextSprite('ROOT SHRINE', '#9cff8a')
    sign.position.set(x, y + 5.2, z)
    this.root.add(sign)
  }

  buildWarmGate(x, y, z) {
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    for (let i = 0; i < 2; i++) {
      const angle = i ? 0.8 : -0.8
      add(group, new THREE.BoxGeometry(1.3, 5.8, 1.3), mat('#44312f'), [Math.sin(angle) * 3.2, 2.9, Math.cos(angle) * 0.2], [1, 1, 1], [0, angle, 0])
    }
    add(group, new THREE.BoxGeometry(7, 0.9, 1.2), mat('#4f3732'), [0, 5.6, 0])
    const curtain = add(group, new THREE.PlaneGeometry(4.2, 4.2), mat('#ff8a4c', { emissive: '#ff5e2c', emissiveIntensity: 1.2, transparent: true, opacity: 0.55, side: THREE.DoubleSide }), [0, 3.1, 0])
    this.animated.push({ type: 'flicker', mesh: curtain, base: 0.55 })
    const light = new THREE.PointLight(0xff7a45, 2.4, 12, 2)
    light.position.set(x, y + 3.2, z)
    this.root.add(light)
    this.obstacles.push({ x: x - 2.6, z, r: 1.0 })
    this.obstacles.push({ x: x + 2.6, z, r: 1.0 })
    const sign = makeTextSprite('WARM GATE', '#ffb35c')
    sign.position.set(x, y + 6.7, z)
    this.root.add(sign)
  }

  buildShellSpire(x, y, z) {
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    let currentY = 0
    for (let i = 0; i < 6; i++) {
      const radius = 2.7 - i * 0.34
      const height = 1.2
      const shell = add(group, new THREE.CylinderGeometry(radius * 0.8, radius, height, 12), mat(i % 2 ? '#f1d9c2' : '#e7bea6'), [0, currentY + height / 2, 0])
      shell.rotation.y = i * 0.3
      currentY += height
    }
    const spiral = add(group, new THREE.TorusGeometry(2.5, 0.16, 6, 36), mat('#9be8ff', { emissive: '#4fcfff', emissiveIntensity: 0.6 }), [0, 2.4, 0], [1, 1, 1], [Math.PI / 2, 0, 0])
    this.animated.push({ type: 'spin', mesh: spiral, speed: 0.3 })
    this.obstacles.push({ x, z, r: 3.0 })
    const sign = makeTextSprite('SHELL SPIRE', '#9be8ff')
    sign.position.set(x, y + 10.2, z)
    this.root.add(sign)
  }

  buildIceObelisk(x, y, z) {
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    for (const offset of [-2.1, 0, 2.1]) {
      const height = offset === 0 ? 9.5 : 5.4
      add(group, new THREE.ConeGeometry(offset === 0 ? 1.25 : 0.8, height, 5), mat('#bff3ff', { emissive: '#67cfff', emissiveIntensity: 0.24, transparent: true, opacity: 0.85, roughness: 0.18 }), [offset, height / 2, 0])
    }
    add(group, new THREE.CylinderGeometry(3.5, 3.9, 0.65, 9), mat('#d8eef5'), [0, 0.32, 0])
    const light = new THREE.PointLight(0x7ad9ff, 2.4, 16, 2)
    light.position.set(x, y + 7, z)
    this.root.add(light)
    this.obstacles.push({ x, z, r: 3.4 })
    const sign = makeTextSprite('ICE OBELISK', '#e8fbff')
    sign.position.set(x, y + 11.4, z)
    this.root.add(sign)
  }

  buildCrystalRing(x, y, z) {
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    for (let i = 0; i < 9; i++) {
      const angle = (i / 9) * Math.PI * 2
      const height = 4 + (i % 3) * 1.8
      const crystal = add(group, new THREE.ConeGeometry(0.7, height, 5), mat('#e2bdff', { emissive: '#c08bff', emissiveIntensity: 0.5, transparent: true, opacity: 0.88, roughness: 0.2 }), [Math.cos(angle) * 6.5, height / 2, Math.sin(angle) * 6.5], [1, 1, 1], [Math.cos(angle) * 0.12, 0, Math.sin(angle) * 0.12])
      this.obstacles.push({ x: x + Math.cos(angle) * 6.5, z: z + Math.sin(angle) * 6.5, r: 0.8 })
    }
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(1.7, 2.4, 16, 12, 1, true),
      mat('#d5a8ff', { emissive: '#b46bff', emissiveIntensity: 0.8, transparent: true, opacity: 0.18, side: THREE.DoubleSide })
    )
    beam.position.y = 8
    group.add(beam)
    this.animated.push({ type: 'flicker', mesh: beam, base: 0.18 })
    const light = new THREE.PointLight(0xc08bff, 3.2, 22, 2)
    light.position.set(x, y + 6, z)
    this.root.add(light)
    const sign = makeTextSprite('CRYSTAL RING', '#f5c8ff')
    sign.position.set(x, y + 15, z)
    this.root.add(sign)
  }

  buildOuterRim() {
    const rng = seededRng('outer-rim-v2')
    for (let i = 0; i < 64; i++) {
      const angle = (i / 64) * Math.PI * 2
      const distance = WORLD_RADIUS + rng() * 8
      const x = Math.cos(angle) * distance
      const z = Math.sin(angle) * distance
      const height = 4 + rng() * 9
      const rock = add(this.root, new THREE.DodecahedronGeometry(height * 0.55, 0), mat('#5c5b63'), [x, terrainHeight(x, z) + height * 0.3, z], [1, 1 + rng() * 0.5, 1], [0, rng() * Math.PI, 0])
      this.obstacles.push({ x, z, r: height * 0.45 })
    }
  }

  addTree(x, z, rng, type) {
    const y = terrainHeight(x, z)
    const scale = 0.85 + rng() * 0.8
    const group = new THREE.Group()
    group.position.set(x, y, z)
    group.rotation.y = rng() * Math.PI * 2
    this.root.add(group)
    add(group, new THREE.CylinderGeometry(0.22 * scale, 0.42 * scale, 2.7 * scale, 5), mat('#6b5138'), [0, 1.35 * scale, 0])
    const palette = type === 'verdant' ? ['#4b9e4d', '#63c96b', '#88e07d'] : ['#557a58', '#6b9b66', '#8cb879']
    for (let i = 0; i < 4; i++) {
      const leaf = add(group, new THREE.IcosahedronGeometry((1.1 - i * 0.16) * scale, 0), mat(palette[i % palette.length]), [Math.cos(i * 2.3) * 0.5 * scale, (2.8 + i * 0.66) * scale, Math.sin(i * 2.3) * 0.5 * scale], [1.2, 0.9, 1.2], [rng(), rng(), rng()])
    }
    if (rng() > 0.55) {
      add(group, new THREE.IcosahedronGeometry(0.18 * scale, 0), mat('#ffd166', { emissive: '#ffd166', emissiveIntensity: 0.6 }), [0.7 * scale, 2.5 * scale, 0.4 * scale])
    }
    this.obstacles.push({ x, z, r: 0.75 * scale })
  }

  addPine(x, z, rng) {
    const y = terrainHeight(x, z)
    const scale = 0.8 + rng() * 0.7
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    add(group, new THREE.CylinderGeometry(0.16 * scale, 0.3 * scale, 2.2 * scale, 5), mat('#5c4a3d'), [0, 1.1 * scale, 0])
    for (let i = 0; i < 4; i++) {
      add(group, new THREE.ConeGeometry((1.5 - i * 0.28) * scale, 2.1 * scale, 6), mat(i % 2 ? '#d9f4fb' : '#a6d7e2'), [0, (1.7 + i * 1.0) * scale, 0])
    }
    this.obstacles.push({ x, z, r: 0.8 * scale })
  }

  addRock(x, z, rng, color, scale = 1) {
    const y = terrainHeight(x, z)
    const rock = add(this.root, new THREE.DodecahedronGeometry(scale, 0), mat(color), [x, y + scale * 0.55, z], [1.2, 0.9, 1], [rng(), rng(), rng()])
    this.obstacles.push({ x, z, r: scale * 0.9 })
  }

  addMushroom(x, z, rng) {
    const y = terrainHeight(x, z)
    const scale = 0.5 + rng() * 0.8
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    add(group, new THREE.CylinderGeometry(0.1 * scale, 0.16 * scale, 0.8 * scale, 5), mat('#d9c7a8'), [0, 0.4 * scale, 0])
    add(group, new THREE.SphereGeometry(0.55 * scale, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2), mat(rng() > 0.5 ? '#c77dff' : '#ff8fc7', { emissive: '#c77dff', emissiveIntensity: 0.2 }), [0, 0.82 * scale, 0], [1.2, 0.65, 1.2])
  }

  addCoral(x, z, rng) {
    const y = terrainHeight(x, z)
    const scale = 0.7 + rng() * 0.9
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    const colors = ['#ff8fc7', '#ffb35c', '#9be8ff', '#c08bff']
    for (let i = 0; i < 4; i++) {
      const angle = rng() * Math.PI * 2
      add(group, new THREE.CylinderGeometry(0.1 * scale, 0.24 * scale, (1.8 + rng() * 2) * scale, 5), mat(colors[i % colors.length], { emissive: colors[i % colors.length], emissiveIntensity: 0.08 }), [Math.cos(angle) * 0.4 * scale, 1.0 * scale, Math.sin(angle) * 0.4 * scale], [1, 1, 1], [Math.cos(angle) * 0.2, 0, Math.sin(angle) * 0.2])
    }
    this.obstacles.push({ x, z, r: 0.7 * scale })
  }

  addBasaltSpire(x, z, rng) {
    const y = terrainHeight(x, z)
    const height = 2.5 + rng() * 5
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    for (let i = 0; i < 3; i++) {
      add(group, new THREE.CylinderGeometry(0.35 + rng() * 0.2, 0.7 + rng() * 0.4, height * (0.5 + rng() * 0.5), 5), mat(i % 2 ? '#2f2a2f' : '#413536'), [Math.cos(i * 2.1) * 0.6, height * 0.35, Math.sin(i * 2.1) * 0.6], [1, 1, 1], [Math.cos(i) * 0.12, 0, Math.sin(i) * 0.12])
    }
    const glow = add(group, new THREE.BoxGeometry(0.08, height * 0.7, 0.08), mat('#ff5e2c', { emissive: '#ff5e2c', emissiveIntensity: 1.4 }), [0, height * 0.42, 0.4])
    this.obstacles.push({ x, z, r: 1.0 })
  }

  addIceSpike(x, z, rng) {
    const y = terrainHeight(x, z)
    const height = 2 + rng() * 4
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    for (let i = 0; i < 3; i++) {
      add(group, new THREE.ConeGeometry(0.5 + rng() * 0.3, height * (0.6 + rng() * 0.4), 5), mat('#bff3ff', { emissive: '#67cfff', emissiveIntensity: 0.16, transparent: true, opacity: 0.85, roughness: 0.2 }), [Math.cos(i * 2.2) * 0.5, height * 0.32, Math.sin(i * 2.2) * 0.5], [1, 1, 1], [Math.cos(i) * 0.16, 0, Math.sin(i) * 0.16])
    }
    this.obstacles.push({ x, z, r: 0.9 })
  }

  addCrystal(x, z, rng) {
    const y = terrainHeight(x, z)
    const height = 2.5 + rng() * 5
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    for (let i = 0; i < 4; i++) {
      const h = height * (0.45 + rng() * 0.55)
      add(group, new THREE.ConeGeometry(0.35 + rng() * 0.35, h, 5), mat(i % 2 ? '#d5a8ff' : '#b98bff', { emissive: '#b98bff', emissiveIntensity: 0.4, transparent: true, opacity: 0.9, roughness: 0.2 }), [Math.cos(i * 1.8) * 0.5, h * 0.4, Math.sin(i * 1.8) * 0.5], [1, 1, 1], [Math.cos(i) * 0.18, 0, Math.sin(i) * 0.18])
    }
    this.obstacles.push({ x, z, r: 0.85 })
  }

  addFloatingRock(x, z, rng) {
    const y = terrainHeight(x, z) + 4 + rng() * 4
    const group = new THREE.Group()
    group.position.set(x, y, z)
    this.root.add(group)
    add(group, new THREE.DodecahedronGeometry(1.1 + rng() * 0.7, 0), mat('#6b5a7d'), [0, 0, 0], [1.2, 1, 1], [rng(), rng(), rng()])
    const under = add(group, new THREE.ConeGeometry(0.5, 1.2, 4), mat('#b98bff', { emissive: '#b98bff', emissiveIntensity: 0.4, transparent: true, opacity: 0.75 }), [0, -1.1, 0], [1, 1, 1], [Math.PI, 0, 0])
    this.floating.push({ group, baseY: y, phase: rng() * Math.PI * 2, speed: 0.5 + rng() * 0.5 })
  }

  addPond(x, z, radius, color, ice = false) {
    const y = terrainHeight(x, z) + 0.28
    const pond = new THREE.Mesh(
      new THREE.CircleGeometry(radius, 28),
      mat(color, { transparent: true, opacity: ice ? 0.78 : 0.72, roughness: 0.16, metalness: 0.08, emissive: color, emissiveIntensity: ice ? 0.12 : 0.06 })
    )
    pond.rotation.x = -Math.PI / 2
    pond.position.set(x, y, z)
    this.root.add(pond)
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(radius + 0.2, 0.22, 5, 32),
      mat(ice ? '#d9f8ff' : '#b7a477', { roughness: 0.9 })
    )
    rim.rotation.x = Math.PI / 2
    rim.position.set(x, y + 0.02, z)
    this.root.add(rim)
    this.animated.push({ type: 'water', mesh: pond, phase: seededRng(`pond-${x}-${z}`)() * 10 })
  }

  addStream() {
    const points = []
    for (let i = 0; i <= 18; i++) {
      const t = i / 18
      const x = -12 + Math.sin(t * 5) * 4 + t * 14
      const z = -27 - t * 40
      points.push([x, z])
    }
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    for (let i = 0; i < points.length; i++) {
      const [x, z] = points[i]
      const next = points[Math.min(points.length - 1, i + 1)]
      const prev = points[Math.max(0, i - 1)]
      const dx = next[0] - prev[0]
      const dz = next[1] - prev[1]
      const len = Math.hypot(dx, dz) || 1
      for (const side of [-1, 1]) {
        vertices.push(x - dz / len * 1.5 * side, terrainHeight(x, z) + 0.2, z + dx / len * 1.5 * side)
      }
      if (i < points.length - 1) {
        const base = i * 2
        geometry.index?.array.push()
      }
    }
    const indices = []
    for (let i = 0; i < points.length - 1; i++) {
      const base = i * 2
      indices.push(base, base + 1, base + 2, base + 1, base + 3, base + 2)
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setIndex(indices)
    geometry.computeVertexNormals()
    const stream = new THREE.Mesh(geometry, mat('#4fb7e8', { transparent: true, opacity: 0.72, roughness: 0.18, emissive: '#2d8fc4', emissiveIntensity: 0.12 }))
    this.root.add(stream)
    this.animated.push({ type: 'water', mesh: stream, phase: 2 })
  }

  addLavaPool(x, z, radius) {
    const y = terrainHeight(x, z) + 0.18
    const pool = new THREE.Mesh(
      new THREE.CircleGeometry(radius, 24),
      mat('#ff5e2c', { emissive: '#ff4a1a', emissiveIntensity: 1.5, roughness: 0.35 })
    )
    pool.rotation.x = -Math.PI / 2
    pool.position.set(x, y, z)
    this.root.add(pool)
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(radius - 0.2, 0.32, 5, 28),
      mat('#2f2525')
    )
    rim.rotation.x = Math.PI / 2
    rim.position.set(x, y + 0.05, z)
    this.root.add(rim)
    this.animated.push({ type: 'lava', mesh: pool, phase: Math.random() * 5 })
    this.hazards.push({ x, z, r: radius - 0.4, label: 'Scalding lava' })
  }

  addGrassInstances(center, radius, count, color, rng) {
    if (count <= 0) return
    const geometry = new THREE.ConeGeometry(0.09, 0.65, 3)
    const material = mat(color, { roughness: 0.95 })
    const mesh = new THREE.InstancedMesh(geometry, material, count)
    const dummy = new THREE.Object3D()
    let index = 0
    for (let i = 0; i < count; i++) {
      const angle = rng() * Math.PI * 2
      const distance = Math.sqrt(rng()) * radius * 0.92
      const x = center[0] + Math.cos(angle) * distance
      const z = center[1] + Math.sin(angle) * distance
      if (this.isBlocked(x, z, 1.2)) continue
      const y = terrainHeight(x, z)
      dummy.position.set(x, y + 0.3, z)
      dummy.rotation.set((rng() - 0.5) * 0.2, rng() * Math.PI, (rng() - 0.5) * 0.25)
      dummy.scale.setScalar(0.6 + rng() * 0.9)
      dummy.updateMatrix()
      mesh.setMatrixAt(index++, dummy.matrix)
    }
    mesh.count = index
    this.root.add(mesh)
  }

  addFlowerInstances(center, radius, count, rng, coral = false, astral = false) {
    if (count <= 0) return
    const colors = coral ? ['#ff8fc7', '#ffd166', '#9be8ff'] : astral ? ['#c08bff', '#ff8fc7', '#9be8ff'] : ['#ffd166', '#ff8fc7', '#f7fbff']
    for (let i = 0; i < count; i++) {
      const angle = rng() * Math.PI * 2
      const distance = Math.sqrt(rng()) * radius * 0.88
      const x = center[0] + Math.cos(angle) * distance
      const z = center[1] + Math.sin(angle) * distance
      if (this.isBlocked(x, z, 0.8)) continue
      const y = terrainHeight(x, z)
      const color = pick(rng, colors)
      add(this.root, new THREE.SphereGeometry(0.16 + rng() * 0.12, 6, 4), mat(color, { emissive: color, emissiveIntensity: astral ? 0.5 : 0.08 }), [x, y + 0.35, z], [1, 0.7, 1])
      add(this.root, new THREE.CylinderGeometry(0.02, 0.03, 0.4, 3), mat('#4f7d48'), [x, y + 0.18, z])
    }
  }

  addShellProps(center, radius, rng) {
    for (let i = 0; i < 10; i++) {
      const angle = rng() * Math.PI * 2
      const distance = Math.sqrt(rng()) * radius * 0.8
      const x = center[0] + Math.cos(angle) * distance
      const z = center[1] + Math.sin(angle) * distance
      if (this.isBlocked(x, z, 1)) continue
      const y = terrainHeight(x, z)
      add(this.root, new THREE.SphereGeometry(0.4 + rng() * 0.3, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), mat('#f5dfc8'), [x, y + 0.1, z], [1.2, 0.5, 1], [0, rng() * Math.PI, 0])
    }
  }

  addEmberParticles(rng) {
    const count = this.quality === 'low' ? 70 : 150
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = -80 + rng() * 180
      positions[i * 3 + 1] = rng() * 10
      positions[i * 3 + 2] = -40 + rng() * 130
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const points = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xff9a4c, size: 0.16, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false }))
    this.root.add(points)
    this.particles.push({ points, type: 'ember', speed: 1.2, bounds: { x: [-80, 100], z: [-40, 90] } })
  }

  addSnowParticles(rng) {
    const count = this.quality === 'low' ? 120 : 260
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = 10 + rng() * 80
      positions[i * 3 + 1] = rng() * 14
      positions[i * 3 + 2] = 42 + rng() * 80
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const points = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xf5ffff, size: 0.12, transparent: true, opacity: 0.85, depthWrite: false }))
    this.root.add(points)
    this.particles.push({ points, type: 'snow', speed: 1.5, bounds: { x: [10, 90], z: [42, 122] } })
  }

  isBlocked(x, z, minDistance = 4) {
    if (Math.hypot(x, z) < 23) return true
    if (pathDistance(x, z) < 3.4) return true
    for (const landmark of this.landmarks) {
      const [lx, lz] = landmark.position
      if (Math.hypot(x - lx, z - lz) < (landmark.radius || 6) + 1) return true
    }
    for (const obstacle of this.obstacles) {
      if (Math.hypot(x - obstacle.x, z - obstacle.z) < Math.max(minDistance, obstacle.r + 1.2)) return true
    }
    return false
  }

  resolveCollision(position, radius = 0.6) {
    const distance = Math.hypot(position.x, position.z)
    if (distance > PLAY_RADIUS) {
      const scale = PLAY_RADIUS / distance
      position.x *= scale
      position.z *= scale
    }
    for (const obstacle of this.obstacles) {
      const dx = position.x - obstacle.x
      const dz = position.z - obstacle.z
      const min = obstacle.r + radius
      const dist = Math.hypot(dx, dz)
      if (dist < min && dist > 0.0001) {
        const push = (min - dist) / dist
        position.x += dx * push
        position.z += dz * push
      }
    }
    return position
  }

  hazardAt(position) {
    return this.hazards.find((hazard) => Math.hypot(position.x - hazard.x, position.z - hazard.z) < hazard.r) || null
  }

  nearestInteractable(position, maxDistance = 3.8) {
    let nearest = null
    let nearestDistance = maxDistance
    for (const interactable of this.interactables) {
      const distance = Math.hypot(position.x - interactable.position.x, position.z - interactable.position.z)
      if (distance < nearestDistance) {
        nearest = interactable
        nearestDistance = distance
      }
    }
    return nearest ? { ...nearest, distance: nearestDistance } : null
  }

  update(dt, time) {
    for (const entry of this.animated) {
      if (entry.type === 'bob') {
        entry.mesh.position.y = entry.baseY + Math.sin(time * (entry.speed || 1) + (entry.mesh.id || 0)) * (entry.amplitude || 0.1)
      } else if (entry.type === 'spin') {
        entry.mesh.rotation.z += dt * (entry.speed || 0.2)
        entry.mesh.rotation.y += dt * (entry.speed || 0.2) * 0.35
      } else if (entry.type === 'water') {
        entry.mesh.material.opacity = 0.66 + Math.sin(time * 1.2 + (entry.phase || 0)) * 0.05
      } else if (entry.type === 'lava') {
        entry.mesh.material.emissiveIntensity = 1.35 + Math.sin(time * 2.3 + (entry.phase || 0)) * 0.2
      } else if (entry.type === 'flicker') {
        entry.mesh.material.opacity = (entry.base || 0.4) + Math.sin(time * 3.2) * 0.07
      } else if (entry.type === 'rings') {
        for (const [index, ring] of entry.meshes.entries()) {
          const phase = (time * 0.18 + index * 0.33) % 1
          ring.scale.setScalar(1 + phase * 0.18)
          ring.material.opacity = (0.35 - index * 0.07) * (1 - phase * 0.5)
        }
      } else if (entry.type === 'npc') {
        entry.group.position.y = entry.baseY + Math.sin(time * 1.4 + entry.group.id) * 0.04
      } else if (entry.type === 'treadmill') {
        const rollers = entry.group.children.filter((child) => child.geometry?.type === 'CylinderGeometry')
        for (const roller of rollers) roller.rotation.x += dt * (entry.offset % 2 ? 1.4 : 1.0)
      }
    }
    for (const floater of this.floating) {
      floater.group.position.y = floater.baseY + Math.sin(time * floater.speed + floater.phase) * 0.7
      floater.group.rotation.y += dt * 0.08
    }
    for (const system of this.particles) {
      const positions = system.points.geometry.attributes.position.array
      if (system.type === 'ember') {
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += dt * system.speed * (0.5 + (i % 7) * 0.08)
          if (positions[i + 1] > 12) positions[i + 1] = 0
        }
      } else if (system.type === 'snow') {
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] -= dt * system.speed * (0.5 + (i % 5) * 0.1)
          positions[i] += Math.sin(time + i) * dt * 0.12
          if (positions[i + 1] < 0) positions[i + 1] = 14
        }
      }
      system.points.geometry.attributes.position.needsUpdate = true
    }
    if (this.ocean) this.ocean.material.opacity = 0.9 + Math.sin(time * 0.55) * 0.025
    return time
  }

  setQuality(quality) {
    this.quality = quality
  }
}

export { WORLD_RADIUS, PLAY_RADIUS, LANDMARKS }
