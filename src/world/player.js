import * as THREE from 'three'
import { terrainHeight } from './world.js'

const WALK_SPEED = 7.2
const SPRINT_SPEED = 11.2
const ACCELERATION = 18
const GRAVITY = 22
const JUMP_SPEED = 7.4

function material(color, options = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    flatShading: false,
    roughness: options.roughness ?? 0.62,
    metalness: options.metalness ?? 0.04,
    emissive: options.emissive || 0x000000,
    emissiveIntensity: options.emissiveIntensity || 0
  })
}

function add(group, geometry, mat, position, scale = [1, 1, 1], rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(geometry, mat)
  mesh.position.set(...position)
  mesh.scale.set(...scale)
  mesh.rotation.set(...rotation)
  group.add(mesh)
  return mesh
}

export class Player {
  constructor(scene, spawn = [0, 0, 10]) {
    this.group = new THREE.Group()
    this.group.position.set(spawn[0], terrainHeight(spawn[0], spawn[2]), spawn[2])
    scene.add(this.group)
    this.velocity = new THREE.Vector3()
    this.position = this.group.position
    this.facing = 0
    this.cameraYaw = Math.PI
    this.cameraPitch = 0.24
    this.cameraDistance = 9.4
    this.cameraTarget = new THREE.Vector3()
    this.cameraPosition = new THREE.Vector3()
    this.onGround = true
    this.radius = 0.55
    this.speed = 0
    this.parts = {}
    this.build()
    this.cameraPosition.set(0, 9, 18)
    this.moving = false
    this.sprinting = false
  }

