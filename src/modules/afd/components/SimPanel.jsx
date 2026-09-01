// Painel de simulação passo a passo — compartilhado entre AFDPart1 e AFDPart2.
// CSS: classes .sim-panel-* definidas em AFDPart1.css (já importado em ambos).
import { useState, useMemo, useEffect } from 'react';

// `mismatchNote` (opcional): frase de aviso mostrada como "chip" no cabeçalho
// (mesmo estilo do selo de resultado) quando a simulação é aberta sozinha por
// uma validação que reprovou essa palavra — ex.: '"a" foi rejeitada — deveria
// ser aceita'. O painel sempre começa no passo 1 pro aluno percorrer o rastro
// do começo. O uso manual (botão "🔬 Simular") não passa o prop.
export default function SimPanel({ word, mismatchNote = null, nodes, transitions, onClose, onHighlightNode }) {
  const initState = nodes.find(n => n.isInitial)?.id ?? null;

  const buildSteps = () => {
    const steps = [];
    const w = word === 'λ' ? '' : word;
    if (!initState) {
      steps.push({ type: 'error', icon: '❌', text: 'Nenhum estado inicial definido!', state: null, charIdx: -1, tIdx: null });
      return steps;
    }
    const initLabel = nodes.find(n => n.id === initState)?.label ?? initState;
    steps.push({ type: 'info', icon: '▶', text: `Início em "${initLabel}"`, state: initState, charIdx: -1, tIdx: null });
    let current = initState;
    for (let i = 0; i < w.length; i++) {
      const ch = w[i];
      const trIdx = transitions.findIndex(t => t.from === current && t.symbol.split(',').map(s => s.trim()).includes(ch));
      if (trIdx === -1) {
        const curLabel = nodes.find(n => n.id === current)?.label ?? current;
        steps.push({ type: 'error', icon: '❌', text: `"${curLabel}" sem transição com '${ch}' — REJEITADA`, state: current, charIdx: i, tIdx: null });
        return steps;
      }
      const tr = transitions[trIdx];
      const fromLabel = nodes.find(n => n.id === tr.from)?.label ?? tr.from;
      const toLabel   = nodes.find(n => n.id === tr.to)?.label   ?? tr.to;
      steps.push({ type: 'ok', icon: '➡', text: `"${fromLabel}" —[${ch}]→ "${toLabel}"`, state: tr.to, charIdx: i, tIdx: trIdx, symbol: ch });
      current = tr.to;
    }
    const finalNode  = nodes.find(n => n.id === current);
    const finalLabel = finalNode?.label ?? current;
    if (finalNode?.isFinal) {
      steps.push({ type: 'done', icon: '✅', text: `"${finalLabel}" é estado final`, state: current, charIdx: w.length, tIdx: null });
    } else {
      steps.push({ type: 'error', icon: '❌', text: `"${finalLabel}" não é estado final`, state: current, charIdx: w.length, tIdx: null });
    }
    return steps;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const steps = useMemo(buildSteps, []);
  const [stepIdx, setStepIdx] = useState(0);
  const currentStep = steps[stepIdx];
  const w = (word === 'λ' || word === 'null' || word === 'vazio') ? '' : word;
  const isFinished = stepIdx === steps.length - 1;
  const accepted   = isFinished && currentStep?.type === 'done';

  useEffect(() => {
    onHighlightNode(currentStep?.state ?? null, currentStep?.type ?? null, currentStep?.tIdx ?? null, currentStep?.symbol ?? null);
    return () => onHighlightNode(null, null, null, null);
  }, [stepIdx, currentStep, onHighlightNode]);

  useEffect(() => {
    if (isFinished) { const t = setTimeout(() => onClose(), 6000); return () => clearTimeout(t); }
  }, [isFinished, onClose]);

  return (
    <div className="sim-panel-container">
      <div className="sim-panel-header">
        <span className="sim-panel-title">🔬 <b>{w || 'λ'}</b></span>
        <div className="sim-word-display">
          {w.length === 0
            ? <span className="sim-char">λ</span>
            : w.split('').map((ch, i) => {
                const ci = currentStep?.charIdx ?? -1;
                let cls = 'sim-char';
                if (i === ci) cls += ' active';
                else if (i < ci) cls += ' done-ok';
                return <span key={i} className={cls}>{ch}</span>;
              })
          }
        </div>
        {isFinished ? (
          <span className={`sim-result-badge ${accepted ? 'accepted' : 'rejected'}`}>
            {accepted ? '✅ ACEITA' : '❌ REJEITADA'}
          </span>
        ) : mismatchNote && (
          <span className="sim-result-badge rejected sim-mismatch-badge" title={mismatchNote}>
            ⚠ {mismatchNote}
          </span>
        )}
        <button className="sim-panel-close" onClick={onClose}>✕</button>
      </div>

      <div className="sim-panel-body">
        <div className={`sim-current-step ${currentStep?.type || ''}`}>
          <span className="sim-step-icon">{currentStep?.icon}</span>
          <span>{currentStep?.text}</span>
        </div>
      </div>

      <div className="sim-panel-nav">
        <button className="sim-nav-btn" onClick={() => setStepIdx(i => Math.max(0, i - 1))} disabled={stepIdx === 0}>◀</button>
        <span className="sim-progress">{stepIdx + 1} / {steps.length}</span>
        <button className="sim-nav-btn" onClick={() => setStepIdx(i => Math.min(steps.length - 1, i + 1))} disabled={isFinished}>▶</button>
      </div>
    </div>
  );
}
