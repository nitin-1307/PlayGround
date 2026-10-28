import { SPECIES, getSpecies, STARTER_IDS } from '../data/species.js'
import { getMove } from '../data/moves.js'
import { BIOMES, BIOME_ORDER, RARITIES, TYPES } from '../data/types.js'
import { ITEMS, SHOP_ORDER } from '../data/items.js'
import { QUEST_BY_ID } from '../data/quests.js'
import { PARTY_LIMIT, STORAGE_LIMIT, xpToNext } from '../core/save.js'
import { activeQuests, availableQuests, questSummary } from '../systems/quests.js'
import { shopList } from '../systems/economy.js'
import { trainingSummary, availableSlots } from '../systems/training.js'
import { activeCreature, storageCreatures, partyCreatures, displayName, speciesName, storageCapacity, creaturePower, formatNumber, formatDuration, findCreature } from '../systems/helpers.js'
import { portraitSVG } from './portrait.js'

const STATUS_LABELS = {
  burn: 'Burn',
  chill: 'Chill',
  shock: 'Shock',
  snare: 'Snare',
  stun: 'Stun',
  weaken: 'Weaken',
  regen: 'Regen',
  buff_attack: 'Atk+',
  buff_defence: 'Def+',
  debuff_attack: 'Atk-',
  debuff_defence: 'Def-'
}

const TYPE_ICONS = {
  Nature: '✦', Fire: '▲', Frost: '❉', Water: '●', Stone: '◆', Storm: 'ϟ', Astral: '✧', Spirit: '◐'
}

const RARITY_CLASS = { common: '', uncommon: '', rare: 'rare', epic: 'epic', legendary: 'legendary', ultra: 'ultra' }

