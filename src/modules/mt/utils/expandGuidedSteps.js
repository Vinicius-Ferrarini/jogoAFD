// ─── expandGuidedSteps: expande o formato incremental de guidedLesson.steps ───
// Níveis com Aula Guiada longa (simulação passo a passo da fita) tinham cada
// passo salvando `stateUpdate.nodes`/`transitions` completos, mesmo quando
// idênticos ao passo anterior — no L24 isso chegava a ~6MB de JSON repetido
// (876/903 passos com "nodes" idêntico, 810/903 com "transitions" idêntico).
// No arquivo de nível, um campo idêntico ao passo anterior agora é salvo como
// a string literal "=" em vez do array inteiro — esta função reconstrói o
// array real percorrendo os passos em ordem UMA VEZ (o resultado expandido é
// cacheado por `level` via useMemo em useMTGuidedLesson, então isso não roda
// a cada render nem a cada goTo()).
export function expandGuidedSteps(steps) {
  if (!steps || steps.length === 0) return steps ?? [];
  let prevNodes = [];
  let prevTransitions = [];
  return steps.map(step => {
    const su = step.stateUpdate;
    if (!su) return step;
    const nodes       = su.nodes       === '=' ? prevNodes       : su.nodes;
    const transitions = su.transitions === '=' ? prevTransitions : su.transitions;
    prevNodes = nodes;
    prevTransitions = transitions;
    return su.nodes === '=' || su.transitions === '='
      ? { ...step, stateUpdate: { nodes, transitions } }
      : step;
  });
}
