import * as THREE from 'three'
import { TYPES } from '../data/types.js'
import { hashString, mulberry32 } from '../core/rng.js'

const materialCache = new Map()
const geometryCache = new Map()

function material(color, options = {}) {
  const key = `${color}|${options.emissive || ''}|${options.emissiveIntensity || 0}|${options.roughness || 0.7}|${options.metalness || 0}|${options.transparent ? 't' : ''}|${options.opacity ?? 1}`
  if (!materialCache.has(key)) {
    materialCache.set(key, new THREE.MeshStandardMaterial({
      color,
      flatShading: false,
      roughness: options.roughness ?? 0.66,
      metalness: options.metalness ?? 0.04,
      emissive: options.emissive || 0x000000,
      emissiveIntensity: options.emissiveIntensity ?? 0,
      transparent: Boolean(options.transparent),
      opacity: options.opacity ?? 1,
      depthWrite: options.depthWrite ?? true
    }))
  }
  return materialCache.get(key)
}

function geo(key, factory) {
  if (!geometryCache.has(key)) geometryCache.set(key, factory())
  return geometryCache.get(key)
}

function lathe(points, segments = 24) {
  return new THREE.LatheGeometry(points.map(([x, y]) => new THREE.Vector3(x, y, 0)), segments)
}

function sphere(radius = 1, width = 16, height = 12) {
  return geo(`sphere-${radius}-${width}-${height}`, () => new THREE.SphereGeometry(radius, width, height))
}

function capsule(radius, length, segments = 16) {
  const half = length * 0.5
  return geo(`capsule-${radius}-${length}-${segments}`, () => {
    const points = [
      [radius, 0],
      [radius * 0.92, half * 0.18],
      [radius * 0.78, half * 0.82],
      [0, half]
    ]
    return lathe(points, segments)
  })
}

function addMesh(group, geometry, materialRef, position = [0, 0, 0], scale = [1, 1, 1], rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(geometry, materialRef)
  mesh.position.set(...position)
  mesh.scale.set(...scale)
  mesh.rotation.set(...rotation)
  group.add(mesh)
  return mesh
}

