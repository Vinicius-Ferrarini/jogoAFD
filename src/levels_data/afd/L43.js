import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL43() {
  const b = makeBuilder(LEVEL_GRAPHS[43], {
    q0: [8, 45], q1: [28, 45], q2: [30, 78], q3: [52, 78], q4: [58, 45], q5: [84, 45],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q4', 'q5').addEdges(['q0', 'a', 'q1'], ['q1', 'c', 'q4'], ['q4', 'c', 'q5']);
  steps.push(b.draw('Menor palavra "acc": q0—a→q1, depois o "cc" obrigatório (q1→q4→q5, final).', -1));
  steps.push(b.test('Veja "acc" chegar a q5 (final). Aceita!', 'acc', 0));
  steps.push(b.reject('Mas "cc" não tem nenhum "a" (n ímpar ≥ 1): trava logo em q0!', 'cc', 0));
  b.addNodes('q2', 'q3')
   .addEdges(['q1', 'a', 'q0'], ['q1', 'b', 'q2'], ['q2', 'b', 'q3'], ['q3', 'b', 'q2'], ['q3', 'c', 'q4'], ['q5', 'd', 'q5']);
  steps.push(b.draw('Adicionamos o vai-e-volta de "a" (paridade ímpar), o ciclo "bb" e o laço de "d".', 1));
  steps.push(b.test('"aaacc" tem 3 "a"s (ímpar): q0→q1→q0→q1→q4→q5 (final). Aceita!', 'aaacc', 1));
  steps.push(b.test('"abbccdd" usa um par "bb" e dois "d" no fim: fecha em q5 (final). Aceita!', 'abbccdd', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 43, label: "L42", formula: "L = { a^n b^2m c c d^p | n > 0 (ímpar), m, p ≥ 0 }",              desc: "",                                                                 shortestWord: "acc",      regex: /^a(aa)*(bb)*ccd*$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["acc","aaacc","accdd"],   rejectedWords: ["cc","aacc","abcc"],    hint: "O início exige vai-e-volta ímpar para os 'a's, depois 'b's em duplas.",                                             successMsg: "Paridade e duplas em sequência perfeita.",
    tutorials: {
      onStart: { type: 'theory', title: 'a-ímpar + b-pares + cc + d*!', dialog: [
        'L42: a^n b^2m cc d^p onde n > 0 ímpar, m ≥ 0, p ≥ 0.',
        '"acc" ✓ (1a, 0b). "aaacc" ✓ (3a, 0b). "abbcc" ✓ (1a, 2b). "aacc" ✗ (2a = par!).',
        '6 estados: q0 (start), q1 (odd-a), q2 (even-a), q3 (odd-b), q4 (1ºc), q5 (final).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '6 Estados: Paridade + Cadeia', dialog: [
        'q0—a→q1↔q2(a). q1 = a-ímpar (válido). q2 = a-par (precisa de mais um "a").',
        'q1—c→q4—c→q5(f). q5 loop d. "cc" obrigatório antes dos d\'s.',
        'q1—b→q3—b→q1. Pares de "b" retornam a q1. Ímpar de "b" trava em q3.',
      ] },
    },
    boardWords: ['acc', 'cc', 'aaacc', 'abbccdd'],
    guidedLesson: buildLessonL43() };
