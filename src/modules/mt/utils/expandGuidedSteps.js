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
//
// 2ª regra (níveis com alfabeto grande, ex. L11 — 75 símbolos, cada um vira
// uma transição self-loop revelada aos poucos): quando o array atual contém
// TODOS os elementos do array anterior (mesmo conteúdo, possivelmente em
// posições diferentes), o passo salva `{ base: 'prev', items: [...] }`, onde
// `items` é a sequência EXATA (com a ordem/posições reais) de "referência ao
// item N do array anterior" (número) ou "valor literal novo" (objeto) —
// preserva 100% a ordem original, não é só um merge de conjunto.
function isRefPlan(value) {
  return value && typeof value === 'object' && value.base === 'prev' && Array.isArray(value.items);
}

function expandField(raw, prev) {
  if (raw === '=') return prev;
  if (isRefPlan(raw)) return raw.items.map(it => (typeof it === 'number' ? prev[it] : it));
  return raw;
}

export function expandGuidedSteps(steps) {
  if (!steps || steps.length === 0) return steps ?? [];
  let prevNodes = [];
  let prevTransitions = [];
  return steps.map(step => {
    const su = step.stateUpdate;
    if (!su) return step;
    const nodes       = expandField(su.nodes, prevNodes);
    const transitions = expandField(su.transitions, prevTransitions);
    prevNodes = nodes;
    prevTransitions = transitions;
    return { ...step, stateUpdate: { nodes, transitions } };
  });
}
