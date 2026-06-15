// ─── APStackSim: simulação passo a passo com a PILHA desenhada (estilo JFLAP) ─
// Recebe um `run` (lista de passos de pdaAcceptingRun) e navega config a config,
// mostrando entrada consumida, estado atual, a tripla aplicada e a pilha (topo
// em cima). Destaca o nó atual no canvas via onHighlight.
import { useEffect, useMemo, useState } from 'react';

const show = (v) => (v === '' || v == null ? 'λ' : v);

export default function APStackSim({ run, word, title, message, onHighlight, onClose }) {
  // Reconstrói as configurações (start + uma após cada passo).
  const configs = useMemo(() => {
    if (!run || run.length === 0) return [{ state: null, pos: 0, stack: 'Z', step: null }];
    const start = { state: run[0].from, pos: run[0].posBefore, stack: run[0].stackBefore, step: null };
    const rest = run.map((s) => ({ state: s.to, pos: s.posAfter, stack: s.stackAfter, step: s }));
    return [start, ...rest];
  }, [run]);

  // i é resetado por remontagem (o pai passa key={simKey} ao trocar de simulação).
  const [i, setI] = useState(0);
  const cur = configs[Math.min(i, configs.length - 1)];
  const last = i >= configs.length - 1;

  useEffect(() => {
    if (!cur?.state) { onHighlight?.(null, null); return; }
    onHighlight?.(cur.state, last ? 'done' : 'active');
  }, [cur, last, onHighlight]);
  useEffect(() => () => onHighlight?.(null, null), [onHighlight]);

  const chars = (word || '').split('');
  const stackArr = (cur?.stack ?? '').split(''); // índice 0 = topo

  return (
    <div className="ap-sim">
      <div className="ap-sim-head">
        <span className="ap-sim-title">{title || 'Simulação'}</span>
        <button className="ap-sim-close" onClick={onClose} title="Fechar">✕</button>
      </div>
      {message && <p className="ap-sim-msg">{message}</p>}

      {/* Entrada com cursor */}
      <div className="ap-sim-word">
        {chars.length === 0 && <span className="ap-sim-lambda">λ</span>}
        {chars.map((c, k) => (
          <span key={k} className={`ap-sim-ch ${k < cur.pos ? 'consumed' : ''} ${k === cur.pos ? 'cursor' : ''}`}>{c}</span>
        ))}
        <span className={`ap-sim-end ${cur.pos >= chars.length ? 'cursor' : ''}`}>⊣</span>
      </div>

      <div className="ap-sim-body">
        {/* Estado + tripla aplicada */}
        <div className="ap-sim-info">
          <div>Passo <b>{i}</b> / {configs.length - 1}</div>
          <div>Estado: <b>{cur.state ?? '—'}</b></div>
          {cur.step && (
            <div className="ap-sim-rule">
              aplicou&nbsp;<code>{show(cur.step.read)}, {show(cur.step.pop)} ; {show(cur.step.push)}</code>
            </div>
          )}
        </div>

        {/* Pilha desenhada (topo em cima) */}
        <div className="ap-sim-stack">
          <div className="ap-sim-stack-label">Pilha</div>
          <div className="ap-sim-stack-col">
            {stackArr.length === 0
              ? <div className="ap-sim-empty">vazia ✓</div>
              : stackArr.map((s, k) => (
                  <div key={k} className={`ap-sim-cell ${k === 0 ? 'top' : ''}`}>{s}</div>
                ))}
          </div>
        </div>
      </div>

      {/* Navegação */}
      <div className="ap-sim-nav">
        <button onClick={() => setI(0)} disabled={i === 0}>⏮</button>
        <button onClick={() => setI(v => Math.max(0, v - 1))} disabled={i === 0}>◀ Anterior</button>
        <button onClick={() => setI(v => Math.min(configs.length - 1, v + 1))} disabled={last}>Próximo ▶</button>
      </div>
      {last && cur.stack === '' && cur.pos >= chars.length && (
        <div className="ap-sim-accept">✓ Entrada consumida e pilha vazia — ACEITA.</div>
      )}
    </div>
  );
}
