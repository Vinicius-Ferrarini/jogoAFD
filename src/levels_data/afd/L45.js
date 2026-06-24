import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL45() {
  const b = makeBuilder(LEVEL_GRAPHS[45], {
    q0: [8, 30], q1: [24, 30], q2: [40, 30], q3: [56, 30], q4: [72, 30],
    q5: [88, 30], q6: [88, 68], q7: [68, 68], q8: [48, 68],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4'],
             ['q4', 'd', 'q5'], ['q5', 'c', 'q6'], ['q6', 'b', 'q7'], ['q7', 'a', 'q8']);
  steps.push(b.draw('Espinha "abcddcba": prefixo "abcd" (q0→q4) e sufixo "dcba" (q4→q8, final).', -1));
  steps.push(b.test('Veja "abcddcba" percorrer prefixo e sufixo até q8 (final). Aceita!', 'abcddcba', 0));
  steps.push(b.reject('Mas "abcd" tem só o prefixo, sem o sufixo "dcba": para em q4, não-final!', 'abcd', 0));
  b.addEdges(['q4', 'a', 'q4'], ['q5', 'd', 'q5']);
  steps.push(b.draw('Adicionamos o miolo livre: laço de q4 ({a,b,c}) e laço de "d" em q5.', 1));
  steps.push(b.test('"abcdadcba" tem um "a" no miolo (laço q4) entre prefixo e sufixo. Aceita!', 'abcdadcba', 1));
  steps.push(b.test('"abcddddcba" usa o laço de "d" em q5 antes do "cba" final. Aceita!', 'abcddddcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 45, label: "L44", formula: "L = { w ∈ {a,b,c,d}* | prefixo 'abcd' e sufixo 'dcba' }",          desc: "",                                                                 shortestWord: "abcddcba", regex: /^abcd[abcd]*dcba$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcddcba","abcdadcba"],  rejectedWords: ["abcd","dcba","abcdcd"], hint: "Sanduíche de palavras! O começo e o fim são engessados.",                                                           successMsg: "Sanduíche de letras perfeito.",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo "abcd" E sufixo "dcba"!', dialog: [
        'L44: comecar com "abcd" obrigatorio, terminar com "dcba" obrigatorio.',
        '"abcddcba" ✓ (min, sobreposicao). "abcdadcba" ✓ (1a no meio).',
        '"abcd" ✗ (falta sufixo). "dcba" ✗ (falta prefixo). 9 estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '9 Estados: Prefixo + Sufixo', dialog: [
        'Prefixo: q0—a→q1—b→q2—c→q3—d→q4. Sufixo: q4—d→q5—c→q6—b→q7—a→q8(f).',
        'q4 loop a,b,c. q5 loop d; q5—a,b→q4. q6—a,c→q4; q6—d→q5.',
        'q7—b,c→q4; q7—d→q5. q8—a,b,c→q4; q8—d→q5.',
      ] },
    },
    boardWords: ['abcddcba', 'abcd', 'abcdadcba', 'abcddddcba'],
    guidedLesson: buildLessonL45() };
