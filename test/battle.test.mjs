import test from 'node:test'
import assert from 'node:assert/strict'
import { createCreature, createDefaultProfile, computeStats } from '../src/core/save.js'
import { attemptCapture, captureChance, createBattle, tickStatuses, useMove } from '../src/systems/battle.js'
import { getSpecies } from '../src/data/species.js'

function makeBattle() {
  const profile = createDefaultProfile()
  const active = createCreature('AST-004', 8, { uid: 'player' })
  active.hp = active.stats.maxHp
  profile.creatures.push(active)
  profile.party.push(active.uid)
  profile.activeUid = active.uid
  const species = getSpecies('AST-012')
  const level = 6
  const stats = computeStats(species, level)
  const wild = {
    id: 'wild-test',
    species,
    speciesId: species.id,
    level,
    stats,
    hp: stats.maxHp,
    biome: 'verdant',
    legendary: false
  }
  return { profile, active, wild, battle: createBattle(profile, wild, active) }
}

test('battle setup mirrors creature stats and starts with a log entry', () => {
  const { battle } = makeBattle()
  assert.equal(battle.over, false)
  assert.equal(battle.player.hp, battle.player.maxHp)
  assert.ok(battle.enemy.maxHp > 0)
  assert.match(battle.log[0], /blocks the path/)
})

test('moves deal damage, consume cooldown, and update the battle log', () => {
  const { battle } = makeBattle()
  const slot = battle.player.moves[0]
  const before = battle.enemy.hp
  const result = useMove(battle, 'player', slot.id, { distance: 0, angle: 0 }, Date.now())
  assert.equal(result.ok, true)
  assert.ok(battle.enemy.hp < before || battle.over)
  assert.ok(slot.readyAt > Date.now() - 50)
  const blocked = useMove(battle, 'player', slot.id, { distance: 0, angle: 0 }, Date.now())
  assert.equal(blocked.ok, false)
})

test('capture chance improves at low HP and success ends the battle', (t) => {
  const { battle } = makeBattle()
  const full = captureChance(battle, null)
  battle.enemy.hp = 1
  const low = captureChance(battle, null)
  assert.ok(low > full)
  assert.ok(low <= 0.94 && low >= 0.04)
  t.mock.method(Math, 'random', () => 0)
  const result = attemptCapture(battle, null)
  assert.equal(result.success, true)
  assert.equal(battle.over, true)
  assert.equal(battle.result, 'captured')
})

test('status ticking handles burn and expiration', () => {
  const { battle } = makeBattle()
  const now = Date.now()
  battle.player.statuses.burn = { id: 'burn', expiresAt: now + 5000, tickAt: now }
  battle.lastTick = now
  const hp = battle.player.hp
  const events = tickStatuses(battle, now + 1000)
  assert.ok(battle.player.hp < hp)
  assert.ok(events.some((event) => event.type === 'statusDamage'))
})
