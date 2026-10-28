// Shared move schema. Every creature learnset references these stable IDs.

const m = (id, name, type, power, cooldown, range, shape, effect, description, extra = {}) => ({
  id,
  name,
  type,
  power,
  cooldown,
  range,
  shape,
  effect,
  description,
  radius: extra.radius ?? 4.2,
  cone: extra.cone ?? Math.PI / 3,
  knockback: extra.knockback ?? 0,
  icon: extra.icon ?? type.toLowerCase()
})

export const MOVES = {
  // Universal
  tackle: m('tackle', 'Tackle', 'Stone', 34, 1.1, 2.6, 'single', { kind: 'damage' }, 'A dependable body check.', { icon: 'stone' }),
  focus: m('focus', 'Focus', 'Spirit', 0, 8, 0, 'self', { kind: 'buff', stat: 'attack', amount: 0.25, duration: 7 }, 'Sharpens the next few strikes.', { icon: 'spirit' }),
  rest: m('rest', 'Rest', 'Nature', 0, 12, 0, 'self', { kind: 'heal', amount: 0.24 }, 'Recovers a portion of health.', { icon: 'leaf' }),
  screech: m('screech', 'Screech', 'Spirit', 0, 9, 5, 'aoe', { kind: 'debuff', stat: 'defence', amount: 0.22, duration: 6 }, 'A piercing cry that weakens nearby foes.', { icon: 'spirit' }),

  // Nature
  leafLash: m('leafLash', 'Leaf Lash', 'Nature', 40, 1.5, 3.4, 'single', { kind: 'damage' }, 'A whip of serrated leaves.'),
  rootSnare: m('rootSnare', 'Root Snare', 'Nature', 22, 8, 4.2, 'aoe', { kind: 'damage', status: { id: 'snare', chance: 0.7, duration: 4 } }, 'Roots burst up and pin movement.'),
  bloomBurst: m('bloomBurst', 'Bloom Burst', 'Nature', 0, 11, 0, 'self', { kind: 'heal', amount: 0.3 }, 'A rush of pollen closes wounds.'),
  thornVolley: m('thornVolley', 'Thorn Volley', 'Nature', 30, 3.8, 6.5, 'cone', { kind: 'damage' }, 'A fan of hardened thorns.'),
  groveGuard: m('groveGuard', 'Grove Guard', 'Nature', 0, 13, 0, 'self', { kind: 'shield', amount: 0.28, duration: 8 }, 'Bark and moss form a living barrier.'),
  seedSling: m('seedSling', 'Seed Sling', 'Nature', 26, 1.9, 7, 'single', { kind: 'damage' }, 'A hard seed fired with surprising force.'),
  verdantPulse: m('verdantPulse', 'Verdant Pulse', 'Nature', 34, 7, 4.6, 'aoe', { kind: 'damage', status: { id: 'regen', chance: 1, duration: 5, self: true } }, 'Life energy erupts and lingers around the caster.'),

  // Fire
  emberJab: m('emberJab', 'Ember Jab', 'Fire', 42, 1.6, 2.9, 'single', { kind: 'damage', status: { id: 'burn', chance: 0.25, duration: 4 } }, 'A quick strike wrapped in sparks.'),
  flameWave: m('flameWave', 'Flame Wave', 'Fire', 32, 4.4, 5.5, 'cone', { kind: 'damage', status: { id: 'burn', chance: 0.4, duration: 4 } }, 'A rolling sheet of fire.'),
  cinderNova: m('cinderNova', 'Cinder Nova', 'Fire', 46, 9, 5.4, 'aoe', { kind: 'damage' }, 'An explosive ring of cinders.', { knockback: 2 }),
  heatVeil: m('heatVeil', 'Heat Veil', 'Fire', 0, 11, 0, 'self', { kind: 'buff', stat: 'speed', amount: 0.3, duration: 7 }, 'Shimmering heat makes the body hard to track.'),
  scorchMark: m('scorchMark', 'Scorch Mark', 'Fire', 20, 6, 6.5, 'aoe', { kind: 'damage', status: { id: 'burn', chance: 1, duration: 6 } }, 'Marks an area with persistent embers.'),
  blazeCharge: m('blazeCharge', 'Blaze Charge', 'Fire', 50, 7, 4.4, 'single', { kind: 'damage' }, 'A reckless, blazing rush.', { knockback: 3 }),
  hearthGlow: m('hearthGlow', 'Hearth Glow', 'Fire', 0, 12, 0, 'self', { kind: 'heal', amount: 0.2 }, 'A controlled inner flame restores strength.'),

  // Frost
  iceShard: m('iceShard', 'Ice Shard', 'Frost', 38, 1.5, 7.5, 'single', { kind: 'damage', status: { id: 'chill', chance: 0.3, duration: 4 } }, 'A clean splinter of glacial ice.'),
  frostNova: m('frostNova', 'Frost Nova', 'Frost', 30, 7, 4.8, 'aoe', { kind: 'damage', status: { id: 'chill', chance: 0.8, duration: 5 } }, 'A wave of cold that slows everything it touches.'),
  snowGuard: m('snowGuard', 'Snow Guard', 'Frost', 0, 12, 0, 'self', { kind: 'shield', amount: 0.3, duration: 9 }, 'Packed snow hardens into armor.'),
  glacialSpike: m('glacialSpike', 'Glacial Spike', 'Frost', 55, 9, 6, 'single', { kind: 'damage', status: { id: 'stun', chance: 0.25, duration: 1.2 } }, 'A spear of ice erupts from below.'),
  auroraMist: m('auroraMist', 'Aurora Mist', 'Frost', 16, 8, 5.2, 'aoe', { kind: 'damage', status: { id: 'weaken', chance: 0.6, duration: 6 } }, 'Cold light settles over the arena.'),
  rimeShell: m('rimeShell', 'Rime Shell', 'Frost', 0, 14, 0, 'self', { kind: 'shield', amount: 0.24, duration: 6 }, 'A shell of hoarfrost absorbs punishment.'),

  // Water
  bubbleBolt: m('bubbleBolt', 'Bubble Bolt', 'Water', 36, 1.4, 7.5, 'single', { kind: 'damage' }, 'A compressed bubble fired like a stone.'),
  tidalSweep: m('tidalSweep', 'Tidal Sweep', 'Water', 30, 4.8, 5.2, 'cone', { kind: 'damage' }, 'A broad, shoving arc of water.', { knockback: 2 }),
  healingSpring: m('healingSpring', 'Healing Spring', 'Water', 0, 13, 0, 'self', { kind: 'heal', amount: 0.32 }, 'Cool, clean water mends the body.'),
  torrentRing: m('torrentRing', 'Torrent Ring', 'Water', 40, 8, 5.4, 'aoe', { kind: 'damage' }, 'A spiraling ring of current.'),
  mistStep: m('mistStep', 'Mist Step', 'Water', 0, 9, 0, 'self', { kind: 'buff', stat: 'speed', amount: 0.22, duration: 6 }, 'Dissolves into cool mist and reforms elsewhere.'),
  abyssLash: m('abyssLash', 'Abyss Lash', 'Water', 48, 6.5, 3.2, 'single', { kind: 'damage' }, 'A dark tendril of deep water.'),
  soothingRain: m('soothingRain', 'Soothing Rain', 'Water', 0, 15, 0, 'self', { kind: 'heal', amount: 0.2, status: { id: 'regen', chance: 1, duration: 6 } }, 'A private rain shower that keeps healing.'),

  // Stone
  pebbleShot: m('pebbleShot', 'Pebble Shot', 'Stone', 34, 1.5, 7, 'single', { kind: 'damage' }, 'A fistful of stones, aimed precisely.'),
  quakeStomp: m('quakeStomp', 'Quake Stomp', 'Stone', 44, 7.5, 5, 'aoe', { kind: 'damage', status: { id: 'snare', chance: 0.5, duration: 3 } }, 'The ground buckles around the impact.', { knockback: 1 }),
  stoneSkin: m('stoneSkin', 'Stone Skin', 'Stone', 0, 13, 0, 'self', { kind: 'shield', amount: 0.34, duration: 9 }, 'A second skin of layered slate.'),
  rockSlide: m('rockSlide', 'Rock Slide', 'Stone', 38, 6, 5.6, 'cone', { kind: 'damage' }, 'A tumbling wall of rubble.', { knockback: 2 }),
  gritGuard: m('gritGuard', 'Grit Guard', 'Stone', 0, 10, 0, 'self', { kind: 'buff', stat: 'defence', amount: 0.3, duration: 7 }, 'Digs in and refuses to move.'),
  fossilJab: m('fossilJab', 'Fossil Jab', 'Stone', 40, 2.2, 2.8, 'single', { kind: 'damage' }, 'A heavy strike with an ancient edge.'),
  terraPulse: m('terraPulse', 'Terra Pulse', 'Stone', 34, 8.5, 4.8, 'aoe', { kind: 'damage', status: { id: 'weaken', chance: 0.35, duration: 4 } }, 'A low pulse rattles bones and armor.'),

  // Storm
  sparkShot: m('sparkShot', 'Spark Shot', 'Storm', 37, 1.3, 8, 'single', { kind: 'damage', status: { id: 'shock', chance: 0.2, duration: 3 } }, 'A focused arc of static.'),
  chainArc: m('chainArc', 'Chain Arc', 'Storm', 30, 5, 6.2, 'cone', { kind: 'damage', status: { id: 'shock', chance: 0.45, duration: 3 } }, 'Lightning skips across everything in front.'),
  windStep: m('windStep', 'Wind Step', 'Storm', 0, 8, 0, 'self', { kind: 'buff', stat: 'speed', amount: 0.35, duration: 6 }, 'Rides a gust to impossible speed.'),
  thunderFall: m('thunderFall', 'Thunder Fall', 'Storm', 58, 10, 6.5, 'aoe', { kind: 'damage' }, 'A delayed pillar of thunder.', { radius: 3.2 }),
  staticField: m('staticField', 'Static Field', 'Storm', 18, 7, 4.6, 'aoe', { kind: 'damage', status: { id: 'shock', chance: 0.7, duration: 4 } }, 'A crackling field that clings to foes.'),
  galeCut: m('galeCut', 'Gale Cut', 'Storm', 42, 2.4, 3.4, 'single', { kind: 'damage' }, 'A blade of compressed wind.'),

  // Astral
  starBolt: m('starBolt', 'Star Bolt', 'Astral', 41, 1.5, 8, 'single', { kind: 'damage' }, 'A precise shard of falling starlight.'),
  gravityWell: m('gravityWell', 'Gravity Well', 'Astral', 28, 8, 4.8, 'aoe', { kind: 'damage', status: { id: 'snare', chance: 0.9, duration: 4 } }, 'Space folds and holds the enemy in place.'),
  prismWard: m('prismWard', 'Prism Ward', 'Astral', 0, 12, 0, 'self', { kind: 'shield', amount: 0.32, duration: 8 }, 'A shifting prism scatters incoming force.'),
  novaPulse: m('novaPulse', 'Nova Pulse', 'Astral', 46, 8.5, 5.2, 'aoe', { kind: 'damage' }, 'A silent, expanding ring of starfire.'),
  cometTrail: m('cometTrail', 'Comet Trail', 'Astral', 36, 4.2, 7, 'cone', { kind: 'damage', status: { id: 'burn', chance: 0.3, duration: 4 } }, 'A burning comet trail sweeps the field.'),
  starlightMend: m('starlightMend', 'Starlight Mend', 'Astral', 0, 13, 0, 'self', { kind: 'heal', amount: 0.28 }, 'Starlight knits wounds closed.'),
  phaseShift: m('phaseShift', 'Phase Shift', 'Astral', 0, 11, 0, 'self', { kind: 'buff', stat: 'speed', amount: 0.28, duration: 5 }, 'Slips partly out of phase with the world.'),

  // Spirit
  shadowNip: m('shadowNip', 'Shadow Nip', 'Spirit', 39, 1.5, 3.2, 'single', { kind: 'damage', status: { id: 'weaken', chance: 0.25, duration: 4 } }, 'A bite from a patch of living shadow.'),
  soulDrain: m('soulDrain', 'Soul Drain', 'Spirit', 30, 6, 4.2, 'single', { kind: 'damage', drain: 0.45 }, 'Steals vitality and gives it to the caster.'),
  haunt: m('haunt', 'Haunt', 'Spirit', 18, 7.5, 5, 'aoe', { kind: 'damage', status: { id: 'weaken', chance: 0.8, duration: 6 } }, 'A chorus of whispers saps resolve.'),
  spiritVeil: m('spiritVeil', 'Spirit Veil', 'Spirit', 0, 12, 0, 'self', { kind: 'shield', amount: 0.22, duration: 7 }, 'A veil of memory softens harm.'),
  wispFlare: m('wispFlare', 'Wisp Flare', 'Spirit', 43, 6, 5.8, 'cone', { kind: 'damage', status: { id: 'burn', chance: 0.3, duration: 3 } }, 'Cold flames that burn without heat.'),
  echoStep: m('echoStep', 'Echo Step', 'Spirit', 0, 9, 0, 'self', { kind: 'buff', stat: 'speed', amount: 0.25, duration: 6 }, 'Leaves an afterimage to confuse enemies.'),
  dreamSnare: m('dreamSnare', 'Dream Snare', 'Spirit', 26, 8, 4.4, 'aoe', { kind: 'damage', status: { id: 'stun', chance: 0.4, duration: 1.5 } }, 'Pulls foes into a brief waking dream.')
}

