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
} from './utils/pdaAlgorithms.js';
import { buildApLesson } from './utils/buildApLesson.js';

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
const META = {
  L1:  { level: 'easy',   language: '{ aⁿbⁿ / n > 0 }',
         hint: 'Empilhe um símbolo para cada "a"; desempilhe um para cada "b". Esvazie a pilha no fim.',
         truth: (w, g) => g && w !== '' },
  L2:  { level: 'medium', language: '{ aⁿbᵐcⁿ / n > 0, m > 0 }',
         hint: 'Conte os "a" na pilha, deixe os "b" passarem sem mexer, e gaste a pilha nos "c".' },
  L3:  { level: 'easy',   language: '{ aⁿb²ⁿ / n > 0 }',
         hint: 'Cada "a" vale DOIS na pilha; cada "b" desempilha um.' },
  L4:  { level: 'easy',   language: '{ a²ⁿbⁿ / n ≥ 0 }',
         hint: 'A cada DOIS "a" empilhe um símbolo; cada "b" desempilha um. Aceita λ.' },
  L5:  { level: 'hard',   language: '{ aⁿbᵐcᵐdⁿ / n > 0, m > 0 }',
         hint: 'Pilha em camadas: "a" no fundo, "b" por cima; "c" gasta os "b", "d" gasta os "a".',
         truth: (w, g) => g && /a/.test(w) && /b/.test(w) && /c/.test(w) && /d/.test(w) },
  L6:  { level: 'medium', language: '{ w ∈ {a,b}* / w tem quantidade igual de a e de b }',
         hint: 'Use a pilha como contador com sinal: empilhe o que sobra, cancele com o oposto.' },
  L7:  { level: 'hard',   language: '{ aⁿb³ᵐcᵐd²ⁿ / n ≥ 0 e m ≥ 0 }',
         hint: 'Duas contagens independentes: a↔d (1 para 2) e b↔c (3 para 1).',
         truth: (w, g) => g || w === '' },
  L8:  { level: 'medium', language: '{ aⁱbʲcᵏ / i = j + k, e j ≥ 0 e k ≥ 0 }',
         hint: 'Empilhe um por "a"; tanto "b" quanto "c" desempilham um.' },
  L9:  { level: 'medium', language: '{ aⁱbʲcᵏ / k = i + j, i ≥ 0, j ≥ 0 }',
         hint: '"a" e "b" empilham; "c" desempilha. A pilha esvazia quando #c = #a+#b.',
         truth: (w, g) => g || w === '' },
  L10: { level: 'medium', language: '{ aⁱbʲcᵏ / j = i + k, j ≥ 0, k ≥ 0 }',
         hint: 'Os "b" primeiro cancelam os "a", depois sobram para os "c" cancelarem.',
         truth: (w, g) => g || w === '' },
  L11: { level: 'hard',   language: '{ aⁿbⁿcᵐdᵐ / n ≥ 0, m ≥ 0 }',
         hint: 'Dois blocos casados em sequência: aⁿbⁿ e depois cᵐdᵐ, cada um esvaziando o seu.',
         truth: (w, g) => g || w === '' },
  L12: { level: 'easy',   language: '{ aⁿb²ⁿ⁺¹ / n > 0 }',
         hint: 'O primeiro "a" já empilha TRÊS; cada "a" seguinte empilha mais dois. "b" desempilha.' },
  L13: { level: 'easy',   language: '{ aⁿb²ⁿ⁺² / n > 0 }',
         hint: 'Igual ao L12, mas o primeiro "a" empilha QUATRO (dois a mais).' },
  L14: { level: 'easy',   language: '{ aⁿbⁿ/² / n > 0 e n é par }',
         hint: 'A cada DOIS "a" sobra um símbolo na pilha; cada "b" desempilha um.' },
  L15: { level: 'easy',   language: '{ aⁿbⁿ/³ / n > 0 e n é múltiplo de 3 }',
         hint: 'A cada TRÊS "a" sobra um símbolo na pilha; cada "b" desempilha um.' },
};

// ── Monta a lista de exercícios (combina META + gabarito parseado) ────────────
// Ordem NUMÉRICA (L1, L2, …, L15); rótulo exibido com zero à esquerda (L01…L15).
export const AP_LEVELS = Object.keys(META)
  .map((id) => {
    const solution = gabarito(id);
    const m = META[id];
    const num = Number(id.slice(1));
    return {
      id,
      title: id,
      label: 'L' + String(num).padStart(2, '0'),
      level: m.level,
      language: m.language,
      hint: m.hint,
      truth: m.truth,
      apLesson: m.apLesson, // narração à mão (opcional); senão auto-derivada
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
