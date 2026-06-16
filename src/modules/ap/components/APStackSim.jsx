// ─── APStackSim v2: simulação visual passo a passo (estilo cartoon Turma da Mônica)
// Recebe um `run` (pdaAcceptingRun ou pdaRejectingTrace) e navega config a config.
// Cada bloco da pilha tem cor única por símbolo; blocos recém-empilhados recebem
// a animação `ap-block-push` (saltam de cima para a posição). Veredicto final anima
// entrada/saída com `ap-verdict-pop`.
import { useEffect, useMemo, useState } from 'react';

const show = (v) => (v === '' || v == null ? 'λ' : v);

// Paleta de cores — cada símbolo distinto recebe uma cor própria
const PALETTE = [
  { bg: '#f97316', border: '#c2410c', text: '#fff' },  // laranja
  { bg: '#ec4899', border: '#be185d', text: '#fff' },  // rosa
  { bg: '#22c55e', border: '#15803d', text: '#fff' },  // verde
  { bg: '#06b6d4', border: '#0e7490', text: '#fff' },  // ciano
  { bg: '#a855f7', border: '#7e22ce', text: '#fff' },  // roxo
  { bg: '#eab308', border: '#a16207', text: '#000' },  // amarelo
  { bg: '#14b8a6', border: '#0f766e', text: '#fff' },  // teal
  { bg: '#ef4444', border: '#b91c1c', text: '#fff' },  // vermelho
];
const BOTTOM_COLOR = { bg: '#6366f1', border: '#3730a3', text: '#fff' }; // fundo da pilha

function blockColor(sym, bottom) {
  if (sym === (bottom || 'Z')) return BOTTOM_COLOR;
  const idx = sym.charCodeAt(0) % PALETTE.length;
  return PALETTE[idx];
}

const REJECT_TITLE = {
  stuck:         '✗ Travou!',
  'input-left':  '✗ Pilha esvaziou cedo!',
  'stack-left':  '✗ Pilha não esvaziou!',
  'no-initial':  '✗ Sem estado inicial!',
};
const REJECT_DETAIL = {
  stuck:         'Não há transição para esta combinação de estado, símbolo lido e topo da pilha.',
  'input-left':  'A pilha ficou vazia antes de consumir toda a entrada.',
  'stack-left':  'A entrada acabou, mas ainda há símbolos na pilha — precisava esvaziar!',
  'no-initial':  'Defina um estado inicial antes de simular.',
};

