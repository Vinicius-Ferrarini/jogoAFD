// ════════════════════════════════════════════════════════════════════════════
// pdaAlgorithms.js — núcleo PURO do Autômato com Pilha (AP / PDA)
//
// Convenções fixadas (ver PLAN_AUTOMATO_PILHA.md):
//  • Transição = { from, to, read, pop, push }. Campo '' (string vazia) = λ.
//  • A pilha é uma STRING: índice 0 = TOPO, último char = fundo. Inicial = "Z".
//    Empilhar "BA" coloca B no topo (1º char da string vira o novo topo).
//  • Aceitação = PILHA VAZIA (string "") após consumir toda a entrada. SEM estado final.
//  • AP é NÃO-determinístico → simular = busca sobre configurações (estado, pos, pilha).
//
// Tudo aqui é função pura e testável sem React/DOM.
// ════════════════════════════════════════════════════════════════════════════

// ─── Modelo do AP ─────────────────────────────────────────────────────────────
// pda = {
//   states:      [{ id, name, x, y, initial }],
//   transitions: [{ from, to, read, pop, push }],   // '' = λ
//   initial:     <stateId>,
//   stackBottom: 'Z',
// }

// Limites generosos o bastante para os exercícios da lista (Σ pequeno, N≤7), mas
// que cortam λ-ciclos que empilham para sempre.
const DEFAULT_LIMITS = { extraStack: 24, maxConfigs: 400000 };

// ─── parseJff: lê o XML do JFLAP (<type>pda</type>) → modelo do AP ─────────────
// Tags vazias (<read/>, <pop/>, <push/>) ou ausentes contam como λ ('').
export function parseJff(xml) {
  const states = [];
  let initial = null;

  const stateRe = /<state\s+id="(\d+)"\s+name="([^"]*)">([\s\S]*?)<\/state>/g;
  let m;
  while ((m = stateRe.exec(xml)) !== null) {
    const [, id, name, body] = m;
    const x = parseFloat((body.match(/<x>([\s\S]*?)<\/x>/) || [])[1]) || 0;
    const y = parseFloat((body.match(/<y>([\s\S]*?)<\/y>/) || [])[1]) || 0;
    const isInitial = /<initial\s*\/?>/.test(body);
    states.push({ id, name, x, y, initial: isInitial });
    if (isInitial) initial = id;
  }

  const tagVal = (block, name) => {
    const t = block.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
    return t ? t[1].trim() : ''; // <read/> e ausência ⇒ '' (λ)
  };

  const transitions = [];
  const transRe = /<transition>([\s\S]*?)<\/transition>/g;
  while ((m = transRe.exec(xml)) !== null) {
    const block = m[1];
    transitions.push({
      from: tagVal(block, 'from'),
      to:   tagVal(block, 'to'),
      read: tagVal(block, 'read'),
      pop:  tagVal(block, 'pop'),
      push: tagVal(block, 'push'),
    });
  }

  return { states, transitions, initial, stackBottom: 'Z' };
}

// ─── Alfabetos derivados ──────────────────────────────────────────────────────
// Σ = símbolos de entrada (reads ≠ λ). Γ = símbolos da pilha (pop/push) ∪ {fundo}.
export function deriveInputAlphabet(pda) {
  const s = new Set();
  for (const t of pda.transitions) if (t.read) s.add(t.read);
  return [...s].sort();
}
export function deriveStackAlphabet(pda) {
  const s = new Set([pda.stackBottom || 'Z']);
  for (const t of pda.transitions) {
    if (t.pop) s.add(t.pop);
    for (const ch of (t.push || '')) s.add(ch);
  }
  return [...s].sort();
}

// ─── Um passo: transições aplicáveis a uma config (q, pos, stack) ─────────────
// Aplicável se: from bate; read = λ ou casa com entrada[pos]; pop = λ ou topo == pop.
// Resultado: stack' = push + (stack sem topo, se pop≠λ); pos' = pos + (read≠λ ? 1:0).
function stepConfigs(pda, word, q, pos, stack) {
  const out = [];
  for (const t of pda.transitions) {
    if (t.from !== q) continue;
    if (t.read !== '' && (pos >= word.length || word[pos] !== t.read)) continue;
    if (t.pop !== '' && stack[0] !== t.pop) continue; // topo precisa casar (pilha vazia não casa)
    const afterPop = t.pop === '' ? stack : stack.slice(1);
    const nStack = (t.push || '') + afterPop; // 1º char do push vira topo
    const nPos = pos + (t.read === '' ? 0 : 1);
    out.push({ t, to: t.to, pos: nPos, stack: nStack });
  }
  return out;
}

// ─── pdaAccepts: a palavra é aceita por PILHA VAZIA? ──────────────────────────
export function pdaAccepts(pda, word, limits = DEFAULT_LIMITS) {
  if (pda.initial == null) return false;
  const maxStack = word.length + limits.extraStack;
  const start = pda.stackBottom || 'Z';
  const seen = new Set();
  const stackBuf = [{ q: pda.initial, pos: 0, stack: start }];
  let budget = limits.maxConfigs;

  while (stackBuf.length) {
    const { q, pos, stack } = stackBuf.pop();
    if (pos === word.length && stack === '') return true; // pilha vazia ⇒ aceita
    const key = `${q}|${pos}|${stack}`;
    if (seen.has(key)) continue;
    seen.add(key);
    if (--budget <= 0) return false; // teto de segurança
    for (const nx of stepConfigs(pda, word, q, pos, stack)) {
      if (nx.stack.length > maxStack) continue; // poda de altura (corta λ-ciclos que empilham)
      stackBuf.push({ q: nx.to, pos: nx.pos, stack: nx.stack });
    }
  }
  return false;
}

