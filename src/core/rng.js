// Deterministic, seedable randomness used for content generation and combat.
// The live game keeps a single service RNG so tests can reproduce outcomes.

export function hashString(text) {
  let h = 2166136261 >>> 0
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

export function mulberry32(seed) {
  let a = seed >>> 0
  return function random() {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function seededRng(label) {
  return mulberry32(hashString(String(label)))
}

export function pick(rng, list) {
  return list[Math.floor(rng() * list.length)]
}

export function pickWeighted(rng, entries, weightFn = (entry) => entry.weight ?? 1) {
  const total = entries.reduce((sum, entry) => sum + Math.max(0, weightFn(entry)), 0)
  if (total <= 0) return entries[0]
  let roll = rng() * total
  for (const entry of entries) {
    roll -= Math.max(0, weightFn(entry))
    if (roll <= 0) return entry
  }
  return entries[entries.length - 1]
}

export function range(rng, min, max) {
  return min + rng() * (max - min)
}

export function intRange(rng, min, max) {
  return Math.floor(range(rng, min, max + 1))
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

export function uid(prefix = 'crt') {
  const cryptoObj = globalThis.crypto
  if (cryptoObj?.randomUUID) return `${prefix}_${cryptoObj.randomUUID().slice(0, 8)}`
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`
}
