import { BIOMES, RARITIES, ROLES, SIZE_CLASSES, TYPES, typeMultiplier } from './types.js'
import { MOVE_POOLS, UNIVERSAL_MOVES, MOVES } from './moves.js'
import { hashString, intRange, mulberry32, pick } from '../core/rng.js'

// ---------------------------------------------------------------------------
// ROSTER SOURCE
// 150 original species. IDs are assigned by position and are immutable.
// Format: [name, types, role, rarity, habitat biome, body archetype,
//          evolution target id (1-based) or 0, evolution level]
// ---------------------------------------------------------------------------
const ROSTER = [
  ['Spriglow', 'Nature', 'Support', 'common', 'verdant', 'biped', 2, 16],
  ['Verdantle', 'Nature', 'Guardian', 'uncommon', 'verdant', 'quadruped', 3, 32],
  ['Sylvanox', 'Nature/Spirit', 'Guardian', 'epic', 'verdant', 'quadruped', 0, 0],
  ['Cindrake', 'Fire', 'Striker', 'common', 'ember', 'wyvern', 5, 16],
  ['Pyrolisk', 'Fire', 'Bruiser', 'uncommon', 'ember', 'quadruped', 6, 32],
  ['Volcarion', 'Fire/Stone', 'Bruiser', 'epic', 'ember', 'wyvern', 0, 0],
  ['Tidewisp', 'Water', 'Support', 'common', 'tide', 'aquatic', 8, 16],
  ['Brookfin', 'Water', 'Skirmisher', 'uncommon', 'tide', 'aquatic', 9, 32],
  ['Maeloris', 'Water/Storm', 'Controller', 'epic', 'tide', 'serpent', 0, 0],
  ['Mossling', 'Nature', 'Tank', 'common', 'verdant', 'blob', 11, 18],
  ['Mosswarden', 'Nature/Stone', 'Guardian', 'rare', 'verdant', 'golem', 0, 0],
  ['Fernix', 'Nature', 'Assassin', 'common', 'verdant', 'quadruped', 0, 0],
  ['Bloomble', 'Nature', 'Support', 'common', 'verdant', 'blob', 0, 0],
  ['Petalcub', 'Nature', 'Support', 'common', 'verdant', 'quadruped', 15, 20],
  ['Petalarch', 'Nature/Astral', 'Healer', 'rare', 'verdant', 'biped', 0, 0],
  ['Thistlethorn', 'Nature', 'Controller', 'uncommon', 'verdant', 'quadruped', 0, 0],
  ['Glimmeroot', 'Nature/Astral', 'Trickster', 'rare', 'verdant', 'biped', 0, 0],
  ['Barkling', 'Nature', 'Tank', 'common', 'verdant', 'quadruped', 19, 18],
  ['Timberox', 'Nature/Stone', 'Tank', 'rare', 'verdant', 'quadruped', 0, 0],
  ['Dewdrop', 'Water/Nature', 'Support', 'common', 'tide', 'blob', 0, 0],
  ['Sunpetal', 'Nature/Fire', 'Striker', 'uncommon', 'verdant', 'biped', 0, 0],
  ['Vinecoil', 'Nature', 'Controller', 'uncommon', 'verdant', 'serpent', 0, 0],
  ['Fungalo', 'Nature', 'Support', 'common', 'verdant', 'blob', 0, 0],
  ['Sporelle', 'Nature', 'Trickster', 'common', 'verdant', 'flyer', 0, 0],
  ['Meadowry', 'Nature', 'Skirmisher', 'common', 'verdant', 'flyer', 0, 0],
  ['Briarhide', 'Nature', 'Tank', 'uncommon', 'verdant', 'quadruped', 0, 0],
  ['Acornaut', 'Nature/Stone', 'Tank', 'common', 'verdant', 'biped', 0, 0],
  ['Willowisp', 'Nature/Astral', 'Controller', 'rare', 'verdant', 'spirit', 0, 0],
  ['Clovercub', 'Nature', 'Support', 'common', 'verdant', 'quadruped', 0, 0],
  ['Canopix', 'Nature', 'Assassin', 'rare', 'verdant', 'flyer', 0, 0],
  ['Emberpup', 'Fire', 'Striker', 'common', 'ember', 'quadruped', 32, 16],
  ['Blazemane', 'Fire', 'Bruiser', 'uncommon', 'ember', 'quadruped', 33, 32],
  ['Pyrewolf', 'Fire/Astral', 'Assassin', 'epic', 'ember', 'quadruped', 0, 0],
  ['Magmite', 'Fire/Stone', 'Tank', 'common', 'ember', 'golem', 0, 0],
  ['Ashenwing', 'Fire', 'Skirmisher', 'rare', 'ember', 'flyer', 0, 0],
  ['Coalback', 'Fire', 'Tank', 'common', 'ember', 'quadruped', 0, 0],
  ['Scorchtail', 'Fire', 'Striker', 'uncommon', 'ember', 'serpent', 0, 0],
  ['Flickerfin', 'Fire/Water', 'Trickster', 'rare', 'ember', 'aquatic', 0, 0],
  ['Cinderling', 'Fire', 'Support', 'common', 'ember', 'blob', 0, 0],
  ['Obsidrake', 'Fire/Stone', 'Bruiser', 'epic', 'ember', 'wyvern', 0, 0],
  ['Flamewisp', 'Fire/Astral', 'Controller', 'rare', 'ember', 'spirit', 0, 0],
  ['Smolderox', 'Fire/Stone', 'Tank', 'uncommon', 'ember', 'quadruped', 0, 0],
  ['Emberfly', 'Fire', 'Skirmisher', 'common', 'ember', 'flyer', 0, 0],
  ['Charhound', 'Fire', 'Assassin', 'uncommon', 'ember', 'quadruped', 0, 0],
  ['Lavalux', 'Fire/Astral', 'Controller', 'epic', 'ember', 'spirit', 0, 0],
  ['Pyreling', 'Fire', 'Striker', 'common', 'ember', 'biped', 0, 0],
  ['Sootbeak', 'Fire', 'Skirmisher', 'common', 'ember', 'flyer', 0, 0],
  ['Blazetail', 'Fire', 'Skirmisher', 'uncommon', 'ember', 'quadruped', 0, 0],
  ['Infernalope', 'Fire/Storm', 'Striker', 'rare', 'ember', 'quadruped', 0, 0],
  ['Cinderbean', 'Fire', 'Support', 'common', 'ember', 'blob', 0, 0],
  ['Puddlepaw', 'Water', 'Support', 'common', 'tide', 'quadruped', 52, 16],
  ['Riverfang', 'Water', 'Assassin', 'uncommon', 'tide', 'quadruped', 0, 0],
  ['Coralisk', 'Water/Stone', 'Tank', 'uncommon', 'tide', 'golem', 0, 0],
  ['Kelpkit', 'Water', 'Controller', 'common', 'tide', 'serpent', 0, 0],
  ['Bubblefin', 'Water', 'Support', 'common', 'tide', 'aquatic', 0, 0],
  ['Wavemoth', 'Water/Astral', 'Trickster', 'rare', 'tide', 'flyer', 0, 0],
  ['Shelldrake', 'Water/Stone', 'Tank', 'rare', 'tide', 'quadruped', 0, 0],
  ['Ripplet', 'Water', 'Skirmisher', 'common', 'tide', 'aquatic', 0, 0],
  ['Abyssfang', 'Water/Spirit', 'Assassin', 'epic', 'tide', 'serpent', 0, 0],
  ['Mistray', 'Water/Astral', 'Controller', 'rare', 'tide', 'flyer', 0, 0],
  ['Tidehoof', 'Water', 'Striker', 'uncommon', 'tide', 'quadruped', 0, 0],
  ['Splashcub', 'Water', 'Support', 'common', 'tide', 'quadruped', 0, 0],
  ['Reefwing', 'Water', 'Skirmisher', 'uncommon', 'tide', 'flyer', 0, 0],
  ['Deepcoil', 'Water/Spirit', 'Controller', 'rare', 'tide', 'serpent', 0, 0],
  ['Abyssalune', 'Water/Astral', 'Support', 'legendary', 'tide', 'serpent', 0, 0],
  ['Brineling', 'Water', 'Healer', 'common', 'tide', 'blob', 0, 0],
  ['Aquarune', 'Water/Astral', 'Support', 'rare', 'tide', 'spirit', 0, 0],
  ['Pearlback', 'Water/Stone', 'Tank', 'rare', 'tide', 'golem', 0, 0],
  ['Currentail', 'Water', 'Skirmisher', 'common', 'tide', 'aquatic', 0, 0],
  ['Hydrowl', 'Water/Storm', 'Controller', 'uncommon', 'tide', 'flyer', 0, 0],
  ['Snowkit', 'Frost', 'Striker', 'common', 'frost', 'quadruped', 72, 16],
  ['Frostfang', 'Frost/Stone', 'Bruiser', 'uncommon', 'frost', 'quadruped', 0, 0],
  ['Glaciern', 'Frost', 'Tank', 'rare', 'frost', 'golem', 0, 0],
  ['Icicleaf', 'Frost/Nature', 'Support', 'uncommon', 'frost', 'biped', 0, 0],
  ['Chillwing', 'Frost/Astral', 'Skirmisher', 'rare', 'frost', 'flyer', 0, 0],
  ['Frostbeak', 'Frost', 'Assassin', 'common', 'frost', 'flyer', 0, 0],
  ['Hailstone', 'Frost/Stone', 'Tank', 'common', 'frost', 'golem', 0, 0],
  ['Borealing', 'Frost/Astral', 'Controller', 'rare', 'frost', 'serpent', 0, 0],
  ['Snowmoth', 'Frost', 'Support', 'common', 'frost', 'flyer', 0, 0],
  ['Glaciarch', 'Frost/Stone', 'Guardian', 'legendary', 'frost', 'golem', 0, 0],
  ['Icetooth', 'Frost', 'Assassin', 'uncommon', 'frost', 'quadruped', 0, 0],
  ['Rimecoil', 'Frost', 'Controller', 'uncommon', 'frost', 'serpent', 0, 0],
  ['Blizzardine', 'Frost/Storm', 'Striker', 'epic', 'frost', 'quadruped', 0, 0],
  ['Glacierox', 'Frost/Stone', 'Tank', 'epic', 'frost', 'quadruped', 0, 0],
  ['Permafin', 'Frost/Water', 'Skirmisher', 'common', 'frost', 'aquatic', 0, 0],
  ['Silverfrost', 'Frost/Astral', 'Trickster', 'rare', 'frost', 'spirit', 0, 0],
  ['Coldspike', 'Frost/Stone', 'Striker', 'common', 'frost', 'golem', 0, 0],
  ['Aurorael', 'Frost/Astral', 'Healer', 'epic', 'frost', 'spirit', 0, 0],
  ['Snowdrift', 'Frost', 'Support', 'common', 'frost', 'blob', 0, 0],
  ['Frostmaw', 'Frost/Spirit', 'Bruiser', 'rare', 'frost', 'quadruped', 0, 0],
  ['Stardustling', 'Astral', 'Support', 'common', 'astral', 'spirit', 92, 18],
  ['Nebulynx', 'Astral/Spirit', 'Assassin', 'rare', 'astral', 'quadruped', 0, 0],
  ['Cosmoth', 'Astral/Frost', 'Skirmisher', 'rare', 'astral', 'flyer', 0, 0],
  ['Voidpup', 'Astral/Spirit', 'Striker', 'uncommon', 'astral', 'quadruped', 0, 0],
  ['Lunafin', 'Astral/Water', 'Support', 'uncommon', 'astral', 'aquatic', 0, 0],
  ['Quasaro', 'Astral/Storm', 'Striker', 'epic', 'astral', 'flyer', 0, 0],
  ['Galaxkit', 'Astral', 'Trickster', 'common', 'astral', 'quadruped', 0, 0],
  ['Eclipsil', 'Astral/Spirit', 'Controller', 'rare', 'astral', 'serpent', 0, 0],
  ['Starcaller', 'Astral', 'Support', 'uncommon', 'astral', 'biped', 0, 0],
  ['Aetherion', 'Astral/Storm', 'Guardian', 'legendary', 'astral', 'flyer', 0, 0],
  ['Meteorling', 'Astral/Stone', 'Striker', 'common', 'astral', 'golem', 0, 0],
  ['Chronowisp', 'Astral/Spirit', 'Controller', 'rare', 'astral', 'spirit', 0, 0],
  ['Celestail', 'Astral/Frost', 'Skirmisher', 'uncommon', 'astral', 'flyer', 0, 0],
  ['Riftling', 'Astral/Spirit', 'Trickster', 'rare', 'astral', 'blob', 0, 0],
  ['Orbitox', 'Astral/Stone', 'Tank', 'epic', 'astral', 'golem', 0, 0],
  ['Solstice', 'Fire/Astral', 'Striker', 'legendary', 'astral', 'biped', 0, 0],
  ['Nightbloom', 'Spirit/Nature', 'Support', 'rare', 'astral', 'blob', 0, 0],
  ['Sablemoth', 'Spirit/Astral', 'Trickster', 'uncommon', 'astral', 'flyer', 0, 0],
  ['Prismara', 'Astral/Water', 'Healer', 'epic', 'astral', 'serpent', 0, 0],
  ['Astrafin', 'Astral/Water', 'Skirmisher', 'rare', 'astral', 'aquatic', 0, 0],
  ['Pebblit', 'Stone', 'Tank', 'common', 'verdant', 'golem', 112, 16],
  ['Boulderox', 'Stone', 'Tank', 'uncommon', 'verdant', 'golem', 0, 0],
  ['Granitlet', 'Stone', 'Striker', 'common', 'ember', 'quadruped', 0, 0],
  ['Slatewing', 'Stone/Storm', 'Skirmisher', 'uncommon', 'astral', 'flyer', 0, 0],
  ['Cragmaw', 'Stone', 'Bruiser', 'uncommon', 'ember', 'quadruped', 0, 0],
  ['Geodite', 'Stone/Astral', 'Controller', 'rare', 'astral', 'golem', 0, 0],
  ['Basaltine', 'Stone/Fire', 'Tank', 'rare', 'ember', 'golem', 0, 0],
  ['Terracub', 'Stone', 'Support', 'common', 'verdant', 'quadruped', 0, 0],
  ['Flintbeak', 'Stone', 'Skirmisher', 'common', 'ember', 'flyer', 0, 0],
  ['Quarrymane', 'Stone', 'Striker', 'uncommon', 'ember', 'quadruped', 0, 0],
  ['Sandclaw', 'Stone', 'Assassin', 'common', 'tide', 'quadruped', 0, 0],
  ['Shalewing', 'Stone/Astral', 'Skirmisher', 'rare', 'frost', 'flyer', 0, 0],
  ['Glintstone', 'Stone/Astral', 'Support', 'rare', 'astral', 'golem', 0, 0],
  ['Rubblet', 'Stone', 'Trickster', 'common', 'ember', 'blob', 0, 0],
  ['Cliffcoil', 'Stone/Storm', 'Controller', 'uncommon', 'frost', 'serpent', 0, 0],
  ['Cairnox', 'Stone/Spirit', 'Guardian', 'legendary', 'astral', 'golem', 0, 0],
  ['Sparkit', 'Storm', 'Striker', 'common', 'astral', 'quadruped', 128, 16],
  ['Voltmane', 'Storm/Spirit', 'Bruiser', 'uncommon', 'astral', 'quadruped', 0, 0],
  ['Staticub', 'Storm', 'Trickster', 'common', 'tide', 'blob', 0, 0],
  ['Galewing', 'Storm/Frost', 'Skirmisher', 'uncommon', 'frost', 'flyer', 0, 0],
  ['Thunderhoof', 'Storm', 'Striker', 'rare', 'verdant', 'quadruped', 0, 0],
  ['Zapfin', 'Storm/Water', 'Skirmisher', 'common', 'tide', 'aquatic', 0, 0],
  ['Squallix', 'Storm/Astral', 'Controller', 'rare', 'astral', 'flyer', 0, 0],
  ['Cyclonette', 'Storm', 'Controller', 'uncommon', 'astral', 'spirit', 0, 0],
  ['Breezebeak', 'Storm', 'Skirmisher', 'common', 'tide', 'flyer', 0, 0],
  ['Voltrix', 'Storm/Astral', 'Striker', 'epic', 'astral', 'quadruped', 0, 0],
  ['Tempestail', 'Storm/Astral', 'Controller', 'rare', 'astral', 'serpent', 0, 0],
  ['Windshear', 'Storm', 'Assassin', 'uncommon', 'frost', 'flyer', 0, 0],
  ['Emberstorm', 'Fire/Storm', 'Striker', 'rare', 'ember', 'wyvern', 0, 0],
  ['Tempestrix', 'Storm/Frost', 'Guardian', 'legendary', 'astral', 'flyer', 0, 0],
  ['Shadepup', 'Spirit', 'Assassin', 'common', 'astral', 'quadruped', 142, 16],
  ['Umbrawl', 'Spirit/Astral', 'Bruiser', 'rare', 'astral', 'quadruped', 0, 0],
  ['Wispling', 'Spirit', 'Support', 'common', 'astral', 'spirit', 0, 0],
  ['Ghastelle', 'Spirit/Astral', 'Controller', 'rare', 'astral', 'spirit', 0, 0],
  ['Soulmoth', 'Spirit', 'Support', 'uncommon', 'astral', 'flyer', 0, 0],
  ['Phantomane', 'Spirit/Astral', 'Striker', 'epic', 'astral', 'quadruped', 0, 0],
  ['Gravecoil', 'Spirit/Stone', 'Controller', 'uncommon', 'astral', 'serpent', 0, 0],
  ['Hexkit', 'Spirit', 'Trickster', 'common', 'astral', 'quadruped', 0, 0],
  ['Wraitheling', 'Spirit/Astral', 'Assassin', 'rare', 'astral', 'spirit', 0, 0],
  ['Luminarch', 'Astral/Spirit', 'Support', 'ultra', 'astral', 'spirit', 0, 0]
]

