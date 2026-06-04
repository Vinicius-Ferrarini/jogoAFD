// AFDMinimizer.jsx – Minimização de AFD interativa (v2)
import { useState, useMemo, useCallback } from 'react';
import './AFDPart1.css';
import './AFDMinimizer.css';
import imgMaurilioExplicando from '../../assets/maurilio3_explicando.webp';
import imgBalaoFala          from '../../assets/balao_fala_redondo.webp';

// ─── Exercises ────────────────────────────────────────────────────────────────
const EXERCISES = [
  {
    id: 1, level: 'easy', title: 'Todos Equivalentes',
    desc: 'Todos os 3 estados são finais. Use a tabela para descobrir quais são equivalentes.',
    hint: 'Se todos são finais, a 1ª passagem não marca nada. Analise as transições!',
    explanation: 'Como todos são finais e as transições se cruzam da mesma forma, todos se equivalem e se fundem em 1 estado.',
    initial: {
      states: ['q0','q1','q2'], alphabet: ['a','b'],
      initialState: 'q0', finalStates: ['q0','q1','q2'],
      transitions: [
        {from:'q0',symbol:'a',to:'q2'},{from:'q0',symbol:'b',to:'q1'},
        {from:'q1',symbol:'a',to:'q2'},{from:'q1',symbol:'b',to:'q0'},
        {from:'q2',symbol:'a',to:'q1'},{from:'q2',symbol:'b',to:'q0'},
      ],
    },
  },
  {
    id: 2, level: 'easy', title: 'Dois Pares Equivalentes',
    desc: 'Encontre quais pares de estados são distinguíveis e quais podem ser fundidos.',
    hint: 'Aplique a 1ª passagem (final × não-final) e depois propague.',
    explanation: 'q1 e q2 são equivalentes. q3 e q4 também são equivalentes.',
    initial: {
      states: ['q0','q1','q2','q3','q4'], alphabet: ['a','b'],
      initialState: 'q0', finalStates: ['q3','q4'],
      transitions: [
        {from:'q0',symbol:'a',to:'q1'},{from:'q0',symbol:'b',to:'q2'},
        {from:'q1',symbol:'a',to:'q2'},{from:'q1',symbol:'b',to:'q3'},
        {from:'q2',symbol:'a',to:'q1'},{from:'q2',symbol:'b',to:'q4'},
        {from:'q3',symbol:'a',to:'q2'},{from:'q3',symbol:'b',to:'q3'},
        {from:'q4',symbol:'a',to:'q1'},{from:'q4',symbol:'b',to:'q4'},
      ],
    },
  },
  {
    id: 3, level: 'medium', title: 'Três Símbolos',
    desc: 'Minimização com alfabeto de 3 símbolos. Cuidado com as dependências!',
    hint: 'Após a 1ª passagem, propague símbolo por símbolo nas células não marcadas.',
    explanation: 'Os três estados finais (q3, q4, q5) são equivalentes e se fundem.',
    initial: {
      states: ['q0','q1','q2','q3','q4','q5'], alphabet: ['a','b','c'],
      initialState: 'q0', finalStates: ['q3','q4','q5'],
      transitions: [
        {from:'q0',symbol:'a',to:'q1'},{from:'q0',symbol:'b',to:'q0'},{from:'q0',symbol:'c',to:'q2'},
        {from:'q1',symbol:'a',to:'q3'},{from:'q1',symbol:'b',to:'q1'},{from:'q1',symbol:'c',to:'q2'},
        {from:'q2',symbol:'a',to:'q2'},{from:'q2',symbol:'b',to:'q4'},{from:'q2',symbol:'c',to:'q5'},
        {from:'q3',symbol:'a',to:'q3'},{from:'q3',symbol:'b',to:'q1'},{from:'q3',symbol:'c',to:'q4'},
        {from:'q4',symbol:'a',to:'q5'},{from:'q4',symbol:'b',to:'q1'},{from:'q4',symbol:'c',to:'q4'},
        {from:'q5',symbol:'a',to:'q3'},{from:'q5',symbol:'b',to:'q1'},{from:'q5',symbol:'c',to:'q4'},
      ],
    },
  },
  {
    id: 4, level: 'medium', title: 'Com Estado de Erro',
    desc: 'Autômato com estado de erro (qe). Ele pode ser equivalente a algum outro?',
    hint: 'Verifique quais não-finais têm transições que chegam nos mesmos lugares que qe.',
    explanation: 'q3 e q4 são equivalentes. q2 e qe também são equivalentes (mesmas transições em loop).',
    initial: {
      states: ['q0','q1','q2','q3','q4','qe'], alphabet: ['a','b'],
      initialState: 'q0', finalStates: ['q3','q4'],
      transitions: [
        {from:'q0',symbol:'a',to:'q0'},{from:'q0',symbol:'b',to:'q1'},
        {from:'q1',symbol:'a',to:'q4'},{from:'q1',symbol:'b',to:'q2'},
        {from:'q2',symbol:'a',to:'q2'},{from:'q2',symbol:'b',to:'qe'},
        {from:'q3',symbol:'a',to:'q2'},{from:'q3',symbol:'b',to:'q3'},
        {from:'q4',symbol:'a',to:'q1'},{from:'q4',symbol:'b',to:'q4'},
        {from:'qe',symbol:'a',to:'qe'},{from:'qe',symbol:'b',to:'qe'},
      ],
    },
  },
  {
    id: 5, level: 'hard', title: 'Desafio Completo',
    desc: 'Múltiplas equivalências em cascata. Três fusões para encontrar!',
    hint: 'Aplique a 1ª passagem e propague em várias rodadas até estabilizar.',
    explanation: 'q1≡q2, q3≡q4, q5≡q6. Três pares se fundem em cascata.',
    initial: {
      states: ['q0','q1','q2','q3','q4','q5','q6'], alphabet: ['a','b','c'],
      initialState: 'q0', finalStates: ['q5','q6'],
      transitions: [
        {from:'q0',symbol:'a',to:'q1'},{from:'q0',symbol:'b',to:'q2'},{from:'q0',symbol:'c',to:'q3'},
        {from:'q1',symbol:'a',to:'q4'},{from:'q1',symbol:'b',to:'q4'},{from:'q1',symbol:'c',to:'q3'},
        {from:'q2',symbol:'a',to:'q4'},{from:'q2',symbol:'b',to:'q4'},{from:'q2',symbol:'c',to:'q3'},
        {from:'q3',symbol:'a',to:'q5'},{from:'q3',symbol:'b',to:'q5'},{from:'q3',symbol:'c',to:'q6'},
        {from:'q4',symbol:'a',to:'q5'},{from:'q4',symbol:'b',to:'q5'},{from:'q4',symbol:'c',to:'q6'},
        {from:'q5',symbol:'a',to:'q5'},{from:'q5',symbol:'b',to:'q5'},{from:'q5',symbol:'c',to:'q5'},
        {from:'q6',symbol:'a',to:'q6'},{from:'q6',symbol:'b',to:'q6'},{from:'q6',symbol:'c',to:'q6'},
      ],
    },
  },
];

