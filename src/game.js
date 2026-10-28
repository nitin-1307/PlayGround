import { Engine } from './core/engine.js'
import { Input } from './core/input.js'
import { World, biomeAt } from './world/world.js'
import { Player } from './world/player.js'
import { WildManager } from './world/wilds.js'
import { BattleScene } from './world/battleScene.js'
import { createCreatureMesh, animateCreatureMesh } from './world/creatureMesh.js'
import { UI } from './ui/ui.js'
import {
  addCreature,
  clearProfile,
  createCreature,
  grantXp,
  loadProfile,
  saveProfile,
  storageCount,
  STORAGE_LIMIT
} from './core/save.js'
import { createBattle, battleRewards, pushLog } from './systems/battle.js'
import { addCurrency, buyItem, grantItem, useLure, usePotion, useTreat } from './systems/economy.js'
import { autoStartTutorial, claimQuest, ensureQuest, recordQuestEvent, startQuest, activeQuests } from './systems/quests.js'
import { assignTraining, collectTraining, removeTraining } from './systems/training.js'
import {
  legendaryStatus,
  markLegendaryCaptured,
  markLegendarySeen,
  tickLegendary
} from './systems/legendary.js'
import {
  activeCreature,
  displayName,
  findCreature,
  formatNumber,
  healParty,
  moveToParty,
  moveToStorage,
  releaseCreature,
  setActive,
  swapParty
} from './systems/helpers.js'
import { getSpecies, STARTER_IDS } from './data/species.js'
import { ITEMS } from './data/items.js'
import { BIOMES } from './data/types.js'

const SPAWN = [0, 0, 14]
const AUTOSAVE_MS = 20000
const SIGHT_RANGE = 13

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()))
}

export class Game {
  constructor({ engine, profile, world, player, wilds }) {
    this.engine = engine
    this.profile = profile
    this.world = world
    this.player = player
    this.wilds = wilds
    this.input = new Input(engine.canvas)
    this.mode = 'title'
    this.battle = null
    this.battleScene = null
    this.pendingWild = null
    this.focus = null
    this.legendaryEvent = null
    this.hazardCooldownAt = 0
    this.lastBiomeCheck = 0
    this.lastSeenScan = 0
    this.lastPromptAt = 0
    this.lastLegendaryUi = 0
    this.lastHint = ''
    this.lastPrompt = null
    this.lastBiome = null
    this.autosaveAt = performance.now()
    this.dirty = false
    this.time = 0
    this.sessionStartedAt = Date.now()
    this.companion = null
    this.companionSpecies = null

    this.profile.settings = this.profile.settings || {}
    this.input.sensitivity = this.profile.settings.sensitivity || 1
    this.input.invertY = Boolean(this.profile.settings.invertY)
    this.input.setEnabled(false)

    this.ui = new UI(profile, this.makeCallbacks())
    this.bindInput()
    this.bindTouch()
    this.syncCollectionDex()
    this.player.cameraYaw = 0
    this.player.facing = Math.PI
    this.player.setCameraYaw(0)
    this.player.applyCamera(this.engine.camera)
    this.ui.setLocation('hub')
    this.ui.setHint('Drag to look · WASD to move · Shift to sprint · E to interact')
    this.ui.setLegendary(legendaryStatus(profile))
    this.lastBiome = 'hub'
    this.syncCompanion()
  }

  makeCallbacks() {
    return {
      onEnter: () => this.enter(),
      onChooseStarter: (id) => this.chooseStarter(id),
      onScreenRequest: (name) => this.openScreen(name),
      onSetActive: (uid) => this.handleSetActive(uid),
      onSwapParty: (uid, direction) => this.handleSwapParty(uid, direction),
      onMoveToParty: (uid) => this.handleMoveToParty(uid),
      onMoveToStorage: (uid) => this.handleMoveToStorage(uid),
      onRelease: (uid) => this.handleRelease(uid),
      onAssignTraining: (uid) => this.handleAssignTraining(uid),
      onRemoveTraining: (uid) => this.handleRemoveTraining(uid),
      onCollectTraining: (uid) => this.handleCollectTraining(uid),
      onUnlockTraining: () => this.handleUnlockTraining(),
      onStartQuest: (id) => this.handleStartQuest(id),
      onClaimQuest: (id) => this.handleClaimQuest(id),
      onBuyItem: (id) => this.handleBuyItem(id),
      onUseItem: (id) => this.handleUseItem(id),
      onSettingChange: (key, value) => this.handleSettingChange(key, value),
      onResetSave: () => this.resetSave(),
      onBattleMove: (index) => this.handleBattleMove(index),
      onBattleDodge: () => this.handleBattleDodge(),
      onBattleCapture: () => this.handleBattleCapture(),
      onBattlePotion: () => this.handleBattlePotion(),
      onBattleFlee: () => this.handleBattleFlee()
    }
  }

