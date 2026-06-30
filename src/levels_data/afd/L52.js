import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL52() {
  const b = makeBuilder(LEVEL_GRAPHS[52], {
    q0: [10, 10], q1: [26, 10], q2: [42, 10], q3: [58, 10], q4: [58, 26], q5: [74, 10], q6: [74, 26],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2').addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q2'], ['q2', 'a', 'q1']);
  steps.push(b.draw('Vai-e-volta de "a": q1 (ímpar-a), q2 (par-a). Começa com n > 0 "a"s.', -1));
  b.addNodes('q3', 'q4', 'q5', 'q6')
   .addEdges(['q2', 'b', 'q3'], ['q1', 'b', 'q3'], ['q3', 'b', 'q4'], ['q4', 'b', 'q3'],
             ['q3', 'c', 'q5'], ['q5', 'c', 'q6'], ['q6', 'c', 'q5']);
  steps.push(b.draw('Bloco de b-pares (q3↔q4) e par de c (q5↔q6, final). q3 também é final!', 1));
  steps.push(b.test('Veja "ab" chegar a q3 (final). Aceita!', 'ab', 1));
  steps.push(b.test('"aabcc" percorre q0→q1→q2→q3→q5→q6 (final). Aceita!', 'aabcc', 1));
  steps.push(b.reject('"abc" tem apenas 1 "c" após o "b": q0→q1→q3→q5, mas q5 não é final!', 'abc', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 52, label: "L52", formula: "L = {a^n b^m c^p / n > 0, m é impar e p é par}",                   desc: "",                                                                 shortestWord: "ab",       regex: /^a+(bb)*b(cc)*(cc)*$/,                                      alphabet: ['a', 'b', 'c'],        acceptedWords: ["ab","aab","aabcc"],       rejectedWords: ["a","ba","abc"],         hint: "a-s, depois b-pares opcionais e um b extra, depois c-pares.",                                                       successMsg: "Paridade correlacionada dominada.",
    tutorials: {
      onStart: { type: 'theory', title: 'a+ (bb)* b (cc)*!', dialog: [
        'L52: a^n(bb)^m b c^(2p). a-s positivos, b-pares opcionais, um b extra, c-pares opcionais.',
        '"ab" ✓ (1a, 1b). "aab" ✓ (2a, 1b). "aaabcc" ✓ (3a, 1b, 2c).',
        '"a" ✗ (sem b). "ba" ✗ (começa com b). "abc" ✗ (1c é ímpar).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: a+ b+ c*', dialog: [
        'q0—a→q1 (a-ímpar). q1↔q2(a) (vai-e-volta). q2—b→q3(f).',
        'q3↔q4(b) (pares de b adicionais). q3—c→q5—c→q6(f)—c→q5 (c-pares).',
        '"aaabcc": q0→q1→q2→q1→q3—c→q5—c→q6(f) ✓.',
      ] },
    },
    boardWords: ['ab', 'a', 'aab', 'aabcc'],
    guidedLesson: buildLessonL52() };
