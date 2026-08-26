// ─── check-balloon-overflow.mjs ────────────────────────────────────────────
// IDENTIFICA (não corrige) todas as falas do Professor Maurílio que podem
// não caber no balão de fala de cada tela — achado real: L14 de AFD Parte 1,
// passo 1 da Aula Guiada, transborda visualmente pra fora do balão fixo
// (220×210px). Por pedido explícito: só levantar os casos agora, decidir a
// correção depois (fica em standby).
//
// Estimativa por word-wrap (sem DOM/Canvas — ver src/modules/afd/utils/
// balloonFit.js), calibrada visualmente contra o caso real do L14. É uma
// TRIAGEM, não um veredito pixel-perfect — casos perto do limite (linhas
// necessárias ≈ linhas disponíveis) merecem conferir no jogo antes de agir.
//
// Fontes de texto verificadas, cada uma contra o balão fixo real da tela
// onde aparece (ver BALLOON_PRESETS em balloonFit.js para as medidas):
//   - AFD Parte 1: guidedLesson[].text (HTML) + level.hint      → afdP1
//   - AFD Parte 2: level.hint (mesmo campo, balão menor)        → afdP2
//   - AFD Minimização: exercise.hint                            → afdMin
//   - AP: getLesson(level) → prof.message (narração) + level.hint → apMt
//   - MT Transdutora: guidedLesson → prof.message (por transição)  → apMt
//   - MT-Recon: guidedLesson → prof.message (por transição)        → apMt
//
// Uso: npx vite-node scripts/check-balloon-overflow.mjs

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fitsInBalloon, BALLOON_PRESETS } from '../src/modules/afd/utils/balloonFit.js';
import { AFD_LEVELS } from '../src/levels_data/afd/index.js';
import { EXERCISES as MIN_EXERCISES } from '../src/modules/afd/afdMinimizerExercises.js';
import { AP_LEVELS, getLesson as getApLesson } from '../src/levels_data/ap/index.js';
import { MT_LEVEL_ORDER, loadMTLevel } from '../src/levels_data/mt/index.js';
import { MT_RECON_LEVEL_ORDER, loadMTReconLevel } from '../src/levels_data/mt-recon/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Acha toda ocorrência de { prof: { message: "..." } } em qualquer profundidade
// — funciona para os diferentes formatos de guidedLesson (V1/V2/V3) sem
// precisar conhecer o schema exato de cada um.
function collectProfMessages(obj, pathSoFar = '') {
  const out = [];
  if (obj == null || typeof obj !== 'object') return out;
  if (obj.prof && typeof obj.prof === 'object' && typeof obj.prof.message === 'string') {
    out.push({ path: pathSoFar ? `${pathSoFar}.prof.message` : 'prof.message', text: obj.prof.message });
  }
  for (const [k, v] of Object.entries(obj)) {
    if (v && typeof v === 'object') collectProfMessages(v, pathSoFar ? `${pathSoFar}.${k}` : k).forEach(e => out.push(e));
  }
  return out;
}

const entries = []; // { module, levelId, label, source, preset, text }

// ── AFD Parte 1: guidedLesson[].text + level.hint (contra afdP1) ──────────
for (const level of AFD_LEVELS) {
  const label = level.label ?? `L${level.id}`;
  if (level.hint) {
    entries.push({ module: 'AFD-P1', levelId: level.id, label, source: 'hint', preset: 'afdP1', text: level.hint });
  }
  const gl = level.guidedLesson;
  if (Array.isArray(gl)) {
    gl.forEach((step, i) => {
      if (step?.text) entries.push({ module: 'AFD-P1', levelId: level.id, label, source: `guidedLesson[${i}]`, preset: 'afdP1', text: step.text });
    });
  }
  // AFD Parte 2 reusa o MESMO level.hint, num balão menor (App.css).
  if (level.hint) {
    entries.push({ module: 'AFD-P2', levelId: level.id, label, source: 'hint', preset: 'afdP2', text: level.hint });
  }
}

// ── AFD Minimização: exercise.hint (contra afdMin) ─────────────────────────
for (const ex of MIN_EXERCISES) {
  if (ex.hint) {
    entries.push({ module: 'AFD-Min', levelId: ex.id, label: ex.label ?? String(ex.id), source: 'hint', preset: 'afdMin', text: ex.hint });
  }
}