  bindInput() {
    const screenKeys = {
      KeyC: 'dex',
      KeyP: 'party',
      KeyT: 'training',
      KeyJ: 'quests',
      KeyI: 'inventory',
      KeyO: 'settings'
    }
    this.input.onAction('KeyE', () => this.interact())
    for (const [code, screen] of Object.entries(screenKeys)) {
      this.input.onAction(code, () => this.openScreen(screen))
    }
    const moveKeys = ['Digit1', 'Digit2', 'Digit3', 'Digit4']
    for (const [index, code] of moveKeys.entries()) {
      this.input.onAction(code, () => {
        if (this.mode === 'battle' && !this.ui.activeScreen) this.handleBattleMove(index)
      })
      this.input.onAction(`Numpad${index + 1}`, () => {
        if (this.mode === 'battle' && !this.ui.activeScreen) this.handleBattleMove(index)
      })
    }
    this.input.onAction('KeyF', () => {
      if (this.mode === 'battle' && !this.ui.activeScreen) this.handleBattleCapture()
    })
    this.input.onAction('KeyR', () => {
      if (this.mode === 'battle' && !this.ui.activeScreen) this.handleBattlePotion()
    })
    this.input.onAction('Escape', () => {
      if (this.mode === 'battle' && !this.ui.activeScreen) this.handleBattleFlee()
    })
  }

  bindTouch() {
    const joystick = document.getElementById('joystick')
    const knob = document.getElementById('joystick-knob')
    const interact = document.getElementById('mobile-interact')
    const sprint = document.getElementById('mobile-sprint')
    const coarse = matchMedia('(pointer: coarse)').matches
    document.getElementById('mobile-controls')?.classList.toggle('hidden', !coarse)
    if (joystick && knob) {
      let pointerId = null
      const setKnob = (dx, dy) => {
        const radius = 42
        const distance = Math.hypot(dx, dy)
        const scale = distance > radius ? radius / distance : 1
        const x = dx * scale
        const y = dy * scale
        knob.style.transform = `translate(${x}px, ${y}px)`
        this.input.setTouchMove(x / radius, -y / radius)
      }
      joystick.addEventListener('pointerdown', (event) => {
        if (this.ui.activeScreen || (this.mode !== 'explore' && this.mode !== 'battle')) return
        pointerId = event.pointerId
        joystick.setPointerCapture?.(event.pointerId)
        const rect = joystick.getBoundingClientRect()
        setKnob(event.clientX - rect.left - rect.width / 2, event.clientY - rect.top - rect.height / 2)
      })
      joystick.addEventListener('pointermove', (event) => {
        if (event.pointerId !== pointerId) return
        const rect = joystick.getBoundingClientRect()
        setKnob(event.clientX - rect.left - rect.width / 2, event.clientY - rect.top - rect.height / 2)
      })
      const end = () => {
        pointerId = null
        knob.style.transform = 'translate(0px, 0px)'
        this.input.setTouchMove(0, 0)
      }
      joystick.addEventListener('pointerup', end)
      joystick.addEventListener('pointercancel', end)
    }
    interact?.addEventListener('pointerdown', () => this.interact())
    if (sprint) {
      sprint.addEventListener('pointerdown', (event) => {
        event.preventDefault()
        this.input.keys.add('ShiftLeft')
      })
      const release = () => this.input.keys.delete('ShiftLeft')
      sprint.addEventListener('pointerup', release)
      sprint.addEventListener('pointercancel', release)
      sprint.addEventListener('pointerleave', release)
    }
  }

  start() {
    this.ui.revealTitle(true)
    this.engine.start((dt, time) => this.tick(dt, time))
  }

  enter() {
    if (this.mode === 'starter' || this.mode === 'explore' || this.mode === 'battle') return
    this.ui.enterWorld()
    const active = activeCreature(this.profile)
    if (!this.profile.starterChosen || !active) {
      this.mode = 'starter'
      this.ui.openStarterSelection((id) => this.chooseStarter(id))
      return
    }
    this.beginExplore()
  }

  chooseStarter(speciesId) {
    if (!STARTER_IDS.includes(speciesId)) return
    const existing = activeCreature(this.profile)
    if (existing) {
      this.finishStarter()
      return
    }
    const creature = createCreature(speciesId, 5, { provenance: 'starter' })
    addCreature(this.profile, creature)
    this.profile.starterChosen = true
    this.profile.starterId = speciesId
    this.profile.activeUid = creature.uid
    this.profile.party = [creature.uid]
    creature.assignment = 'party'
    this.markDex(speciesId, true)
    autoStartTutorial(this.profile)
    recordQuestEvent(this.profile, { type: 'starter' })
    this.ui.showToast(`${displayName(creature)} joined your expedition.`, 'gold', '✦')
    this.finishStarter()
    this.save(true)
    this.ui.refresh()
    this.syncCompanion()
    this.beginExplore()
  }

  finishStarter() {
    this.ui.activeScreen = null
    this.ui.root.classList.add('hidden')
    this.ui.root.innerHTML = ''
  }

  beginExplore() {
    this.mode = 'explore'
    this.input.setEnabled(true)
    autoStartTutorial(this.profile)
    this.syncCollectionDex()
    this.syncCompanion()
    this.ui.refresh()
    this.ui.setBattleVisible(false)
    this.ui.setLocation('hub')
    this.ui.showToast('Hearthlight Haven is safe. Follow the paths into the wilds.', '', '✦')
    this.ui.setLegendary(legendaryStatus(this.profile))
    this.save()
  }

  syncCollectionDex() {
    for (const creature of this.profile.creatures) {
      this.markDex(creature.speciesId, true, false)
    }
  }