const PALETTES = {
  Nature: [
    ['#71cf6f', '#2f7a45', '#d7ff8f', '#17351f'],
    ['#8bdc72', '#3f8f4a', '#ffe28a', '#18351f'],
    ['#54b96a', '#226044', '#b9ffa8', '#102a1b'],
    ['#a7d85f', '#4e7f2e', '#ffca7a', '#23310e']
  ],
  Fire: [
    ['#ff8a4c', '#b8331a', '#ffd166', '#3b130a'],
    ['#ffb347', '#d8481f', '#fff0a6', '#431609'],
    ['#ff6b4a', '#8c2418', '#ffd08a', '#2c0b08'],
    ['#f9a03f', '#a63d1a', '#ffe066', '#321106']
  ],
  Frost: [
    ['#b4ecff', '#5aa9d6', '#ffffff', '#173c52'],
    ['#d9f8ff', '#7ac6e8', '#a4d8ff', '#1a3b55'],
    ['#9fe2f5', '#4386b8', '#f5ffff', '#102c42'],
    ['#c8f4ff', '#6fb3d6', '#ffffff', '#203b54']
  ],
  Water: [
    ['#65b8ff', '#2868b8', '#a9f2ff', '#0c2246'],
    ['#4fb2d8', '#1d6692', '#b9ffe8', '#0a263a'],
    ['#7cc6f2', '#2e5fae', '#d8f6ff', '#0d1e42'],
    ['#56c8d8', '#1e6f8f', '#b3ffe2', '#082a32']
  ],
  Stone: [
    ['#d0aa77', '#78573b', '#ffe0a3', '#332417'],
    ['#b6a58e', '#665b4d', '#e8d7b7', '#2a241d'],
    ['#c5a076', '#6d4f36', '#ffcf8a', '#2d1f14'],
    ['#a58d70', '#5c4936', '#e0c59a', '#241b12']
  ],
  Storm: [
    ['#ffe066', '#d3a11a', '#fffbd1', '#3b2b07'],
    ['#f7d94c', '#b98a12', '#ffffff', '#302405'],
    ['#ffef8a', '#c59a23', '#d6f7ff', '#3c2d08'],
    ['#f2e05c', '#a97e14', '#fff7c2', '#2d2205']
  ],
  Astral: [
    ['#c08bff', '#6139a8', '#ffd6ff', '#24103f'],
    ['#b8a1ff', '#5340a4', '#a7f6ff', '#1c143f'],
    ['#d3a6ff', '#6f42b8', '#fff0b8', '#2c1250'],
    ['#a98bff', '#4a2e8f', '#f2b8ff', '#1c0d3a']
  ],
  Spirit: [
    ['#ff9fd0', '#a03a72', '#ffe3f2', '#3b1128'],
    ['#d7a2ff', '#7540a8', '#ffd7eb', '#28113f'],
    ['#f59ac2', '#913963', '#e8e0ff', '#35101f'],
    ['#c6a4ff', '#6c46a6', '#ffd0f0', '#24123b']
  ]
}

