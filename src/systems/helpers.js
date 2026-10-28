import { getSpecies } from '../data/species.js'
import { PARTY_LIMIT, STORAGE_LIMIT, xpToNext } from '../core/save.js'

export { xpToNext }

export function findCreature(profile, uid) {
  return profile?.creatures?.find((creature) => creature.uid === uid) || null
}

export function activeCreature(profile) {
  return findCreature(profile, profile?.activeUid) || profile?.creatures?.[0] || null
}

export function partyCreatures(profile) {
  return (profile?.party || []).map((uid) => findCreature(profile, uid)).filter(Boolean)
}

export function storageCreatures(profile) {
  return (profile?.creatures || []).filter((creature) => !profile.party.includes(creature.uid))
}

export function setActive(profile, uid) {
  const creature = findCreature(profile, uid)
  if (!creature) return { ok: false, reason: 'Creature not found.' }
  if (!profile.party.includes(uid)) return { ok: false, reason: 'Move this creature into your party first.' }
  if (creature.assignment === 'training') return { ok: false, reason: 'This creature is training. Remove it from the treadmill first.' }
  profile.activeUid = uid
  return { ok: true }
}

export function swapParty(profile, uid, direction) {
  const index = profile.party.indexOf(uid)
  if (index === -1) return { ok: false, reason: 'Creature is not in the party.' }
  const target = index + direction
  if (target < 0 || target >= profile.party.length) return { ok: false, reason: 'That slot is already at the edge.' }
  const [entry] = profile.party.splice(index, 1)
  profile.party.splice(target, 0, entry)
  return { ok: true }
}

export function moveToParty(profile, uid) {
  const creature = findCreature(profile, uid)
  if (!creature) return { ok: false, reason: 'Creature not found.' }
  if (profile.party.includes(uid)) return { ok: true }
  if (profile.party.length >= PARTY_LIMIT) return { ok: false, reason: `Your party is full (${PARTY_LIMIT}). Move another creature to storage first.` }
  if (creature.assignment === 'training') return { ok: false, reason: 'Remove this creature from the treadmill first.' }
  profile.party.push(uid)
  creature.assignment = 'party'
  return { ok: true }
}

export function moveToStorage(profile, uid) {
  const index = profile.party.indexOf(uid)
  if (index === -1) return { ok: false, reason: 'Creature is already in storage.' }
  if (profile.party.length <= 1) return { ok: false, reason: 'You need at least one creature in your party.' }
  const creature = findCreature(profile, uid)
  if (creature?.assignment === 'training') return { ok: false, reason: 'Remove this creature from the treadmill first.' }
  profile.party.splice(index, 1)
  if (creature) creature.assignment = 'storage'
  if (profile.activeUid === uid) profile.activeUid = profile.party[0] || null
  return { ok: true }
}

export function releaseCreature(profile, uid) {
  const creature = findCreature(profile, uid)
  if (!creature) return { ok: false, reason: 'Creature not found.' }
  if (profile.creatures.length <= 1) return { ok: false, reason: 'You cannot release your last creature.' }
  if (profile.activeUid === uid) return { ok: false, reason: 'Set another creature as active before releasing this one.' }
  profile.creatures = profile.creatures.filter((entry) => entry.uid !== uid)
  profile.party = profile.party.filter((id) => id !== uid)
  profile.training.slots = profile.training.slots.filter((slot) => slot.uid !== uid)
  if (profile.activeUid === uid) profile.activeUid = profile.party[0] || profile.creatures[0]?.uid || null
  return { ok: true }
}

export function healCreature(creature, percent = 1) {
  if (!creature) return 0
  const before = creature.hp
  creature.hp = Math.min(creature.stats.maxHp, creature.hp + Math.round(creature.stats.maxHp * percent))
  return creature.hp - before
}

export function healParty(profile) {
  let healed = 0
  for (const creature of profile.creatures) {
    const amount = creature.stats.maxHp - creature.hp
    creature.hp = creature.stats.maxHp
    healed += amount
  }
  return healed
}

export function speciesName(creature) {
  return getSpecies(creature?.speciesId)?.name || 'Unknown'
}

export function displayName(creature) {
  return creature?.nickname || speciesName(creature)
}

export function storageCapacity(profile) {
  const inStorage = profile.creatures.filter((creature) => !profile.party.includes(creature.uid)).length
  return { used: inStorage, limit: STORAGE_LIMIT }
}

export function creaturePower(creature) {
  if (!creature) return 0
  const stats = creature.stats || {}
  return Math.round((stats.maxHp || 0) * 0.28 + (stats.attack || 0) * 1.4 + (stats.defence || 0) * 1.1 + (stats.speed || 0) * 0.9 + creature.level * 3)
}

export function formatNumber(value) {
  const number = Number(value) || 0
  return number.toLocaleString('en-US')
}

export function formatDuration(seconds) {
  const total = Math.max(0, Math.floor(seconds))
  const minutes = Math.floor(total / 60)
  const rest = total % 60
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60)
    return `${hours}h ${minutes % 60}m`
  }
  return `${minutes}:${String(rest).padStart(2, '0')}`
}
