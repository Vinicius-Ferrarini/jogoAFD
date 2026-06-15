import { useState } from 'react';
import TriangularTable from './TriangularTable';

// Step4_Propagation — passo indutivo de Myhill–Nerode (PROP, desafio principal).
// O aluno faz TUDO, célula por célula. Ao selecionar um par branco, ele PREENCHE
// a tabela do Inspetor (δ(p,·), δ(q,·) e o par de destino estilo q0q1) e a VALIDA;
// só então decide Distinguíveis (×) ou Equivalentes (≡), que também é validado.
// Acertou a decisão → célula fica VERDE e trava. Só avança com todos os brancos
// validados. O jogo nunca preenche nem marca nada por ele.
const cellInput = (bad, ro) => ({
  width: 56, textAlign: 'center', borderRadius: 4, padding: '2px',
  border: `1px solid ${bad ? '#dc2626' : '#ccc'}`,
  fontFamily: "'Comic Sans MS','Comic Neue',cursive,sans-serif",
  fontWeight: 700, fontSize: 11, outline: 'none',
  color: bad ? '#dc2626' : '#000',
  background: ro ? '#f3f4f6' : '#fff',
});

export default function Step4_Propagation({ game, marks, lockedCells, setMarks, showProf, onAdvance }) {
  const { rStates, alphabet, allPairs, inspectPair, validateInspectorTable, validatePairAction } = game;

  const [resolved,     setResolved]     = useState(new Set()); // pares validados (verde)
  const [wrongFlash,   setWrongFlash]   = useState(new Set()); // erro de decisão (pisca vermelho)
  const [selectedPair, setSelectedPair] = useState(null);
  // edição da tabela do Inspetor para o par selecionado
  const [inspDelta,     setInspDelta]     = useState({});            // { sym: { p, q, pair } }
  const [inspErrors,    setInspErrors]    = useState(new Set());     // "sym|p"/"sym|q"/"sym|pair"
  const [inspValidated, setInspValidated] = useState(false);
  const [savedTables,   setSavedTables]   = useState({});            // { pair: inspDelta } já validadas

  // Brancos = pares não triviais (triviais já vêm travados/cinza)
  const whitePairs = allPairs.filter(k => !lockedCells?.has(k));
  const remaining  = whitePairs.filter(k => !resolved.has(k)).length;
  const allDone    = remaining === 0;

  const openInspector = (key) => {
    setSelectedPair(key);
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
    showProf(r.message, r.ok ? 'feliz' : 'serio');
  };

  // Decisão committal (× ou ≡): validada contra o estado atual do tabuleiro.
  const decide = (markedX) => {
    const r = validatePairAction(selectedPair, markedX, marks, resolved);
    if (r.ok) {
      setMarks(prev => ({ ...prev, [selectedPair]: markedX }));
      setResolved(prev => new Set(prev).add(selectedPair));
      setWrongFlash(new Set());
      setSelectedPair(null);
      showProf(r.message, 'feliz');
    } else {
      setWrongFlash(new Set([selectedPair]));
      showProf(r.message, 'serio');
    }
  };

  // Deixar pendente: sempre permitido — fecha sem resolver; volta-se depois.
  const deferPair = () => {
    showProf('🤔 Par deixado pendente. Resolva os destinos que ainda faltam e volte aqui depois.', 'explicando');
    setSelectedPair(null);
  };

  const [p, q] = selectedPair ? selectedPair.split(',') : ['', ''];
  const inspRows = selectedPair ? inspectPair(selectedPair, marks) : []; // p/ coluna "destino ×?" após validar
  const markedBySym = {};
  inspRows.forEach(r => { markedBySym[r.sym] = r; });

  return (
    <div className="min-panel">
      <div className="section-header" style={{ fontSize: 11 }}>Passo 2 — Propagação</div>
      <p className="min-step-text">
        Resolva <b>cada quadrado branco</b>: clique nele, <b>preencha</b> a tabela do par (δ de cada
        estado e o par de destino, ex.: <b>q0q1</b>) e <b>valide</b>. Depois decida — <b>Distinguíveis (×)</b>
        se algum símbolo leva a um par já distinguível, ou <b>Equivalentes (≡)</b>. <i>(cinza = triviais)</i>
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

      {/* Inspetor de Pares — tabela preenchida e validada pelo aluno */}
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
                <th>destino ×?</th>
              </tr>
            </thead>
            <tbody>
              {alphabet.map(sym => {
                const cell = inspDelta[sym] || {};
                const info = markedBySym[sym];
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
                    <td>
                      {!inspValidated
                        ? <span className="min-insp-neutral">—</span>
                        : info?.same
                          ? <span className="min-insp-neutral">— (iguais)</span>
                          : info?.destMarked
                            ? <span className="min-insp-marked">❌ marcado!</span>
                            : <span className="min-insp-empty">não marcado</span>}
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
            <>
              <div className="min-insp-hint">
                Você decide: algum destino já está marcado ×? Todos já decididos? Ou ainda há um indeciso?
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="add-test-btn min-step-btn" style={{ background: '#fca5a5', flex: 1, marginTop: 0 }}
                  onClick={() => decide(true)}>
                  ❌ Distinguíveis (×)
                </button>
                <button className="add-test-btn min-step-btn" style={{ background: '#bbf7d0', flex: 1, marginTop: 0 }}
                  onClick={() => decide(false)}>
                  ≡ Equivalentes
                </button>
                <button className="add-test-btn min-step-btn" style={{ background: '#fde68a', flex: 1, marginTop: 0 }}
                  onClick={deferPair}>
                  🤔 Deixar pendente
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="min-insp-placeholder">
          {allDone
            ? 'Todos os quadrados foram validados! Clique em Avançar.'
            : 'Selecione um quadrado branco (clique numa célula) para preencher e analisar.'}
        </div>
      )}

      <button className="add-test-btn min-step-btn"
        style={{ background: allDone ? '#4ade80' : '#d1d5db', cursor: allDone ? 'pointer' : 'not-allowed' }}
        onClick={() => { if (allDone) onAdvance(); }}
        disabled={!allDone}>
        {allDone ? 'Avançar → Resultado' : `Valide todos os quadrados (${remaining} restante(s))`}
      </button>
    </div>
  );
}