const ABILITY_ADJECTIVES = {
  Nature: ['Verdant', 'Rooted', 'Blooming', 'Mossy', 'Sunlit', 'Thorned', 'Canopy', 'Meadow', 'Evergreen', 'Dewy'],
  Fire: ['Ember', 'Blazing', 'Scorched', 'Smoldering', 'Ashen', 'Cinder', 'Furnace', 'Kindled', 'Molten', 'Flare'],
  Frost: ['Glacial', 'Rimed', 'Snowbound', 'Frozen', 'Auroral', 'Icicle', 'Winter', 'Permafrost', 'Silver', 'Hail'],
  Water: ['Tidal', 'Briny', 'Rippling', 'Deepwater', 'Coral', 'Mist', 'Current', 'Lagoon', 'Undertow', 'Rain'],
  Stone: ['Granite', 'Basalt', 'Craggy', 'Fossil', 'Quarry', 'Layered', 'Ironstone', 'Pebbled', 'Steadfast', 'Bedrock'],
  Storm: ['Charged', 'Crackling', 'Gale', 'Thunder', 'Static', 'Cyclone', 'Tempest', 'Voltaic', 'Squall', 'Brightbolt'],
  Astral: ['Starlit', 'Nebular', 'Riftborn', 'Comet', 'Orbital', 'Lunar', 'Quasar', 'Eclipsed', 'Celestial', 'Void'],
  Spirit: ['Haunted', 'Whispering', 'Phantom', 'Dreaming', 'Umbral', 'Echoing', 'Spectral', 'Memory', 'Twilight', 'Wandering']
}

