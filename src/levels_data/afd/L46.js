import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL46() {
  const b = makeBuilder(LEVEL_GRAPHS[46], {
    q0: [9, 59], q1: [21, 59], q2: [34, 59], q3: [46, 58], q4: [59, 59], q5: [70, 32], q6: [91, 32],
    q7: [100, 46], q8: [100, 54], q9: [100, 100], q10: [100, 91], q11: [60, 98], q12: [14, 100],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4'],
             ['q4', 'c', 'q5'], ['q5', 'c', 'q6'], ['q6', 'c', 'q7'], ['q7', 'c', 'q8'],
             ['q8', 'd', 'q9'], ['q9', 'c', 'q10'], ['q10', 'b', 'q11'], ['q11', 'a', 'q12']);
  steps.push(b.draw('Espinha "abcdccccdcba": prefixo abcd, o bloco cccc e o sufixo dcba (q12 final).', -1));
  steps.push(b.test('Veja "abcdccccdcba" percorrer tudo até q12 (final). Aceita!', 'abcdccccdcba', 0));
  steps.push(b.reject('Mas "abcddcba" tem prefixo e sufixo, sem o "cccc": trava em q4!', 'abcddcba', 0));
  b.addEdges(['q4', 'a', 'q4'], ['q4', 'b', 'q4'], ['q4', 'd', 'q4'],
             ['q5', 'a', 'q4'], ['q5', 'b', 'q4'], ['q5', 'd', 'q4'],
             ['q6', 'a', 'q4'], ['q6', 'b', 'q4'], ['q6', 'd', 'q4'],
             ['q7', 'a', 'q4'], ['q7', 'b', 'q4'], ['q7', 'd', 'q4'],
             ['q8', 'a', 'q8'], ['q8', 'b', 'q8'], ['q8', 'c', 'q8'],
             ['q9', 'd', 'q9'], ['q9', 'a', 'q8'], ['q9', 'b', 'q8'],
             ['q10', 'a', 'q8'], ['q10', 'c', 'q8'], ['q10', 'd', 'q9'],
             ['q11', 'b', 'q8'], ['q11', 'c', 'q8'], ['q11', 'd', 'q9'],
             ['q12', 'd', 'q9'], ['q12', 'a', 'q8'], ['q12', 'b', 'q8'], ['q12', 'c', 'q8']);
  steps.push(b.draw('Adicionamos os miolos livres: laços de q4 ({a,b,d}) e q8 ({a,b,c}).', 1));
  steps.push(b.test('"abcdaccccdcba" insere um "a" no miolo e ainda fecha. Aceita!', 'abcdaccccdcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 46, label: "L46", formula: "L = {w ∈ {a,b,c,d}* / w tem abcd como prefixo, cccc como subpalavra e dcba como sufixo}", desc: "",                                         shortestWord: "abcdccccdcba", regex: /^abcd[abcd]*cccc[abcd]*dcba$/,                          alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcdccccdcba","abcdaccccdcba"], rejectedWords: ["abcddcba","abcdcccdcba","dcba"], hint: "Faça o caminho em três estágios lógicos na sua cabeça.",                                          successMsg: "Você construiu um autômato enorme, meus parabéns!",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo abcd + 4c seguidos + sufixo dcba!', dialog: [
        'L46: comecar com "abcd", conter "cccc" em algum lugar, terminar com "dcba".',
        '"abcdccccdcba" ✓ (min). "abcdaccccdcba" ✓ (a no meio). 13 estados!',
        'Tres fases: prefixo fixo → detectar cccc → sufixo fixo.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '13 Estados: Tres Fases', dialog: [
        'Prefixo: q0—a→q1—b→q2—c→q3—d→q4. q4 loop a,b,d; q4—c→q5.',
        'cccc: q5—c→q6—c→q7—c→q8. Mismatch volta a q4. q8 loop a,b,c.',
        'Sufixo: q8—d→q9—c→q10—b→q11—a→q12(f). Mismatches → q8 ou q9.',
      ] },
    },
    boardWords: ['abcdccccdcba', 'abcddcba', 'abcdaccccdcba'],
    guidedLesson: buildLessonL46() };
