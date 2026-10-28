import * as THREE from 'three'
import { BIOMES, BIOME_ORDER, RARITIES } from '../data/types.js'
import { getSpecies, speciesByBiome, ULTRA_IDS } from '../data/species.js'
import { createCreatureMesh, animateCreatureMesh } from './creatureMesh.js'
import { terrainHeight } from './world.js'
import { clamp, pickWeighted, seededRng, uid } from '../core/rng.js'
import { computeStats } from '../core/save.js'

const RESPAWN_MIN = 18000
const RESPAWN_MAX = 36000

export class WildManager {
  constructor(scene, world, profile, getPlayerLevel) {
    this.scene = scene
    this.world = world
    this.profile = profile
    this.getPlayerLevel = getPlayerLevel
    this.wilds = []
    this.respawns = []
    this.root = new THREE.Group()
    scene.add(this.root)
    this.legendaryWild = null
    this.time = 0
    this.quality = 'high'
    this.populate()
  }

  populate() {
    for (const biome of BIOME_ORDER) {
      const count = biome === 'astral' ? 6 : 5
      for (let i = 0; i < count; i++) this.spawnWildForBiome(biome)
    }
  }

  spawnWildForBiome(biome, explicitSpecies = null, options = {}) {
    const speciesList = speciesByBiome(biome)
    if (!speciesList.length) return null
    let species = explicitSpecies ? getSpecies(explicitSpecies) : null
    if (!species) {
      const entries = speciesList.map((entry) => {
        let weight = entry.encounter.weight
        if (this.profile.lureCharges > 0 && ['rare', 'epic', 'legendary'].includes(entry.rarity)) weight *= 2.6
        return { species: entry, weight }
      })
      species = pickWeighted(seededRng(`${biome}-${Date.now()}-${Math.random()}`), entries, (entry) => entry.weight).species
    }
    const [cx, cz] = BIOMES[biome].center
    const radius = BIOMES[biome].radius
    let x = cx
    let z = cz
    for (let attempt = 0; attempt < 30; attempt++) {
      const angle = Math.random() * Math.PI * 2
      const distance = radius * (0.35 + Math.random() * 0.58)
      x = cx + Math.cos(angle) * distance
      z = cz + Math.sin(angle) * distance
      if (!this.world.isBlocked(x, z, 2.2)) break
    }
    const playerLevel = this.getPlayerLevel?.() || 5
    const baseLevel = options.level || Math.round(species.encounter.minLevel + Math.random() * (species.encounter.maxLevel - species.encounter.minLevel))
    const level = clamp(baseLevel + Math.round((playerLevel - 5) * 0.08), 1, 60)
    let chosen = species
    if (biome === 'astral' && Math.random() < 0.0000001) {
      chosen = getSpecies(ULTRA_IDS[0])
    }
    return this.createWild(chosen, level, x, z, { biome, ...options })
  }

  createWild(species, level, x, z, options = {}) {
    const stats = computeStats(species, level)
    const group = createCreatureMesh(species, { scale: options.legendary ? 1.18 : 0.92 })
    group.position.set(x, terrainHeight(x, z), z)
    group.rotation.y = Math.random() * Math.PI * 2
    this.root.add(group)
    const wild = {
      id: options.id || uid('wild'),
      species,
      speciesId: species.id,
      level,
      stats,
      hp: stats.maxHp,
      x,
      z,
      home: { x, z, radius: options.homeRadius || 14 },
      target: { x, z },
      group,
      biome: options.biome || species.biome,
      wanderTimer: 1 + Math.random() * 4,
      state: 'idle',
      visible: true,
      legendary: Boolean(options.legendary),
      eventId: options.eventId || null,
      defeated: false,
      captured: false,
      spawnAt: Date.now()
    }
    this.wilds.push(wild)
    if (wild.legendary) this.legendaryWild = wild
    return wild
  }

  spawnLegendary(event) {
    if (!event || event.phase !== 'active') return null
    const existing = this.wilds.find((wild) => wild.eventId === event.id)
    if (existing) return existing
    const species = getSpecies(event.legendaryId)
    if (!species) return null
    const [x, z] = [event.spawn.x, event.spawn.z]
    const wild = this.createWild(species, event.level, x, z, {
      biome: event.biome,
      legendary: true,
      eventId: event.id,
      homeRadius: 8
    })
    wild.group.scale.multiplyScalar(1.05)
    return wild
  }

  removeLegendary(eventId) {
    const wild = this.wilds.find((entry) => entry.eventId === eventId)
    if (wild) this.removeWild(wild, { respawn: false })
    if (this.legendaryWild?.eventId === eventId) this.legendaryWild = null
  }