const ABILITY_NOUNS = ['Instinct', 'Pulse', 'Bond', 'Guard', 'Step', 'Sense', 'Veil', 'Surge', 'Mark', 'Song', 'Shell', 'Ward', 'Trace', 'Bloom', 'Spark']

const ABILITY_TEMPLATES = [
  { kind: 'regen', name: 'regeneration', value: 0.012, text: 'Slowly restores health during battle.' },
  { kind: 'thorns', name: 'retaliation', value: 0.16, text: 'Reflects a portion of contact damage.' },
  { kind: 'guard', name: 'damage reduction', value: 0.1, text: 'Reduces incoming damage by 10%.' },
  { kind: 'swift', name: 'speed', value: 0.12, text: 'Moves 12% faster in battle.' },
  { kind: 'fierce', name: 'attack', value: 0.12, text: 'Deals 12% more move damage.' },
  { kind: 'sturdy', name: 'defence', value: 0.12, text: 'Takes 12% less damage from heavy hits.' },
  { kind: 'lucky', name: 'capture fortune', value: 0.08, text: 'Improves capture success when this creature is active.' },
  { kind: 'mentor', name: 'experience gain', value: 0.15, text: 'Earns 15% bonus experience from victories.' },
  { kind: 'intimidate', name: 'enemy weakening', value: 0.08, text: 'Wild enemies deal 8% less damage.' },
  { kind: 'lastStand', name: 'last stand', value: 0.2, text: 'Gains 20% attack while below one third health.' },
  { kind: 'vampiric', name: 'lifesteal', value: 0.08, text: 'Heals for a portion of damage dealt.' },
  { kind: 'static', name: 'static shock', value: 0.18, text: 'Contact attacks may shock the attacker.' },
  { kind: 'sureFooted', name: 'footing', value: 1, text: 'Cannot be snared or rooted.' },
  { kind: 'keenEye', name: 'precision', value: 0.08, text: 'Improves critical strike chance.' },
  { kind: 'shieldOnLow', name: 'emergency shield', value: 0.18, text: 'Creates a shield once when health falls below half.' }
]

