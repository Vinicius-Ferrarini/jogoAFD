// ─── TransitionLabel: chips verticais com edição inline ─────────────────────
// Renderiza o rótulo de uma transição como chips de símbolos com edição inline.
// CSS: classes .transition-label / .transition-chip(-input) em AFDPart1.css.
// Memoizado: left/top chegam como números (não um objeto `style` inline, que
// seria recriado a cada render do pai e invalidaria a comparação do memo).
import { useState, useRef, useEffect, forwardRef, useImperativeHandle, memo } from 'react';

const TransitionLabel = forwardRef(function TransitionLabel({ idx, symbol, interactionMode, selectedSymbolCard, isDrawingUnlocked, lessonActive, isError, labelSide, left, top, className, onAdd, onEdit, onErase, onAppendCard }, ref) {
  const [mode, setMode] = useState(null); // null | 'adding' | { type:'editing', chipIdx:number }
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef(null);

  const symList = symbol ? symbol.split(',').map(s => s.trim()).filter(Boolean) : [];

  // Auto-abre input em setas recém-criadas (sem símbolo)
  useEffect(() => {
    if (!symbol || symbol === '') { setMode('adding'); setInputVal(''); }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (mode !== null) { const t = setTimeout(() => inputRef.current?.focus(), 20); return () => clearTimeout(t); }
  }, [mode]);

  useImperativeHandle(ref, () => ({
    triggerAdd() { if (mode === null) { setMode('adding'); setInputVal(''); } }
  }), [mode]);

  const commitAdd = () => {
    const v = inputVal.trim();
    if (v) onAdd(idx, v);
    setMode(null); setInputVal('');
  };

  const commitEdit = () => {
    const v = inputVal.trim();
    if (typeof mode?.chipIdx === 'number' && v) onEdit(idx, mode.chipIdx, v);
    setMode(null); setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); mode === 'adding' ? commitAdd() : commitEdit(); }
    if (e.key === 'Escape') { setMode(null); setInputVal(''); }
  };

  const handleContainerClick = (e) => {
    e.stopPropagation();
    if (!isDrawingUnlocked) return;
    if (interactionMode === 'ERASE') { onErase(idx); return; }
    if (selectedSymbolCard) { onAppendCard(idx); return; }
    if (mode === null) { setMode('adding'); setInputVal(''); }
  };

  const handleChipClick = (e, chipIdx) => {
    e.stopPropagation();
    if (!isDrawingUnlocked) return;
    if (interactionMode === 'ERASE') { onErase(idx); return; }
    if (selectedSymbolCard) { onAppendCard(idx); return; }
    setMode({ type: 'editing', chipIdx });
    setInputVal(symList[chipIdx]);
  };

  // Largura dinâmica: cresce com o conteúdo (mínimo 2ch, 1ch por caractere extra)
  const inputWidth = `${Math.max(2, inputVal.length + 0.5)}ch`;

  // O "+" fica fixo do lado direito, na altura do chip mais PRÓXIMO DA SETA (não
  // no fim da pilha). Em label-top o bloco cresce pra cima e a seta fica embaixo
  // dele → o chip mais próximo é o ÚLTIMO da lista (ancora no bottom). Em
  // label-bottom o bloco cresce pra baixo e a seta fica em cima → o chip mais
  // próximo é o PRIMEIRO (ancora no top).
  const addBtnAnchor = labelSide === 'bottom' ? 'top' : 'bottom';
  const showAddBtn = mode !== 'adding' && symList.length > 0 &&
    isDrawingUnlocked && !lessonActive && interactionMode !== 'ERASE' && !selectedSymbolCard;

  return (
    <div
      className={`transition-label${labelSide ? ` label-${labelSide}` : ''}${interactionMode === 'ERASE' ? ' erasable-target' : ''}${selectedSymbolCard ? ' clickable action-target' : ''}${isError ? ' error-pulse-severe' : ''}${className ? ' ' + className : ''}`}
      style={{ left: `${left}px`, top: `${top}px` }}
      onClick={handleContainerClick}
    >
      <div className="transition-chips">
        {symList.map((sym, i) =>
          mode?.type === 'editing' && mode.chipIdx === i ? (
            <input key={i} ref={inputRef} className="transition-chip-input"
              value={inputVal} onChange={e => setInputVal(e.target.value)}
              onBlur={commitEdit} onKeyDown={handleKeyDown}
              onClick={e => e.stopPropagation()}
              style={{ width: inputWidth }}
              autoComplete="off" spellCheck={false} />
          ) : (
            <span key={i} className="transition-chip" onClick={e => handleChipClick(e, i)}>{sym}</span>
          )
        )}
        {mode === 'adding' && (
          <input ref={inputRef} className="transition-chip-input"
            value={inputVal} onChange={e => setInputVal(e.target.value)}
            onBlur={commitAdd} onKeyDown={handleKeyDown}
            onClick={e => e.stopPropagation()}
            style={{ width: inputWidth }}
            autoComplete="off" spellCheck={false} />
        )}
        {symList.length === 0 && mode !== 'adding' && (
          <span className="transition-chip empty">?</span>
        )}
        {showAddBtn && (
          <button className={`afd-tl-add afd-tl-add-${addBtnAnchor}`} title="Adicionar símbolo à transição"
            onClick={e => { e.stopPropagation(); setMode('adding'); setInputVal(''); }}>＋</button>
        )}
      </div>
    </div>
  );
});

export default memo(TransitionLabel);
