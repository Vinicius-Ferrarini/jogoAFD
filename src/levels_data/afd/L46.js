import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL46() {
  const b = makeBuilder(LEVEL_GRAPHS[46], {
    q0: [8, 30], q1: [22, 30], q2: [36, 30], q3: [50, 30], q4: [64, 30], q5: [78, 30],
    q6: [92, 30], q7: [92, 70], q8: [76, 70], q9: [60, 70], q10: [44, 70], q11: [28, 70],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4'],
             ['q4', 'c', 'q5'], ['q5', 'c', 'q6'], ['q6', 'c', 'q7'], ['q7', 'c', 'q8'],
             ['q8', 'd', 'q9'], ['q9', 'c', 'q10'], ['q10', 'b', 'q11'], ['q11', 'a', 'q11']);
  steps.push(b.draw('Espinha "abcdccccdcba": prefixo abcd, o bloco cccc e o sufixo dcba (q11 final).', -1));
  steps.push(b.test('Veja "abcdccccdcba" percorrer tudo até q11 (final). Aceita!', 'abcdccccdcba', 0));
  steps.push(b.reject('Mas "abcddcba" tem prefixo e sufixo, sem o "cccc": trava em q4!', 'abcddcba', 0));
  b.addEdges(['q4', 'a', 'q4'], ['q8', 'a', 'q8']);
  steps.push(b.draw('Adicionamos os miolos livres: laços de q4 ({a,b,d}) e q8 ({a,b,c}).', 1));
  steps.push(b.test('"abcdaccccdcba" insere um "a" no miolo (laço q4) e ainda fecha. Aceita!', 'abcdaccccdcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 46, label: "L45", formula: "L = { w ∈ {a,b,c,d}* | pref 'abcd', sub 'cccc', suf 'dcba' }",    desc: "",                                                                 shortestWord: "abcdccccdcba", regex: /^abcd[abcd]*cccc[abcd]*dcba$/,                          alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcdccccdcba","abcdaccccdcba"], rejectedWords: ["abcddcba","abcdcccdcba","dcba"], hint: "Faça o caminho em três estágios lógicos na sua cabeça.",                                          successMsg: "Você construiu um autômato enorme, meus parabéns!",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo abcd + 4c seguidos + sufixo dcba!', dialog: [
        'L45: comecar com "abcd", conter "cccc" em algum lugar, terminar com "dcba".',
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
