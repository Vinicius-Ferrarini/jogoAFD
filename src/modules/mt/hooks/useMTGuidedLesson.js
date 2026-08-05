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

  // Transição percorrida entre o passo anterior e o atual — usada pra destacar
  // a seta em amarelo (mesmo destaque do nó ativo) durante uma simulação.
  // Cada "executou" no storyboard tem: passo anterior com activeNode=origem e
  // tape/head ainda no símbolo lido; passo atual com activeNode=destino e a
  // tape já escrita. Acha, entre as transições já reveladas no passo atual, a
  // que liga (origem→destino) lendo exatamente o símbolo que estava sob a
  // cabeça no passo anterior — isso desambigua estados com múltiplas regras
  // de saída (self-loops, ramificações) sem precisar de um campo extra no
  // storyboard.
  const activeTransition = useMemo(() => {
    if (!active || step === null || step === 0) return null;
    const prev = steps[step - 1];
    if (!prev || prev.activeNode === undefined || cur?.activeNode === undefined) return null;
    // Só marca a seta se os dois passos pertencem à MESMA simulação em
    // andamento (mesma palavra) — evita herdar uma seta de uma simulação
    // anterior quando o storyboard volta a um passo de montagem do grafo.
    if (cur?.simulateWord === undefined || prev.simulateWord !== cur.simulateWord) return null;
    const readSymbol = Array.isArray(prev.tape) && typeof prev.head === 'number' ? prev.tape[prev.head] : undefined;
    if (readSymbol === undefined) return null;
    const transitions = cur?.stateUpdate?.transitions ?? [];
    return transitions.find((t) =>
      t.from === prev.activeNode && t.to === cur.activeNode && t.read === readSymbol
    ) ?? null;
  }, [active, step, steps, cur]);

  return {
    step, active, cur, steps,
    phase: cur?.phase ?? null,
    hasLesson: steps.length > 0,
    displayNodes, displayTransitions,
    activeTransition,
    goTo, finish, reset,
  };
}
