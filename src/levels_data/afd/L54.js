import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [12, 15], q1: [30,  4], q2: [38, 15], q3: [30, 26],
    q4: [56, 26], q5: [48, 15], q6: [56,  4], q7: [70, 15],
  };

function buildLessonL54() {
  // q0=ppp(ini), q1=ipp, q2=pip, q3=ppi, q4=pii, q5=ipi, q6=iip, q7=iii(final)
  const b = makeBuilder(LEVEL_GRAPHS[54], LAYOUT);
  const steps = [];
  b.addNodes('q0').addEdges();
  steps.push(b.draw('q0 = ppp: "a,b,c todos PAR" (0 ocorrências é par). É o inicial, mas não final.', -1));
  steps.push(b.reject('λ tem 0 de cada letra (par,par,par): fica em q0, que não é final. Rejeita!', '', 0));
  b.addNodes('q1').addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q0']);
  steps.push(b.draw('Cada "a" alterna a paridade de a: q0↔q1 (ppp↔ipp).', 1));
  steps.push(b.reject('"a" vai de q0→q1 (ímpar,par,par), mas q1 não é final. Rejeita!', 'a', 1));
  b.addNodes('q2', 'q6').addEdges(
    ['q0', 'b', 'q2'], ['q2', 'b', 'q0'],
    ['q1', 'b', 'q6'], ['q6', 'b', 'q1'],
  );
  steps.push(b.draw('"b" alterna a paridade do meio: q0↔q2 (ppp↔pip), q1↔q6 (ipp↔iip).', 1));
  steps.push(b.reject('"ab": q0→q1→q6 (iip: ímpar,ímpar,par) ainda falta o c ímpar. Rejeita!', 'ab', 1));
  b.addNodes('q3', 'q5', 'q4', 'q7').addEdges(
    ['q0', 'c', 'q3'], ['q3', 'c', 'q0'],
    ['q1', 'c', 'q5'], ['q5', 'c', 'q1'],
    ['q2', 'c', 'q4'], ['q4', 'c', 'q2'],
    ['q6', 'c', 'q7'], ['q7', 'c', 'q6'],
    ['q3', 'a', 'q5'], ['q5', 'a', 'q3'],
    ['q2', 'a', 'q6'], ['q6', 'a', 'q2'],
    ['q4', 'a', 'q7'], ['q7', 'a', 'q4'],
    ['q3', 'b', 'q4'], ['q4', 'b', 'q3'],
    ['q5', 'b', 'q7'], ['q7', 'b', 'q5'],
  );
  steps.push(b.draw('"c" alterna a paridade final: cubo completo. Só q7=iii (tudo ímpar) é final.', 1));
  steps.push(b.test('"abc": q0→q1→q6→q7 (iii, tudo ímpar) é final! Aceita!', 'abc', 1));
  steps.push(b.test('"abccc": dois "c" extras saem e voltam a q7. Aceita!', 'abccc', 1));
  steps.push(b.test('"aaabccc": "a" extras passam por q1/q0 antes, mas fecha em q7. Aceita!', 'aaabccc', 1));
  steps.push(b.formalIntro('Cubo completo: 8 estados (paridade de a,b,c), 1 final (q7). Agora a Descrição Formal.', 1));
  return steps;
}

export default { id: 54, layout: LAYOUT, label: "L54", formula: "L = {w ∈ {a,b,c}* / |w|a, |w|b e |w|c são todos ímpares}", desc: "", shortestWord: "abc", alphabet: ['a', 'b', 'c'], acceptedWords: ["abc","abccc","aaabccc","cba"], rejectedWords: ["","a","ab","aabbcc"], hint: "Pense num cubo: cada vértice é uma combinação de paridades (par/ímpar) de a, b e c. Só o vértice 'tudo ímpar' (q7) é final.", successMsg: "Cubo de paridade dominado!",
    validate: (w) => {
      if (!/^[abc]*$/.test(w)) return false;
      const count = (ch) => (w.match(new RegExp(ch, 'g')) || []).length;
      return count('a') % 2 === 1 && count('b') % 2 === 1 && count('c') % 2 === 1;
    },
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade de a, b e c — todas ímpares!', dialog: [
        'L54: a palavra só é aceita se a quantidade de "a", de "b" E de "c" forem todas ÍMPARES.',
        '"abc" ✓ (1,1,1 — todos ímpares). "aabbcc" ✗ (2,2,2 — todos pares). "ab" ✗ (falta c, e a contagem de c é 0, par).',
        'Cada estado guarda 3 bits de paridade (a,b,c) — 8 combinações, igual a um cubo!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '8 Estados: o Cubo de Paridades', dialog: [
        'Cada letra lida (a, b ou c) alterna SÓ a paridade daquela letra, virando para o vértice vizinho do cubo.',
        'q0=ppp (tudo par, inicial). q7=iii (tudo ímpar, único final).',
        '"abc": q0—a→q1—b→q6—c→q7(final) ✓. Qualquer ordem de a,b,c uma vez cada chega em q7.',
      ] },
    },
    boardWords: ['abc', 'aabbcc', 'ab', 'cba'],
    guidedLesson: buildLessonL54() };
