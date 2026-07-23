// ─── NodeContextMenu: menu de botão direito num estado (nó), estilo JFLAP ────
// "Estado Inicial" / "Estado Final" com um quadradinho de check (aceso/apagado)
// ao lado. Renderizado via portal no <body> (foge de overflow/scale do canvas),
// posicionado no ponto exato do clique direito. Fecha ao clicar fora, rolar ou
// pressionar Esc.
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function MenuItem({ label, checked, onClick }) {
  return (
    <button className="node-ctx-item" onClick={onClick}>
      <span className={`node-ctx-check${checked ? ' on' : ''}`} />
      {label}
    </button>
  );
}

export default function NodeContextMenu({
  x, y, isInitial, isFinal, showFinal = true, onToggleInitial, onToggleFinal, onClose,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const onDocDown = (e) => { if (!ref.current?.contains(e.target)) onClose(); };
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('pointerdown', onDocDown, true);
    document.addEventListener('keydown', onKey);
    document.addEventListener('scroll', onClose, true);
    document.addEventListener('contextmenu', onClose, true);
    return () => {
      document.removeEventListener('pointerdown', onDocDown, true);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('scroll', onClose, true);
      document.removeEventListener('contextmenu', onClose, true);
    };
  }, [onClose]);

  // Evita o menu nascer cortado pela borda direita/inferior da janela.
  const MENU_W = 168, MENU_H_1 = 40, MENU_H_2 = 74;
  const menuH = showFinal ? MENU_H_2 : MENU_H_1;
  const left = Math.min(x, window.innerWidth - MENU_W - 8);
  const top = Math.min(y, window.innerHeight - menuH - 8);

  return createPortal(
    <div ref={ref} className="node-ctx-menu" style={{ left, top }}
      onContextMenu={(e) => e.preventDefault()}>
      <MenuItem label="Estado Inicial" checked={isInitial}
        onClick={() => { onToggleInitial(); onClose(); }} />
      {showFinal && (
        <MenuItem label="Estado Final" checked={isFinal}
          onClick={() => { onToggleFinal(); onClose(); }} />
      )}
    </div>,
    document.body
  );
}
