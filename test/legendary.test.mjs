import test from 'node:test'
import assert from 'node:assert/strict'
import { createDefaultProfile } from '../src/core/save.js'
import { ACTIVE_SECONDS, WARNING_SECONDS, legendaryStatus, markLegendaryCaptured, markLegendarySeen, spawnEvent, tickLegendary } from '../src/systems/legendary.js'

test('legendary events warn, activate, and expire on schedule', () => {
  const profile = createDefaultProfile()
  const now = 1_800_000_000_000
  profile.legendary.nextEventAt = now - 1
  const warning = tickLegendary(profile, now)
  assert.equal(warning.warning, true)
  assert.equal(profile.legendary.active.phase, 'warning')
  assert.equal(profile.legendary.active.startsAt, now + WARNING_SECONDS * 1000)
  const active = tickLegendary(profile, now + WARNING_SECONDS * 1000)
  assert.equal(active.spawned, true)
  assert.equal(profile.legendary.active.phase, 'active')
  assert.equal(legendaryStatus(profile, now + WARNING_SECONDS * 1000).state, 'active')
  const expired = tickLegendary(profile, now + (WARNING_SECONDS + ACTIVE_SECONDS) * 1000)
  assert.ok(expired.expired)
  assert.equal(profile.legendary.active, null)
  assert.equal(profile.legendary.history.at(-1).outcome, 'expired')
})

test('capturing a legendary records it once and does not double-count witnesses', () => {
  const profile = createDefaultProfile()
  const now = 1_800_000_000_000
  const event = spawnEvent(profile, now)
  profile.legendary.active = event
  markLegendarySeen(profile)
  assert.equal(profile.stats.legendariesSeen, 1)
  const result = markLegendaryCaptured(profile, event, now + 1000)
  assert.equal(result.ok, true)
  assert.equal(profile.legendary.active, null)
  assert.equal(profile.legendary.history.at(-1).outcome, 'captured')
  assert.equal(profile.stats.legendariesSeen, 1)
  assert.equal(markLegendaryCaptured(profile, event, now + 2000).ok, false)
})
