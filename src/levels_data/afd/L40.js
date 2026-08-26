import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [10, 18], q1: [25, 8], q2: [42, 8], q3: [58, 18], q4: [65, 8], q5: [76, 12], q6: [76, 18],
  };

function buildLessonL40() {
  const b = makeBuilder(LEVEL_GRAPHS[40], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q3', 'q6').addEdges(['q0', 'd', 'q3'], ['q3', 'd', 'q6']);
  steps.push(b.draw('Menor palavra "dd": ponte d (q0→q3) e d final (q3→q6, final).', -1));
  steps.push(b.test('Veja "dd" chegar a q6 (final). Aceita!', 'dd', 0));
  steps.push(b.reject('Mas "d" sozinho para em q3, que NÃO é final (falta fechar com o 2º "d")!', 'd', 0));
  b.addNodes('q1', 'q2')
   .addEdges(['q0', 'a', 'q0'], ['q0', 'b', 'q1'], ['q1', 'b', 'q2'], ['q2', 'b', 'q1'], ['q2', 'd', 'q3']);
  steps.push(b.draw('Laço de "a" e o par "bb" (q1↔q2). A ponte "d" sai de q0 (0 b) ou q2 (b par).', 1));
  steps.push(b.test('"abbdd" usa um "a" e um par "bb": q0→q1→q2→q3→q6 (final). Aceita!', 'abbdd', 1));
  b.addNodes('q4', 'q5').addEdges(['q3', 'c', 'q4'], ['q4', 'c', 'q5'], ['q5', 'c', 'q3']);
  steps.push(b.draw('E o ciclo de TRIOS "ccc" (q3→q4→q5→q3) entre os dois "d".', 2));
  steps.push(b.test('"adcccd" usa um trio "ccc" entre os "d": q0→q3→q4→q5→q3→q6 (final). Aceita!', 'adcccd', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 40, layout: LAYOUT, label: "L40", formula: "L = {aⁿ b²ᵐ d c³ᵖ d / n >= 0, m >= 0, p >= 0}",                desc: "",                                                                 shortestWord: "dd",       regex: /^a*(bb)*d(ccc)*d$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dd","abbdd","adcccd"],  rejectedWords: ["d","abd","abcdd"],     hint: "Essa é grande! Blocos de 'b' em duplas, o primeiro 'd' serve de ponte, e 'c' em trios.",                            successMsg: "Sintaxe complexa analisada com sucesso.",
    tutorials: {
      onStart: { type: 'theory', title: 'Blocos: a-block, b-pares, d, c-trios, d!', dialog: [
        'L40: aⁿ b²ᵐ d c³ᵖ d. a-s, depois b-pares, depois d, depois c-trios, depois d.',
        '"dd" ✓ (0a 0b 0c). "abbdd" ✓ (1a 1par-b). "adcccd" ✓ (1a 1trio-c).',
        '7 estados: q0(ini/a), q1(b-ímpar), q2(b-par), q3(após-d), q4/q5(c-trio), q6(f).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados em Sequência', dialog: [
        'q0 loop a. q0—b→q1—b→q2 (par de b); q2—b→q1 (mais pares).',
        'Ponte "d" sai de q0 ou q2: q0—d→q3, q2—d→q3. q3—d→q6(f).',
        'q3—c→q4—c→q5—c→q3 (trio de c). "adcccd": q0—d→q3—c→q4—c→q5—c→q3—d→q6(f) ✓.',
      ] },
    },
    boardWords: ['dd', 'd', 'abbdd', 'adcccd'],
    guidedLesson: buildLessonL40() };
