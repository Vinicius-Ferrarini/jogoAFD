// ─── useMTGuidedLesson: estado do Modo Aula da MT ─────────────────────────────
// Overlay puro: o grafo real do aluno (useTMGraph) nunca é tocado durante a aula.
// Os displayNodes/displayTransitions são fornecidos pelo passo atual da lesson.
import { useCallback, useMemo, useState } from 'react';

export default function useMTGuidedLesson(level) {
  const [step, setStep] = useState(null); // null = fora da aula

  const steps  = useMemo(() => level?.guidedLesson?.steps ?? [], [level]);
  const active = step !== null && steps.length > 0;
  const cur    = active ? steps[Math.min(step, steps.length - 1)] : null;

  const goTo   = useCallback((i) => setStep(i), []);
  const finish = useCallback(() => setStep(null), []);
  const reset  = useCallback(() => setStep(null), []);

  const displayNodes       = active ? (cur?.stateUpdate?.nodes ?? []) : null;
  const displayTransitions = active ? (cur?.stateUpdate?.transitions ?? []) : null;

  return {
    step, active, cur, steps,
    phase: cur?.phase ?? null,
    hasLesson: steps.length > 0,
    displayNodes, displayTransitions,
    goTo, finish, reset,
  };
}
