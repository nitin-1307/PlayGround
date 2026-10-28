import test from 'node:test'
import assert from 'node:assert/strict'
import { SPECIES, SPECIES_BY_ID, STARTER_IDS, LEGENDARY_IDS, ULTRA_IDS, speciesByBiome, startingMoves, validateRoster } from '../src/data/species.js'
import { MOVES } from '../src/data/moves.js'
import { ITEMS, SHOP_ORDER } from '../src/data/items.js'
import { QUESTS, QUEST_BY_ID } from '../src/data/quests.js'
import { BIOMES, BIOME_ORDER, typeMultiplier } from '../src/data/types.js'

test('roster contains 150 unique valid species', () => {
  assert.equal(SPECIES.length, 150)
  assert.equal(new Set(SPECIES.map((entry) => entry.id)).size, 150)
  assert.equal(new Set(SPECIES.map((entry) => entry.name)).size, 150)
  assert.deepEqual(validateRoster(), [])
  assert.equal(SPECIES_BY_ID['AST-001'].name, 'Spriglow')
  assert.equal(SPECIES_BY_ID['AST-150'].name, 'Luminarch')
})

test('starters, legendaries, ultra rare, and biome tables are complete', () => {
  assert.deepEqual(STARTER_IDS, ['AST-001', 'AST-004', 'AST-007'])
  assert.equal(LEGENDARY_IDS.length, 6)
  assert.deepEqual(ULTRA_IDS, ['AST-150'])
  assert.equal(Object.keys(BIOMES).length, 6)
  for (const biome of BIOME_ORDER) assert.ok(speciesByBiome(biome).length >= 5, biome)
})

test('every learnset move and evolution resolves', () => {
  for (const species of SPECIES) {
    assert.ok(species.learnset.length > 0, species.id)
    for (const learned of species.learnset) assert.ok(MOVES[learned.moveId], `${species.id}: ${learned.moveId}`)
    if (species.evolution) {
      const target = SPECIES_BY_ID[species.evolution.to]
      assert.ok(target, `${species.id} evolution target`)
      assert.equal(target.evolvesFrom, species.id)
    }
  }
  assert.deepEqual(startingMoves(5, SPECIES_BY_ID['AST-001'].learnset), ['verdantPulse', 'tackle'])
})

test('items, shop order, and bounties reference valid data', () => {
  for (const id of SHOP_ORDER) assert.ok(ITEMS[id], id)
  for (const quest of QUESTS) {
    assert.equal(QUEST_BY_ID[quest.id], quest)
    assert.ok(quest.objectives.length > 0)
    for (const objective of quest.objectives) assert.ok(objective.count > 0, `${quest.id}/${objective.id}`)
    for (const itemId of Object.keys(quest.rewards.items || {})) assert.ok(ITEMS[itemId], `${quest.id}/${itemId}`)
  }
})

test('type wheel has readable strengths and resistances', () => {
  assert.equal(typeMultiplier('Fire', ['Frost']), 2)
  assert.equal(typeMultiplier('Fire', ['Nature']), 0.5)
  assert.equal(typeMultiplier('Astral', ['Nature', 'Spirit']), 4)
})