export function createCreatureMesh(species, options = {}) {
  const visual = species.visual
  const group = new THREE.Group()
  const scale = (options.scale ?? 1) * visual.size * 0.92
  group.scale.setScalar(scale)
  const primary = material(visual.primary, { roughness: 0.66 })
  const secondary = material(visual.secondary, { roughness: 0.72 })
  const accent = material(visual.accent, { emissive: visual.accent, emissiveIntensity: visual.glow ? 0.32 : 0.06, roughness: 0.5 })
  const dark = material(shade(visual.secondary, -0.25), { roughness: 0.74 })
  const eyeWhite = material('#f7fbff', { roughness: 0.28, emissive: '#dff5ff', emissiveIntensity: 0.16 })
  const pupil = material(visual.eye, { roughness: 0.22, emissive: visual.eye, emissiveIntensity: 0.16 })
  const shine = material('#ffffff', { roughness: 0.1, emissive: '#ffffff', emissiveIntensity: 0.5 })
  const mouthMat = material(shade(visual.eye, -0.15), { roughness: 0.4 })
  const parts = { legs: [], arms: [], wings: [], segments: [] }
  const anim = { archetype: visual.archetype, parts, seed: Math.random() * 10, baseY: 0 }
  group.userData.animation = anim

  const blobShadow = new THREE.Mesh(
    geo('shadow', () => new THREE.CircleGeometry(0.85, 32)),
    new THREE.MeshBasicMaterial({ color: 0x0b0f16, transparent: true, opacity: 0.28, depthWrite: false })
  )
  blobShadow.rotation.x = -Math.PI / 2
  blobShadow.position.y = 0.04
  blobShadow.scale.setScalar(1.12)
  group.add(blobShadow)

  const hook = visual.markings % 4
  const rng = mulberry32(hashString(species.id) ^ 0x51f3)

  const addEyes = (position, spread, size) => {
    const pair = []
    for (const side of [-1, 1]) {
      const white = addMesh(group, sphere(size * 0.9, 12, 10), eyeWhite, [position[0] + side * spread, position[1], position[2]], [size, size * 1.12, size * 0.58])
      const pupilMesh = addMesh(group, sphere(size * 0.42, 10, 8), pupil, [position[0] + side * spread, position[1] - 0.02, position[2] + size * 0.42], [size * 0.5, size * 0.64, size * 0.32])
      white.userData.baseY = size * 1.12
      pupilMesh.userData.baseY = size * 0.64
      addMesh(group, sphere(size * 0.12, 8, 6), shine, [position[0] + side * spread + size * 0.1, position[1] + size * 0.16, position[2] + size * 0.62], [1, 1, 0.5])
      pair.push({ white, pupil: pupilMesh })
    }
    parts.eyePairs = pair
    return pair
  }

  const addMouth = (position, width = 0.16, curve = 1) => {
    const arc = addMesh(
      group,
      geo('mouth', () => new THREE.TorusGeometry(0.09, 0.018, 6, 14, Math.PI * 0.7)),
      mouthMat,
      position,
      [width * 6, width * 6 * curve, 1],
      [Math.PI * 0.16, 0, Math.PI * 1.15]
    )
    parts.mouths = parts.mouths || []
    parts.mouths.push(arc)
    return arc
  }

  const addEars = (head, primaryRef, accentRef, horns) => {
    if (horns) {
      for (const side of [-1, 1]) {
        addMesh(group, lathe([[0, 0], [0.09, 0.22], [0.13, 0.5], [0, 0.54]], 12), accentRef, [side * 0.24, 0.34, -0.02], [1, 1, 1], [0.2, 0, side * -0.38])
      }
    } else {
      for (const side of [-1, 1]) {
        addMesh(group, lathe([[0, 0], [0.13, 0.18], [0.16, 0.36], [0, 0.4]], 12), primaryRef, [side * 0.28, 0.3, -0.06], [1, 1, 0.55], [0.1, 0, side * -0.35])
      }
    }
  }

  const addLimb = (groupTarget, primaryRef, darkRef, position, radius, length, rotation = [0, 0, 0]) => {
    const pivot = new THREE.Group()
    pivot.position.set(...position)
    pivot.rotation.set(...rotation)
    const limb = new THREE.Mesh(capsule(radius, length, 16), primaryRef)
    limb.position.y = -length * 0.5
    pivot.add(limb)
    const foot = new THREE.Mesh(sphere(radius * 1.1, 10, 8), darkRef)
    foot.position.y = -length
    foot.scale.set(1, 1, 1.3)
    pivot.add(foot)
    groupTarget.add(pivot)
    return pivot
  }

  const addTail = (groupTarget, position, secondaryRef, accentRef, length, count = 3) => {
    const pivot = new THREE.Group()
    pivot.position.set(...position)
    let current = pivot
    for (let i = 0; i < count; i++) {
      const radius = 0.14 - i * 0.03
      const segLen = length * 0.42
      const segment = new THREE.Mesh(capsule(radius, segLen, 12), i === count - 1 ? accentRef : secondaryRef)
      segment.position.z = 0
      segment.position.y = -segLen * 0.5
      segment.rotation.x = -Math.PI / 2
      current.add(segment)
      const next = new THREE.Group()
      next.position.z = -segLen * 0.66
      segment.add(next)
      current = next
    }
    groupTarget.add(pivot)
    return pivot
  }

  const addWing = (accentRef, secondaryRef, side, size) => {
    const pivot = new THREE.Group()
    pivot.position.set(side * 0.4, 1.12, -0.04)
    pivot.rotation.z = side * (side > 0 ? -0.45 : 0.45)
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.quadraticCurveTo(side * 0.5, 0.45, side * 1, 1.1)
    shape.quadraticCurveTo(side * 0.45, 1.55, 0, 1.7)
    shape.quadraticCurveTo(-side * 0.45, 1.55, -side * 1, 1.1)
    shape.quadraticCurveTo(-side * 0.5, 0.45, 0, 0)
    const wing = new THREE.Mesh(
      new THREE.ExtrudeGeometry(shape, { depth: 0.045, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.018, bevelSegments: 3 }),
      side > 0 ? accentRef : secondaryRef
    )
    wing.position.x = side * (0.32 + 0.2)
    wing.position.y = 0.22
    wing.rotation.z = side * (Math.PI / 2 - 0.28)
    wing.scale.set(1, size, 0.28)
    const wingGroup = new THREE.Group()
    wingGroup.add(wing)
    wingGroup.rotation.z = side * 0.18
    pivot.add(wingGroup)
    pivot.userData.side = side
    group.add(pivot)
    return pivot
  }

  if (visual.archetype === 'quadruped') {
    const body = addMesh(group, lathe([
      [0.22, 0], [0.44, 0.22], [0.62, 0.62], [0.68, 0.96], [0.56, 1.22], [0.42, 1.46], [0.26, 1.6]
    ]), primary, [0, 0.86, 0], [1, 1, 1.25])
    anim.baseY = body.position.y
    parts.body = body
    const neck = addMesh(group, capsule(0.22, 0.34, 14), primary, [0, 1.02, 0.62], [1, 1, 1], [Math.PI / 6, 0, 0])
    parts.neck = neck
    const head = addMesh(group, lathe([
      [0.18, 0], [0.34, 0.22], [0.42, 0.52], [0.4, 0.82], [0.3, 1.06], [0.18, 1.26]
    ]), primary, [0, 1.22, 0.98], [1, 1, 0.95])
    parts.head = head
    addMesh(group, sphere(0.3, 12, 10), secondary, [0, 1.06, 0.82], [0.32, 0.22, 0.28])
    addEyes([0, 1.28, 1.26], 0.22, 0.2)
    addMouth([0, 1.16, 1.4])
    addEars(head, primary, accent, visual.horns)
    parts.tail = addTail(group, [0, 0.96, -0.8], secondary, accent, 0.62)
    const positions = [
      [-0.36, 0.56, 0.44],
      [0.36, 0.56, 0.44],
      [-0.36, 0.56, -0.44],
      [0.36, 0.56, -0.44]
    ]
    for (const position of positions) {
      parts.legs.push(addLimb(group, primary, dark, position, 0.13, 0.52, [0.03, 0, position[0] > 0 ? -0.04 : 0.04]))
    }
    addSpineAccent(group, accent, [0, 1.16, 0], 0.5, 0.92, hook)
  } else if (visual.archetype === 'biped') {
    const body = addMesh(group, lathe([
      [0.16, 0], [0.42, 0.3], [0.48, 0.7], [0.44, 1.05], [0.36, 1.32], [0.28, 1.52]
    ]), primary, [0, 1, 0], [1, 1, 0.9])
    anim.baseY = body.position.y
    parts.body = body
    addMesh(group, sphere(0.32, 12, 10), secondary, [0, 0.68, 0.02], [0.34, 0.28, 0.3])
    const head = addMesh(group, lathe([
      [0.16, 0], [0.36, 0.24], [0.44, 0.58], [0.42, 0.9], [0.32, 1.16], [0.2, 1.36]
    ]), primary, [0, 1.56, 0.02], [1, 1, 0.9])
    parts.head = head
    addEyes([0, 1.62, 0.36], 0.2, 0.19)
    addMouth([0, 1.5, 0.5])
    addEars(head, primary, accent, visual.horns)
    parts.arms = [
      addLimb(group, primary, dark, [-0.42, 1.08, 0], 0.18, 0.6, [-0.18, 0, 0.22]),
      addLimb(group, primary, dark, [0.42, 1.08, 0], 0.18, 0.6, [-0.18, 0, -0.22])
    ]
    parts.legs = [
      addLimb(group, secondary, dark, [-0.22, 0.5, 0.02], 0.2, 0.5, [0.03, 0, 0.05]),
      addLimb(group, secondary, dark, [0.22, 0.5, 0.02], 0.2, 0.5, [0.03, 0, -0.05])
    ]
    addAntennae(group, head, accent, hook)
    parts.tail = addTail(group, [0, 0.76, -0.34], secondary, accent, 0.44)
  } else if (visual.archetype === 'wyvern' || visual.archetype === 'flyer') {
    const body = addMesh(group, lathe([
      [0.18, 0], [0.46, 0.3], [0.56, 0.72], [0.52, 1.06], [0.42, 1.32], [0.3, 1.52]
    ]), primary, [0, 1.06, 0], visual.archetype === 'flyer' ? [0.9, 0.9, 1.3] : [1, 1, 1.35])
    anim.baseY = body.position.y
    parts.body = body
    const head = addMesh(group, lathe([
      [0.15, 0], [0.32, 0.22], [0.4, 0.56], [0.38, 0.88], [0.28, 1.12], [0.16, 1.32]
    ]), primary, [0, 1.28, 0.9], [0.9, 0.9, 1])
    parts.head = head
    addMesh(group, sphere(0.28, 12, 10), secondary, [0, 1.12, 0.58], [0.3, 0.22, 0.28])
    addEyes([0, 1.34, 1.3], 0.19, 0.18)
    addMouth([0, 1.24, 1.46])
    addEars(head, primary, accent, visual.horns)
    parts.wings = [
      addWing(accent, secondary, -1, visual.archetype === 'wyvern' ? 1.35 : 0.95),
      addWing(accent, secondary, 1, visual.archetype === 'wyvern' ? 1.35 : 0.95)
    ]
    parts.tail = addTail(group, [0, 1.0, -0.82], secondary, accent, visual.archetype === 'wyvern' ? 0.95 : 0.62)
    parts.legs = [
      addLimb(group, secondary, dark, [-0.22, 0.55, 0.26], 0.14, 0.44, [0.25, 0, 0.12]),
      addLimb(group, secondary, dark, [0.22, 0.55, 0.26], 0.14, 0.44, [0.25, 0, -0.12])
    ]
    if (visual.archetype === 'wyvern') addSpineAccent(group, accent, [0, 1.4, 0], 0.36, 0.82, hook)
  } else if (visual.archetype === 'aquatic') {
    const body = addMesh(group, lathe([
      [0.2, 0], [0.52, 0.28], [0.62, 0.68], [0.58, 0.98], [0.46, 1.24], [0.34, 1.44]
    ]), primary, [0, 1, 0], [1, 1, 1.2])
    anim.baseY = body.position.y
    parts.body = body
    const head = addMesh(group, lathe([
      [0.17, 0], [0.36, 0.24], [0.44, 0.58], [0.42, 0.9], [0.32, 1.12], [0.2, 1.32]
    ]), primary, [0, 1.08, 0.86], [1, 1, 0.95])
    parts.head = head
    addMesh(group, sphere(0.34, 12, 10), secondary, [0, 0.92, 0.66], [0.38, 0.2, 0.3])
    addEyes([0, 1.16, 1.24], 0.2, 0.19)
    addMouth([0, 1.06, 1.38])
    parts.tail = addTail(group, [0, 1.06, -0.86], secondary, accent, 0.7)
    addFins(group, secondary, accent, parts)
    addMesh(group, lathe([[0, 0], [0.3, 0.3], [0.34, 0.72], [0, 0.76]], 12), accent, [0, 1.58, -0.08], [1, 1, 0.35], [0.12, 0, 0])
  } else if (visual.archetype === 'serpent') {
    const segmentCount = 7
    for (let i = 0; i < segmentCount; i++) {
      const t = i / (segmentCount - 1)
      const radius = 0.4 * (1 - t * 0.5)
      const segment = new THREE.Mesh(capsule(radius, 0.42, 14), i % 2 ? secondary : primary)
      segment.position.set(0, 0.7 + Math.sin(t * Math.PI) * 0.42, 0.66 - t * 1.6)
      segment.rotation.x = -Math.PI / 2
      group.add(segment)
      parts.segments.push(segment)
    }
    const head = addMesh(group, lathe([
      [0.16, 0], [0.34, 0.22], [0.42, 0.56], [0.4, 0.86], [0.3, 1.1], [0.18, 1.3]
    ]), primary, [0, 1.02, 0.98], [1, 1, 0.95])
    parts.head = head
    addEyes([0, 1.1, 1.4], 0.2, 0.19)
    addMouth([0, 1.0, 1.54], 0.2, 0.6)
    addEars(head, primary, accent, visual.horns)
    parts.tail = addTail(group, [0, 0.66, -1.16], secondary, accent, 0.48)
    addSpineAccent(group, accent, [0, 1.2, 0.24], 0.24, 0.72, hook)
  } else if (visual.archetype === 'blob') {
    const body = addMesh(group, lathe([
      [0.2, 0], [0.58, 0.28], [0.66, 0.62], [0.62, 0.96], [0.5, 1.22], [0.36, 1.42]
    ]), primary, [0, 0.8, 0], [1, 1, 1])
    anim.baseY = body.position.y
    parts.body = body
    addMesh(group, sphere(0.5, 14, 12), secondary, [0, 0.7, 0.02], [0.52, 0.46, 0.52])
    const head = addMesh(group, lathe([
      [0.18, 0], [0.44, 0.24], [0.52, 0.56], [0.5, 0.88], [0.4, 1.12], [0.28, 1.32]
    ]), primary, [0, 1.04, 0.1], [1, 1, 1])
    parts.head = head
    addEyes([0, 1.1, 0.5], 0.22, 0.2)
    addMouth([0, 1.0, 0.64], 0.18, 1.2)
    addBlobCrown(group, accent, visual)
    parts.legs = [
      addLimb(group, secondary, dark, [-0.3, 0.36, 0.05], 0.15, 0.32, [0.04, 0, 0.2]),
      addLimb(group, secondary, dark, [0.3, 0.36, 0.05], 0.15, 0.32, [0.04, 0, -0.2])
    ]
  } else if (visual.archetype === 'golem') {
    const body = addMesh(group, sphere(0.8, 16, 12), primary, [0, 0.92, 0], [0.7, 0.72, 0.58])
    anim.baseY = body.position.y
    parts.body = body
    const head = addMesh(group, sphere(0.55, 14, 10), primary, [0, 1.62, 0.1], [0.64, 0.58, 0.58])
    parts.head = head
    addEyes([0, 1.68, 0.42], 0.18, 0.1)
    addMouth([0, 1.6, 0.56], 0.24, 0.5)
    addMesh(group, new THREE.BoxGeometry(0.16, 0.72, 0.05), accent, [0, 0.96, 0.58], [1, 1, 1], [0, 0, 0.1])
    parts.arms = [
      addLimb(group, secondary, dark, [-0.64, 0.98, 0], 0.24, 0.7, [0.1, 0, 0.36]),
      addLimb(group, secondary, dark, [0.64, 0.98, 0], 0.24, 0.7, [0.1, 0, -0.36])
    ]
    parts.legs = [
      addLimb(group, secondary, dark, [-0.27, 0.4, 0], 0.25, 0.44, [0.02, 0, 0.08]),
      addLimb(group, secondary, dark, [0.27, 0.4, 0], 0.25, 0.44, [0.02, 0, -0.08])
    ]
    addSpineAccent(group, accent, [0, 1.16, -0.34], 0.28, 0.64, hook)
  } else {
    const body = addMesh(group, lathe([
      [0.18, 0], [0.48, 0.3], [0.58, 0.7], [0.54, 1.04], [0.44, 1.32], [0.32, 1.52]
    ]), primary, [0, 1, 0], [1, 1, 0.95])
    anim.baseY = body.position.y
    parts.body = body
    addMesh(group, sphere(0.3, 12, 10), secondary, [0, 0.66, 0], [0.3, 0.38, 0.3])
    const head = addMesh(group, lathe([
      [0.16, 0], [0.38, 0.24], [0.46, 0.58], [0.44, 0.9], [0.34, 1.16], [0.22, 1.36]
    ]), primary, [0, 1.52, 0.04], [1, 1, 0.9])
    parts.head = head
    addEyes([0, 1.58, 0.4], 0.2, 0.19)
    addMouth([0, 1.48, 0.54])
    addEars(head, primary, accent, visual.horns)
    parts.halo = makeHalo(group, accent)
    parts.tail = addTail(group, [0, 0.6, -0.12], secondary, accent, 0.42)
    parts.arms = [
      addLimb(group, primary, dark, [-0.4, 1.06, 0], 0.13, 0.5, [0.2, 0, 0.28]),
      addLimb(group, primary, dark, [0.4, 1.06, 0], 0.13, 0.5, [0.2, 0, -0.28])
    ]
  }

  addTypeTrimmings(group, parts, visual, species, { primary, secondary, accent, dark }, rng)

  if (visual.aura) {
    const aura = new THREE.Mesh(
      geo('aura-ring', () => new THREE.TorusGeometry(1.15, 0.035, 16, 48)),
      new THREE.MeshBasicMaterial({ color: visual.accent, transparent: true, opacity: 0.62, blending: THREE.AdditiveBlending, depthWrite: false })
    )
    aura.rotation.x = Math.PI / 2
    aura.position.y = 0.36
    group.add(aura)
    parts.aura = aura
    const motes = new THREE.Points(
      new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(makeMotePositions(14, 1.8), 3)),
      new THREE.PointsMaterial({ color: visual.accent, size: 0.14, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false })
    )
    group.add(motes)
    parts.motes = motes
  }

  if (visual.crown) {
    const crown = new THREE.Mesh(
      lathe([[0, 0], [0.18, 0.22], [0.22, 0.48], [0, 0.52]], 10),
      material(visual.accent, { emissive: visual.accent, emissiveIntensity: 0.6 })
    )
    crown.position.set(0, 1.96, 0)
    crown.rotation.y = Math.PI / 4
    group.add(crown)
    parts.crown = crown
  }

  group.userData.speciesId = species.id
  group.userData.species = species
  return group
}

