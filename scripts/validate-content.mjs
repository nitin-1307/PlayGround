import { SPECIES, SPECIES_BY_ID, STARTER_IDS, LEGENDARY_IDS, ULTRA_IDS, speciesByBiome, validateRoster } from '../src/data/species.js'
import { MOVES } from '../src/data/moves.js'
import { ITEMS, SHOP_ORDER } from '../src/data/items.js'
import { QUESTS, QUEST_BY_ID } from '../src/data/quests.js'
import { BIOMES, BIOME_ORDER, TYPES, TYPE_ORDER, typeMultiplier } from '../src/data/types.js'

const errors = []
const check = (condition, message) => {
  if (!condition) errors.push(message)
}

check(SPECIES.length === 150, `Expected 150 species, found ${SPECIES.length}`)
check(new Set(SPECIES.map((entry) => entry.id)).size === 150, 'Species IDs must be unique')
check(new Set(SPECIES.map((entry) => entry.name)).size === 150, 'Species names must be unique')
check(SPECIES.every((entry, index) => entry.id === `AST-${String(index + 1).padStart(3, '0')}`), 'Species IDs must be sequential AST-001…AST-150')
check(STARTER_IDS.length === 3, 'Exactly three starters are required')
check(LEGENDARY_IDS.length === 6, `Expected 6 legendary species, found ${LEGENDARY_IDS.length}`)
check(ULTRA_IDS.length === 1, `Expected 1 ultra-rare species, found ${ULTRA_IDS.length}`)
check(STARTER_IDS.every((id) => SPECIES_BY_ID[id]?.isStarter), 'Starter IDs must point to starter species')

for (const error of validateRoster()) errors.push(error)

for (const species of SPECIES) {
  check(BIOME_ORDER.includes(species.biome), `${species.id} has an unknown biome ${species.biome}`)
  check(species.encounter?.eventOnly ? species.encounter.weight >= 0 : species.encounter?.weight > 0, `${species.id} needs a valid encounter weight`)
  if (species.encounter) {
    check(species.encounter.minLevel >= 1 && species.encounter.maxLevel <= 60, `${species.id} encounter levels out of range`)
    check(species.encounter.minLevel <= species.encounter.maxLevel, `${species.id} has inverted encounter levels`)
  }
  if (species.evolution) {
    const target = SPECIES_BY_ID[species.evolution.to]
    check(Boolean(target), `${species.id} evolution target is missing`)
    check(species.evolution.level > 0 && species.evolution.level <= 60, `${species.id} has an invalid evolution level`)
    check(target?.evolvesFrom === species.id, `${species.id} evolution is not bidirectional`)
  }
  for (const learned of species.learnset) {
    check(Boolean(MOVES[learned.moveId]), `${species.id} learns missing move ${learned.moveId}`)
    check(learned.level >= 1 && learned.level <= 60, `${species.id} has an invalid learn level`)
  }
}

for (const [id, move] of Object.entries(MOVES)) {
  check(move.id === id, `Move key ${id} does not match its id`)
  check(TYPES[move.type], `Move ${id} has an unknown type ${move.type}`)
  check(move.power >= 0, `Move ${id} has a negative power`)
  check(move.cooldown > 0, `Move ${id} needs a positive cooldown`)
  check(move.range >= 0, `Move ${id} has a negative range`)
}

for (const biome of BIOME_ORDER) {
  check(speciesByBiome(biome).length >= 5, `${biome} needs at least five wild species`)
}
check(Object.keys(BIOMES).length === 6, 'Expected hub plus five biomes')
check(TYPE_ORDER.length === 8, 'Expected eight elemental types')
for (let index = 0; index < TYPE_ORDER.length; index++) {
  const type = TYPE_ORDER[index]
  const strong = TYPE_ORDER[(index + 1) % TYPE_ORDER.length]
  const weak = TYPE_ORDER[(index + TYPE_ORDER.length - 1) % TYPE_ORDER.length]
  check(typeMultiplier(type, [strong]) === 2, `${type} should be strong against ${strong}`)
  check(typeMultiplier(type, [weak]) === 0.5, `${type} should resist ${weak}`)
}

for (const id of SHOP_ORDER) check(ITEMS[id], `Shop item ${id} is missing`)
for (const [id, item] of Object.entries(ITEMS)) {
  check(item.id === id, `Item key ${id} does not match its id`)
  check(item.price >= 0, `Item ${id} has a negative price`)
  check(['shards', 'stardust'].includes(item.currency), `Item ${id} uses an unsupported currency`)
  if (item.stardust) check(item.stardust > 0, `Item ${id} has invalid Stardust cost`)
}

check(QUESTS.length >= 8, 'Expected at least eight bounties')
check(new Set(QUESTS.map((quest) => quest.id)).size === QUESTS.length, 'Quest IDs must be unique')
for (const quest of QUESTS) {
  check(QUEST_BY_ID[quest.id] === quest, `Quest ${quest.id} lookup mismatch`)
  check(quest.objectives?.length > 0, `Quest ${quest.id} needs objectives`)
  for (const objective of quest.objectives || []) {
    check(objective.count > 0, `Quest ${quest.id} objective ${objective.id} needs a positive count`)
    check(typeof objective.label === 'string' && objective.label.length > 0, `Quest ${quest.id} objective ${objective.id} needs a label`)
  }
  for (const itemId of Object.keys(quest.rewards?.items || {})) {
    check(ITEMS[itemId], `Quest ${quest.id} rewards missing item ${itemId}`)
  }
}

if (errors.length) {
  console.error(`Content validation failed with ${errors.length} issue(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Content OK: ${SPECIES.length} species, ${Object.keys(MOVES).length} moves, ${QUESTS.length} bounties, ${Object.keys(ITEMS).length} items.`)
console.log(`Starters: ${STARTER_IDS.map((id) => SPECIES_BY_ID[id].name).join(', ')}`)
console.log(`Legendaries: ${LEGENDARY_IDS.map((id) => SPECIES_BY_ID[id].name).join(', ')}`)
console.log(`Ultra rare: ${ULTRA_IDS.map((id) => SPECIES_BY_ID[id].name).join(', ')}`)
