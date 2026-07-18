// ─── APTransitionLabel: rótulo de uma aresta do AP (várias triplas) ──────────
// Estilo JFLAP: cada tripla é "lê, desempilha ; empilha" (λ p/ vazio). Uma aresta
// pode ter várias (não-determinismo). Clicar numa tripla edita; "＋" adiciona.
// Em modo ERASE, clicar numa tripla a remove.
import { useState, useRef, useEffect } from 'react';

const LAMBDA = 'λ';
const show = (v) => (v === '' || v == null ? LAMBDA : v);
// Sentinela distinta de qualquer autoEdit real (null | 'new' | number).
const NO_AUTO_EDIT_YET = Symbol('no-auto-edit-yet');

function TripleEditor({ initial, onCommit, onCancel }) {
  const [read, setRead] = useState(initial?.read ?? '');
  const [pop,  setPop]  = useState(initial?.pop  ?? '');
  const [push, setPush] = useState(initial?.push ?? '');
  const firstRef = useRef(null);
  useEffect(() => { const t = setTimeout(() => firstRef.current?.focus(), 20); return () => clearTimeout(t); }, []);

  const commit = () => onCommit({ read: read.trim(), pop: pop.trim(), push: push.trim() });
  const onKey = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); commit(); }
    if (e.key === 'Escape') { e.preventDefault(); onCancel(); }
  };
  const inp = (val, set, ref) => (
    <input ref={ref} className="ap-tl-input" value={val} placeholder={LAMBDA}
      onChange={e => set(e.target.value)} onKeyDown={onKey}
      onClick={e => e.stopPropagation()} maxLength={6} autoComplete="off" spellCheck={false} />
  );
  return (
    <div className="ap-tl-editor" onClick={e => e.stopPropagation()}>
      <div className="ap-tl-fields">
        {inp(read, setRead, firstRef)}<span className="ap-tl-sep">,</span>
        {inp(pop, setPop)}<span className="ap-tl-sep">;</span>
        {inp(push, setPush)}
      </div>
      <div className="ap-tl-actions">
        <button className="ap-tl-ok" onClick={commit} title="Confirmar">✓</button>
        <button className="ap-tl-cancel" onClick={onCancel} title="Cancelar">✕</button>
      </div>
    </div>
  );
}

export default function APTransitionLabel({
  triples, style, eraseMode, lessonActive,
  onAddTriple, onEditTriple, onRemoveTriple,
  autoEdit = null, onAutoEditConsumed,
}) {
  const [editing, setEditing] = useState(null); // null | 'new' | tIdx

  // Tripla recém-criada (seta nova, ainda "λ, λ ; λ"): abre o editor sozinha,
  // sem exigir que o aluno descubra que precisa clicar na tripla depois. O
  // próprio estado (editing) é ajustado durante o render — padrão oficial do
  // React p/ "derivar de prop" — para não disparar um cascading render via
  // setState num efeito. Avisar o pai (onAutoEditConsumed) já mexe em estado
  // de OUTRO componente, então isso continua num efeito.
  // Garante que o 1º render de uma tripla NOVA (que já nasce com autoEdit
  // setado, pois o componente monta na mesma passada em que a seta é criada)
  // conte como "mudou" — useRef(autoEdit) tomaria o mesmo valor logo no mount.
  const prevAutoEditRef = useRef(NO_AUTO_EDIT_YET);
  if (autoEdit !== prevAutoEditRef.current) {
    prevAutoEditRef.current = autoEdit;
    if (autoEdit != null) setEditing(autoEdit);
  }
  useEffect(() => {
    if (autoEdit != null) onAutoEditConsumed?.();
  }, [autoEdit, onAutoEditConsumed]);

  const clickChip = (e, t) => {
    e.stopPropagation();
    if (eraseMode) { onRemoveTriple(t.tIdx); return; }
    setEditing(t.tIdx);
  };

  return (
    <div className={`ap-transition-label${eraseMode ? ' erasable' : ''}`} style={style}
      onClick={e => e.stopPropagation()}>
      <div className="ap-tl-chips">
        {triples.map((t) => (
          editing === t.tIdx ? (
            <TripleEditor key={t.tIdx} initial={t}
              onCommit={(tr) => { if (onEditTriple(t.tIdx, tr) !== false) setEditing(null); }}
              onCancel={() => setEditing(null)} />
          ) : (
            <span key={t.tIdx} className="ap-tl-chip" onClick={e => clickChip(e, t)}>
              {show(t.read)}, {show(t.pop)} <b>;</b> {show(t.push)}
            </span>
          )
        ))}
        {editing === 'new' ? (
          <TripleEditor
            onCommit={(tr) => { if (onAddTriple(tr) !== false) setEditing(null); }}
            onCancel={() => setEditing(null)} />
        ) : (!eraseMode && !lessonActive) ? (
          <button className="ap-tl-add" onClick={e => { e.stopPropagation(); setEditing('new'); }}
            title="Adicionar transição (não-determinismo)">＋</button>
        ) : null}
      </div>
    </div>
  );
}
