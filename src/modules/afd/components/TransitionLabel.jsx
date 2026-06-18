// ─── TransitionLabel: chips verticais com edição inline ─────────────────────
// Renderiza o rótulo de uma transição como chips de símbolos com edição inline.
// CSS: classes .transition-label / .transition-chip(-input) em AFDPart1.css.
import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

const TransitionLabel = forwardRef(function TransitionLabel({ idx, symbol, interactionMode, selectedSymbolCard, isDrawingUnlocked, lessonActive, isError, style, className, onAdd, onEdit, onErase, onAppendCard }, ref) {
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

  return (
    <div
      className={`transition-label${interactionMode === 'ERASE' ? ' erasable-target' : ''}${selectedSymbolCard ? ' clickable action-target' : ''}${isError ? ' error-pulse-severe' : ''}${className ? ' ' + className : ''}`}
      style={style}
      onClick={handleContainerClick}
    >
      <div className="transition-chips">
        {symList.map((sym, i) =>
          mode?.type === 'editing' && mode.chipIdx === i ? (
            <input key={i} ref={inputRef} className="transition-chip-input"
              value={inputVal} onChange={e => setInputVal(e.target.value)}
              onBlur={commitEdit} onKeyDown={handleKeyDown}
              onClick={e => e.stopPropagation()} maxLength={4}
              autoComplete="off" spellCheck={false} />
          ) : (
            <span key={i} className="transition-chip" onClick={e => handleChipClick(e, i)}>{sym}</span>
          )
        )}
        {mode === 'adding' ? (
          <input ref={inputRef} className="transition-chip-input"
            value={inputVal} onChange={e => setInputVal(e.target.value)}
            onBlur={commitAdd} onKeyDown={handleKeyDown}
            onClick={e => e.stopPropagation()} maxLength={4}
            autoComplete="off" spellCheck={false} />
        ) : symList.length === 0 ? (
          <span className="transition-chip empty">?</span>
        ) : (isDrawingUnlocked && !lessonActive && interactionMode !== 'ERASE' && !selectedSymbolCard) ? (
          <button className="afd-tl-add" title="Adicionar símbolo à transição"
            onClick={e => { e.stopPropagation(); setMode('adding'); setInputVal(''); }}>＋</button>
        ) : null}
      </div>
    </div>
  );
});

export default TransitionLabel;
