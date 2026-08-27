# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

**TuringLab** (repo name `jogoAFD`) is a React + Vite educational game that teaches formal automata
theory — Deterministic Finite Automata (AFD), Pushdown Automata (AP), and Turing Machines (MT,
recognizer + transducer) — through an interactive comic/gibi-styled UI (neo-brutalism, Comic Sans,
black borders, `#fff9c4`), narrated by the character professor **Maurílio**. It also doubles as a
research instrument (Brazilian Portuguese *Iniciação Científica*): anonymous, opt-in telemetry
(Google Analytics 4 + optional Firebase) records attempts, errors, and time-per-exercise to study
how students actually learn these models. See `README.md` for the full feature list and star-rating
rules per module — they're detailed there and not repeated here.

All in-game and code comments are in **Portuguese**; match that convention when editing existing files.

## Commands

```bash
npm run dev              # start dev server (Vite, http://localhost:5173)
npm run build            # production build (dist/)
npm run lint             # ESLint over the whole repo
npm run test             # Vitest — full suite, single run
npm run test:watch       # Vitest — watch mode
npm run test:e2e         # Playwright E2E suite
npm run validate:levels  # vite-node scripts/validate_levels.js — static level-data sanity checks
```

Run a single Vitest file or test by name:
```bash
npx vitest run src/__tests__/afd_levels.test.js
npx vitest run -t "some test name substring"
```

Vitest config (`vitest.config.js`): Node environment, single-threaded pool, and a **10-minute**
timeout per test/hook — `afd_levels.test.js` alone runs ~700+ fuzz tests (BFS-enumerated words up to
length 8 against every level's graph) and legitimately takes 60+ seconds. Don't assume a slow test
run is hung.

### ESLint warnings that are expected, not bugs

`eslint.config.js` deliberately downgrades several `eslint-plugin-react-hooks` v7 rules
(`react-hooks/immutability`, `set-state-in-effect`, `preserve-manual-memoization`, `use-memo`, `refs`)
to `warn`. These are React Compiler–oriented rules; **this project does not use the React Compiler**,
so they routinely fire on intentional, hand-written patterns (mutating a ref outside an effect,
hydrating state from a prop in an effect, manual `useCallback` deps). A pre-existing warning count in
`npx eslint <file>` is not evidence of a regression — compare before/after your change (e.g. via
`git stash`) rather than treating any warning as something to fix.

## Architecture

### Routing: no router, one state machine

`src/App.jsx` is the central router — there is no `react-router` or URL-based navigation. Screens are
selected by a `screen` state string (`HOME`, `MODULES`, `GAME`, …) plus `currentModule`. Every game
module (`AFDPart1`, `AFDPart2`, `AFDMinimizer`, `APPart1`, `MTPart1`, `MTReconPart1`, `BossTrabalho`,
`BossProva`, `WordGuess`) is lazy-loaded via `React.lazy()` — keep new modules lazy too, and see
"Level data" below before adding a static import to a file that App.jsx/MainMenu.jsx loads eagerly.

### Level data: one file per level, two different loading strategies

Each exercise ("nível"/"fase") lives in its own file under `src/levels_data/<module>/L<n>.js`
(e.g. `src/levels_data/afd/L8.js`), exporting a metadata object (formula, alphabet, `shortestWord`,
accepted/rejected word batteries, tutorial dialog, and often a `guidedLesson` array of narrated
step-by-step frames for "Modo Aula"). An `index.js` per module aggregates them.

- **AFD** (`levels_data/afd/index.js`): all 61 levels imported **statically** into one `AFD_LEVELS`
  array. `src/levels.js` (imported eagerly by `App.jsx`/`MainMenu.jsx` for the home screen's star
  count) deliberately does **not** re-export the heavy `AFD_LEVELS`/`GAME_LEVELS` — only the
  lightweight `LEVEL_IDS`/`LEVEL_DIFFICULTY`. Re-exporting the heavy array from `levels.js` was tried
  and made Rollup pull the whole payload into the always-loaded entry chunk (see
  `docs/OPTIMIZATION_PROGRESS.md`); the heavy array is imported directly from
  `levels_data/afd/index.js` only by files already inside a lazy chunk (`AFDPart1.jsx`,
  `AFDPart2.jsx`, `EndScreen.jsx`, `ExerciseScreen.jsx`, `LevelMenu.jsx`).
- **MT** (`levels_data/mt/index.js`): the opposite strategy — each level is loaded via a **dynamic
  `import()`**, cached after first resolution, because MT's `guidedLesson` payload is enormous (L23/L24
  alone are ~15MB of source each — 904 narrated "prof" steps per level). `MTPart1.jsx` silently
  prefetches all of them in parallel on menu open without blocking the screen. See ADR 0006
  (`docs/adr/0006-carregamento-niveis-mt-import-dinamico.md`).

