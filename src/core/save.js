import { getSpecies, startingMoves } from '../data/species.js'
import { clamp, uid } from './rng.js'

export const SAVE_KEY = 'astra-creatures-save'
export const SAVE_VERSION = 1
export const PARTY_LIMIT = 6
export const STORAGE_LIMIT = 60
export const INVENTORY_LIMIT = 99

const DEFAULT_SETTINGS = {
  music: 0.5,
  sfx: 0.72,
  quality: 'high',
  reduceMotion: false,
  sensitivity: 1,
  invertY: false,
  hints: true,
  highContrast: false
}

const DEFAULT_INVENTORY = {
  disc_basic: 8,
  disc_fine: 0,
  potion: 2,
  potion_great: 0,
  treat: 1,
  lure: 0
}

export function createDefaultProfile(now = Date.now()) {
  return {
    version: SAVE_VERSION,
    playerName: 'Wanderer',
    createdAt: now,
    updatedAt: now,
    starterChosen: false,
    starterId: null,
    currency: { shards: 250, stardust: 0 },
    creatures: [],
    party: [],
    activeUid: null,
    inventory: { ...DEFAULT_INVENTORY },
    dex: { seen: [], caught: [] },
    training: { unlocked: 1, slots: [] },
    quests: { active: [], completed: [], progress: {}, claimed: [] },
    flags: { tutorialSeen: false, landmarks: {}, visitedBiomes: ['hub'], totalTrainSeconds: 0 },
    stats: { battles: 0, wins: 0, captures: 0, defeats: 0, steps: 0, playSeconds: 0, legendariesSeen: 0, evolved: 0 },
    legendary: { nextEventAt: now + 90000, active: null, history: [] },
    settings: { ...DEFAULT_SETTINGS },
    lureCharges: 0,
    playStartedAt: now
  }
}

export function xpToNext(level) {
  return Math.round(40 + level * 20 + level * level * 2)
}

export function computeStats(species, level) {
  const base = species.stats
  return {
    maxHp: Math.round(base.health * 1.6 + level * 6 + base.health * level * 0.09),
    attack: Math.round(base.attack * 1.45 + level * 2.4),
    defence: Math.round(base.defence * 1.4 + level * 2.2),
    speed: Math.round(base.speed * 1.35 + level * 1.7)
  }
}

export function createCreature(speciesId, level = 5, options = {}) {
  const species = getSpecies(speciesId)
  if (!species) throw new Error(`Unknown species ${speciesId}`)
  const safeLevel = clamp(Math.round(level), 1, 60)
  const stats = computeStats(species, safeLevel)
  const moves = options.moves || startingMoves(safeLevel, species.learnset)
  const creature = {
    uid: options.uid || uid('ast'),
    speciesId,
    nickname: options.nickname || '',
    level: safeLevel,
    xp: 0,
    hp: options.hp ?? stats.maxHp,
    stats,
    moves: moves.length ? moves : ['tackle'],
    abilityId: species.ability.id,
    nature: options.nature || randomNature(uid('nature')),
    ivs: options.ivs || rollIvs(speciesId, safeLevel),
    caughtAt: options.caughtAt || Date.now(),
    provenance: options.provenance || 'wild',
    assignment: options.assignment || 'party',
    statuses: [],
    evolutionFlags: []
  }
  return creature
}

function randomNature(seed) {
  const natures = ['Curious', 'Calm', 'Bold', 'Gentle', 'Fierce', 'Patient', 'Mischievous', 'Loyal', 'Watchful', 'Restless']
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return natures[h % natures.length]
}

function rollIvs(speciesId, level) {
  let h = level * 2654435761
  for (let i = 0; i < speciesId.length; i++) h = Math.imul(h ^ speciesId.charCodeAt(i), 16777619)
  const roll = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822519)
    return 4 + (Math.abs(h) % 15)
  }
  return { health: roll(), attack: roll(), defence: roll(), speed: roll() }
}