const LORE_OPENERS = {
  verdant: [
    'Grows where old roots remember rain',
    'Nests in the warm hollows beneath the canopy',
    'Follows the stream-song through the undergrowth',
    'Sleeps in moss beds and wakes with the dawn chorus'
  ],
  ember: [
    'Basks on black-glass ridges above the caldera',
    'Feeds on heat shimmer and cooled cinders',
    'Builds nests from pumice and warm stone',
    'Travels the safe channels between lava rivers'
  ],
  tide: [
    'Rides the breathing tide along the shell coast',
    'Hides in bright coral mazes at low water',
    'Leaves spiral tracks across wet sand',
    'Listens for storms through the deep current'
  ],
  frost: [
    'Crosses the blue ice under pale auroras',
    'Shelters in snow caves carved by old winds',
    'Collects frozen starlight in its fur',
    'Follows the ridge line above the silent pines'
  ],
  astral: [
    'Appears where crystal spires catch the night sky',
    'Drifts through the scar on currents of starlight',
    'Leaves faint constellations in its wake',
    'Hums in harmony with the floating stones'
  ]
}

const BEHAVIOUR_BY_ROLE = {
  Striker: 'Closes distance quickly and looks for a clean opening.',
  Bruiser: 'Applies steady pressure and refuses to give ground.',
  Tank: 'Holds a line, drawing attention away from smaller creatures.',
  Assassin: 'Circles at the edge of a fight, waiting for a mistake.',
  Controller: 'Shapes the battlefield with slows, roots, and forced movement.',
  Support: 'Stays near allies, reinforcing them with steady encouragement.',
  Healer: 'Seeks wounded creatures and restores them before returning to cover.',
  Guardian: 'Patrols a fixed territory and warns intruders before striking.',
  Skirmisher: 'Darts in and out, never staying in one place for long.',
  Trickster: 'Mimics, feints, and steals attention at the worst possible moment.'
}

