// ─── Pair key utility ─────────────────────────────────────────────────────────
export const pairKey = (a, b) => a <= b ? `${a},${b}` : `${b},${a}`;

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

// ─── BFS horizontal layout ────────────────────────────────────────────────────
// opts defaults match AFDPart2's constants; pass overrides for other viewports
export function computeLayout(nodes, transitions, { VW = 580, VH = 340, MX = 65, MY = 42 } = {}) {
  if (!nodes.length) return {};
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
