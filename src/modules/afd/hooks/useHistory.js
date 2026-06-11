// ─── useHistory: pilha de Undo/Redo do grafo (nós + transições) ──────────────
// Mantém os snapshots; aplica-os via setNodes/setTransitions injetados pelo
// orquestrador (o estado nodes/transitions vive fora, no AFDPart1, para evitar
// dependência circular com useAFDGraph que precisa de recordHistory).
import { useState, useCallback } from 'react';

export default function useHistory({ setNodes, setTransitions, showToast }) {
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const recordHistory = useCallback((newNodes, newTransitions, squash = false) => {
    const snap = { nodes: JSON.parse(JSON.stringify(newNodes)), transitions: JSON.parse(JSON.stringify(newTransitions)) };
    if (squash && historyIndex >= 0) {
      setHistory(prev => { const h = [...prev]; h[historyIndex] = snap; return h; });
      // historyIndex não muda
    } else {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(snap);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    }
  }, [history, historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIdx = historyIndex - 1;
      setHistoryIndex(newIdx);
      setNodes(history[newIdx].nodes);
      setTransitions(history[newIdx].transitions);
      showToast('↶ Desfeito', 'info');
    }
  }, [historyIndex, history, showToast, setNodes, setTransitions]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIdx = historyIndex + 1;
      setHistoryIndex(newIdx);
      setNodes(history[newIdx].nodes);
      setTransitions(history[newIdx].transitions);
      showToast('↷ Refeito', 'info');
    }
  }, [historyIndex, history, showToast, setNodes, setTransitions]);

  // Reinicia a pilha com um único snapshot-base (loadLevel / fim de aula guiada).
  const resetHistory = useCallback((nodes, transitions) => {
    setHistory([{ nodes, transitions }]);
    setHistoryIndex(0);
  }, []);

  return { history, historyIndex, recordHistory, undo, redo, resetHistory };
}
