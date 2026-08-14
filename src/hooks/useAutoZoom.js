import { useEffect } from 'react';

// Largura "de projeto": todo o layout foi construído em px fixos calibrados
// visualmente para uma janela de ~1366px CSS de largura (não resolução física
// do monitor — window.innerWidth já desconta escala do SO e é o que importa).
const DESIGN_WIDTH = 1366;
const MAX_ZOOM = 2;
const RESIZE_DEBOUNCE_MS = 180;

// zoom (não transform: scale) porque getBoundingClientRect()/clientX/clientY
// — usados pelo drag-and-drop dos canvases de AFD/AP/MT — refletem `zoom`
// automaticamente, mas não `transform`. Confirmado empiricamente que aplicar
// `zoom` no <html> não altera window.innerWidth, então recalcular no resize
// não entra em loop (não precisa guardar uma largura "crua" de referência).
export default function useAutoZoom() {
  useEffect(() => {
    const root = document.documentElement;
    let timer = null;

    const apply = () => {
      const factor = Math.min(MAX_ZOOM, Math.max(1, window.innerWidth / DESIGN_WIDTH));
      root.style.zoom = `${factor * 100}%`;
    };

    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(apply, RESIZE_DEBOUNCE_MS);
    };

    apply();
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', onResize);
      root.style.zoom = '';
    };
  }, []);
}