function addAntennae(group, head, accent, hook) {
  for (const side of [-1, 1]) {
    const antenna = addMesh(group, capsule(0.025, 0.6, 10), accent, [side * 0.16, 0.38, 0], [1, 1, 1], [0, 0, side * -0.22])
    addMesh(antenna, sphere(0.08, 10, 8), accent, [0, 0.34, 0])
  }
  if (hook === 1) {
    addMesh(group, lathe([[0, 0], [0.16, 0.2], [0.18, 0.4], [0, 0.44]], 10), accent, [0, 0.34, -0.3], [1.6, 1, 0.3], [-0.4, 0, 0])
  }
}

function addSpineAccent(group, accent, position, width, length, hook) {
  for (let i = 0; i < 3; i++) {
    addMesh(group, lathe([[0, 0], [width * 0.3, width * 0.4], [width * 0.18, length * (0.4 + i * 0.15)], [0, length * (0.4 + i * 0.15)]], 10), accent, [position[0], position[1] + i * 0.05, position[2] - i * length * 0.18], [1, 1, 0.55], [0.2, 0, 0])
  }
  if (hook === 2) {
    addMesh(group, geo('mark', () => new THREE.TorusGeometry(0.16, 0.035, 10, 16)), accent, [0, position[1], position[2] + 0.2], [1, 1, 1], [Math.PI / 2, 0, 0])
  }
}