  syncCompanion() {
    const active = activeCreature(this.profile)
    if (!active) {
      if (this.companion) this.companion.visible = false
      return
    }
    if (this.companionSpecies !== active.speciesId) {
      if (this.companion) {
        this.companion.parent?.remove(this.companion)
      }
      const species = getSpecies(active.speciesId)
      this.companion = createCreatureMesh(species, { scale: 0.42 })
      this.companion.position.copy(this.player.position).add({ x: 1.5, y: 0, z: 1.0 })
      this.engine.scene.add(this.companion)
      this.companionSpecies = active.speciesId
    }
    this.companion.visible = true
  }

  updateCompanion(dt, time, exploring) {
    if (!this.companion) return
    const active = activeCreature(this.profile)
    if (!active) {
      this.companion.visible = false
      return
    }
    if (active.speciesId !== this.companionSpecies) this.syncCompanion()
    const player = this.player.position
    const behindX = Math.sin(this.player.facing) * -1.0
    const behindZ = Math.cos(this.player.facing) * -1.0
    const sideX = Math.cos(this.player.facing) * 1.15
    const sideZ = -Math.sin(this.player.facing) * 1.15
    const target = {
      x: player.x + behindX + sideX,
      z: player.z + behindZ + sideZ
    }
    const dx = target.x - this.companion.position.x
    const dz = target.z - this.companion.position.z
    const distance = Math.hypot(dx, dz)
    if (distance > 9) {
      this.companion.position.set(target.x, this.player.position.y, target.z)
    } else if (distance > 0.15) {
      const follow = 1 - Math.exp(-(exploring ? 7.5 : 3.5) * dt)
      this.companion.position.x += dx * follow
      this.companion.position.z += dz * follow
      const targetFacing = Math.atan2(dx, dz)
      let delta = targetFacing - this.companion.rotation.y
      while (delta > Math.PI) delta -= Math.PI * 2
      while (delta < -Math.PI) delta += Math.PI * 2
      this.companion.rotation.y += delta * Math.min(1, dt * 7)
    }
    const ground = this.player.position.y
    this.companion.position.y += (ground - this.companion.position.y) * Math.min(1, dt * 8)
    animateCreatureMesh(this.companion, time, distance > 0.5 ? 'moving' : 'idle')
  }

  markDex(speciesId, caught = false, record = true) {
    const species = getSpecies(speciesId)
    if (!species) return false
    let isNew = false
    if (!this.profile.dex.seen.includes(speciesId)) {
      this.profile.dex.seen.push(speciesId)
      isNew = true
      if (record) {
        this.ui.showToast(`New species recorded: ${species.name}.`, 'gold', '◈')
        recordQuestEvent(this.profile, { type: 'discover', count: this.profile.dex.seen.length })
        this.dirty = true
      }
    }
    if (caught && !this.profile.dex.caught.includes(speciesId)) {
      this.profile.dex.caught.push(speciesId)
      this.dirty = true
    }
    return isNew
  }

  tick(dt, time) {
    this.time = time
    if (this.mode === 'battle' && this.battleScene) {
      const battleScene = this.battleScene
      this.world.update(dt, time)
      this.wilds.update(dt, time, this.player.position, this.legendaryEvent)
      battleScene.update(dt, this.input)
      this.engine.render(this.mode === 'battle' && this.battleScene === battleScene ? battleScene.scene : this.engine.scene)
      this.input.clearFrame()
      this.autosave(dt)
      return
    }

    const modalOpen = Boolean(this.ui.activeScreen)
    const exploring = this.mode === 'explore' && !modalOpen
    this.player.update(dt, this.input, this.world, exploring)
    this.player.applyCamera(this.engine.camera)
    this.updateCompanion(dt, time, exploring)
    this.world.update(dt, time)
    this.wilds.update(dt, time, this.player.position, this.legendaryEvent)
    this.ui.refreshTrainingLive(nowMs())

    if (this.mode === 'explore') {
      this.profile.stats.playSeconds = (this.profile.stats.playSeconds || 0) + dt
      this.updateLegendary(nowMs())
      if (exploring) this.updateExploration(nowMs())
      else {
        this.ui.setInteraction(null)
        this.setHint('')
      }
    } else {
      this.ui.setInteraction(null)
      this.setHint('')
    }

    this.engine.render(this.engine.scene)
    this.input.clearFrame()
    this.autosave(dt)
  }

  updateExploration(now) {
    const position = this.player.position
    if (now >= this.lastBiomeCheck) {
      this.lastBiomeCheck = now + 350
      const biome = biomeAt(position.x, position.z)
      if (biome !== this.lastBiome) {
        this.lastBiome = biome
        this.ui.setLocation(biome)
        if (!this.profile.flags.visitedBiomes.includes(biome)) {
          this.profile.flags.visitedBiomes.push(biome)
          this.ui.showToast(`Discovered ${BIOMES[biome]?.name || biome}.`, 'gold', '✦')
          this.dirty = true
        } else if (biome !== 'hub') {
          this.ui.showToast(`Entered ${BIOMES[biome]?.name || biome}.`, '', '•')
        }
      }
    }

    if (now >= this.lastSeenScan) {
      this.lastSeenScan = now + 600
      this.scanWilds()
    }

    this.checkHazard(now)
    this.updateFocus(now)
  }

