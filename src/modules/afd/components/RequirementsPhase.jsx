import { useState } from 'react';

export default function RequirementsPhase({
  states, alphabet, initialState, finalStates, transTable, showBanner, onAdvance,
}) {
  const [reqChecks,    setReqChecks]    = useState({ isDFA: false, unreachable: false, isTotal: false });
  const [reqRows,      setReqRows]      = useState(['', '']);
  const [reqCols,      setReqCols]      = useState(['']);
  const [reqCells,     setReqCells]     = useState({});
  const [reqInitRow,   setReqInitRow]   = useState(0);
  const [reqFinalRows, setReqFinalRows] = useState(new Set());
  const [reqErrors,    setReqErrors]    = useState(new Set());
  const [reqResults,   setReqResults]   = useState({ isDFA: null, unreachableList: null, isTotal: null });

  const clearReqChecks = () => {
    setReqChecks({ isDFA: false, unreachable: false, isTotal: false });
    setReqResults({ isDFA: null, unreachableList: null, isTotal: null });
    setReqErrors(new Set());
  };

  const handleVerifyReq = (checkName) => {
    const rNames = reqRows.map(s => s.trim());
    const cNames = reqCols.map(s => s.trim());

    if (checkName === 'isDFA') {
      const names = rNames.filter(Boolean);
      const result = names.length === new Set(names).size;
      setReqResults(p => ({ ...p, isDFA: result }));
      setReqChecks(p => ({ ...p, isDFA: true }));

    } else if (checkName === 'unreachable') {
      const initName  = rNames[reqInitRow] || '';
      const allStates = [...new Set(rNames.filter(Boolean))];
      const userTrans = [];
      rNames.forEach((rn, ri) => {
        cNames.forEach((cn, ci) => {
          const dest = (reqCells[`${ri},${ci}`] || '').trim();
          if (rn && cn && dest) userTrans.push({ from: rn, to: dest });
        });
      });
      const reachable = new Set([initName]);
      const queue = [initName];
      while (queue.length) {
        const s = queue.shift();
        userTrans.filter(t => t.from === s).forEach(t => {
          if (!reachable.has(t.to)) { reachable.add(t.to); queue.push(t.to); }
        });
      }
      const unreachable = allStates.filter(s => !reachable.has(s));
      setReqResults(p => ({ ...p, unreachableList: unreachable }));
      setReqChecks(p => ({ ...p, unreachable: true }));

    } else if (checkName === 'isTotal') {
      let total = true;
      outer: for (let ri = 0; ri < reqRows.length; ri++)
        for (let ci = 0; ci < reqCols.length; ci++)
          if (!(reqCells[`${ri},${ci}`] || '').trim()) { total = false; break outer; }
      setReqResults(p => ({ ...p, isTotal: total }));
      setReqChecks(p => ({ ...p, isTotal: true }));
    }
  };

  const reqAllDone = reqChecks.isDFA && reqChecks.unreachable && reqChecks.isTotal;

  const handleAdvanceFromReq = () => {
    if (!reqAllDone) return;
    const rNames = reqRows.map(s => s.trim());
    const cNames = reqCols.map(s => s.trim());
    const errors = new Set();

    if (reqRows.length !== states.length) {
      showBanner(`A tabela deve ter ${states.length} linha${states.length !== 1 ? 's' : ''} (uma por estado).`, 'error');
      return;
    }
    if (reqCols.length !== alphabet.length) {
      showBanner(`A tabela deve ter ${alphabet.length} coluna${alphabet.length !== 1 ? 's' : ''} (uma por símbolo).`, 'error');
      return;
    }

    const stateSet = new Set(states);
    const symSet   = new Set(alphabet);
    rNames.forEach((rn, ri) => { if (!stateSet.has(rn)) errors.add(`row-${ri}`); });
    cNames.forEach((cn, ci) => { if (!symSet.has(cn))   errors.add(`col-${ci}`); });

    if (rNames[reqInitRow] !== initialState) errors.add('init');
    rNames.forEach((rn, ri) => {
      const userFinal   = reqFinalRows.has(ri);
      const shouldFinal = finalStates.includes(rn);
      if (userFinal !== shouldFinal) errors.add(`final-${ri}`);
    });

    rNames.forEach((rn, ri) => {
      if (!stateSet.has(rn)) return;
      cNames.forEach((cn, ci) => {
        if (!symSet.has(cn)) return;
        const cellVal  = (reqCells[`${ri},${ci}`] || '').trim();
        const expected = transTable[rn]?.[cn] ?? '';
        if (cellVal !== (expected ?? '')) errors.add(`${ri},${ci}`);
      });
    });

    if (errors.size > 0) {
      setReqErrors(errors);
      showBanner('Tabela incorreta — corrija os campos em vermelho.', 'error');
      return;
    }
    setReqErrors(new Set());
    onAdvance();
  };

  return (
    <div className="min-panel">
      <div className="section-header" style={{ fontSize:11 }}>Verificar Requisitos</div>
      <p style={{ fontSize:11, color:'#555', margin:0 }}>
        Monte a tabela de transições: ajuste o tamanho (+/−), preencha estados, símbolos e transições, marque o inicial (→) e os finais (*). Depois verifique cada requisito.
      </p>

      {/* Controles de tamanho */}
      <div style={{ display:'flex', gap:12, fontSize:11, flexWrap:'wrap' }}>
        <div style={{ display:'flex', alignItems:'center', gap:4 }}>
          <span style={{ fontWeight:900 }}>Linhas:</span>
          <button onClick={() => { setReqRows(p => [...p, '']); clearReqChecks(); setReqCells({}); }}
            style={{ width:22, height:22, fontWeight:900, fontSize:14, lineHeight:1,
              border:'2px solid #000', borderRadius:4, background:'#bbf7d0', cursor:'pointer' }}>+</button>
          <button
            onClick={() => { if (reqRows.length > 1) { setReqRows(p => p.slice(0,-1)); setReqInitRow(i => Math.min(i, reqRows.length-2)); setReqFinalRows(prev => new Set([...prev].filter(i => i < reqRows.length-1))); clearReqChecks(); setReqCells({}); } }}
            disabled={reqRows.length <= 1}
            style={{ width:22, height:22, fontWeight:900, fontSize:16, lineHeight:1,
              border:'2px solid #000', borderRadius:4,
              background: reqRows.length <= 1 ? '#eee' : '#fca5a5',
              cursor: reqRows.length <= 1 ? 'not-allowed' : 'pointer' }}>−</button>
          <span style={{ fontWeight:700 }}>{reqRows.length}</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:4 }}>
          <span style={{ fontWeight:900 }}>Colunas:</span>
          <button onClick={() => { setReqCols(p => [...p, '']); clearReqChecks(); setReqCells({}); }}
            style={{ width:22, height:22, fontWeight:900, fontSize:14, lineHeight:1,
              border:'2px solid #000', borderRadius:4, background:'#bbf7d0', cursor:'pointer' }}>+</button>
          <button
            onClick={() => { if (reqCols.length > 1) { setReqCols(p => p.slice(0,-1)); clearReqChecks(); setReqCells({}); } }}
            disabled={reqCols.length <= 1}
            style={{ width:22, height:22, fontWeight:900, fontSize:16, lineHeight:1,
              border:'2px solid #000', borderRadius:4,
              background: reqCols.length <= 1 ? '#eee' : '#fca5a5',
              cursor: reqCols.length <= 1 ? 'not-allowed' : 'pointer' }}>−</button>
          <span style={{ fontWeight:700 }}>{reqCols.length}</span>
        </div>
      </div>

      {/* Tabela de transições editável */}
      <div className="min-table-scroll">
        <table className="req-trans-table">
          <thead>
            <tr>
              <th className="req-th req-th-delta">δ</th>
              {reqCols.map((sym, ci) => (
                <th key={ci}
                  className={`req-th${reqErrors.has(`col-${ci}`) ? ' req-err' : ''}`}
                  style={{ padding:0, minWidth:42 }}>
                  <input value={sym}
                    onChange={e => { const v=e.target.value; setReqCols(p => { const n=[...p]; n[ci]=v; return n; }); clearReqChecks(); }}
                    style={{ width:38, textAlign:'center', border:'none', background:'transparent',
                      fontFamily:"'Comic Sans MS','Comic Neue',cursive,sans-serif",
                      fontWeight:900, fontSize:11, outline:'none',
                      color: reqErrors.has(`col-${ci}`) ? '#dc2626' : undefined }}
                    placeholder="?" maxLength={2} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reqRows.map((rn, ri) => {
              const isInit   = reqInitRow === ri;
              const isFinal  = reqFinalRows.has(ri);
              const rowErr   = reqErrors.has(`row-${ri}`) || (reqErrors.has('init') && isInit);
              const finalErr = reqErrors.has(`final-${ri}`);
              return (
                <tr key={ri}>
                  <th className={`req-th req-state-cell${isInit ? ' req-initial' : (isFinal ? ' req-final' : '')}${rowErr || finalErr ? ' req-err' : ''}`}
                    style={{ padding:'2px 4px', minWidth:96 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:2 }}>
                      <button onClick={() => setReqInitRow(ri)} title="Marcar como estado inicial"
                        className={`req-marker-btn${isInit ? ' active-init' : ''}`}>→</button>
                      <button onClick={() => setReqFinalRows(prev => { const n=new Set(prev); n.has(ri)?n.delete(ri):n.add(ri); return n; })} title="Marcar como estado final"
                        className={`req-marker-btn${isFinal ? ' active-final' : ''}`}>*</button>
                      <input value={rn}
                        onChange={e => { const v=e.target.value; setReqRows(p => { const n=[...p]; n[ri]=v; return n; }); clearReqChecks(); }}
                        style={{ width:30, textAlign:'center', border:'none', background:'transparent',
                          fontFamily:"'Comic Sans MS','Comic Neue',cursive,sans-serif",
                          fontWeight:900, fontSize:11, outline:'none',
                          color: rowErr ? '#dc2626' : undefined }}
                        placeholder="?" maxLength={3} />
                    </div>
                  </th>
                  {reqCols.map((cn, ci) => {
                    const cellErr = reqErrors.has(`${ri},${ci}`);
                    return (
                      <td key={ci}
                        className={`req-td${cellErr ? ' req-missing' : ''}`}
                        style={{ padding:0 }}>
                        <input value={reqCells[`${ri},${ci}`] || ''}
                          onChange={e => { const v=e.target.value; setReqCells(p => ({ ...p, [`${ri},${ci}`]: v })); clearReqChecks(); }}
                          style={{ width:38, textAlign:'center', border:'none', background:'transparent',
                            fontFamily:"'Comic Sans MS','Comic Neue',cursive,sans-serif",
                            fontWeight:700, fontSize:11, outline:'none',
                            color: cellErr ? '#dc2626' : undefined }}
                          placeholder="?" maxLength={3} />
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
          <span className="req-check-icon">{reqChecks.isDFA ? (reqResults.isDFA ? '✅' : '❌') : '🔲'}</span>
          <span className="req-check-label">1. É um AFD (determinístico)?</span>
          {!reqChecks.isDFA && (
            <button className="req-verify-btn" onClick={() => handleVerifyReq('isDFA')}>Verificar</button>
          )}
        </div>
        {reqChecks.isDFA && (
          <div className={`req-result ${reqResults.isDFA ? 'ok' : 'err'}`}>
            {reqResults.isDFA
              ? '✓ Sim — cada par (estado, símbolo) tem exatamente uma transição. É determinístico.'
              : '✗ Não — há estados com nomes repetidos (múltiplas linhas para o mesmo estado). Isso caracteriza não-determinismo.'}
          </div>
        )}
      </div>

      {/* Verificação 2 — Estados inacessíveis? */}
      <div className="req-check">
        <div className="req-check-header">
          <span className="req-check-icon">{reqChecks.unreachable ? (reqResults.unreachableList?.length === 0 ? '✅' : '⚠️') : '🔲'}</span>
          <span className="req-check-label">2. Estados inacessíveis?</span>
          {!reqChecks.unreachable && (
            <button className="req-verify-btn" onClick={() => handleVerifyReq('unreachable')}>Verificar</button>
          )}
        </div>
        {reqChecks.unreachable && (
          <div className={`req-result ${reqResults.unreachableList?.length === 0 ? 'ok' : 'warn'}`}>
            {reqResults.unreachableList?.length === 0
              ? `✓ Nenhum — todos os estados são acessíveis a partir do estado marcado com →.`
              : `⚠ Inacessíveis: {${reqResults.unreachableList?.join(', ')}} — remova-os antes de minimizar.`}
          </div>
        )}
      </div>

      {/* Verificação 3 — Função total? */}
      <div className="req-check">
        <div className="req-check-header">
          <span className="req-check-icon">{reqChecks.isTotal ? (reqResults.isTotal ? '✅' : '❌') : '🔲'}</span>
          <span className="req-check-label">3. Função transição total?</span>
          {!reqChecks.isTotal && (
            <button className="req-verify-btn" onClick={() => handleVerifyReq('isTotal')}>Verificar</button>
          )}
        </div>
        {reqChecks.isTotal && (
          <div className={`req-result ${reqResults.isTotal ? 'ok' : 'err'}`}>
            {reqResults.isTotal
              ? '✓ Sim — cada estado tem transição definida para cada símbolo. A função δ é total.'
              : '✗ Incompleta — há células vazias na tabela. A função δ deve ser total para minimizar.'}
          </div>
        )}
      </div>

      <button className="add-test-btn"
        style={{ alignSelf:'stretch', padding:'10px', fontSize:13, fontWeight:'bold', marginTop:4,
          background: reqAllDone ? '#4ade80' : '#d1d5db',
          cursor: reqAllDone ? 'pointer' : 'not-allowed' }}
        onClick={handleAdvanceFromReq}
        disabled={!reqAllDone}>
        Avançar → Construir Tabela
      </button>
    </div>
  );
}
