import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL48() {
  const b = makeBuilder(LEVEL_GRAPHS[48], {
    q0: [8, 50], q1: [22, 18], qe: [44, 8], q2: [62, 50], q3: [48, 84], q4: [70, 84], q5: [90, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q2', 'q5').addEdges(['q0', 'd', 'q2'], ['q2', 'd', 'q5']);
  steps.push(b.draw('Menor palavra "dd": o "d" ponte (q0→q2) e o "d" final (q2→q5, final).', -1));
  steps.push(b.test('Veja "dd" chegar a q5 (final). Aceita!', 'dd', 0));
  steps.push(b.reject('Mas "d" sozinho para em q2, que NÃO é final (falta o 2º "d")!', 'd', 0));
  b.addNodes('q1', 'qe')
   .addEdges(['q0', 'a', 'q0'], ['q0', 'b', 'q1'], ['q1', 'b', 'qe'], ['qe', 'b', 'q1'], ['qe', 'd', 'q2']);
  steps.push(b.draw('Laço de "a" e o par "bb" (q1↔qe). A ponte "d" só sai do estado "b par" (qe, ou q0 com 0 "b") — depois de um "b" NÃO se volta para "a".', 1));
  steps.push(b.test('"abbdd" usa um "a" e um par "bb": q0→q1→qe→q2→q5 (final). Aceita!', 'abbdd', 1));
  b.addNodes('q3', 'q4').addEdges(['q2', 'c', 'q3'], ['q3', 'c', 'q4'], ['q4', 'c', 'q2']);
  steps.push(b.draw('E o ciclo de TRIOS "ccc" (q2→q3→q4→q2) entre os dois "d".', 2));
  steps.push(b.test('"adcccd" usa um trio "ccc": q0→q2→q3→q4→q2→q5 (final). Aceita!', 'adcccd', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 48, label: "L47", formula: "L = { a^n b^2m d c^3p d | n, m, p ≥ 0 }",                          desc: "(Revisão L40)",                                                    shortestWord: "dd",       regex: /^a*(bb)*d(ccc)*d$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dd","abbdd","adcccd"],  rejectedWords: ["d","abd","abcdd"],     hint: "Se chegou até aqui, já sabe: separe o problema em bloquinhos lógicos.",                                             successMsg: "Revisão bem sucedida.",
    tutorials: {
      onStart: { type: 'theory', title: 'Revisão L40: blocos a, b-pares, d, c-trios, d!', dialog: [
        'L47 e revisão de L40. Mesma linguagem a^n b^2m d c^3p d.',
        '"dd" ✓. "abbdd" ✓. "adcccd" ✓. "d" ✗. "abcdd" ✗.',
        'Relembre os 7 estados: q0(ini/a), q1(b-ímpar), qe(b-par), q2(após-d), q3/q4(c-trio), q5(f).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Revisao: 7 Estados', dialog: [
        'q0 loop a; q0—b→q1—b→qe; qe—b→q1; ponte só do par: q0—d→q2 e qe—d→q2.',
        'q2—d→q5(f); q2—c→q3—c→q4—c→q2 (trio).',
        'Mesma logica de L40. Voce ja sabe montar isso!',
      ] },
    },
    boardWords: ['dd', 'd', 'abbdd', 'adcccd'],
    guidedLesson: buildLessonL48() };
