// DeltaTableView — tabela de transição δ em modo somente-leitura.
// Renderiza a tabela que o aluno montou no Passo 1 (estado `prep` do MinGame),
// para consulta nas fases seguintes (montar a triangular, calcular destinos…).
// Reaproveita o CSS .req-* já existente.
export default function DeltaTableView({ prep }) {
  const { rows, cols, cells } = prep;
  return (
    <table className="req-trans-table" style={{ color: '#000' }}>
      <thead>
        <tr>
          <th className="req-th req-th-delta">δ</th>
          {cols.map((c, ci) => <th key={ci} className="req-th">{c || '?'}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri}>
            <th className="req-th req-state-cell">{r || '?'}</th>
            {cols.map((_, ci) => (
              <td key={ci} className="req-td">{cells[`${ri},${ci}`] || ''}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
