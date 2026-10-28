import test from 'node:test'
import assert from 'node:assert/strict'
import { createCreature, createDefaultProfile } from '../src/core/save.js'
import { activeCreature, healParty, moveToParty, moveToStorage, releaseCreature, setActive, storageCapacity, swapParty } from '../src/systems/helpers.js'

function seededProfile() {
  const profile = createDefaultProfile()
  profile.creatures = [
    createCreature('AST-001', 5, { uid: 'a' }),
    createCreature('AST-004', 5, { uid: 'b' }),
    createCreature('AST-007', 5, { uid: 'c' })
  ]
  profile.party = ['a', 'b']
  profile.activeUid = 'a'
  for (const creature of profile.creatures) creature.assignment = profile.party.includes(creature.uid) ? 'party' : 'storage'
  return profile
}

test('active lead and party order can be changed safely', () => {
  const profile = seededProfile()
  assert.equal(activeCreature(profile).uid, 'a')
  assert.equal(setActive(profile, 'c').ok, false)
  assert.equal(moveToParty(profile, 'c').ok, true)
  assert.equal(setActive(profile, 'c').ok, true)
  assert.equal(activeCreature(profile).uid, 'c')
  assert.equal(swapParty(profile, 'c', -1).ok, true)
  assert.deepEqual(profile.party, ['a', 'c', 'b'])
})

test('party cannot be emptied and active creature cannot be released', () => {
  const profile = seededProfile()
  profile.party = ['a']
  for (const creature of profile.creatures) creature.assignment = creature.uid === 'a' ? 'party' : 'storage'
  assert.equal(moveToStorage(profile, 'a').ok, false)
  assert.equal(releaseCreature(profile, 'a').ok, false)
  profile.activeUid = 'b'
  assert.equal(releaseCreature(profile, 'a').ok, true)
  assert.equal(profile.creatures.length, 2)
  assert.equal(profile.party.length, 0)
})

test('healing restores the entire party and storage counts are accurate', () => {
  const profile = seededProfile()
  for (const creature of profile.creatures) creature.hp = 1
  const healed = healParty(profile)
  assert.ok(healed > 0)
  assert.ok(profile.creatures.every((creature) => creature.hp === creature.stats.maxHp))
  assert.deepEqual(storageCapacity(profile), { used: 1, limit: 60 })
})