// ─── Algorithm ────────────────────────────────────────────────────────────────
const pairKey = (a, b) => a <= b ? `${a},${b}` : `${b},${a}`;

function computeDistTable(states, finalStates, transitions, alphabet) {
  const table = {};
  const n = states.length;

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      table[pairKey(states[i], states[j])] = false;

  // Step 1: mark final × non-final
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      const [p, q] = [states[i], states[j]];
      if (finalStates.includes(p) !== finalStates.includes(q))
        table[pairKey(p, q)] = true;
    }

  // Step 2: propagate
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

function computeMinimized(states, initialState, finalStates, transitions, alphabet, table) {
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

// ─── Graph Layout (BFS) ───────────────────────────────────────────────────────
const VW = 580, VH = 320, NR = 22, MX = 62, MY = 40;

function computeLayout(nodes, transitions) {
  if (!nodes.length) return {};
  const initId = nodes.find(n => n.isInitial)?.id ?? nodes[0].id;
  const layer = { [initId]: 0 };
  const visited = new Set([initId]);
  let queue = [initId];
  while (queue.length) {
    const next = [];
    for (const id of queue)
      for (const t of transitions)
        if (t.from === id && t.from !== t.to && !visited.has(t.to)) {
          visited.add(t.to); layer[t.to] = layer[id] + 1; next.push(t.to);
        }
    queue = next;
  }
  const maxL = Math.max(...Object.values(layer));
  nodes.forEach(n => { if (!(n.id in layer)) layer[n.id] = maxL + 1; });
  const groups = {};
  nodes.forEach(n => { const l = layer[n.id]; (groups[l] = groups[l] || []).push(n.id); });
  const numLayers = Math.max(...Object.keys(groups).map(Number)) + 1;
  const positions = {};
  Object.entries(groups).forEach(([l, ids]) => {
    const li = parseInt(l);
    const x = numLayers === 1 ? VW / 2 : MX + (li / (numLayers - 1)) * (VW - 2 * MX);
    ids.forEach((id, i) => {
      const rows = ids.length;
      const y = rows === 1 ? VH / 2 : MY + (i / (rows - 1)) * (VH - 2 * MY);
      positions[id] = { x: Math.round(x), y: Math.round(y) };
    });
  });
  return positions;
}

// ─── SVG Graph View ────────────────────────────────────────────────────────────
function GraphView({ nodes, transitions }) {
  const positions = useMemo(() => computeLayout(nodes, transitions), [nodes, transitions]);

  const edges = useMemo(() => {
    const map = {};
    transitions.forEach(t => {
      const key = `${t.from}→${t.to}`;
      if (!map[key]) map[key] = { from: t.from, to: t.to, syms: [] };
      t.symbol.split(',').forEach(s => {
        const tr = s.trim();
        if (tr && !map[key].syms.includes(tr)) map[key].syms.push(tr);
      });
    });
    return Object.values(map);
  }, [transitions]);

  const hasBidir = useCallback((a, b) => edges.some(e => e.from === b && e.to === a), [edges]);

  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width: '100%', height: '100%', display: 'block' }}
      preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="mah"   markerWidth="18" markerHeight="14" refX="48" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#000"/></marker>
        <marker id="mahsl" markerWidth="18" markerHeight="14" refX="18" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#000"/></marker>
      </defs>

      {edges.map((edge, i) => {
        const sp = positions[edge.from], tp = positions[edge.to];
        if (!sp || !tp) return null;
        const label = edge.syms.join(',');

        if (edge.from === edge.to) return (
          <g key={i}>
            <path d={`M ${sp.x-13} ${sp.y-NR+5} C ${sp.x-46} ${sp.y-NR-56} ${sp.x+46} ${sp.y-NR-56} ${sp.x+13} ${sp.y-NR+5}`}
              fill="none" stroke="#000" strokeWidth="4" markerEnd="url(#mahsl)" />
            <text x={sp.x} y={sp.y - NR - 30} textAnchor="middle" dominantBaseline="middle" className="p2-edge-label">{label}</text>
          </g>
        );

        const dx = tp.x - sp.x, dy = tp.y - sp.y;
        const dist = Math.sqrt(dx*dx + dy*dy) || 1;
        const nx = -dy/dist, ny = dx/dist;
        const bidir = hasBidir(edge.from, edge.to);
        let pathD, lx, ly;
        if (bidir) {
          const off = 38;
          const cx1 = (sp.x+tp.x)/2 + nx*off, cy1 = (sp.y+tp.y)/2 + ny*off;
          pathD = `M ${sp.x} ${sp.y} Q ${cx1} ${cy1} ${tp.x} ${tp.y}`;
          lx = ((sp.x+tp.x)/2 + cx1)/2 + nx*10;
          ly = ((sp.y+tp.y)/2 + cy1)/2 + ny*10;
        } else {
          pathD = `M ${sp.x} ${sp.y} L ${tp.x} ${tp.y}`;
          lx = (sp.x+tp.x)/2 + nx*15; ly = (sp.y+tp.y)/2 + ny*15;
        }
        return (
          <g key={i}>
            <path d={pathD} fill="none" stroke="#000" strokeWidth="4" markerEnd="url(#mah)" />
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" className="p2-edge-label">{label}</text>
          </g>
        );
      })}

      {nodes.map(nd => {
        const p = positions[nd.id];
        if (!p) return null;
        const lbl = nd.label ?? nd.id;
        const fs = lbl.length > 4 ? 8 : lbl.length > 3 ? 9 : lbl.length > 2 ? 11 : 13;
        return (
          <g key={nd.id}>
            {nd.isInitial && (
              <text x={p.x - NR - 5} y={p.y} textAnchor="end" dominantBaseline="middle"
                style={{ fontSize:22, fontWeight:'bold', fill:'#000', paintOrder:'stroke',
                  stroke:'#fff', strokeWidth:3, userSelect:'none', pointerEvents:'none' }}>▶</text>
            )}
            {nd.isFinal && <circle cx={p.x} cy={p.y} r={NR+7} fill="none" stroke="#000" strokeWidth="3" />}
            <circle cx={p.x} cy={p.y} r={NR}
              fill={nd.isInitial ? '#bae6fd' : nd.isFinal ? '#bbf7d0' : '#fff'}
              stroke="#000" strokeWidth="3" />
            <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
              className="p2-node-label" style={{ fontSize: fs }}>{lbl}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Triangular Table ──────────────────────────────────────────────────────────
function TriangularTable({ states, userTable, onToggle, correctTable, showErrors }) {
  return (
    <div className="min-table-scroll">
      <table className="min-tri-table">
        <thead>
          <tr>
            <th className="min-corner" />
            {states.slice(0, -1).map(s => <th key={s} className="min-th">{s}</th>)}
          </tr>
        </thead>
        <tbody>
          {states.slice(1).map((rowState, ri) => (
            <tr key={rowState}>
              <th className="min-th">{rowState}</th>
              {states.slice(0, ri + 1).map(colState => {
                const key = pairKey(rowState, colState);
                const val  = !!userTable[key];
                const isWrong = showErrors && correctTable && val !== !!correctTable[key];
                return (
                  <td key={colState}
                    className={`min-cell${val ? ' marked' : ''}${isWrong ? ' wrong' : ''}`}
                    onClick={() => onToggle(key)}
                    title={`(${colState}, ${rowState})`}
                  >
                    {val ? '×' : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Level List ───────────────────────────────────────────────────────────────
function LevelList({ progress, onSelect, onBack }) {
  const LEVEL_COLOR = { easy: '#bbf7d0', medium: '#fde68a', hard: '#fca5a5' };
  return (
    <div className="menu-screen menu-screen-fases" style={{ justifyContent:'flex-start', paddingTop:16 }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center',
        width:'100%', maxWidth:800, gap:14, marginBottom:16 }}>
        <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        <h1 className="menu-title" style={{ margin:0 }}>Minimização</h1>
        <div />
      </div>
      <div className="levels-grid" style={{ maxWidth:800, gridTemplateColumns:'repeat(3,1fr)' }}>
        {EXERCISES.map(ex => {
          const stars = progress[`afd-min-${ex.id}`]?.stars || 0;
          return (
            <button key={ex.id} className="menu-btn primary"
              onClick={() => onSelect(ex)}
              style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6,
                borderLeft:`6px solid ${LEVEL_COLOR[ex.level]}` }}>
              <span style={{ fontWeight:'900', fontSize:13 }}>{ex.title}</span>
              <span style={{ fontSize:10, opacity:0.7, textTransform:'uppercase' }}>{ex.level}</span>
              <span style={{ color:'#fbbf24', fontSize:16 }}>
                {'★'.repeat(stars)}{'☆'.repeat(3 - stars)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Game ────────────────────────────────────────────────────────────────
function MinGame({ exercise, progress, onBack, updateProgress, showToast }) {
  const [phase, setPhase]           = useState('VIEW');
  const [userTable, setUserTable]   = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [hintUsed, setHintUsed]     = useState(false);

  const { states, alphabet, initialState, finalStates, transitions } = exercise.initial;

  const origNodes = useMemo(() => states.map(s => ({
    id: s, label: s,
    isInitial: s === initialState,
    isFinal: finalStates.includes(s),
  })), [states, initialState, finalStates]);

  const correctTable = useMemo(
    () => computeDistTable(states, finalStates, transitions, alphabet),
    [states, finalStates, transitions, alphabet]
  );

  const minimized = useMemo(
    () => computeMinimized(states, initialState, finalStates, transitions, alphabet, correctTable),
    [states, initialState, finalStates, transitions, alphabet, correctTable]
  );

  const handleToggle = useCallback(key => {
    setUserTable(prev => ({ ...prev, [key]: !prev[key] }));
    setShowErrors(false);
  }, []);

  const handleHint = () => {
    const firstPass = {};
    for (let i = 0; i < states.length; i++)
      for (let j = i + 1; j < states.length; j++) {
        const [p, q] = [states[i], states[j]];
        if (finalStates.includes(p) !== finalStates.includes(q))
          firstPass[pairKey(p, q)] = true;
      }
    setUserTable(prev => ({ ...prev, ...firstPass }));
    setHintUsed(true);
    showToast('1ª passagem preenchida: todos os pares final × não-final marcados.', 'info');
  };

  const handleValidate = () => {
    const keys = Object.keys(correctTable);
    const allCorrect = keys.every(k => !!userTable[k] === !!correctTable[k]);
    if (allCorrect) {
      const stars = hintUsed ? 2 : 3;
      updateProgress(`afd-min-${exercise.id}`, stars);
      setPhase('RESULT');
      showToast(`Correto! ${stars === 3 ? '3 estrelas!' : '2 estrelas (dica usada).'}`, 'success');
    } else {
      setShowErrors(true);
      showToast('Células erradas marcadas em vermelho. Corrija e tente de novo.', 'error');
    }
  };

  const stars = progress[`afd-min-${exercise.id}`]?.stars || 0;
  const PHASE_ORDER = ['VIEW', 'TABLE', 'RESULT'];

  return (
    <div className="workspace-wrapper">
      <header className="game-header">
        <div className="header-left">
          <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        </div>
        <div style={{ flex:1, display:'flex', justifyContent:'center', alignItems:'center', gap:8 }}>
          <span className="mission-label">Minimização</span>
          <span style={{ fontWeight:'bold', fontSize:13 }}>{exercise.title}</span>
        </div>
        <div style={{ display:'flex', gap:5, marginRight:10 }}>
          {['1 Ver','2 Tabela','3 Resultado'].map((lbl, i) => {
            const p = PHASE_ORDER[i];
            const done = PHASE_ORDER.indexOf(phase) > i;
            return (
              <span key={p} style={{
                padding:'2px 8px', borderRadius:4, fontSize:10, fontWeight:'bold',
                border:'2px solid #000',
                background: phase === p ? '#fde047' : done ? '#bbf7d0' : '#eee'
              }}>{lbl}</span>
            );
          })}
        </div>
      </header>

      <div className="min-main">
        {/* Left: graph */}
        <section className="min-graph-panel">
          <div style={{ position:'absolute', inset:4 }}>
            <GraphView
              nodes={phase === 'RESULT' ? minimized.nodes : origNodes}
              transitions={phase === 'RESULT' ? minimized.transitions : transitions}
            />
          </div>
          <div className="min-graph-tag">
            {phase === 'RESULT' ? 'AFD Minimizado' : 'AFD Original'}
          </div>
        </section>

        {/* Right: phase content */}
        <section className="min-right">

          {/* ── VIEW ── */}
          {phase === 'VIEW' && (
            <div className="min-panel">
              <div style={{ display:'flex', alignItems:'flex-end', gap:10, marginBottom:8 }}>
                <img src={imgMaurilioExplicando} alt="" style={{ height:110, flexShrink:0 }} />
                <div style={{ position:'relative' }}>
                  <img src={imgBalaoFala} alt="" style={{ width:180, height:110,
                    transform:'scaleX(-1)' }} />
                  <span style={{ position:'absolute', inset:0, display:'flex', alignItems:'center',
                    justifyContent:'center', padding:'10px 20px 22px 14px',
                    fontSize:11, fontWeight:'bold', lineHeight:1.3, textAlign:'center' }}>
                    Vamos minimizar este AFD!
                  </span>
                </div>
              </div>

              <div className="min-info-box">
                <div><b>Estados:</b> {states.join(', ')}</div>
                <div><b>Alfabeto:</b> {'{'}{alphabet.join(', ')}{'}' }</div>
                <div><b>Inicial:</b> {initialState}</div>
                <div><b>Finais:</b> {finalStates.join(', ')}</div>
              </div>

              <p style={{ fontSize:12, lineHeight:1.5, background:'#fff9c4',
                border:'2px solid #000', borderRadius:8, padding:'8px 10px' }}>
                {exercise.desc}
              </p>

              <button className="add-test-btn" style={{ alignSelf:'stretch', padding:'10px',
                fontSize:13, fontWeight:'bold', background:'#60a5fa' }}
                onClick={() => setPhase('TABLE')}>
                Montar Tabela Triangular →
              </button>
            </div>
          )}

          {/* ── TABLE ── */}
          {phase === 'TABLE' && (
            <div className="min-panel">
              <div className="section-header" style={{ fontSize:11 }}>
                Tabela de Distinguibilidade
              </div>
              <p style={{ fontSize:11, color:'#444', marginBottom:4 }}>
                Clique nas células para marcar pares <b>distinguíveis (×)</b>. Deixe em branco os equivalentes.
              </p>

              <TriangularTable
                states={states}
                userTable={userTable}
                onToggle={handleToggle}
                correctTable={correctTable}
                showErrors={showErrors}
              />

              <div style={{ display:'flex', gap:6, marginTop:6 }}>
                <button className="simulate-btn" style={{ flex:1, fontSize:11 }}
                  onClick={handleHint} disabled={hintUsed}>
                  💡 {hintUsed ? 'Dica usada (−1★)' : '1ª passagem'}
                </button>
                <button className="simulate-btn" style={{ flex:1, fontSize:11,
                  background:'#fde68a' }}
                  onClick={() => showToast(exercise.hint, 'info')}>
                  ❓ Dica
                </button>
              </div>

              <button className="add-test-btn"
                style={{ alignSelf:'stretch', padding:'10px', fontSize:13,
                  fontWeight:'bold', background:'#4ade80', marginTop:4 }}
                onClick={handleValidate}>
                Validar Tabela ✓
              </button>
            </div>
          )}

          {/* ── RESULT ── */}
          {phase === 'RESULT' && (
            <div className="min-panel">
              <div className="section-header" style={{ fontSize:11 }}>
                AFD Minimizado
              </div>

              <div className="min-groups">
                {Object.entries(minimized.classMap).map(([rep, members]) => (
                  <div key={rep} className="min-group-row">
                    <span className="min-group-members">
                      {'{'}{members.join(', ')}{'}'}
                    </span>
                    <span className="min-group-arrow">→</span>
                    <span className="min-group-rep">
                      {minimized.displayName[rep]}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ background:'#fff9c4', border:'2px solid #000', borderRadius:8,
                padding:'8px 10px', fontSize:11, lineHeight:1.5 }}>
                {exercise.explanation}
              </div>

              <div style={{ display:'flex', alignItems:'center', gap:6,
                background:'#fff', border:'3px solid #000', borderRadius:8,
                padding:'8px 14px', boxShadow:'4px 4px 0 #000' }}>
                <span style={{ fontSize:22, color:'#fbbf24' }}>
                  {'★'.repeat(stars)}{'☆'.repeat(3 - stars)}
                </span>
                <span style={{ fontWeight:'bold', fontSize:13 }}>
                  {stars === 3 ? 'Perfeito!' : stars === 2 ? 'Ótimo!' : 'Continue!'}
                </span>
              </div>

              <button className="add-test-btn"
                style={{ alignSelf:'stretch', padding:'10px', fontSize:13,
                  fontWeight:'bold', background:'#a78bfa' }}
                onClick={onBack}>
                ← Ver outros exercícios
              </button>
            </div>
          )}

        </section>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function AFDMinimizer({ onBack, progress, updateProgress, showToast }) {
  const [selected, setSelected] = useState(null);

  if (selected) return (
    <MinGame
      exercise={selected}
      progress={progress}
      onBack={() => setSelected(null)}
      updateProgress={updateProgress}
      showToast={showToast}
    />
  );

  return (
    <LevelList
      progress={progress}
      onSelect={setSelected}
      onBack={onBack}
    />
  );
}
