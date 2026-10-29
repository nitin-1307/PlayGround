# Astra Creatures

A browser-based creature-collecting survival RPG built with Vite, Three.js, and vanilla JavaScript. Explore five elemental biomes, battle in real time, collect and evolve 150 species, train a party, complete bounties, and hunt rotating legendary events. Progress saves locally in the browser.

## Play

```bash
npm install
npm run dev
```

Open `http://localhost:3002`.

The project uses procedural Three.js assets and has no backend or runtime asset downloads. Use a current desktop or mobile browser with WebGL support.

## Controls

| Action | Desktop | Touch |
| --- | --- | --- |
| Move | `WASD` / arrow keys | Virtual joystick |
| Look / camera | Drag or move the mouse | Drag the scene |
| Interact | `E` | Interact button |
| Sprint | `Shift` | Sprint button |
| Use move | `1`–`4` | Move buttons |
| Dodge | `Q` / `Space` | Dodge button |
| Capture | `F` | Capture button |
| Use salve | `R` | Salve button |
| Retreat | `Esc` | Retreat button |
| Dex / Party | `C` / `P` | HUD buttons |
| Training / Quests | `T` / `J` | HUD buttons |
| Inventory / Settings | `I` / `O` | HUD buttons |

## Features

- 150 species across eight elemental types, with learnsets, evolutions, rarities, and procedural meshes.
- Six explorable areas: the Hearthlight Haven hub and Verdant, Ember, Tide, Frost, and Astral biomes.
- Real-time arena battles with cooldowns, dodging, telegraphed attacks, statuses, capture chances, and party support XP.
- Party and storage management, dex tracking, quests, bounties, shop inventory, healing, and training.
- Rotating legendary warnings and spawns, including the ultra-rare Luminarch.
- Keyboard, mouse, and touch controls with responsive HUD and modal layouts.
- Versioned `localStorage` saves with repair logic for stale or invalid references.

## Project layout

```text
src/
  core/       Engine, input, seeded RNG, save schema, and profile helpers
  data/       Species, moves, items, quests, and type definitions
  systems/    Battle, economy, quests, training, legendary events, and shared helpers
  world/      Exploration world, player, wild spawning, creature meshes, and battle scene
  ui/         HUD, screens, portraits, and DOM rendering
  game.js     Game orchestration and mode transitions
scripts/      Content validation
test/         Node test suites
```

## Checks

```bash
npm run check   # Validate content references and table integrity
npm test        # Run the Node test suites
npm run build   # Produce the static build in dist/
npm run preview # Serve the production build on port 3002
```

## Build ledger

Last verified: 2026-10-29.

| Check | Result |
| --- | --- |
| `npm run check` | Pass: 150 species, 58 moves, 8 bounties, 7 items |
| `npm test` | Pass: 29/29 tests |
| `npm run build` | Pass: 29 modules transformed; static output in `dist/` |
| Browser smoke test | Pass at 1000×720 desktop and 360×732 mobile; 0 console errors |
| Mobile battle | Pass: joystick movement, touch actions, and end-of-battle transition |

Browser captures were rendered with Chromium and SwiftShader CPU software rendering. No GPU hardware acceleration is claimed. Verified flows include onboarding, exploration, wild and practice battles, defeat/victory/capture results, party and inventory, shop, fountain healing, quests, training, legendary capture, save reload, and mobile layouts.

## Notes

- This is an original browser adaptation of the supplied design brief.
- All art and audio-adjacent presentation are generated procedurally; no external game assets are bundled.
- The OMGithub section below is managed by the platform.

<!-- omgithub:readme:start -->
## 🚀 Build, play, and remix with OMGithub

**Created using [OMGithub.com](https://omgithub.com).**

[![OMGithub](https://img.shields.io/badge/OMGithub-Open%20project-orange?style=for-the-badge)](https://omgithub.com/nitin-1307/PlayGround)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?logo=github&style=for-the-badge)](https://github.com/nitin-1307/PlayGround)

- 🎮 [Open the project](https://omgithub.com/nitin-1307/PlayGround).
- ✨ [Remix this project](https://omgithub.com/?remix=nitin-1307%2FPlayGround).
- 💻 [Explore the source](https://github.com/nitin-1307/PlayGround).
- 🛠️ [Check build runs](https://github.com/nitin-1307/PlayGround/actions).
- 🐛 [Report an issue](https://github.com/nitin-1307/PlayGround/issues).
- 👤 [Explore the creator's projects](https://omgithub.com/nitin-1307).
- 🌍 [Create with OMGithub](https://omgithub.com).
<!-- omgithub:readme:end -->
