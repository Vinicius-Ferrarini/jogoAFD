import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL44() {
  const b = makeBuilder(LEVEL_GRAPHS[44], {
    q0: [10, 17], q1: [20, 17], q2: [30, 17], q3: [38, 17], q4: [48, 17],
    q5: [60, 10], q6: [72, 8], q7: [80, 12], q8: [56, 26], q9: [70, 26],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4'],
             ['q4', 'd', 'q9'], ['q9', 'c', 'q5'], ['q5', 'b', 'q6'], ['q6', 'a', 'q7']);
  steps.push(b.draw('Espinha "abcddcba": prefixo "abcd" (q0→q4), "d" inicia sufixo via q9, "cba" finaliza em q7.', -1));
  steps.push(b.test('Veja "abcddcba" percorrer até q7 (final). Aceita!', 'abcddcba', 0));
  steps.push(b.reject('Mas "abcd" tem só o prefixo, sem o sufixo: para em q4, não-final!', 'abcd', 0));
  b.addNodes('q8')
   .addEdges(['q4', 'a', 'q8'], ['q4', 'b', 'q8'], ['q4', 'c', 'q8'],
             ['q5', 'a', 'q8'], ['q5', 'c', 'q8'], ['q5', 'd', 'q8'],
             ['q6', 'b', 'q8'], ['q6', 'c', 'q8'], ['q6', 'd', 'q9'],
             ['q7', 'a', 'q8'], ['q7', 'b', 'q8'], ['q7', 'c', 'q8'], ['q7', 'd', 'q9'],
             ['q8', 'a', 'q8'], ['q8', 'b', 'q8'], ['q8', 'c', 'q8'],
             ['q8', 'd', 'q9'], ['q9', 'd', 'q9'],
             ['q9', 'a', 'q8'], ['q9', 'b', 'q8']);
  steps.push(b.draw('Adicionamos miolo livre (q8) e estado "d-sufixo" (q9). Sufixo reinicia se mismatch.', 1));
  steps.push(b.test('"abcdadcba" tem um "a" no miolo (laço q8) e fecha o sufixo. Aceita!', 'abcdadcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 44, label: "L44", formula: "L = {w ∈ {a,b,c,d}* / w tem abcd como prefixo e dcba como sufixo}", desc: "",                                                                shortestWord: "abcddcba", regex: /^abcd[abcd]*dcba$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcddcba","abcdadcba"],  rejectedWords: ["abcd","dcba","abcdcd"], hint: "Sanduíche de palavras! O começo e o fim são engessados.",                                                           successMsg: "Sanduíche de letras perfeito.",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo "abcd" E sufixo "dcba"!', dialog: [
        'L44: comecar com "abcd" obrigatorio, terminar com "dcba" obrigatorio.',
        '"abcddcba" ✓ (min). "abcdadcba" ✓ (a no meio).',
        '"abcd" ✗ (falta sufixo). "dcba" ✗ (falta prefixo). 10 estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '10 Estados: Prefixo + Sufixo', dialog: [
        'Prefixo: q0—a→q1—b→q2—c→q3—d→q4. q4 recebe "abc" → q8 (mismatch).',
        'Sufixo: q4—d→q9—c→q5—b→q6—a→q7(f). Mismatches → q8/q9.',
        'q8=miolo(abc), q9=rastreia "d" no sufixo. q9—c→q5 reinicia o sufixo.',
      ] },
    },
    boardWords: ['abcddcba', 'abcd', 'abcdadcba'],
    guidedLesson: buildLessonL44() };