function addFins(group, secondary, accent, parts) {
  for (const side of [-1, 1]) {
    addMesh(group, lathe([[0, 0], [0.24, 0.28], [0.28, 0.6], [0, 0.66]], 10), secondary, [side * 0.5, 0.96, 0.18], [1, 1, 0.32], [0, 0, side * -1.1])
  }
  const tailFin = addMesh(group, lathe([[0, 0], [0.3, 0.32], [0.34, 0.66], [0, 0.72]], 10), accent, [0, 1.08, -0.9], [1, 1, 0.34], [Math.PI / 2, 0, 0])
  parts.tailFin = tailFin
}

function addBlobCrown(group, accent, visual) {
  const count = visual.markings % 2 === 0 ? 5 : 3
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2
    addMesh(group, lathe([[0, 0], [0.07, 0.14], [0.08, 0.3], [0, 0.34]], 10), accent, [Math.cos(angle) * 0.32, 1.38, Math.sin(angle) * 0.32], [1, 1, 1], [0, 0, Math.cos(angle) * 0.3])
  }
}

function makeHalo(group, accent) {
  const halo = new THREE.Mesh(
    geo('halo', () => new THREE.TorusGeometry(0.42, 0.035, 12, 32)),
    material(accent, { emissive: accent, emissiveIntensity: 0.65 })
  )
  halo.position.y = 2
  halo.rotation.x = Math.PI / 2.2
  group.add(halo)
  return halo
}