  scanWilds() {
    const position = this.player.position
    for (const wild of this.wilds.wilds) {
      if (!wild.visible) continue
      if (Math.hypot(position.x - wild.x, position.z - wild.z) > SIGHT_RANGE) continue
      if (!this.profile.dex.seen.includes(wild.species.id)) this.markDex(wild.species.id, false)
    }
  }

  checkHazard(now) {
    if (now < this.hazardCooldownAt) return
    const hazard = this.world.hazardAt(this.player.position)
    if (!hazard) return
    this.hazardCooldownAt = now + 1700
    const active = activeCreature(this.profile)
    if (!active) return
    const damage = Math.max(2, Math.round(active.stats.maxHp * 0.055))
    active.hp = Math.max(0, active.hp - damage)
    this.flash()
    this.ui.showToast(`${hazard.label}: ${displayName(active)} loses ${damage} HP.`, 'error', '!')
    this.ui.refresh()
    if (active.hp <= 0) {
      healParty(this.profile)
      this.teleportToHub()
      this.ui.showToast('Your lead collapsed. You wake at the Starwell, party restored.', 'error', '!')
    }
    this.save(true)
  }

  updateLegendary(now) {
    const tick = tickLegendary(this.profile, now)
    if (tick.changed) {
      const event = tick.event
      if (tick.warning && event) {
        const species = getSpecies(event.legendaryId)
        this.ui.showToast(`Astral event: ${species?.name || 'a legendary creature'} is approaching ${BIOMES[event.biome]?.name || 'the wilds'}.`, 'gold', '✦')
        this.markLegendaryWitnessed(event)
        this.dirty = true
      } else if (tick.spawned && event) {
        this.ui.showToast(`The rift is open. ${getSpecies(event.legendaryId)?.name || 'A legendary'} is present for four minutes.`, 'gold', '✦')
      } else if (tick.expired) {
        this.ui.showToast('The astral rift closes. The legendary presence fades.', '', '•')
        this.dirty = true
      }
      this.save()
    }
    this.legendaryEvent = this.profile.legendary.active
    if (this.legendaryEvent && !this.profile.flags.legendaryWitnessed?.includes(this.legendaryEvent.id)) {
      this.markLegendaryWitnessed(this.legendaryEvent)
    }
    if (now >= this.lastLegendaryUi) {
      this.lastLegendaryUi = now + 500
      this.ui.setLegendary(legendaryStatus(this.profile, now))
    }
  }

  markLegendaryWitnessed(event) {
    this.profile.flags.legendaryWitnessed = this.profile.flags.legendaryWitnessed || []
    if (this.profile.flags.legendaryWitnessed.includes(event.id)) return
    this.profile.flags.legendaryWitnessed.push(event.id)
    this.profile.flags.legendaryWitnessed = this.profile.flags.legendaryWitnessed.slice(-20)
    markLegendarySeen(this.profile)
    recordQuestEvent(this.profile, { type: 'legendary' })
    this.markDex(event.legendaryId, false)
    this.dirty = true
  }

  updateFocus(now) {
    if (now < this.lastPromptAt) return
    this.lastPromptAt = now + 130
    const position = this.player.position
    const wild = this.wilds.nearestWild(position, 4.4)
    const interactable = this.world.nearestInteractable(position, 3.9)
    let focus = null
    if (wild && (!interactable || wild.distance <= interactable.distance + 0.2)) {
      focus = { type: 'wild', wild: wild.wild, distance: wild.distance }
    } else if (interactable) {
      focus = { type: 'interactable', data: interactable, distance: interactable.distance }
    }
    this.focus = focus
    let prompt = ''
    if (focus?.type === 'wild') {
      prompt = `Encounter ${focus.wild.species.name} · Lv. ${focus.wild.level}`
    } else if (focus?.type === 'interactable') {
      prompt = focus.data.label
    }
    if (prompt !== this.lastPrompt) {
      this.lastPrompt = prompt
      this.ui.setInteraction(prompt || null)
    }
    if (!this.profile.settings.hints) {
      this.setHint('')
      return
    }
    let hint = 'Drag to look · WASD move · Shift sprint · Space jump · E interact'
    if (focus?.type === 'wild') hint = 'Press E near a wild creature to begin a real-time encounter.'
    else if (this.world.hazardAt(position)) hint = 'Scalding ground. Move to safety.'
    else if (focus?.type === 'interactable') hint = `${focus.data.label}. Press E.`
    this.setHint(hint)
  }

  setHint(text) {
    if (text === this.lastHint) return
    this.lastHint = text
    this.ui.setHint(text)
  }

  interact() {
    if (this.mode !== 'explore' || this.ui.activeScreen) return
    const focus = this.focus
    if (!focus) return
    if (focus.type === 'wild') {
      this.startBattle(focus.wild)
      return
    }
    const data = focus.data
    if (!data) return
    switch (data.type) {
      case 'shop':
        this.ui.openScreen('shop')
        break
      case 'training':
        this.ui.openScreen('training')
        break
      case 'quests':
        this.ui.openScreen('quests')
        break
      case 'guide':
        this.profile.flags.tutorialSeen = true
        this.ui.openHowTo()
        this.save()
        break
      case 'heal': {
        const healed = healParty(this.profile)
        this.ui.showToast(healed > 0 ? `The Starwell restores ${formatNumber(healed)} total HP.` : 'Your party is already at full health.', 'success', '✚')
        this.ui.refresh()
        this.save(true)
        break
      }
      case 'practice':
        this.startPractice()
        break
      case 'landmark':
        this.inspectLandmark(data)
        break
      default:
        break
    }
  }

