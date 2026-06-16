// ─── useAPGuidedLesson: estado do Modo Aula do AP ────────────────────────────
// Espelha o useGuidedLesson do AFD, mas a aula é um OVERLAY puro: o grafo do
// aluno (usePDAGraph) nunca é tocado, então não precisa de snapshot/restore —
// ao sair (step = null) os display* voltam a ser o grafo real do aluno.
// Expõe os dados derivados do passo atual: grafo a exibir, status do quadro,
// aresta destacada e o "reveal" acumulado da descrição formal (FASE 2).
import { useCallback, useMemo, useState } from 'react';
import { getLesson } from '../levels_ap';

export default function useAPGuidedLesson(level) {
  const [step, setStep] = useState(null); // null = fora da aula

  const lesson = level ? getLesson(level) : null;
  const steps  = useMemo(() => lesson?.steps ?? [], [lesson]);
  const active = step !== null && steps.length > 0;
  const cur    = active ? steps[Math.min(step, steps.length - 1)] : null;

  const goTo   = useCallback((i) => setStep(i), []);
  const finish = useCallback(() => setStep(null), []);
  const reset  = useCallback(() => setStep(null), []);

  // Override do grafo exibido (apenas durante a aula).
  const displayNodes       = active ? (cur?.stateUpdate?.nodes ?? []) : null;
  const displayTransitions = active ? (cur?.stateUpdate?.transitions ?? []) : null;

  // Reveal acumulado da descrição formal: todos os formalReveal até o passo atual.
  const reveal = useMemo(() => {
    if (!active) return null;
    const fields = {}; const rows = new Set(); let anyFormal = false;
    for (let i = 0; i <= step && i < steps.length; i++) {
      const fr = steps[i]?.formalReveal;
      if (!fr) continue;
      anyFormal = true;
      if (fr.fields) Object.assign(fields, fr.fields);
      if (fr.kind === 'delta' && fr.rowKey != null) rows.add(fr.rowKey);
    }
    return anyFormal ? { fields, rows, current: cur?.formalReveal ?? null } : null;
  }, [active, step, steps, cur]);

  return {
    step, active, cur, steps,
    phase: cur?.phase ?? null,
    hasLesson: steps.length > 0,
    boardWords: lesson?.boardWords ?? [],
    boardStatus: cur?.boardStatus ?? null,
    highlightEdge: active ? (cur?.highlightEdge ?? null) : null,
    displayNodes, displayTransitions, reveal,
    goTo, finish, reset,
  };
}
