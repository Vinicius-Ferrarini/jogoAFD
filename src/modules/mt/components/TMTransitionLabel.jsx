// ─── TMTransitionLabel: chip de uma transição da MT sobre uma aresta ─────────
// Formato exibido: "read ; write , move"  (ex: a ; A , R  |  □ ; □ , L)
// Props:
//   transition  — { read, write, move }  (string vazia = branco)
//   style       — posicionamento absoluto passado pelo canvas
//   eraseMode   — boolean; chip fica vermelho e clique remove
//   onClick     — callback disparado ao clicar (abre editor ou remove)
import { BLANK } from '../utils/tmAlgorithms';
import './MTTransitions.css';

const show = (v) => (v === '' || v == null ? BLANK : v);

export default function TMTransitionLabel({ transition, style, eraseMode, onClick }) {
  return (
    <div
      className={`tm-transition-label${eraseMode ? ' erasable' : ''}`}
      style={style}
      onClick={e => { e.stopPropagation(); onClick?.(); }}
      title={eraseMode ? 'Clique para remover' : 'Clique para editar'}
    >
      <span className="tm-tl-chip">
        <span className="tm-tl-sym">{show(transition.read)}</span>
        <span className="tm-tl-sep">;</span>
        <span className="tm-tl-sym">{show(transition.write)}</span>
        <span className="tm-tl-sep">,</span>
        <span className="tm-tl-move">{transition.move}</span>
      </span>
    </div>
  );
}
