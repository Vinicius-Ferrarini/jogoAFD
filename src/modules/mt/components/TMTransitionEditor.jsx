// ─── TMTransitionEditor: popup de criação/edição de transição da MT ──────────
// Abre ao criar ou clicar em uma aresta.
// Props:
//   initial  — { read, write, move } preenchido ao editar; undefined ao criar
//   onSave   — ({ read, write, move }) => void
//   onDelete — () => void  (opcional; botão 🗑 só aparece quando fornecido)
//   onCancel — () => void
import { useState, useRef, useEffect } from 'react';
import { BLANK } from '../utils/tmAlgorithms';
import './MTTransitions.css';

export default function TMTransitionEditor({ initial, onSave, onDelete, onCancel }) {
  const [read,  setRead]  = useState(initial?.read  ?? '');
  const [write, setWrite] = useState(initial?.write ?? '');
  const [move,  setMove]  = useState(initial?.move  ?? 'R');
  const readRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => readRef.current?.focus(), 20);
    return () => clearTimeout(t);
  }, []);

  const commit = () => onSave?.({ read: read.trim(), write: write.trim(), move });

  const onKey = (e) => {
    if (e.key === 'Enter')  { e.preventDefault(); commit(); }
    if (e.key === 'Escape') { e.preventDefault(); onCancel?.(); }
  };

  const inp = (val, set, ref) => (
    <input
      ref={ref}
      className="tm-te-input"
      value={val}
      placeholder={BLANK}
      maxLength={1}
      onChange={e => set(e.target.value)}
      onKeyDown={onKey}
      onClick={e => e.stopPropagation()}
      autoComplete="off"
      spellCheck={false}
    />
  );

  return (
    <div className="tm-transition-editor" onClick={e => e.stopPropagation()}>
      <div className="tm-te-row">
        <span className="tm-te-lbl">Lê</span>
        {inp(read, setRead, readRef)}
      </div>

      <div className="tm-te-row">
        <span className="tm-te-lbl">Escreve</span>
        {inp(write, setWrite, null)}
      </div>

      <div className="tm-te-row">
        <span className="tm-te-lbl">Move</span>
        <div className="tm-te-move-btns">
          {['L', 'R'].map(m => (
            <button
              key={m}
              className={`tm-te-move${move === m ? ' active' : ''}`}
              onClick={e => { e.stopPropagation(); setMove(m); }}
              title={{ L: 'Esquerda', S: 'Ficar', R: 'Direita' }[m]}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="tm-te-actions">
        <button className="tm-te-ok"     onClick={commit}   title="Salvar">✓</button>
        {onDelete && (
          <button className="tm-te-del"  onClick={e => { e.stopPropagation(); onDelete(); }} title="Remover transição">🗑</button>
        )}
        <button className="tm-te-cancel" onClick={onCancel} title="Cancelar">✕</button>
      </div>
    </div>
  );
}
