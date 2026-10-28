import { getMove } from '../data/moves.js'
import { getSpecies } from '../data/species.js'
import { RARITIES, typeMultiplier } from '../data/types.js'
import { clamp, intRange, uid } from '../core/rng.js'
import { computeStats } from '../core/save.js'

const HP_SCALE = 0.82

export function createBattle(profile, wild, active, options = {}) {
  const activeSpecies = getSpecies(active.speciesId)
  const wildSpecies = getSpecies(wild.speciesId)
  const wildStats = wild.stats || computeStats(wildSpecies, wild.level)
  const player = makeCombatant(active, activeSpecies, 'player', active.hp)
  const enemy = makeCombatant({ ...wild, stats: wildStats }, wildSpecies, 'enemy', Math.max(1, Math.round(wildStats.maxHp * HP_SCALE)))
  const battle = {
    id: uid('battle'),
    player,
    enemy,
    startedAt: Date.now(),
    over: false,
    result: null,
    log: [],
    events: [],
    wild: { ...wild, hp: enemy.hp, stats: { ...wildStats, maxHp: enemy.maxHp } },
    legendary: options.legendary || null,
    fleeAttempts: 0,
    lastTick: Date.now()
  }
  pushLog(battle, `A wild ${wildSpecies.name} (Lv. ${wild.level}) blocks the path!`)
  return battle
}

function makeCombatant(creature, species, side, hp) {
  return {
    uid: creature.uid,
    side,
    name: creature.nickname || species.name,
    species,
    level: creature.level,
    hp,
    maxHp: side === 'enemy' ? Math.max(1, Math.round(creature.stats.maxHp * HP_SCALE)) : creature.stats.maxHp,
    stats: { ...creature.stats },
    moves: (creature.moves || ['tackle']).map((id) => ({ id, readyAt: 0 })),
    buffs: { attack: 1, defence: 1, speed: 1 },
    statuses: {},
    shield: 0,
    shieldUntil: 0,
    shieldOnLowUsed: false,
    ability: species.ability,
    xp: creature.xp || 0,
    assignment: creature.assignment
  }
}

export function maxCooldownFor(moveId) {
  return getMove(moveId).cooldown * 1000
}

export function canUseMove(battle, side, moveId, now = Date.now()) {
  const combatant = side === 'player' ? battle.player : battle.enemy
  if (battle.over || combatant.hp <= 0) return { ok: false, reason: 'Battle is over.' }
  if (isStunned(combatant, now)) return { ok: false, reason: 'Stunned.' }
  const slot = combatant.moves.find((entry) => entry.id === moveId)
  if (!slot) return { ok: false, reason: 'That move is not equipped.' }
  if (slot.readyAt > now) return { ok: false, reason: 'Move is still cooling down.', remaining: slot.readyAt - now }
  return { ok: true, slot, move: getMove(moveId) }
}

export function useMove(battle, side, moveId, target = { distance: 0, angle: 0 }, now = Date.now()) {
  const check = canUseMove(battle, side, moveId, now)
  if (!check.ok) return check
  const actor = side === 'player' ? battle.player : battle.enemy
  const defender = side === 'player' ? battle.enemy : battle.player
  const move = check.move
  check.slot.readyAt = now + move.cooldown * 1000
  const events = []

  if (move.shape === 'self') {
    applySelfEffect(battle, actor, move, events, now)
    pushLog(battle, `${actor.name} uses ${move.name}.`)
    return { ok: true, move, events }
  }

  const inRange = move.shape === 'aoe'
    ? target.distance <= (move.radius || move.range) + 0.5
    : target.distance <= move.range + 0.4
  const inCone = move.shape !== 'cone' || Math.abs(target.angle || 0) <= (move.cone || Math.PI / 3) / 2 + 0.12
  if (!inRange || !inCone) {
    check.slot.readyAt = now + 550
    pushLog(battle, `${actor.name}'s ${move.name} misses.`)
    return { ok: true, move, events: [{ type: 'miss', actor: side }] }
  }

  pushLog(battle, `${actor.name} uses ${move.name}.`)
  if (move.power > 0) {
    const hit = dealDamage(battle, actor, defender, move, events, now)
    if (move.effect.drain) {
      const heal = Math.round(hit.amount * move.effect.drain)
      healCombatant(actor, heal)
      events.push({ type: 'heal', target: side, amount: heal })
    }
    if (move.effect.status && Math.random() < (move.effect.status.chance ?? 1)) {
      if (move.effect.status.self) addStatus(actor, move.effect.status.id, move.effect.status.duration, now)
      else if (!(move.effect.status.id === 'snare' && defender.ability?.effect === 'sureFooted')) {
        addStatus(defender, move.effect.status.id, move.effect.status.duration, now)
        events.push({ type: 'status', target: defender === battle.player ? 'player' : 'enemy', status: move.effect.status.id })
      }
    }
    if (move.knockback) events.push({ type: 'knockback', target: defender === battle.player ? 'player' : 'enemy', amount: move.knockback })
    if (defender.ability?.effect === 'thorns' && move.range <= 3.2) {
      const reflected = Math.max(1, Math.round(hit.amount * defender.ability.value))
      damageCombatant(actor, reflected, now, events, 'thorns')
    }
    if (defender.ability?.effect === 'static' && move.range <= 3.2 && Math.random() < 0.3) {
      addStatus(actor, 'shock', 3, now)
    }
  }

  if (move.effect.kind === 'debuff') {
    applyDebuff(defender, move.effect, now)
    events.push({ type: 'debuff', target: defender === battle.player ? 'player' : 'enemy', stat: move.effect.stat })
  }
  if (move.effect.kind === 'buff') {
    actor.buffs[move.effect.stat] = 1 + move.effect.amount
    events.push({ type: 'buff', target: side, stat: move.effect.stat })
  }

  checkBattleOver(battle, events)
  battle.events.push(...events)
  return { ok: true, move, events }
}