export function animateCreatureMesh(group, time, state = 'idle') {
  const anim = group.userData.animation
  if (!anim) return
  const parts = anim.parts
  const t = time + anim.seed
  const speed = state === 'moving' ? 8 : state === 'battle' ? 2.2 : 1.7
  const bodyY = anim.baseY ?? 0
  if (parts.body) {
    parts.body.position.y = bodyY + Math.sin(t * speed) * 0.004
    parts.body.scale.y = 1 + Math.sin(t * speed) * 0.014
  }
  if (parts.head) {
    parts.head.rotation.y = Math.sin(t * 0.8) * 0.08
    parts.head.position.y = (parts.head.position.y || 0) + Math.sin(t * speed + 0.4) * 0.002
  }
  if (parts.tail) {
    parts.tail.rotation.y = Math.sin(t * 1.4) * 0.28
    parts.tail.rotation.x = Math.sin(t * 1.1 + 1) * 0.1
  }
  for (const [index, leg] of parts.legs.entries()) {
    leg.rotation.x = Math.sin(t * speed + index * Math.PI / 2) * (state === 'moving' ? 0.5 : 0.06)
  }
  for (const [index, arm] of parts.arms.entries()) {
    arm.rotation.x = Math.sin(t * speed + index * Math.PI) * (state === 'moving' ? 0.35 : 0.08)
  }
  for (const wing of parts.wings) {
    const side = wing.userData.side || 1
    wing.rotation.z = side * (side > 0 ? -0.45 : 0.45) + Math.sin(t * 3.2) * 0.42 * side
  }
  if (parts.segments.length) {
    for (const [index, segment] of parts.segments.entries()) {
      segment.position.x = Math.sin(t * 1.5 + index * 0.5) * 0.06 * index
      segment.position.y = 0.7 + Math.sin(index / Math.max(1, parts.segments.length - 1) * Math.PI) * 0.42 + Math.sin(t * 1.8 + index * 0.4) * 0.03
    }
  }
  if (parts.eyePairs) {
    const closed = Math.sin(t * 1.05 + 2.2) > 0.985
    const squash = closed ? 0.15 : 1
    for (const pair of parts.eyePairs) {
      pair.white.scale.y = pair.white.userData.baseY * squash
      pair.pupil.scale.y = pair.pupil.userData.baseY * squash
    }
  }
  if (parts.mouths) {
    for (const mouth of parts.mouths) {
      mouth.rotation.z = Math.PI * 1.15 + Math.sin(t * 0.7) * 0.08
    }
  }
  if (parts.leaves) {
    for (const [index, leaf] of parts.leaves.entries()) {
      leaf.rotation.y = (leaf.userData.baseYaw ?? leaf.rotation.y) + Math.sin(t * 1.6 + index) * 0.12
    }
  }
  if (parts.halo) {
    parts.halo.rotation.z = t * 0.6
    parts.halo.position.y = 2 + Math.sin(t * 1.3) * 0.05
  }
  if (parts.aura) {
    parts.aura.rotation.z = t * 0.5
    parts.aura.scale.setScalar(1 + Math.sin(t * 1.4) * 0.06)
  }
  if (parts.embers) {
    parts.embers.rotation.y = t * 0.75
    parts.embers.position.y = Math.sin(t * 1.2) * 0.08
  }
  if (parts.orbit) {
    parts.orbit.rotation.y = t * 0.6
  }
  if (parts.wisp) {
    parts.wisp.rotation.y = -t * 0.5
    parts.wisp.material.opacity = 0.38 + Math.sin(t * 2.2) * 0.1
  }
  if (parts.motes) {
    parts.motes.rotation.y = t * 0.35
    parts.motes.position.y = Math.sin(t * 1.1) * 0.1
  }
}