export function syncCreatureStats(creature) {
  const species = getSpecies(creature.speciesId)
  if (!species) return creature
  const previousMax = creature.stats?.maxHp || 1
  const ratio = clamp((creature.hp || previousMax) / previousMax, 0.05, 1)
  creature.stats = computeStats(species, creature.level)
  creature.hp = Math.max(1, Math.round(creature.stats.maxHp * ratio))
  return creature
}

export function grantXp(profile, creature, amount) {
  const gained = Math.max(0, Math.round(amount))
  if (!creature || gained <= 0) return { levels: 0, evolved: [], xp: 0 }
  creature.xp += gained
  let levels = 0
  const evolved = []
  while (creature.level < 60 && creature.xp >= xpToNext(creature.level)) {
    creature.xp -= xpToNext(creature.level)
    creature.level++
    levels++
    const species = getSpecies(creature.speciesId)
    if (species?.evolution && creature.level >= species.evolution.level) {
      const target = getSpecies(species.evolution.to)
      if (target) {
        creature.speciesId = target.id
        creature.abilityId = target.ability.id
        creature.moves = startingMoves(creature.level, target.learnset)
        creature.evolutionFlags.push({ from: species.id, to: target.id, level: creature.level, at: Date.now() })
        evolved.push(target)
      }
    }
    syncCreatureStats(creature)
    creature.hp = creature.stats.maxHp
  }
  if (creature.level >= 60) creature.xp = 0
  profile.stats = profile.stats || {}
  return { levels, evolved, xp: gained }
}

export function speciesOf(creature) {
  return getSpecies(creature?.speciesId)
}

export function prepareProfile(profile) {
  if (!profile || typeof profile !== 'object') return createDefaultProfile()
  const defaults = createDefaultProfile()
  const merged = {
    ...defaults,
    ...profile,
    currency: { ...defaults.currency, ...(profile.currency || {}) },
    inventory: { ...defaults.inventory, ...(profile.inventory || {}) },
    dex: { seen: [], caught: [], ...(profile.dex || {}) },
    training: { ...defaults.training, ...(profile.training || {}) },
    quests: { ...defaults.quests, ...(profile.quests || {}) },
    flags: { ...defaults.flags, ...(profile.flags || {}) },
    stats: { ...defaults.stats, ...(profile.stats || {}) },
    legendary: { ...defaults.legendary, ...(profile.legendary || {}) },
    settings: { ...defaults.settings, ...(profile.settings || {}) }
  }
  merged.version = SAVE_VERSION
  merged.creatures = sanitizeCreatures(profile.creatures)
  const uidSet = new Set(merged.creatures.map((creature) => creature.uid))
  merged.party = Array.isArray(profile.party) ? profile.party.filter((id, index, list) => uidSet.has(id) && list.indexOf(id) === index).slice(0, PARTY_LIMIT) : []
  if (!merged.party.length && merged.creatures.length) {
    merged.party = merged.creatures.slice(0, PARTY_LIMIT).map((creature) => creature.uid)
  }
  for (const creature of merged.creatures) {
    if (!merged.party.includes(creature.uid) && creature.assignment === 'party') creature.assignment = 'storage'
  }
  if (!uidSet.has(merged.activeUid) && merged.party.length) merged.activeUid = merged.party[0]
  merged.dex.seen = uniqueValidSpecies(merged.dex.seen)
  merged.dex.caught = uniqueValidSpecies(merged.dex.caught)
  merged.training.slots = sanitizeTrainingSlots(merged.training.slots, uidSet)
  for (const key of Object.keys(merged.inventory)) {
    merged.inventory[key] = clamp(Math.floor(Number(merged.inventory[key]) || 0), 0, INVENTORY_LIMIT)
  }
  merged.currency.shards = clamp(Math.floor(Number(merged.currency.shards) || 0), 0, 99999999)
  merged.currency.stardust = clamp(Math.floor(Number(merged.currency.stardust) || 0), 0, 99999999)
  merged.settings.quality = ['high', 'low'].includes(merged.settings.quality) ? merged.settings.quality : 'high'
  return merged
}

function uniqueValidSpecies(list) {
  if (!Array.isArray(list)) return []
  const valid = []
  for (const id of list) {
    if (typeof id === 'string' && getSpecies(id) && !valid.includes(id)) valid.push(id)
  }
  return valid
}