  build() {
    const skin = material('#e8b48f')
    const cloth = material('#2f7f82')
    const clothDark = material('#1e575c')
    const scarf = material('#ffcc66')
    const hair = material('#352a2a')
    const leather = material('#6b4c36')
    const metal = material('#cfd6d9', { metalness: 0.55, roughness: 0.38 })
    const glow = material('#9be8ff', { emissive: '#5fc8ff', emissiveIntensity: 0.8 })

    const body = add(this.group, new THREE.CapsuleGeometry(0.34, 0.62, 12, 12), cloth, [0, 1.06, 0], [1, 1, 0.9])
    this.parts.body = body
    add(this.group, new THREE.CylinderGeometry(0.36, 0.4, 0.35, 12, 1), clothDark, [0, 0.68, 0])
    add(this.group, new THREE.SphereGeometry(0.31, 12, 10), skin, [0, 1.72, 0.01])
    const hairMesh = add(this.group, new THREE.IcosahedronGeometry(0.335, 2), hair, [0, 1.81, -0.03], [1, 0.8, 1])
    this.parts.hair = hairMesh
    add(this.group, new THREE.SphereGeometry(0.075, 10, 8), material('#1b1d24'), [-0.11, 1.74, 0.27])
    add(this.group, new THREE.SphereGeometry(0.075, 10, 8), material('#1b1d24'), [0.11, 1.74, 0.27])
    add(this.group, new THREE.SphereGeometry(0.09, 10, 8), skin, [0, 1.66, 0.29], [1.2, 0.6, 0.55])
    add(this.group, new THREE.BoxGeometry(0.76, 0.16, 0.42), scarf, [0, 1.42, 0.02], [1, 1, 1], [0, 0, -0.03])
    add(this.group, new THREE.BoxGeometry(0.22, 0.68, 0.12), scarf, [-0.28, 1.14, -0.28], [1, 1, 1], [0.18, 0, 0.24])
    add(this.group, new THREE.BoxGeometry(0.5, 0.68, 0.26), leather, [0, 1.1, -0.38])
    add(this.group, new THREE.BoxGeometry(0.38, 0.38, 0.18), leather, [0, 0.82, -0.54])
    add(this.group, new THREE.CylinderGeometry(0.045, 0.05, 1.35, 12, 1), metal, [0.46, 0.6, 0.05], [1, 1, 1], [0.05, 0, 0.04])
    add(this.group, new THREE.SphereGeometry(0.08, 10, 8), glow, [0.46, 1.29, 0.05])

    this.parts.legs = [
      this.makeLimb(skin, leather, [-0.18, 0.6, 0], 0.12, 0.54),
      this.makeLimb(skin, leather, [0.18, 0.6, 0], 0.12, 0.54)
    ]
    this.parts.arms = [
      this.makeLimb(skin, cloth, [-0.4, 1.28, 0], 0.105, 0.58),
      this.makeLimb(skin, cloth, [0.4, 1.28, 0], 0.105, 0.58)
    ]

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.58, 24),
      new THREE.MeshBasicMaterial({ color: 0x0b0f16, transparent: true, opacity: 0.3, depthWrite: false })
    )
    shadow.rotation.x = -Math.PI / 2
    shadow.position.y = 0.04
    this.group.add(shadow)
    this.shadow = shadow
    this.group.traverse((object) => {
      if (object.isMesh && !object.material.isMeshBasicMaterial) object.castShadow = true
    })

  makeLimb(skin, cloth, position, radius, length) {
    const pivot = new THREE.Group()
    pivot.position.set(...position)
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 0.9, length, 12, 1), cloth)
    upper.position.y = -length / 2
    pivot.add(upper)
    const hand = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.2, 10, 8), skin)
    hand.position.y = -length - radius * 0.3
    pivot.add(hand)
    this.group.add(pivot)
    return pivot
  }

  update(dt, input, world, enabled = true) {
    const look = input.consumeLook()
    if (enabled) {
      this.cameraYaw -= look.dx * 0.0045
      this.cameraPitch = THREE.MathUtils.clamp(this.cameraPitch + look.dy * 0.0032, -0.03, 0.88)
      const wheel = input.consumeWheel()
      if (wheel) this.cameraDistance = THREE.MathUtils.clamp(this.cameraDistance + wheel * 0.8, 5.5, 15)
    }

    const move = enabled ? input.getMoveVector() : { x: 0, y: 0 }
    const sprint = enabled && (input.isDown('ShiftLeft') || input.isDown('ShiftRight'))
    this.sprinting = sprint && (move.x !== 0 || move.y !== 0)
    const speed = sprint ? SPRINT_SPEED : WALK_SPEED
    const forwardX = -Math.sin(this.cameraYaw)
    const forwardZ = -Math.cos(this.cameraYaw)
    const rightX = Math.cos(this.cameraYaw)
    const rightZ = -Math.sin(this.cameraYaw)
    let desiredX = (forwardX * move.y + rightX * move.x) * speed
    let desiredZ = (forwardZ * move.y + rightZ * move.x) * speed
    if (!enabled) {
      desiredX = 0
      desiredZ = 0
    }
    const blend = 1 - Math.exp(-ACCELERATION * dt)
    this.velocity.x += (desiredX - this.velocity.x) * blend
    this.velocity.z += (desiredZ - this.velocity.z) * blend
    this.speed = Math.hypot(this.velocity.x, this.velocity.z)
    this.moving = this.speed > 0.35

    if (enabled && input.consumePressed('Space') && this.onGround) {
      this.velocity.y = JUMP_SPEED
      this.onGround = false
    }

    this.position.x += this.velocity.x * dt
    this.position.z += this.velocity.z * dt
    world.resolveCollision(this.position, this.radius)
    const ground = terrainHeight(this.position.x, this.position.z)
    this.velocity.y -= GRAVITY * dt
    this.position.y += this.velocity.y * dt
    if (this.position.y <= ground) {
      this.position.y = ground
      this.velocity.y = 0
      this.onGround = true
    }

    if (this.moving) {
      const targetFacing = Math.atan2(this.velocity.x, this.velocity.z)
      let delta = targetFacing - this.facing
      while (delta > Math.PI) delta -= Math.PI * 2
      while (delta < -Math.PI) delta += Math.PI * 2
      this.facing += delta * Math.min(1, dt * 12)
    }
    this.group.rotation.y = this.facing
    this.animate(dt, input)
    this.updateCamera(dt, world)
  }

  animate(dt, input) {
    const t = performance.now() / 1000
    const speedFactor = this.moving ? (this.sprinting ? 1.8 : 1.1) : 0
    for (const [index, leg] of this.parts.legs.entries()) {
      leg.rotation.x = Math.sin(t * 9 * Math.max(0.4, speedFactor) + index * Math.PI) * (this.moving ? 0.62 : 0.02)
    }
    for (const [index, arm] of this.parts.arms.entries()) {
      arm.rotation.x = Math.sin(t * 9 * Math.max(0.4, speedFactor) + index * Math.PI + Math.PI) * (this.moving ? 0.5 : 0.04)
    }
    if (this.parts.body) {
      this.parts.body.position.y = 1.06 + Math.abs(Math.sin(t * 9 * Math.max(0.4, speedFactor))) * (this.moving ? 0.035 : 0.012)
    }
    if (this.parts.hair) this.parts.hair.rotation.z = Math.sin(t * 3.2) * 0.02
    this.shadow.position.y = 0.04 + Math.max(0, terrainHeight(this.position.x, this.position.z) - this.position.y) * 0.4
    this.shadow.scale.setScalar(this.onGround ? 1 : 0.75)
  }

  updateCamera(dt, world) {
    const target = new THREE.Vector3(this.position.x, this.position.y + 1.55, this.position.z)
    const horizontal = Math.cos(this.cameraPitch) * this.cameraDistance
    const offset = new THREE.Vector3(
      Math.sin(this.cameraYaw) * horizontal,
      Math.sin(this.cameraPitch) * this.cameraDistance + 0.7,
      Math.cos(this.cameraYaw) * horizontal
    )
    this.cameraTarget.lerp(target, 1 - Math.exp(-12 * dt))
    const desired = target.clone().add(offset)
    const ground = terrainHeight(desired.x, desired.z) + 1.2
    if (desired.y < ground) desired.y = ground
    this.cameraPosition.lerp(desired, 1 - Math.exp(-9 * dt))
  }

  applyCamera(camera) {
    camera.position.copy(this.cameraPosition)
    camera.lookAt(this.cameraTarget)
  }

  getPosition() {
    return this.position
  }

  teleport(x, z) {
    this.position.set(x, terrainHeight(x, z), z)
    this.velocity.set(0, 0, 0)
  }

  setCameraYaw(yaw) {
    this.cameraYaw = yaw
  }
}