function esc(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function pct(value, max) {
  if (!max) return 0
  return Math.max(0, Math.min(100, (value / max) * 100))
}

function typeChips(types = []) {
  return types.map((type) => `<span class="type-chip" style="--type-color:${TYPES[type]?.color || '#9fb0c9'}">${TYPE_ICONS[type] || '•'} ${esc(type)}</span>`).join('')
}

function rarityChip(rarity) {
  const info = RARITIES[rarity] || RARITIES.common
  return `<span class="rarity-chip ${RARITY_CLASS[rarity] || ''}">${esc(info.label)}</span>`
}

function statRows(stats, compact = false) {
  if (!stats) return ''
  const rows = [
    ['HP', stats.maxHp || stats.health || 0, 240],
    ['ATK', stats.attack || 0, 160],
    ['DEF', stats.defence || 0, 160],
    ['SPD', stats.speed || 0, 160]
  ]
  return rows.map(([label, value, max]) => `
    <div class="stat-row"><span>${label}</span><div class="stat-bar"><div style="width:${Math.min(100, (value / max) * 100)}%"></div></div><strong>${value}</strong></div>
  `).join('')
}

function hpBar(current, max, className = '') {
  const percent = pct(current, max)
  const low = percent <= 28 ? ' low' : ''
  return `<div class="hp-bar ${className}${low}"><div class="hp-fill" style="width:${percent}%"></div><span>${Math.max(0, Math.round(current))} / ${Math.round(max)}</span></div>`
}

function itemIcon(item) {
  if (!item) return '?'
  if (item.category === 'heal') return '✚'
  if (item.category === 'xp') return '★'
  if (item.category === 'lure') return '❋'
  if (item.category === 'upgrade') return '▤'
  return '◉'
}

function speciesOf(creature) {
  return getSpecies(creature?.speciesId)
}

function creatureBadges(creature) {
  const species = speciesOf(creature)
  if (!species) return ''
  return `<div class="cc-badges">${typeChips(species.types)}${rarityChip(species.rarity)}</div>`
}

function taskObjectiveLine(objective) {
  return `<div class="quest-objective-line ${objective.complete ? 'done' : ''}">
    <span class="qmark">${objective.complete ? '✓' : '○'}</span>
    <span>${esc(objective.label)}</span>
    <span class="qcount">${Math.min(objective.progress, objective.count)} / ${objective.count}</span>
  </div>`
}

export class UI {
  constructor(profile, callbacks = {}) {
    this.profile = profile
    this.callbacks = callbacks
    this.activeScreen = null
    this.selectedDexId = null
    this.dexStatus = 'all'
    this.dexType = 'all'
    this.questTab = 'active'
    this.inventoryFilter = 'all'
    this.selectedStarter = null
    this.battleId = null
    this.moveButtons = []
    this.lastMoveSignature = ''
    this.toastTimer = 0
    this.lastMinimapAt = 0
    this.lastTrainingAt = 0
    this.legendaryStatus = null
    this.pendingConfirm = null

    this.root = document.getElementById('modal-root')
    this.title = document.getElementById('title-screen')
    this.loading = document.getElementById('loading-screen')
    this.enterButton = document.getElementById('enter-button')
    this.tracker = document.getElementById('quest-tracker')
    this.currency = document.getElementById('currency-bar')
    this.partyDock = document.getElementById('party-dock')
    this.minimap = document.getElementById('minimap')
    this.minimapBiome = document.getElementById('minimap-biome')
    this.location = document.getElementById('location-label')
    this.prompt = document.getElementById('interaction-prompt')
    this.promptText = document.getElementById('interaction-text')
    this.hint = document.getElementById('hint-line')
    this.toastStack = document.getElementById('toast-stack')
    this.legendaryBanner = document.getElementById('legendary-banner')
    this.legendaryTitle = document.getElementById('legendary-title')
    this.legendaryDetail = document.getElementById('legendary-detail')
    this.legendaryTimer = document.getElementById('legendary-timer')
    this.battleHud = document.getElementById('battle-hud')
    this.battleElements = {
      enemyName: document.getElementById('enemy-name'),
      enemyLevel: document.getElementById('enemy-level'),
      enemyRarity: document.getElementById('enemy-rarity'),
      enemyHpFill: document.getElementById('enemy-hp-fill'),
      enemyHpText: document.getElementById('enemy-hp-text'),
      enemyHpBar: document.getElementById('enemy-hp-fill')?.parentElement,
      enemyStatuses: document.getElementById('enemy-statuses'),
      playerName: document.getElementById('battle-player-name'),
      playerLevel: document.getElementById('battle-player-level'),
      playerHpFill: document.getElementById('player-hp-fill'),
      playerHpText: document.getElementById('player-hp-text'),
      playerHpBar: document.getElementById('player-hp-fill')?.parentElement,
      playerStatus: document.getElementById('battle-active-status'),
      shield: document.getElementById('player-shield'),
      roundLabel: document.getElementById('battle-round-label'),
      log: document.getElementById('battle-log-line'),
      moveBar: document.getElementById('move-bar'),
      dodge: document.getElementById('battle-dodge'),
      dodgeCd: document.getElementById('dodge-cd'),
      capture: document.getElementById('battle-capture'),
      captureChance: document.getElementById('capture-chance'),
      potion: document.getElementById('battle-potion'),
      pot: document.getElementById('battle-pot'),
      flee: document.getElementById('battle-flee')
    }

    this.bindStatic()
    this.applySettings()
    document.body.classList.add('title-active')
    this.refresh()
    this.drawMinimap({ player: { x: 0, z: 10 }, wilds: [], landmarks: [] })
  }

  setProfile(profile) {
    this.profile = profile
    this.applySettings()
    this.refresh()
    if (this.activeScreen && this.activeScreen !== 'starter') this.renderScreen(this.activeScreen)
  }

  bindStatic() {
    document.querySelectorAll('[data-screen]').forEach((button) => {
      button.addEventListener('click', () => {
        const screen = button.dataset.screen
        if (this.callbacks.onScreenRequest) this.callbacks.onScreenRequest(screen)
        else this.openScreen(screen)
      })
    })
    this.enterButton?.addEventListener('click', () => {
      if (!this.enterButton.disabled) this.callbacks.onEnter?.()
    })
    document.getElementById('how-to-button')?.addEventListener('click', () => this.openHowTo())
    this.partyDock.addEventListener('click', (event) => {
      const slot = event.target.closest('.party-slot')
      if (!slot) return
      if (slot.classList.contains('empty')) return
      if (this.callbacks.onScreenRequest) this.callbacks.onScreenRequest('party')
      else this.openScreen('party')
    })
    this.root.addEventListener('click', (event) => {
      if (event.target.closest('[data-close]')) this.closeModal()
      if (event.target === this.root && this.activeScreen && this.activeScreen !== 'starter') this.closeModal()
    })
    window.addEventListener('keydown', (event) => {
      if (event.code === 'Escape' && this.activeScreen && this.activeScreen !== 'starter') {
        event.preventDefault()
        this.closeModal()
      }
    })
    this.battleElements.moveBar.addEventListener('click', (event) => {
      const button = event.target.closest('[data-move-index]')
      if (!button) return
      this.callbacks.onBattleMove?.(Number(button.dataset.moveIndex))
    })
    this.battleElements.dodge.addEventListener('click', () => this.callbacks.onBattleDodge?.())
    this.battleElements.capture.addEventListener('click', () => this.callbacks.onBattleCapture?.())
    this.battleElements.potion.addEventListener('click', () => this.callbacks.onBattlePotion?.())
    this.battleElements.flee.addEventListener('click', () => this.callbacks.onBattleFlee?.())
  }

  applySettings() {
    const settings = this.profile?.settings || {}
    document.body.classList.toggle('reduce-motion', Boolean(settings.reduceMotion))
    document.body.classList.toggle('high-contrast', Boolean(settings.highContrast))
    document.body.classList.toggle('touch', matchMedia('(pointer: coarse)').matches)
  }

  refresh() {
    this.renderCurrency()
    this.renderTracker()
    this.renderPartyDock()
    this.renderLegendary()
  }

  renderCurrency() {
    const currency = this.profile.currency || {}
    this.currency.innerHTML = `
      <div class="currency-pill"><span class="coin"></span><span>${formatNumber(currency.shards)}</span></div>
      <div class="currency-pill stardust"><span class="coin"></span><span>${formatNumber(currency.stardust)}</span></div>
    `
  }

  renderTracker() {
    const quests = activeQuests(this.profile)
    if (!quests.length) {
      this.tracker.innerHTML = `
        <div class="eyebrow">ACTIVE BOUNTY</div>
        <h3>No bounty pinned</h3>
        <p>Visit the quest board in Hearthlight Haven, or talk to Guide Wren for a lead.</p>
      `
      return
    }
    const quest = quests.find((entry) => !entry.complete) || quests[0]
    const objective = quest.objectives.find((entry) => !entry.complete) || quest.objectives[0]
    const complete = objective.complete
    this.tracker.innerHTML = `
      <div class="spread"><span class="eyebrow">ACTIVE BOUNTY</span><span class="quest-progress">${quest.objectives.filter((entry) => entry.complete).length}/${quest.objectives.length}</span></div>
      <h3>${esc(quest.name)}</h3>
      <p>${esc(quest.giver)} · ${esc(BIOMES[quest.objectives[0]?.biome]?.short || 'Haven')}</p>
      <div class="quest-objective ${complete ? 'done' : ''}">
        <span class="dot"></span><span>${esc(objective.label)}</span>
        <span class="quest-progress">${objective.progress} / ${objective.count}</span>
      </div>
    `
  }

  renderPartyDock() {
    const activeUid = this.profile.activeUid
    const trainingUids = new Set((this.profile.training?.slots || []).map((slot) => slot.uid))
    const slots = []
    for (let i = 0; i < PARTY_LIMIT; i++) {
      const uid = this.profile.party[i]
      const creature = uid ? findCreature(this.profile, uid) : null
      if (!creature) {
        slots.push(`<div class="party-slot empty">${i === this.profile.party.length ? '+ Slot' : 'Empty'}</div>`)
        continue
      }
      const species = speciesOf(creature)
      const hpPercent = pct(creature.hp, creature.stats.maxHp)
      slots.push(`
        <div class="party-slot ${uid === activeUid ? 'active' : ''} ${trainingUids.has(uid) ? 'training' : ''}" title="${esc(displayName(creature))} · Lv. ${creature.level}">
          <div class="slot-hp"><div style="width:${hpPercent}%"></div></div>
          <span class="active-dot"></span>
          <div class="portrait">${portraitSVG(species)}</div>
          <div class="slot-label"><span>${esc(displayName(creature))}</span><span class="slot-level">${creature.level}</span></div>
        </div>
      `)
    }
    this.partyDock.innerHTML = slots.join('')
  }

  renderLegendary() {
    const status = this.legendaryStatus
    if (!status) return
    this.legendaryBanner.classList.toggle('hidden', false)
    this.legendaryBanner.dataset.state = status.state
    this.legendaryBanner.classList.toggle('warning', status.state === 'warning')
    this.legendaryTitle.textContent = status.label
    this.legendaryDetail.textContent = status.detail
    this.legendaryTimer.textContent = formatDuration(status.nextIn || 0)
  }

  setLegendary(status) {
    this.legendaryStatus = status
    this.renderLegendary()
  }

  setLocation(biomeId) {
    const biome = BIOMES[biomeId] || BIOMES.hub
    this.location.textContent = biome.name
    this.minimapBiome.textContent = biome.short || biome.name
    this.legendaryDetail?.setAttribute('data-biome', biome.short)
  }

  setLoading(progress, text) {
    const fill = document.getElementById('loading-fill')
    const label = document.getElementById('loading-text')
    if (fill) fill.style.width = `${Math.max(4, Math.min(100, progress))}%`
    if (label && text) label.textContent = text
  }

  hideLoading() {
    this.loading?.classList.add('leaving')
    setTimeout(() => this.loading?.classList.add('hidden'), 600)
  }

  revealTitle(canEnter = true) {
    this.hideLoading()
    this.enterButton.disabled = !canEnter
    this.enterButton.innerHTML = canEnter ? '<span>Enter the Wilds</span>' : '<span class="button-spinner"></span><span>Preparing the wilds…</span>'
  }

  enterWorld() {
    document.body.classList.remove('title-active')
    this.title?.classList.add('leaving')
    setTimeout(() => this.title?.classList.add('hidden'), 700)
  }

  showTitle() {
    document.body.classList.add('title-active')
    this.title?.classList.remove('hidden', 'leaving')
    this.hideLoading()
    this.enterButton.disabled = false
    this.enterButton.innerHTML = '<span>Enter the Wilds</span>'
  }

  setHint(text) {
    if (this.hint) this.hint.textContent = text || ''
  }

  setInteraction(text) {
    if (!this.prompt) return
    if (!text) {
      this.prompt.classList.add('hidden')
      return
    }
    this.promptText.textContent = text
    this.prompt.classList.remove('hidden')
  }

  setBattleVisible(visible) {
    this.battleHud.classList.toggle('hidden', !visible)
    document.body.classList.toggle('battle-active', visible)
    const mobileControls = document.getElementById('mobile-controls')
    if (mobileControls) mobileControls.classList.toggle('hidden', !matchMedia('(pointer: coarse)').matches)
    const hiddenDuringBattle = [
      document.querySelector('.hud-left'),
      this.partyDock,
      document.getElementById('minimap-panel'),
      document.querySelector('.hud-right'),
      this.prompt,
      this.hint
    ]
    for (const element of hiddenDuringBattle) element?.classList.toggle('hidden', visible)
    if (!visible) {
      this.moveButtons = []
      this.lastMoveSignature = ''
    }
  }

  showToast(message, type = '', icon = '') {
    const toast = document.createElement('div')
    toast.className = `toast ${type}`
    toast.innerHTML = `<span class="toast-icon">${icon || (type === 'success' ? '✓' : type === 'error' ? '!' : type === 'gold' ? '✦' : '•')}</span><span>${esc(message)}</span>`
    this.toastStack.append(toast)
    while (this.toastStack.children.length > 4) this.toastStack.firstElementChild.remove()
    setTimeout(() => {
      toast.classList.add('leaving')
      setTimeout(() => toast.remove(), 280)
    }, 3400)
  }

  refreshTrainingLive(now = Date.now()) {
    if (this.activeScreen !== 'training') return
    if (now - this.lastTrainingAt < 1000) return
    this.lastTrainingAt = now
    const summary = trainingSummary(this.profile, now)
    for (const { creature, preview, progress } of summary) {
      if (!creature || !preview) continue
      const card = this.root.querySelector(`[data-train-card="${creature.uid}"]`)
      if (!card) continue
      const session = card.querySelector('[data-train-session]')
      const ready = card.querySelector('[data-train-ready]')
      const bar = card.querySelector('[data-train-bar]')
      const collect = card.querySelector('[data-train-action="collect"]')
      if (session) session.textContent = `+${preview.rate} XP/sec · ${formatDuration(preview.elapsed)} this session`
      if (ready) ready.textContent = `${preview.xp} XP ready`
      if (bar) bar.style.width = `${Math.round(progress * 100)}%`
      if (collect) collect.textContent = `Collect ${preview.xp} XP`
    }
  }

  updateBattle(hud) {
    if (!hud?.battle) return
    const battle = hud.battle
    const elements = this.battleElements
    const enemy = battle.enemy
    const player = battle.player
    const enemyPercent = pct(enemy.hp, enemy.maxHp)
    const playerPercent = pct(player.hp, player.maxHp)
    this.setBattleVisible(true)

    elements.enemyName.textContent = enemy.name
    elements.enemyLevel.textContent = `Lv. ${enemy.level}`
    elements.enemyRarity.textContent = RARITIES[enemy.species.rarity]?.label || 'Wild'
    elements.enemyRarity.className = `rarity-chip ${RARITY_CLASS[enemy.species.rarity] || ''}`
    elements.enemyHpFill.style.width = `${enemyPercent}%`
    elements.enemyHpText.textContent = `${Math.max(0, Math.round(enemy.hp))} / ${Math.round(enemy.maxHp)}`
    elements.enemyHpBar.classList.toggle('low', enemyPercent <= 28)

    elements.playerName.textContent = player.name
    elements.playerLevel.textContent = `Lv. ${player.level}`
    elements.playerHpFill.style.width = `${playerPercent}%`
    elements.playerHpText.textContent = `${Math.max(0, Math.round(player.hp))} / ${Math.round(player.maxHp)}`
    elements.playerHpBar.classList.toggle('low', playerPercent <= 28)

    elements.enemyStatuses.innerHTML = this.statusChips(enemy)
    elements.playerStatus.innerHTML = this.statusChips(player)
    elements.shield.classList.toggle('hidden', !(player.shield > 0))
    elements.shield.textContent = `Shield ${Math.round(player.shield)}`

    const distance = hud.inRange || 0
    elements.roundLabel.textContent = battle.over
      ? battle.result === 'victory' ? 'Creature calmed' : battle.result === 'captured' ? 'Capture complete' : battle.result === 'defeat' ? 'Retreat required' : 'Encounter ended'
      : `Distance ${distance.toFixed(1)}m · ${battle.legendary ? 'Legendary event' : 'Real-time encounter'}`
    elements.log.textContent = battle.log[battle.log.length - 1] || 'Stay mobile. Dodge telegraphed attacks.'

    this.updateMoveBar(battle, hud)
    const dodgeReady = hud.dodgeRemaining <= 0
    elements.dodge.disabled = !dodgeReady || battle.over
    elements.dodgeCd.textContent = dodgeReady ? 'Ready' : `${(hud.dodgeRemaining / 1000).toFixed(1)}s`
    elements.capture.disabled = battle.over
    elements.captureChance.textContent = `${Math.round((hud.captureChance || 0) * 100)}%`
    elements.potion.disabled = battle.over
    elements.pot.textContent = String(this.profile.inventory.potion || 0)
    elements.flee.disabled = battle.over
  }

  statusChips(combatant) {
    return Object.keys(combatant.statuses || {})
      .filter((id) => !id.startsWith('debuff_'))
      .map((id) => `<span class="status-chip ${id}">${STATUS_LABELS[id] || id}</span>`)
      .join('')
  }

  updateMoveBar(battle, hud) {
    const signature = battle.player.moves.map((slot) => slot.id).join('-')
    if (signature !== this.lastMoveSignature) {
      this.lastMoveSignature = signature
      this.battleElements.moveBar.innerHTML = battle.player.moves.map((slot, index) => {
        const move = getMove(slot.id)
        return `<button class="move-button" data-move-index="${index}" style="--type-color:${TYPES[move.type]?.color || '#7fe7d4'}">
          <span class="move-type-dot"></span><span class="move-key">${index + 1}</span>
          <strong>${esc(move.name)}</strong><small>${esc(move.type)} · ${move.power > 0 ? `${move.power} pow` : 'utility'}</small>
          <span class="cooldown-sweep" style="width:0%"></span><span class="cd-text"></span>
        </button>`
      }).join('')
      this.moveButtons = [...this.battleElements.moveBar.querySelectorAll('.move-button')]
    }
    this.moveButtons.forEach((button, index) => {
      const remaining = hud.cooldowns[index] || 0
      const max = hud.maxCooldowns[index] || 1
      const sweep = button.querySelector('.cooldown-sweep')
      const cdText = button.querySelector('.cd-text')
      button.disabled = battle.over || remaining > 0
      button.classList.toggle('cooling', remaining > 0)
      if (sweep) sweep.style.width = remaining > 0 ? `${Math.min(100, (remaining / max) * 100)}%` : '0%'
      if (cdText) cdText.textContent = remaining > 0 ? `${(remaining / 1000).toFixed(1)}s` : ''
    })
  }

  openScreen(name) {
    if (!['dex', 'party', 'training', 'quests', 'inventory', 'shop', 'settings'].includes(name)) return
    this.activeScreen = name
    this.root.classList.remove('hidden')
    this.renderScreen(name)
  }

  closeModal() {
    if (this.activeScreen === 'starter') return
    this.activeScreen = null
    this.root.classList.add('hidden')
    this.root.innerHTML = ''
  }

  renderScreen(name) {
    const renderers = {
      dex: () => this.renderDex(),
      party: () => this.renderParty(),
      training: () => this.renderTraining(),
      quests: () => this.renderQuests(),
      inventory: () => this.renderInventory(),
      shop: () => this.renderShop(),
      settings: () => this.renderSettings()
    }
    this.root.classList.remove('hidden')
    this.root.innerHTML = renderers[name]?.() || ''
    this.bindScreen(name)
  }

  screenShell(title, eyebrow, description, body, footer = '') {
    return `<div class="modal-card ${title === 'AstraDex' ? 'wide' : ''}">
      <div class="modal-header">
        <div class="modal-title"><span class="eyebrow">${esc(eyebrow)}</span><h2>${esc(title)}</h2><p>${description}</p></div>
        <button class="modal-close" data-close aria-label="Close">×</button>
      </div>
      <div class="modal-body">${body}</div>
      ${footer ? `<div class="modal-footer">${footer}</div>` : ''}
    </div>`
  }

  renderDex() {
    const seen = new Set(this.profile.dex.seen)
    const caught = new Set(this.profile.dex.caught)
    const found = SPECIES.filter((species) => {
      if (this.dexStatus === 'caught' && !caught.has(species.id)) return false
      if (this.dexStatus === 'seen' && !seen.has(species.id)) return false
      if (this.dexStatus === 'missing' && (seen.has(species.id) || caught.has(species.id))) return false
      if (this.dexType !== 'all' && !species.types.includes(this.dexType)) return false
      return true
    })
    if (!this.selectedDexId || !found.some((species) => species.id === this.selectedDexId)) {
      this.selectedDexId = found[0]?.id || SPECIES[0].id
    }
    const cards = found.map((species) => {
      const known = seen.has(species.id)
      return `<div class="dex-card ${known ? '' : 'undiscovered'} ${species.id === this.selectedDexId ? 'selected' : ''}" data-dex-id="${species.id}">
        <span class="dex-id">${species.id}</span>
        ${caught.has(species.id) ? '<span class="caught-check">✓</span>' : ''}
        <div class="portrait">${portraitSVG(species)}</div>
        <div class="dex-meta"><strong>${known ? esc(species.name) : '???'}</strong><span>${known ? esc(species.types.join(' / ')) : 'Unrecorded'}</span></div>
      </div>`
    }).join('')
    const species = getSpecies(this.selectedDexId)
    const known = species && seen.has(species.id)
    const owned = species && caught.has(species.id)
    const detail = known ? this.dexDetail(species, owned, seen, caught) : `
      <div class="detail-portrait" style="filter:grayscale(1) brightness(.32)">${species ? portraitSVG(species) : ''}</div>
      <h3>???</h3><p class="lore">This species has not been recorded yet. Find it in the wild, or hear about it from a traveller.</p>`
    const body = `
      <div class="toolbar">
        <div class="tabs" style="margin:0">
          ${['all', 'seen', 'caught', 'missing'].map((status) => `<button class="tab ${this.dexStatus === status ? 'active' : ''}" data-dex-status="${status}">${status === 'all' ? 'All 150' : status[0].toUpperCase() + status.slice(1)}</button>`).join('')}
        </div>
        <span class="spacer"></span>
        <span class="pill gold">${caught.size} caught</span><span class="pill">${seen.size} seen</span>
        <select class="field" data-dex-type>
          <option value="all">All types</option>
          ${Object.keys(TYPES).filter((type) => type !== 'None').map((type) => `<option value="${type}" ${this.dexType === type ? 'selected' : ''}>${type}</option>`).join('')}
        </select>
      </div>
      <div class="dex-layout">
        <div>
          <div class="dex-grid">${cards || '<div class="empty-state">No species match this filter.</div>'}</div>
        </div>
        <div class="dex-detail">${detail}</div>
      </div>`
    return this.screenShell('AstraDex', 'ARCHIVE OF THE SCAR', 'Every confirmed species is recorded here. Seen entries reveal field notes; captured entries unlock full stat and move data.', body)
  }

  dexDetail(species, owned, seen, caught) {
    const moves = species.learnset.slice(0, owned ? 6 : 4)
    return `
      <div class="detail-portrait">${portraitSVG(species)}</div>
      <h3>${esc(species.name)}</h3>
      <div class="spread"><div class="type-row">${typeChips(species.types)} ${rarityChip(species.rarity)}</div><span class="small muted">${species.id}</span></div>
      <p class="lore">${esc(species.lore)}</p>
      <div class="detail-stats">${statRows(species.stats)}</div>
      <div class="detail-section"><h4>Field notes</h4><p>${esc(species.habitat)}<br>${esc(species.behavior)}</p></div>
      <div class="detail-section"><h4>Ability</h4><p><strong style="color:var(--gold-soft)">${esc(species.ability.name)}</strong> — ${esc(species.ability.description || 'A signature adaptation recorded by the archive.')}</p></div>
      <div class="detail-section"><h4>${owned ? 'Learned moves' : 'Field moves'}</h4>
        <div class="move-list">${moves.map((entry) => {
          const move = getMove(entry.moveId)
          return `<div class="move-row"><span>${esc(move.name)}</span><small>${esc(move.type)} · Lv. ${entry.level}</small></div>`
        }).join('')}</div>
      </div>
      ${species.evolution ? `<div class="detail-section"><h4>Evolution</h4><p>Evolves into <strong style="color:var(--gold-soft)">${esc(getSpecies(species.evolution.to)?.name || '???')}</strong> at level ${species.evolution.level}.</p></div>` : ''}
    `
  }

  renderParty() {
    const party = partyCreatures(this.profile)
    const storage = storageCreatures(this.profile)
    const capacity = storageCapacity(this.profile)
    const renderCreature = (creature) => {
      const species = speciesOf(creature)
      if (!species) return ''
      const isActive = creature.uid === this.profile.activeUid
      const inParty = this.profile.party.includes(creature.uid)
      const training = creature.assignment === 'training'
      const xpMax = xpToNext(creature.level)
      const hpPercent = pct(creature.hp, creature.stats.maxHp)
      return `<div class="creature-card ${isActive ? 'active' : ''}">
        <div class="cc-top">
          <div class="cc-portrait">${portraitSVG(species)}</div>
          <div class="cc-name">
            <strong>${esc(displayName(creature))}</strong>
            <span>${esc(species.name)} · Lv. ${creature.level} · ${esc(creature.nature)}</span>
            ${creatureBadges(creature)}
          </div>
        </div>
        <div class="cc-hp">${hpBar(creature.hp, creature.stats.maxHp)}</div>
        <div class="cc-meta"><span>XP ${creature.xp} / ${xpMax}</span><span>Power ${creaturePower(creature)}</span>${training ? '<span class="pill teal" style="margin-left:auto">Training</span>' : ''}${isActive ? '<span class="pill gold" style="margin-left:auto">Active</span>' : ''}</div>
        <div class="cc-actions">
          ${inParty && !isActive && !training ? `<button class="small-button" data-party-action="active" data-uid="${creature.uid}">Set active</button>` : ''}
          ${!inParty && !training ? `<button class="small-button" data-party-action="toParty" data-uid="${creature.uid}">To party</button>` : ''}
          ${inParty && !isActive ? `<button class="small-button" data-party-action="up" data-uid="${creature.uid}">↑</button><button class="small-button" data-party-action="down" data-uid="${creature.uid}">↓</button>` : ''}
          ${inParty && !isActive && !training ? `<button class="small-button training-tag" data-party-action="train" data-uid="${creature.uid}">Train</button>` : ''}
          ${inParty && !isActive && !training ? `<button class="small-button" data-party-action="toStorage" data-uid="${creature.uid}">Storage</button>` : ''}
          ${training ? `<button class="small-button training-tag" data-party-action="stopTrain" data-uid="${creature.uid}">Stop training</button>` : ''}
          ${!isActive ? `<button class="small-button" data-party-action="release" data-uid="${creature.uid}" style="color:var(--danger)">Release</button>` : ''}
        </div>
        <div class="cc-meta" style="padding-top:0"><span style="color:${hpPercent <= 28 ? 'var(--danger)' : 'var(--muted)'}">${Math.round(hpPercent)}% HP</span><span>${esc(species.role)}</span></div>
      </div>`
    }
    const body = `
      <div class="notice">Your active creature leads encounters. Party members gain experience from battle; storage creatures wait safely at Haven. Training continues while you explore.</div>
      <div class="subhead"><h3>Party · ${party.length} / ${PARTY_LIMIT}</h3><span>Click a card action to manage</span></div>
      <div class="party-grid">${party.map(renderCreature).join('')}</div>
      <div class="subhead"><h3>Storage · ${capacity.used} / ${capacity.limit}</h3><span>${storage.length} waiting</span></div>
      <div class="party-grid">${storage.length ? storage.map(renderCreature).join('') : '<div class="empty-state">No creatures in storage yet. Captures beyond a full party are sent here automatically.</div>'}</div>
    `
    return this.screenShell('Party & Storage', 'YOUR COMPANIONS', 'Set a lead, reorder your party, move creatures to storage, or start a training session. Your active creature cannot train.', body)
  }

  renderTraining() {
    const summary = trainingSummary(this.profile)
    const slots = availableSlots(this.profile)
    const eligible = this.profile.party
      .map((uid) => findCreature(this.profile, uid))
      .filter((creature) => creature && creature.uid !== this.profile.activeUid && creature.assignment !== 'training')
    const slotCards = summary.map(({ creature, preview, progress, nextLevelXp }) => {
      const species = speciesOf(creature)
      return `<div class="treadmill-card" data-train-card="${creature.uid}">
        <div class="tm-portrait">${portraitSVG(species)}</div>
        <div class="tm-info">
          <strong>${esc(displayName(creature))} <span class="small muted">Lv. ${creature.level}</span></strong>
          <span data-train-session>+${preview?.rate || 3} XP/sec · ${formatDuration(preview?.elapsed || 0)} this session</span>
          <div class="tm-progress"><div data-train-bar style="width:${Math.round(progress * 100)}%"></div></div>
          <span class="small muted"><span data-train-ready>${preview?.xp || 0} XP ready</span> · ${nextLevelXp} XP to next level</span>
        </div>
        <div class="tm-actions">
          <button class="small-button" data-train-action="collect" data-uid="${creature.uid}">Collect ${preview?.xp || 0} XP</button>
          <button class="small-button" data-train-action="remove" data-uid="${creature.uid}">Remove</button>
        </div>
      </div>`
    }).join('')
    const emptySlots = []
    for (let index = summary.length; index < slots; index++) {
      const options = eligible.map((creature) => `<option value="${creature.uid}">${esc(displayName(creature))} · Lv. ${creature.level}</option>`).join('')
      emptySlots.push(`<div class="treadmill-card empty">
        <strong>Open treadmill ${index + 1}</strong>
        <span>${eligible.length ? 'Assign a party creature to earn XP every second, even offline.' : 'Your active creature cannot train, and every other party member is already busy.'}</span>
        ${eligible.length ? `<div class="spread" style="gap:7px"><select class="field" data-training-select="${index}"><option value="">Choose creature…</option>${options}</select><button class="small-button" data-train-action="assign" data-slot="${index}">Assign</button></div>` : ''}
      </div>`)
    }
    const locked = slots < 2 ? `<div class="treadmill-card locked">
      <div class="tm-portrait" style="display:grid;place-items:center;font-size:28px;color:var(--gold)">▤</div>
      <div class="tm-info"><strong>Second treadmill</strong><span>Train two creatures at once. Permanent account upgrade.</span><span class="small muted">Cost: 320 Shards + 2 Stardust</span></div>
      <div class="tm-actions"><button class="small-button" data-train-action="unlock">Unlock slot</button></div>
    </div>` : ''
    const body = `
      <div class="notice">Training is a set-and-forget treadmill. Assigned creatures accrue XP every second, including while the game is closed, up to an 8-hour offline cap. They cannot battle or be your active lead.</div>
      <div class="spread" style="margin:16px 0 10px"><h3 style="font-family:var(--font-display)">Treadmill Yard · ${summary.length}/${slots} active</h3><button class="small-button" data-train-action="collectAll">Collect all</button></div>
      <div class="training-layout">${slotCards}${emptySlots.join('')}${locked}</div>
      <div class="divider"></div>
      <div class="spread"><div><strong>Total training time</strong><br><span class="small muted">${formatDuration(this.profile.flags.totalTrainSeconds || 0)} recorded</span></div><div class="pill violet">${eligible.length} eligible</div></div>
    `
    return this.screenShell('Training Yard', 'PATIENCE IS POWER', 'Leave creatures on a treadmill while you explore. XP keeps accruing offline, up to eight hours per claim.', body)
  }

  renderQuests() {
    const summary = questSummary(this.profile)
    const list = this.questTab === 'active' ? summary.active : this.questTab === 'available' ? summary.available : summary.completed
    const cards = list.map((quest) => {
      if (this.questTab === 'available') {
        return `<div class="quest-card">
          <span class="quest-giver">${esc(quest.giver)}</span><h3>${esc(quest.name)}</h3><p>${esc(quest.description)}</p>
          <div class="reward-row">${quest.rewards.shards ? `<span class="reward-pill gold">${quest.rewards.shards} Shards</span>` : ''}${quest.rewards.stardust ? `<span class="reward-pill violet">${quest.rewards.stardust} Stardust</span>` : ''}${Object.entries(quest.rewards.items || {}).map(([id, count]) => `<span class="reward-pill">${count}× ${esc(ITEMS[id]?.name || id)}</span>`).join('')}</div>
          <div class="quest-actions"><button class="small-button" data-quest-action="start" data-quest-id="${quest.id}">Accept bounty</button></div>
        </div>`
      }
      if (this.questTab === 'completed') {
        return `<div class="quest-card complete"><span class="quest-giver">${esc(quest.giver)}</span><h3>${esc(quest.name)}</h3><p>${esc(quest.description)}</p><div class="reward-row"><span class="reward-pill gold">Completed</span></div></div>`
      }
      return `<div class="quest-card ${quest.complete ? 'complete' : ''}">
        <span class="quest-giver">${esc(quest.giver)}</span><h3>${esc(quest.name)}</h3><p>${esc(quest.description)}</p>
        <div class="quest-objectives">${quest.objectives.map(taskObjectiveLine).join('')}</div>
        <div class="reward-row">${quest.rewards.shards ? `<span class="reward-pill gold">${quest.rewards.shards} Shards</span>` : ''}${quest.rewards.stardust ? `<span class="reward-pill violet">${quest.rewards.stardust} Stardust</span>` : ''}${Object.entries(quest.rewards.items || {}).map(([id, count]) => `<span class="reward-pill">${count}× ${esc(ITEMS[id]?.name || id)}</span>`).join('')}</div>
        <div class="quest-actions">${quest.complete ? `<button class="small-button" data-quest-action="claim" data-quest-id="${quest.id}" style="border-color:rgba(255,209,102,.5);color:var(--gold)">Claim rewards</button>` : '<span class="pill">In progress</span>'}</div>
      </div>`
    }).join('')
    const body = `
      <div class="tabs">
        <button class="tab ${this.questTab === 'active' ? 'active' : ''}" data-quest-tab="active">Active · ${summary.active.length}</button>
        <button class="tab ${this.questTab === 'available' ? 'active' : ''}" data-quest-tab="available">Available · ${summary.available.length}</button>
        <button class="tab ${this.questTab === 'completed' ? 'active' : ''}" data-quest-tab="completed">Completed · ${summary.completed.length}</button>
      </div>
      <div class="quest-grid">${cards || '<div class="empty-state">Nothing here yet. Explore, talk to residents, and return to the board.</div>'}</div>
      <div class="divider"></div>
      <div class="notice">Bounties are optional. Active bounties appear in your HUD tracker; rewards can be claimed here once every objective is complete.</div>
    `
    return this.screenShell('Bounty Board', 'WORK WORTH DOING', 'Haven residents pay in Shards and Stardust for help across the five biomes.', body)
  }

  renderShop() {
    const listings = shopList(this.profile)
    const cards = listings.map(({ item, owned, affordable, lockedReason }) => {
      const isUpgrade = item.id === 'training_slot'
      return `<div class="shop-card">
        <div class="shop-icon">${itemIcon(item)}</div>
        <h3>${esc(item.name)}</h3>
        <p>${esc(item.description)}</p>
        <div class="spread"><span class="price">${formatNumber(item.price)} Shards${item.stardust ? ` + ${item.stardust} Stardust` : ''}</span>
        <button class="small-button" data-shop-buy="${item.id}" ${owned && isUpgrade ? 'disabled' : ''}>${owned && isUpgrade ? 'Unlocked' : 'Buy'}</button></div>
        <span class="owned">${isUpgrade ? (owned ? 'Permanent upgrade owned' : 'One-time unlock') : `Owned: ${owned}`}${!affordable && !(owned && isUpgrade) ? ' · Not enough currency' : ''}${lockedReason ? ` · ${esc(lockedReason)}` : ''}</span>
      </div>`
    }).join('')
    const body = `
      <div class="notice">Ember & Elm stocks field supplies. Every price is earned in-game; Astra Creatures has no real-money currency.</div>
      <div class="shop-grid" style="margin-top:14px">${cards}</div>
      <div class="divider"></div>
      <div class="spread"><span class="small muted">Haggling is not supported. The shopkeeper has heard every offer.</span><span class="pill gold">${formatNumber(this.profile.currency.shards)} Shards</span></div>
    `
    return this.screenShell('Ember & Elm', 'FIELD SUPPLIES', 'Discs, salves, treats, lures, and permanent conveniences. Purchases are saved immediately.', body)
  }

  renderInventory() {
    const active = activeCreature(this.profile)
    const itemIds = ['disc_basic', 'disc_fine', 'potion', 'potion_great', 'treat', 'lure']
    const cards = itemIds.map((id) => {
      const item = ITEMS[id]
      const count = this.profile.inventory[id] || 0
      const usable = ['potion', 'potion_great', 'treat', 'lure'].includes(id)
      return `<div class="inv-card">
        <div class="inv-icon" style="color:${item.color}">${itemIcon(item)}</div>
        <div style="min-width:0"><strong>${esc(item.name)}</strong><span>${esc(item.description)}</span></div>
        <span class="inv-count">${count}</span>
        ${usable ? `<button class="small-button" data-use-item="${id}" ${count <= 0 ? 'disabled' : ''}>Use</button>` : ''}
      </div>`
    }).join('')
    const body = `
      <div class="notice">${active ? `Using a salve or treat targets your active creature: <strong style="color:var(--gold-soft)">${esc(displayName(active))}</strong> (Lv. ${active.level}, ${Math.round(active.hp)}/${active.stats.maxHp} HP).` : 'Choose a starter to use field items.'}</div>
      <div class="inv-grid" style="margin-top:14px">${cards}</div>
      <div class="divider"></div>
      <div class="spread"><span class="small muted">Discs are consumed automatically when you attempt a capture.</span><button class="small-button" data-screen-open="shop">Visit shop</button></div>
    `
    return this.screenShell('Field Bag', 'PACK LIGHT', 'Everything you carry into the wilds. Salves and treats apply to the active creature.', body)
  }

  renderSettings() {
    const settings = this.profile.settings
    const stats = this.profile.stats
    const body = `
      <div class="settings-grid">
        <div class="settings-section">
          <h3>Audio & camera</h3>
          <div class="setting-row"><div>Music volume<small>Ambient score placeholder</small></div><input type="range" min="0" max="1" step="0.05" value="${settings.music}" data-setting="music"></div>
          <div class="setting-row"><div>Effects volume<small>Capture and battle cues</small></div><input type="range" min="0" max="1" step="0.05" value="${settings.sfx}" data-setting="sfx"></div>
          <div class="setting-row"><div>Look sensitivity<small>Drag or right-stick speed</small></div><input type="range" min="0.4" max="1.8" step="0.05" value="${settings.sensitivity}" data-setting="sensitivity"></div>
          <div class="setting-row"><div>Invert vertical look</div><button class="toggle ${settings.invertY ? 'on' : ''}" data-toggle="invertY"></button></div>
        </div>
        <div class="settings-section">
          <h3>Accessibility</h3>
          <div class="setting-row"><div>Reduce motion<small>Disables ambient animation and transitions</small></div><button class="toggle ${settings.reduceMotion ? 'on' : ''}" data-toggle="reduceMotion"></button></div>
          <div class="setting-row"><div>High contrast<small>Stronger borders and text contrast</small></div><button class="toggle ${settings.highContrast ? 'on' : ''}" data-toggle="highContrast"></button></div>
          <div class="setting-row"><div>Context hints<small>Show control reminders while exploring</small></div><button class="toggle ${settings.hints ? 'on' : ''}" data-toggle="hints"></button></div>
          <div class="setting-row"><div>Render quality<small>Low reduces particles and pixel density</small></div><select class="field" data-setting-select="quality"><option value="high" ${settings.quality === 'high' ? 'selected' : ''}>High</option><option value="low" ${settings.quality === 'low' ? 'selected' : ''}>Low</option></select></div>
        </div>
        <div class="settings-section">
          <h3>Expedition record</h3>
          <div class="setting-row"><span>Battles</span><strong>${stats.battles}</strong></div>
          <div class="setting-row"><span>Wins</span><strong>${stats.wins}</strong></div>
          <div class="setting-row"><span>Captures</span><strong>${stats.captures}</strong></div>
          <div class="setting-row"><span>Species recorded</span><strong>${this.profile.dex.caught.length} / 150</strong></div>
          <div class="setting-row"><span>Play time</span><strong>${formatDuration((stats.playSeconds || 0) + Math.max(0, (Date.now() - (this.profile.playStartedAt || Date.now())) / 1000))}</strong></div>
          <div class="setting-row"><span>Save</span><span class="pill teal">Autosave on</span></div>
        </div>
        <div class="settings-section danger-zone">
          <h3>Danger zone</h3>
          <p class="small muted" style="line-height:1.5;margin-bottom:10px">Reset deletes your local expedition: creatures, party, inventory, quests, and legendary history. This cannot be undone.</p>
          <button class="danger-button" data-reset-save>Reset expedition</button>
        </div>
      </div>
      <div class="divider"></div>
      <p class="small muted">Keyboard: WASD move · Shift sprint · Space jump · E interact · C Dex · P party · T training · J quests · I bag · O settings · Esc close. Battle: 1–4 moves · Q dodge · F capture · R salve.</p>
    `
    return this.screenShell('Settings', 'MAKE IT YOURS', 'Audio, accessibility, quality, and local save controls. Changes apply immediately and persist.', body)
  }

  openHowTo() {
    this.activeScreen = 'howto'
    this.root.classList.remove('hidden')
    this.root.innerHTML = `<div class="modal-card narrow">
      <div class="modal-header"><div class="modal-title"><span class="eyebrow">FIELD MANUAL</span><h2>How to survive the wilds</h2><p>You are a field researcher, not an army. Observe, weaken, capture, and train.</p></div><button class="modal-close" data-close>×</button></div>
      <div class="modal-body">
        <div class="detail-section" style="border-top:none;margin-top:0;padding-top:0"><h4>Explore</h4><p>WASD moves, Shift sprints, Space jumps, and drag the world to look around. Follow the paths from Hearthlight Haven into five biomes. Wild creatures wander visibly; press E near one to begin a real-time encounter.</p></div>
        <div class="detail-section"><h4>Battle</h4><p>You control the trainer and your active creature auto-follows. Move with WASD while casting moves with 1–4. Enemy attacks are telegraphed as rings; step out or press Q to dodge at the right moment. Range matters: melee moves need proximity, projectiles do not.</p></div>
        <div class="detail-section"><h4>Capture</h4><p>Weaken a creature, then press F to throw a Field Disc. Lower HP, status conditions, better discs, and level advantage all improve the chance. A failed capture gives the creature a brief opening — not a free win.</p></div>
        <div class="detail-section"><h4>Grow</h4><p>Battles grant XP and Shards. Evolutions happen automatically at their level thresholds. The Training Yard accrues XP offline for creatures not in your active slot. Spend Shards at Ember & Elm; Stardust comes from bounties and buys permanent conveniences.</p></div>
        <div class="detail-section"><h4>The Scar</h4><p>Every so often the Astral Scar announces a legendary event. A warning phase gives you time to reach the biome; the active window lasts four minutes. Legendaries are difficult captures and can flee. One capture attempt per event.</p></div>
        <div class="notice warn">Progress autosaves to this browser. Use Settings → Reset expedition to start over.</div>
      </div>
      <div class="modal-footer"><button class="primary-button" data-close>Back to the wilds</button></div>
    </div>`
    this.bindScreen('howto')
  }

  openStarterSelection(onChoose) {
    this.activeScreen = 'starter'
    this.selectedStarter = null
    this.starterCallback = onChoose
    const starters = STARTER_IDS.map((id) => getSpecies(id)).filter(Boolean)
    this.root.classList.remove('hidden')
    this.root.innerHTML = `<div class="modal-card starter-card">
      <div class="starter-body">
        <div class="starter-intro">
          <span class="eyebrow" style="color:var(--gold)">FIELD RESEARCH BEGINS</span>
          <h2>Choose your first companion</h2>
          <p>Guide Wren has three young creatures ready for a field assignment. Each one grows into a different role. You can find the others later, but this choice shapes your first hours.</p>
        </div>
        <div class="starter-grid">
          ${starters.map((species) => `
            <div class="starter-card-item" data-starter-id="${species.id}" style="--type-color:${TYPES[species.types[0]]?.color || '#7fe7d4'}">
              <div class="starter-halo"></div>
              <div class="starter-portrait">${portraitSVG(species)}</div>
              <h3>${esc(species.name)}</h3>
              <div class="starter-role">${esc(species.role)} · ${esc(species.rarity)}</div>
              <div class="type-row">${typeChips(species.types)}</div>
              <p class="starter-desc">${esc(species.lore)}</p>
              <div class="starter-stats">${statRows(species.stats, true)}</div>
              <div class="starter-ability"><strong>${esc(species.ability.name)}</strong>${esc(species.ability.description || 'A signature adaptation.')}</div>
            </div>`).join('')}
        </div>
        <div class="starter-actions">
          <button class="primary-button large" data-confirm-starter disabled>Begin expedition</button>
          <button class="ghost-button" data-how-to>Field manual</button>
        </div>
        <p class="starter-warning">Your starter is saved immediately. All 150 species are original to Astra Creatures.</p>
      </div>
    </div>`
    this.root.querySelectorAll('[data-starter-id]').forEach((card) => {
      card.addEventListener('click', () => {
        this.selectedStarter = card.dataset.starterId
        this.root.querySelectorAll('[data-starter-id]').forEach((entry) => entry.classList.toggle('selected', entry === card))
        const confirm = this.root.querySelector('[data-confirm-starter]')
        if (confirm) confirm.disabled = false
      })
    })
    this.root.querySelector('[data-confirm-starter]')?.addEventListener('click', () => {
      if (this.selectedStarter) this.starterCallback?.(this.selectedStarter)
    })
    this.root.querySelector('[data-how-to]')?.addEventListener('click', () => this.openHowTo())
  }

  bindScreen(name) {
    this.root.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', () => this.closeModal()))
    if (name === 'dex') {
      this.root.querySelectorAll('[data-dex-id]').forEach((card) => card.addEventListener('click', () => {
        this.selectedDexId = card.dataset.dexId
        this.renderScreen('dex')
      }))
      this.root.querySelectorAll('[data-dex-status]').forEach((button) => button.addEventListener('click', () => {
        this.dexStatus = button.dataset.dexStatus
        this.renderScreen('dex')
      }))
      this.root.querySelector('[data-dex-type]')?.addEventListener('change', (event) => {
        this.dexType = event.target.value
        this.renderScreen('dex')
      })
    }
    if (name === 'party') {
      this.root.querySelectorAll('[data-party-action]').forEach((button) => button.addEventListener('click', () => {
        const uid = button.dataset.uid
        const action = button.dataset.partyAction
        const callbacks = this.callbacks
        if (action === 'active') callbacks.onSetActive?.(uid)
        if (action === 'toParty') callbacks.onMoveToParty?.(uid)
        if (action === 'toStorage') callbacks.onMoveToStorage?.(uid)
        if (action === 'train') callbacks.onAssignTraining?.(uid)
        if (action === 'stopTrain') callbacks.onRemoveTraining?.(uid)
        if (action === 'up') callbacks.onSwapParty?.(uid, -1)
        if (action === 'down') callbacks.onSwapParty?.(uid, 1)
        if (action === 'release') {
          const creature = findCreature(this.profile, uid)
          this.confirm({
            title: `Release ${displayName(creature)}?`,
            message: 'This removes the creature and its training progress from your expedition permanently.',
            confirmLabel: 'Release creature',
            danger: true
          }).then((confirmed) => {
            if (confirmed) callbacks.onRelease?.(uid)
          })
        }
      }))
    }
    if (name === 'training') {
      this.root.querySelectorAll('[data-train-action]').forEach((button) => button.addEventListener('click', () => {
        const action = button.dataset.trainAction
        const uid = button.dataset.uid
        const callbacks = this.callbacks
        if (action === 'assign') {
          const select = this.root.querySelector(`[data-training-select="${button.dataset.slot}"]`)
          if (!select?.value) return this.showToast('Choose a creature first.', 'error')
          callbacks.onAssignTraining?.(select.value)
        }
        if (action === 'collect') callbacks.onCollectTraining?.(uid)
        if (action === 'collectAll') callbacks.onCollectTraining?.()
        if (action === 'remove') callbacks.onRemoveTraining?.(uid)
        if (action === 'unlock') callbacks.onUnlockTraining?.()
      }))
    }
    if (name === 'quests') {
      this.root.querySelectorAll('[data-quest-tab]').forEach((button) => button.addEventListener('click', () => {
        this.questTab = button.dataset.questTab
        this.renderScreen('quests')
      }))
      this.root.querySelectorAll('[data-quest-action]').forEach((button) => button.addEventListener('click', () => {
        if (button.dataset.questAction === 'start') this.callbacks.onStartQuest?.(button.dataset.questId)
        if (button.dataset.questAction === 'claim') this.callbacks.onClaimQuest?.(button.dataset.questId)
      }))
    }
    if (name === 'inventory') {
      this.root.querySelectorAll('[data-use-item]').forEach((button) => button.addEventListener('click', () => {
        this.callbacks.onUseItem?.(button.dataset.useItem)
      }))
      this.root.querySelector('[data-screen-open]')?.addEventListener('click', () => this.openScreen(this.root.querySelector('[data-screen-open]').dataset.screenOpen))
    }
    if (name === 'shop') {
      this.root.querySelectorAll('[data-shop-buy]').forEach((button) => button.addEventListener('click', () => {
        this.callbacks.onBuyItem?.(button.dataset.shopBuy)
      }))
    }
    if (name === 'settings') {
      this.root.querySelectorAll('[data-setting]').forEach((input) => {
        input.addEventListener('input', () => {
          const key = input.dataset.setting
          this.profile.settings[key] = Number(input.value)
          this.callbacks.onSettingChange?.(key, Number(input.value))
        })
      })
      this.root.querySelectorAll('[data-setting-select]').forEach((select) => {
        select.addEventListener('change', () => {
          const key = select.dataset.settingSelect
          this.profile.settings[key] = select.value
          this.callbacks.onSettingChange?.(key, select.value)
        })
      })
      this.root.querySelectorAll('[data-toggle]').forEach((button) => button.addEventListener('click', () => {
        const key = button.dataset.toggle
        const value = !this.profile.settings[key]
        this.profile.settings[key] = value
        button.classList.toggle('on', value)
        this.applySettings()
        this.callbacks.onSettingChange?.(key, value)
        this.renderScreen('settings')
      }))
      this.root.querySelector('[data-reset-save]')?.addEventListener('click', () => {
        this.confirm({
          title: 'Reset the expedition?',
          message: 'All creatures, progress, inventory, bounties, and legendary history will be erased. This cannot be undone.',
          confirmLabel: 'Reset everything',
          danger: true
        }).then((confirmed) => {
          if (confirmed) this.callbacks.onResetSave?.()
        })
      })
    }
  }

  drawMinimap(map) {
    const now = performance.now()
    if (now - this.lastMinimapAt < 130) return
    this.lastMinimapAt = now
    const canvas = this.minimap
    const context = canvas?.getContext('2d')
    if (!context) return
    const width = canvas.width
    const height = canvas.height
    const cx = width / 2
    const cy = height / 2
    const scale = width / 280
    context.clearRect(0, 0, width, height)
    context.fillStyle = '#0a1120'
    context.fillRect(0, 0, width, height)

    const toMap = (x, z) => ({ x: cx + x * scale, y: cy + z * scale })
    for (const biome of BIOME_ORDER) {
      const info = BIOMES[biome]
      const point = toMap(info.center[0], info.center[1])
      const radius = info.radius * scale
      const gradient = context.createRadialGradient(point.x, point.y, 2, point.x, point.y, radius)
      gradient.addColorStop(0, `${info.color}3f`)
      gradient.addColorStop(1, `${info.color}05`)
      context.fillStyle = gradient
      context.beginPath()
      context.arc(point.x, point.y, radius, 0, Math.PI * 2)
      context.fill()
      context.strokeStyle = `${info.color}40`
      context.lineWidth = 1
      context.stroke()
      context.fillStyle = `${info.color}b8`
      context.font = 'bold 7px "Trebuchet MS", sans-serif'
      context.textAlign = 'center'
      context.fillText(info.short.toUpperCase(), point.x, point.y + 2)
    }
    context.strokeStyle = 'rgba(255,209,102,0.18)'
    context.lineWidth = 2
    for (const biome of BIOME_ORDER) {
      const info = BIOMES[biome]
      const center = toMap(0, 0)
      const point = toMap(info.center[0], info.center[1])
      context.beginPath()
      context.moveTo(center.x, center.y)
      context.lineTo(point.x, point.y)
      context.stroke()
    }
    const hub = toMap(0, 0)
    context.fillStyle = 'rgba(255,209,102,0.16)'
    context.beginPath()
    context.arc(hub.x, hub.y, 22 * scale, 0, Math.PI * 2)
    context.fill()
    context.fillStyle = '#ffd166'
    context.beginPath()
    context.arc(hub.x, hub.y, 2.2, 0, Math.PI * 2)
    context.fill()

    for (const landmark of map.landmarks || []) {
      const position = Array.isArray(landmark.position) ? landmark.position : [landmark.x, landmark.z]
      const point = toMap(position[0], position[1])
      context.fillStyle = 'rgba(192,139,255,0.75)'
      context.fillRect(point.x - 1.5, point.y - 1.5, 3, 3)
    }
    for (const wild of map.wilds || []) {
      if (!wild.visible) continue
      const point = toMap(wild.x, wild.z)
      const color = wild.legendary ? '#ffd166' : (RARITIES[wild.rarity]?.color || '#9fb0c9')
      context.fillStyle = color
      context.beginPath()
      context.arc(point.x, point.y, wild.legendary ? 2.8 : 1.6, 0, Math.PI * 2)
      context.fill()
      if (wild.legendary) {
        context.strokeStyle = 'rgba(255,209,102,0.45)'
        context.beginPath()
        context.arc(point.x, point.y, 5.5 + Math.sin(now / 300) * 1.5, 0, Math.PI * 2)
        context.stroke()
      }
    }
    if (map.player) {
      const point = toMap(map.player.x, map.player.z)
      context.save()
      context.translate(point.x, point.y)
      const facing = map.player.facing || 0
      context.rotate(facing + Math.PI)
      context.fillStyle = '#ffffff'
      context.shadowColor = '#7fe7d4'
      context.shadowBlur = 8
      context.beginPath()
      context.moveTo(0, -6)
      context.lineTo(4.2, 4.5)
      context.lineTo(0, 2.6)
      context.lineTo(-4.2, 4.5)
      context.closePath()
      context.fill()
      context.restore()
    }
    context.strokeStyle = 'rgba(151,196,255,0.16)'
    context.lineWidth = 1
    context.strokeRect(0.5, 0.5, width - 1, height - 1)
  }

  showBattleResult({ result, battle, rewards, captured, onContinue, onOpenParty }) {
    const titles = {
      victory: 'Creature calmed',
      captured: 'Capture successful',
      defeat: 'Your lead needs rest',
      fled: 'You slipped away'
    }
    const summaries = {
      victory: 'The encounter ends without a capture. The creature retreats into the biome.',
      captured: `${captured ? displayName(captured) : 'The creature'} is now part of your expedition.`,
      defeat: 'Your active creature fainted. You return to Haven with the party patched up, but lose some Shards.',
      fled: 'You leave the encounter. The wild creature remains in its territory.'
    }
    const rewardItems = rewards?.item ? `<span class="reward-pill">${esc(ITEMS[rewards.item]?.name || rewards.item)}</span>` : ''
    const body = `<div style="text-align:center;padding:6px 0 4px">
      ${captured && speciesOf(captured) ? `<div style="width:180px;height:180px;margin:0 auto">${portraitSVG(speciesOf(captured))}</div>` : ''}
      <span class="eyebrow" style="color:var(--gold)">ENCOUNTER RESULT</span>
      <h2 style="font-family:var(--font-display);font-size:28px;margin:7px 0">${esc(titles[result] || 'Encounter complete')}</h2>
      <p class="small muted" style="max-width:430px;margin:0 auto;line-height:1.55">${esc(summaries[result] || '')}</p>
      <div class="reward-row" style="justify-content:center;margin-top:16px">
        ${rewards?.xp ? `<span class="reward-pill violet">+${rewards.xp} XP</span>` : ''}
        ${rewards?.shards ? `<span class="reward-pill gold">+${rewards.shards} Shards</span>` : ''}
        ${rewardItems}
        ${captured ? '<span class="reward-pill teal">Added to collection</span>' : ''}
      </div>
      ${battle?.enemy ? `<p class="small muted" style="margin-top:13px">${esc(battle.enemy.name)} · Lv. ${battle.enemy.level} · ${esc(BIOMES[battle.enemy.species.biome]?.name || 'Wilds')}</p>` : ''}
    </div>`
    this.activeScreen = 'result'
    this.root.classList.remove('hidden')
    this.root.innerHTML = `<div class="modal-card narrow">
      <div class="modal-body">${body}</div>
      <div class="modal-footer" style="justify-content:center">
        ${onOpenParty ? '<button class="ghost-button" data-result-party>View party</button>' : ''}
        <button class="primary-button" data-close>Continue exploring</button>
      </div>
    </div>`
    this.root.querySelector('[data-close]')?.addEventListener('click', () => {
      this.closeModal()
      onContinue?.()
    })
    this.root.querySelector('[data-result-party]')?.addEventListener('click', () => {
      this.closeModal()
      onContinue?.()
      onOpenParty()
    })
  }

  confirm({ title, message, confirmLabel = 'Confirm', danger = false }) {
    return new Promise((resolve) => {
      const overlay = document.createElement('div')
      overlay.style.cssText = 'position:absolute;inset:0;z-index:45;display:flex;align-items:center;justify-content:center;background:rgba(3,6,13,.7);backdrop-filter:blur(7px);padding:20px'
      overlay.innerHTML = `<div class="modal-card narrow" style="animation:modalIn .2s ease both">
        <div class="modal-header"><div class="modal-title"><span class="eyebrow" style="color:${danger ? 'var(--danger)' : 'var(--gold)'}">PLEASE CONFIRM</span><h2>${esc(title)}</h2><p>${esc(message)}</p></div></div>
        <div class="modal-footer"><button class="ghost-button" data-cancel>Cancel</button><button class="${danger ? 'danger-button' : 'primary-button'}" data-confirm>${esc(confirmLabel)}</button></div>
      </div>`
      document.getElementById('game-shell').append(overlay)
      const finish = (value) => {
        overlay.remove()
        resolve(value)
      }
      overlay.querySelector('[data-cancel]').addEventListener('click', () => finish(false))
      overlay.querySelector('[data-confirm]').addEventListener('click', () => finish(true))
      overlay.addEventListener('click', (event) => {
        if (event.target === overlay) finish(false)
      })
    })
  }
}
