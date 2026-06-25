import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL48() {
  const b = makeBuilder(LEVEL_GRAPHS[48], {
    q0: [9, 43], q1: [10, 72], q2: [32, 72], q3: [50, 42], q4: [65, 14], q5: [87, 15], q6: [83, 59],
  });
  const steps = [];
  b.addNodes('q0', 'q3', 'q6').addEdges(['q0', 'd', 'q3'], ['q3', 'd', 'q6']);
  steps.push(b.draw('Menor palavra "dd": q0—d→q3 (ponte) e q3—d→q6 (final).', -1));
  steps.push(b.test('Veja "dd" chegar a q6 (final). Aceita!', 'dd', 0));
  steps.push(b.reject('Mas "d" sozinho para em q3, que NÃO é final!', 'd', 0));
  b.addNodes('q1', 'q2')
   .addEdges(['q0', 'a', 'q0'], ['q0', 'b', 'q1'], ['q1', 'b', 'q2'], ['q2', 'b', 'q1'], ['q2', 'd', 'q3']);
  steps.push(b.draw('Laço de "a" e par "bb" (q1↔q2). Ponte "d" sai de q0 ou q2 (b par).', 1));
  steps.push(b.test('"abbdd" usa um "a" e par "bb": q0→q1→q2→q3→q6 (final). Aceita!', 'abbdd', 1));
  b.addNodes('q4', 'q5').addEdges(['q3', 'c', 'q4'], ['q4', 'c', 'q5'], ['q5', 'c', 'q3']);
  steps.push(b.draw('Ciclo de TRIOS "ccc" (q3→q4→q5→q3) entre os dois "d".', 2));
  steps.push(b.test('"adcccd" usa um trio "ccc": q0→q3→q4→q5→q3→q6 (final). Aceita!', 'adcccd', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 48, label: "L48", formula: "L = {w ∈ {0,1}* / a quantidade de zeros é par e a quantidade de um é impar}", desc: "(Revisão L41)",                                            shortestWord: "dd",       regex: /^a*(bb)*d(ccc)*d$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dd","abbdd","adcccd"],  rejectedWords: ["d","abd","abcdd"],     hint: "Se chegou até aqui, já sabe: separe o problema em bloquinhos lógicos.",                                             successMsg: "Revisão bem sucedida.",
    tutorials: {
      onStart: { type: 'theory', title: 'Revisão L41: blocos a, b-pares, d, c-trios, d!', dialog: [
        'L48 é revisão de L41. Mesma linguagem a^n b^2m d c^3p d.',
        '"dd" ✓. "abbdd" ✓. "adcccd" ✓. "d" ✗. "abcdd" ✗.',
        '7 estados: q0(ini/a), q1(b-ímpar), q2(b-par), q3(após-d), q4/q5(c-trio), q6(f).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Revisão: 7 Estados', dialog: [
        'q0 loop a; q0—b→q1—b→q2; q2—b→q1; ponte: q0—d→q3 e q2—d→q3.',
        'q3—d→q6(f); q3—c→q4—c→q5—c→q3 (trio).',
        'Mesma lógica de L41. Você já sabe montar isso!',
      ] },
    },
    boardWords: ['dd', 'd', 'abbdd', 'adcccd'],
    guidedLesson: buildLessonL48() };
