// ─── Pair key utility ─────────────────────────────────────────────────────────
export const pairKey = (a, b) => a <= b ? `${a},${b}` : `${b},${a}`;

// ─── Step 1: reachable states via BFS from the initial state ───────────────────
// Returns a Set with every state reachable from initialState. States not in the
// set are unreachable and must be discarded before minimizing.
export function computeReachable(states, initialState, transitions) {
  const reachable = new Set([initialState]);
  const queue = [initialState];
  while (queue.length) {
    const s = queue.shift();
    for (const t of transitions) {
      if (t.from === s && !reachable.has(t.to)) {
        reachable.add(t.to);
        queue.push(t.to);
      }
    }
  }
  return reachable;
}

// ─── Completude de δ (função total) ───────────────────────────────────────────
// Varre O(|Q|·|Σ|) e devolve os pares (estado, símbolo) SEM transição definida.
// Lista vazia ⇒ a função δ é total (todo estado tem saída para cada símbolo),
// pré-requisito para minimizar. Não é algoritmo de minimização — só validação.
export function isTotalDelta(states, alphabet, transitions) {
  const missing = [];
  for (const state of states)
    for (const symbol of alphabet)
      if (!transitions.some(t => t.from === state && t.symbol === symbol))
        missing.push({ state, symbol });
  return missing;
}

// ─── Step 3: trivial distinguishability (final × non-final) ───────────────────
// A par {p,q} is trivially distinguishable when exactly one of them is final.
export function computeTrivialTable(states, finalStates) {
  const table = {};
  const finals = new Set(finalStates);
  for (let i = 0; i < states.length; i++)
    for (let j = i + 1; j < states.length; j++) {
      const [p, q] = [states[i], states[j]];
      table[pairKey(p, q)] = finals.has(p) !== finals.has(q);
    }
  return table;
}

// ─── Hopcroft-Karp distinguishability table ───────────────────────────────────
export function computeDistTable(states, finalStates, transitions, alphabet) {
  const table = {};
  const n = states.length;

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      table[pairKey(states[i], states[j])] = false;

  // Step 1: mark final × non-final pairs as distinguishable
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      const [p, q] = [states[i], states[j]];
      if (finalStates.includes(p) !== finalStates.includes(q))
        table[pairKey(p, q)] = true;
    }

  // Step 2: propagate distinguishability
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const [p, q] = [states[i], states[j]];
        const key = pairKey(p, q);
        if (table[key]) continue;
        for (const sym of alphabet) {
          const tp = transitions.find(t => t.from === p && t.symbol === sym)?.to;
          const tq = transitions.find(t => t.from === q && t.symbol === sym)?.to;
          if (!tp || !tq || tp === tq) continue;
          if (table[pairKey(tp, tq)]) { table[key] = true; changed = true; break; }
        }
      }
    }
  }
  return table;
}

// ─── Sequência de distinguibilidade (para o Modo Aula) ────────────────────────
// Mesmo algoritmo de computeDistTable, mas REGISTRA a ordem em que cada par vira
// distinguível e a "testemunha" (símbolo + par de destino já marcado). Serve para
// narrar a propagação passo a passo na aula. Não substitui computeDistTable.
// Retorna { trivial: [{pair,p,q}], steps: [{pair,p,q,sym,dest,dp,dq}] }.
export function computeDistSequence(states, finalStates, transitions, alphabet) {
  const table = {};
  const n = states.length;
  const delta = (st, sym) => transitions.find(t => t.from === st && t.symbol === sym)?.to;

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      table[pairKey(states[i], states[j])] = false;

  // Passo 1 — marcações triviais (final × não-final), na ordem i<j
  const trivial = [];
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      const [p, q] = [states[i], states[j]];
      if (finalStates.includes(p) !== finalStates.includes(q)) {
        const key = pairKey(p, q);
        table[key] = true;
        trivial.push({ pair: key, p, q });
      }
    }

  // Passo 2 — propagação, gravando ordem + testemunha de cada nova marcação
  const steps = [];
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const [p, q] = [states[i], states[j]];
        const key = pairKey(p, q);
        if (table[key]) continue;
        for (const sym of alphabet) {
          const tp = delta(p, sym);
          const tq = delta(q, sym);
          if (!tp || !tq || tp === tq) continue;
          if (table[pairKey(tp, tq)]) {
            table[key] = true;
            changed = true;
            steps.push({ pair: key, p, q, sym, dest: pairKey(tp, tq), dp: tp, dq: tq });
            break;
          }
        }
      }
    }
  }
  return { trivial, steps };
}

