import * as THREE from 'three'

const materialCache = new Map()
const geometryCache = new Map()

function material(color, options = {}) {
  const key = `${color}|${options.emissive || ''}|${options.emissiveIntensity || 0}|${options.roughness || 0.7}|${options.transparent ? 't' : ''}|${options.opacity ?? 1}`
  if (!materialCache.has(key)) {
    materialCache.set(key, new THREE.MeshStandardMaterial({
      color,
      flatShading: true,
      roughness: options.roughness ?? 0.72,
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

function sphere(scale = 1) {
  return geo(`sphere-${scale}`, () => new THREE.IcosahedronGeometry(1, scale > 1 ? 1 : 1))
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
  const primary = material(visual.primary, { roughness: 0.68 })
  const secondary = material(visual.secondary, { roughness: 0.8 })
  const accent = material(visual.accent, { emissive: visual.accent, emissiveIntensity: visual.glow ? 0.32 : 0.06, roughness: 0.5 })
  const dark = material(shade(visual.secondary, -0.25), { roughness: 0.82 })
  const eyeWhite = material('#f7fbff', { roughness: 0.35, emissive: '#dff5ff', emissiveIntensity: 0.14 })
  const pupil = material(visual.eye, { roughness: 0.3, emissive: visual.eye, emissiveIntensity: 0.12 })
  const parts = { legs: [], arms: [], wings: [], segments: [] }
  const anim = { archetype: visual.archetype, parts, seed: Math.random() * 10, baseY: 0 }
  group.userData.animation = anim

  const blobShadow = new THREE.Mesh(
    geo('shadow', () => new THREE.CircleGeometry(0.85, 16)),
    new THREE.MeshBasicMaterial({ color: 0x0b0f16, transparent: true, opacity: 0.28, depthWrite: false })
  )
  blobShadow.rotation.x = -Math.PI / 2
  blobShadow.position.y = 0.03
  blobShadow.scale.setScalar(1.1)
  group.add(blobShadow)

  const hook = visual.markings % 4

  if (visual.archetype === 'quadruped') {
    const body = addMesh(group, sphere(), primary, [0, 0.78, 0], [0.58, 0.5, 0.92])
    parts.body = body
    const neck = addMesh(group, sphere(), primary, [0, 0.98, 0.62], [0.4, 0.36, 0.38])
    parts.neck = neck
    const head = addMesh(group, sphere(), primary, [0, 1.16, 0.94], [0.42, 0.4, 0.42])
    parts.head = head
    addMesh(group, sphere(), secondary, [0, 1.0, 0.82], [0.35, 0.22, 0.3])
    addEyes(group, [0, 1.22, 1.22], 0.22, 0.12, eyeWhite, pupil)
    addEars(group, head, primary, accent, visual.horns)
    parts.tail = makeTail(group, [0, 0.9, -0.78], secondary, accent, 0.55)
    addLegsQuadruped(group, primary, dark, parts)
    addSpineAccent(group, accent, [0, 1.1, 0], 0.5, 0.9, hook)
  } else if (visual.archetype === 'biped') {
    const body = addMesh(group, sphere(), primary, [0, 0.92, 0], [0.44, 0.58, 0.38])
    parts.body = body
    addMesh(group, sphere(), secondary, [0, 0.62, 0.02], [0.36, 0.3, 0.32])
    const head = addMesh(group, sphere(), primary, [0, 1.48, 0.02], [0.42, 0.4, 0.42])
    parts.head = head
    addEyes(group, [0, 1.54, 0.34], 0.2, 0.11, eyeWhite, pupil)
    addEars(group, head, primary, accent, visual.horns)
    parts.arms = [
      makeLimb(group, primary, dark, [-0.42, 1.0, 0], 0.18, 0.58, [-0.18, 0, 0.22]),
      makeLimb(group, primary, dark, [0.42, 1.0, 0], 0.18, 0.58, [-0.18, 0, -0.22])
    ]
    parts.legs = [
      makeLimb(group, secondary, dark, [-0.22, 0.45, 0.02], 0.2, 0.48, [0.03, 0, 0.05]),
      makeLimb(group, secondary, dark, [0.22, 0.45, 0.02], 0.2, 0.48, [0.03, 0, -0.05])
    ]
    addAntennae(group, head, accent, hook)
    parts.tail = makeTail(group, [0, 0.7, -0.3], secondary, accent, 0.4)
  } else if (visual.archetype === 'wyvern' || visual.archetype === 'flyer') {
    const body = addMesh(group, sphere(), primary, [0, 1.0, 0], visual.archetype === 'flyer' ? [0.38, 0.36, 0.62] : [0.5, 0.46, 0.86])
    parts.body = body
    const head = addMesh(group, sphere(), primary, [0, 1.2, 0.86], [0.36, 0.34, 0.42])
    parts.head = head
    addMesh(group, sphere(), secondary, [0, 1.05, 0.52], [0.32, 0.24, 0.3])
    addEyes(group, [0, 1.26, 1.24], 0.19, 0.1, eyeWhite, pupil)
    addEars(group, head, primary, accent, visual.horns)
    parts.wings = [
      makeWing(group, accent, secondary, -1, visual.archetype === 'wyvern' ? 1.35 : 0.95),
      makeWing(group, accent, secondary, 1, visual.archetype === 'wyvern' ? 1.35 : 0.95)
    ]
    parts.tail = makeTail(group, [0, 0.95, -0.78], secondary, accent, visual.archetype === 'wyvern' ? 0.9 : 0.6)
    parts.legs = [
      makeLimb(group, secondary, dark, [-0.22, 0.5, 0.25], 0.14, 0.42, [0.25, 0, 0.12]),
      makeLimb(group, secondary, dark, [0.22, 0.5, 0.25], 0.14, 0.42, [0.25, 0, -0.12])
    ]
    if (visual.archetype === 'wyvern') addSpineAccent(group, accent, [0, 1.32, 0], 0.36, 0.8, hook)
  } else if (visual.archetype === 'aquatic') {
    const body = addMesh(group, sphere(), primary, [0, 0.94, 0], [0.55, 0.5, 0.88])
    parts.body = body
    const head = addMesh(group, sphere(), primary, [0, 1.0, 0.82], [0.4, 0.38, 0.42])
    parts.head = head
    addMesh(group, sphere(), secondary, [0, 0.84, 0.6], [0.4, 0.2, 0.3])
    addEyes(group, [0, 1.08, 1.2], 0.2, 0.11, eyeWhite, pupil)
    parts.tail = makeFinTail(group, [0, 1.0, -0.82], accent)
    addFins(group, secondary, accent, parts)
    addMesh(group, geo('dorsal', () => new THREE.ConeGeometry(0.36, 0.72, 3)), accent, [0, 1.5, -0.1], [1, 1, 0.35], [0.12, 0, 0])
  } else if (visual.archetype === 'serpent') {
    const segmentCount = 7
    for (let i = 0; i < segmentCount; i++) {
      const t = i / (segmentCount - 1)
      const radius = 0.42 * (1 - t * 0.55)
      const segment = addMesh(group, sphere(), i % 2 ? secondary : primary, [0, 0.66 + Math.sin(t * Math.PI) * 0.42, 0.62 - t * 1.7], [radius, radius, radius * 1.25])
      parts.segments.push(segment)
    }
    const head = addMesh(group, sphere(), primary, [0, 0.94, 0.95], [0.4, 0.38, 0.44])
    parts.head = head
    addEyes(group, [0, 1.02, 1.36], 0.2, 0.11, eyeWhite, pupil)
    addEars(group, head, primary, accent, visual.horns)
    parts.tail = makeTail(group, [0, 0.6, -1.12], secondary, accent, 0.45)
    addSpineAccent(group, accent, [0, 1.12, 0.2], 0.24, 0.7, hook)
  } else if (visual.archetype === 'blob') {
    const body = addMesh(group, sphere(), primary, [0, 0.72, 0], [0.64, 0.62, 0.64])
    parts.body = body
    addMesh(group, sphere(), secondary, [0, 0.62, 0.02], [0.54, 0.44, 0.54])
    const head = addMesh(group, sphere(), primary, [0, 0.96, 0.08], [0.5, 0.45, 0.48])
    parts.head = head
    addEyes(group, [0, 1.02, 0.46], 0.22, 0.13, eyeWhite, pupil)
    addBlobCrown(group, accent, visual)
    parts.legs = [
      makeLimb(group, secondary, dark, [-0.3, 0.32, 0.05], 0.15, 0.3, [0.04, 0, 0.2]),
      makeLimb(group, secondary, dark, [0.3, 0.32, 0.05], 0.15, 0.3, [0.04, 0, -0.2])
    ]
  } else if (visual.archetype === 'golem') {
    const body = addMesh(group, geo('rock-body', () => new THREE.DodecahedronGeometry(0.8, 0)), primary, [0, 0.86, 0], [0.68, 0.7, 0.55])
    parts.body = body
    addMesh(group, geo('rock-head', () => new THREE.DodecahedronGeometry(0.55, 0)), primary, [0, 1.56, 0.08], [0.62, 0.55, 0.55])
    parts.head = group.children[group.children.length - 1]
    addEyes(group, [0, 1.62, 0.38], 0.18, 0.1, eyeWhite, pupil)
    addMesh(group, geo('seam', () => new THREE.BoxGeometry(0.16, 0.7, 0.04)), accent, [0, 0.9, 0.55], [1, 1, 1], [0, 0, 0.08])
    parts.arms = [
      makeLimb(group, secondary, dark, [-0.62, 0.92, 0], 0.24, 0.66, [0.1, 0, 0.34]),
      makeLimb(group, secondary, dark, [0.62, 0.92, 0], 0.24, 0.66, [0.1, 0, -0.34])
    ]
    parts.legs = [
      makeLimb(group, secondary, dark, [-0.27, 0.36, 0], 0.25, 0.4, [0.02, 0, 0.08]),
      makeLimb(group, secondary, dark, [0.27, 0.36, 0], 0.25, 0.4, [0.02, 0, -0.08])
    ]
    addSpineAccent(group, accent, [0, 1.1, -0.32], 0.28, 0.6, hook)
  } else {
    const body = addMesh(group, sphere(), primary, [0, 0.92, 0], [0.52, 0.6, 0.46])
    parts.body = body
    addMesh(group, sphere(), secondary, [0, 0.58, 0], [0.3, 0.36, 0.28])
    const head = addMesh(group, sphere(), primary, [0, 1.44, 0.04], [0.42, 0.4, 0.42])
    parts.head = head
    addEyes(group, [0, 1.5, 0.36], 0.2, 0.11, eyeWhite, pupil)
    addEars(group, head, primary, accent, visual.horns)
    parts.halo = makeHalo(group, accent)
    parts.tail = makeWispTail(group, [0, 0.55, -0.1], accent)
    parts.arms = [
      makeLimb(group, primary, dark, [-0.4, 0.98, 0], 0.13, 0.48, [0.2, 0, 0.25]),
      makeLimb(group, primary, dark, [0.4, 0.98, 0], 0.13, 0.48, [0.2, 0, -0.25])
    ]
  }

  if (visual.aura) {
    const aura = new THREE.Mesh(
      geo('aura-ring', () => new THREE.TorusGeometry(1.15, 0.035, 8, 36)),
      new THREE.MeshBasicMaterial({ color: visual.accent, transparent: true, opacity: 0.62, blending: THREE.AdditiveBlending, depthWrite: false })
    )
    aura.rotation.x = Math.PI / 2
    aura.position.y = 0.34
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
      geo('crown', () => new THREE.ConeGeometry(0.22, 0.48, 4)),
      material(visual.accent, { emissive: visual.accent, emissiveIntensity: 0.6 })
    )
    crown.position.set(0, 1.9, 0)
    crown.rotation.y = Math.PI / 4
    group.add(crown)
    parts.crown = crown
  }

  group.userData.speciesId = species.id
  group.userData.species = species
  return group
}

function addEyes(group, position, spread, size, eyeWhite, pupil) {
  for (const side of [-1, 1]) {
    addMesh(group, sphere(), eyeWhite, [position[0] + side * spread, position[1], position[2]], [size, size * 1.1, size * 0.55])
    addMesh(group, sphere(), pupil, [position[0] + side * spread, position[1] - 0.02, position[2] + size * 0.42], [size * 0.5, size * 0.62, size * 0.3])
  }
}

function addEars(group, head, primary, accent, horns) {
  if (horns) {
    for (const side of [-1, 1]) {
      addMesh(group, geo('horn', () => new THREE.ConeGeometry(0.11, 0.52, 4)), accent, [side * 0.24, 0.34, -0.02], [1, 1, 1], [0.2, 0, side * -0.38])
    }
  } else {
    for (const side of [-1, 1]) {
      addMesh(group, geo('ear', () => new THREE.ConeGeometry(0.16, 0.36, 4)), primary, [side * 0.28, 0.3, -0.06], [1, 1, 0.55], [0.1, 0, side * -0.35])
    }
  }
}

function addAntennae(group, head, accent, hook) {
  for (const side of [-1, 1]) {
    const antenna = addMesh(group, geo('antenna', () => new THREE.CylinderGeometry(0.025, 0.04, 0.6, 4)), accent, [side * 0.16, 0.38, 0], [1, 1, 1], [0, 0, side * -0.22])
    addMesh(antenna, geo('antenna-tip', () => new THREE.SphereGeometry(0.08, 6, 4)), accent, [0, 0.34, 0])
  }
  if (hook === 1) {
    addMesh(group, geo('frill', () => new THREE.ConeGeometry(0.18, 0.4, 3)), accent, [0, 0.34, -0.3], [1.6, 1, 0.3], [-0.4, 0, 0])
  }
}

function makeLimb(group, primary, dark, position, radius, length, rotation = [0, 0, 0]) {
  const pivot = new THREE.Group()
  pivot.position.set(...position)
  pivot.rotation.set(...rotation)
  const limb = new THREE.Mesh(geo('limb', () => new THREE.CylinderGeometry(radius * 0.8, radius, length, 5)), primary)
  limb.position.y = -length / 2
  pivot.add(limb)
  const foot = new THREE.Mesh(geo('foot', () => new THREE.SphereGeometry(radius * 1.08, 6, 4)), dark)
  foot.position.y = -length
  foot.scale.z = 1.3
  pivot.add(foot)
  group.add(pivot)
  return pivot
}

function addLegsQuadruped(group, primary, dark, parts) {
  const positions = [
    [-0.36, 0.52, 0.46],
    [0.36, 0.52, 0.46],
    [-0.36, 0.52, -0.46],
    [0.36, 0.52, -0.46]
  ]
  for (const position of positions) {
    parts.legs.push(makeLimb(group, primary, dark, position, 0.13, 0.5, [0.03, 0, position[0] > 0 ? -0.04 : 0.04]))
  }
}

function makeTail(group, position, secondary, accent, length) {
  const pivot = new THREE.Group()
  pivot.position.set(...position)
  let current = pivot
  const count = 3
  for (let i = 0; i < count; i++) {
    const radius = 0.14 - i * 0.03
    const segment = new THREE.Mesh(geo('tail-seg', () => new THREE.SphereGeometry(1, 6, 4)), i === count - 1 ? accent : secondary)
    segment.position.z = -length * 0.42
    segment.scale.set(radius * 1.8, radius * 1.4, length * 0.6)
    current.add(segment)
    const next = new THREE.Group()
    next.position.z = -length * 0.64
    segment.add(next)
    current = next
  }
  group.add(pivot)
  return pivot
}

function makeFinTail(group, position, accent) {
  const pivot = new THREE.Group()
  pivot.position.set(...position)
  const fin = new THREE.Mesh(geo('fin-tail', () => new THREE.ConeGeometry(0.42, 0.8, 3)), accent)
  fin.rotation.x = Math.PI / 2
  fin.position.z = -0.36
  fin.scale.set(1, 1, 0.3)
  pivot.add(fin)
  group.add(pivot)
  return pivot
}

function makeWispTail(group, position, accent) {
  const pivot = new THREE.Group()
  pivot.position.set(...position)
  const tail = new THREE.Mesh(geo('wisp-tail', () => new THREE.ConeGeometry(0.28, 0.9, 5)), material(accent, { emissive: accent, emissiveIntensity: 0.35, transparent: true, opacity: 0.8 }))
  tail.position.y = -0.4
  tail.rotation.x = Math.PI
  pivot.add(tail)
  group.add(pivot)
  return pivot
}

function makeWing(group, accent, secondary, side, size) {
  const pivot = new THREE.Group()
  pivot.position.set(side * 0.38, 1.1, -0.05)
  pivot.rotation.z = side * (side > 0 ? -0.4 : 0.4)
  const wing = new THREE.Group()
  for (let i = 0; i < 3; i++) {
    const feather = new THREE.Mesh(
      geo('wing-feather', () => new THREE.ConeGeometry(0.22, 1.0, 3)),
      i === 0 ? accent : secondary
    )
    feather.position.x = side * (0.34 + i * 0.22)
    feather.position.y = 0.24 + i * 0.06
    feather.rotation.z = side * (Math.PI / 2 - 0.26 - i * 0.12)
    feather.scale.set(1, size * (1 - i * 0.14), 0.28)
    wing.add(feather)
  }
  wing.rotation.z = side * 0.2
  pivot.add(wing)
  pivot.userData.side = side
  group.add(pivot)
  return pivot
}

function addFins(group, secondary, accent, parts) {
  for (const side of [-1, 1]) {
    addMesh(group, geo('side-fin', () => new THREE.ConeGeometry(0.28, 0.6, 3)), secondary, [side * 0.5, 0.9, 0.16], [1, 1, 0.3], [0, 0, side * -1.1])
  }
  const tailFin = addMesh(group, geo('rear-fin', () => new THREE.ConeGeometry(0.34, 0.66, 3)), accent, [0, 1.0, -0.86], [1, 1, 0.3], [Math.PI / 2, 0, 0])
  parts.tailFin = tailFin
}

function addSpineAccent(group, accent, position, width, length, hook) {
  for (let i = 0; i < 3; i++) {
    addMesh(group, geo('spine', () => new THREE.ConeGeometry(width * 0.34, length * (0.4 + i * 0.15), 3)), accent, [position[0], position[1] + i * 0.05, position[2] - i * length * 0.18], [1, 1, 0.55], [0.2, 0, 0])
  }
  if (hook === 2) {
    addMesh(group, geo('mark', () => new THREE.TorusGeometry(0.16, 0.035, 5, 10)), accent, [0, position[1], position[2] + 0.2], [1, 1, 1], [Math.PI / 2, 0, 0])
  }
}

function addBlobCrown(group, accent, visual) {
  const count = visual.markings % 2 === 0 ? 5 : 3
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2
    addMesh(group, geo('blob-crown', () => new THREE.ConeGeometry(0.08, 0.3, 4)), accent, [Math.cos(angle) * 0.32, 1.3, Math.sin(angle) * 0.32], [1, 1, 1], [0, 0, Math.cos(angle) * 0.3])
  }
}

function makeHalo(group, accent) {
  const halo = new THREE.Mesh(
    geo('halo', () => new THREE.TorusGeometry(0.42, 0.035, 6, 18)),
    material(accent, { emissive: accent, emissiveIntensity: 0.65 })
  )
  halo.position.y = 1.98
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
  if (parts.body) {
    parts.body.position.y += Math.sin(t * speed) * 0.0035
    parts.body.scale.y = 1 + Math.sin(t * speed) * 0.015
  }
  if (parts.head) {
    parts.head.rotation.y = Math.sin(t * 0.8) * 0.08
    parts.head.position.y += Math.sin(t * speed + 0.4) * 0.002
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
    wing.rotation.z = side * (side > 0 ? -0.4 : 0.4) + Math.sin(t * 3.4) * 0.45 * side
  }
  if (parts.segments.length) {
    for (const [index, segment] of parts.segments.entries()) {
      segment.position.x = Math.sin(t * 1.5 + index * 0.5) * 0.06 * index
      segment.position.y = 0.66 + Math.sin(index / (parts.segments.length - 1) * Math.PI) * 0.42 + Math.sin(t * 1.8 + index * 0.4) * 0.03
    }
  }
  if (parts.halo) {
    parts.halo.rotation.z = t * 0.6
    parts.halo.position.y = 1.98 + Math.sin(t * 1.3) * 0.05
  }
  if (parts.aura) {
    parts.aura.rotation.z = t * 0.5
    parts.aura.scale.setScalar(1 + Math.sin(t * 1.4) * 0.06)
  }
  if (parts.motes) {
    parts.motes.rotation.y = t * 0.35
    parts.motes.position.y = Math.sin(t * 1.1) * 0.1
  }
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
  // Geometries and materials are shared through caches; only the group is removed.
  group?.removeFromParent?.()
}
