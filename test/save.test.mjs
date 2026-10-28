import test from 'node:test'
import assert from 'node:assert/strict'
import {
  SAVE_KEY,
  addCreature,
  createCreature,
  createDefaultProfile,
  grantXp,
  loadProfile,
  prepareProfile,
  saveProfile,
  storageCount,
  xpToNext
} from '../src/core/save.js'

class MemoryStorage {
  constructor() { this.map = new Map() }
  getItem(key) { return this.map.has(key) ? this.map.get(key) : null }
  setItem(key, value) { this.map.set(key, String(value)) }
  removeItem(key) { this.map.delete(key) }
}

test('default profile is complete and save round-trips', () => {
  const profile = createDefaultProfile(1000)
  assert.equal(profile.currency.shards, 250)
  assert.equal(profile.inventory.disc_basic, 8)
  assert.equal(profile.starterChosen, false)
  profile.playerName = 'Test Wanderer'
  const storage = new MemoryStorage()
  assert.equal(saveProfile(profile, storage), true)
  const loaded = loadProfile(storage)
  assert.equal(loaded.playerName, 'Test Wanderer')
  assert.equal(loaded.version, 1)
  assert.ok(storage.getItem(SAVE_KEY))
})

test('prepareProfile repairs duplicate, missing, and invalid references', () => {
  const one = createCreature('AST-001', 5, { uid: 'a' })
  const two = createCreature('AST-004', 5, { uid: 'b' })
  const profile = prepareProfile({
    creatures: [one, two, { ...two }],
    party: ['a', 'a', 'b', 'missing'],
    activeUid: 'missing',
    dex: { seen: ['AST-001', 'BAD', 'AST-001'], caught: ['BAD'] },
    currency: { shards: -10, stardust: 3 },
    training: { slots: [{ uid: 'missing' }] }
  })
  assert.equal(profile.creatures.length, 2)
  assert.deepEqual(profile.party, ['a', 'b'])
  assert.equal(profile.activeUid, 'a')
  assert.deepEqual(profile.dex.seen, ['AST-001'])
  assert.deepEqual(profile.dex.caught, [])
  assert.equal(profile.currency.shards, 0)
  assert.equal(profile.training.slots.length, 0)
})

test('creatures gain levels and evolve automatically', () => {
  const creature = createCreature('AST-001', 5)
  const target = 16
  let needed = 0
  for (let level = creature.level; level < target; level++) needed += xpToNext(level)
  const result = grantXp(createDefaultProfile(), creature, needed)
  assert.equal(result.levels, 11)
  assert.equal(creature.level, 16)
  assert.equal(creature.speciesId, 'AST-002')
  assert.equal(result.evolved.length, 1)
  assert.equal(result.evolved[0].id, 'AST-002')
  assert.equal(creature.hp, creature.stats.maxHp)
})

test('party grows to six and overflow creatures go to storage', () => {
  const profile = createDefaultProfile()
  for (let index = 0; index < 7; index++) {
    addCreature(profile, createCreature('AST-001', 5, { uid: `c${index}` }))
  }
  assert.equal(profile.party.length, 6)
  assert.equal(profile.creatures.length, 7)
  assert.equal(storageCount(profile), 1)
  assert.equal(profile.creatures[6].assignment, 'storage')
})
