export const CURRENCIES = {
  shards: {
    id: 'shards',
    name: 'Shards',
    short: 'SHD',
    color: '#ffd166',
    description: 'Earned by battling, quests, and discoveries. Spent on ordinary supplies.'
  },
  stardust: {
    id: 'stardust',
    name: 'Stardust',
    short: 'STA',
    color: '#c08bff',
    description: 'A rare quest reward used for permanent conveniences. Never sold for real money.'
  }
}

export const ITEMS = {
  disc_basic: {
    id: 'disc_basic',
    name: 'Field Disc',
    category: 'disc',
    price: 25,
    currency: 'shards',
    captureBonus: 0,
    color: '#9fe7ff',
    icon: 'disc',
    description: 'A dependable capture disc. Free with every expedition kit and cheap to replace.'
  },
  disc_fine: {
    id: 'disc_fine',
    name: 'Prism Disc',
    category: 'disc',
    price: 80,
    currency: 'shards',
    captureBonus: 0.18,
    color: '#c08bff',
    icon: 'disc',
    description: 'A tuned disc with a brighter containment field. Adds 18% to capture chance.'
  },
  potion: {
    id: 'potion',
    name: 'Sap Salve',
    category: 'heal',
    price: 30,
    currency: 'shards',
    healPercent: 0.4,
    color: '#63c96b',
    icon: 'potion',
    description: 'Restores 40% of one creature\'s maximum health outside battle.'
  },
  potion_great: {
    id: 'potion_great',
    name: 'Greater Salve',
    category: 'heal',
    price: 75,
    currency: 'shards',
    healPercent: 0.8,
    color: '#8ef0a0',
    icon: 'potion',
    description: 'Restores 80% of one creature\'s maximum health outside battle.'
  },
  treat: {
    id: 'treat',
    name: 'Starlight Treat',
    category: 'xp',
    price: 20,
    currency: 'shards',
    xp: 45,
    color: '#ffd166',
    icon: 'treat',
    description: 'A small training snack. Grants 45 experience to one creature.'
  },
  lure: {
    id: 'lure',
    name: 'Scent Lure',
    category: 'lure',
    price: 60,
    currency: 'shards',
    color: '#ff8fc7',
    icon: 'lure',
    description: 'Slightly raises the chance of rare creatures for the next three encounters.'
  },
  training_slot: {
    id: 'training_slot',
    name: 'Second Treadmill',
    category: 'upgrade',
    price: 320,
    currency: 'shards',
    stardust: 2,
    color: '#ffb35c',
    icon: 'treadmill',
    description: 'Unlocks a permanent second treadmill slot. Both slots train independently.'
  }
}

export const SHOP_ORDER = ['disc_basic', 'disc_fine', 'potion', 'potion_great', 'treat', 'lure', 'training_slot']

export function itemById(id) {
  return ITEMS[id] || null
}
