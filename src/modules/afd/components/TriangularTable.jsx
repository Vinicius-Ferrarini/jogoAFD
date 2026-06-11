import { pairKey } from '../utils/dfaAlgorithms';

export default function TriangularTable({ states, userTable, onToggle, correctTable, showErrors }) {
  return (
    <div className="min-table-scroll">
      <table className="min-tri-table">
        <tbody>
          {states.slice(1).map((rowState, ri) => (
            <tr key={rowState}>
              <th className="min-th">{rowState}</th>
              {states.slice(0, ri + 1).map(colState => {
                if (colState === rowState) return null;
                const key = pairKey(rowState, colState);
                const val  = !!userTable[key];
                const isWrong = showErrors && correctTable && val !== !!correctTable[key];
                return (
                  <td key={colState}
                    className={`min-cell${val ? ' marked' : ''}${isWrong ? ' wrong' : ''}`}
                    onClick={() => onToggle(key)}
                    title={`(${colState}, ${rowState})`}
                  >{val ? '×' : ''}</td>
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
