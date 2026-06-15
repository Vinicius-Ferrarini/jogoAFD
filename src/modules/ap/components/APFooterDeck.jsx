// ─── APFooterDeck: rodapé de cartas do AP (mesmo visual do AFD) ──────────────
// Reusa FooterDeck.css (.bottom-hand/.card/.professor-*). Cartas de ação do AP
// (sem "Definir Final" — aceita por pilha vazia). Maurílio no HUD do rodapé.
import { useRef } from 'react';
import '../../afd/components/FooterDeck.css';
import imgSerio      from '../../../assets/maurilio1_serio.webp';
import imgExplicando from '../../../assets/maurilio3_explicando.webp';
import imgBalaoFala  from '../../../assets/balao_fala_redondo.webp';

const CARDS = [
  { action: 'TOGGLE_INITIAL', cls: 'initial',    icon: '▶', label: 'Estado Inicial' },
  { action: 'ADD_NODE',       cls: 'state',      icon: '◯', label: 'Novo Estado' },
  { action: 'CONNECTING',     cls: 'transition', icon: '↗', label: 'Criar Seta' },
  { sep: true },
  { action: 'ERASE',          cls: 'erase',      icon: '🗑', label: 'Apagar' },
];

export default function APFooterDeck({
  mode, onPick, profMessage, profMood, onProfClick,
  onNodeDrag, onNodeDrop, onNodeDragCancel,
  canUndo, canRedo, onUndo, onRedo,
}) {
  const dragRef = useRef(null);
  const profImg = profMood === 'serio' ? imgSerio : imgExplicando;

  return (
    <footer className="bottom-hand">
      <div className="cards-scroll-wrapper">
        {CARDS.map((c, i) => c.sep ? (
          <div key={`sep${i}`} className="card-separator" />
        ) : (
          <div key={c.action}
            data-icon={c.icon}
            className={`card ${c.cls} ${mode === c.action ? 'selected-card' : ''}`}
            onClick={() => onPick(mode === c.action ? 'IDLE' : c.action)}
            onPointerDown={(e) => {
              if (c.action !== 'ADD_NODE') return;
              dragRef.current = { sx: e.clientX, sy: e.clientY, dragging: false };
              e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              if (!dragRef.current) return;
              const d = Math.hypot(e.clientX - dragRef.current.sx, e.clientY - dragRef.current.sy);
              if (!dragRef.current.dragging && d > 8) dragRef.current.dragging = true;
              if (dragRef.current.dragging) onNodeDrag?.(e.clientX, e.clientY);
            }}
            onPointerUp={(e) => {
              if (!dragRef.current) return;
              const was = dragRef.current.dragging;
              dragRef.current = null;
              if (was) { e.preventDefault(); onNodeDrop?.(e.clientX, e.clientY); }
            }}
            onPointerCancel={() => {
              if (dragRef.current?.dragging) onNodeDragCancel?.();
              dragRef.current = null;
            }}
          >
            <div className="card-header">{c.label}</div>
            <div className="card-icon">{c.icon}</div>
          </div>
        ))}

        <div className="card-separator" />
        {[
          { key: 'undo', icon: '↶', label: 'Desfazer', on: onUndo, can: canUndo },
          { key: 'redo', icon: '↷', label: 'Refazer',  on: onRedo, can: canRedo },
        ].map(b => (
          <div key={b.key} className="card state"
            style={{ opacity: b.can ? 1 : 0.35, cursor: b.can ? 'pointer' : 'not-allowed' }}
            onClick={() => { if (b.can) b.on?.(); }}>
            <div className="card-header">{b.label}</div>
            <div className="card-icon">{b.icon}</div>
          </div>
        ))}
      </div>

      <div className="professor-hud">
        {profMessage && (
          <div className="professor-balloon">
            <img src={imgBalaoFala} alt="" />
            <div className="professor-balloon-text">{profMessage}</div>
          </div>
        )}
        <img src={profImg} alt="Professor Maurílio" className="prof-img" onClick={onProfClick} />
      </div>
    </footer>
  );
}