export function applySelfEffect(battle, actor, move, events, now) {
  if (move.effect.kind === 'heal') {
    const amount = Math.round(actor.maxHp * move.effect.amount)
    healCombatant(actor, amount)
    events.push({ type: 'heal', target: actor.side, amount })
    if (move.effect.status) addStatus(actor, move.effect.status.id, move.effect.status.duration, now)
  }
  if (move.effect.kind === 'shield') {
    actor.shield = Math.max(actor.shield, Math.round(actor.maxHp * move.effect.amount))
    actor.shieldUntil = now + (move.effect.duration || 8) * 1000
    events.push({ type: 'shield', target: actor.side, amount: actor.shield })
  }
  if (move.effect.kind === 'buff') {
    actor.buffs[move.effect.stat] = 1 + move.effect.amount
    events.push({ type: 'buff', target: actor.side, stat: move.effect.stat })
  }
}

export function dealDamage(battle, attacker, defender, move, events = [], now = Date.now()) {
  const typeMult = typeMultiplier(move.type, defender.species.types)
  let attack = attacker.stats.attack * (attacker.buffs?.attack || 1)
  let defence = defender.stats.defence * (defender.buffs?.defence || 1)
  if (attacker.ability?.effect === 'fierce') attack *= 1 + attacker.ability.value
  if (attacker.ability?.effect === 'lastStand' && attacker.hp < attacker.maxHp / 3) attack *= 1 + attacker.ability.value
  if (defender.ability?.effect === 'intimidate') attack *= 1 - defender.ability.value
  if (defender.statuses?.weaken) attack *= 0.78
  if (defender.statuses?.shock) defence *= 0.9
  const critChance = 0.05 + (attacker.ability?.effect === 'keenEye' ? attacker.ability.value : 0)
  const crit = Math.random() < critChance
  const variance = 0.92 + Math.random() * 0.16
  let amount = move.power * (attack / (defence + 80)) * 1.35 * (1 + attacker.level * 0.02) * typeMult * variance
  if (crit) amount *= 1.55
  if (defender.ability?.effect === 'guard' || defender.ability?.effect === 'sturdy') amount *= 1 - defender.ability.value * 0.7
  amount = Math.max(1, Math.round(amount))
  const result = damageCombatant(defender, amount, now, events, 'move')
  if (attacker.ability?.effect === 'vampiric' && result.amount > 0) {
    const heal = Math.max(1, Math.round(result.amount * attacker.ability.value))
    healCombatant(attacker, heal)
    events.push({ type: 'heal', target: attacker.side, amount: heal })
  }
  events.push({
    type: 'damage',
    target: defender.side,
    amount: result.amount,
    absorbed: result.absorbed,
    crit,
    typeMult,
    moveType: move.type
  })
  if (typeMult >= 2) pushLog(battle, `It's super effective! ${result.amount} damage.`)
  else if (typeMult <= 0.5) pushLog(battle, `It's not very effective. ${result.amount} damage.`)
  else pushLog(battle, `${defender.name} takes ${result.amount} damage.`)
  return result
}