`UNAVAILABLE_LEVELS`/`HIDDEN_LEVELS`/`UNAVAILABLE_LEVELS_P2_ONLY` (`src/levels.js`) gate which levels
render at all — hidden levels (currently L1-L4 in AFD) render no button, unavailable ones render
disabled. **L14** (`|w|ₐ = |w|_b`) is a deliberate exception: a provably non-regular language kept
playable in AFD Part 1 as a lesson about the model's limits, but blocked in AFD Part 2 (no valid graph
exists to show). Several other AFD-only mechanics (e.g. the Wordle-style "menor palavra" grid,
`WORDLE_GRID_LEVEL_IDS` in `AFDPart1.jsx`) exclude L14 the same way — check for that pattern before
assuming a feature should cover every level uniformly.

### `modules/<name>/` layout

Each game module (`afd`, `ap`, `mt`, `mt-recon`, `boss`, `word-guess`) follows roughly:
- One top-level `*Part1.jsx` (or similarly named) orchestrator component holding most of the state.
- `hooks/` — the module's stateful logic (graph state, undo/redo, guided lesson stepping, telemetry).
- `components/` — presentational pieces (canvas, panels, header, footer deck of cards).
- `utils/` — pure functions (word tracing, algorithms, formatting) — prefer testing here.

`src/modules/shared/` holds logic reused **across** modules — notably `useWordGuessGame.js` (the
Termo/Wordle-style grid mechanic used both by the AFD-in-game "descubra a menor palavra" step and by
the standalone `word-guess` minigame) and `wordExercises/` (adapters — `fromAFD.js`, `fromAP.js`,
`fromMTRecon.js` — that convert each module's native level format into a common shape for the
"Menor Palavra" minigame, deduplicating identical languages across modules via
`normalizeLanguage.js`/`dedupedLevelIds.js`).

### Canvas / graph engine is intentionally duplicated

AFD, AP, and MT each have their own `CanvasArea`-equivalent component for drag-and-drop graph
building rather than a single shared engine (see ADR 0007, `docs/adr/0007-canvas-duplicado-nao-extraido.md`
— extraction was evaluated and explicitly rejected). AP did later migrate onto AFD's canvas engine
specifically (ADR 0008), so AFD and AP share more than MT does — check ADR 0007/0008 before assuming
a canvas fix in one module should be ported to all three, and before attempting to extract a "shared
canvas" abstraction.

### Guided Lesson ("Modo Aula") is auto-derived, not hand-scripted

Rather than a hand-written script per exercise, each module derives its narrated walkthrough from the
same answer-key data used to validate the player's solution (ADR 0005,
`docs/adr/0005-modo-aula-auto-derivado-do-gabarito.md`):
- AFD Minimization: `useMinimizationGame.js` generates step frames from the same memoized answer key.
- AP: `buildApLesson.js` derives the lesson from each transition's `(read, pop, push)` triple.
- MT: each transition carries its own narration string (`"prof": "..."`) consumed by
  `useMTGuidedLesson`, shared between MT Recognizer and MT Transducer.

When adding/editing a level that has a `guidedLesson`, prefer deriving new steps from existing
graph/answer data rather than hand-authoring a parallel script.

### Validation is battery-based, not purely analytic

AP levels are validated against a battery of accepted/rejected test words (`truth`/`checkWord`
functions), not by formally proving language equivalence (ADR 0003). AP accepts by **empty stack**,
not final state (ADR 0002) — `pdaAccepts`/`pdaAcceptingRun`/`pdaRejectingTrace` in
`src/modules/ap/utils/pdaAlgorithms.js` implement this via BFS. When a level is rejected, prefer
showing *where the student's own automaton gets stuck* (`pdaRejectingTrace`) over showing how the
answer key would have accepted it — that's the established UX pattern here (see `APPart1.jsx`'s
`validate` callback wiring `res.rejectReason` into `APSimPanel`).

### Telemetry is consent-gated

`src/services/telemetry.js` wraps GA4 (`logEvent`) and only sends anything after explicit opt-in via
`ConsentGate` (ADR 0009). `hasConsent()` gates every call site — don't add a `logEvent` call that
fires unconditionally. There's no app-specific user ID; identity is GA4's own anonymous client ID.

### Progress persistence

`localStorage['turinglab_progress']` is a flat map from a level-scoped key to `{ stars, timestamp }`,
updated via `App.jsx`'s `updateProgress(moduleId, stars, extras)` (only overwrites if the new star
count is higher — never regresses). Boss Mode (Trabalho/Prova) and the "Menor Palavra" minigame write
to their own key namespaces (`boss-trabalho-{id}`, `boss-prova-{id}`, `word-guess-{id}`) so they don't
double-count against the same exercise's normal-mode stars; `starTotals.js` explicitly excludes
`boss-*` keys from the home screen's total.