  removeWild(wild, options = {}) {
    if (!wild || !wild.group) return
    wild.group.parent?.remove(wild.group)
    this.wilds = this.wilds.filter((entry) => entry.id !== wild.id)
    if (this.legendaryWild?.id === wild.id) this.legendaryWild = null
    if (options.respawn !== false && !wild.legendary) {
      this.respawns.push({
        at: Date.now() + RESPAWN_MIN + Math.random() * (RESPAWN_MAX - RESPAWN_MIN),
        biome: wild.biome,
        level: wild.level
      })
    }
  }

  hideWild(wild) {
    if (!wild) return
    wild.group.visible = false
    wild.visible = false
  }

  showWild(wild) {
    if (!wild) return
    wild.group.visible = true
    wild.visible = true
  }

  nearestWild(position, maxDistance = 3.8) {
    let nearest = null
    let nearestDistance = maxDistance
    for (const wild of this.wilds) {
      if (!wild.visible || !wild.group.visible) continue
      const distance = Math.hypot(position.x - wild.x, position.z - wild.z)
      if (distance < nearestDistance) {
        nearest = wild
        nearestDistance = distance
      }
    }
    return nearest ? { wild: nearest, distance: nearestDistance } : null
  }

  update(dt, time, playerPosition, legendaryEvent = null) {
    this.time = time
    const now = Date.now()
    for (let i = this.respawns.length - 1; i >= 0; i--) {
      if (now >= this.respawns[i].at) {
        const entry = this.respawns.splice(i, 1)[0]
        this.spawnWildForBiome(entry.biome)
      }
    }
    if (legendaryEvent?.phase === 'active') this.spawnLegendary(legendaryEvent)
    if (legendaryEvent?.phase !== 'active' && this.legendaryWild) {
      this.removeLegendary(this.legendaryWild.eventId)
    }
    for (const wild of this.wilds) {
      if (!wild.visible) continue
      const distanceToPlayer = Math.hypot(playerPosition.x - wild.x, playerPosition.z - wild.z)
      wild.group.visible = distanceToPlayer < (wild.legendary ? 140 : 82)
      if (!wild.group.visible) continue
      if (wild.legendary && legendaryEvent?.phase === 'active') {
        wild.group.position.y = terrainHeight(wild.x, wild.z) + Math.sin(time * 1.2) * 0.12
        wild.group.rotation.y += dt * 0.18
        animateCreatureMesh(wild.group, time, 'battle')
        continue
      }
      wild.wanderTimer -= dt
      if (wild.wanderTimer <= 0) {
        wild.wanderTimer = 2.5 + Math.random() * 5
        const angle = Math.random() * Math.PI * 2
        const distance = 3 + Math.random() * wild.home.radius
        wild.target.x = wild.home.x + Math.cos(angle) * distance
        wild.target.z = wild.home.z + Math.sin(angle) * distance
      }
      const dx = wild.target.x - wild.x
      const dz = wild.target.z - wild.z
      const distance = Math.hypot(dx, dz)
      if (distance > 0.6) {
        const speed = wild.legendary ? 0.4 : 1.2
        wild.x += (dx / distance) * speed * dt
        wild.z += (dz / distance) * speed * dt
        const facing = Math.atan2(dx, dz)
        let delta = facing - wild.group.rotation.y
        while (delta > Math.PI) delta -= Math.PI * 2
        while (delta < -Math.PI) delta += Math.PI * 2
        wild.group.rotation.y += delta * Math.min(1, dt * 5)
        wild.state = 'moving'
      } else {
        wild.state = 'idle'
      }
      // Avoid drifting into props or the player's personal space.
      const resolved = this.world.resolveCollision({ x: wild.x, z: wild.z }, 0.45)
      wild.x = resolved.x
      wild.z = resolved.z
      wild.group.position.set(wild.x, terrainHeight(wild.x, wild.z), wild.z)
      if (distanceToPlayer < 2.4) {
        const push = 2.4 - distanceToPlayer
        const avoidX = wild.x - playerPosition.x
        const avoidZ = wild.z - playerPosition.z
        const len = Math.hypot(avoidX, avoidZ) || 1
        wild.x += (avoidX / len) * push * 0.4
        wild.z += (avoidZ / len) * push * 0.4
      }
      animateCreatureMesh(wild.group, time, wild.state)
    }
  }

  wildsForMinimap() {
    return this.wilds.filter((wild) => wild.visible).map((wild) => ({
      x: wild.x,
      z: wild.z,
      biome: wild.biome,
      rarity: wild.species.rarity,
      legendary: wild.legendary
    }))
  }
}
