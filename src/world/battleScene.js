import * as THREE from 'three'
import { getMove } from '../data/moves.js'
import { BIOMES, TYPES } from '../data/types.js'
import { createCreatureMesh, animateCreatureMesh } from './creatureMesh.js'
import {
  attemptCapture,
  canUseMove,
  captureChance,
  enemyChooseMove,
  fleeBattle,
  isStunned,
  pushLog,
  speedMultiplier,
  tickStatuses,
  useMove
} from '../systems/battle.js'
import { clamp } from '../core/rng.js'

export class BattleScene {
  constructor(engine, battle, wild, options = {}) {
    this.engine = engine
    this.battle = battle
    this.wild = wild
    this.options = options
    this.onHud = options.onHud || (() => {})
    this.onEnd = options.onEnd || (() => {})
    this.onLog = options.onLog || (() => {})
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x11152a)
    this.scene.fog = new THREE.FogExp2(0x11152a, 0.022)
    this.root = new THREE.Group()
    this.scene.add(this.root)
    this.effects = []
    this.texts = []
    this.telegraphs = []
    this.cameraYaw = 0.55
    this.cameraPitch = 0.42
    this.cameraDistance = 14
    this.cameraTarget = new THREE.Vector3()
    this.cameraPosition = new THREE.Vector3()
    this.playerPos = new THREE.Vector3(-2.7, 0, 1.6)
    this.enemyPos = new THREE.Vector3(2.7, 0, -1.4)
    this.playerFacing = Math.atan2(this.enemyPos.x - this.playerPos.x, this.enemyPos.z - this.playerPos.z)
    this.enemyFacing = this.playerFacing + Math.PI
    this.playerVelocity = new THREE.Vector3()
    this.enemyVelocity = new THREE.Vector3()
    this.dodge = { readyAt: 0, until: 0, invulnUntil: 0, direction: new THREE.Vector3() }
    this.enemyCastAt = 0
    this.enemyMoveCooldownAt = 0
    this.endTimer = 0
    this.ended = false
    this.lastHud = 0
    this.time = 0
    this.biome = BIOMES[wild.biome] || BIOMES.astral
    this.buildArena()
    this.buildCombatants()
    this.buildStars()
    this.updateCamera(0.016, true)
    this.scene.userData.battle = true
  }

  buildArena() {
    const ground = new THREE.Color(this.biome.ground)
    const accent = new THREE.Color(this.biome.accent)
    const platform = new THREE.Mesh(
      new THREE.CylinderGeometry(10.5, 11.5, 1.1, 14),
      new THREE.MeshStandardMaterial({ color: ground.clone().multiplyScalar(0.9), flatShading: true, roughness: 0.88, metalness: 0.04 })
    )
    platform.position.y = -0.56
    this.root.add(platform)
    const inner = new THREE.Mesh(
      new THREE.CircleGeometry(8.4, 40),
      new THREE.MeshStandardMaterial({ color: ground.clone().lerp(new THREE.Color('#1b2234'), 0.26), flatShading: true, roughness: 0.9 })
    )
    inner.rotation.x = -Math.PI / 2
    inner.position.y = 0.01
    this.root.add(inner)
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(8.5, 0.1, 6, 64),
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.82, blending: THREE.AdditiveBlending })
    )
    ring.rotation.x = Math.PI / 2
    ring.position.y = 0.08
    this.root.add(ring)
    this.ring = ring
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const rune = new THREE.Mesh(
        new THREE.RingGeometry(0.25, 0.36, 5),
        new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.35, side: THREE.DoubleSide, blending: THREE.AdditiveBlending })
      )
      rune.rotation.x = -Math.PI / 2
      rune.position.set(Math.cos(angle) * 6.4, 0.06, Math.sin(angle) * 6.4)
      this.root.add(rune)
    }
    const rockMaterial = new THREE.MeshStandardMaterial({ color: '#3f4050', flatShading: true, roughness: 0.9 })
    for (let i = 0; i < 18; i++) {
      const angle = (i / 18) * Math.PI * 2 + 0.2
      const distance = 11 + Math.random() * 5
      const size = 0.6 + Math.random() * 2.2
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(size, 0), rockMaterial)
      rock.position.set(Math.cos(angle) * distance, -2 - Math.random() * 4, Math.sin(angle) * distance)
      rock.rotation.set(Math.random(), Math.random(), Math.random())
      this.root.add(rock)
    }
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      const crystal = new THREE.Mesh(
        new THREE.ConeGeometry(0.45, 3 + Math.random() * 2, 5),
        new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 0.55, transparent: true, opacity: 0.9, flatShading: true })
      )
      crystal.position.set(Math.cos(angle) * 9.6, 1.4, Math.sin(angle) * 9.6)
      crystal.rotation.z = Math.cos(angle) * 0.25
      this.root.add(crystal)
    }
    this.ambient = new THREE.HemisphereLight(0xb8c8ff, 0x201823, 1.5)
    this.scene.add(this.ambient)
    const key = new THREE.DirectionalLight(0xffe0b8, 2.5)
    key.position.set(-6, 14, 8)
    this.scene.add(key)
    const rim = new THREE.DirectionalLight(0x9b7dff, 1.6)
    rim.position.set(6, 8, -10)
    this.scene.add(rim)
    this.scene.add(new THREE.AmbientLight(0x3c4468, 0.8))

    const trainer = this.makeTrainer()
    trainer.position.set(-0.5, 0, 5.4)
    trainer.rotation.y = Math.PI
    this.root.add(trainer)
    this.trainer = trainer
  }

  makeTrainer() {
    const group = new THREE.Group()
    const cloth = new THREE.MeshStandardMaterial({ color: '#2f7f82', flatShading: false, roughness: 0.66 })
    const skin = new THREE.MeshStandardMaterial({ color: '#e8b48f', flatShading: false, roughness: 0.62 })
    const scarf = new THREE.MeshStandardMaterial({ color: '#ffcc66', flatShading: false, roughness: 0.56 })
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 0.55, 12, 12), cloth)
    body.position.y = 1.0
    group.add(body)
    const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28, 2), skin)
    head.position.y = 1.7
    group.add(head)
    const scarfMesh = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.14, 0.38), scarf)
    scarfMesh.position.y = 1.38
    group.add(scarfMesh)
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.11, 0.5, 12, 1), cloth)
      leg.position.set(side * 0.16, 0.45, 0)
      group.add(leg)
      const foot = new THREE.Mesh(new THREE.SphereGeometry(0.11, 10, 8), skin)
      foot.position.set(side * 0.16, 0.12, 0)
      group.add(foot)
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.09, 0.5, 12, 1), cloth)
      arm.position.set(side * 0.38, 1.0, 0.04)
      arm.rotation.z = side * 0.2
      group.add(arm)
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 8), skin)
      hand.position.set(side * 0.46, 0.72, 0.04)
      group.add(hand)
    }
    return group
  }

  buildStars() {
    const count = 220
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120
      positions[i * 3 + 1] = 8 + Math.random() * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const stars = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xdde8ff, size: 0.18, transparent: true, opacity: 0.75, depthWrite: false }))
    this.scene.add(stars)
    this.stars = stars
  }

  buildCombatants() {
    const playerSpecies = this.battle.player.species
    const enemySpecies = this.battle.enemy.species
    this.playerMesh = createCreatureMesh(playerSpecies, { scale: 1.05 })
    this.playerMesh.position.copy(this.playerPos)
    this.playerMesh.rotation.y = this.playerFacing
    this.root.add(this.playerMesh)
    this.enemyMesh = createCreatureMesh(enemySpecies, { scale: this.wild.legendary ? 1.25 : 1.0 })
    this.enemyMesh.position.copy(this.enemyPos)
    this.enemyMesh.rotation.y = this.enemyFacing
    this.root.add(this.enemyMesh)
    if (this.wild.legendary) {
      const aura = new THREE.PointLight(TYPES[enemySpecies.types[0]]?.color || '#c08bff', 4, 22, 2)
      aura.position.set(this.enemyPos.x, 2, this.enemyPos.z)
      this.root.add(aura)
      this.enemyAura = aura
    }
    this.updateCombatantPositions()
  }

  updateCombatantPositions() {
    if (this.playerMesh) {
      this.playerMesh.position.set(this.playerPos.x, this.playerPos.y, this.playerPos.z)
      this.playerMesh.rotation.y = this.playerFacing
    }
    if (this.enemyMesh) {
      this.enemyMesh.position.set(this.enemyPos.x, this.enemyPos.y, this.enemyPos.z)
      this.enemyMesh.rotation.y = this.enemyFacing
    }
  }

  update(dt, input, now = Date.now()) {
    this.time += dt
    const look = input.consumeLook()
    this.cameraYaw -= look.dx * 0.005
    this.cameraPitch = clamp(this.cameraPitch + look.dy * 0.0035, 0.12, 0.9)
    const wheel = input.consumeWheel()
    if (wheel) this.cameraDistance = clamp(this.cameraDistance + wheel * 0.9, 9, 22)

    if (!this.battle.over) {
      this.updatePlayer(dt, input, now)
      this.updateEnemy(dt, now)
      this.updateTelegraphs(now)
      if (this.dodge.invulnUntil > 0 && this.dodge.invulnUntil < now) this.dodge.invulnUntil = 0
    }
    tickStatuses(this.battle, now)
    this.updateEffects(dt)
    this.updateCamera(dt)
    this.animateCombatants()
    if (this.battle.over && !this.ended) {
      if (!this.endTimer) this.endTimer = now + 1100
      if (now >= this.endTimer) {
        this.ended = true
        this.onEnd(this.battle.result, this.battle)
      }
    }
    if (now - this.lastHud > 80) {
      this.lastHud = now
      this.onHud(this.hudState(now))
    }
  }

  updatePlayer(dt, input, now) {
    const move = input.getMoveVector()
    const forwardX = -Math.sin(this.cameraYaw)
    const forwardZ = -Math.cos(this.cameraYaw)
    const rightX = Math.cos(this.cameraYaw)
    const rightZ = -Math.sin(this.cameraYaw)
    let x = forwardX * move.y + rightX * move.x
    let z = forwardZ * move.y + rightZ * move.x
    const length = Math.hypot(x, z)
    if (length > 1) {
      x /= length
      z /= length
    }
    if (input.consumePressed('KeyQ') || input.consumePressed('Space')) {
      if (now >= this.dodge.readyAt) {
        this.dodge.readyAt = now + 3800
        this.dodge.until = now + 220
        this.dodge.invulnUntil = now + 430
        const dir = length > 0.1 ? new THREE.Vector3(x, 0, z) : new THREE.Vector3(Math.sin(this.playerFacing), 0, Math.cos(this.playerFacing))
        this.dodge.direction.copy(dir)
        this.spawnBurst(this.playerPos.clone().add(new THREE.Vector3(0, 0.3, 0)), '#9be8ff', 12, 0.7)
      }
    }
    const speed = speedMultiplier(this.battle.player, now) * (now < this.dodge.until ? 16 : 5.4)
    let targetX = x * speed
    let targetZ = z * speed
    if (now < this.dodge.until) {
      targetX = this.dodge.direction.x * speed
      targetZ = this.dodge.direction.z * speed
    }
    this.playerVelocity.x += (targetX - this.playerVelocity.x) * Math.min(1, dt * 16)
    this.playerVelocity.z += (targetZ - this.playerVelocity.z) * Math.min(1, dt * 16)
    if (!this.battle.over) {
      this.playerPos.x += this.playerVelocity.x * dt
      this.playerPos.z += this.playerVelocity.z * dt
    }
    this.clampToArena(this.playerPos, 7.9)
    if (Math.hypot(this.playerVelocity.x, this.playerVelocity.z) > 0.3) {
      this.playerFacing = Math.atan2(this.playerVelocity.x, this.playerVelocity.z)
    }
  }

  clampToArena(position, radius) {
    const distance = Math.hypot(position.x, position.z)
    if (distance > radius) {
      const scale = radius / distance
      position.x *= scale
      position.z *= scale
    }
  }

  updateEnemy(dt, now) {
    const battle = this.battle
    if (battle.enemy.hp <= 0) return
    const dx = this.playerPos.x - this.enemyPos.x
    const dz = this.playerPos.z - this.enemyPos.z
    const distance = Math.hypot(dx, dz) || 0.001
    const move = enemyChooseMove(battle, distance)
    const preferred = move?.move?.range ? Math.max(2.2, move.move.range * 0.62) : 2.8
    let directionX = 0
    let directionZ = 0
    if (distance > preferred + 0.4) {
      directionX = dx / distance
      directionZ = dz / distance
    } else if (distance < preferred - 0.8) {
      directionX = -dx / distance
      directionZ = -dz / distance
    } else {
      directionX = -dz / distance * 0.4
      directionZ = dx / distance * 0.4
    }
    const speed = speedMultiplier(battle.enemy, now) * 2.4
    this.enemyPos.x += directionX * speed * dt
    this.enemyPos.z += directionZ * speed * dt
    this.clampToArena(this.enemyPos, 7.9)
    this.enemyFacing = Math.atan2(this.playerPos.x - this.enemyPos.x, this.playerPos.z - this.enemyPos.z)

    if (isStunned(battle.enemy, now) || now < this.enemyCastAt || now < this.enemyMoveCooldownAt) return
    const choice = enemyChooseMove(battle, distance)
    if (!choice) return
    this.enemyMoveCooldownAt = now + 1200 + Math.random() * 900
    if (choice.move.shape === 'self') {
      this.castEnemyMove(choice, now)
      return
    }
    if (distance > choice.move.range + 1.2 && choice.move.shape !== 'aoe') return
    const telegraph = {
      moveId: choice.id,
      center: this.playerPos.clone(),
      radius: choice.move.shape === 'aoe' ? choice.move.radius : choice.move.shape === 'cone' ? 2.8 : 1.7,
      resolveAt: now + (choice.move.power > 45 ? 1150 : 800),
      mesh: this.makeTelegraph(choice.move, this.playerPos)
    }
    this.telegraphs.push(telegraph)
    this.onLog(`Incoming ${choice.move.name}!`)
  }

  makeTelegraph(move, position) {
    const color = TYPES[move.type]?.color || '#ff8a4c'
    const mesh = new THREE.Mesh(
      new THREE.RingGeometry(0.35, 1, 40),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.7, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false })
    )
    mesh.rotation.x = -Math.PI / 2
    mesh.position.set(position.x, 0.06, position.z)
    mesh.scale.setScalar(move.shape === 'aoe' ? move.radius : 1.75)
    const inner = new THREE.Mesh(
      new THREE.CircleGeometry(1, 32),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.16, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false })
    )
    inner.rotation.x = -Math.PI / 2
    inner.position.y = 0.005
    mesh.add(inner)
    this.root.add(mesh)
    return mesh
  }

  updateTelegraphs(now) {
    for (let i = this.telegraphs.length - 1; i >= 0; i--) {
      const telegraph = this.telegraphs[i]
      const remaining = telegraph.resolveAt - now
      if (remaining > 0) {
        telegraph.mesh.scale.setScalar(telegraph.mesh.scale.x + (remaining < 400 ? 0.001 : 0))
        continue
      }
      const move = getMove(telegraph.moveId)
      const distance = Math.hypot(this.playerPos.x - telegraph.center.x, this.playerPos.z - telegraph.center.z)
      const inArea = distance <= telegraph.radius
      const invulnerable = now < this.dodge.invulnUntil
      this.root.remove(telegraph.mesh)
      this.telegraphs.splice(i, 1)
      if (!inArea || invulnerable) {
        pushLog(this.battle, `${this.battle.enemy.name}'s ${move.name} misses.`)
        this.onLog(invulnerable ? 'Perfect dodge!' : 'You escaped the strike zone.')
        this.spawnFloat('MISS', this.playerPos.clone().add(new THREE.Vector3(0, 2.2, 0)), '#9be8ff')
        continue
      }
      const result = this.castEnemyMoveRaw(telegraph.moveId, now)
      if (result?.events) this.handleEvents(result.events, 'enemy')
    }
  }

  castEnemyMove(choice, now) {
    const result = useMove(this.battle, 'enemy', choice.id, { distance: 0, angle: 0 }, now)
    if (result.ok && result.events) this.handleEvents(result.events, 'enemy')
    this.spawnFloat(choice.move.name, this.enemyPos.clone().add(new THREE.Vector3(0, 2.2, 0)), '#ffb35c')
    return result
  }

  castEnemyMoveRaw(moveId, now) {
    const result = useMove(this.battle, 'enemy', moveId, { distance: 0, angle: 0 }, now)
    if (result.ok && result.events) this.handleEvents(result.events, 'enemy')
    this.spawnBurst(this.playerPos.clone().add(new THREE.Vector3(0, 0.4, 0)), TYPES[getMove(moveId).type]?.color || '#ffb35c', 14, 1.2)
    return result
  }

  castPlayerMove(index, now = Date.now()) {
    if (this.battle.over) return { ok: false, reason: 'Battle is over.' }
    const slot = this.battle.player.moves[index]
    if (!slot) return { ok: false, reason: 'No move in that slot.' }
    const move = getMove(slot.id)
    const check = canUseMove(this.battle, 'player', slot.id, now)
    if (!check.ok) return check
    this.playerFacing = Math.atan2(this.enemyPos.x - this.playerPos.x, this.enemyPos.z - this.playerPos.z)
    const dx = this.enemyPos.x - this.playerPos.x
    const dz = this.enemyPos.z - this.playerPos.z
    const distance = Math.hypot(dx, dz)
    const angle = Math.atan2(dx, dz) - this.playerFacing
    const result = useMove(this.battle, 'player', slot.id, { distance, angle }, now)
    this.onLog(`${this.battle.player.name} uses ${move.name}.`)
    this.spawnFloat(move.name, this.playerPos.clone().add(new THREE.Vector3(0, 2.3, 0)), TYPES[move.type]?.color || '#9be8ff')
    if (move.shape === 'self') {
      this.spawnBurst(this.playerPos.clone().add(new THREE.Vector3(0, 0.6, 0)), TYPES[move.type]?.color || '#63c96b', 14, 1.1)
    } else if (move.range > 4) {
      this.spawnProjectile(move.type, this.playerPos.clone().add(new THREE.Vector3(0, 1, 0)), this.enemyPos.clone().add(new THREE.Vector3(0, 0.8, 0)))
    } else {
      this.spawnBurst(this.enemyPos.clone().add(new THREE.Vector3(0, 0.7, 0)), TYPES[move.type]?.color || '#ff8a4c', 16, 1.3)
    }
    if (result.events) this.handleEvents(result.events, 'player')
    return result
  }

  handleEvents(events, side) {
    for (const event of events) {
      if (event.type === 'damage') {
        const target = event.target === 'player' ? this.playerPos : this.enemyPos
        const suffix = event.crit ? '!' : ''
        this.spawnFloat(`-${event.amount}${suffix}`, target.clone().add(new THREE.Vector3(0, 2.0, 0)), event.crit ? '#ffd166' : '#ffffff')
        this.spawnBurst(target.clone().add(new THREE.Vector3(0, 0.7, 0)), event.typeMult >= 2 ? '#ffe066' : '#ff9f7a', event.crit ? 22 : 12, 0.9)
      }
      if (event.type === 'heal') {
        const target = event.target === 'player' ? this.playerPos : this.enemyPos
        this.spawnFloat(`+${event.amount}`, target.clone().add(new THREE.Vector3(0, 2.0, 0)), '#8ef0a0')
        this.spawnBurst(target.clone().add(new THREE.Vector3(0, 0.6, 0)), '#63c96b', 12, 1)
      }
      if (event.type === 'shield') {
        const target = event.target === 'player' ? this.playerPos : this.enemyPos
        this.spawnFloat('SHIELD', target.clone().add(new THREE.Vector3(0, 2.3, 0)), '#9be8ff')
        this.spawnBurst(target.clone().add(new THREE.Vector3(0, 0.7, 0)), '#9be8ff', 16, 1.1)
      }
      if (event.type === 'status') {
        const target = event.target === 'player' ? this.playerPos : this.enemyPos
        this.spawnFloat(event.status.toUpperCase(), target.clone().add(new THREE.Vector3(0, 2.5, 0)), '#c08bff')
      }
    }
  }

  spawnProjectile(type, from, to) {
    const color = TYPES[type]?.color || '#ffe066'
    const mesh = this.makeStyledProjectile(type, color)
    mesh.position.copy(from)
    this.root.add(mesh)
    const duration = 0.24
    const spin = new THREE.Vector3(Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3)
    this.effects.push({
      mesh,
      life: 0,
      maxLife: duration,
      update: (effect, dt) => {
        effect.life += dt
        const t = Math.min(1, effect.life / effect.maxLife)
        mesh.position.lerpVectors(from, to, t)
        mesh.rotation.x += spin.x * dt
        mesh.rotation.y += spin.y * dt
        mesh.scale.setScalar(0.7 + Math.sin(t * Math.PI) * 0.5)
        if (t >= 1) {
          this.spawnBurst(to, color, 18, 1, type)
          effect.dead = true
        }
      }
    })
  }

  makeStyledProjectile(type, color) {
    const additive = { color, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending }
    let mesh
    switch (type) {
      case 'Fire':
        mesh = new THREE.Mesh(
          projectileGeometry('flame', () => new THREE.ConeGeometry(0.2, 0.5, 7)),
          new THREE.MeshBasicMaterial(additive)
        )
        mesh.rotation.x = -Math.PI / 3
        break
      case 'Frost':
        mesh = new THREE.Mesh(
          projectileGeometry('shard', () => new THREE.ConeGeometry(0.16, 0.44, 5)),
          new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.7, transparent: true, opacity: 0.92, roughness: 0.2 })
        )
        mesh.rotation.x = Math.PI / 2
        break
      case 'Water':
        mesh = new THREE.Mesh(projectileGeometry('drop', () => new THREE.IcosahedronGeometry(0.24, 1)), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.4, transparent: true, opacity: 0.8, roughness: 0.1, metalness: 0.1 }))
        break
      case 'Nature':
        mesh = new THREE.Mesh(
          projectileGeometry('leaf', () => {
            const shape = new THREE.Shape()
            shape.moveTo(0, 0)
            shape.quadraticCurveTo(0.22, 0.3, 0.08, 0.72)
            shape.quadraticCurveTo(-0.06, 0.4, -0.2, 0.16)
            shape.quadraticCurveTo(-0.1, 0.05, 0, 0)
            return new THREE.ExtrudeGeometry(shape, { depth: 0.03, bevelEnabled: false })
          }),
          new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.5, side: THREE.DoubleSide, transparent: true, opacity: 0.95 })
        )
        break
      case 'Stone':
        mesh = new THREE.Mesh(projectileGeometry('rock', () => new THREE.DodecahedronGeometry(0.24, 0)), new THREE.MeshStandardMaterial({ color, roughness: 0.85, emissive: color, emissiveIntensity: 0.12 }))
        break
      case 'Storm':
        mesh = new THREE.Mesh(descriptionBoltGeometry(), new THREE.MeshBasicMaterial(additive))
        break
      default:
        mesh = new THREE.Mesh(
          projectileGeometry('star', () => new THREE.OctahedronGeometry(0.26, 0)),
          new THREE.MeshBasicMaterial(additive)
        )
    }
    const halo = new THREE.Mesh(
      projectileGeometry('halo', () => new THREE.SphereGeometry(0.36, 10, 8)),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false })
    )
    mesh.add(halo)
    return mesh
  }

  spawnBurst(position, color, count = 12, strength = 1, type = null) {
    const group = new THREE.Group()
    group.position.copy(position)
    this.root.add(group)
    const particleSpec = impactSpec(type, color)
    const meshes = []
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(particleSpec.geometry, particleSpec.materialClass === 'basic'
        ? new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending })
        : new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.4, transparent: true, opacity: 0.95, roughness: 0.5 }))
      const dir = new THREE.Vector3(Math.random() - 0.5, Math.random() * 0.9, Math.random() - 0.5).normalize().multiplyScalar((2 + Math.random() * 3) * strength)
      mesh.scale.setScalar(particleSpec.scale * (0.8 + Math.random() * 0.5))
      const spin = new THREE.Vector3(Math.random() * 8 - 4, Math.random() * 8 - 4, Math.random() * 8 - 4)
      mesh.userData.velocity = dir
      mesh.userData.spin = spin
      if (particleSpec bsElongate) mesh.scale.y = particleSpec.scale * 2.4
      group.add(mesh)
      meshes.push(mesh)
    }
    this.effects.push({
      mesh: group,
      life: 0,
      maxLife: 0.65,
      update: (effect, dt) => {
        effect.life += dt
        for (const particle of meshes) {
          particle.position.addScaledVector(particle.userData.velocity, dt)
          particle.userData.velocity.y -= 5 * dt
          particle.rotation.x += particle.userData.spin.x * dt
          particle.rotation.y += particle.userData.spin.y * dt
          particle.material.opacity = Math.max(0, 1 - effect.life / effect.maxLife)
        }
        if (effect.life >= effect.maxLife) effect.dead = true
      }
    })
  }

  spawnFloat(text, position, color = '#ffffff') {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 96
    const context = canvas.getContext('2d')
    context.font = 'bold 52px "Trebuchet MS", sans-serif'
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.lineWidth = 8
    context.strokeStyle = 'rgba(10,14,23,0.9)'
    context.strokeText(text, 128, 48)
    context.fillStyle = color
    context.fillText(text, 128, 48)
    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }))
    sprite.position.copy(position)
    sprite.scale.set(2.8, 1.05, 1)
    this.root.add(sprite)
    this.effects.push({
      mesh: sprite,
      life: 0,
      maxLife: 1.1,
      update: (effect, dt) => {
        effect.life += dt
        sprite.position.y += dt * 0.9
        sprite.material.opacity = Math.max(0, 1 - effect.life / effect.maxLife)
        if (effect.life >= effect.maxLife) effect.dead = true
      }
    })
  }

  updateEffects(dt) {
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const effect = this.effects[i]
      effect.update(effect, dt)
      if (effect.dead) {
        this.root.remove(effect.mesh)
        this.effects.splice(i, 1)
      }
    }
  }

  animateCombatants() {
    if (this.playerMesh) animateCreatureMesh(this.playerMesh, this.time, Math.hypot(this.playerVelocity.x, this.playerVelocity.z) > 0.3 ? 'moving' : 'battle')
    if (this.enemyMesh) animateCreatureMesh(this.enemyMesh, this.time + 1.4, 'battle')
    this.updateCombatantPositions()
  }

  attemptCapture(disc, now = Date.now()) {
    if (this.battle.over) return { ok: false, reason: 'Battle is over.' }
    const chance = captureChance(this.battle, disc)
    const result = attemptCapture(this.battle, disc)
    this.onLog(result.success ? 'Capture field holds!' : `Capture failed (${Math.round(result.chance * 100)}% chance).`)
    if (result.success) {
      this.spawnBurst(this.enemyPos.clone().add(new THREE.Vector3(0, 0.7, 0)), '#ffe066', 28, 1.6)
      this.spawnFloat('CAPTURED!', this.enemyPos.clone().add(new THREE.Vector3(0, 2.4, 0)), '#ffe066')
    } else {
      this.spawnBurst(this.enemyPos.clone().add(new THREE.Vector3(0, 0.7, 0)), '#ff8a4c', 10, 0.8)
      this.enemyMoveCooldownAt = Math.min(this.enemyMoveCooldownAt, now + 350)
    }
    return { ...result, chance }
  }

  attemptFlee(now = Date.now()) {
    const result = fleeBattle(this.battle)
    this.onLog(result.fled ? 'You retreat from the encounter.' : 'You could not escape!')
    return result
  }

  hudState(now = Date.now()) {
    return {
      battle: this.battle,
      cooldowns: this.battle.player.moves.map((slot) => Math.max(0, slot.readyAt - now)),
      maxCooldowns: this.battle.player.moves.map((slot) => getMove(slot.id).cooldown * 1000),
      dodgeRemaining: Math.max(0, this.dodge.readyAt - now),
      captureChance: captureChance(this.battle, null),
      inRange: Math.hypot(this.playerPos.x - this.enemyPos.x, this.playerPos.z - this.enemyPos.z),
      playerPos: this.playerPos,
      enemyPos: this.enemyPos,
      invulnerable: now < this.dodge.invulnUntil
    }
  }

  updateCamera(dt, immediate = false) {
    const focus = new THREE.Vector3(
      (this.playerPos.x + this.enemyPos.x) * 0.5,
      1.25,
      (this.playerPos.z + this.enemyPos.z) * 0.5
    )
    const horizontal = Math.cos(this.cameraPitch) * this.cameraDistance
    const desired = new THREE.Vector3(
      focus.x + Math.sin(this.cameraYaw) * horizontal,
      focus.y + Math.sin(this.cameraPitch) * this.cameraDistance + 2.2,
      focus.z + Math.cos(this.cameraYaw) * horizontal
    )
    if (immediate) {
      this.cameraTarget.copy(focus)
      this.cameraPosition.copy(desired)
    } else {
      this.cameraTarget.lerp(focus, 1 - Math.exp(-6 * dt))
      this.cameraPosition.lerp(desired, 1 - Math.exp(-5 * dt))
    }
    const camera = this.engine.camera
    camera.position.copy(this.cameraPosition)
    camera.lookAt(this.cameraTarget)
    if (this.glowingRing) this.glowingRing.rotation.z += dt
    this.ring.material.opacity = 0.62 + Math.sin(this.time * 2) * 0.12
  }

  dispose() {
    this.root.removeFromParent()
    for (const effect of this.effects) effect.mesh.removeFromParent()
    this.effects.length = 0
    this.scene.clear()
  }
}