function addTypeTrimmings(group, parts, visual, species, mats, rng) {
  const colors = {
    secondary: visual.secondary,
    accent: visual.accent
  }
  for (const type of species.types) {
    if (type === 'Nature') addNatureTrimmings(group, parts, colors, mats, rng)
    else if (type === 'Fire') addFireTrimmings(group, parts, colors, rng)
    else if (type === 'Frost') addFrostTrimmings(group, parts, rng)
    else if (type === 'Water') addWaterTrimmings(group, parts, colors, rng)
    else if (type === 'Stone') addStoneTrimmings(group, parts, mats.secondary, colors, rng)
    else if (type === 'Storm') addStormTrimmings(group, parts, colors, rng)
    else if (type === 'Astral') addAstralTrimmings(group, parts, colors, rng)
    else if (type === 'Spirit') addSpiritTrimmings(group, parts, colors, rng)
  }
  if (species.isStarter) addStarterSignature(group, parts, visual, species, colors)
}

function addNatureTrimmings(group, parts, colors, mats, rng) {
  const leaf = geo('trim-leaf', () => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.quadraticCurveTo(0.14, 0.18, 0.05, 0.44)
    shape.quadraticCurveTo(-0.02, 0.24, -0.13, 0.1)
    shape.quadraticCurveTo(-0.08, 0.04, 0, 0)
    return new THREE.ExtrudeGeometry(shape, { depth: 0.02, bevelEnabled: false })
  })
  const count = 4 + Math.floor(rng() * 3)
  parts.leaves = parts.leaves || []
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + rng() * 0.5
    const tilt = (rng() - 0.5) * 0.7
    const leafMesh = addMesh(
      group,
      leaf,
      i % 2 ? mats.secondary : mats.accent,
      [Math.cos(angle) * 0.34, 1.56, Math.sin(angle) * 0.34],
      [1, 0.9 + rng() * 0.6, 1],
      [-Math.PI / 2 + tilt, 0, Math.PI / 2 + angle]
    )
    leafMesh.userData.baseYaw = Math.PI / 2 + angle
    parts.leaves.push(leafMesh)
  }
}

