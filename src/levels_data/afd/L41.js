import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL41() {
  const b = makeBuilder(LEVEL_GRAPHS[41], {
    q0: [10, 15], q1: [25, 15], q2: [42, 15], q3: [58, 8], q4: [75, 15],
    q5: [75, 26], q6: [55, 26], q7: [25, 26],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4', 'q5')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'd', 'q2'], ['q2', 'c', 'q3'], ['q3', 'b', 'q4'], ['q4', 'a', 'q5']);
  steps.push(b.draw('Espinha "adcba": q0→q1→q2→q3→q4→q5 (final, um ciclo dcb com a inicial).', -1));
  steps.push(b.test('Veja "adcba" chegar a q5 (final). Aceita!', 'adcba', 0));
  steps.push(b.reject('Mas "adcb" para em q4 sem o "a": NÃO é final!', 'adcb', 0));
  b.addNodes('q6', 'q7')
   .addEdges(['q4', 'd', 'q2'], ['q5', 'a', 'q5'], ['q5', 'b', 'q6'], ['q6', 'b', 'q7'], ['q7', 'b', 'q6']);
  steps.push(b.draw('Retorno do ciclo (q4→q2), laço de "a" em q5 e pares "bb" (q5→q6→q7 final).', 1));
  steps.push(b.test('"adcbabb" fecha o ciclo, sai pelo "a" e usa um par "bb". Aceita!', 'adcbabb', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 41, label: "L41", formula: "L = {a(dcb)^n a^m (bb)^p / n > 0, m > 0, p >= 0}",               desc: "",                                                                 shortestWord: "adcba",    regex: /^a(dcb)+a+(bb)*$/,                                          alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["adcba","adcbaa","adcbabb"], rejectedWords: ["a","adcb","dcba"],  hint: "Siga a receita passo a passo: a, ciclo dcb, a, b-pares.",                                                           successMsg: "Ciclo dominado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Ciclo dcb: a + dcb+ + a+ + b-pares!', dialog: [
        'L41: "a", depois 1+ ciclos de "dcb", depois 1+ "a", depois b-pares opcionais.',
        '"adcba" ✓ (1 ciclo, 1a). "adcbaa" ✓ (2a). "adcbabb" ✓ (1a, 1par-b).',
        '"a" ✗ (sem dcb). "adcb" ✗ (sem a final). 8 estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '8 Estados: Cadeia + Ciclo + b-pares', dialog: [
        'q0—a→q1—d→q2—c→q3—b→q4 (ciclo dcb). q4—d→q2 (repetir ciclo).',
        'q4—a→q5(f). q5 loop a. q5—b→q6—b→q7(f)—b→q6.',
        '"adcbabb": q0→q1→q2→q3→q4→q5—b→q6—b→q7(f) ✓.',
      ] },
    },
    boardWords: ['adcba', 'adcb', 'adcbabb'],
    guidedLesson: buildLessonL41() };