const MICRO_HABITATS = {
  biped: 'trail edges and open clearings',
  quadruped: 'soft ground near well-worn paths',
  wyvern: 'high ledges and thermal updrafts',
  aquatic: 'shallow pools and slow water',
  serpent: 'tangled roots and narrow crevices',
  blob: 'damp hollows and shaded stones',
  flyer: 'wind-bent branches and open sky',
  golem: 'rock shelves and old foundations',
  spirit: 'thin places where light behaves strangely'
}

const ANIMATION_BRIEFS = {
  biped: 'Two-legged idle bob, arm swing, hop, flinch, and two attack poses.',
  quadruped: 'Four-leg walk cycle, tail sway, ear flick, lunge, flinch, and rest pose.',
  wyvern: 'Wing flap, tail counterbalance, hover, dive, and recharge pose.',
  aquatic: 'Tail undulation, fin flutter, burst swim, and floating idle.',
  serpent: 'Slither loop, coil, rear-up, strike, and coil-rest.',
  blob: 'Squash-and-stretch idle, bounce, wobble, and compress attack.',
  flyer: 'Hover bob, wing beat, glide, dive, and perch.',
  golem: 'Heavy step, shoulder roll, brace, slam, and dormant state.',
  spirit: 'Float drift, flicker, phase-out, swirl, and reform.'
}

const AUDIO_BRIEFS = {
  biped: 'Light footfalls, a bright chirp, and a soft wooden click.',
  quadruped: 'Padding steps, a low purr, and a short rising call.',
  wyvern: 'Leathery wingbeats, a smoky hiss, and a resonant cry.',
  aquatic: 'Bubbles, a watery trill, and a splashy tail slap.',
  serpent: 'Dry scales, a papery hiss, and a low whistle.',
  blob: 'Wet pops, a rubbery bounce, and a cheerful gurgle.',
  flyer: 'Quick wingbeats, a thin whistle, and a sharp chirp.',
  golem: 'Grinding stone, a deep thump, and a resonant hum.',
  spirit: 'A breathy choir, glassy chimes, and a fading echo.'
}

const STAT_BASE = {
  Striker: { health: 70, attack: 74, defence: 46, speed: 68 },
  Bruiser: { health: 86, attack: 78, defence: 62, speed: 44 },
  Tank: { health: 98, attack: 52, defence: 84, speed: 34 },
  Assassin: { health: 62, attack: 86, defence: 40, speed: 82 },
  Controller: { health: 74, attack: 60, defence: 58, speed: 56 },
  Support: { health: 76, attack: 54, defence: 62, speed: 52 },
  Healer: { health: 80, attack: 48, defence: 60, speed: 50 },
  Guardian: { health: 104, attack: 66, defence: 82, speed: 38 },
  Skirmisher: { health: 68, attack: 68, defence: 48, speed: 76 },
  Trickster: { health: 66, attack: 64, defence: 44, speed: 80 }
}

const SIZE_BY_ARCHETYPE = {
  golem: 'large',
  wyvern: 'large',
  quadruped: 'medium',
  serpent: 'medium',
  biped: 'small',
  flyer: 'small',
  aquatic: 'small',
  blob: 'small',
  spirit: 'tiny'
}

function makeLearnset(types, role, seed) {
  const rng = mulberry32(seed)
  const primary = MOVE_POOLS[types[0]] || MOVE_POOLS.Stone
  const secondary = types[1] ? MOVE_POOLS[types[1]] || [] : []
  const utility = ['focus', 'rest', 'screech', 'tackle']
  const chosen = []
  const add = (pool, count) => {
    const copy = [...pool]
    for (let i = 0; i < count && copy.length; i++) {
      const index = Math.floor(rng() * copy.length)
      const moveId = copy.splice(index, 1)[0]
      if (!chosen.includes(moveId)) chosen.push(moveId)
    }
  }
  add(primary, 3)
  if (secondary.length) add(secondary, 1)
  add(utility, 2)
  if (chosen.length < 4) add(primary, 2)
  const levels = [1, 4, 8, 14, 21, 30]
  const order = role === 'Support' || role === 'Healer'
    ? chosen.sort((a, b) => (MOVES[b].power || 0) - (MOVES[a].power || 0))
    : chosen
  return order.slice(0, 6).map((moveId, index) => ({ level: levels[index], moveId }))
}

