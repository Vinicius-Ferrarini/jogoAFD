import { describe, it, expect } from 'vitest';
import { AFD_LEVELS } from '../levels_data/afd/index.js';
import { LEVEL_GRAPHS } from '../levels_graphs.js';
import { readFileSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LEVELS_DIR = resolve(__dirname, '../levels_data/afd');

// "λ" (U+03BB) denotes the empty word in level word lists
function normalizeWord(w) {
  return w === 'λ' ? '' : w;
}

// Simulate a word through a (possibly partial) graph.
// Transitions may use multi-symbol labels like "a,b" — split and match each symbol.
// A missing transition in a partial graph means rejection (returns false).
function simulateGraph(graph, rawWord) {
  const word = normalizeWord(rawWord);
  const { nodes, transitions } = graph;
  const finals = new Set(nodes.filter(n => n.isFinal).map(n => n.id));
  const initial = nodes.find(n => n.isInitial);
  if (!initial) return false;

  let state = initial.id;
  for (const ch of word) {
    const t = transitions.find(
      t => t.from === state && t.symbol.split(',').map(s => s.trim()).includes(ch)
    );
    if (!t) return false;
    state = t.to;
  }
  return finals.has(state);
}

// Check whether a word belongs to the level's language.
// Prefers level.validate() when defined (some levels use it instead of regex).
// Returns null if no spec is available.
function levelAccepts(level, rawWord) {
  const word = normalizeWord(rawWord);
  if (typeof level.validate === 'function') return level.validate(word);
  if (level.regex instanceof RegExp)        return level.regex.test(word);
  return null;
}

// BFS word generator — yields '' then all words over alphabet up to maxLen
function* bfsWords(alphabet, maxLen) {
  if (alphabet.length === 0) { yield ''; return; }
  const queue = [''];
  while (queue.length > 0) {
    const w = queue.shift();
    yield w;
    if (w.length < maxLen) {
      for (const c of alphabet) queue.push(w + c);
    }
  }
}

const FUZZ_MAX_LEN = 8;

// ─── Suite 1: acceptedWords / rejectedWords ───────────────────────────────────
describe('AFD Levels — acceptedWords e rejectedWords', () => {
  for (const level of AFD_LEVELS) {
    const graph = LEVEL_GRAPHS[level.id];
    if (!graph) continue;
    if (level.impossible) continue;
    if (level.wordOnly) continue;

    const label = level.label ?? `L${level.id}`;

    for (const rawWord of (level.acceptedWords ?? [])) {
      const display = normalizeWord(rawWord) || 'λ';
      it(`${label}: grafo aceita "${display}" (acceptedWords)`, () => {
        expect(
          simulateGraph(graph, rawWord),
          `LEVEL_GRAPHS[${level.id}] rejeitou "${display}" mas ela está em acceptedWords`
        ).toBe(true);
      });
    }

    for (const rawWord of (level.rejectedWords ?? [])) {
      const display = normalizeWord(rawWord) || 'λ';
      it(`${label}: grafo rejeita "${display}" (rejectedWords)`, () => {
        expect(
          simulateGraph(graph, rawWord),
          `LEVEL_GRAPHS[${level.id}] aceitou "${display}" mas ela está em rejectedWords`
        ).toBe(false);
      });
    }
  }
});

// ─── Suite 2: Grafo ≡ especificação da linguagem (fuzz) ──────────────────────
describe('AFD Levels — grafo ≡ linguagem (fuzz até comprimento ' + FUZZ_MAX_LEN + ')', () => {
  for (const level of AFD_LEVELS) {
    const graph = LEVEL_GRAPHS[level.id];
    if (!graph) continue;
    if (level.impossible) continue;
    if (level.wordOnly) continue;
    // Need a language spec to compare against
    const hasSpec =
      typeof level.validate === 'function' ||
      (level.regex instanceof RegExp && level.regex.source !== '.*');
    if (!hasSpec) continue;

    const label = level.label ?? `L${level.id}`;

    const maxLen = level.fuzzMaxLen ?? FUZZ_MAX_LEN;
    it(`${label}: LEVEL_GRAPHS[${level.id}] ≡ spec para todas as palavras até comprimento ${maxLen}`, () => {
      let counterexample = null;
      for (const word of bfsWords(level.alphabet, maxLen)) {
        const graphResult = simulateGraph(graph, word);
        const specResult  = levelAccepts(level, word);
        if (specResult === null) continue;
        if (graphResult !== specResult) {
          counterexample = { word: word || 'λ', graphResult, specResult };
          break;
        }
      }
      expect(
        counterexample,
        counterexample
          ? `Contraexemplo em ${label}: palavra="${counterexample.word}" ` +
            `— grafo diz ${counterexample.graphResult}, spec diz ${counterexample.specResult}`
          : undefined
      ).toBeNull();
    });
  }
});

// ─── Suite 3: Consistência dos steps da aula guiada ──────────────────────────
describe('AFD Levels — steps da aula guiada', () => {
  for (const level of AFD_LEVELS) {
    if (!level.guidedLesson?.length) continue;
    const label = level.label ?? `L${level.id}`;

    level.guidedLesson.forEach((step, stepIdx) => {
      if (!step.simulateWord) return;
      const su = step.stateUpdate;
      if (!su?.nodes?.length) return;

      const isDidacticReject = step.expectedVerdict === 'reject';
      const word = normalizeWord(step.simulateWord) || 'λ';
      const verdictLabel = isDidacticReject ? 'rejeita (didático)' : 'aceita';

      it(`${label} step[${stepIdx}]: grafo parcial ${verdictLabel} "${word}"`, () => {
        const partialGraph = { nodes: su.nodes, transitions: su.transitions };
        const result = simulateGraph(partialGraph, step.simulateWord);

        if (isDidacticReject) {
          expect(
            result,
            `${label} step[${stepIdx}]: esperava REJEIÇÃO didática de "${word}" mas o grafo aceitou`
          ).toBe(false);
        } else {
          expect(
            result,
            `${label} step[${stepIdx}]: esperava ACEITAÇÃO de "${word}" mas o grafo rejeitou ` +
            `— pode estar faltando uma transição no stateUpdate`
          ).toBe(true);
        }
      });
    });
  }
});

// ─── Suite 4: Regressão L9 — transição q1→q3(c) faltando em _MANUAL ─────────
//
// _MANUAL[9] em levels_graphs.js não tem q1→q3(c), então "ac" seria rejeitada
// mesmo pertencendo a a⁺b*c*. JFLAP_GRAPHS[9] sobrescreve e corrige, mas este
// teste garante que nunca regredirá.
describe('L9 regressão — transição q1→q3(c)', () => {
  const L9 = AFD_LEVELS.find(l => l.id === 9);
  const graph9 = LEVEL_GRAPHS[9];

  it('LEVEL_GRAPHS[9] aceita "ac" (a¹b⁰c¹ ∈ a⁺b*c*)', () => {
    expect(graph9).toBeDefined();
    expect(simulateGraph(graph9, 'ac')).toBe(true);
  });

  it('LEVEL_GRAPHS[9] tem a transição q1→q3 com símbolo "c"', () => {
    expect(graph9).toBeDefined();
    const hasTransition = graph9.transitions.some(
      t => t.from === 'q1' && t.to === 'q3' &&
           t.symbol.split(',').map(s => s.trim()).includes('c')
    );
    expect(hasTransition).toBe(true);
  });

  it('regex L9 /^a+b*c*$/ aceita "ac"', () => {
    expect(L9).toBeDefined();
    expect(L9.regex.test('ac')).toBe(true);
  });

  it('LEVEL_GRAPHS[9] fuzz: sem contraexemplo vs /^a+b*c*$/ para palavras ≤ comprimento 8', () => {
    expect(graph9).toBeDefined();
    for (const word of bfsWords(['a', 'b', 'c'], 8)) {
      const graphResult = simulateGraph(graph9, word);
      const regexResult = /^a+b*c*$/.test(word);
      if (graphResult !== regexResult) {
        expect.fail(
          `L9 contraexemplo: palavra="${word || 'λ'}" grafo=${graphResult} regex=${regexResult}`
        );
      }
    }
  });
});

// ─── Suite 5: Bounding Box das coordenadas das aulas guiadas (L*.js) ──────────
// Zona segura: X ∈ [4, 88]  Y ∈ [2, 28]
// Apenas arquivos L<N>.js (sem _jflap) são verificados.
describe('Validação de Coordenadas da Aula Guiada (Bounding Box)', () => {
  const X_MIN = 4, X_MAX = 88, Y_MIN = 2, Y_MAX = 28;

  // Match: q0: [x, y]  or  q10: [ x , y ]
  const COORD_RE = /\b(q\d+)\s*:\s*\[\s*(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*\]/g;

  const lessonFiles = readdirSync(LEVELS_DIR)
    .filter(f => /^L\d+\.js$/.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/\d+/)[0], 10);
      const nb = parseInt(b.match(/\d+/)[0], 10);
      return na - nb;
    });

  for (const filename of lessonFiles) {
    it(`${filename}: todas as coordenadas dentro de X[${X_MIN}-${X_MAX}] Y[${Y_MIN}-${Y_MAX}]`, () => {
      const src = readFileSync(resolve(LEVELS_DIR, filename), 'utf8');
      const violations = [];

      for (const m of src.matchAll(COORD_RE)) {
        const [, node, rawX, rawY] = m;
        const x = parseFloat(rawX);
        const y = parseFloat(rawY);
        if (x < X_MIN || x > X_MAX || y < Y_MIN || y > Y_MAX) {
          violations.push(`${node}: [${x}, ${y}]`);
        }
      }

      expect(
        violations,
        violations.length
          ? `Violações em ${filename}:\n` + violations.map(v => `  ${v}`).join('\n')
          : undefined
      ).toHaveLength(0);
    });
  }
});