export function damageCombatant(target, amount, now = Date.now(), events = [], source = 'move') {
  if (target.hp <= 0) return { amount: 0, absorbed: 0 }
  let remaining = Math.max(0, Math.round(amount))
  let absorbed = 0
  if (target.shield > 0 && target.shieldUntil > now) {
    absorbed = Math.min(target.shield, remaining)
    target.shield -= absorbed
    remaining -= absorbed
  }
  target.hp = Math.max(0, target.hp - remaining)
  if (target.hp > 0 && target.ability?.effect === 'shieldOnLow' && !target.shieldOnLowUsed && target.hp < target.maxHp / 2) {
    target.shieldOnLowUsed = true
    target.shield = Math.round(target.maxHp * target.ability.value)
    target.shieldUntil = now + 7000
    events.push({ type: 'shield', target: target.side, amount: target.shield })
  }
  if (target.hp <= 0) events.push({ type: 'faint', target: target.side, source })
  return { amount: remaining, absorbed }
}

export function healCombatant(target, amount) {
  if (target.hp <= 0) return 0
  const before = target.hp
  target.hp = Math.min(target.maxHp, target.hp + Math.max(0, Math.round(amount)))
  return target.hp - before
}

export function addStatus(target, statusId, duration = 4, now = Date.now()) {
  if (!statusId) return
  target.statuses[statusId] = {
    id: statusId,
    expiresAt: Math.max(target.statuses[statusId]?.expiresAt || 0, now + duration * 1000),
    tickAt: now + 1000
  }
}

export function applyDebuff(target, effect, now = Date.now()) {
  target.buffs[effect.stat] = Math.max(0.65, 1 - effect.amount)
  target.statuses[`debuff_${effect.stat}`] = { id: `debuff_${effect.stat}`, expiresAt: now + (effect.duration || 5) * 1000 }
}

export function isStunned(combatant, now = Date.now()) {
  return Boolean(combatant.statuses?.stun && combatant.statuses.stun.expiresAt > now)
}

export function speedMultiplier(combatant, now = Date.now()) {
  let multiplier = 1
  if (combatant.statuses?.chill && combatant.statuses.chill.expiresAt > now) multiplier *= 0.72
  if (combatant.statuses?.snare && combatant.statuses.snare.expiresAt > now) multiplier *= 0.45
  if (combatant.statuses?.shock && combatant.statuses.shock.expiresAt > now) multiplier *= 0.92
  multiplier *= combatant.buffs?.speed || 1
  if (combatant.ability?.effect === 'swift') multiplier *= 1 + combatant.ability.value
  return multiplier
}

export function tickStatuses(battle, now = Date.now()) {
  const events = []
  const elapsed = Math.max(0, (now - battle.lastTick) / 1000)
  battle.lastTick = now
  for (const combatant of [battle.player, battle.enemy]) {
    if (combatant.hp <= 0) continue
    for (const [id, status] of Object.entries(combatant.statuses)) {
      if (status.expiresAt <= now) {
        delete combatant.statuses[id]
        continue
      }
      if (id === 'burn' && now >= (status.tickAt || 0)) {
        status.tickAt = now + 1000
        const damage = Math.max(1, Math.round(combatant.maxHp * 0.014))
        combatant.hp = Math.max(0, combatant.hp - damage)
        events.push({ type: 'statusDamage', target: combatant.side, status: 'burn', amount: damage })
      }
      if (id === 'regen' && now >= (status.tickAt || 0)) {
        status.tickAt = now + 1000
        const heal = Math.max(1, Math.round(combatant.maxHp * 0.018))
        healCombatant(combatant, heal)
        events.push({ type: 'heal', target: combatant.side, amount: heal })
      }
    }
    if (combatant.shield > 0 && combatant.shieldUntil <= now) {
      combatant.shield = 0
    }
    if (combatant.ability?.effect === 'regen' && elapsed > 0) {
      healCombatant(combatant, combatant.maxHp * combatant.ability.value * elapsed)
    }
  }
  checkBattleOver(battle, events)
  battle.events.push(...events)
  return events
}

