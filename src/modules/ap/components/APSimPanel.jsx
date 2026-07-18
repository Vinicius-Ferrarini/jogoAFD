// ─── APSimPanel: simulação passo a passo do AP, no estilo compacto do SimPanel
// do AFD (rodapé, fita de entrada, veredicto, navegação ◀/▶), com a pilha visível
// numa coluna ao lado, animando em tempo real conforme os passos avançam.
// Reusa .sim-panel-* (AFDPart1.css) para o painel + .ap-simp-stack-* (próprio)
// para a coluna da pilha.
import { useEffect, useMemo, useState } from 'react';

const show = (v) => (v === '' || v == null ? 'λ' : v);

const PALETTE = [
  { bg: '#f97316', border: '#c2410c', text: '#fff' },
  { bg: '#ec4899', border: '#be185d', text: '#fff' },
  { bg: '#22c55e', border: '#15803d', text: '#fff' },
  { bg: '#06b6d4', border: '#0e7490', text: '#fff' },
  { bg: '#a855f7', border: '#7e22ce', text: '#fff' },
  { bg: '#eab308', border: '#a16207', text: '#000' },
  { bg: '#14b8a6', border: '#0f766e', text: '#fff' },
  { bg: '#ef4444', border: '#b91c1c', text: '#fff' },
];
const BOTTOM_COLOR = { bg: '#6366f1', border: '#3730a3', text: '#fff' };

function blockColor(sym, bottom) {
  if (sym === (bottom || 'Z')) return BOTTOM_COLOR;
  const idx = sym.charCodeAt(0) % PALETTE.length;
  return PALETTE[idx];
}

const REJECT_TITLE = {
  stuck:         'Travou!',
  'input-left':  'Pilha esvaziou cedo!',
  'stack-left':  'Pilha não esvaziou!',
  'no-initial':  'Sem estado inicial!',
};

export default function APSimPanel({
  run, word, accepted, reason, title, message,
  onHighlight, onStepNarrate, onClose,
  stackBottom = 'Z',
}) {
  const configs = useMemo(() => {
    if (!run || run.length === 0) return [{ state: null, pos: 0, stack: 'Z', step: null }];
    const start = { state: run[0].from, pos: run[0].posBefore, stack: run[0].stackBefore, step: null };
    return [start, ...run.map(s => ({ state: s.to, pos: s.posAfter, stack: s.stackAfter, step: s }))];
  }, [run]);

  const [i, setI] = useState(0);
  const cur  = configs[Math.min(i, configs.length - 1)];
  const last = i >= configs.length - 1;
  const isAccepted = last && accepted !== false && cur.stack === '' && cur.pos >= (word || '').length;
  const isRejected = last && accepted === false;

  useEffect(() => {
    if (!cur?.state) onHighlight?.(null, null);
    else onHighlight?.(cur.state, last ? 'done' : 'active');
    onStepNarrate?.(cur);
  }, [cur, last, onHighlight, onStepNarrate]);
  useEffect(() => () => onHighlight?.(null, null), [onHighlight]);

  const chars    = (word || '').split('');
  const stackArr = (cur?.stack ?? '').split('').filter(Boolean);
  const pushCount = cur.step?.push ? cur.step.push.length : 0;

  return (
    <div className="sim-panel-container ap-simp-container">
      <div className="ap-simp-body">
        {/* ── Painel compacto (mesmo estilo do SimPanel do AFD) ── */}
        <div className="ap-simp-main">
          {(title || message) && (
            <div className="ap-simp-banner">
              {title && <b>{title}</b>}
              {message && <span>{message}</span>}
            </div>
          )}
          <div className="sim-panel-header">
            <span className="sim-panel-title">🔍 AP</span>
            <div className="sim-word-display">
              {chars.length === 0
                ? <span className="sim-char">λ</span>
                : chars.map((c, k) => {
                    let cls = 'sim-char';
                    if (k === cur.pos) cls += ' active';
                    else if (k < cur.pos) cls += ' done-ok';
                    return <span key={k} className={cls}>{c}</span>;
                  })
              }
            </div>
            {last && (
              <span className={`sim-result-badge ${isAccepted ? 'accepted' : 'rejected'}`}>
                {isAccepted ? '✅ ACEITA' : '❌ REJEITADA'}
              </span>
            )}
            <button className="sim-panel-close" onClick={onClose} title="Fechar">✕</button>
          </div>

          <div className="sim-panel-body">
            {cur.step ? (
              <div className="sim-current-step ok ap-simp-step">
                <span className="sim-step-icon">➡</span>
                <span className="ap-simp-step-states">
                  <b>{cur.step.from}</b> → <b>{cur.step.to}</b>
                </span>
                <span className="ap-simp-step-triple">
                  📖 {show(cur.step.read)} | ⬇ {show(cur.step.pop)} | ⬆ {show(cur.step.push)}
                </span>
              </div>
            ) : (
              <div className="sim-current-step info ap-simp-step">
                <span className="sim-step-icon">▶</span>
                <span>Configuração inicial — estado <b>{cur.state ?? '—'}</b></span>
              </div>
            )}
            {isRejected && (
              <div className="sim-current-step error ap-simp-step" style={{ marginTop: 6 }}>
                <span className="sim-step-icon">❌</span>
                <span>{REJECT_TITLE[reason] || 'Rejeita'}</span>
              </div>
            )}
          </div>

          <div className="sim-panel-nav">
            <button className="sim-nav-btn" onClick={() => setI(0)} disabled={i === 0} title="Início">⏮</button>
            <button className="sim-nav-btn" onClick={() => setI(v => Math.max(0, v - 1))} disabled={i === 0}>◀</button>
            <span className="sim-progress">{i} / {configs.length - 1}</span>
            <button className="sim-nav-btn" onClick={() => setI(v => Math.min(configs.length - 1, v + 1))} disabled={last}>▶</button>
          </div>
        </div>

        {/* ── Pilha visual (coluna compacta, ao lado do painel) ── */}
        <div className="ap-simp-stack-wrap">
          <span className="ap-simp-stack-lbl">▼ TOPO</span>
          <div className="ap-simp-stack-col">
            {stackArr.length === 0
              ? <div className="ap-simp-stack-empty">✓ vazia!</div>
              : stackArr.map((sym, k) => {
                  const col   = blockColor(sym, stackBottom);
                  const isNew = k < pushCount;
                  return (
                    <div
                      key={`${i}-${k}`}
                      className={`ap-simp-stack-block${isNew ? ' just-pushed' : ''}`}
                      style={{ background: col.bg, borderColor: col.border, color: col.text }}
                    >
                      {sym}
                    </div>
                  );
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