  inspectLandmark(data) {
    const landmark = this.world.landmarks.find((entry) => entry.id === data.landmark)
    if (!landmark) return
    const first = !this.profile.flags.landmarks[landmark.id]
    this.profile.flags.landmarks[landmark.id] = Date.now()
    const updates = recordQuestEvent(this.profile, { type: 'visit', landmark: landmark.id })
    if (first) {
      addCurrency(this.profile, 25, 0)
      this.markDexFromLandmark(landmark)
      this.ui.showToast(`${landmark.name} recorded. +25 Shards.`, 'gold', '✦')
    } else {
      this.ui.showToast(`${landmark.name}: ${landmark.description}`, '', '◈')
    }
    this.handleQuestUpdates(updates)
    this.ui.refresh()
    this.save(true)
  }

  markDexFromLandmark(landmark) {
    // Landmark discovery counts toward the archive but does not reveal a species.
    this.profile.flags.landmarks[landmark.id] = Date.now()
  }

  startPractice() {
    if (this.mode !== 'explore' || this.ui.activeScreen) return
    const active = activeCreature(this.profile)
    if (!active) return this.ui.showToast('You need an active creature first.', 'error')
    if (active.hp <= 0) return this.ui.showToast('Your lead needs healing before practice.', 'error')
    const species = getSpecies('AST-012') || getSpecies(STARTER_IDS[0])
    const level = Math.max(3, active.level - 1)
    const dummy = createCreature(species.id, level, { provenance: 'practice' })
    const wild = {
      id: `practice-${Date.now()}`,
      species,
      speciesId: species.id,
      level,
      x: this.player.position.x,
      z: this.player.position.z,
      stats: dummy.stats,
      hp: dummy.stats.maxHp,
      biome: 'verdant',
      legendary: false,
      visible: true,
      practice: true
    }
    this.beginBattle(wild)
  }

  startBattle(wild) {
    if (this.mode !== 'explore' || this.ui.activeScreen) return
    const active = activeCreature(this.profile)
    if (!active) {
      this.ui.showToast('Choose an active creature before entering the wilds.', 'error')
      return
    }
    if (active.hp <= 0) {
      this.ui.showToast(`${displayName(active)} needs a salve or the Starwell before battling.`, 'error')
      return
    }
    this.markDex(wild.species.id, false)
    this.wilds.hideWild(wild)
    this.beginBattle(wild)
  }

  beginBattle(wild) {
    this.pendingWild = wild
    const active = activeCreature(this.profile)
    this.battle = createBattle(this.profile, wild, active, {
      legendary: wild.legendary ? this.legendaryEvent : null
    })
    this.profile.stats.battles = (this.profile.stats.battles || 0) + 1
    this.mode = 'battle'
    this.input.keys.clear()
    this.input.justPressed.clear()
    this.input.setTouchMove(0, 0)
    this.ui.setInteraction(null)
    this.ui.setHint('')
    this.ui.setBattleVisible(true)
    this.battleScene = new BattleScene(this.engine, this.battle, wild, {
      onHud: (hud) => this.ui.updateBattle(hud),
      onEnd: (result, battle) => this.finishBattle(result, battle)
    })
    this.ui.setBattleVisible(true)
    this.save()
  }

