import { useState } from 'react';
import TriangularTable from './TriangularTable';

// Step2_TableSetup — o aluno CONSTRÓI o grid triangular (passo SETUP).
// Entende que a tabela compara pares de estados distintos → é triangular.
// Componente "burro": estado de eixos é elevado ao MinGame (congelado após o
// SETUP); a validação estrutural vem de game.validateGrid.
export default function Step2_TableSetup({
  game, axisRows, axisCols, setAxisRows, setAxisCols, showProf, onAdvance,
}) {
  const { rStates, validateGrid } = game;
  const [errorCells, setErrorCells] = useState(new Set()); // "ri,ci"
  const [errorAxes,  setErrorAxes]  = useState(new Set()); // "row-ri"/"col-ci"
  const [sizeError,  setSizeError]  = useState(null);

  const clearErrors = () => { setErrorCells(new Set()); setErrorAxes(new Set()); setSizeError(null); };

  const onAxisChange = (eixo, idx, val) => {
    if (eixo === 'row') setAxisRows(prev => { const n = [...prev]; n[idx] = val; return n; });
    else                setAxisCols(prev => { const n = [...prev]; n[idx] = val; return n; });
    clearErrors();
  };

  const addRow = () => { setAxisRows(prev => [...prev, '']); clearErrors(); };
  const delRow = () => { setAxisRows(prev => prev.length > 1 ? prev.slice(0, -1) : prev); clearErrors(); };
  const addCol = () => { setAxisCols(prev => [...prev, '']); clearErrors(); };
  const delCol = () => { setAxisCols(prev => prev.length > 1 ? prev.slice(0, -1) : prev); clearErrors(); };

  const validate = () => {
    const res = game ? validateGrid(axisRows, axisCols) : null;
    setErrorCells(res.errorCells);
    setErrorAxes(res.errorAxes);
    setSizeError(res.sizeError);
    showProf(res.message, res.ok ? 'feliz' : 'serio');
    if (res.ok) onAdvance();
  };

  // Helper de render (não é componente — evita recriação a cada render)
  const sizeCtrl = (label, count, onAdd, onDel) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <span style={{ fontWeight: 900 }}>{label}:</span>
      <button onClick={onAdd}
        style={{ width: 22, height: 22, fontWeight: 900, fontSize: 14, lineHeight: 1,
          border: '2px solid #000', borderRadius: 4, background: '#bbf7d0', cursor: 'pointer' }}>+</button>
      <button onClick={onDel} disabled={count <= 1}
        style={{ width: 22, height: 22, fontWeight: 900, fontSize: 16, lineHeight: 1,
          border: '2px solid #000', borderRadius: 4,
          background: count <= 1 ? '#eee' : '#fca5a5',
          cursor: count <= 1 ? 'not-allowed' : 'pointer' }}>−</button>
      <span style={{ fontWeight: 700 }}>{count}</span>
    </div>
  );

  return (
    <div className="min-panel">
      <div className="section-header" style={{ fontSize: 11 }}>Montar a Tabela Triangular</div>
      <p className="min-step-text">
        A tabela compara <b>pares de estados distintos</b> — por isso é <b>triangular</b> (sem diagonal,
        sem repetir pares). Ajuste o tamanho com <b>+/−</b> e rotule cada eixo com os nomes dos estados.
        São <b>{rStates.length}</b> estados alcançáveis.
      </p>

      <div style={{ display: 'flex', gap: 14, fontSize: 11, flexWrap: 'wrap' }}>
        {sizeCtrl('Linhas',  axisRows.length, addRow, delRow)}
        {sizeCtrl('Colunas', axisCols.length, addCol, delCol)}
      </div>

      {sizeError && (
        <div className="req-result err" style={{ margin: 0 }}>{sizeError}</div>
      )}

      <TriangularTable
        editableAxes
        axisRows={axisRows}
        axisCols={axisCols}
        onAxisChange={onAxisChange}
        errorAxes={errorAxes}
        errorCells={errorCells}
        states={rStates}
        userTable={{}}
        onToggle={() => {}}
      />

      <button className="add-test-btn min-step-btn" style={{ background: '#fde047' }} onClick={validate}>
        Validar grade ✓
      </button>
    </div>
  );
}