// ─── Union-Find minimization ──────────────────────────────────────────────────
export function computeMinimized(states, initialState, finalStates, transitions, alphabet, table) {
  const parent = {};
  states.forEach(s => { parent[s] = s; });

  const find = s => { if (parent[s] !== s) parent[s] = find(parent[s]); return parent[s]; };
  const union = (a, b) => {
    const [ra, rb] = [find(a), find(b)];
    if (ra === rb) return;
    if (states.indexOf(ra) <= states.indexOf(rb)) parent[rb] = ra;
    else parent[ra] = rb;
  };

  const n = states.length;
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (!table[pairKey(states[i], states[j])])
        union(states[i], states[j]);

  const classMap = {};
  states.forEach(s => {
    const rep = find(s);
    (classMap[rep] = classMap[rep] || []).push(s);
  });

  const displayName = {};
  Object.entries(classMap).forEach(([rep, members]) => {
    displayName[rep] = members
      .sort((a, b) => states.indexOf(a) - states.indexOf(b))
      .join('');
  });

  const newStates = Object.keys(classMap).sort((a, b) => states.indexOf(a) - states.indexOf(b));
  const newInitial = find(initialState);
  const newFinals  = [...new Set(finalStates.map(f => find(f)))];

  const newNodes = newStates.map(rep => ({
    id: rep, label: displayName[rep],
    isInitial: rep === newInitial,
    isFinal: newFinals.includes(rep),
  }));

  const seen = new Set();
  const newTransitions = [];
  newStates.forEach(rep => {
    const orig = classMap[rep][0];
    alphabet.forEach(sym => {
      const dest = transitions.find(t => t.from === orig && t.symbol === sym)?.to;
      if (!dest) return;
      const destRep = find(dest);
      const k = `${rep}|${sym}|${destRep}`;
      if (!seen.has(k)) { seen.add(k); newTransitions.push({ from: rep, symbol: sym, to: destRep }); }
    });
  });

  return { nodes: newNodes, transitions: newTransitions, classMap, displayName };
}

// ─── Desenho do aluno: extrai δ e valida boa-formação do AFD ──────────────────
// Recebe os nós/transições no formato do canvas (AFDPart1): nó { id, isInitial,
// isFinal }; transição { from, symbol, to } (symbol pode ser "a,b"). Devolve, em
// caso de sucesso, { ok:true, delta:{id:{sym:to}}, initial, finals:Set, ids }.
// Em caso de erro, { ok:false, code, message, errorIds:[] } descrevendo o problema
// (inicial ausente/duplicado, símbolo fora do alfabeto, não-determinismo, δ
// incompleta). NÃO compara com o gabarito — só verifica que é um AFD válido.
export function analyzeDrawnDFA(nodes, transitions, alphabet) {
  if (!nodes.length)
    return { ok: false, code: 'empty', message: 'Comece desenhando os estados do AFD mínimo.', errorIds: [] };

  const initials = nodes.filter(n => n.isInitial);
  if (initials.length === 0)
    return { ok: false, code: 'no-initial', message: 'Falta o estado inicial (▶). Marque um estado como inicial.', errorIds: [] };
  if (initials.length > 1)
    return { ok: false, code: 'multi-initial', message: 'Há mais de um estado inicial. Um AFD tem exatamente um (▶).', errorIds: initials.map(n => n.id) };

  const ids = nodes.map(n => n.id);
  const delta = {};
  ids.forEach(id => { delta[id] = {}; });

  for (const t of transitions) {
    const syms = (t.symbol || '').split(',').map(s => s.trim()).filter(Boolean);
    for (const sym of syms) {
      if (!alphabet.includes(sym))
        return { ok: false, code: 'bad-symbol', message: `O símbolo '${sym}' não pertence ao alfabeto { ${alphabet.join(', ')} }.`, errorIds: [t.from] };
      if (delta[t.from] === undefined)
        return { ok: false, code: 'orphan-edge', message: 'Há uma seta saindo de um estado que não existe mais. Refaça-a.', errorIds: [] };
      if (delta[t.from][sym] !== undefined && delta[t.from][sym] !== t.to)
        return { ok: false, code: 'nondeterministic', message: `O estado ${t.from} tem dois destinos lendo '${sym}'. Num AFD cada (estado, símbolo) leva a UM só destino.`, errorIds: [t.from] };
      delta[t.from][sym] = t.to;
    }
  }

  const incomplete = new Set();
  for (const id of ids)
    for (const sym of alphabet)
      if (delta[id][sym] === undefined) incomplete.add(id);
  if (incomplete.size)
    return { ok: false, code: 'incomplete', message: `δ incompleta: falta(m) transição(ões) em ${[...incomplete].join(', ')}. Todo estado precisa de saída para cada símbolo do alfabeto.`, errorIds: [...incomplete] };

  return {
    ok: true, delta,
    initial: initials[0].id,
    finals: new Set(nodes.filter(n => n.isFinal).map(n => n.id)),
    ids,
  };
}