  finishBattle(result, battle) {
    if (this.mode !== 'battle' || this.battle !== battle) return
    const wild = this.pendingWild
    const active = findCreature(this.profile, battle.player.uid) || activeCreature(this.profile)
    if (active) {
      active.hp = Math.max(0, Math.round(battle.player.hp))
      active.statuses = []
    }
    let captured = null
    let rewards = { xp: 0, shards: 0, item: null }
    let levelUps = []
    let evolutions = []

    if (result === 'victory' && wild) {
      rewards = battleRewards(battle)
      if (active && rewards.xp) {
        const gained = grantXp(this.profile, active, rewards.xp)
        levelUps.push({ creature: active, levels: gained.levels, levelsText: gained.levels })
        evolutions.push(...gained.evolved.map((species) => ({ creature: active, species })))
        for (const member of this.profile.party) {
          if (member === active.uid) continue
          const other = findCreature(this.profile, member)
          if (!other || other.assignment === 'training') continue
          const resultXp = grantXp(this.profile, other, Math.round(rewards.xp * 0.3))
          if (resultXp.levels) levelUps.push({ creature: other, levels: resultXp.levels })
          evolutions.push(...resultXp.evolved.map((species) => ({ creature: other, species })))
        }
      }
      addCurrency(this.profile, rewards.shards, 0)
      if (rewards.item) grantItem(this.profile, rewards.item, 1)
      this.profile.stats.wins = (this.profile.stats.wins || 0) + 1
      this.recordQuestEvent({ type: 'defeat', biome: wild.biome })
      this.ui.showToast(`Victory. +${rewards.xp} XP, +${rewards.shards} Shards.`, 'success', '✓')
    }

    if (result === 'captured' && wild) {
      this.profile.stats.captures = (this.profile.stats.captures || 0) + 1
      captured = createCreature(wild.speciesId, wild.level, {
        provenance: wild.legendary ? 'legendary' : 'wild'
      })
      const added = addCreature(this.profile, captured)
      this.markDex(wild.speciesId, true)
      const captureXp = Math.round(wild.level * 10 + (wild.legendary ? 180 : 0))
      rewards = {
        xp: captureXp,
        shards: Math.round(wild.level * 3 + (wild.legendary ? 120 : 0)),
        item: Math.random() < 0.18 ? 'treat' : null
      }
      if (active) {
        const gained = grantXp(this.profile, active, captureXp)
        levelUps.push({ creature: active, levels: gained.levels })
        evolutions.push(...gained.evolved.map((species) => ({ creature: active, species })))
      }
      addCurrency(this.profile, rewards.shards, wild.legendary ? 2 : 0)
      if (rewards.item) grantItem(this.profile, rewards.item, 1)
      this.recordQuestEvent({ type: 'capture', types: wild.species.types, biome: wild.biome })
      if (wild.legendary && this.legendaryEvent) {
        const marked = markLegendaryCaptured(this.profile, this.legendaryEvent)
        if (marked.ok) this.ui.showToast(`${wild.species.name} accepted the capture. Legendary event complete.`, 'gold', '✦')
      }
      this.ui.showToast(added.inParty ? `${displayName(captured)} joined your party.` : `${displayName(captured)} was sent to storage.`, 'success', '◉')
    }

    if (result === 'defeat') {
      this.profile.stats.defeats = (this.profile.stats.defeats || 0) + 1
      const lost = Math.round((this.profile.currency.shards || 0) * 0.1)
      this.profile.currency.shards = Math.max(0, (this.profile.currency.shards || 0) - lost)
      healParty(this.profile)
      this.teleportToHub()
      this.ui.showToast(`You retreat to Haven. The party is restored; ${formatNumber(lost)} Shards were lost.`, 'error', '!')
    }

    if (wild?.legendary && result === 'victory') {
      this.profile.legendary.history.push({ ...this.legendaryEvent, outcome: 'escaped' })
      this.profile.legendary.history = this.profile.legendary.history.slice(-20)
      this.profile.legendary.active = null
      this.profile.legendary.nextEventAt = Date.now() + 6 * 60 * 1000
    }

    if (wild) {
      if (wild.practice) {
        // Practice dummies are not part of the persistent world.
      } else if ((result === 'fled' || result === 'defeat') && !wild.legendary) {
        this.wilds.showWild(wild)
      } else {
        this.wilds.removeWild(wild, { respawn: !wild.legendary })
      }
    }

    this.processProgression(levelUps, evolutions)
    this.battleScene?.dispose()
    this.battleScene = null
    this.battle = null
    this.pendingWild = null
    this.legendaryEvent = this.profile.legendary.active
    this.mode = 'explore'
    this.input.setEnabled(true)
    this.input.keys.clear()
    this.input.justPressed.clear()
    this.input.setTouchMove(0, 0)
    this.ui.setBattleVisible(false)
    this.ui.setLegendary(legendaryStatus(this.profile))
    this.ui.refresh()
    this.save(true)

    this.ui.showBattleResult({
      result,
      battle,
      rewards,
      captured,
      onContinue: () => {
        this.focus = null
        this.lastPrompt = ''
        this.ui.setInteraction(null)
      },
      onOpenParty: () => this.ui.openScreen('party')
    })
  }

  processProgression(levelUps, evolutions) {
    const seen = new Set()
    for (const entry of levelUps) {
      if (!entry.levels) continue
      const key = `${entry.creature.uid}-${entry.creature.level}`
      if (seen.has(key)) continue
      seen.add(key)
      this.ui.showToast(`${displayName(entry.creature)} reached level ${entry.creature.level}.`, 'gold', '↑')
      recordQuestEvent(this.profile, { type: 'level', level: entry.creature.level })
    }
    for (const evolution of evolutions) {
      this.profile.stats.evolved = (this.profile.stats.evolved || 0) + 1
      this.ui.showToast(`${displayName(evolution.creature)} evolved into ${evolution.species.name}.`, 'gold', '✦')
    }
  }

  recordQuestEvent(event) {
    const updates = recordQuestEvent(this.profile, event)
    this.handleQuestUpdates(updates)
    return updates
  }

  handleQuestUpdates(updates = []) {
    let changed = false
    for (const update of updates) {
      changed = true
      if (update.justCompleted) {
        this.ui.showToast(`Bounty complete: ${update.quest.name}. Claim it at the board.`, 'gold', '✧')
      }
    }
    if (changed) {
      this.ui.refresh()
      this.dirty = true
    }
  }

  handleSetActive(uid) {
    const result = setActive(this.profile, uid)
    this.reportResult(result, 'Creature is now your active lead.')
    if (result.ok) {
      this.syncCompanion()
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    }
  }

  handleSwapParty(uid, direction) {
    const result = swapParty(this.profile, uid, direction)
    this.reportResult(result)
    if (result.ok) {
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    }
  }

