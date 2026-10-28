import test from 'node:test'
import assert from 'node:assert/strict'
import { createCreature, createDefaultProfile } from '../src/core/save.js'
import { buyItem, consumeLureCharge, grantItem, useLure, usePotion, useTreat } from '../src/systems/economy.js'

function profileWithCreature() {
  const profile = createDefaultProfile()
  const creature = createCreature('AST-007', 5, { uid: 'c' })
  profile.creatures = [creature]
  profile.party = ['c']
  profile.activeUid = 'c'
  return { profile, creature }
}

test('shop purchase spends Shards and adds inventory', () => {
  const { profile } = profileWithCreature()
  const result = buyItem(profile, 'potion')
  assert.equal(result.ok, true)
  assert.equal(profile.currency.shards, 220)
  assert.equal(profile.inventory.potion, 3)
})

test('potions heal and treats grant XP', () => {
  const { profile, creature } = profileWithCreature()
  creature.hp = 1
  const potion = usePotion(profile, 'c')
  assert.equal(potion.ok, true)
  assert.ok(creature.hp > 1)
  const beforeXp = creature.xp
  const treat = useTreat(profile, 'c')
  assert.equal(treat.ok, true)
  assert.equal(creature.xp, beforeXp + 45)
  assert.equal(profile.inventory.treat, 0)
})

test('lure activates three charges and backpacks stop at the cap', () => {
  const { profile } = profileWithCreature()
  profile.inventory.lure = 1
  assert.equal(useLure(profile).ok, true)
  assert.equal(profile.lureCharges, 3)
  assert.equal(consumeLureCharge(profile), true)
  assert.equal(profile.lureCharges, 2)
  profile.inventory.lure = 98
  const granted = grantItem(profile, 'lure', 5)
  assert.equal(granted.ok, true)
  assert.equal(profile.inventory.lure, 99)
  assert.equal(granted.overflow, true)
})

test('second treadmill upgrade is permanent and cannot be bought twice', () => {
  const { profile } = profileWithCreature()
  profile.currency.shards = 400
  profile.currency.stardust = 4
  const result = buyItem(profile, 'training_slot')
  assert.equal(result.ok, true)
  assert.equal(profile.training.unlocked, 2)
  assert.equal(profile.currency.stardust, 2)
  assert.equal(buyItem(profile, 'training_slot').ok, false)
})
