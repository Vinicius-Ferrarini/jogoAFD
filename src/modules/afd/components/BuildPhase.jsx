import { useState } from 'react';
import { pairKey } from '../utils/dfaAlgorithms';

export default function BuildPhase({
  states, correctTable, exercise, updateProgress, showBanner, showProf, onResult,
}) {
  const [buildCells,        setBuildCells]        = useState({});
  const [buildWrongCells,   setBuildWrongCells]   = useState(new Set());
  const [buildAxisX,        setBuildAxisX]        = useState(['']);
  const [buildAxisY,        setBuildAxisY]        = useState(['']);
  const [buildSelfPairs,    setBuildSelfPairs]    = useState(new Set());
  const [buildInvalidInputs, setBuildInvalidInputs] = useState(new Set());

  const buildAllFilled = buildAxisX.every(s => s.trim()) && buildAxisY.every(s => s.trim());

  const handleValidateBuild = () => {
    const xT = buildAxisX.map(s => s.trim());
    const yT = buildAxisY.map(s => s.trim());
    const n  = states.length;

    if (xT.length !== n - 1 || yT.length !== n - 1) {
      showBanner('A tabela triangular deve ter (quantidade de estados − 1) posições em cada eixo.', 'error');
      return;
    }

    const stateSet   = new Set(states);
    const invalidKeys = new Set();
    xT.forEach((s, i) => { if (s && !stateSet.has(s)) invalidKeys.add(`x-${i}`); });
    yT.forEach((s, i) => { if (s && !stateSet.has(s)) invalidKeys.add(`y-${i}`); });
    if (invalidKeys.size > 0) {
      setBuildInvalidInputs(invalidKeys);
      showBanner('Estado inválido — verifique os campos em vermelho.', 'error');
      return;
    }
    setBuildInvalidInputs(new Set());

    if (new Set(xT).size !== xT.length) { showBanner('O eixo X tem estados repetidos.', 'error'); return; }
    if (new Set(yT).size !== yT.length) { showBanner('O eixo Y tem estados repetidos.', 'error'); return; }

    const xSet = new Set(xT), ySet = new Set(yT);
    const setsEq     = (a, b) => a.size === b.size && [...a].every(v => b.has(v));
    const canonXSet  = new Set(states.slice(0, -1));
    const canonYSet  = new Set(states.slice(1));

    if (!((setsEq(xSet, canonXSet) && setsEq(ySet, canonYSet)) ||
          (setsEq(xSet, canonYSet) && setsEq(ySet, canonXSet)))) {
      showBanner('Eixos incorretos. Um eixo deve excluir o primeiro estado; o outro, o último.', 'error');
      return;
    }

    const selfPairs = new Set();
    for (let ri = 0; ri < yT.length; ri++)
      for (let ci = 0; ci <= ri; ci++)
        if (yT[ri] === xT[ci]) selfPairs.add(`${ri},${ci}`);

    if (selfPairs.size > 0) {
      setBuildSelfPairs(selfPairs);
      showBanner(
        `Autopar: ${[...selfPairs].map(k => { const [r,c]=k.split(','); return `${yT[r]}↔${xT[c]}`; }).join(', ')} — a tabela triangular só compara estados DIFERENTES.`,
        'error'
      );
      return;
    }
    setBuildSelfPairs(new Set());
    setBuildInvalidInputs(new Set());

    const wrong = new Set();
    for (let ri = 0; ri < yT.length; ri++) {
      for (let ci = 0; ci <= ri; ci++) {
        const cellKey = `${ri},${ci}`;
        if (yT[ri] === xT[ci]) continue;
        const pair     = pairKey(yT[ri], xT[ci]);
        const shouldBe = !!correctTable[pair];
        const is       = !!buildCells[cellKey];
        if (shouldBe !== is) wrong.add(cellKey);
      }
    }

    if (wrong.size > 0) {
      setBuildWrongCells(wrong);
      const extras  = [...wrong].filter(k => !!buildCells[k]).length;
      const missing = wrong.size - extras;
      const parts = [];
      if (extras  > 0) parts.push(`${extras} marcação${extras>1?'ões':''} indevida${extras>1?'s':''}`);
      if (missing > 0) parts.push(`${missing} par${missing>1?'es':''} distinguível${missing>1?'is':''} sem marcação`);
      showProf(parts.join(' · '), 8000);
      showBanner('Tabela incorreta — veja as células em vermelho.', 'error');
      return;
    }

    setBuildWrongCells(new Set());
    updateProgress(`afd-min-${exercise.id}`, 3);
    onResult();
    showBanner('Correto! 3 estrelas! ★★★', 'success');
  };

  return (
    <div className="min-panel">
      <div className="section-header" style={{ fontSize:11 }}>Construir Tabela</div>
      <p style={{ fontSize:11, color:'#555', marginBottom:0 }}>
        Monte a tabela triangular: defina o tamanho (+ / −), preencha os eixos com os estados e clique nas células para marcar <b>×</b> os pares distinguíveis. Depois clique em <b>Verificar</b>.
      </p>

      {/* Controles de tamanho */}
      <div style={{ display:'flex', gap:12, fontSize:11, flexWrap:'wrap' }}>
        <div style={{ display:'flex', alignItems:'center', gap:4 }}>
          <span style={{ fontWeight:900 }}>Linhas (Y):</span>
          <button onClick={() => { setBuildAxisY(p => [...p, '']); setBuildSelfPairs(new Set()); setBuildInvalidInputs(new Set()); setBuildCells({}); setBuildWrongCells(new Set()); }}
            style={{ width:22, height:22, fontWeight:900, fontSize:14, lineHeight:1,
              border:'2px solid #000', borderRadius:4, background:'#bbf7d0', cursor:'pointer' }}>+</button>
          <button onClick={() => { setBuildAxisY(p => p.length > 1 ? p.slice(0, -1) : p); setBuildSelfPairs(new Set()); setBuildInvalidInputs(new Set()); setBuildCells({}); setBuildWrongCells(new Set()); }}
            disabled={buildAxisY.length <= 1}
            style={{ width:22, height:22, fontWeight:900, fontSize:16, lineHeight:1,
              border:'2px solid #000', borderRadius:4,
              background: buildAxisY.length <= 1 ? '#eee' : '#fca5a5',
              cursor: buildAxisY.length <= 1 ? 'not-allowed' : 'pointer' }}>−</button>
          <span style={{ fontWeight:700 }}>{buildAxisY.length}</span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:4 }}>
          <span style={{ fontWeight:900 }}>Colunas (X):</span>
          <button onClick={() => { setBuildAxisX(p => [...p, '']); setBuildSelfPairs(new Set()); setBuildInvalidInputs(new Set()); setBuildCells({}); setBuildWrongCells(new Set()); }}
            style={{ width:22, height:22, fontWeight:900, fontSize:14, lineHeight:1,
              border:'2px solid #000', borderRadius:4, background:'#bbf7d0', cursor:'pointer' }}>+</button>
          <button onClick={() => { setBuildAxisX(p => p.length > 1 ? p.slice(0, -1) : p); setBuildSelfPairs(new Set()); setBuildInvalidInputs(new Set()); setBuildCells({}); setBuildWrongCells(new Set()); }}
            disabled={buildAxisX.length <= 1}
            style={{ width:22, height:22, fontWeight:900, fontSize:16, lineHeight:1,
              border:'2px solid #000', borderRadius:4,
              background: buildAxisX.length <= 1 ? '#eee' : '#fca5a5',
              cursor: buildAxisX.length <= 1 ? 'not-allowed' : 'pointer' }}>−</button>
          <span style={{ fontWeight:700 }}>{buildAxisX.length}</span>
        </div>
      </div>

      {/* Tabela triangular com inputs */}
      <div className="min-table-scroll">
        <table className="min-tri-table">
          <tbody>
            {buildAxisY.map((rowS, ri) => (
              <tr key={ri}>
                <th className="min-th" style={{
                  background: buildInvalidInputs.has(`y-${ri}`) ? '#fca5a5' : '#fef9c3',
                  padding:0,
                  border: buildInvalidInputs.has(`y-${ri}`) ? '2.5px solid #dc2626' : undefined,
                }}>
                  <input
                    value={rowS}
                    onChange={e => {
                      const v = e.target.value;
                      setBuildAxisY(prev => { const n=[...prev]; n[ri]=v; return n; });
                      setBuildSelfPairs(new Set());
                      setBuildInvalidInputs(new Set());
                      setBuildCells({});
                      setBuildWrongCells(new Set());
                    }}
                    style={{ width:34, textAlign:'center', border:'none', background:'transparent',
                      fontFamily:"'Comic Sans MS','Comic Neue',cursive,sans-serif",
                      fontWeight:900, fontSize:11, outline:'none',
                      color: buildInvalidInputs.has(`y-${ri}`) ? '#dc2626' : undefined,
                    }}
                    placeholder="?"
                    maxLength={3}
                  />
                </th>
                {Array(ri + 1).fill(0).map((_, ci) => {
                  const cellKey = `${ri},${ci}`;
                  const isSelf   = buildSelfPairs.has(cellKey);
                  const isMarked = !!buildCells[cellKey];
                  const isWrong  = buildWrongCells.has(cellKey);
                  return (
                    <td key={ci}
                      className={`min-cell${isMarked ? ' marked' : ''}${isWrong ? ' wrong' : ''}`}
                      style={{
                        background: isSelf ? '#fca5a5' : undefined,
                        cursor: isSelf ? 'default' : 'pointer',
                        color: isSelf ? '#dc2626' : undefined,
                        border: isSelf ? '2.5px solid #dc2626' : undefined,
                      }}
                      onClick={() => {
                        if (isSelf) return;
                        setBuildCells(prev => ({ ...prev, [cellKey]: !prev[cellKey] }));
                        setBuildWrongCells(new Set());
                      }}
                    >{isSelf || isMarked ? '×' : ''}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="min-corner" />
              {buildAxisX.map((s, i) => (
                <th key={i} className="min-th" style={{
                  background: buildInvalidInputs.has(`x-${i}`) ? '#fca5a5' : '#fef9c3',
                  padding:0,
                  border: buildInvalidInputs.has(`x-${i}`) ? '2.5px solid #dc2626' : undefined,
                }}>
                  <input
                    value={s}
                    onChange={e => {
                      const v = e.target.value;
                      setBuildAxisX(prev => { const n=[...prev]; n[i]=v; return n; });
                      setBuildSelfPairs(new Set());
                      setBuildInvalidInputs(new Set());
                      setBuildCells({});
                      setBuildWrongCells(new Set());
                    }}
                    style={{ width:34, textAlign:'center', border:'none', background:'transparent',
                      fontFamily:"'Comic Sans MS','Comic Neue',cursive,sans-serif",
                      fontWeight:900, fontSize:11, outline:'none',
                      color: buildInvalidInputs.has(`x-${i}`) ? '#dc2626' : undefined,
                    }}
                    placeholder="?"
                    maxLength={3}
                  />
                </th>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>

      <button className="add-test-btn"
        style={{ alignSelf:'stretch', padding:'10px', fontSize:13,
          fontWeight:'bold', marginTop:4,
          background: buildAllFilled ? '#4ade80' : '#d1d5db',
          cursor: buildAllFilled ? 'pointer' : 'not-allowed' }}
        onClick={handleValidateBuild}
        disabled={!buildAllFilled}
      >
        Verificar Tabela ✓
      </button>
    </div>
  );
}