function makeAbility(name, types, role, seed, used) {
  const rng = mulberry32(seed ^ 0x9e3779b9)
  const template = ABILITY_TEMPLATES[Math.floor(rng() * ABILITY_TEMPLATES.length)]
  const adjectives = ABILITY_ADJECTIVES[types[0]] || ABILITY_ADJECTIVES.Astral
  let attempt = 0
  let abilityName = ''
  do {
    const adjective = adjectives[(Math.floor(rng() * adjectives.length) + attempt) % adjectives.length]
    const noun = ABILITY_NOUNS[(Math.floor(rng() * ABILITY_NOUNS.length) + attempt * 3) % ABILITY_NOUNS.length]
    abilityName = `${adjective} ${noun}`
    attempt++
  } while (used.has(abilityName) && attempt < 60)
  used.add(abilityName)
  return {
    id: `abil-${hashString(abilityName).toString(16)}`,
    name: abilityName,
    trigger: template.kind === 'static' || template.kind === 'thorns' ? 'When struck at close range' : template.kind === 'lastStand' ? 'While below one third health' : 'Passive',
    effect: template.kind,
    value: template.value,
    description: template.text,
    role,
    types
  }
}

function loreFor(name, types, role, biome, seed) {
  const rng = mulberry32(seed ^ 0xa5a5a5)
  const opener = LORE_OPENERS[biome][Math.floor(rng() * LORE_OPENERS[biome].length)]
  const typeText = types.map((type) => TYPES[type].id.toLowerCase()).join(' and ')
  const lines = [
    `${opener}. ${name} is a ${role.toLowerCase()}-minded ${typeText} creature with a distinct, curious temperament.`,
    `Field notes describe ${name} as ${BEHAVIOUR_BY_ROLE[role].toLowerCase()} Its ${types[0].toLowerCase()} affinity is visible in the way it moves, not just in battle.`,
    `Local naturalists say ${name} remembers individual travellers and will approach those who move calmly and keep a respectful distance.`
  ]
  return lines.join(' ')
}

function buildSpecies() {
  const species = []
  const usedAbilities = new Set()
  const usedNames = new Set()
  ROSTER.forEach((entry, index) => {
    const [name, typeString, role, rarity, biome, archetype, evolvesTo, evolvesAt] = entry
    const id = `AST-${String(index + 1).padStart(3, '0')}`
    if (usedNames.has(name)) throw new Error(`Duplicate species name ${name}`)
    usedNames.add(name)
    const types = typeString.split('/')
    const seed = hashString(`${id}:${name}`)
    const rng = mulberry32(seed)
    const statBase = STAT_BASE[role]
    const rarityData = RARITIES[rarity]
    const bonus = rarityData.statBonus
    const variance = (spread) => Math.round((rng() - 0.5) * spread)
    const sizeClass = rarity === 'legendary' || rarity === 'ultra'
      ? (archetype === 'golem' || archetype === 'wyvern' ? 'colossal' : 'large')
      : SIZE_BY_ARCHETYPE[archetype] || 'small'
    const paletteList = PALETTES[types[0]] || PALETTES.Astral
    const palette = paletteList[index % paletteList.length]
    const ability = makeAbility(name, types, role, seed, usedAbilities)
    const learnset = makeLearnset(types, role, seed)
    const levelRange = BIOMES[biome].levelRange
    const isSpecial = rarity === 'legendary' || rarity === 'ultra'
    const encounterWeight = isSpecial ? 0 : Math.max(1, Math.round(rarityData.weight / 3))
    species.push({
      id,
      name,
      types,
      role,
      rarity,
      biome,
      archetype,
      sizeClass,
      stats: {
        health: Math.round(statBase.health + bonus * 2 + variance(10)),
        attack: Math.round(statBase.attack + bonus + variance(12)),
        defence: Math.round(statBase.defence + bonus + variance(12)),
        speed: Math.round(statBase.speed + Math.round(bonus * 0.8) + variance(14))
      },
      growth: rarity === 'common' ? 'steady' : rarity === 'ultra' ? 'late' : rarity === 'legendary' ? 'late' : 'early',
      ability,
      learnset,
      evolution: evolvesTo ? { to: `AST-${String(evolvesTo).padStart(3, '0')}`, level: evolvesAt } : null,
      evolvesFrom: null,
      height: (0.5 + sizeClassValue(sizeClass) * 0.8).toFixed(1),
      habitat: `${BIOMES[biome].name} — ${MICRO_HABITATS[archetype]}`,
      behavior: BEHAVIOUR_BY_ROLE[role],
      encounter: {
        biome,
        minLevel: isSpecial ? Math.max(20, levelRange[0] + 8) : levelRange[0],
        maxLevel: isSpecial ? Math.max(30, levelRange[1] + 4) : levelRange[1],
        weight: encounterWeight,
        time: 'any',
        weather: 'any',
        eventOnly: isSpecial,
        ultraChance: rarity === 'ultra' ? 0.0000001 : 0
      },
      visual: {
        archetype,
        size: SIZE_CLASSES[sizeClass].scale,
        primary: palette[0],
        secondary: palette[1],
        accent: palette[2],
        eye: palette[3],
        glow: rarity === 'legendary' || rarity === 'ultra',
        markings: (index % 4),
        horns: archetype === 'wyvern' || index % 5 === 0,
        wings: archetype === 'flyer' || archetype === 'wyvern',
        tail: archetype !== 'blob' || index % 3 === 0,
        crown: rarity === 'legendary' || rarity === 'ultra',
        aura: isSpecial
      },
      visualBrief: `${sizeClass} ${archetype} silhouette in ${palette[0]} with ${palette[1]} undersides and ${palette[2]} highlights. Unique hook: ${uniqueHook(archetype, index)}.`,
      audioBrief: AUDIO_BRIEFS[archetype],
      animation: ANIMATION_BRIEFS[archetype],
      lore: loreFor(name, types, role, biome, seed),
      acquisition: evolvesTo || index < 9 ? ['starter-or-wild', 'evolution'] : ['wild'],
      isStarter: [1, 4, 7].includes(index + 1)
    })
  })

  // Bidirectional evolution links.
  for (const entry of species) {
    if (!entry.evolution) continue
    const target = species.find((candidate) => candidate.id === entry.evolution.to)
    if (!target) throw new Error(`${entry.id} has invalid evolution target ${entry.evolution.to}`)
    if (target.evolvesFrom && target.evolvesFrom !== entry.id) throw new Error(`${target.id} has conflicting evolution sources`)
    target.evolvesFrom = entry.id
  }
  return species
}

