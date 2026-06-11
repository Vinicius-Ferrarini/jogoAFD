// ─── useAFDGraph: lógica de grafo do AFDPart1 ────────────────────────────────
// Mantém a lógica "teórica" e de mutação de nós/transições, isolada da camada de
// interação do canvas (pan/zoom/rabisco/laço, que vivem no CanvasArea):
//   • validateAFDSilent — validação determinística + cobertura BFS da linguagem
//   • mutações: deleteSelected, renomear nó, handlers de símbolos das setas
//   • dados de exibição memoizados (displayNodes/Transitions/transitionRenders)
// O estado base nodes/transitions vive no orquestrador (AFDPart1) para quebrar a
// dependência circular com useHistory; aqui ele entra via props.
import { useState, useRef, useCallback, useMemo } from 'react';

// Aceita palavra contra regex ou função validate do nível.
export function lvlAccepts(level, word) {
  if (typeof level.validate === 'function') return level.validate(word);
  return level.regex?.test(word) ?? false;
}

export default function useAFDGraph({
  nodes, setNodes,
  transitions, setTransitions,
  recordHistory, squashNextHistoryRef,
  selectedNodes, setSelectedNodes,
  isDrawingUnlocked,
  interactionMode,
  selectedSymbolCard, setSelectedSymbolCard,
  currentLevel,
  testWords,
  showToast,
  setHighlightedError,
  guidedLessonStep,
  canvasSize,
}) {
  // ── Validação do grafo ─────────────────────────────────────────────────────
  const validateAFDSilent = useCallback((showErrors = true) => {
    if (!nodes.some(n => n.isInitial)) {
      if (showErrors) {
        setHighlightedError('toggleInitial');
        setTimeout(() => setHighlightedError(null), 3000);
        showToast('Erro Crítico: Defina um Estado Inicial (▶)!', 'error');
      }
      return false;
    }
    if (!nodes.some(n => n.isFinal)) {
      if (showErrors) {
        setHighlightedError('toggleFinal');
        setTimeout(() => setHighlightedError(null), 3000);
        showToast('Erro: Precisa de pelo menos um Estado Final (◎)!', 'error');
      }
      return false;
    }
    const emptyIdx = transitions.findIndex(t => t.symbol === '');
    if (emptyIdx !== -1) {
      if (showErrors) {
        setHighlightedError(`transition-${emptyIdx}`);
        setTimeout(() => setHighlightedError(null), 3000);
        showToast('Setas em branco! Preencha todas as transições.', 'error');
      }
      return false;
    }
    for (const node of nodes) {
      const allSyms = transitions
        .filter(t => t.from === node.id)
        .flatMap(t => t.symbol.split(',').map(s => s.trim()).filter(Boolean));
      if (allSyms.length !== new Set(allSyms).size) {
        if (showErrors) showToast(`Não determinístico! "${node.label || node.id}" tem símbolo duplicado nas setas.`, 'error');
        return false;
      }
    }

    const alphabetSet = new Set(currentLevel?.alphabet || []);
    if (alphabetSet.size > 0) {
      for (const t of transitions) {
        for (const sym of t.symbol.split(',').map(s => s.trim()).filter(Boolean)) {
          if (!alphabetSet.has(sym)) {
            if (showErrors) showToast(`Símbolo "${sym}" não pertence ao alfabeto { ${[...alphabetSet].join(', ')} }!`, 'error');
            return false;
          }
        }
      }
    }

    const simulateDFA = (word) => {
      let cur = nodes.find(n => n.isInitial)?.id;
      if (!cur) return false;
      const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;
      for (const ch of w) {
        const tr = transitions.find(t => t.from === cur && t.symbol.split(',').map(s => s.trim()).includes(ch));
        if (!tr) return false;
        cur = tr.to;
      }
      return !!nodes.find(n => n.id === cur)?.isFinal;
    };

    for (const tw of testWords) {
      const accepted     = simulateDFA(tw.word);
      const shouldAccept = tw.status === 'shortest' || tw.status === 'correct';
      if (accepted !== shouldAccept) {
        if (showErrors)
          showToast(`Grafo falhou na palavra '${tw.word}'. Deveria ser ${shouldAccept ? 'aceita' : 'rejeitada'}.`, 'error');
        return false;
      }
    }

    // BFS sobre estados alcançáveis do AFD do usuário — testa a palavra mais curta que alcança
    // cada estado, depois explora dead-states (transições ausentes) até profundidade 3.
    // Garante cobertura completa independente do tamanho das palavras críticas.
    if ((currentLevel?.regex || currentLevel?.validate) && (currentLevel?.alphabet || []).length > 0) {
      const alph = currentLevel.alphabet;

      const getDelta = (sid, sym) => {
        const tr = transitions.find(t =>
          t.from === sid && t.symbol.split(',').map(s => s.trim()).includes(sym)
        );
        return tr?.to ?? null;
      };

      const initialId = nodes.find(n => n.isInitial).id;

      // Fase 1: BFS — um representante por estado alcançável
      const stateWord = new Map([[initialId, '']]);
      const bfsQ = [initialId];
      while (bfsQ.length > 0) {
        const sid = bfsQ.shift();
        for (const sym of alph) {
          const nxt = getDelta(sid, sym);
          if (nxt !== null && !stateWord.has(nxt)) {
            stateWord.set(nxt, stateWord.get(sid) + sym);
            bfsQ.push(nxt);
          }
        }
      }
      for (const [sid, word] of stateWord) {
        const ua = !!nodes.find(n => n.id === sid)?.isFinal;
        const ra = lvlAccepts(currentLevel, word);
        if (ua !== ra) {
          if (showErrors) {
            const d = word === '' ? 'λ (palavra vazia)' : `"${word}"`;
            showToast(`Autômato incorreto! ${d} deveria ser ${ra ? 'aceita' : 'rejeitada'}.`, 'error');
          }
          return false;
        }
      }

      // Fase 2: exploração de dead states (transições ausentes) — profundidade 3
      const deadSeen = new Set();
      const deadQ = [];
      for (const [sid, word] of stateWord) {
        for (const sym of alph) {
          if (getDelta(sid, sym) === null) {
            const dw = word + sym;
            if (!deadSeen.has(dw)) { deadSeen.add(dw); deadQ.push([dw, 0]); }
          }
        }
      }
      while (deadQ.length > 0) {
        const [dw, depth] = deadQ.shift();
        if (lvlAccepts(currentLevel, dw)) {
          if (showErrors) showToast(`Autômato incorreto! "${dw}" deveria ser aceita.`, 'error');
          return false;
        }
        if (depth < 3) {
          for (const sym of alph) {
            const ext = dw + sym;
            if (!deadSeen.has(ext)) { deadSeen.add(ext); deadQ.push([ext, depth + 1]); }
          }
        }
      }

      // Fase 3: palavras explícitas do nível (belt-and-suspenders)
      for (const w of [...(currentLevel.acceptedWords || []), ...(currentLevel.rejectedWords || [])]) {
        const word = w === 'λ' ? '' : w;
        const ra = lvlAccepts(currentLevel, word);
        const ua = simulateDFA(word);
        if (ra !== ua) {
          if (showErrors) {
            const d = word === '' ? 'λ (palavra vazia)' : `"${word}"`;
            showToast(`Autômato incorreto! ${d} deveria ser ${ra ? 'aceita' : 'rejeitada'}.`, 'error');
          }
          return false;
        }
      }
    }

    return true;
  }, [nodes, transitions, testWords, showToast, currentLevel, setHighlightedError]);

  // ── Apagar nós selecionados (Delete) ───────────────────────────────────────
  const deleteSelected = useCallback(() => {
    if (!isDrawingUnlocked || selectedNodes.length === 0) return;
    const selectedIds = new Set(
      nodes.filter(n => selectedNodes.includes(n.uid)).map(n => n.label ?? n.id)
    );
    const newNodes = nodes.filter(n => !selectedNodes.includes(n.uid));
    const newTrans = transitions.filter(t => !selectedIds.has(t.from) && !selectedIds.has(t.to));
    setNodes(newNodes);
    setTransitions(newTrans);
    setSelectedNodes([]);
    recordHistory(newNodes, newTrans);
  }, [isDrawingUnlocked, selectedNodes, nodes, transitions, recordHistory, setNodes, setTransitions, setSelectedNodes]);

  // ── Renomear nó — previne duplicatas ──────────────────────────────────────
  const [editingNodeLabel, setEditingNodeLabel] = useState(null);

  const handleNodeLabelFocus = useCallback((uid, currentLabel) => {
    setEditingNodeLabel({ uid, oldLabel: currentLabel });
  }, []);

  const handleNodeLabelChange = useCallback((uid, value) => {
    // Only update the display label; keep id unchanged until blur so edges stay visible
    setNodes(prev => prev.map(n => n.uid === uid ? { ...n, label: value } : n));
  }, [setNodes]);

  const handleNodeLabelBlur = useCallback((uid, currentLabel) => {
    const trimmed = currentLabel.trim();
    const oldId = editingNodeLabel?.oldLabel;

    // Se vazio, reverte
    if (!trimmed) {
      const old = oldId ?? `q${uid}`;
      setNodes(prev => prev.map(n => n.uid === uid ? { ...n, label: old, id: old } : n));
      setEditingNodeLabel(null);
      return;
    }

    // Verifica duplicata COM OUTRO NÓ (não consigo mesmo)
    const isDuplicate = nodes.some(n => n.uid !== uid && (n.label === trimmed || n.id === trimmed));
    if (isDuplicate) {
      const old = oldId ?? `q${uid}`;
      showToast(`⚠️ Já existe um estado chamado "${trimmed}". Revertendo para "${old}".`, 'error');
      setNodes(prev => prev.map(n => n.uid === uid ? { ...n, label: old, id: old } : n));
      setEditingNodeLabel(null);
      return;
    }

    // Salva renomeação
    const newNodes = nodes.map(n => n.uid === uid ? { ...n, label: trimmed, id: trimmed } : n);

    // Atualiza transições que apontam para/de este nó
    const newTrans = transitions.map(t => ({
      ...t,
      from: t.from === oldId ? trimmed : t.from,
      to: t.to === oldId ? trimmed : t.to,
    }));

    setNodes(newNodes);
    setTransitions(newTrans);
    recordHistory(newNodes, newTrans);
    setEditingNodeLabel(null);
  }, [nodes, editingNodeLabel, showToast, transitions, recordHistory, setNodes, setTransitions]);

  // ── Handlers de transição (chips inline) ─────────────────────────────────
  const handleAddSymbol = useCallback((idx, sym) => {
    const newTrans = [...transitions];
    const existing = newTrans[idx].symbol.split(',').map(s => s.trim()).filter(Boolean);
    if (!existing.includes(sym)) {
      newTrans[idx] = { ...newTrans[idx], symbol: [...existing, sym].join(',') };
      setTransitions(newTrans);
      const squash = squashNextHistoryRef.current;
      squashNextHistoryRef.current = false;
      recordHistory(nodes, newTrans, squash);
    }
  }, [transitions, nodes, recordHistory, setTransitions, squashNextHistoryRef]);

  const handleEditSymbol = useCallback((idx, chipIdx, newSym) => {
    const newTrans = [...transitions];
    const existing = newTrans[idx].symbol.split(',').map(s => s.trim()).filter(Boolean);
    existing[chipIdx] = newSym;
    newTrans[idx] = { ...newTrans[idx], symbol: existing.join(',') };
    setTransitions(newTrans);
    recordHistory(nodes, newTrans);
  }, [transitions, nodes, recordHistory, setTransitions]);

  const handleEraseTransition = useCallback((idx) => {
    const newTrans = transitions.filter((_, i) => i !== idx);
    setTransitions(newTrans);
    recordHistory(nodes, newTrans);
  }, [transitions, nodes, recordHistory, setTransitions]);

  const handleAppendCardToTransition = useCallback((idx) => {
    if (!selectedSymbolCard) return;
    const newTrans = [...transitions];
    const existing = newTrans[idx].symbol.split(',').map(s => s.trim()).filter(Boolean);
    const sym = selectedSymbolCard;
    if (!existing.includes(sym)) {
      newTrans[idx] = { ...newTrans[idx], symbol: [...existing, sym].join(',') };
      setTransitions(newTrans);
      const squash = squashNextHistoryRef.current;
      squashNextHistoryRef.current = false;
      recordHistory(nodes, newTrans, squash);
    }
    setSelectedSymbolCard(null);
  }, [selectedSymbolCard, transitions, nodes, recordHistory, setTransitions, setSelectedSymbolCard, squashNextHistoryRef]);

  const transitionLabelRefs = useRef({});

  const handleTransitionLineClick = useCallback((e, idx) => {
    e.stopPropagation();
    if (!isDrawingUnlocked) return;
    if (interactionMode === 'ERASE') { handleEraseTransition(idx); return; }
    if (selectedSymbolCard) { handleAppendCardToTransition(idx); return; }
    transitionLabelRefs.current[idx]?.triggerAdd();
  }, [isDrawingUnlocked, interactionMode, selectedSymbolCard, handleEraseTransition, handleAppendCardToTransition]);

  // ── Dados de exibição (aula guiada substitui estado real) ─────────────────
  const displayNodes = useMemo(() => {
    if (guidedLessonStep === null) return nodes;
    const ld = currentLevel?.guidedLesson?.[guidedLessonStep]?.stateUpdate;
    return ld ? ld.nodes.map(n => ({ ...n, uid: n.id })) : nodes;
  }, [guidedLessonStep, currentLevel, nodes]);

  const displayTransitions = useMemo(() => {
    if (guidedLessonStep === null) return transitions;
    const ld = currentLevel?.guidedLesson?.[guidedLessonStep]?.stateUpdate;
    return ld ? ld.transitions : transitions;
  }, [guidedLessonStep, currentLevel, transitions]);

  // ── Renderização de transições (memoizada) ────────────────────────────────
  const transitionRenders = useMemo(() => {
    return displayTransitions.map((t, idx) => {
      const src = displayNodes.find(n => n.id === t.from);
      const tgt = displayNodes.find(n => n.id === t.to);
      if (!src || !tgt) return null;

      const sw = canvasSize.w, sh = canvasSize.h;
      const sx = (src.x * sw) / 100, sy = (src.y * sh) / 100;
      const tx = (tgt.x * sw) / 100, ty = (tgt.y * sh) / 100;
      const bidir = src.uid !== tgt.uid && displayTransitions.some(o => o.from === tgt.id && o.to === src.id);

      let pathD = '', lx = 0, ly = 0;
      if (src.uid === tgt.uid) {
        const cx = (src.x * sw) / 100;
        const cy = (src.y * sh) / 100;
        pathD = `M ${cx - 16} ${cy - 29} C ${cx - 58} ${cy - 96} ${cx + 58} ${cy - 96} ${cx + 16} ${cy - 29}`;
        lx = cx; ly = cy - 82;
      } else if (bidir) {
        const dx = tx - sx, dy = ty - sy, dist = Math.sqrt(dx*dx + dy*dy);
        const nx = dist ? -dy/dist : 0, ny = dist ? dx/dist : 0;
        const off = 40;
        const qcx = (sx+tx)/2 + nx*off, qcy = (sy+ty)/2 + ny*off;
        pathD = `M ${sx} ${sy} Q ${qcx} ${qcy} ${tx} ${ty}`;
        lx = ((sx+tx)/2 + qcx)/2 + nx*10;
        ly = ((sy+ty)/2 + qcy)/2 + ny*10;
      } else {
        pathD = `M ${sx} ${sy} L ${tx} ${ty}`;
        lx = (sx+tx)/2; ly = (sy+ty)/2;
      }
      return { ...t, idx, src, tgt, pathD, labelPxX: lx, labelPxY: ly, bidir };
    }).filter(Boolean);
  }, [displayTransitions, displayNodes, canvasSize]);

  return {
    validateAFDSilent,
    deleteSelected,
    handleNodeLabelFocus, handleNodeLabelChange, handleNodeLabelBlur,
    handleAddSymbol, handleEditSymbol, handleEraseTransition, handleAppendCardToTransition,
    transitionLabelRefs, handleTransitionLineClick,
    displayNodes, displayTransitions, transitionRenders,
  };
}