// ─── Equivalência de linguagem por construção do produto ──────────────────────
// A/B = { delta:{id:{sym:to}}, initial, finals:Set }. BFS no autômato-produto
// procurando um par (estado A, estado B) com aceitação divergente; devolve a
// menor palavra que os separa (contra-exemplo) ou { equivalent:true }. Símbolos
// sem transição caem num sink não-final implícito, então funciona com δ parcial.
export function productCounterexample(A, B, alphabet) {
  const DEAD = Symbol('dead');       // sink não-final implícito (não colide com rótulos)
  const stepA = (s, sym) => (s === DEAD ? DEAD : (A.delta[s]?.[sym] ?? DEAD));
  const stepB = (s, sym) => (s === DEAD ? DEAD : (B.delta[s]?.[sym] ?? DEAD));
  const isFA = s => s !== DEAD && A.finals.has(s);
  const isFB = s => s !== DEAD && B.finals.has(s);
  // chave do par livre de colisão (estados podem ter nomes arbitrários)
  const keyOf = (a, b) => JSON.stringify([a === DEAD ? null : a, b === DEAD ? null : b, a === DEAD, b === DEAD]);

  const seen = new Set([keyOf(A.initial, B.initial)]);
  const queue = [[A.initial, B.initial, '']];
  while (queue.length) {
    const [a, b, word] = queue.shift();
    if (isFA(a) !== isFB(b)) return { equivalent: false, word, acceptedByDrawn: isFA(a) };
    for (const sym of alphabet) {
      const na = stepA(a, sym), nb = stepB(b, sym);
      const key = keyOf(na, nb);
      if (!seen.has(key)) { seen.add(key); queue.push([na, nb, word + sym]); }
    }
  }
  return { equivalent: true };
}

// ─── BFS horizontal layout ────────────────────────────────────────────────────
// opts defaults match AFDPart2's constants; pass overrides for other viewports
// fixedPositions: { [nodeId]: {x, y} } — overrides BFS for those nodes (px)
export function computeLayout(nodes, transitions, { VW = 580, VH = 340, MX = 65, MY = 42, fixedPositions = null } = {}) {
  if (!nodes.length) return {};
  if (fixedPositions) {
    const result = {};
    nodes.forEach(n => { result[n.id] = fixedPositions[n.id] ?? { x: VW / 2, y: VH / 2 }; });
    return result;
  }
  const initId = nodes.find(n => n.isInitial)?.id ?? nodes[0].id;

  const layer = { [initId]: 0 };
  const visited = new Set([initId]);
  let queue = [initId];

  while (queue.length) {
    const next = [];
    for (const id of queue) {
      for (const t of transitions) {
        if (t.from === id && t.from !== t.to && !visited.has(t.to)) {
          visited.add(t.to);
          layer[t.to] = layer[id] + 1;
          next.push(t.to);
        }
      }
    }
    queue = next;
  }

  const maxL = Object.values(layer).length ? Math.max(...Object.values(layer)) : 0;
  nodes.forEach(n => { if (!(n.id in layer)) layer[n.id] = maxL + 1; });

  const groups = {};
  nodes.forEach(n => {
    const l = layer[n.id];
    (groups[l] = groups[l] || []).push(n.id);
  });

  const numLayers = Math.max(...Object.keys(groups).map(Number)) + 1;
  const usableW = VW - 2 * MX;
  const usableH = VH - 2 * MY;
  const positions = {};

  Object.entries(groups).forEach(([l, ids]) => {
    const li = parseInt(l);
    const x = numLayers === 1 ? VW / 2 : MX + (li / (numLayers - 1)) * usableW;
    ids.forEach((id, i) => {
      const rows = ids.length;
      const y = rows === 1 ? VH / 2 : MY + (i / (rows - 1)) * usableH;
      positions[id] = { x: Math.round(x), y: Math.round(y) };
    });
  });

  return positions;
}
