export const QUESTS = [
  {
    id: 'q_first_steps',
    name: 'First Steps in the Hollow',
    giver: 'Guide Wren',
    description: 'Meet your starter, then find one wild creature and bring it home safely.',
    autoStart: true,
    objectives: [
      { id: 'starter', label: 'Choose a starter', type: 'starter', count: 1 },
      { id: 'capture', label: 'Capture any wild creature', type: 'capture', count: 1 }
    ],
    rewards: { shards: 120, stardust: 1, items: { disc_basic: 5, potion: 2 } }
  },
  {
    id: 'q_verdant',
    name: 'Whispers Under Green',
    giver: 'Botanist Sable',
    description: 'The Verdant Hollow is restless. Calm three creatures and inspect the old root shrine.',
    autoStart: false,
    objectives: [
      { id: 'defeat', label: 'Defeat 3 Verdant creatures', type: 'defeat', biome: 'verdant', count: 3 },
      { id: 'visit', label: 'Visit the Root Shrine', type: 'visit', landmark: 'root-shrine', count: 1 }
    ],
    rewards: { shards: 180, stardust: 1, items: { potion: 3, treat: 2 } }
  },
  {
    id: 'q_ember',
    name: 'Safe Passage Through Ember',
    giver: 'Warden Cato',
    description: 'Learn the caldera channels. Defeat two Ember Reach creatures and touch the Warm Gate.',
    autoStart: false,
    objectives: [
      { id: 'defeat', label: 'Defeat 2 Ember Reach creatures', type: 'defeat', biome: 'ember', count: 2 },
      { id: 'visit', label: 'Visit the Warm Gate', type: 'visit', landmark: 'warm-gate', count: 1 }
    ],
    rewards: { shards: 220, stardust: 2, items: { disc_fine: 2, potion_great: 2 } }
  },
  {
    id: 'q_tide',
    name: 'What the Tide Carries',
    giver: 'Tidekeeper Maru',
    description: 'The coast has been unusually loud. Capture a Water creature and visit the Shell Spire.',
    autoStart: false,
    objectives: [
      { id: 'capture_water', label: 'Capture a Water creature', type: 'capture', captureType: 'Water', count: 1 },
      { id: 'visit', label: 'Visit the Shell Spire', type: 'visit', landmark: 'shell-spire', count: 1 }
    ],
    rewards: { shards: 240, stardust: 2, items: { disc_fine: 2, lure: 1 } }
  },
  {
    id: 'q_frost',
    name: 'A Quiet Above the Pines',
    giver: 'Scout Ilya',
    description: 'The Frostveil is beautiful and unforgiving. Defeat three Frost creatures and reach the Ice Obelisk.',
    autoStart: false,
    objectives: [
      { id: 'defeat', label: 'Defeat 3 Frost creatures', type: 'defeat', biome: 'frost', count: 3 },
      { id: 'visit', label: 'Visit the Ice Obelisk', type: 'visit', landmark: 'ice-obelisk', count: 1 }
    ],
    rewards: { shards: 300, stardust: 3, items: { potion_great: 3, treat: 3 } }
  },
  {
    id: 'q_astral',
    name: 'The Scar Answers',
    giver: 'Astronomer Vey',
    description: 'Something in the Astral Scar is listening. Visit the Crystal Ring and witness a legendary event.',
    autoStart: false,
    objectives: [
      { id: 'visit', label: 'Visit the Crystal Ring', type: 'visit', landmark: 'crystal-ring', count: 1 },
      { id: 'legendary', label: 'Witness a legendary event', type: 'legendary', count: 1 }
    ],
    rewards: { shards: 450, stardust: 4, items: { disc_fine: 3, lure: 2 } }
  },
  {
    id: 'q_trainer',
    name: 'The Long Road',
    giver: 'Treadmill Attendant Bo',
    description: 'Strength is built in quiet moments. Train a creature for two minutes and raise one to level 10.',
    autoStart: false,
    objectives: [
      { id: 'train', label: 'Train for 120 seconds total', type: 'train', count: 120 },
      { id: 'level10', label: 'Raise a creature to level 10', type: 'level', level: 10, count: 1 }
    ],
    rewards: { shards: 260, stardust: 2, items: { treat: 5, potion: 3 } }
  },
  {
    id: 'q_collector',
    name: 'A Living Atlas',
    giver: 'Archivist Nim',
    description: 'Discovery is its own reward, but the archive pays well. Record 8 species in the AstraDex.',
    autoStart: false,
    objectives: [
      { id: 'discover8', label: 'Discover 8 species', type: 'discover', count: 8 }
    ],
    rewards: { shards: 320, stardust: 3, items: { disc_fine: 2, lure: 1 } }
  }
]

export const QUEST_BY_ID = Object.fromEntries(QUESTS.map((quest) => [quest.id, quest]))