function sanitizeCreatures(list) {
  if (!Array.isArray(list)) return []
  const seen = new Set()
  const result = []
  for (const raw of list.slice(0, 400)) {
    if (!raw || typeof raw !== 'object' || typeof raw.uid !== 'string' || seen.has(raw.uid)) continue
    const species = getSpecies(raw.speciesId)
    if (!species) continue
    seen.add(raw.uid)
    const level = clamp(Math.floor(Number(raw.level) || 1), 1, 60)
    const stats = computeStats(species, level)
    const moves = Array.isArray(raw.moves) ? raw.moves.filter((id) => typeof id === 'string').slice(0, 4) : []
    result.push({
      uid: raw.uid,
      speciesId: raw.speciesId,
      nickname: typeof raw.nickname === 'string' ? raw.nickname.slice(0, 24) : '',
      level,
      xp: clamp(Math.floor(Number(raw.xp) || 0), 0, 9999999),
      hp: clamp(Math.floor(Number(raw.hp) || stats.maxHp), 1, stats.maxHp),
      stats,
      moves: moves.length ? moves : startingMoves(level, species.learnset),
      abilityId: typeof raw.abilityId === 'string' ? raw.abilityId : species.ability.id,
      nature: typeof raw.nature === 'string' ? raw.nature.slice(0, 24) : 'Curious',
      ivs: raw.ivs && typeof raw.ivs === 'object' ? raw.ivs : rollIvs(raw.speciesId, level),
      caughtAt: Math.floor(Number(raw.caughtAt) || Date.now()),
      provenance: typeof raw.provenance === 'string' ? raw.provenance.slice(0, 32) : 'unknown',
      assignment: ['party', 'storage', 'training'].includes(raw.assignment) ? raw.assignment : 'storage',
      statuses: [],
      evolutionFlags: Array.isArray(raw.evolutionFlags) ? raw.evolutionFlags.slice(-20) : []
    })
  }
  return result
}

function sanitizeTrainingSlots(slots, uidSet) {
  if (!Array.isArray(slots)) return []
  const used = new Set()
  const result = []
  for (const raw of slots.slice(0, 2)) {
    if (!raw || typeof raw !== 'object' || !uidSet.has(raw.uid) || used.has(raw.uid)) continue
    used.add(raw.uid)
    result.push({
      uid: raw.uid,
      startedAt: Math.floor(Number(raw.startedAt) || Date.now()),
      lastClaimAt: Math.floor(Number(raw.lastClaimAt) || Date.now()),
      rate: clamp(Number(raw.rate) || 3, 1, 10)
    })
  }
  return result
}

export function loadProfile(storage = globalThis.localStorage) {
  try {
    const raw = storage?.getItem(SAVE_KEY)
    if (!raw) return createDefaultProfile()
    const parsed = JSON.parse(raw)
    return prepareProfile(parsed)
  } catch (error) {
    console.warn('Astra save could not be read; starting a clean profile.', error)
    return createDefaultProfile()
  }
}

export function saveProfile(profile, storage = globalThis.localStorage) {
  if (!profile) return false
  try {
    profile.updatedAt = Date.now()
    const payload = JSON.stringify(profile)
    storage?.setItem(SAVE_KEY, payload)
    return true
  } catch (error) {
    console.warn('Astra save could not be written.', error)
    return false
  }
}

export function clearProfile(storage = globalThis.localStorage) {
  try {
    storage?.removeItem(SAVE_KEY)
  } catch {
    // Nothing else to do; the in-memory reset still proceeds.
  }
}

export function addCreature(profile, creature) {
  if (!creature) return { ok: false, reason: 'Creature could not be created.' }
  profile.creatures.push(creature)
  if (profile.party.length < PARTY_LIMIT) {
    profile.party.push(creature.uid)
    creature.assignment = 'party'
    if (!profile.activeUid) profile.activeUid = creature.uid
  } else {
    creature.assignment = 'storage'
  }
  return { ok: true, inParty: creature.assignment === 'party' }
}

export function storageCount(profile) {
  return profile.creatures.filter((creature) => !profile.party.includes(creature.uid)).length
}