function addFireTrimmings(group, parts, colors, rng) {
  const vents = 2 + Math.floor(rng() * 2)
  for (let i = 0; i < vents; i++) {
    const side = i % 2 ? 1 : -1
    addMesh(group, cone(0.1, 0.42, 6), matsEmbers(colors.accent), [side * 0.42, 1.2 + rng() * 0.3, -0.1], [1, 1, 1], [0, 0, side * 1.1])
  }
  parts.embers = makeOrbitPoints(group, colors.accent, 10, 0.9, 0.11)
}

function matsEmbers(accent) {
  return material(accent, { emissive: accent, emissiveIntensity: 0.9, roughness: 0.4 })
}

function addFrostTrimmings(group, parts, rng) {
  for (let i = 0; i < 3; i++) {
    const height = 0.5 + rng() * 0.7
    const angle = i * 2.2 + 0.9
    addMesh(
      group,
      cone(0.14 + rng() * 0.1, height, 5),
      material('#d6f8ff', { emissive: '#7ad9ff', emissiveIntensity: 0.35, transparent: true, opacity: 0.85, roughness: 0.18 }),
      [Math.cos(angle) * 0.4, 1.36 + Math.sin(angle) * 0.24, Math.sin(angle) * 0.4 - 0.1],
      [1, 1, 1],
      [Math.sin(angle) * 0.3, 0, Math.cos(angle) * 0.3]
    )
  }
}

function addWaterTrimmings(group, parts, colors, rng) {
  for (let i = 0; i < 3; i++) {
    const angle = i * 2.1 + 0.4
    addMesh(
      group,
      sphere(0.08 + rng() * 0.05, 10, 8),
      material('#b9f1ff', { emissive: colors.accent, emissiveIntensity: 0.45, transparent: true, opacity: 0.82, roughness: 0.1 }),
      [Math.cos(angle) * 0.3, 1.3 + Math.sin(angle) * 0.18, Math.sin(angle) * 0.3 + 0.1]
    )
  }
}

function addStoneTrimmings(group, parts, secondaryMat, colors, rng) {
  for (let i = 0; i < 2; i++) {
    const side = i ? 1 : -1
    addMesh(
      group,
      geo('stone-plate', () => new THREE.BoxGeometry(0.34, 0.52, 0.14)),
      secondaryMat,
      [side * 0.52, 1.28, -0.05],
      [1, 1, 1],
      [0.15, 0, side * 0.34]
    )
  }
  addMesh(
    group,
    lathe([[0, 0], [0.14, 0.1], [0.16, 0.3], [0, 0.34]], 10),
    material(shade(colors.secondary, -0.3), { roughness: 0.95 }),
    [0, 0.3, 0.28]
  )
}

function addStormTrimmings(group, parts, colors, rng) {
  const bolt = geo('bolt', () => new THREE.BoxGeometry(0.05, 0.16, 0.05))
  let current = new THREE.Group()
  current.position.set(0, 1.85, 0)
  group.add(current)
  for (let i = 0; i < 3; i++) {
    addMesh(current, bolt, material(colors.accent, { emissive: colors.accent, emissiveIntensity: 0.9 }), [0.04, 0, 0])
    const next = new THREE.Group()
    next.position.set(i % 2 ? 0.06 : -0.06, 0.15, 0)
    current.add(next)
    current = next
  }
  parts.embers = makeOrbitPoints(group, colors.accent, 8, 1.0, 0.09)
}

