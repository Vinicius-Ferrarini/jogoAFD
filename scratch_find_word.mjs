// Busca a menor palavra (dentro de um alfabeto e comprimento máximo) que,
// simulada no grafo final de um nível de MT, cobre um conjunto-alvo de
// transições (as que o passo "cobrir todos os casos" ia despejar sem teste).
//
// Uso: node scratch_find_word.mjs <arquivo.js> <maxLen> [alfabetoExtra]
import { readFileSync } from 'fs';
import { pathToFileURL } from 'url';
import { resolve } from 'path';

const [, , relPath, maxLenArg] = process.argv;
const maxLen = parseInt(maxLenArg || '10', 10);

// Alfabeto de entrada real (Σ) — importa o módulo via ESM (funciona mesmo com
// chaves de topo não citadas, já que Node interpreta como JS de verdade) só
// pra ler esse campo; a extração cirúrgica do array `steps` abaixo continua
// via JSON.parse (mais robusta pra reescrita, mas não dá acesso a campos
// fora do array).
const levelModule = await import(pathToFileURL(resolve(relPath)).href);
const declaredAlphabet = levelModule.default?.alphabet;

const src = readFileSync(relPath, 'utf8');
const stepsKeyIdx = src.indexOf('steps:');
const arrStart = src.indexOf('[', stepsKeyIdx);
let depth = 0, arrEnd = -1;
for (let i = arrStart; i < src.length; i++) {
  if (src[i] === '[') depth++;
  else if (src[i] === ']') { depth--; if (depth === 0) { arrEnd = i; break; } }
}
const steps = JSON.parse(src.slice(arrStart, arrEnd + 1));

const problemIdx = steps.findIndex(s => s.prof?.message?.includes('cobrir todos os casos'));
const prev = steps[problemIdx - 1];
const key = t => `${t.from}|${t.to}|${t.read}|${t.write}|${t.move}`;
const prevSet = new Set(prev.stateUpdate.transitions.map(key));
const target = new Set(steps[problemIdx].stateUpdate.transitions.filter(t => !prevSet.has(key(t))).map(key));
console.log('target transitions:', target.size);
for (const k of target) console.log(' ', k);

const introIdx = steps.findIndex(s => s.formalIntro);
const finalGraph = steps[introIdx - 1].stateUpdate;
const allTransitions = finalGraph.transitions;
const initId = finalGraph.nodes.find(n => n.isInitial)?.id;
const finalId = finalGraph.nodes.find(n => n.isFinal)?.id;

function findTransition(state, sym) {
  return allTransitions.find(t => t.from === state && (t.read === sym || (t.read === '' && sym === '□')));
}

const startMarker = levelModule.default?.startMarker ?? null;

function traceUsed(word) {
  let tape = ['□', '□', ...(startMarker != null ? [startMarker] : []), ...word.split(''), '□', '□'];
  let head = 2, state = initId;
  const used = new Set();
  for (let s = 0; s < 3000; s++) {
    if (state === finalId) return { accepted: true, used };
    const sym = tape[head] ?? '□';
    const t = findTransition(state, sym);
    if (!t) return { accepted: false, used };
    used.add(key(t));
    if (t.write !== '') tape[head] = t.write;
    if (t.move === 'R') head++; else if (t.move === 'L') head--;
    state = t.to;
    if (head < 0) { tape.unshift('□'); head = 0; }
    if (head >= tape.length) tape.push('□');
  }
  return { accepted: 'LOOP', used };
}

// Alfabeto de entrada: usa o campo `alphabet` declarado no nível quando
// disponível (mais confiável — cobre dígitos, +, =, etc.); cai pra um guess
// por regex (símbolos minúsculos usados como "read") só se não existir.
const alphabet = declaredAlphabet && declaredAlphabet.length > 0
  ? declaredAlphabet
  : [...new Set(allTransitions.filter(t => /^[a-z0-9+=]$/.test(t.read)).map(t => t.read))].sort();
console.log('alphabet:', alphabet, declaredAlphabet ? '(do nível)' : '(guess)');

function* gen(alphabet, maxLen) {
  for (let len = 1; len <= maxLen; len++) {
    function* rec(prefix, remaining) {
      if (remaining === 0) { yield prefix; return; }
      for (const c of alphabet) yield* rec(prefix + c, remaining - 1);
    }
    yield* rec('', len);
  }
}

let best = null, bestCoverage = 0;
for (const w of ['', ...gen(alphabet, maxLen)]) {
  const { accepted, used } = traceUsed(w);
  if (accepted !== true) continue;
  const covered = [...target].filter(k => used.has(k)).length;
  if (covered > bestCoverage || (covered === bestCoverage && best && w.length < best.length)) {
    bestCoverage = covered;
    best = w;
  }
  if (covered === target.size) { console.log('FOUND full coverage:', w); process.exit(0); }
}
console.log('best found (partial):', best, bestCoverage, '/', target.size);
