import test from 'node:test'
import assert from 'node:assert/strict'
import { createCreature, createDefaultProfile } from '../src/core/save.js'
import { assignTraining, collectTraining, removeTraining, trainingPreview } from '../src/systems/training.js'

function profileWithTwo() {
  const profile = createDefaultProfile()
  const active = createCreature('AST-004', 5, { uid: 'active' })
  const trainee = createCreature('AST-001', 5, { uid: 'trainee' })
  profile.creatures = [active, trainee]
  profile.party = ['active', 'trainee']
  profile.activeUid = 'active'
  active.assignment = 'party'
  trainee.assignment = 'party'
  return { profile, trainee }
}

test('training assignment rejects the active lead and accepts a party member', () => {
  const { profile, trainee } = profileWithTwo()
  assert.equal(assignTraining(profile, 'active').ok, false)
  assert.equal(assignTraining(profile, 'trainee').ok, true)
  assert.equal(trainee.assignment, 'training')
  assert.equal(profile.training.slots[0].uid, 'trainee')
  assert.equal(assignTraining(profile, 'trainee').ok, false)
})

test('collecting training reports the correct creature uid and evolves it', () => {
  const { profile, trainee } = profileWithTwo()
  const start = 1_800_000_000_000
  assert.equal(assignTraining(profile, 'trainee', start).ok, true)
  const preview = trainingPreview(profile, 'trainee', start + 120_000)
  assert.equal(preview.xp, 360)
  const result = collectTraining(profile, start + 120_000, 'trainee')
  assert.equal(result.xp, 360)
  assert.equal(result.levels[0].uid, 'trainee')
  assert.equal(result.levels[0].name, 'Spriglow')
  assert.equal(result.evolutions.length, 0)
})

test('offline training caps at eight hours and reports evolution ownership', () => {
  const { profile, trainee } = profileWithTwo()
  const start = 1_800_000_000_000
  assignTraining(profile, 'trainee', start)
  const preview = trainingPreview(profile, 'trainee', start + 10 * 60 * 60 * 1000)
  assert.equal(preview.elapsed, 8 * 60 * 60)
  const result = collectTraining(profile, start + 10 * 60 * 60 * 1000, 'trainee')
  assert.ok(result.xp > 0)
  assert.equal(result.evolutions[0].uid, 'trainee')
  assert.equal(result.evolutions.at(-1).species.id, 'AST-003')
  assert.equal(trainee.speciesId, 'AST-003')
})

test('removing a trainee collects XP and restores its party assignment', () => {
  const { profile, trainee } = profileWithTwo()
  const start = 1_800_000_000_000
  assignTraining(profile, 'trainee', start)
  const result = removeTraining(profile, 'trainee', start + 10_000)
  assert.equal(result.ok, true)
  assert.equal(result.collected.xp, 30)
  assert.equal(profile.training.slots.length, 0)
  assert.equal(trainee.assignment, 'party')
})
