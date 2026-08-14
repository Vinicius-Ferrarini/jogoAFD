import { useState } from 'react';
import TriangularTable from './TriangularTable';

// Step4_Propagation — passo indutivo de Myhill–Nerode (PROP, desafio principal).
// O aluno seleciona um par branco, PREENCHE a tabela do Inspetor (δ(p,·), δ(q,·)
// e o par de destino) e a VALIDA. Depois decide LINHA A LINHA (símbolo a símbolo):
//   × Distinguível  — se o par de destino daquele símbolo já está marcado ×.
//   ≡ Equivalente   — se os destinos coincidem ou o destino já é equivalente.
//   🤔 Pendente     — se o destino ainda não foi decidido.
// Regra do curto-circuito: UMA linha "×" correta já fecha o par como NÃO-equivalente
// (basta um símbolo distinguir) — bloqueia o resto e marca × na triangular. Para ≡
// só conclui quando TODAS as linhas forem equivalentes; se sobrar pendente, o par
// volta a ficar branco. Todo erro explica onde foi e como corrigir.
const cellInput = (bad, ro) => ({
  width: 56, textAlign: 'center', borderRadius: 4, padding: '2px',
  border: `1px solid ${bad ? '#dc2626' : '#ccc'}`,
  fontFamily: 'var(--font-comic)',
  fontWeight: 700, fontSize: 11, outline: 'none',
  color: bad ? '#dc2626' : '#000',
  background: ro ? '#f3f4f6' : '#fff',
});

