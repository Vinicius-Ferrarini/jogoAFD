import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [10, 17], q1: [20, 17], q2: [30, 17], q3: [38, 17], q4: [48, 17],
    q5: [60, 12], q6: [72, 8],  q7: [80, 12], q8: [54, 28], q9: [70, 28],
  };

function buildLessonL44() {
  const b = makeBuilder(LEVEL_GRAPHS[44], LAYOUT);
  const steps = [];

  // Passo 1: espinha do caminho feliz — abcd (prefixo) + cba (sufixo)
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7')
   .addEdges(
     ['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4'],
     ['q4', 'c', 'q5'], ['q5', 'b', 'q6'], ['q6', 'a', 'q7']
   );
  steps.push(b.draw('Espinha "abcd…cba": prefixo q0→q4 (a,b,c,d) e sufixo q4→q7 (c,b,a). q7 é final!', -1));
  steps.push(b.test('Veja "abcdcba" percorrer: q0→q1→q2→q3→q4→q5→q6→q7 (final). Aceita!', 'abcdcba', 0));
  steps.push(b.reject('"abcdacba" tem prefixo correto mas "a" no miolo sem "d" antes de "cba": para em q8, não-final.', 'abcdacba', 0));

  // Passo 2: miolo q8, q9 e recuos
  b.addNodes('q8', 'q9')
   .addEdges(
    ['q4', 'd', 'q4'], ['q4', 'a', 'q8'], ['q4', 'b', 'q8'],
    ['q5', 'a', 'q8'], ['q5', 'c', 'q8'], ['q5', 'd', 'q8'],
    ['q6', 'b', 'q8'], ['q6', 'c', 'q8'], ['q6', 'd', 'q9'],
    ['q7', 'a', 'q8'], ['q7', 'b', 'q8'], ['q7', 'c', 'q8'], ['q7', 'd', 'q9'],
    ['q8', 'a', 'q8'], ['q8', 'b', 'q8'], ['q8', 'c', 'q8'], ['q8', 'd', 'q9'],
    ['q9', 'a', 'q8'], ['q9', 'b', 'q8'], ['q9', 'c', 'q5'], ['q9', 'd', 'q9']
  );
  steps.push(b.draw('q8 é o miolo (a/b/c ficam; d→q9). q9 controla d no miolo — c em q9 reinicia o sufixo "cba".', -1));
  steps.push(b.test('"abcdadcba": prefixo abcd, a→q8, d→q9, c→q5, b→q6, a→q7. Aceita!', 'abcdadcba', 0));
  steps.push(b.draw('Grafo completo! Recuos de q5/q6/q7 garantem rastreio correto do sufixo.', 1));
  steps.push(b.test('"abcdcba" — confirmação final: q0→…→q4→q5→q6→q7. Aceita!', 'abcdcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));

  return steps;
}

export default {
  id: 44, layout: LAYOUT, label: "L44",
  formula: "L = {w ∈ {a,b,c,d}* / w tem abcd como prefixo e cba como sufixo}",
  desc: "",
  shortestWord: "abcdcba",
  regex: /^abcd(d*|(([abcd])*d))cba$/,
  alphabet: ['a', 'b', 'c', 'd'],
  acceptedWords: ["abcdcba", "abcddcba", "abcdddcba", "abcdadcba"],
  rejectedWords: ["abcdcb", "abcd", "cba", "abcdacba", "abcdcbaa"],
  hint: "Sanduíche de letras! O começo 'abcd' e o fim 'cba' são fixos. O miolo pode ter qualquer coisa.",
  successMsg: "Sanduíche de letras perfeito.",
  tutorials: {
    onStart: { type: 'theory', title: 'Prefixo "abcd" E sufixo "cba"!', dialog: [
      'L44: começar com "abcd" obrigatório, terminar com "cba" obrigatório.',
      '"abcdcba" ✓ (mín, 7 letras). "abcdacba" ✓ ("a" no miolo).',
      '"abcddcba" ✗ (sufixo é "dcba", não "cba"). "abcd" ✗ (falta sufixo). 10 estados.',
    ] },
    onDrawGraph: { type: 'mechanic', title: '10 Estados: Prefixo + Sufixo', dialog: [
      'Prefixo: q0—a→q1—b→q2—c→q3—d→q4. Miolo: q4 (loop d; a/b→q8).',
      'Sufixo: q4—c→q5—b→q6—a→q7(f). Recuos para q8/q9 garantem rastreio correto.',
      'q8 é o miolo sem sufixo; q9 controla d no miolo.',
    ] },
  },
  boardWords: ['abcdcba', 'abcddcba', 'abcdadcba'],
  guidedLesson: buildLessonL44(),
};
