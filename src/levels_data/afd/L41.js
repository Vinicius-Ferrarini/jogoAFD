import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL41() {
  const b = makeBuilder(LEVEL_GRAPHS[41], {
    q0: [8, 50], q1: [22, 18], qe: [44, 8], q2: [62, 50], q3: [48, 84], q4: [70, 84], q5: [90, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q2', 'q5').addEdges(['q0', 'd', 'q2'], ['q2', 'd', 'q5']);
  steps.push(b.draw('Menor palavra "dd": o "d" ponte (q0→q2) e o "d" final (q2→q5, final).', -1));
  steps.push(b.test('Veja "dd" chegar a q5 (final). Aceita!', 'dd', 0));
  steps.push(b.reject('Mas "d" sozinho para em q2, que NÃO é final (falta fechar com o 2º "d")!', 'd', 0));
  b.addNodes('q1', 'qe')
   .addEdges(['q0', 'a', 'q0'], ['q0', 'b', 'q1'], ['q1', 'b', 'qe'], ['qe', 'b', 'q1'], ['qe', 'd', 'q2']);
  steps.push(b.draw('Laço de "a" e o par "bb" (q1↔qe). A ponte "d" só sai do estado "b par" (qe, ou q0 com 0 "b") — e depois de um "b" NÃO se volta para "a".', 1));
  steps.push(b.test('"abbdd" usa um "a" e um par "bb": q0→q1→qe→q2→q5 (final). Aceita!', 'abbdd', 1));
  b.addNodes('q3', 'q4').addEdges(['q2', 'c', 'q3'], ['q3', 'c', 'q4'], ['q4', 'c', 'q2']);
  steps.push(b.draw('E o ciclo de TRIOS "ccc" (q2→q3→q4→q2) entre os dois "d".', 2));
  steps.push(b.test('"adcccd" usa um trio "ccc" entre os "d": q0→q2→q3→q4→q2→q5 (final). Aceita!', 'adcccd', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 41, label: "L40", formula: "L = { a^n b^2m d c^3p d | n, m, p ≥ 0 }",                          desc: "",                                                                 shortestWord: "dd",       regex: /^a*(bb)*d(ccc)*d$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dd","abbdd","adcccd"],  rejectedWords: ["d","abd","abcdd"],     hint: "Essa é grande! Blocos de 'b' em duplas, o primeiro 'd' serve de ponte, e 'c' em trios.",                            successMsg: "Sintaxe complexa analisada com sucesso.",
    tutorials: {
      onStart: { type: 'theory', title: 'Blocos: a-block, b-pares, d, c-trios, d!', dialog: [
        'L40: a^n b^2m d c^3p d. a-s, depois b-pares, depois d, depois c-trios, depois d.',
        '"dd" ✓ (0a 0b 0c). "abbdd" ✓ (1a 1par-b). "adcccd" ✓ (1a 1trio-c).',
        '7 estados: q0(ini/a), q1(b-ímpar), qe(b-par), q2(após-d), q3/q4(c-trio), q5(f).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados em Sequencia', dialog: [
        'q0 loop a. q0—b→q1—b→qe (par de b); qe—b→q1 (mais pares).',
        'Ponte "d" só sai do "b par": q0—d→q2 (0 b) e qe—d→q2. q2—d→q5(f).',
        'q2—c→q3—c→q4—c→q2 (trio de c). "adcccd": q0—d→q2—c→q3—c→q4—c→q2—d→q5(f) ✓.',
      ] },
    },
    boardWords: ['dd', 'd', 'abbdd', 'adcccd'],
    guidedLesson: buildLessonL41() };