export default function Step4_Propagation({ game, marks, lockedCells, setMarks, showProf, onAttempt, onAdvance }) {
  const { rStates, alphabet, allPairs, validateInspectorTable, validatePairRow } = game;

  const [resolved,     setResolved]     = useState(new Set()); // pares validados (verde)
  const [wrongFlash,   setWrongFlash]   = useState(new Set()); // erro de decisão (pisca vermelho)
  const [selectedPair, setSelectedPair] = useState(null);
  // edição da tabela do Inspetor para o par selecionado
  const [inspDelta,     setInspDelta]     = useState({});            // { sym: { p, q, pair } }
  const [inspErrors,    setInspErrors]    = useState(new Set());     // "sym|p"/"sym|q"/"sym|pair"
  const [inspValidated, setInspValidated] = useState(false);
  const [savedTables,   setSavedTables]   = useState({});            // { pair: inspDelta } já validadas
  // decisão por linha (símbolo) do par atual — reiniciada a cada abertura
  const [rowDecisions, setRowDecisions] = useState({});             // { sym: 'x'|'equiv'|'pending' }
  const [rowFlash,     setRowFlash]     = useState(new Set());      // sym com escolha errada (pisca)

  // Brancos = pares não triviais (triviais já vêm travados/cinza)
  const whitePairs = allPairs.filter(k => !lockedCells?.has(k));
  const remaining  = whitePairs.filter(k => !resolved.has(k)).length;
  const allDone    = remaining === 0;

  const closeInspector = () => {
    setSelectedPair(null);
    setRowDecisions({});
    setRowFlash(new Set());
    setInspErrors(new Set());
    setInspValidated(false);
  };

  const openInspector = (key) => {
    setSelectedPair(key);
    setRowDecisions({});
    setRowFlash(new Set());
    if (wrongFlash.size) setWrongFlash(new Set());
    setInspErrors(new Set());
    if (savedTables[key]) { setInspDelta(savedTables[key]); setInspValidated(true); } // restaura tabela já validada
    else { setInspDelta({}); setInspValidated(false); }
  };

  const setInspCell = (sym, field, value) => {
    setInspDelta(prev => ({ ...prev, [sym]: { ...prev[sym], [field]: value } }));
    setInspErrors(new Set());
    setInspValidated(false); // editou → precisa revalidar a tabela
  };

  const validateTable = () => {
    const r = validateInspectorTable(selectedPair, inspDelta);
    setInspErrors(r.errors);
    setInspValidated(r.ok);
    if (r.ok) setSavedTables(prev => ({ ...prev, [selectedPair]: inspDelta }));
    onAttempt?.(r.ok ? 'correct' : 'wrong', r.ok ? null : 'tabela_par_incorreta');
    showProf(r.message, r.ok ? 'feliz' : 'serio');
  };

  // Decisão de UMA linha (símbolo), validada contra o estado atual do tabuleiro.
  const decideRow = (sym, choice) => {
    const r = validatePairRow(selectedPair, sym, choice, marks, resolved);
    onAttempt?.(r.ok ? 'correct' : 'wrong', r.ok ? null : 'decisao_linha_incorreta');
    if (!r.ok) {
      setRowFlash(new Set([sym]));
      showProf(r.message, 'serio');
      return;
    }
    setRowFlash(new Set());

    // × correta → curto-circuito: 1 símbolo basta para o par ser NÃO-equivalente
    if (choice === 'x') {
      setMarks(prev => ({ ...prev, [selectedPair]: true }));
      setResolved(prev => new Set(prev).add(selectedPair));
      showProf(r.message + ' As outras linhas nem precisam ser checadas.', 'feliz');
      closeInspector();
      return;
    }

    const next = { ...rowDecisions, [sym]: choice };
    setRowDecisions(next);

    // ainda faltam linhas a classificar → segue
    if (Object.keys(next).length < alphabet.length) {
      showProf(r.message, choice === 'equiv' ? 'feliz' : 'explicando');
      return;
    }

    // todas classificadas (nenhuma 'x', senão teria curto-circuitado)
    if (Object.values(next).every(s => s === 'equiv')) {
      setMarks(prev => ({ ...prev, [selectedPair]: false }));
      setResolved(prev => new Set(prev).add(selectedPair));
      showProf('✓ Nenhum símbolo distingue → o par é EQUIVALENTE (≡).', 'feliz');
      closeInspector();
    } else {
      showProf('🤔 Algum símbolo tem destino indeciso — o par fica PENDENTE. Resolva esses destinos e volte aqui depois.', 'explicando');
      closeInspector();
    }
  };

  const [p, q] = selectedPair ? selectedPair.split(',') : ['', ''];

  return (
    <div className="min-panel">
      <div className="section-header" style={{ fontSize: 11 }}>Passo 2 — Propagação</div>
      <p className="min-step-text">
        Clique num <b>quadrado branco</b>, <b>preencha</b> a tabela do par (δ de cada estado e o
        par de destino, ex.: <b>q0q1</b>) e <b>valide</b>. Depois decida <b>cada linha</b>: olhe o
        par de destino na tabela triangular — já está <b>×</b> (distinguível), é <b>≡</b> (equivalente)
        ou ainda <b>indeciso</b> (pendente)? <i>(cinza = triviais)</i>
      </p>

      {/* Progresso de validação */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 900 }}>
        <span style={{ background: '#86efac', border: '2px solid #000', borderRadius: 6, padding: '2px 10px' }}>
          {resolved.size} / {whitePairs.length} validados
        </span>
        {!allDone && <span style={{ color: '#92400e' }}>faltam {remaining} quadrado(s)</span>}
        {allDone && <span style={{ color: '#14532d' }}>✓ todos validados!</span>}
      </div>

      <TriangularTable
        states={rStates}
        userTable={marks}
        lockedCells={lockedCells}
        validatedCells={resolved}
        wrongCells={wrongFlash}
        selectedPair={selectedPair}
        onInspectCell={openInspector}
        onToggle={() => {}}
      />

      {/* Inspetor de Pares — tabela preenchida/validada + decisão por linha */}
      {selectedPair ? (
        <div className="min-inspector">
          <div className="min-inspector-title">
            Par selecionado: <b>({selectedPair})</b>
            {inspValidated && <span style={{ color: '#16a34a', marginLeft: 8 }}>✓ tabela validada</span>}
          </div>
          <table className="min-inspector-table">
            <thead>
              <tr>
                <th>símbolo</th>
                <th>δ({p}, ·)</th>
                <th>δ({q}, ·)</th>
                <th>par de destino</th>
                <th>sua decisão</th>
              </tr>
            </thead>
            <tbody>
              {alphabet.map(sym => {
                const cell = inspDelta[sym] || {};
                const decided = rowDecisions[sym];
                return (
                  <tr key={sym}>
                    <td className="min-insp-sym">{sym}</td>
                    <td><input value={cell.p || ''} maxLength={3} placeholder="?" readOnly={inspValidated}
                      style={cellInput(inspErrors.has(`${sym}|p`), inspValidated)}
                      onChange={e => setInspCell(sym, 'p', e.target.value)} /></td>
                    <td><input value={cell.q || ''} maxLength={3} placeholder="?" readOnly={inspValidated}
                      style={cellInput(inspErrors.has(`${sym}|q`), inspValidated)}
                      onChange={e => setInspCell(sym, 'q', e.target.value)} /></td>
                    <td><input value={cell.pair || ''} maxLength={7} placeholder="ex: q0q1" readOnly={inspValidated}
                      style={{ ...cellInput(inspErrors.has(`${sym}|pair`), inspValidated), width: 70 }}
                      onChange={e => setInspCell(sym, 'pair', e.target.value)} /></td>
                    <td className={decided === 'pending' ? 'min-insp-pending-cell' : ''}>
                      {!inspValidated ? (
                        <span className="min-insp-neutral">—</span>
                      ) : decided === 'x' ? (
                        <span className="min-insp-locked-x">× distingue</span>
                      ) : decided === 'equiv' ? (
                        <span className="min-insp-locked-eq">≡</span>
                      ) : decided === 'pending' ? (
                        <span className="min-insp-locked-pend">🤔 pendente</span>
                      ) : (
                        <div className={`min-insp-rowbtns${rowFlash.has(sym) ? ' flash' : ''}`}>
                          <button className="min-insp-rowbtn x"    title="Distinguíveis (×)" onClick={() => decideRow(sym, 'x')}>×</button>
                          <button className="min-insp-rowbtn eq"   title="Equivalentes (≡)"  onClick={() => decideRow(sym, 'equiv')}>≡</button>
                          <button className="min-insp-rowbtn pend" title="Deixar pendente"    onClick={() => decideRow(sym, 'pending')}>🤔</button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {!inspValidated ? (
            <>
              <div className="min-insp-hint">
                Preencha δ de cada estado e o par de destino (estilo q0q1) e valide a tabela.
              </div>
              <button className="add-test-btn min-step-btn" style={{ background: '#fde047', marginTop: 0 }}
                onClick={validateTable}>
                Validar tabela ✓
              </button>
            </>
          ) : (
            <div className="min-insp-hint">
              Decida <b>cada linha</b>: confira o par de destino na tabela triangular acima.
              Uma linha <b>×</b> já fecha o par como não-equivalente; <b>≡</b> só vale se TODAS as
              linhas forem equivalentes.
            </div>
          )}
        </div>
      ) : (
        <div className="min-insp-placeholder">
          {allDone
            ? 'Todos os quadrados foram validados! Clique em Avançar.'
            : 'Selecione um quadrado branco (clique numa célula) para preencher e analisar.'}
        </div>
      )}

      {allDone && (
        <button className="add-test-btn min-step-btn" style={{ background: '#4ade80' }}
          onClick={onAdvance}>
          Avançar → Resultado
        </button>
      )}
    </div>
  );
}
