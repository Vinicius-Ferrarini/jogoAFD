import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL53() {
  const b = makeBuilder(LEVEL_GRAPHS[53], {
    q0: [12, 35], q1: [31, 35], q2: [47, 35], q3: [68, 36], q4: [68, 66], q5: [94, 34], q6: [94, 65],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2').addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q2'], ['q2', 'a', 'q1']);
  steps.push(b.draw('Vai-e-volta de "a": q1 (ímpar-a), q2 (par-a). Começa com n > 0 "a"s.', -1));
  b.addNodes('q3', 'q4', 'q5', 'q6')
   .addEdges(['q2', 'b', 'q3'], ['q3', 'b', 'q4'], ['q4', 'b', 'q3'],
             ['q3', 'c', 'q5'], ['q5', 'c', 'q6'], ['q6', 'c', 'q5']);
  steps.push(b.draw('Bloco de b-pares (q3↔q4) e par de c (q5↔q6, final). q3 também é final!', 1));
  steps.push(b.test('Veja "ab" chegar a q3 (final). Aceita!', 'ab', 1));
  steps.push(b.test('"aaabcc" percorre q0→q1→q2→q1→q3→q5→q6 (final). Aceita!', 'aaabcc', 1));
  steps.push(b.reject('"aab" tem 2 "a"s (par) → q2. q2→q3(b) → q3 final. Espera: "aab" aceito!', 'a', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 53, label: "L53", formula: "L = {w ∈ {a,b,c}* / cada b é seguido de pelo menos um c}",          desc: "",                                                                 shortestWord: "ab",       regex: /^a+(bb)*b(cc)*(cc)*$/,                                      alphabet: ['a', 'b', 'c'],        acceptedWords: ["ab","aab","aaabcc"],      rejectedWords: ["a","ba","abc"],         hint: "a-s, depois b-pares opcionais e um b extra, depois c-pares.",                                                       successMsg: "Condicional restrita dominada. Zerou a lista!",
    tutorials: {
      onStart: { type: 'theory', title: 'a+ (bb)* b (cc)*!', dialog: [
        'L53: a^n(bb)^m b c^(2p). a-s positivos, b-pares opcionais, um b extra, c-pares opcionais.',
        '"ab" ✓ (1a, 1b). "aab" ✓ (2a, 1b). "aaabcc" ✓ (3a, 1b, 2c).',
        '"a" ✗ (sem b). "ba" ✗ (começa com b). "abc" ✗ (1c é ímpar).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: a+ b+ c*', dialog: [
        'q0—a→q1 (a-ímpar). q1↔q2(a) (vai-e-volta). q2—b→q3(f).',
        'q3↔q4(b) (pares de b adicionais). q3—c→q5—c→q6(f)—c→q5 (c-pares).',
        '"aaabcc": q0→q1→q2→q1→q3—c→q5—c→q6(f) ✓.',
      ] },
    },
    boardWords: ['ab', 'a', 'aab', 'aaabcc'],
    guidedLesson: buildLessonL53() };
