// ─── useHistory: pilha de Undo/Redo do grafo (nós + transições) ──────────────
// Mantém os snapshots; aplica-os via setNodes/setTransitions injetados pelo
// orquestrador (o estado nodes/transitions vive fora, no AFDPart1, para evitar
// dependência circular com useAFDGraph que precisa de recordHistory).
//
// A pilha e o cursor vivem em refs (stackRef/idxRef) para que recordHistory
// nunca capture valores stale (o bug clássico de "precisa clicar 2× no Undo").
// Um estado derivado (historyLen, historyIndex) é espelhado para React apenas
// para disparar re-renders nos componentes que verificam disabled de undo/redo.
import { useState, useRef, useCallback } from 'react';

// ─── Lógica pura da pilha (testável sem React) ────────────────────────────────
export function createHistoryStack() {
  const stack = [];
  let idx = -1;

  const record = (nodes, transitions, squash = false) => {
    const snap = {
      nodes:       JSON.parse(JSON.stringify(nodes)),
      transitions: JSON.parse(JSON.stringify(transitions)),
    };
    if (squash && idx >= 0) {
      stack[idx] = snap;
    } else {
      stack.splice(idx + 1);
      stack.push(snap);
      idx = stack.length - 1;
    }
    return { idx, len: stack.length };
  };

  const undo = () => {
    if (idx <= 0) return null;
    idx -= 1;
    return stack[idx];
  };

  const redo = () => {
    if (idx >= stack.length - 1) return null;
    idx += 1;
    return stack[idx];
  };

  const reset = (nodes, transitions) => {
    stack.length = 0;
    stack.push({ nodes, transitions });
    idx = 0;
    return { idx, len: 1 };
  };

  const state = () => ({ idx, len: stack.length });

  return { record, undo, redo, reset, state };
}

export default function useHistory({ setNodes, setTransitions, showToast }) {
  const stackRef = useRef([]);  // snapshots: [{ nodes, transitions }]
  const idxRef   = useRef(-1);  // cursor na pilha

  // Estado React mínimo — apenas para forçar re-render quando a pilha muda.
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [historyLen,   setHistoryLen]   = useState(0);

  const syncReact = useCallback((idx, len) => {
    setHistoryIndex(idx);
    setHistoryLen(len);
  }, []);

  const recordHistory = useCallback((newNodes, newTransitions, squash = false) => {
    const snap = {
      nodes:       JSON.parse(JSON.stringify(newNodes)),
      transitions: JSON.parse(JSON.stringify(newTransitions)),
    };
    if (squash && idxRef.current >= 0) {
      // Substitui o último snapshot sem avançar o cursor — une as duas ações
      stackRef.current[idxRef.current] = snap;
    } else {
      stackRef.current = stackRef.current.slice(0, idxRef.current + 1);
      stackRef.current.push(snap);
      idxRef.current = stackRef.current.length - 1;
    }
    syncReact(idxRef.current, stackRef.current.length);
  }, [syncReact]);

  const undo = useCallback(() => {
    if (idxRef.current <= 0) return;
    idxRef.current -= 1;
    const { nodes, transitions } = stackRef.current[idxRef.current];
    setNodes(nodes);
    setTransitions(transitions);
    syncReact(idxRef.current, stackRef.current.length);
    showToast('↶ Desfeito', 'info');
  }, [setNodes, setTransitions, showToast, syncReact]);

  const redo = useCallback(() => {
    if (idxRef.current >= stackRef.current.length - 1) return;
    idxRef.current += 1;
    const { nodes, transitions } = stackRef.current[idxRef.current];
    setNodes(nodes);
    setTransitions(transitions);
    syncReact(idxRef.current, stackRef.current.length);
    showToast('↷ Refeito', 'info');
  }, [setNodes, setTransitions, showToast, syncReact]);

  // Reinicia a pilha com um único snapshot-base (loadLevel / fim de aula guiada).
  const resetHistory = useCallback((nodes, transitions) => {
    stackRef.current = [{ nodes, transitions }];
    idxRef.current = 0;
    syncReact(0, 1);
  }, [syncReact]);

  return { historyIndex, historyLen, recordHistory, undo, redo, resetHistory };
}
