// ─── useGuidedLesson: estado da Aula Guiada do AFD (GRAPH + FORMAL) ────────────
// Expande o hook original: além de controlar o passo e os snapshots do aluno,
// agora auto-deriva os passos da FASE FORMAL a partir do último stateUpdate da
// guidedLesson (mapeando Q, Σ, q₀, F e a tabela δ incrementalmente).
import { useState, useRef, useCallback, useMemo } from 'react';

// Constrói os passos da fase FORMAL a partir do stateUpdate final e do alfabeto.
function buildAFDFormalSteps(stateUpdate, alphabet) {
  const { nodes, transitions } = stateUpdate;
  const idToLabel = Object.fromEntries(nodes.map(n => [n.id, n.label ?? n.id]));
  const stateLabels = nodes.map(n => n.label ?? n.id);
  const finalLabels = nodes.filter(n => n.isFinal).map(n => n.label ?? n.id);
  const initNode    = nodes.find(n => n.isInitial);
  const initLabel   = initNode ? (initNode.label ?? initNode.id) : '';

  // Tabela δ pré-computada: deltaMap[estadoLabel][símbolo] = destinoLabel
  const deltaMap = {};
  for (const n of nodes) {
    const lbl = idToLabel[n.id];
    deltaMap[lbl] = {};
    for (const sym of alphabet) {
      const tr = transitions.find(t =>
        t.from === n.id &&
        t.symbol.split(',').map(s => s.trim()).includes(sym)
      );
      deltaMap[lbl][sym] = tr ? (idToLabel[tr.to] ?? '') : '';
    }
  }

  const Q_str = stateLabels.length === 1
    ? stateLabels[0]
    : `{ ${stateLabels.join(', ')} }`;
  const Σ_str = alphabet.length === 1
    ? alphabet[0]
    : `{ ${alphabet.join(', ')} }`;
  const F_str = finalLabels.length === 0 ? '∅'
    : finalLabels.length === 1 ? finalLabels[0]
    : `{ ${finalLabels.join(', ')} }`;

  const steps = [
    { phase: 'FORMAL', stateUpdate, formalReveal: { kind: 'tuple', fields: { Q: Q_str } } },
    { phase: 'FORMAL', stateUpdate, formalReveal: { kind: 'tuple', fields: { Sigma: Σ_str } } },
    { phase: 'FORMAL', stateUpdate, formalReveal: { kind: 'tuple', fields: { initial: initLabel, final: F_str } } },
  ];

  for (const lbl of stateLabels) {
    steps.push({
      phase: 'FORMAL', stateUpdate,
      formalReveal: { kind: 'delta', rowKey: lbl, deltaRow: deltaMap[lbl] },
    });
  }

  steps.push({ phase: 'FORMAL', stateUpdate, formalReveal: { kind: 'done' } });

  return steps;
}

export default function useGuidedLesson(currentLevel) {
  const [step, setStep] = useState(null);
  const userNodesSnapshot       = useRef(null);
  const userTransitionsSnapshot = useRef(null);

  const graphSteps = useMemo(() => currentLevel?.guidedLesson ?? [], [currentLevel]);

  const formalSteps = useMemo(() => {
    if (!graphSteps.length || !currentLevel?.alphabet?.length) return [];
    const lastWithNodes = [...graphSteps].reverse()
      .find(s => s.stateUpdate?.nodes?.length > 0);
    if (!lastWithNodes) return [];
    return buildAFDFormalSteps(lastWithNodes.stateUpdate, currentLevel.alphabet);
  }, [graphSteps, currentLevel?.alphabet]);

  const allSteps = useMemo(() => [...graphSteps, ...formalSteps], [graphSteps, formalSteps]);

  const active = step !== null;
  const cur    = (active && allSteps.length > 0)
    ? allSteps[Math.min(step, allSteps.length - 1)]
    : null;

  const lessonPhase    = cur?.phase ?? null;
  const lessonAtGraphEnd = (
    step !== null &&
    step === graphSteps.length - 1 &&
    formalSteps.length > 0
  );

  const formalStart = useMemo(
    () => allSteps.findIndex(s => s.phase === 'FORMAL'),
    [allSteps]
  );

  const lessonReveal = useMemo(() => {
    if (!active || step === null) return null;
    const fields = {}; const rows = new Set(); const deltaRows = {};
    let anyFormal = false;
    for (let i = 0; i <= step && i < allSteps.length; i++) {
      const fr = allSteps[i]?.formalReveal;
      if (!fr) continue;
      anyFormal = true;
      if (fr.fields) Object.assign(fields, fr.fields);
      if (fr.kind === 'delta' && fr.rowKey != null) {
        rows.add(fr.rowKey);
        if (fr.deltaRow) deltaRows[fr.rowKey] = fr.deltaRow;
      }
    }
    if (!anyFormal) return null;
    // allStates: lista completa de estados (para renderizar linhas dimmed)
    const fStep = allSteps.find(s => s.phase === 'FORMAL');
    const allStates = fStep?.stateUpdate?.nodes?.map(n => n.label ?? n.id) ?? [];
    return { fields, rows, deltaRows, allStates, current: cur?.formalReveal ?? null };
  }, [active, step, allSteps, cur]);

  // stateUpdate do passo atual (GRAPH ou FORMAL) — passado para useAFDGraph
  const lessonCurStepData = cur?.stateUpdate ?? null;

  const lessonGoFormal = useCallback(() => {
    if (formalStart >= 0) setStep(formalStart);
  }, [formalStart]);

  return {
    // ── Backward compat ────────────────────────────────────────────────────────
    guidedLessonStep:    step,
    setGuidedLessonStep: setStep,
    userNodesSnapshot,
    userTransitionsSnapshot,
    // ── Novos ─────────────────────────────────────────────────────────────────
    lessonActive:      active,
    lessonPhase,
    lessonAtGraphEnd,
    lessonReveal,
    lessonAllSteps:    allSteps,
    lessonCurStepData,
    lessonGoFormal,
  };
}