export const MOVE_POOLS = {
  Nature: ['leafLash', 'rootSnare', 'bloomBurst', 'thornVolley', 'groveGuard', 'seedSling', 'verdantPulse'],
  Fire: ['emberJab', 'flameWave', 'cinderNova', 'heatVeil', 'scorchMark', 'blazeCharge', 'hearthGlow'],
  Frost: ['iceShard', 'frostNova', 'snowGuard', 'glacialSpike', 'auroraMist', 'rimeShell'],
  Water: ['bubbleBolt', 'tidalSweep', 'healingSpring', 'torrentRing', 'mistStep', 'abyssLash', 'soothingRain'],
  Stone: ['pebbleShot', 'quakeStomp', 'stoneSkin', 'rockSlide', 'gritGuard', 'fossilJab', 'terraPulse'],
  Storm: ['sparkShot', 'chainArc', 'windStep', 'thunderFall', 'staticField', 'galeCut'],
  Astral: ['starBolt', 'gravityWell', 'prismWard', 'novaPulse', 'cometTrail', 'starlightMend', 'phaseShift'],
  Spirit: ['shadowNip', 'soulDrain', 'haunt', 'spiritVeil', 'wispFlare', 'echoStep', 'dreamSnare']
}

export const UNIVERSAL_MOVES = ['tackle', 'focus', 'rest', 'screech']

export function getMove(id) {
  return MOVES[id] || MOVES.tackle
}