export default function APStackSim({
  run, word, title, message, accepted, reason,
  onHighlight, onStepNarrate, onClose,
  stackBottom = 'Z',
}) {
  // Reconstrói as configs: [config-inicial, ...após-cada-passo]
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

  // Quantas células do topo foram pushed neste passo (para destacar com animação)
  const pushCount = cur.step?.push ? cur.step.push.length : 0;
  const didRead   = !!(cur.step?.read);
  const didPop    = !!(cur.step?.pop);
  const didPush   = !!(cur.step?.push);

  // Para o card de "travamento": o que estava presente quando não achou transição
  const stuckState = cur.state;
  const stuckChar  = chars[cur.pos] ?? null;
  const stuckTop   = stackArr[0] ?? null;

  return (
    <div className="ap-sim2">
      {/* ── Cabeçalho ── */}
      <div className="ap-sim2-head">
        <span className="ap-sim2-title">🔍 {title || 'Simulação'}</span>
        <button className="ap-sim2-close" onClick={onClose} title="Fechar">✕</button>
      </div>
      {message && <p className="ap-sim2-msg">{message}</p>}

      {/* ── Fita de entrada ── */}
      <div className="ap-sim2-tape-wrap">
        <span className="ap-sim2-tape-lbl">ENTRADA</span>
        <div className="ap-sim2-tape">
          {chars.length === 0
            ? <span className="ap-sim2-lambda">λ</span>
            : chars.map((c, k) => (
                <span key={k} className={[
                  'ap-sim2-ch',
                  k < cur.pos ? 'consumed' : '',
                  k === cur.pos ? 'reading' : '',
                ].filter(Boolean).join(' ')}>{c}</span>
              ))
          }
          <span className={`ap-sim2-end${cur.pos >= chars.length ? ' reading' : ''}`}>⊣</span>
        </div>
      </div>

      {/* ── Card da transição aplicada ── */}
      {cur.step ? (
        <div className="ap-sim2-rule">
          <div className="ap-sim2-states">
            <span className="ap-sim2-sbadge from">{cur.step.from}</span>
            <span className="ap-sim2-rule-arrow">──▶</span>
            <span className="ap-sim2-sbadge to">{cur.step.to}</span>
          </div>
          <div className="ap-sim2-triple">
            <span className={`ap-sim2-tp ${didRead ? 'read' : 'dim'}`} title="Leu">
              📖 {show(cur.step.read)}
            </span>
            <span className="ap-sim2-tsep">|</span>
            <span className={`ap-sim2-tp ${didPop ? 'pop' : 'dim'}`} title="Desempilhou">
              ⬇ {show(cur.step.pop)}
            </span>
            <span className="ap-sim2-tsep">|</span>
            <span className={`ap-sim2-tp ${didPush ? 'push' : 'dim'}`} title="Empilhou">
              ⬆ {show(cur.step.push)}
            </span>
          </div>
        </div>
      ) : (
        <div className="ap-sim2-rule-init">Passo 0 — configuração inicial</div>
      )}

      {/* ── Pilha visual (estilo barril aberto no topo) ── */}
      <div className="ap-sim2-stack-wrap">
        <span className="ap-sim2-topo-lbl">▼ TOPO</span>
        <div className="ap-sim2-barrel">
          {stackArr.length === 0
            ? <div className="ap-sim2-vazia">✓ vazia!</div>
            : stackArr.map((sym, k) => {
                const col   = blockColor(sym, stackBottom);
                const isNew = k < pushCount;
                return (
                  <div
                    key={`${i}-${k}`}
                    className={[
                      'ap-sim2-block',
                      isNew ? 'just-pushed' : '',
                      k === 0 ? 'is-top' : '',
                    ].filter(Boolean).join(' ')}
                    style={{ background: col.bg, borderColor: col.border, color: col.text }}
                  >
                    {sym}
                    {k === 0 && <span className="ap-sim2-badge topo-tag">{isNew ? '✨ novo' : 'topo'}</span>}
                    {sym === stackBottom && k === stackArr.length - 1 && (
                      <span className="ap-sim2-badge bot-tag">★Z</span>
                    )}
                  </div>
                );
              })
          }
        </div>
        <span className="ap-sim2-fundo-lbl">▲ FUNDO</span>
      </div>

      {/* ── Barra de informação: estado + contador ── */}
      <div className="ap-sim2-infobar">
        <span>Estado: <b>{cur.state ?? '—'}</b></span>
        <span className="ap-sim2-step-badge">{i} / {configs.length - 1}</span>
      </div>

      {/* ── Navegação ── */}
      <div className="ap-sim2-nav">
        <button onClick={() => setI(0)} disabled={i === 0} title="Início">⏮</button>
        <button onClick={() => setI(v => Math.max(0, v - 1))} disabled={i === 0}>◀ Ant.</button>
        <button onClick={() => setI(v => Math.min(configs.length - 1, v + 1))} disabled={last}>Próx. ▶</button>
      </div>

      {/* ── Veredicto final ── */}
      {isAccepted && (
        <div className="ap-sim2-verdict accept">
          🎉 ACEITA! 🎉
          <div className="ap-sim2-verdict-sub">Pilha vazia + entrada consumida!</div>
        </div>
      )}
      {isRejected && (
        <div className="ap-sim2-verdict reject">
          {REJECT_TITLE[reason] || '✗ Rejeita'}
          <div className="ap-sim2-verdict-sub">{REJECT_DETAIL[reason] || 'Não aceita.'}</div>
          {reason === 'stuck' && (
            <div className="ap-sim2-stuck-row">
              <span className="ap-sim2-stuck-item state">q: {stuckState ?? '—'}</span>
              <span className="ap-sim2-stuck-item char">
                {stuckChar !== null ? `lê: '${stuckChar}'` : 'entrada: ⊣'}
              </span>
              <span className="ap-sim2-stuck-item top">
                {stuckTop !== null ? `topo: ${stuckTop}` : 'pilha: vazia'}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
