import { useState, useMemo } from 'react';
import { pairKey, computeTrivialTable } from '../utils/dfaAlgorithms';
import TriangularTable from './TriangularTable';

// Sub-passos da construção da tabela (espelham os passos 2→5 do algoritmo)
const SUBSTEPS = [
  { id: 'PARES',      label: '2 · Pares'      },
  { id: 'TRIVIAL',    label: '3 · Trivial'    },
  { id: 'PROPAGACAO', label: '4 · Propagação' },
  { id: 'EQUIV',      label: '5 · Grupos'     },
];

export default function BuildPhase({
  states, alphabet, finalStates, transitions, correctTable,
  exercise, updateProgress, showBanner, showProf, onResult,
}) {
  const [step,        setStep]        = useState('PARES');
  const [cells,       setCells]       = useState({});            // { pairKey: bool }
  const [wrongCells,  setWrongCells]  = useState(new Set());
  const [lockedCells, setLockedCells] = useState(new Set());     // travados pelo passo anterior

  // δ: from → symbol → to (para a dica de propagação)
  const transTable = useMemo(() => {
    const map = {};
    for (const t of transitions) {
      (map[t.from] = map[t.from] || {})[t.symbol] = t.to;
    }
    return map;
  }, [transitions]);

  const allPairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < states.length; i++)
      for (let j = i + 1; j < states.length; j++)
        pairs.push(pairKey(states[i], states[j]));
    return pairs;
  }, [states]);

  const trivialTable = useMemo(
    () => computeTrivialTable(states, finalStates),
    [states, finalStates]
  );

  const toggleCell = (key) => {
    setCells(prev => ({ ...prev, [key]: !prev[key] }));
    setWrongCells(new Set());
  };

  // Comparação genérica do estado atual contra um gabarito (subconjunto de pares)
  const diffAgainst = (targetTable, onlyKeys = allPairs) => {
    const wrong = new Set();
    for (const key of onlyKeys) {
      const should = !!targetTable[key];
      const is     = !!cells[key];
      if (should !== is) wrong.add(key);
    }
    return wrong;
  };

  const feedbackFor = (wrong) => {
    const extras  = [...wrong].filter(k => !!cells[k]).length;
    const missing = wrong.size - extras;
    const parts = [];
    if (extras  > 0) parts.push(`${extras} marcação${extras > 1 ? 'ões' : ''} a mais`);
    if (missing > 0) parts.push(`${missing} par${missing > 1 ? 'es' : ''} faltando`);
    return parts.join(' · ');
  };

  // ── Passo 3: marcação trivial ────────────────────────────────────────────────
  const verifyTrivial = () => {
    const wrong = diffAgainst(trivialTable);
    if (wrong.size > 0) {
      setWrongCells(wrong);
      showProf(feedbackFor(wrong), 8000);
      showBanner('Passo 1 incorreto — marque só os pares final × não-final.', 'error');
      return;
    }
    // Trava os pares triviais e segue
    setWrongCells(new Set());
    setLockedCells(new Set(allPairs.filter(k => trivialTable[k])));
    setStep('PROPAGACAO');
    showBanner('Passo 1 ✓ — pares triviais marcados!', 'success');
    showProf('Agora propague: pares cujo destino já está marcado também ficam marcados.', 7000);
  };

  // ── Passo 4: propagação ──────────────────────────────────────────────────────
  const verifyPropagation = () => {
    const wrong = diffAgainst(correctTable);
    if (wrong.size > 0) {
      setWrongCells(wrong);
      showProf(feedbackFor(wrong), 8000);
      showBanner('Passo 2 incompleto — reveja os pares em vermelho.', 'error');
      return;
    }
    setWrongCells(new Set());
    setLockedCells(new Set(allPairs));      // tabela completa: tudo travado
    setStep('EQUIV');
    updateProgress(`afd-min-${exercise.id}`, 3);
    showBanner('Tabela completa! ★★★', 'success');
  };

  const propagationHint = () => {
    for (const key of allPairs) {
      if (cells[key]) continue;
      const [p, q] = key.split(',');
      for (const sym of alphabet) {
        const tp = transTable[p]?.[sym];
        const tq = transTable[q]?.[sym];
        if (!tp || !tq || tp === tq) continue;
        if (cells[pairKey(tp, tq)]) {
          showProf(`Veja (${p},${q}): com '${sym}' vão para (${tp},${tq}), que já está marcado × → marque (${p},${q}).`, 9000);
          return;
        }
      }
    }
    showProf('Nenhuma propagação restante — se marcou todos, clique em Verificar Passo 2.', 7000);
  };

  // ── Passo 5: grupos de equivalência (pares NÃO marcados) ──────────────────────
  const groups = useMemo(() => {
    if (step !== 'EQUIV') return [];
    const parent = {};
    states.forEach(s => { parent[s] = s; });
    const find = s => { while (parent[s] !== s) { parent[s] = parent[parent[s]]; s = parent[s]; } return s; };
    const union = (a, b) => { const ra = find(a), rb = find(b); if (ra !== rb) parent[rb] = ra; };
    for (const key of allPairs) {
      if (!cells[key]) { const [p, q] = key.split(','); union(p, q); }
    }
    const byRoot = {};
    states.forEach(s => { (byRoot[find(s)] = byRoot[find(s)] || []).push(s); });
    return Object.values(byRoot)
      .sort((a, b) => states.indexOf(a[0]) - states.indexOf(b[0]));
  }, [step, cells, states, allPairs]);

  const finalSet = new Set(finalStates);

  return (
    <div className="min-panel">
      <div className="section-header" style={{ fontSize: 11 }}>Construir Tabela de Pares</div>

      {/* Stepper dos sub-passos */}
      <div className="min-substeps">
        {SUBSTEPS.map((s, i) => {
          const curIdx  = SUBSTEPS.findIndex(x => x.id === step);
          const isCur   = s.id === step;
          const isDone  = i < curIdx;
          return (
            <span key={s.id}
              className={`min-substep${isCur ? ' current' : ''}${isDone ? ' done' : ''}`}>
              {s.label}
            </span>
          );
        })}
      </div>

      {/* ── PARES ── */}
      {step === 'PARES' && (
        <>
          <p className="min-step-text">
            Esta é a <b>tabela triangular</b> com todos os pares {'{p, q}'} de estados
            distintos alcançáveis ({allPairs.length} pares). Cada célula compara dois estados —
            vamos descobrir quais são <b>distinguíveis</b>.
          </p>
          <TriangularTable states={states} userTable={{}} onToggle={() => {}} readOnly />
          <button className="add-test-btn min-step-btn" style={{ background: '#4ade80' }}
            onClick={() => setStep('TRIVIAL')}>
            Iniciar Passo 1: Marcação Trivial →
          </button>
        </>
      )}

      {/* ── TRIVIAL (Passo 3) ── */}
      {step === 'TRIVIAL' && (
        <>
          <p className="min-step-text">
            <b>Passo 1 — Marcação trivial.</b> Marque com <b>×</b> todo par em que
            <b> um estado é final e o outro não</b> (eles nunca serão equivalentes).
          </p>
          <div className="min-final-badges">
            <span style={{ fontWeight: 900, fontSize: 10 }}>Finais:</span>
            {states.map(s => (
              <span key={s} className={`min-state-badge${finalSet.has(s) ? ' final' : ''}`}>
                {s}{finalSet.has(s) ? ' ✓' : ''}
              </span>
            ))}
          </div>
          <TriangularTable states={states} userTable={cells} onToggle={toggleCell}
            wrongCells={wrongCells} />
          <button className="add-test-btn min-step-btn" style={{ background: '#fde047' }}
            onClick={verifyTrivial}>
            Verificar Passo 1 ✓
          </button>
        </>
      )}

      {/* ── PROPAGACAO (Passo 4) ── */}
      {step === 'PROPAGACAO' && (
        <>
          <p className="min-step-text">
            <b>Passo 2 — Propagação.</b> Para cada par ainda não marcado, leia cada símbolo:
            se o par de <b>destino</b> {'{δ(p,a), δ(q,a)}'} já estiver marcado, marque este par
            também. Repita até nada mudar. <i>(células cinza = travadas do passo 1)</i>
          </p>
          <TriangularTable states={states} userTable={cells} onToggle={toggleCell}
            wrongCells={wrongCells} lockedCells={lockedCells} />
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="add-test-btn min-step-btn" style={{ background: '#e0e7ff', flex: '0 0 auto' }}
              onClick={propagationHint}>
              💡 Dica
            </button>
            <button className="add-test-btn min-step-btn" style={{ background: '#fde047', flex: 1 }}
              onClick={verifyPropagation}>
              Verificar Passo 2 ✓
            </button>
          </div>
        </>
      )}

      {/* ── EQUIV (Passo 5) ── */}
      {step === 'EQUIV' && (
        <>
          <p className="min-step-text">
            <b>Passo 3 — Agrupamento.</b> Os pares que sobraram <b>sem ×</b> (marcados ≡) são
            <b> equivalentes</b>. Estados ligados por equivalência viram um só:
          </p>
          <TriangularTable states={states} userTable={cells} onToggle={() => {}}
            lockedCells={lockedCells} highlightEquiv />
          <div className="min-groups">
            {groups.map((members, i) => (
              <div key={i} className="min-group-row">
                <span className="min-group-members">{'{'}{members.join(', ')}{'}'}</span>
                <span className="min-group-arrow">→</span>
                <span className="min-group-rep">{members.join('')}</span>
              </div>
            ))}
          </div>
          <button className="add-test-btn min-step-btn" style={{ background: '#a78bfa' }}
            onClick={onResult}>
            Ver AFD Minimizado →
          </button>
        </>
      )}
    </div>
  );
}