function addAstralTrimmings(group, parts, colors, rng) {
  const orbit = new THREE.Mesh(
    geo('astral-orbit', () => new THREE.TorusGeometry(0.72, 0.014, 8, 40)),
    material(colors.accent, { emissive: colors.accent, emissiveIntensity: 0.7, transparent: true, opacity: 0.55 })
  )
  orbit.rotation.x = Math.PI / 2.4
  orbit.position.y = 1.3
  group.add(orbit)
  for (let i = 0; i < 3; i++) {
    const angle = (i / 3) * Math.PI * 2
    addMesh(orbit, sphere(0.05, 8, 6), material(colors.accent, { emissive: colors.accent, emissiveIntensity: 0.9 }), [Math.cos(angle) * 0.72, 0, Math.sin(angle) * 0.72])
  }
  parts.orbit = orbit
}

function addSpiritTrimmings(group, parts, colors, rng) {
  parts.wisp = makeOrbitPoints(group, colors.accent, 12, 1.05, 0.08, 0.42)
}

function addStarterSignature(group, parts, visual, species, colors) {
  if (species.id === 'AST-001') {
    const crest = geo('trim-crest', () => new THREE.ExtrudeGeometry(leafCrestShape(0.5), { depth: 0.025, bevelEnabled: false }))
    for (const side of [-1, 0, 1]) {
      const leaf = addMesh(group, crest, material(visual.accent, { emissive: visual.accent, emissiveIntensity: 0.2 }), [side * 0.16, 1.86, -0.05], [1, 1, 1], [side * 0.5, 0, 0])
      leaf.userData.baseYaw = 0
      addMesh(leaf, sphere(0.045, 8, 6), material(visual.secondary, { roughness: 0.6 }), [0, 0.44, 0])
      parts.leaves = parts.leaves || []
      parts.leaves.push(leaf)
    }
  } else if (species.id === 'AST-004') {
    addMesh(group, cone(0.13, 0.5, 6), material(visual.accent, { emissive: '#ff7a45', emissiveIntensity: 1.1 }), [0, 2.0, 0.25], [1, 0.8, 1], [-0.5, 0, 0])
    for (const side of [-1, 1]) {
      addMesh(group, cone(0.09, 0.4, 6), material(visual.accent, { emissive: '#ffb35c', emissiveIntensity: 0.9 }), [side * 0.4, 1.3, -0.2], [1, 1, 1], [side * 0.9, 0, -0.3])
    }
    parts.embers = makeOrbitPoints(group, '#ff7a45', 12, 0.85, 0.1)
  } else if (species.id === 'AST-007') {
    const bubbles = new THREE.Group()
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2
      addMesh(
        bubbles,
        sphere(0.07 + (i % 2) * 0.03, 10, 8),
        material('#d8f6ff', { emissive: '#3f9bff', emissiveIntensity: 0.45, transparent: true, opacity: 0.6, roughness: 0.05 }),
        [Math.cos(angle) * 0.5, 0.12 + Math.sin(angle * 2) * 0.12, Math.sin(angle) * 0.5]
      )
    }
    bubbles.position.y = 1.62
    group.add(bubbles)
    parts.orbit = bubbles
  }
}

function leafCrestShape(length) {
  const shape = new THREE.Shape()
  shape.moveTo(0, 0)
  shape.quadraticCurveTo(length * 0.45, length * 0.28, 0, length)
  shape.quadraticCurveTo(-length * 0.45, length * 0.28, 0, 0)
  return shape
}

function cone(radius, height, segments = 6) {
  return geo(`cone-${radius}-${height}-${segments}`, () => new THREE.ConeGeometry(radius, height, segments))
}

function makeOrbitPoints(group, color, count, radius, size, opacity = 0.85) {
  const positions = []
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2
    positions.push([Math.cos(angle) * radius, 1.2 + Math.random() * 0.7, Math.sin(angle) * radius])
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions.flat()), 3))
  const orbiter = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ color, size, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false })
  )
  group.add(orbiter)
  return orbiter
}

function makeMotePositions(count, radius) {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2
    positions[i * 3] = Math.cos(angle) * radius * (0.7 + Math.random() * 0.4)
    positions[i * 3 + 1] = 0.5 + Math.random() * 1.5
    positions[i * 3 + 2] = Math.sin(angle) * radius * (0.7 + Math.random() * 0.4)
  }
  return positions
}

export function shade(hex, amount) {
  const color = new THREE.Color(hex)
  const hsl = {}
  color.getHSL(hsl)
  color.setHSL(hsl.h, hsl.s, Math.max(0, Math.min(1, hsl.l + amount)))
  return `#${color.getHexString()}`
}

export function disposeCreatureMesh(group) {
  group?.removeFromParent?.()
}
