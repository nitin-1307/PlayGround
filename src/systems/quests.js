import { QUEST_BY_ID, QUESTS } from '../data/quests.js'
import { addCurrency, grantItem } from './economy.js'

export function ensureQuest(profile, questId) {
  const quest = QUEST_BY_ID[questId]
  if (!quest) return null
  if (profile.quests.completed.includes(questId) || profile.quests.active.some((entry) => entry.id === questId)) return null
  profile.quests.active.push({ id: questId, startedAt: Date.now() })
  profile.quests.progress[questId] = profile.quests.progress[questId] || {}
  for (const objective of quest.objectives) {
    if (typeof profile.quests.progress[questId][objective.id] !== 'number') {
      profile.quests.progress[questId][objective.id] = 0
    }
  }
  return quest
}

export function startQuest(profile, questId) {
  const quest = QUEST_BY_ID[questId]
  if (!quest) return { ok: false, reason: 'Unknown quest.' }
  if (profile.quests.completed.includes(questId)) return { ok: false, reason: 'Quest already completed.' }
  if (profile.quests.active.some((entry) => entry.id === questId)) return { ok: false, reason: 'Quest already active.' }
  ensureQuest(profile, questId)
  return { ok: true, quest }
}

export function activeQuests(profile) {
  return profile.quests.active.map((entry) => {
    const quest = QUEST_BY_ID[entry.id]
    if (!quest) return null
    const progress = profile.quests.progress[entry.id] || {}
    const objectives = quest.objectives.map((objective) => ({
      ...objective,
      progress: Math.min(objective.count, progress[objective.id] || 0),
      complete: (progress[objective.id] || 0) >= objective.count
    }))
    return {
      ...quest,
      startedAt: entry.startedAt,
      objectives,
      complete: objectives.every((objective) => objective.complete)
    }
  }).filter(Boolean)
}

export function availableQuests(profile) {
  return QUESTS.filter((quest) => !profile.quests.completed.includes(quest.id) && !profile.quests.active.some((entry) => entry.id === quest.id))
}

export function recordQuestEvent(profile, event) {
  const updates = []
  for (const active of activeQuests(profile)) {
    if (active.complete) continue
    let changed = false
    for (const objective of active.objectives) {
      if (objective.complete) continue
      if (!matchesObjective(objective, event)) continue
      const progress = profile.quests.progress[active.id]
      const before = progress[objective.id] || 0
      let next = before
      if (objective.type === 'discover') next = Math.max(before, event.count || 0)
      else if (objective.type === 'level') next = Math.max(before, event.level || 0)
      else if (objective.type === 'train') next = Math.min(objective.count, before + (event.seconds || 0))
      else next = Math.min(objective.count, before + 1)
      if (next !== before) {
        progress[objective.id] = next
        changed = true
      }
    }
    if (changed) {
      const refreshed = activeQuests(profile).find((entry) => entry.id === active.id)
      updates.push({ quest: refreshed, justCompleted: Boolean(refreshed?.complete) })
    }
  }
  return updates
}

function matchesObjective(objective, event) {
  if (objective.type !== event.type) {
    if (!(objective.type === 'capture' && event.type === 'capture')) return false
  }
  switch (objective.type) {
    case 'capture':
      if (objective.captureType && !event.types?.includes(objective.captureType)) return false
      return true
    case 'defeat':
      if (objective.biome && event.biome !== objective.biome) return false
      return true
    case 'visit':
      return Boolean(event.landmark) && event.landmark === objective.landmark
    case 'train':
      return event.type === 'train' && (event.seconds || 0) > 0
    case 'level':
      return event.type === 'level' && (event.level || 0) >= objective.level
    case 'discover':
      return event.type === 'discover'
    case 'starter':
      return event.type === 'starter'
    case 'legendary':
      return event.type === 'legendary'
    default:
      return false
  }
}

export function claimQuest(profile, questId) {
  const active = activeQuests(profile).find((quest) => quest.id === questId)
  if (!active) return { ok: false, reason: 'Quest is not active.' }
  if (!active.complete) return { ok: false, reason: 'Quest objectives are not complete yet.' }
  const quest = QUEST_BY_ID[questId]
  addCurrency(profile, quest.rewards.shards || 0, quest.rewards.stardust || 0)
  const items = []
  for (const [itemId, amount] of Object.entries(quest.rewards.items || {})) {
    const result = grantItem(profile, itemId, amount)
    if (result.ok) items.push({ itemId, amount })
  }
  profile.quests.active = profile.quests.active.filter((entry) => entry.id !== questId)
  if (!profile.quests.completed.includes(questId)) profile.quests.completed.push(questId)
  if (!profile.quests.claimed.includes(questId)) profile.quests.claimed.push(questId)
  return { ok: true, quest, items }
}

export function questSummary(profile) {
  return {
    active: activeQuests(profile),
    available: availableQuests(profile),
    completed: profile.quests.completed.map((id) => QUEST_BY_ID[id]).filter(Boolean)
  }
}

export function autoStartTutorial(profile) {
  if (profile.quests.completed.includes('q_first_steps')) return null
  return ensureQuest(profile, 'q_first_steps')
}
