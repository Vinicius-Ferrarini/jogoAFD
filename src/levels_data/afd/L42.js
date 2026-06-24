import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL42() {
  const b = makeBuilder(LEVEL_GRAPHS[42], {
    q0: [8, 45], q1: [26, 28], q2: [18, 80], q3: [46, 80], q4: [48, 45], q5: [72, 45], q6: [90, 75],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4', 'q5')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'd', 'q2'], ['q2', 'c', 'q3'], ['q3', 'b', 'q4'], ['q4', 'a', 'q5']);
  steps.push(b.draw('Espinha "adcba": o "a" inicial (q0→q1), o ciclo "dcb" obrigatório (q1→q2→q3→q4) e o "a" final (q4→q5).', -1));
  steps.push(b.test('Veja "adcba" chegar a q5 (final). Aceita!', 'adcba', 0));
  steps.push(b.reject('Mas "adcb" para em q4 sem o "a" de saída: NÃO é final (o ciclo "dcb" precisa ser fechado por um "a")!', 'adcb', 0));
  b.addNodes('q6')
   .addEdges(['q4', 'd', 'q2'], ['q5', 'a', 'q5'], ['q5', 'b', 'q6'], ['q6', 'b', 'q5']);
  steps.push(b.draw('Adicionamos o retorno do ciclo (q4→q2, repetir "dcb"), o laço de "a" e o par "bb" (q5↔q6) no final.', 1));
  steps.push(b.test('"adcbabb" fecha o ciclo, sai pelo "a" e usa um par "bb": ...→q4→q5→q6→q5 (final). Aceita!', 'adcbabb', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 42, label: "L41", formula: "L = { a(dcb)^n a^m (bb)^p | n > 0, m > 0, p ≥ 0 }",               desc: "",                                                                 shortestWord: "adcba",    regex: /^a(dcb)+a+(bb)*$/,                                          alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["adcba","adcbaa","adcbabb"], rejectedWords: ["a","adcb","dcba"],  hint: "Siga a receita passo a passo, o ciclo 'dcb' é o coração do automato.",                                              successMsg: "Ciclo gigante dominado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Ciclo dcb: a + dcb+ + a+ + b-pares!', dialog: [
        'L41: "a", depois 1+ ciclos de "dcb", depois 1+ "a", depois b-pares opcionais.',
        '"adcba" ✓ (1 ciclo, 1a). "adcbaa" ✓ (1 ciclo, 2a). "adcbabb" ✓ (1a, 1par-b).',
        '"a" ✗ (sem dcb). "adcb" ✗ (sem a final). 7 estados em cadeia.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: Cadeia + Ciclo + b-pares', dialog: [
        'q0—a→q1—d→q2—c→q3—b→q4 (ciclo dcb). q4—d→q2 (repetir ciclo).',
        'q4—a→q5(f). q5 loop a. q5—b→q6—b→q5 (pares de b).',
        '"adcbabb": q0→q1→q2→q3→q4→q5—b→q6—b→q5(f) ✓.',
      ] },
    },
    boardWords: ['adcba', 'adcb', 'adcbabb'],
    guidedLesson: buildLessonL42() };
