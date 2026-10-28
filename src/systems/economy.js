import { ITEMS, SHOP_ORDER } from '../data/items.js'
import { INVENTORY_LIMIT } from '../core/save.js'
import { findCreature, healCreature } from './helpers.js'
import { grantXp } from '../core/save.js'
import { clamp } from '../core/rng.js'

export function addCurrency(profile, shards = 0, stardust = 0) {
  profile.currency.shards = clamp((profile.currency.shards || 0) + Math.max(0, Math.round(shards)), 0, 99999999)
  profile.currency.stardust = clamp((profile.currency.stardust || 0) + Math.max(0, Math.round(stardust)), 0, 99999999)
}

export function canAfford(profile, shards = 0, stardust = 0) {
  return (profile.currency.shards || 0) >= shards && (profile.currency.stardust || 0) >= stardust
}

export function spendCurrency(profile, shards = 0, stardust = 0) {
  if (!canAfford(profile, shards, stardust)) return { ok: false, reason: 'Not enough currency.' }
  profile.currency.shards -= Math.max(0, Math.round(shards))
  profile.currency.stardust -= Math.max(0, Math.round(stardust))
  return { ok: true }
}

export function inventoryCount(profile, itemId) {
  return profile.inventory[itemId] || 0
}

export function grantItem(profile, itemId, amount = 1) {
  if (!ITEMS[itemId] && itemId !== 'training_slot') return { ok: false, reason: 'Unknown item.' }
  if (itemId === 'training_slot') {
    if ((profile.training.unlocked || 1) >= 2) return { ok: false, reason: 'The second treadmill is already unlocked.' }
    profile.training.unlocked = 2
    return { ok: true }
  }
  const current = profile.inventory[itemId] || 0
  const next = Math.min(INVENTORY_LIMIT, current + Math.max(0, Math.round(amount)))
  profile.inventory[itemId] = next
  return { ok: true, granted: next - current, overflow: current + amount > INVENTORY_LIMIT }
}

export function buyItem(profile, itemId) {
  const item = ITEMS[itemId]
  if (!item) return { ok: false, reason: 'Unknown item.' }
  if (itemId === 'training_slot') {
    if ((profile.training.unlocked || 1) >= 2) return { ok: false, reason: 'You already own both treadmill slots.' }
  } else if ((profile.inventory[itemId] || 0) >= INVENTORY_LIMIT) {
    return { ok: false, reason: `${item.name} is already at the inventory cap.` }
  }
  const spent = spendCurrency(profile, item.price, item.stardust || 0)
  if (!spent.ok) return spent
  const granted = grantItem(profile, itemId, 1)
  if (!granted.ok) {
    profile.currency.shards += item.price
    profile.currency.stardust += item.stardust || 0
    return granted
  }
  return { ok: true, item }
}

export function usePotion(profile, creatureUid, itemId = 'potion') {
  const item = ITEMS[itemId]
  if (!item || item.category !== 'heal') return { ok: false, reason: 'That is not a healing item.' }
  if ((profile.inventory[itemId] || 0) < 1) return { ok: false, reason: `No ${item.name} left.` }
  const creature = findCreature(profile, creatureUid)
  if (!creature) return { ok: false, reason: 'Creature not found.' }
  if (creature.hp >= creature.stats.maxHp) return { ok: false, reason: 'That creature is already at full health.' }
  const healed = healCreature(creature, item.healPercent)
  profile.inventory[itemId] -= 1
  return { ok: true, healed, item }
}

export function useTreat(profile, creatureUid, itemId = 'treat') {
  const item = ITEMS[itemId]
  if (!item || item.category !== 'xp') return { ok: false, reason: 'That is not a training treat.' }
  if ((profile.inventory[itemId] || 0) < 1) return { ok: false, reason: `No ${item.name} left.` }
  const creature = findCreature(profile, creatureUid)
  if (!creature) return { ok: false, reason: 'Creature not found.' }
  profile.inventory[itemId] -= 1
  const result = grantXp(profile, creature, item.xp)
  return { ok: true, result, item }
}

export function useLure(profile) {
  if ((profile.inventory.lure || 0) < 1) return { ok: false, reason: 'No Scent Lure left.' }
  profile.inventory.lure -= 1
  profile.lureCharges = 3
  return { ok: true }
}

export function consumeLureCharge(profile) {
  if ((profile.lureCharges || 0) <= 0) return false
  profile.lureCharges -= 1
  return true
}

export function shopListing(profile, itemId) {
  const item = ITEMS[itemId]
  const owned = itemId === 'training_slot' ? (profile.training.unlocked || 1) >= 2 : (profile.inventory[itemId] || 0)
  return {
    item,
    owned,
    affordable: canAfford(profile, item.price, item.stardust || 0),
    lockedReason: itemId === 'training_slot' && owned ? 'Already unlocked' : null
  }
}

export function shopList(profile) {
  return SHOP_ORDER.map((id) => shopListing(profile, id))
}
