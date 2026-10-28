import test from 'node:test'
import assert from 'node:assert/strict'
import { createDefaultProfile } from '../src/core/save.js'
import { activeQuests, autoStartTutorial, claimQuest, recordQuestEvent, startQuest } from '../src/systems/quests.js'

test('tutorial bounty starts automatically and completes on capture', () => {
  const profile = createDefaultProfile()
  autoStartTutorial(profile)
  assert.equal(profile.quests.active[0].id, 'q_first_steps')
  recordQuestEvent(profile, { type: 'starter' })
  const updates = recordQuestEvent(profile, { type: 'capture', types: ['Nature'], biome: 'verdant' })
  assert.ok(updates.some((entry) => entry.justCompleted))
  const quest = activeQuests(profile)[0]
  assert.equal(quest.complete, true)
})

test('claiming a complete bounty grants currency and items once', () => {
  const profile = createDefaultProfile()
  autoStartTutorial(profile)
  recordQuestEvent(profile, { type: 'starter' })
  recordQuestEvent(profile, { type: 'capture', types: ['Nature'], biome: 'verdant' })
  const beforeShards = profile.currency.shards
  const beforeDiscs = profile.inventory.disc_basic
  const result = claimQuest(profile, 'q_first_steps')
  assert.equal(result.ok, true)
  assert.equal(profile.currency.shards, beforeShards + 120)
  assert.equal(profile.inventory.disc_basic, beforeDiscs + 5)
  assert.ok(profile.quests.completed.includes('q_first_steps'))
  assert.equal(claimQuest(profile, 'q_first_steps').ok, false)
})

test('biome defeat objectives ignore other biomes', () => {
  const profile = createDefaultProfile()
  assert.equal(startQuest(profile, 'q_verdant').ok, true)
  recordQuestEvent(profile, { type: 'defeat', biome: 'ember' })
  const quest = activeQuests(profile).find((entry) => entry.id === 'q_verdant')
  assert.equal(quest.objectives[0].progress, 0)
  recordQuestEvent(profile, { type: 'defeat', biome: 'verdant' })
  assert.equal(activeQuests(profile).find((entry) => entry.id === 'q_verdant').objectives[0].progress, 1)
})
