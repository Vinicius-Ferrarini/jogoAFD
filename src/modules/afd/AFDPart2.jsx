// AFDPart2.jsx – Grafo → Linguagem  (v2 – comic/gibi style matching AFDPart1)
import { useState, useMemo, useCallback, useRef } from 'react';
import './AFDPart1.css';
import './AFDPart2.css';
import { GAME_LEVELS } from '../../levels';
import { LEVEL_GRAPHS } from '../../levels_graphs';
import imgMaurilioSerio      from '../../assets/maurilio1_serio.png';
import imgMaurilioExplicando from '../../assets/maurilio3_explicando.png';
import imgBalaoFala          from '../../assets/balao_fala_redondo.png';

// ── P2 Progress (localStorage, separate from P1) ──────────────────────────────
function getP2Progress() {
  try { return JSON.parse(localStorage.getItem('autoquest_progress_p2') || '{}'); }
  catch { return {}; }
}
function saveP2Progress(d) {
  localStorage.setItem('autoquest_progress_p2', JSON.stringify(d));
}

// ── BFS horizontal layout ─────────────────────────────────────────────────────
const VW = 580, VH = 340, NR = 23, MX = 65, MY = 42;

function computeLayout(nodes, transitions) {
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

// ── Normalize for comparison ──────────────────────────────────────────────────
function normalize(s) {
  return s
    .replace(/^L\s*=\s*/, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[{}\[\]]/g, '')
    .replace(/λ|ε|epsilon|\\lambda/gi, 'lambda')
    .replace(/∅|\\emptyset|vazio|empty/gi, 'emptyset')
    .replace(/[≥]/g, '>=')
    .replace(/[≤]/g, '<=')
    .replace(/[^a-z0-9^*+|(),_.=><!]/g, '');
}

// ── Stars ─────────────────────────────────────────────────────────────────────
function Stars({ count, size = 16 }) {
  return (
    <span style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      {[1, 2, 3].map(i => (
        <span key={i} style={{ color: i <= count ? '#fbbf24' : '#6b7280', fontSize: size }}>★</span>
      ))}
    </span>
  );
}

// ── SVG Graph ─────────────────────────────────────────────────────────────────
function AFDGraphView({ nodes, transitions }) {
  const positions = useMemo(() => computeLayout(nodes, transitions), [nodes, transitions]);

  // Merge multi-symbol edges into single edge with combined label
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

  const hasBidir = useCallback(
    (a, b) => edges.some(e => e.from === b && e.to === a),
    [edges]
  );

  return (
    <svg
      viewBox={`0 0 ${VW} ${VH}`}
      style={{ width: '100%', height: '100%', display: 'block' }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <marker id="p2a" markerWidth="9" markerHeight="7" refX="38" refY="3.5"
          orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 0,9 3.5,0 7" fill="#1e40af" />
        </marker>
        <marker id="p2ai" markerWidth="9" markerHeight="7" refX="9" refY="3.5"
          orient="auto" markerUnits="userSpaceOnUse">
          <polygon points="0 0,9 3.5,0 7" fill="#000" />
        </marker>
      </defs>

      {/* Edges */}
      {edges.map((edge, i) => {
        const sp = positions[edge.from];
        const tp = positions[edge.to];
        if (!sp || !tp) return null;
        const label = edge.syms.join(',');

        if (edge.from === edge.to) {
          return (
            <g key={i}>
              <path
                d={`M ${sp.x - 13} ${sp.y - NR + 5} C ${sp.x - 46} ${sp.y - NR - 58} ${sp.x + 46} ${sp.y - NR - 58} ${sp.x + 13} ${sp.y - NR + 5}`}
                fill="none" stroke="#1e40af" strokeWidth="2.5" markerEnd="url(#p2a)"
              />
              <text x={sp.x} y={sp.y - NR - 32}
                textAnchor="middle" dominantBaseline="middle" className="p2-edge-label">
                {label}
              </text>
            </g>
          );
        }

        const dx = tp.x - sp.x, dy = tp.y - sp.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const nx = -dy / dist, ny = dx / dist;
        const bidir = hasBidir(edge.from, edge.to);

        let pathD, lx, ly;
        if (bidir) {
          const off = 38;
          const cx1 = (sp.x + tp.x) / 2 + nx * off;
          const cy1 = (sp.y + tp.y) / 2 + ny * off;
          pathD = `M ${sp.x} ${sp.y} Q ${cx1} ${cy1} ${tp.x} ${tp.y}`;
          lx = ((sp.x + tp.x) / 2 + cx1) / 2 + nx * 10;
          ly = ((sp.y + tp.y) / 2 + cy1) / 2 + ny * 10;
        } else {
          pathD = `M ${sp.x} ${sp.y} L ${tp.x} ${tp.y}`;
          lx = (sp.x + tp.x) / 2 + nx * 15;
          ly = (sp.y + tp.y) / 2 + ny * 15;
        }

        return (
          <g key={i}>
            <path d={pathD} fill="none" stroke="#1e40af" strokeWidth="2.5" markerEnd="url(#p2a)" />
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" className="p2-edge-label">
              {label}
            </text>
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map(nd => {
        const p = positions[nd.id];
        if (!p) return null;
        return (
          <g key={nd.id}>
            {nd.isInitial && (
              <line
                x1={p.x - NR - 32} y1={p.y}
                x2={p.x - NR - 1} y2={p.y}
                stroke="#000" strokeWidth="2.5"
                markerEnd="url(#p2ai)"
              />
            )}
            {nd.isFinal && (
              <circle cx={p.x} cy={p.y} r={NR + 7} fill="none" stroke="#000" strokeWidth="2.5" />
            )}
            <circle
              cx={p.x} cy={p.y} r={NR}
              fill={nd.isFinal ? '#bbf7d0' : '#fff'}
              stroke="#000" strokeWidth="3"
            />
            <text
              x={p.x} y={p.y}
              textAnchor="middle" dominantBaseline="middle"
              className="p2-node-label"
              style={{ fontSize: nd.id.length > 3 ? 9 : nd.id.length > 2 ? 11 : 13 }}
            >
              {nd.id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Level List — gibi style matching AFDPart1 ─────────────────────────────────
function LevelList({ progress, onSelect, onBack }) {
  const [page, setPage] = useState(1);
  const perPage = 20;
  const totalPages = Math.ceil(GAME_LEVELS.length / perPage);
  const pageItems = GAME_LEVELS.slice((page - 1) * perPage, page * perPage);
  const maxStars = GAME_LEVELS.length * 3;
  const totalStars = GAME_LEVELS.reduce((sum, l) => sum + (progress[l.id]?.stars || 0), 0);

  return (
    <div className="menu-screen" style={{ justifyContent: 'flex-start', paddingTop: 16 }}>
      <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:12, alignSelf:'flex-start' }}>
        <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        <h1 className="menu-title" style={{ margin:0 }}>AutoQuest</h1>
      </div>
      <p style={{ fontWeight: 900, fontSize: 16, color: '#555', marginBottom: 12,
        background: '#60a5fa', border: '3px solid #000', borderRadius: 8,
        padding: '4px 16px', boxShadow: '3px 3px 0 #000' }}>
        📊 Grafo → Linguagem
      </p>
      <div style={{ marginBottom: 18, fontWeight: 'bold', fontSize: 16 }}>
        Progresso: {maxStars > 0 ? Math.round((totalStars / maxStars) * 100) : 0}%
        &nbsp;({totalStars}/{maxStars} ★)
      </div>

      <div className="levels-grid">
        {pageItems.map(lvl => (
          <button
            key={lvl.id}
            className="menu-btn primary"
            onClick={() => onSelect(lvl)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
          >
            <span>{lvl.label}</span>
            <Stars count={progress[lvl.id]?.stars || 0} size={14} />
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginTop: 20 }}>
        <button className="menu-btn"
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          style={{ opacity: page === 1 ? 0.5 : 1 }}>
          ⬅ Anterior
        </button>
        <span style={{ fontWeight: 'bold', fontSize: 18, background: '#fff',
          padding: '5px 15px', border: '3px solid #000', borderRadius: 8 }}>
          {page} / {totalPages}
        </span>
        <button className="menu-btn"
          disabled={page === totalPages}
          onClick={() => setPage(p => p + 1)}
          style={{ opacity: page === totalPages ? 0.5 : 1 }}>
          Próxima ➡
        </button>
      </div>

    </div>
  );
}

// ── Exercise Screen ───────────────────────────────────────────────────────────
function ExerciseScreen({ level, progress, updateProgress, showToast, onBack, onNext }) {
  const graph   = LEVEL_GRAPHS[level.id];
  const [answer,      setAnswer]      = useState('');
  const [attempts,    setAttempts]    = useState(0);
  const [result,      setResult]      = useState(null);   // 'correct'|'wrong'|null
  const [showExpected, setShowExpected] = useState(false);
  const [showVictory, setShowVictory] = useState(false);
  const [earnedStars, setEarnedStars] = useState(0);
  const [profMsg,     setProfMsg]     = useState('');
  const speechRef = useRef(null);
  const [showCheatsheet, setShowCheatsheet] = useState(true);
  const [copiedIdx, setCopiedIdx] = useState(null);

  const stars = progress[level.id]?.stars || 0;

  const levelIdx = GAME_LEVELS.findIndex(l => l.id === level.id);
  const nextLevel = levelIdx >= 0 && levelIdx < GAME_LEVELS.length - 1
    ? GAME_LEVELS[levelIdx + 1] : null;

  const showProf = useCallback((msg, dur = 6000) => {
    setProfMsg(msg);
    if (speechRef.current) clearTimeout(speechRef.current);
    speechRef.current = setTimeout(() => setProfMsg(''), dur);
  }, []);

  const handleCheck = useCallback(() => {
    if (!answer.trim()) { showToast('Digite sua resposta primeiro!', 'info'); return; }
    const n = attempts + 1;
    setAttempts(n);

    const correct = normalize(answer) === normalize(level.formula);
    if (correct) {
      const earned = n === 1 ? 3 : n === 2 ? 2 : 1;
      setEarnedStars(earned);
      updateProgress(level.id, earned);
      setResult('correct');
      setShowVictory(true);
    } else {
      setResult('wrong');
      if (n >= 2) setShowExpected(true);
      showProf('Hmm, não é isso... Siga o caminho do autômato estado por estado!');
    }
  }, [answer, attempts, level, updateProgress, showToast, showProf]);

  const handleReset = () => {
    setAnswer(''); setAttempts(0); setResult(null);
    setShowExpected(false); setShowVictory(false); setEarnedStars(0);
  };

  const copyRow = (text, key) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopiedIdx(key);
      setTimeout(() => setCopiedIdx(null), 1500);
    });
  };

  const cheatSections = [
    {
      label: 'Estrutura',
      color: 'white',
      items: [
        { code: '{ a^n | n > 0 e n é ímpar }', desc: 'duas condições com e' },
      ],
    },
    {
      label: 'Expoentes',
      color: 'blue',
      items: [
        { code: 'a^n',              desc: '"a" repetido n vezes', underline: true },
        { code: 'n ≥ 0  /  n > 0', desc: 'zero-ou-mais / um-ou-mais' },
      ],
    },
    {
      label: 'Variável w',
      color: 'pink',
      items: [
        { code: 'w',               desc: 'qualquer palavra' },
        { code: '|w|',             desc: 'comprimento de w' },
        { code: '|w| mod 2 = 1',   desc: 'comprimento ímpar' },
      ],
    },
    {
      label: 'Especiais',
      color: 'yellow',
      items: [
        { code: 'λ',     desc: 'palavra vazia (lambda)' },
        { code: '{ λ }', desc: 'conjunto só com vazia' },
      ],
    },
    {
      label: 'Prontos',
      color: 'orange',
      items: [
        { code: '{ a^n | n > 0 }',         desc: 'a, aa, aaa…', underline: true },
        { code: '{ a^n b^m | n,m ≥ 0 }',  desc: 'λ, a, ab, aabb…' },
      ],
    },
  ];

  return (
    <div className="workspace-wrapper">
      {/* Header */}
      <header className="game-header">
        <div className="header-left">
          <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
          <span className="mission-label">Identifique a Linguagem</span>
          <div className="mission-formula">{level.label}</div>
        </div>
        <div style={{ width: 150, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8 }}>
          <Stars count={stars} size={20} />
        </div>
      </header>

      {/* Workspace */}
      <div className="workspace">
        {/* Canvas — fixed graph */}
        <section className="canvas-area" style={{ cursor: 'default' }}>
          <div className="canvas-label">Autômato Finito Determinístico</div>

          {graph ? (
            <div className="p2-svg-box">
              <AFDGraphView nodes={graph.nodes} transitions={graph.transitions} />
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '100%', height: '100%', color: '#999', fontWeight: 900 }}>
              Grafo não disponível para este exercício
            </div>
          )}

          <div className="p2-legend">
            <span><span className="p2-legend-dot final" /> Estado Final (duplo anel)</span>
            <span>▶ Estado Inicial (seta de entrada)</span>
          </div>

          {/* Quadro-negro de notações */}
          <div className="p2-blackboard-wrapper">
            <button className="p2-blackboard-btn" onClick={() => setShowCheatsheet(s => !s)}>
              🖊 {showCheatsheet ? '▲ Fechar' : '📋 Como Escrever'}
            </button>
            {showCheatsheet && (
              <div className="p2-blackboard">
                <div className="p2-bb-title">✦ Notações — clique para copiar</div>
                {cheatSections.map((section) => (
                  <div key={section.label} className="p2-bb-section">
                    <div className={`p2-bb-section-label p2-chalk-${section.color}`}>
                      {section.label}
                    </div>
                    {section.items.map((item, i) => {
                      const key = `${section.label}-${i}`;
                      return (
                        <div
                          key={key}
                          className="p2-bb-row"
                          onClick={() => copyRow(item.code, key)}
                          title="Clique para copiar"
                        >
                          <code className={`p2-chalk-${section.color}`}>
                            {item.code}
                          </code>
                          <span className={`p2-chalk-${section.color} p2-chalk-dim`}>
                            {item.desc}
                          </span>
                          <span className="p2-bb-copy">{copiedIdx === key ? '✓' : ''}</span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Right panel */}
        <aside className="test-panel">
          {/* Alphabet */}
          <div className="section-header" style={{ fontSize: 10, marginTop: 2 }}>Alfabeto</div>
          <div className="p2-alphabet">
            Σ = {level.alphabet.length > 0
              ? `{ ${level.alphabet.join(', ')} }`
              : '{ } (vazio)'}
          </div>

          {/* Answer */}
          <div className="section-header" style={{ fontSize: 10, marginTop: 2 }}>Sua Resposta</div>
          <div className="test-input-area">
            <input
              type="text"
              className={`word-input ${result === 'correct' ? 'p2-ok' : result === 'wrong' ? 'p2-err' : ''}`}
              placeholder="Ex: { a^n | n > 0 }"
              value={answer}
              onChange={e => { setAnswer(e.target.value); setResult(null); }}
              onKeyDown={e => e.key === 'Enter' && result !== 'correct' && handleCheck()}
              disabled={result === 'correct'}
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="off"
            />
          </div>

          {/* Feedback */}
          {result === 'wrong' && (
            <div className="word-row wrong" style={{ fontSize: 12, justifyContent: 'flex-start', gap: 6 }}>
              ❌ Não está certo!
              {attempts >= 2 && ' (Veja a resposta abaixo)'}
            </div>
          )}

          {showExpected && result !== 'correct' && (
            <div className="p2-expected">
              <strong>Resposta correta:</strong>
              <br />
              <code>{level.formula.replace(/^L\s*=\s*/, '')}</code>
            </div>
          )}

          {/* Actions */}
          {result !== 'correct' && (
            <button className="validate-btn slide-up-fade" onClick={handleCheck}>
              ✔ Verificar Resposta
            </button>
          )}

          {(result === 'correct' || showExpected) && (
            <button
              className="simulate-btn"
              style={{ marginTop: 4 }}
              onClick={handleReset}
            >
              🔄 Tentar Novamente
            </button>
          )}

          {attempts > 0 && result !== 'correct' && attempts < 2 && (
            <button
              className="simulate-btn"
              style={{ background: '#fef08a', marginTop: 4 }}
              onClick={() => showProf(level.hint || 'Analise os estados finais e as transições!')}
            >
              💡 Pedir Dica
            </button>
          )}

          <div style={{ fontSize: 11, color: '#666', fontWeight: 'bold', marginTop: 4 }}>
            Tentativas: {attempts} | Recorde: <Stars count={stars} size={12} />
          </div>
        </aside>
      </div>

      {/* Professor HUD — no card footer so bottom is lower */}
      <div className="professor-hud" style={{ bottom: 18 }}>
        {profMsg && (
          <div className="professor-balloon">
            <img src={imgBalaoFala} alt="" />
            <div className="professor-balloon-text">{profMsg}</div>
          </div>
        )}
        <img
          src={imgMaurilioSerio}
          alt="Professor Maurílio"
          className="prof-img"
          onClick={() => showProf(
            attempts === 0
              ? 'Observe os estados: iniciais, finais e as transições entre eles!'
              : (level.hint || 'Siga o caminho das setas e note onde o autômato aceita!')
          )}
        />
      </div>

      {/* Victory popup */}
      {showVictory && (
        <div className="p2-victory-overlay">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <img
              src={imgMaurilioExplicando}
              alt="Professor"
              style={{ height: 280, zIndex: 2, marginRight: -20, filter: 'drop-shadow(4px 4px 0 #000)' }}
            />
            <div style={{ position: 'relative', width: 260, height: 195, marginTop: -30, zIndex: 1 }}>
              <img
                src={imgBalaoFala}
                alt=""
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '16px 16px 48px', boxSizing: 'border-box',
                color: '#000', textAlign: 'center', zIndex: 2
              }}>
                <div style={{ fontWeight: 900, fontSize: 15, lineHeight: 1.4 }}>
                  {earnedStars === 3
                    ? '🌟 Incrível! Acertou de primeira!'
                    : earnedStars === 2
                    ? '⭐⭐ Muito bem! Você conseguiu!'
                    : '✅ Parabéns! Vai treinando!'}
                </div>
                <div style={{ marginTop: 10 }}>
                  <Stars count={earnedStars} size={26} />
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
            <button className="menu-btn" onClick={onBack} style={{ padding: '12px 22px', fontSize: 17 }}>
              Voltar ao Menu
            </button>
            {nextLevel && (
              <button
                className="menu-btn primary"
                onClick={() => onNext(nextLevel)}
                style={{ padding: '12px 22px', fontSize: 17 }}
              >
                Próxima: {nextLevel.label} →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function AFDPart2({ onBack, showToast }) {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [p2Progress, setP2Progress] = useState(getP2Progress);

  const updateP2Progress = useCallback((levelId, stars) => {
    setP2Progress(prev => {
      const cur = prev[levelId]?.stars || 0;
      if (stars <= cur) return prev;
      const next = { ...prev, [levelId]: { stars } };
      saveP2Progress(next);
      return next;
    });
  }, []);

  if (selectedLevel) {
    return (
      <ExerciseScreen
        key={selectedLevel.id}
        level={selectedLevel}
        progress={p2Progress}
        updateProgress={updateP2Progress}
        showToast={showToast}
        onBack={() => setSelectedLevel(null)}
        onNext={lvl => setSelectedLevel(lvl)}
      />
    );
  }

  return (
    <LevelList
      progress={p2Progress}
      onSelect={setSelectedLevel}
      onBack={onBack}
    />
  );
}