export function checkBattleOver(battle, events = []) {
  if (battle.over) return battle.result
  if (battle.enemy.hp <= 0) {
    battle.over = true
    battle.result = 'victory'
    pushLog(battle, `${battle.enemy.name} is calmed. Victory!`)
    events.push({ type: 'battleEnd', result: 'victory' })
  } else if (battle.player.hp <= 0) {
    battle.over = true
    battle.result = 'defeat'
    pushLog(battle, `${battle.player.name} can no longer continue.`)
    events.push({ type: 'battleEnd', result: 'defeat' })
  }
  return battle.result
}

export function captureChance(battle, disc = null) {
  const enemy = battle.enemy
  if (battle.over) return 0
  const missing = 1 - enemy.hp / enemy.maxHp
  const rarity = enemy.species.rarity
  const rarityPenalty = { common: 0, uncommon: 0.03, rare: 0.08, epic: 0.15, legendary: 0.34, ultra: 0.5 }[rarity] || 0
  let statusBonus = 0
  for (const id of Object.keys(enemy.statuses)) {
    if (['burn', 'chill', 'shock', 'snare', 'stun', 'weaken'].includes(id)) statusBonus += 0.04
  }
  statusBonus = Math.min(0.16, statusBonus)
  const discBonus = disc?.captureBonus || 0
  const lucky = battle.player.ability?.effect === 'lucky' ? battle.player.ability.value : 0
  const levelPenalty = Math.max(0, (enemy.level - battle.player.level) * 0.006)
  return clamp(0.07 + missing * 0.62 + statusBonus + discBonus + lucky - rarityPenalty - levelPenalty, 0.04, 0.94)
}

export function attemptCapture(battle, disc = null) {
  const chance = captureChance(battle, disc)
  const roll = Math.random()
  const success = roll < chance
  if (success) {
    battle.over = true
    battle.result = 'captured'
    pushLog(battle, `${battle.enemy.name} accepts the capture field!`)
    battle.events.push({ type: 'capture', success: true, chance })
  } else {
    pushLog(battle, `The capture field breaks. ${Math.round(chance * 100)}% chance.`)
    battle.events.push({ type: 'capture', success: false, chance })
  }
  return { success, chance }
}

export function battleRewards(battle) {
  if (!battle || battle.result !== 'victory') return { xp: 0, shards: 0, item: null }
  const enemy = battle.enemy
  const rarityBonus = { common: 12, uncommon: 26, rare: 50, epic: 95, legendary: 240, ultra: 600 }[enemy.species.rarity] || 0
  const xp = Math.round(enemy.level * 14 + rarityBonus)
  const shards = Math.round(enemy.level * 4 + rarityBonus * 1.4)
  let item = null
  if (Math.random() < 0.22) item = Math.random() < 0.72 ? 'potion' : 'treat'
  return { xp, shards, item }
}

export function fleeBattle(battle) {
  if (battle.over) return { ok: false, reason: 'Battle is already over.' }
  battle.fleeAttempts++
  const chance = battle.legendary ? 0.2 : clamp(0.55 + battle.fleeAttempts * 0.15, 0.55, 0.95)
  if (Math.random() < chance) {
    battle.over = true
    battle.result = 'fled'
    pushLog(battle, 'You retreat safely.')
    return { ok: true, fled: true }
  }
  pushLog(battle, 'You failed to get away!')
  return { ok: true, fled: false }
}

export function moveRange(move) {
  return move.shape === 'self' ? 0 : move.range
}

export function enemyChooseMove(battle, distance) {
  const ready = battle.enemy.moves.filter((slot) => slot.readyAt <= Date.now() && !isStunned(battle.enemy))
  if (!ready.length) return null
  const candidates = ready.map((slot) => ({ ...slot, move: getMove(slot.id) }))
  const inRange = candidates.filter((entry) => entry.move.shape === 'self' || entry.move.range >= distance - 0.6 || entry.move.shape === 'aoe')
  const pool = inRange.length ? inRange : candidates
  pool.sort((a, b) => b.move.power - a.move.power)
  if (pool[0]?.move.power === 0 && Math.random() < 0.5 && pool.length > 1) return pool[1]
  return pool[0] || null
}

export function randomWildLevel(species, playerLevel) {
  const min = species.encounter.minLevel
  const max = species.encounter.maxLevel
  const base = intRange(Math.random, min, max)
  return clamp(Math.max(min, Math.round(base + (playerLevel - 5) * 0.12)), min, 60)
}

export function pushLog(battle, text) {
  battle.log.push(text)
  if (battle.log.length > 8) battle.log.shift()
}

export function rarityLabel(battle) {
  return RARITIES[battle.enemy.species.rarity]?.label || 'Unknown'
}
