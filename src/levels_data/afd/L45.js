import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL45() {
  const b = makeBuilder(LEVEL_GRAPHS[45], {
    q0: [4, 15], q1: [15, 15], q2: [27, 15], q3: [35, 15], q4: [48, 15],
    q5: [63, 8], q6: [79, 2], q7: [88, 8], q8: [55, 28], q9: [75, 28],
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
  steps.push(b.draw('Adicionamos miolo livre (q8) e estado "d" (q9). Sufixo reinicia se mismatch.', 1));
  steps.push(b.test('"abcdadcba" tem um "a" no miolo (laço q8) e fecha o sufixo. Aceita!', 'abcdadcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 45, label: "L45", formula: "L = {w ∈ {a,b,c,d}* / w tem abcd como prefixo e dcba como sufixo}", desc: "",                                                                 shortestWord: "abcddcba", regex: /^abcd[abcd]*dcba$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcddcba","abcdadcba"],  rejectedWords: ["abcd","dcba","abcdcd"], hint: "Sanduíche de palavras! O começo e o fim são engessados.",                                                           successMsg: "Sanduíche de letras perfeito.",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo "abcd" E sufixo "dcba"!', dialog: [
        'L45: comecar com "abcd" obrigatorio, terminar com "dcba" obrigatorio.',
        '"abcddcba" ✓ (min). "abcdadcba" ✓ (a no meio).',
        '"abcd" ✗ (falta sufixo). "dcba" ✗ (falta prefixo). 10 estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '10 Estados: Prefixo + Sufixo', dialog: [
        'Prefixo: q0—a→q1—b→q2—c→q3—d→q4. q4 loop d e mismatches para q8.',
        'Sufixo: q4—c→q5—b→q6—a→q7(f). Mismatches → q8/q9.',
        'q8=miolo(abc), q9=miolo(d). q9—c→q5 reinicia o sufixo.',
      ] },
    },
    boardWords: ['abcddcba', 'abcd', 'abcdadcba'],
    guidedLesson: buildLessonL45() };
