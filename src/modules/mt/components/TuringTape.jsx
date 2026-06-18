// ─── TuringTape: fita visual da Máquina de Turing ────────────────────────────
// Props:
//   tape         — array de símbolos, ex: ['□','a','b','□']
//   headPosition — índice do cabeçote de leitura/escrita
import { BLANK } from '../utils/tmAlgorithms';
import './TuringTape.css';

export default function TuringTape({ tape = [], headPosition = 0 }) {
  return (
    <div className="turing-tape-container">
      <div className="tape-cells">
        {tape.map((symbol, i) => (
          <div
            key={i}
            className={`tape-cell${i === headPosition ? ' head-active' : ''}${symbol === BLANK ? ' blank-cell' : ''}`}
          >
            {symbol || BLANK}
          </div>
        ))}
      </div>
      <div className="tape-head-row">
        {tape.map((_, i) => (
          <div key={i} className={`tape-head-slot${i === headPosition ? ' active' : ''}`}>
            {i === headPosition ? '▲' : ''}
          </div>
        ))}
      </div>
    </div>
  );
}
