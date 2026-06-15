import { useState } from 'react';

// Step1_Preparation — o aluno CONSTRÓI a tabela de transição δ (passo PREP).
// Apenas a tabela: ajusta linhas/colunas (+/−), preenche estados, símbolos e
// destinos. Inicial e finais NÃO são marcados aqui (são dados do exercício).
// Componente "burro": estado de edição vem do MinGame (prep/setPrep); a verdade
// vem do hook (validadores puros). Depois verifica os 3 requisitos.
const inputStyle = (bad, weight = 700) => ({
  width: 38, textAlign: 'center', border: 'none', background: 'transparent',
  fontFamily: "'Comic Sans MS','Comic Neue',cursive,sans-serif",
  fontWeight: weight, fontSize: 11, outline: 'none',
  color: bad ? '#dc2626' : '#000',
});

export default function Step1_Preparation({ game, prep, setPrep, showProf, onAdvance }) {
  const { validateIsDFA, validateIsTotal, checkUnreachable, validateTransitionTable } = game;
  const { rows, cols, cells } = prep;

  const [checks,     setChecks]     = useState({ isDFA: null, isTotal: null, unreachable: null });
  const [errorCells, setErrorCells] = useState(new Set()); // "ri,ci"
  const [errorAxes,  setErrorAxes]  = useState(new Set()); // "row-ri"/"col-ci"
  const [sizeError,  setSizeError]  = useState(null);

  // Qualquer edição zera a verificação (obriga revalidar) e limpa destaques.
  const clearChecks = () => {
    setChecks({ isDFA: null, isTotal: null, unreachable: null });
    setErrorCells(new Set()); setErrorAxes(new Set()); setSizeError(null);
  };

  // ── Mutadores de prep ──────────────────────────────────────────────────────
  const addRow = () => { setPrep(p => ({ ...p, rows: [...p.rows, ''] })); clearChecks(); };
  const delRow = () => {
    if (rows.length <= 1) return;
    setPrep(p => {
      const last = p.rows.length - 1;
      const nc = { ...p.cells };
      p.cols.forEach((_, ci) => delete nc[`${last},${ci}`]);
      return { ...p, rows: p.rows.slice(0, -1), cells: nc };
    });
    clearChecks();
  };
  const addCol = () => { setPrep(p => ({ ...p, cols: [...p.cols, ''] })); clearChecks(); };
  const delCol = () => {
    if (cols.length <= 1) return;
    setPrep(p => {
      const last = p.cols.length - 1;
      const nc = { ...p.cells };
      p.rows.forEach((_, ri) => delete nc[`${ri},${last}`]);
      return { ...p, cols: p.cols.slice(0, -1), cells: nc };
    });
    clearChecks();
  };
  const setRowLabel = (ri, v) => { setPrep(p => { const n = [...p.rows]; n[ri] = v; return { ...p, rows: n }; }); clearChecks(); };
  const setColLabel = (ci, v) => { setPrep(p => { const n = [...p.cols]; n[ci] = v; return { ...p, cols: n }; }); clearChecks(); };
  const setCell     = (ri, ci, v) => { setPrep(p => ({ ...p, cells: { ...p.cells, [`${ri},${ci}`]: v } })); clearChecks(); };

  // ── Verificações (cada uma com feedback do Maurílio, estilo aula) ──────────
  const verify = (which) => {
    if (which === 'isDFA') {
      const r = validateIsDFA(prep);
      setErrorAxes(r.errorAxes); setErrorCells(new Set()); setSizeError(null);
      setChecks(c => ({ ...c, isDFA: r.ok }));
      showProf(r.message, r.ok ? 'feliz' : 'serio');
    } else if (which === 'isTotal') {
      const r = validateIsTotal(prep);
      setErrorCells(r.errorCells); setErrorAxes(new Set()); setSizeError(null);
      setChecks(c => ({ ...c, isTotal: r.ok }));
      showProf(r.message, r.ok ? 'feliz' : 'serio');
    } else if (which === 'unreachable') {
      const r = checkUnreachable(prep);
      setErrorCells(new Set()); setErrorAxes(new Set()); setSizeError(null);
      setChecks(c => ({ ...c, unreachable: r.unreachable.length === 0 }));
      showProf(r.message, 'explicando');
    }
  };

  const allChecked = checks.isDFA !== null && checks.isTotal !== null && checks.unreachable !== null;

  const handleAdvance = () => {
    const r = validateTransitionTable(prep);
    setErrorCells(r.errorCells); setErrorAxes(r.errorAxes); setSizeError(r.sizeError);
    if (r.ok) { showProf(r.message, 'feliz'); onAdvance(); }
    else showProf(r.message, 'serio');
  };

  return (
    <div className="min-panel">
      <div className="section-header" style={{ fontSize: 11 }}>Montar a Tabela de Transição (δ)</div>
      <p style={{ fontSize: 11, color: '#555', margin: 0 }}>
        Monte a função δ do AFD: ajuste o tamanho (+/−), escreva os estados nas linhas, os símbolos
        nas colunas e o destino de cada transição. Depois verifique cada requisito.
      </p>

      {/* Controles de tamanho */}
      <div style={{ display: 'flex', gap: 12, fontSize: 11, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontWeight: 900 }}>Linhas:</span>
          <button onClick={addRow} style={{ width: 22, height: 22, fontWeight: 900, fontSize: 14, lineHeight: 1, border: '2px solid #000', borderRadius: 4, background: '#bbf7d0', cursor: 'pointer' }}>+</button>
          <button onClick={delRow} disabled={rows.length <= 1} style={{ width: 22, height: 22, fontWeight: 900, fontSize: 16, lineHeight: 1, border: '2px solid #000', borderRadius: 4, background: rows.length <= 1 ? '#eee' : '#fca5a5', cursor: rows.length <= 1 ? 'not-allowed' : 'pointer' }}>−</button>
          <span style={{ fontWeight: 700 }}>{rows.length}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontWeight: 900 }}>Colunas:</span>
          <button onClick={addCol} style={{ width: 22, height: 22, fontWeight: 900, fontSize: 14, lineHeight: 1, border: '2px solid #000', borderRadius: 4, background: '#bbf7d0', cursor: 'pointer' }}>+</button>
          <button onClick={delCol} disabled={cols.length <= 1} style={{ width: 22, height: 22, fontWeight: 900, fontSize: 16, lineHeight: 1, border: '2px solid #000', borderRadius: 4, background: cols.length <= 1 ? '#eee' : '#fca5a5', cursor: cols.length <= 1 ? 'not-allowed' : 'pointer' }}>−</button>
          <span style={{ fontWeight: 700 }}>{cols.length}</span>
        </div>
      </div>

      {sizeError && <div className="req-result err" style={{ margin: 0 }}>{sizeError}</div>}

      {/* Tabela δ editável (só a tabela: estados × símbolos → destino) */}
      <div className="min-table-scroll">
        <table className="req-trans-table">
          <thead>
            <tr>
              <th className="req-th req-th-delta">δ</th>
              {cols.map((sym, ci) => (
                <th key={ci} className={`req-th${errorAxes.has(`col-${ci}`) ? ' req-err' : ''}`} style={{ padding: 0, minWidth: 42 }}>
                  <input value={sym} placeholder="?" maxLength={2}
                    style={inputStyle(errorAxes.has(`col-${ci}`), 900)}
                    onChange={e => setColLabel(ci, e.target.value)} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((rn, ri) => {
              const rowErr = errorAxes.has(`row-${ri}`);
              return (
                <tr key={ri}>
                  <th className={`req-th req-state-cell${rowErr ? ' req-err' : ''}`} style={{ padding: '2px 6px', minWidth: 56 }}>
                    <input value={rn} placeholder="?" maxLength={3}
                      style={{ ...inputStyle(rowErr, 900), width: 44 }}
                      onChange={e => setRowLabel(ri, e.target.value)} />
                  </th>
                  {cols.map((_, ci) => {
                    const cellErr = errorCells.has(`${ri},${ci}`);
                    return (
                      <td key={ci} className={`req-td${cellErr ? ' req-missing' : ''}`} style={{ padding: 0 }}>
                        <input value={cells[`${ri},${ci}`] || ''} placeholder="?" maxLength={3}
                          style={inputStyle(cellErr)}
                          onChange={e => setCell(ri, ci, e.target.value)} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Verificação 1 — É AFD? */}
      <div className="req-check">
        <div className="req-check-header">
          <span className="req-check-icon">{checks.isDFA === null ? '🔲' : (checks.isDFA ? '✅' : '❌')}</span>
          <span className="req-check-label">1. É um AFD (determinístico)?</span>
          {checks.isDFA === null && <button className="req-verify-btn" onClick={() => verify('isDFA')}>Verificar</button>}
        </div>
        {checks.isDFA !== null && (
          <div className={`req-result ${checks.isDFA ? 'ok' : 'err'}`}>
            {checks.isDFA
              ? '✓ Sim — cada estado tem uma linha única, logo cada (estado, símbolo) tem um só destino.'
              : '✗ Não — há estados com nome repetido (várias linhas para o mesmo estado): isso é não-determinismo.'}
          </div>
        )}
      </div>

      {/* Verificação 2 — δ total? */}
      <div className="req-check">
        <div className="req-check-header">
          <span className="req-check-icon">{checks.isTotal === null ? '🔲' : (checks.isTotal ? '✅' : '❌')}</span>
          <span className="req-check-label">2. Função de transição total?</span>
          {checks.isTotal === null && <button className="req-verify-btn" onClick={() => verify('isTotal')}>Verificar</button>}
        </div>
        {checks.isTotal !== null && (
          <div className={`req-result ${checks.isTotal ? 'ok' : 'err'}`}>
            {checks.isTotal
              ? '✓ Sim — toda célula está preenchida: cada estado tem saída para cada símbolo.'
              : '✗ Incompleta — há células vazias (em vermelho). A função δ precisa ser total para minimizar.'}
          </div>
        )}
      </div>

      {/* Verificação 3 — inalcançáveis? */}
      <div className="req-check">
        <div className="req-check-header">
          <span className="req-check-icon">{checks.unreachable === null ? '🔲' : (checks.unreachable ? '✅' : '⚠️')}</span>
          <span className="req-check-label">3. Estados inalcançáveis?</span>
          {checks.unreachable === null && <button className="req-verify-btn" onClick={() => verify('unreachable')}>Verificar</button>}
        </div>
        {checks.unreachable !== null && (
          <div className={`req-result ${checks.unreachable ? 'ok' : 'warn'}`}>
            {checks.unreachable
              ? '✓ Nenhum — todos os estados são alcançáveis a partir do inicial.'
              : '⚠ Há estados inalcançáveis (veja a fala do Maurílio). Eles não influenciam a linguagem.'}
          </div>
        )}
      </div>

      <button className="add-test-btn"
        style={{ alignSelf: 'stretch', padding: '10px', fontSize: 13, fontWeight: 'bold', marginTop: 4,
          background: allChecked ? '#4ade80' : '#d1d5db',
          cursor: allChecked ? 'pointer' : 'not-allowed' }}
        onClick={() => { if (allChecked) handleAdvance(); }}
        disabled={!allChecked}>
        Avançar → Montar Tabela
      </button>
    </div>
  );
}
