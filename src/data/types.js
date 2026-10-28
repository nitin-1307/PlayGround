// Core elemental and rarity definitions shared by every system.

export const TYPES = {
  Nature: {
    id: 'Nature',
    color: '#63c96b',
    dark: '#1d4d2b',
    icon: 'leaf',
    blurb: 'Patient, restorative, and impossible to uproot.'
  },
  Fire: {
    id: 'Fire',
    color: '#ff7a45',
    dark: '#5a1c0d',
    icon: 'flame',
    blurb: 'Bright, hungry, and always moving forward.'
  },
  Frost: {
    id: 'Frost',
    color: '#7ad9ff',
    dark: '#123b52',
    icon: 'snow',
    blurb: 'Quiet power that slows the world to a crawl.'
  },
  Water: {
    id: 'Water',
    color: '#3f9bff',
    dark: '#102f5e',
    icon: 'drop',
    blurb: 'Adaptable, flowing, and relentless over time.'
  },
  Stone: {
    id: 'Stone',
    color: '#c8a26a',
    dark: '#443222',
    icon: 'stone',
    blurb: 'Enduring forms that outlast every storm.'
  },
  Storm: {
    id: 'Storm',
    color: '#ffe066',
    dark: '#4a3a08',
    icon: 'bolt',
    blurb: 'Fast, crackling, and impossible to pin down.'
  },
  Astral: {
    id: 'Astral',
    color: '#c08bff',
    dark: '#2c1650',
    icon: 'star',
    blurb: 'Drawn from starlight, rifts, and impossible distances.'
  },
  Spirit: {
    id: 'Spirit',
    color: '#ff8fc7',
    dark: '#4c1832',
    icon: 'spirit',
    blurb: 'Present in the space between memory and dream.'
  }
}

export const TYPE_ORDER = ['Nature', 'Fire', 'Frost', 'Water', 'Stone', 'Storm', 'Astral', 'Spirit']

// Each type is strong against the next two types in the wheel and resists
// the previous two. This keeps the chart readable and symmetric.
export const TYPE_WHEEL = TYPE_ORDER

export function typeMultiplier(attackType, defenderTypes = []) {
  if (!TYPES[attackType] || !Array.isArray(defenderTypes) || defenderTypes.length === 0) return 1
  let multiplier = 1
  const attackIndex = TYPE_WHEEL.indexOf(attackType)
  for (const defenderType of defenderTypes) {
    const defenderIndex = TYPE_WHEEL.indexOf(defenderType)
    if (defenderIndex === -1) continue
    const forward = (defenderIndex - attackIndex + TYPE_WHEEL.length) % TYPE_WHEEL.length
    if (forward === 1 || forward === 2) multiplier *= 2
    else if (forward === TYPE_WHEEL.length - 1 || forward === TYPE_WHEEL.length - 2) multiplier *= 0.5
  }
  return multiplier
}

export function typeLabel(types = []) {
  return types.join(' / ')
}

export const RARITIES = {
  common: { id: 'common', label: 'Common', color: '#a9b8b0', weight: 52, statBonus: 0 },
  uncommon: { id: 'uncommon', label: 'Uncommon', color: '#66d38f', weight: 27, statBonus: 4 },
  rare: { id: 'rare', label: 'Rare', color: '#65b8ff', weight: 14, statBonus: 9 },
  epic: { id: 'epic', label: 'Epic', color: '#c58cff', weight: 5.4, statBonus: 15 },
  legendary: { id: 'legendary', label: 'Legendary', color: '#ffd166', weight: 1.5, statBonus: 26 },
  ultra: { id: 'ultra', label: 'Ultra Rare', color: '#ffffff', weight: 0.1, statBonus: 44 }
}

export const RARITY_ORDER = Object.keys(RARITIES)

export const ROLES = [
  'Striker',
  'Bruiser',
  'Tank',
  'Assassin',
  'Controller',
  'Support',
  'Healer',
  'Guardian',
  'Skirmisher',
  'Trickster'
]

export const SIZE_CLASSES = {
  tiny: { label: 'Tiny', scale: 0.62, radius: 0.45 },
  small: { label: 'Small', scale: 0.82, radius: 0.62 },
  medium: { label: 'Medium', scale: 1.0, radius: 0.8 },
  large: { label: 'Large', scale: 1.3, radius: 1.05 },
  colossal: { label: 'Colossal', scale: 1.75, radius: 1.5 }
}

export const BIOMES = {
  hub: {
    id: 'hub',
    name: 'Hearthlight Haven',
    short: 'Haven',
    color: '#f3c987',
    ground: '#c8aa7a',
    accent: '#ffd166',
    description: 'A warm, protected waystation built around a fallen star.',
    center: [0, 0],
    radius: 22,
    levelRange: [1, 1]
  },
  verdant: {
    id: 'verdant',
    name: 'Verdant Hollow',
    short: 'Verdant',
    color: '#63c96b',
    ground: '#4d9a52',
    accent: '#c7ff8a',
    description: 'A layered green basin of singing leaves, old roots, and clear streams.',
    center: [0, -72],
    radius: 40,
    levelRange: [3, 11]
  },
  ember: {
    id: 'ember',
    name: 'Ember Reach',
    short: 'Ember',
    color: '#ff7a45',
    ground: '#4a302c',
    accent: '#ffb35c',
    description: 'A black-glass caldera where rivers of light carve safe channels.',
    center: [80, -16],
    radius: 38,
    levelRange: [8, 18]
  },
  tide: {
    id: 'tide',
    name: 'Tidefall Coast',
    short: 'Tide',
    color: '#3f9bff',
    ground: '#7fb9c9',
    accent: '#9be8ff',
    description: 'Shell-white beaches, breathing tide pools, and coral towers full of sound.',
    center: [-80, -12],
    radius: 39,
    levelRange: [6, 16]
  },
  frost: {
    id: 'frost',
    name: 'Frostveil Peaks',
    short: 'Frost',
    color: '#7ad9ff',
    ground: '#b7d7e6',
    accent: '#e8fbff',
    description: 'Snowbound shelves and blue ice cathedrals under a pale aurora.',
    center: [48, 80],
    radius: 37,
    levelRange: [12, 22]
  },
  astral: {
    id: 'astral',
    name: 'Astral Scar',
    short: 'Astral',
    color: '#c08bff',
    ground: '#514268',
    accent: '#f5c8ff',
    description: 'A luminous wound in the world where crystals remember the sky.',
    center: [-54, 78],
    radius: 41,
    levelRange: [18, 30]
  }
}

export const BIOME_ORDER = ['verdant', 'ember', 'tide', 'frost', 'astral']

export function getBiome(id) {
  return BIOMES[id] || BIOMES.hub
}
