import { pairKey } from '../utils/dfaAlgorithms';

// Tabela triangular de pares de estados usada na minimização.
//
// MODO MARCAÇÃO (padrão — usado por TRIVIAL/PROP):
//   states         — estados (alcançáveis) que formam os eixos
//   userTable      — { pairKey: bool } marcações do aluno
//   onToggle       — (pairKey) => void ao clicar numa célula livre
//   wrongCells     — Set<pairKey> destacados em vermelho (erro)
//   lockedCells    — Set<pairKey> travados (passo anterior já validado) — não clicáveis
//   highlightEquiv — bool: destaca os pares NÃO marcados como equivalentes (≡ verde)
//   readOnly       — bool: nenhuma célula clicável
//   selectedPair   — pairKey|null: realça a célula sob inspeção (PROP)
//   onInspectCell  — (pairKey)=>void: se passado, clicar abre o Inspetor em vez de alternar
//   validatedCells — Set<pairKey>: células já validadas pelo aluno (verde, não-clicáveis)
//
// MODO CONSTRUÇÃO (editableAxes — usado pelo SETUP):
//   editableAxes   — bool: renderiza inputs nos cabeçalhos em vez de rótulos fixos
//   axisRows/axisCols — string[]: valores controlados dos eixos
//   onAxisChange   — (eixo:'row'|'col', idx, valor)=>void
//   errorAxes      — Set<"row-ri"|"col-ci">: pinta cabeçalhos inválidos
//   errorCells     — Set<"ri,ci">: pinta células inválidas (auto-pares)
// Todas as props novas são opcionais; sem elas o componente se comporta como antes.
export default function TriangularTable({
  states, userTable, onToggle,
  wrongCells, lockedCells, highlightEquiv = false, readOnly = false,
  selectedPair = null, onInspectCell = null, validatedCells = null,
  editableAxes = false, axisRows = [], axisCols = [],
  onAxisChange, errorAxes, errorCells,
}) {
  // ── MODO CONSTRUÇÃO (SETUP) ───────────────────────────────────────────────
  if (editableAxes) {
    const axisInputStyle = (bad) => ({
      width: 30, textAlign: 'center', border: 'none', background: 'transparent',
      fontFamily: "'Comic Sans MS','Comic Neue',cursive,sans-serif",
      fontWeight: 900, fontSize: 11, outline: 'none',
      color: bad ? '#dc2626' : '#000',
    });
    return (
      <div className="min-table-scroll">
        <table className="min-tri-table">
          <tbody>
            {axisRows.map((rowVal, ri) => (
              <tr key={ri}>
                <th className={`min-th${errorAxes?.has(`row-${ri}`) ? ' req-err' : ''}`} style={{ padding: 0 }}>
                  <input value={rowVal} placeholder="?" maxLength={3}
                    style={axisInputStyle(errorAxes?.has(`row-${ri}`))}
                    onChange={e => onAxisChange?.('row', ri, e.target.value)} />
                </th>
                {axisCols.slice(0, ri + 1).map((_, ci) => {
                  const isErr = errorCells?.has(`${ri},${ci}`);
                  return (
                    <td key={ci} className={`min-cell${isErr ? ' wrong' : ''}`}
                      style={{ cursor: 'default' }}>{isErr ? '✕' : ''}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th className="min-corner" />
              {axisCols.map((colVal, ci) => (
                <th key={ci} className={`min-th${errorAxes?.has(`col-${ci}`) ? ' req-err' : ''}`} style={{ padding: 0 }}>
                  <input value={colVal} placeholder="?" maxLength={3}
                    style={axisInputStyle(errorAxes?.has(`col-${ci}`))}
                    onChange={e => onAxisChange?.('col', ci, e.target.value)} />
                </th>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }

  // ── MODO MARCAÇÃO (TRIVIAL / PROP) ────────────────────────────────────────
  return (
    <div className="min-table-scroll">
      <table className="min-tri-table">
        <tbody>
          {states.slice(1).map((rowState, ri) => (
            <tr key={rowState}>
              <th className="min-th">{rowState}</th>
              {states.slice(0, ri + 1).map(colState => {
                if (colState === rowState) return null;
                const key      = pairKey(rowState, colState);
                const marked   = !!userTable[key];
                const isLocked = lockedCells?.has(key);
                const isWrong  = wrongCells?.has(key);
                const isValid  = validatedCells?.has(key);
                const isEquiv  = highlightEquiv && !marked;
                const isSel    = selectedPair === key;
                const cls = [
                  'min-cell',
                  marked   ? 'marked'    : '',
                  isLocked ? 'locked'    : '',
                  isWrong  ? 'wrong'     : '',
                  isValid  ? 'validated' : '',
                  isEquiv  ? 'equiv'     : '',
                  isSel    ? 'selected'  : '',
                ].filter(Boolean).join(' ');
                const clickable = !isLocked && !isValid && !highlightEquiv && !readOnly;
                const handleClick = () => {
                  if (!clickable) return;
                  if (onInspectCell) onInspectCell(key);
                  else onToggle(key);
                };
                return (
                  <td key={colState}
                    className={cls}
                    style={{ cursor: clickable ? 'pointer' : 'default' }}
                    onClick={handleClick}
                    title={`(${colState}, ${rowState})`}
                  >{marked ? '×' : ((isValid || isEquiv) ? '≡' : '')}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className="min-corner" />
            {states.slice(0, -1).map(s => <th key={s} className="min-th">{s}</th>)}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
