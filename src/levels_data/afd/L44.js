import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL44() {
  const b = makeBuilder(LEVEL_GRAPHS[44], {
    q0: [10, 17], q1: [20, 17], q2: [30, 17], q3: [38, 17], q4: [48, 17],
    q5: [60, 10], q6: [72, 8], q7: [80, 12], q8: [54, 26], q9: [73, 26],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4'],
             ['q4', 'c', 'q5'], ['q5', 'b', 'q6'], ['q6', 'a', 'q7']);
  steps.push(b.draw('Espinha "abcdcba": prefixo "abcd" (q0→q4), sufixo "cba" (q4→q7). q7 é final!', -1));
  steps.push(b.test('Veja "abcdcba" percorrer até q7 (final). Aceita!', 'abcdcba', 0));
  steps.push(b.reject('Mas "abcd" tem só o prefixo, sem o sufixo: para em q4, não-final!', 'abcd', 0));
  b.addNodes('q8', 'q9')
   .addEdges(['q4', 'd', 'q4'],
             ['q6', 'd', 'q9'], ['q7', 'd', 'q9'],
             ['q9', 'c', 'q5'], ['q9', 'd', 'q9'], ['q9', 'a', 'q8'], ['q9', 'b', 'q8']);
  steps.push(b.draw('q4—d→q4 permite "d" extra no miolo. q9 rastreia "d" no sufixo e volta via q9—c→q5.', -1));
  steps.push(b.test('"abcddcba" tem um "d" extra no miolo: q4—d→q4—c→q5→…→q7. Aceita!', 'abcddcba', 0));
  b.addEdges(['q4', 'a', 'q8'], ['q4', 'b', 'q8'],
             ['q5', 'a', 'q8'], ['q5', 'c', 'q8'], ['q5', 'd', 'q8'],
             ['q6', 'b', 'q8'], ['q6', 'c', 'q8'],
             ['q7', 'a', 'q8'], ['q7', 'b', 'q8'], ['q7', 'c', 'q8'],
             ['q8', 'a', 'q8'], ['q8', 'b', 'q8'], ['q8', 'c', 'q8'], ['q8', 'd', 'q9']);
  steps.push(b.draw('q8 captura todas as palavras inválidas (mismatches no sufixo). Grafo completo!', 1));
  steps.push(b.test('"abcdadcba" vai q4—a→q8 (mismatch): rejeita. Prefixo existe mas sufixo quebra.', 'abcdadcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 44, label: "L44", formula: "L = {w ∈ {a,b,c,d}* / w tem abcd como prefixo e cba como sufixo}", desc: "",
    shortestWord: "abcdcba", regex: /^abcd[abcd]*cba$/,
    alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcdcba","abcddcba"],  rejectedWords: ["abcd","cba","abcdadcba"], hint: "Sanduíche de letras! O começo 'abcd' e o fim 'cba' são fixos.",
    successMsg: "Sanduíche de letras perfeito.",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo "abcd" E sufixo "cba"!', dialog: [
        'L44: começar com "abcd" obrigatório, terminar com "cba" obrigatório.',
        '"abcdcba" ✓ (min, 7 letras). "abcddcba" ✓ (d extra no miolo).',
        '"abcd" ✗ (falta sufixo). "cba" ✗ (falta prefixo). 10 estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '10 Estados: Prefixo + Sufixo', dialog: [
        'Prefixo: q0—a→q1—b→q2—c→q3—d→q4. q4—d→q4 (d extra no miolo).',
        'Sufixo: q4—c→q5—b→q6—a→q7(f). Mismatches → q8 (lixo).',
        'q9 rastreia "d" no sufixo (q6/q7—d→q9—c→q5 reinicia o sufixo).',
      ] },
    },
    boardWords: ['abcdcba', 'abcd', 'abcddcba'],
    guidedLesson: buildLessonL44() };