  handleMoveToParty(uid) {
    const result = moveToParty(this.profile, uid)
    this.reportResult(result, 'Moved to the party.')
    if (result.ok) {
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    }
  }

  handleMoveToStorage(uid) {
    const result = moveToStorage(this.profile, uid)
    this.reportResult(result, 'Moved to storage.')
    if (result.ok) {
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    }
  }

  handleRelease(uid) {
    const creature = findCreature(this.profile, uid)
    const result = releaseCreature(this.profile, uid)
    this.reportResult(result, `${displayName(creature)} was released.`)
    if (result.ok) {
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    }
  }

  handleAssignTraining(uid) {
    const result = assignTraining(this.profile, uid)
    this.reportResult(result, `${displayName(findCreature(this.profile, uid))} started training.`)
    if (result.ok) {
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    }
  }

  handleRemoveTraining(uid) {
    const before = this.profile.flags.totalTrainSeconds || 0
    const result = removeTraining(this.profile, uid)
    this.reportResult(result, 'Training stopped and XP collected.')
    if (result.ok) {
      const delta = (this.profile.flags.totalTrainSeconds || 0) - before
      if (delta > 0) this.recordQuestEvent({ type: 'train', seconds: delta })
      this.processTrainingProgression(result.collected)
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    }
  }

  handleCollectTraining(uid) {
    const before = this.profile.flags.totalTrainSeconds || 0
    const result = collectTraining(this.profile, Date.now(), uid || null)
    if (!result.xp) {
      this.ui.showToast('No training XP ready yet.', '', '•')
      return
    }
    const delta = (this.profile.flags.totalTrainSeconds || 0) - before
    if (delta > 0) this.recordQuestEvent({ type: 'train', seconds: delta })
    this.ui.showToast(`Collected ${formatNumber(result.xp)} training XP.`, 'success', '↑')
    this.processTrainingProgression(result)
    this.ui.refresh()
    this.rerenderScreen()
    this.save(true)
  }

  processTrainingProgression(result = {}) {
    const levelUps = (result.levels || [])
      .map((entry) => ({ creature: findCreature(this.profile, entry.uid), levels: entry.levels }))
      .filter((entry) => entry.creature)
    const evolutions = (result.evolutions || [])
      .map((entry) => ({ creature: findCreature(this.profile, entry.uid), species: entry.species }))
      .filter((entry) => entry.creature && entry.species)
    this.processProgression(levelUps, evolutions)
  }

  handleUnlockTraining() {
    const result = buyItem(this.profile, 'training_slot')
    this.reportResult(result, 'Second treadmill unlocked.')
    if (result.ok) {
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    }
  }

  handleStartQuest(questId) {
    const result = startQuest(this.profile, questId)
    this.reportResult(result, 'Bounty accepted.')
    if (result.ok) {
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    }
  }

  handleClaimQuest(questId) {
    const result = claimQuest(this.profile, questId)
    this.reportResult(result, 'Rewards claimed.')
    if (result.ok) {
      this.ui.showToast('Bounty rewards added to your expedition.', 'gold', '✧')
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    }
  }

  handleBuyItem(itemId) {
    const result = buyItem(this.profile, itemId)
    this.reportResult(result, `${ITEMS[itemId]?.name || 'Item'} purchased.`)
    if (result.ok) {
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    }
  }

  handleUseItem(itemId) {
    const active = activeCreature(this.profile)
    if (!active) return this.ui.showToast('You need an active creature.', 'error')
    const item = ITEMS[itemId]
    let result
    if (item?.category === 'heal') result = usePotion(this.profile, active.uid, itemId)
    else if (item?.category === 'xp') result = useTreat(this.profile, active.uid, itemId)
    else if (item?.category === 'lure') result = useLure(this.profile)
    else result = { ok: false, reason: 'That item cannot be used here.' }
    if (result.ok) {
      if (itemId === 'lure') this.ui.showToast('Scent Lure active for the next three encounters.', 'success', '❋')
      else if (item?.category === 'xp') {
        if (result.result?.levels) this.processProgression([{ creature: active, levels: result.result.levels }], (result.result.evolved || []).map((species) => ({ creature: active, species })))
        this.ui.showToast(`${displayName(active)} gained ${item.xp} XP.`, 'success', '★')
      } else this.ui.showToast(`${displayName(active)} restored ${formatNumber(result.healed)} HP.`, 'success', '✚')
      this.ui.refresh()
      this.rerenderScreen()
      this.save(true)
    } else {
      this.ui.showToast(result.reason, 'error')
    }
  }

  handleSettingChange(key, value) {
    if (key === 'quality') {
      this.engine.setQuality(value)
      this.world.setQuality(value)
    }
    if (key === 'sensitivity') this.input.sensitivity = value
    if (key === 'invertY') this.input.invertY = Boolean(value)
    this.ui.applySettings()
    this.save(true)
  }

  handleBattleMove(index) {
    if (!this.battleScene || this.battle?.over) return
    const result = this.battleScene.castPlayerMove(index)
    if (!result?.ok) this.ui.showToast(result?.reason || 'That move is not ready.', '', '•')
  }

  handleBattleDodge() {
    if (!this.battleScene || this.battle?.over) return
    this.input.justPressed.add('KeyQ')
  }