// ─── pdaAcceptingRun: uma computação aceitadora (p/ animar a pilha no SimPanel) ─
// Retorna a lista de passos { from, to, read, pop, push, posBefore, posAfter,
// stackBefore, stackAfter } da menor computação encontrada (BFS), ou null.
export function pdaAcceptingRun(pda, word, limits = DEFAULT_LIMITS) {
  if (pda.initial == null) return null;
  const maxStack = word.length + limits.extraStack;
  const start = pda.stackBottom || 'Z';
  const seen = new Set();
  const startKey = `${pda.initial}|0|${start}`;
  const queue = [{ q: pda.initial, pos: 0, stack: start, key: startKey }];
  const parent = new Map(); // key -> { prevKey, step }
  seen.add(startKey);
  let budget = limits.maxConfigs;

  while (queue.length) {
    const cur = queue.shift();
    if (cur.pos === word.length && cur.stack === '') {
      // reconstruir caminho
      const steps = [];
      let k = cur.key;
      while (parent.has(k)) { const p = parent.get(k); steps.unshift(p.step); k = p.prevKey; }
      return steps;
    }
    if (--budget <= 0) return null;
    for (const nx of stepConfigs(pda, word, cur.q, cur.pos, cur.stack)) {
      if (nx.stack.length > maxStack) continue;
      const nKey = `${nx.to}|${nx.pos}|${nx.stack}`;
      if (seen.has(nKey)) continue;
      seen.add(nKey);
      parent.set(nKey, {
        prevKey: cur.key,
        step: {
          from: cur.q, to: nx.to, read: nx.t.read, pop: nx.t.pop, push: nx.t.push,
          posBefore: cur.pos, posAfter: nx.pos, stackBefore: cur.stack, stackAfter: nx.stack,
        },
      });
      queue.push({ q: nx.to, pos: nx.pos, stack: nx.stack, key: nKey });
    }
  }
  return null;
}

// ─── Enumeração de palavras até comprimento N sobre Σ (inclui λ = '') ──────────
// Cap de segurança: se Σ for grande, reduz N para não estourar a contagem.
export function enumerateWords(alphabet, maxLen, cap = 6000) {
  const words = [''];
  let frontier = [''];
  for (let len = 1; len <= maxLen; len++) {
    const next = [];
    for (const w of frontier) for (const c of alphabet) next.push(w + c);
    if (words.length + next.length > cap) break; // respeita o teto
    words.push(...next);
    frontier = next;
  }
  return words;
}

// ─── buildBattery: a VERDADE vem do gabarito (roda o gabarito, particiona) ────
// extraWords: casos longos curados (também rotulados pelo gabarito).
// truth(word, gabaritoVerdict)?: corrige a verdade quando o enunciado diverge do
// gabarito só nas bordas (λ etc.); ausente ⇒ a verdade é o próprio gabarito.
export function buildBattery(gabarito, { maxLen = 7, extraWords = [], limits, truth } = {}) {
  const alphabet = deriveInputAlphabet(gabarito);
  const pool = new Set(enumerateWords(alphabet, maxLen));
  for (const w of extraWords) pool.add(w);

  const accepted = [], rejected = [];
  for (const w of pool) {
    const g = pdaAccepts(gabarito, w, limits);
    (truth ? truth(w, g) : g) ? accepted.push(w) : rejected.push(w);
  }

  const byLen = (a, b) => a.length - b.length || (a < b ? -1 : a > b ? 1 : 0);
  accepted.sort(byLen); rejected.sort(byLen);
  return { alphabet, maxLen, accepted, rejected };
}

// ─── validateStudentPda: AP do aluno tem que casar 100% com a bateria ─────────
// Devolve { ok, counterexample } onde counterexample é a MENOR palavra que falhou.
// expected = true (deveria aceitar) / false (deveria rejeitar); got = o que o AP fez.
export function validateStudentPda(student, battery, limits) {
  const cases = [
    ...battery.accepted.map(w => ({ w, expected: true })),
    ...battery.rejected.map(w => ({ w, expected: false })),
  ].sort((a, b) => a.w.length - b.w.length || (a.w < b.w ? -1 : a.w > b.w ? 1 : 0));

  for (const { w, expected } of cases) {
    const got = pdaAccepts(student, w, limits);
    if (got !== expected) return { ok: false, counterexample: { word: w, expected, got } };
  }
  return { ok: true, counterexample: null };
}

// ─── Helpers de exibição ──────────────────────────────────────────────────────
export const LAMBDA = 'λ';
export const showField = (v) => (v === '' || v == null ? LAMBDA : v);
// Label estilo JFLAP: "read, pop ; push" (λ para campos vazios).
export const transitionLabel = (t) =>
  `${showField(t.read)}, ${showField(t.pop)} ; ${showField(t.push)}`;
// Palavra vazia exibida como λ.
export const showWord = (w) => (w === '' ? LAMBDA : w);