function sizeClassValue(sizeClass) {
  return { tiny: 0.2, small: 0.4, medium: 0.7, large: 1.1, colossal: 1.6 }[sizeClass] || 0.5
}

function uniqueHook(archetype, index) {
  const hooks = {
    biped: ['a leaf-like crest that opens when it is excited', 'bright forearm frills used for signalling', 'a tail plume that trails sparks or pollen'],
    quadruped: ['asymmetric horn growth that records age', 'a patterned mantle along the spine', 'oversized ears that move independently'],
    wyvern: ['heat vents along the wing edges', 'a split tail fan with mirrored markings', 'a throat pouch that glows before a call'],
    aquatic: ['translucent fin membranes with visible veins of light', 'a shell-like collar that clicks in currents', 'a trailing ribbon fin longer than its body'],
    serpent: ['a hood of overlapping leaf or scale plates', 'rings that brighten in sequence when it moves', 'a tail tip shaped like a small lantern'],
    blob: ['a floating core visible through its skin', 'bubbles that orbit the body in slow loops', 'a wobbling crown of soft spines'],
    flyer: ['long ribbon feathers with eye-spots', 'a forked crest that splits the silhouette', 'wings that leave brief afterimages'],
    golem: ['a seam of glowing mineral running through the chest', 'floating shoulder stones held by unseen force', 'carved markings that change when it speaks'],
    spirit: ['a halo of slowly orbiting fragments', 'a lower body that dissolves into drifting motes', 'a face that flickers between calm and mischievous']
  }
  return pick(mulberry32(index * 977 + 13), hooks[archetype] || hooks.spirit)
}

export const SPECIES = buildSpecies()
export const SPECIES_BY_ID = Object.fromEntries(SPECIES.map((entry) => [entry.id, entry]))
export const SPECIES_BY_NAME = Object.fromEntries(SPECIES.map((entry) => [entry.name, entry]))

export const STARTER_IDS = ['AST-001', 'AST-004', 'AST-007']
export const LEGENDARY_IDS = SPECIES.filter((entry) => entry.rarity === 'legendary').map((entry) => entry.id)
export const ULTRA_IDS = SPECIES.filter((entry) => entry.rarity === 'ultra').map((entry) => entry.id)

export function getSpecies(id) {
  return SPECIES_BY_ID[id] || null
}

export function speciesByBiome(biome) {
  return SPECIES.filter((entry) => entry.biome === biome && !entry.encounter.eventOnly)
}

export function wildTable(biome, options = {}) {
  return speciesByBiome(biome)
    .filter((entry) => !options.excludeLegendary || entry.rarity !== 'legendary')
    .map((entry) => ({ speciesId: entry.id, weight: entry.encounter.weight }))
}

export function startingMoves(level, learnset) {
  const unlocked = learnset.filter((entry) => entry.level <= level).map((entry) => entry.moveId)
  return unlocked.slice(0, 4)
}

export function typeEffectiveness(attackType, defenderSpecies) {
  return typeMultiplier(attackType, defenderSpecies?.types || [])
}

export function validateRoster() {
  const errors = []
  const ids = new Set()
  for (const entry of SPECIES) {
    if (ids.has(entry.id)) errors.push(`duplicate id ${entry.id}`)
    ids.add(entry.id)
    if (!entry.types.length || entry.types.some((type) => !TYPES[type])) errors.push(`${entry.id} invalid type`)
    if (!ROLES.includes(entry.role)) errors.push(`${entry.id} invalid role`)
    if (!RARITIES[entry.rarity]) errors.push(`${entry.id} invalid rarity`)
    if (!BIOMES[entry.biome]) errors.push(`${entry.id} invalid biome`)
    if (!entry.stats.health || !entry.stats.attack || !entry.stats.defence || !entry.stats.speed) errors.push(`${entry.id} incomplete stats`)
    if (!entry.ability?.name || !entry.ability?.effect) errors.push(`${entry.id} missing ability`)
    if (!entry.learnset?.length) errors.push(`${entry.id} missing learnset`)
    for (const learned of entry.learnset) {
      if (!MOVES[learned.moveId]) errors.push(`${entry.id} missing move ${learned.moveId}`)
    }
    if (entry.evolution) {
      const target = SPECIES_BY_ID[entry.evolution.to]
      if (!target) errors.push(`${entry.id} evolution target missing`)
      else if (target.evolvesFrom !== entry.id) errors.push(`${entry.id} evolution link not bidirectional`)
    }
  }
  return errors
}
