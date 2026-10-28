import { displayName, findCreature, xpToNext } from './helpers.js'
import { grantXp } from '../core/save.js'

export const FREE_TRAINING_RATE = 3
export const MAX_OFFLINE_SECONDS = 8 * 60 * 60

export function trainingSlots(profile) {
  return profile.training?.slots || []
}

export function availableSlots(profile) {
  return Math.max(1, Math.min(2, profile.training?.unlocked || 1))
}

export function assignTraining(profile, creatureUid, now = Date.now()) {
  const creature = findCreature(profile, creatureUid)
  if (!creature) return { ok: false, reason: 'That creature is not in your collection.' }
  if (profile.activeUid === creatureUid) return { ok: false, reason: 'Set another creature as active before training this one.' }
  if (creature.assignment === 'battle') return { ok: false, reason: 'That creature is currently in battle.' }
  if (trainingSlots(profile).some((slot) => slot.uid === creatureUid)) return { ok: false, reason: 'That creature is already on a treadmill.' }
  if (trainingSlots(profile).length >= availableSlots(profile)) {
    return { ok: false, reason: 'All treadmill slots are occupied. Remove a creature first.' }
  }
  creature.assignment = 'training'
  profile.training.slots.push({ uid: creatureUid, startedAt: now, lastClaimAt: now, rate: FREE_TRAINING_RATE })
  return { ok: true }
}

export function removeTraining(profile, creatureUid, now = Date.now()) {
  const index = trainingSlots(profile).findIndex((slot) => slot.uid === creatureUid)
  if (index === -1) return { ok: false, reason: 'That creature is not on a treadmill.' }
  const collected = collectTraining(profile, now, creatureUid)
  profile.training.slots.splice(index, 1)
  const creature = findCreature(profile, creatureUid)
  if (creature) {
    creature.assignment = profile.party.includes(creatureUid) ? 'party' : 'storage'
  }
  return { ok: true, collected }
}

export function trainingPreview(profile, uid, now = Date.now()) {
  const slot = trainingSlots(profile).find((entry) => entry.uid === uid)
  if (!slot) return null
  const elapsed = Math.max(0, Math.min(MAX_OFFLINE_SECONDS, (now - slot.lastClaimAt) / 1000))
  return {
    xp: Math.floor(elapsed * slot.rate),
    elapsed,
    rate: slot.rate,
    startedAt: slot.startedAt
  }
}

export function collectTraining(profile, now = Date.now(), onlyUid = null) {
  let totalXp = 0
  const evolutions = []
  const levels = []
  for (const slot of trainingSlots(profile)) {
    if (onlyUid && slot.uid !== onlyUid) continue
    const creature = findCreature(profile, slot.uid)
    if (!creature) {
      slot.lastClaimAt = now
      continue
    }
    const elapsed = Math.max(0, Math.min(MAX_OFFLINE_SECONDS, (now - slot.lastClaimAt) / 1000))
    const xp = Math.floor(elapsed * slot.rate)
    slot.lastClaimAt = now
    if (xp > 0) {
      const result = grantXp(profile, creature, xp)
      totalXp += xp
      if (result.levels) levels.push({ uid: creature.uid, name: displayName(creature), levels: result.levels })
      evolutions.push(...result.evolved.map((species) => ({ uid: creature.uid, species })))
      profile.flags.totalTrainSeconds = (profile.flags.totalTrainSeconds || 0) + Math.min(elapsed, 60)
    }
  }
  return { xp: totalXp, levels, evolutions }
}

export function trainingSummary(profile, now = Date.now()) {
  return trainingSlots(profile).map((slot) => {
    const creature = findCreature(profile, slot.uid)
    const preview = trainingPreview(profile, slot.uid, now)
    const needs = creature ? xpToNext(creature.level) : 1
    return {
      slot,
      creature,
      preview,
      progress: creature ? Math.min(1, (creature.xp + (preview?.xp || 0)) / needs) : 0,
      nextLevelXp: creature ? Math.max(1, needs - creature.xp) : 0
    }
  })
}

