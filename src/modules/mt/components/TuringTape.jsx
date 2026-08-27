// ─── TuringTape: fita visual da Máquina de Turing ────────────────────────────
// Props:
//   tape         — array de símbolos, ex: ['□','a','b','□']
//   headPosition — índice do cabeçote de leitura/escrita
//   compact      — células menores (usado pelo MTSimPanel, cujo rodapé tem
//     menos altura disponível que a tela cheia da Aula Guiada — ver
//     .tape-cell.compact/.tape-head-slot.compact em TuringTape.css). Классе
//     real em vez de transform:scale(): scale() não libera o espaço de
//     layout que economiza (achado real — ver MTReconPart1.css), então não
//     ajudava a caber mais conteúdo abaixo.
import { BLANK } from '../utils/tmAlgorithms';
import './TuringTape.css';

export default function TuringTape({ tape = [], headPosition = 0, compact = false }) {
  return (
    <div className={`turing-tape-container${compact ? ' compact' : ''}`}>
      <div className="tape-cells">
        {tape.map((symbol, i) => (
          <div
            key={i}
            className={`tape-cell${compact ? ' compact' : ''}${i === headPosition ? ' head-active' : ''}${symbol === BLANK ? ' blank-cell' : ''}`}
          >
            {symbol || BLANK}
          </div>
        ))}
      </div>
      <div className="tape-head-row">
        {tape.map((_, i) => (
          <div key={i} className={`tape-head-slot${compact ? ' compact' : ''}${i === headPosition ? ' active' : ''}`}>
            {i === headPosition ? '▲' : ''}
          </div>
        ))}
      </div>
    </div>
  );
}
