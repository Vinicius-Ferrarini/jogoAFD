import { pairKey } from '../utils/dfaAlgorithms';

// Tabela triangular de pares de estados usada na fase BUILD da minimização.
// Props:
//   states        — estados (alcançáveis) que formam os eixos
//   userTable     — { pairKey: bool } marcações do aluno
//   onToggle      — (pairKey) => void ao clicar numa célula livre
//   wrongCells    — Set<pairKey> destacados em vermelho (erro)
//   lockedCells   — Set<pairKey> travados (passo anterior já validado) — não clicáveis
//   highlightEquiv— bool: destaca os pares NÃO marcados como equivalentes (≡ verde)
export default function TriangularTable({
  states, userTable, onToggle,
  wrongCells, lockedCells, highlightEquiv = false, readOnly = false,
}) {
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
                const isEquiv  = highlightEquiv && !marked;
                const cls = [
                  'min-cell',
                  marked   ? 'marked' : '',
                  isLocked ? 'locked' : '',
                  isWrong  ? 'wrong'  : '',
                  isEquiv  ? 'equiv'  : '',
                ].filter(Boolean).join(' ');
                const clickable = !isLocked && !highlightEquiv && !readOnly;
                return (
                  <td key={colState}
                    className={cls}
                    style={{ cursor: clickable ? 'pointer' : 'default' }}
                    onClick={() => { if (clickable) onToggle(key); }}
                    title={`(${colState}, ${rowState})`}
                  >{marked ? '×' : (isEquiv ? '≡' : '')}</td>
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
