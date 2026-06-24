// ════════════════════════════════════════════════════════════════════════════
// levels_ap.js — exercícios do módulo Autômato com Pilha (AP / PDA)
//
// Fonte única da verdade da VALIDAÇÃO: o gabarito .jff de cada exercício
// (gabaritos_jflap/ap/Lk.jff), parseado e rodado pela bateria de testes
// (ver utils/pdaAlgorithms.js → buildBattery / validateStudentPda).
//
// O texto do `language` é o ENUNCIADO informado pelo usuário (o que o aluno lê).
// Quando o gabarito .jff diverge do enunciado só nas bordas (λ / contadores em
// zero), o exercício traz `truth(word, gabaritoVerdict)` que corrige a verdade da
// validação para casar com o enunciado (sem editar os .jff).
// ════════════════════════════════════════════════════════════════════════════
import {
  parseJff, buildBattery, deriveInputAlphabet, deriveStackAlphabet,
} from '../../modules/ap/utils/pdaAlgorithms.js';
import { buildApLesson } from '../../modules/ap/utils/buildApLesson.js';

// ── Gabaritos .jff crus (Vite ?raw). Única fonte; se o .jff mudar, o jogo segue. ─
const RAW = import.meta.glob('../../../gabaritos_jflap/ap/*.jff', {
  query: '?raw', import: 'default', eager: true,
});
function gabarito(name) {
  const key = Object.keys(RAW).find((k) => k.endsWith(`/${name}.jff`));
  if (!key) throw new Error(`gabarito ${name}.jff não encontrado`);
  return parseJff(RAW[key]);
}

// ── Metadados por exercício (enunciado, dificuldade, dica, divergência) ───────
// language = texto exato do usuário. note = divergência com o .jff (ou null).
// `truth(word, gabaritoVerdict)` (opcional): a VERDADE da linguagem quando o
// gabarito .jff diverge do enunciado só nas bordas (λ / contadores em zero).
// É derivada do veredito do gabarito + ajuste mínimo — sem editar os .jff.

import L1_META from './L1.js';
import L2_META from './L2.js';
import L3_META from './L3.js';
import L4_META from './L4.js';
import L5_META from './L5.js';
import L6_META from './L6.js';
import L7_META from './L7.js';
import L8_META from './L8.js';
import L9_META from './L9.js';
import L10_META from './L10.js';
import L11_META from './L11.js';
import L12_META from './L12.js';
import L13_META from './L13.js';
import L14_META from './L14.js';
import L15_META from './L15.js';
import L16_META from './L16.js';

const META = {
  L1: L1_META,
  L2: L2_META,
  L3: L3_META,
  L4: L4_META,
  L5: L5_META,
  L6: L6_META,
  L7: L7_META,
  L8: L8_META,
  L9: L9_META,
  L10: L10_META,
  L11: L11_META,
  L12: L12_META,
  L13: L13_META,
  L14: L14_META,
  L15: L15_META,
  L16: L16_META,
};

// ── Monta a lista de exercícios (combina META + gabarito parseado) ────────────
// Ordem NUMÉRICA (L1, L2, …, L15); rótulo exibido com zero à esquerda (L01…L15).
export const AP_LEVELS = Object.keys(META)
  .map((id) => {
    const m = META[id];
    const num = Number(id.slice(1));
    const base = {
      id,
      title: id,
      label: 'L' + String(num).padStart(2, '0'),
      level: m.level,
      language: m.language,
      hint: m.hint,
      truth: m.truth,
      apLesson: m.apLesson, // narração à mão (opcional); senão auto-derivada
    };
    // Nível impossível: sem gabarito .jff (não há AP que o resolva).
    if (m.impossible) {
      return {
        ...base, impossible: true, note: m.note, solution: null,
        alphabet: m.alphabet ?? [], stackAlphabet: m.stackAlphabet ?? [], stackBottom: 'Z',
      };
    }
    const solution = gabarito(id);
    return {
      ...base,
      solution,
      alphabet: deriveInputAlphabet(solution),
      stackAlphabet: deriveStackAlphabet(solution),
      stackBottom: solution.stackBottom || 'Z',
    };
  })
  .sort((a, b) => Number(a.id.slice(1)) - Number(b.id.slice(1)));

export const getLevel = (id) => AP_LEVELS.find((l) => l.id === id);

// ── Bateria de testes (memoizada por exercício) ───────────────────────────────
// Comprimento adaptativo: Σ pequeno cobre mais fundo (barato); Σ grande limita.
const _batteryCache = new Map();
export function getBattery(level) {
  if (_batteryCache.has(level.id)) return _batteryCache.get(level.id);
  const k = level.alphabet.length;
  const maxLen = k <= 2 ? 9 : k === 3 ? 7 : 6;
  const battery = buildBattery(level.solution, { maxLen, truth: level.truth });
  _batteryCache.set(level.id, battery);
  return battery;
}

// ── Aula Guiada (memoizada por exercício) ─────────────────────────────────────
// Usa a narração à mão (level.apLesson) se existir; senão auto-deriva do gabarito.
const _lessonCache = new Map();
export function getLesson(level) {
  if (_lessonCache.has(level.id)) return _lessonCache.get(level.id);
  const lesson = level.apLesson ?? buildApLesson(level, getBattery(level));
  _lessonCache.set(level.id, lesson);
  return lesson;
}