  handleBattleCapture() {
    if (!this.battleScene || !this.battle || this.battle.over) return
    if (this.profile.party.length >= 6 && storageCount(this.profile) >= STORAGE_LIMIT) {
      this.ui.showToast('Party and storage are full. Make room before capturing.', 'error', '!')
      return
    }
    const discId = (this.profile.inventory.disc_fine || 0) > 0 ? 'disc_fine' : 'disc_basic'
    const disc = ITEMS[discId]
    if (!disc || (this.profile.inventory[discId] || 0) <= 0) {
      this.ui.showToast('No capture discs left. Visit Ember & Elm.', 'error', '!')
      return
    }
    this.profile.inventory[discId] -= 1
    const result = this.battleScene.attemptCapture(disc)
    if (result.success) this.ui.showToast('Capture field holds.', 'gold', '◉')
    else this.ui.showToast(`Capture failed (${Math.round(result.chance * 100)}% chance).`, 'error', '◉')
    this.ui.refresh()
    this.save(true)
  }

  handleBattlePotion() {
    if (!this.battleScene || !this.battle || this.battle.over) return
    if ((this.profile.inventory.potion || 0) <= 0) {
      this.ui.showToast('No Sap Salve left.', 'error', '!')
      return
    }
    const player = this.battle.player
    if (player.hp >= player.maxHp) {
      this.ui.showToast('Your creature is already at full health.', '', '•')
      return
    }
    const healed = Math.min(player.maxHp - player.hp, Math.round(player.maxHp * 0.4))
    player.hp += healed
    this.profile.inventory.potion -= 1
    pushLog(this.battle, `${player.name} recovers ${healed} HP from a Sap Salve.`)
    this.battleScene.spawnFloat(`+${healed}`, this.battleScene.playerPos.clone().add({ x: 0, y: 2.2, z: 0 }), '#8ef0a0')
    this.battleScene.spawnBurst(this.battleScene.playerPos.clone().add({ x: 0, y: 0.7, z: 0 }), '#63c96b', 14, 1)
    this.ui.showToast(`Sap Salve restored ${healed} HP.`, 'success', '✚')
    this.ui.refresh()
    this.save(true)
  }

  handleBattleFlee() {
    if (!this.battleScene || !this.battle || this.battle.over) return
    const result = this.battleScene.attemptFlee()
    if (!result.ok) this.ui.showToast(result.reason, 'error')
    else if (!result.fled) this.ui.showToast('You could not escape. Keep moving.', 'error', '!')
  }

  openScreen(name) {
    if (this.mode === 'battle') {
      this.ui.showToast('Finish the encounter before opening menus.', '', '•')
      return
    }
    if (this.mode === 'starter') return
    if (this.ui.activeScreen === name) {
      this.ui.closeModal()
      return
    }
    this.ui.openScreen(name)
  }

  rerenderScreen() {
    if (this.ui.activeScreen && this.ui.activeScreen !== 'starter') this.ui.renderScreen(this.ui.activeScreen)
  }

  reportResult(result, successMessage) {
    if (!result?.ok) {
      this.ui.showToast(result?.reason || 'That action is not available.', 'error')
      return
    }
    if (successMessage) this.ui.showToast(successMessage, 'success')
  }

  teleportToHub() {
    this.player.teleport(SPAWN[0], SPAWN[2])
    this.player.cameraYaw = 0
    this.player.setCameraYaw(0)
    this.player.applyCamera(this.engine.camera)
    this.lastBiome = 'hub'
    this.ui.setLocation('hub')
  }

  flash() {
    const flash = document.getElementById('flash')
    if (!flash) return
    flash.classList.add('active')
    setTimeout(() => flash.classList.remove('active'), 80)
  }

  resetSave() {
    this.resetting = true
    clearProfile()
    location.reload()
  }

  autosave(dt) {
    const now = performance.now()
    if (now - this.autosaveAt < AUTOSAVE_MS) return
    this.autosaveAt = now
    this.save()
  }

  save(force = false) {
    if (this.resetting) return false
    if (this.mode === 'title' && !force) return
    this.profile.updatedAt = Date.now()
    saveProfile(this.profile)
    this.dirty = false
  }

  destroy() {
    if (!this.resetting) saveProfile(this.profile)
    this.engine.renderer.setAnimationLoop(null)
    this.battleScene?.dispose()
    this.input.setEnabled(false)
  }
}

export async function bootGame(canvas, onProgress = () => {}) {
  onProgress(8, 'Charting the Astral Scar…')
  const engine = new Engine(canvas)
  onProgress(18, 'Reading the expedition archive…')
  const profile = loadProfile()
  onProgress(30, 'Raising the five biomes…')
  const world = new World(engine.scene, profile.settings.quality)
  onProgress(62, 'Waking the wild creatures…')
  await nextFrame()
  const player = new Player(engine.scene, SPAWN)
  const wilds = new WildManager(engine.scene, world, profile, () => {
    const active = activeCreature(profile)
    return active?.level || 5
  })
  onProgress(84, 'Tuning real-time encounters…')
  await nextFrame()
  const game = new Game({ engine, profile, world, player, wilds })
  onProgress(100, 'Ready.')
  return game
}

function nowMs() {
  return Date.now()
}
