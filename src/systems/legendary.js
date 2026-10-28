import { getSpecies, LEGENDARY_IDS } from '../data/species.js'
import { BIOMES } from '../data/types.js'
import { seededRng } from '../core/rng.js'

export const WARNING_SECONDS = 15
export const ACTIVE_SECONDS = 240
export const MIN_COOLDOWN_MS = 6 * 60 * 1000
export const MAX_COOLDOWN_MS = 10 * 60 * 1000
export const ULTRA_RARE_CHANCE = 0.0000001

const SPAWN_OFFSETS = {
  astral: [[-54, 78], [-44, 88], [-64, 70]],
  tide: [[-80, -12], [-90, -24], [-68, -4]],
  frost: [[48, 80], [40, 68], [60, 90]],
  ember: [[80, -16], [90, -26], [68, -6]],
  verdant: [[0, -72], [-12, -82], [14, -62]]
}

export function tickLegendary(profile, now = Date.now()) {
  const state = profile.legendary
  if (!state) {
    profile.legendary = { nextEventAt: now + 90000, active: null, history: [] }
    return { changed: false, event: null }
  }
  if (state.active) {
    const active = state.active
    if (active.phase === 'warning' && now >= active.startsAt) {
      active.phase = 'active'
      state.active = active
      return { changed: true, event: active, spawned: true }
    }
    if (active.phase === 'active' && now >= active.endsAt) {
      state.history.push({ ...active, outcome: active.captured ? 'captured' : 'expired' })
      state.history = state.history.slice(-20)
      state.active = null
      state.nextEventAt = now + randomCooldown(now)
      return { changed: true, event: null, expired: active }
    }
    return { changed: false, event: active }
  }
  if (now >= (state.nextEventAt || 0)) {
    const event = spawnEvent(profile, now)
    state.active = event
    return { changed: true, event, warning: true }
  }
  return { changed: false, event: null }
}

function randomCooldown(now) {
  const rng = seededRng(`legendary-${now}`)
  return MIN_COOLDOWN_MS + rng() * (MAX_COOLDOWN_MS - MIN_COOLDOWN_MS)
}

export function spawnEvent(profile, now = Date.now()) {
  const candidates = LEGENDARY_IDS.filter((id) => !profile.legendary.history.slice(-6).some((event) => event.legendaryId === id))
  const pool = candidates.length ? candidates : LEGENDARY_IDS
  const legendaryId = pool[Math.floor(seededRng(`legendary-pick-${now}-${profile.stats.legendariesSeen || 0}`)() * pool.length)]
  const species = getSpecies(legendaryId)
  const biome = species?.biome || 'astral'
  const offsets = SPAWN_OFFSETS[biome] || SPAWN_OFFSETS.astral
  const offset = offsets[Math.floor(seededRng(`legendary-spawn-${now}`)() * offsets.length)]
  const level = Math.max(24, (BIOMES[biome]?.levelRange?.[1] || 25) + 2)
  return {
    id: `legend-${now}`,
    legendaryId,
    biome,
    phase: 'warning',
    spawnedAt: now,
    startsAt: now + WARNING_SECONDS * 1000,
    endsAt: now + (WARNING_SECONDS + ACTIVE_SECONDS) * 1000,
    spawn: { x: offset[0], z: offset[1] },
    level,
    captured: false
  }
}

export function timeUntilEvent(profile, now = Date.now()) {
  const active = profile.legendary?.active
  if (active) {
    if (active.phase === 'warning') return Math.max(0, active.startsAt - now) / 1000
    return Math.max(0, active.endsAt - now) / 1000
  }
  return Math.max(0, (profile.legendary?.nextEventAt || now) - now) / 1000
}

export function legendaryStatus(profile, now = Date.now()) {
  const active = profile.legendary?.active
  if (!active) {
    return {
      state: 'idle',
      nextIn: timeUntilEvent(profile, now),
      label: 'The Scar is quiet',
      detail: 'Legendary events are server-simulated and announced before they begin.'
    }
  }
  const species = getSpecies(active.legendaryId)
  if (active.phase === 'warning') {
    return {
      state: 'warning',
      event: active,
      species,
      nextIn: Math.max(0, active.startsAt - now) / 1000,
      label: `${species?.name || 'A legendary creature'} is approaching`,
      detail: `A rift is opening in ${BIOMES[active.biome]?.name || 'the wilds'}. Arrive within ${ACTIVE_SECONDS / 60} minutes.`
    }
  }
  return {
    state: 'active',
    event: active,
    species,
    nextIn: Math.max(0, active.endsAt - now) / 1000,
    label: `${species?.name || 'A legendary creature'} is present`,
    detail: `Seen in ${BIOMES[active.biome]?.name || 'the wilds'}. One capture per event.`
  }
}

export function markLegendaryCaptured(profile, event, now = Date.now()) {
  const active = profile.legendary?.active
  if (!active || active.id !== event.id || active.captured) {
    return { ok: false, reason: 'That legendary event is no longer available.' }
  }
  active.captured = true
  active.capturedAt = now
  profile.legendary.history.push({ ...active, outcome: 'captured' })
  profile.legendary.history = profile.legendary.history.slice(-20)
  profile.legendary.active = null
  profile.legendary.nextEventAt = now + randomCooldown(now)
  return { ok: true }
}

export function markLegendarySeen(profile) {
  profile.stats.legendariesSeen = (profile.stats.legendariesSeen || 0) + 1
}

export function rollUltraRare() {
  return Math.random() < ULTRA_RARE_CHANCE
}

export function ultraOddsText() {
  return '1 in 10,000,000 independent eligible Astral rolls. This is a per-roll probability, not a guaranteed appearance.'
}