// ── AP: getLesson(level) → prof.message + level.hint (contra apMt) ────────
for (const level of AP_LEVELS) {
  const label = level.label ?? level.id;
  if (level.hint) {
    entries.push({ module: 'AP', levelId: level.id, label, source: 'hint', preset: 'apMt', text: level.hint });
  }
  if (level.impossible) continue; // sem lição derivável (sem gabarito)
  try {
    const lesson = getApLesson(level);
    const steps = Array.isArray(lesson) ? lesson : [];
    steps.forEach((step, i) => {
      const msg = step?.prof?.message;
      if (msg) entries.push({ module: 'AP', levelId: level.id, label, source: `lesson[${i}]`, preset: 'apMt', text: msg });
    });
  } catch (e) {
    console.warn(`[AP] ${label}: falha ao gerar a aula (${e.message}) — pulado.`);
  }
}

// ── MT Transdutora: guidedLesson → prof.message (contra apMt) ─────────────
for (const id of MT_LEVEL_ORDER) {
  const level = await loadMTLevel(id);
  const label = level.label ?? String(id);
  if (level.hint) {
    entries.push({ module: 'MT', levelId: id, label, source: 'hint', preset: 'apMt', text: level.hint });
  }
  for (const { path: p, text } of collectProfMessages(level.guidedLesson)) {
    entries.push({ module: 'MT', levelId: id, label, source: `guidedLesson.${p}`, preset: 'apMt', text });
  }
}

// ── MT-Recon: guidedLesson → prof.message (contra apMt) ────────────────────
for (const id of MT_RECON_LEVEL_ORDER) {
  const level = await loadMTReconLevel(id);
  const label = level.label ?? String(id);
  if (level.hint) {
    entries.push({ module: 'MT-Recon', levelId: id, label, source: 'hint', preset: 'apMt', text: level.hint });
  }
  for (const { path: p, text } of collectProfMessages(level.guidedLesson)) {
    entries.push({ module: 'MT-Recon', levelId: id, label, source: `guidedLesson.${p}`, preset: 'apMt', text });
  }
}

// ── Avaliação ────────────────────────────────────────────────────────────
const results = entries.map(e => ({ ...e, fit: fitsInBalloon(e.text, BALLOON_PRESETS[e.preset]) }));
const overflowing = results.filter(r => !r.fit.fits);

// ── Relatório ────────────────────────────────────────────────────────────
console.log(`Total de falas verificadas: ${results.length}`);
console.log(`Não cabem no balão (estimado): ${overflowing.length}\n`);

const byModule = {};
for (const r of overflowing) (byModule[r.module] ??= []).push(r);

for (const [mod, list] of Object.entries(byModule)) {
  console.log(`── ${mod}: ${list.length} caso(s) ──`);
  for (const r of list.slice(0, 8)) {
    const excess = r.fit.linesNeeded - r.fit.linesAvailable;
    const preview = r.text.replace(/\s+/g, ' ').slice(0, 70);
    console.log(`  ${r.label} [${r.source}] — precisa ${r.fit.linesNeeded}L, cabem ${r.fit.linesAvailable}L (+${excess}) :: "${preview}${r.text.length > 70 ? '…' : ''}"`);
  }
  if (list.length > 8) console.log(`  ... e mais ${list.length - 8}.`);
  console.log('');
}

// Relatório completo em arquivo (JSON), pra revisão detalhada depois.
const outPath = path.join(ROOT, 'docs', 'balloon_overflow_report.json');
fs.writeFileSync(outPath, JSON.stringify({
  generatedAt: new Date().toISOString(),
  totalChecked: results.length,
  totalOverflowing: overflowing.length,
  overflowing: overflowing.map(r => ({
    module: r.module, levelId: r.levelId, label: r.label, source: r.source,
    linesNeeded: r.fit.linesNeeded, linesAvailable: r.fit.linesAvailable,
    text: r.text,
  })),
}, null, 2), 'utf8');
console.log(`Relatório completo escrito em ${path.relative(ROOT, outPath)}`);
