import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL50() {
  const b = makeBuilder(LEVEL_GRAPHS[50], {
    q0: [12, 12], q1: [28, 12], q2: [28, 24], q3: [50, 7], q4: [52, 26], q5: [75, 12], q6: [75, 24],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q5', 'q6').addEdges(['q0', 'a', 'q1'], ['q1', 'c', 'q5'], ['q5', 'c', 'q6']);
  steps.push(b.draw('Espinha "acc": q0—a→q1, depois o "cc" obrigatório (q1→q5→q6, final).', -1));
  steps.push(b.test('Veja "acc" (n=1, p=2, soma 3 ímpar) chegar a q6 (final). Aceita!', 'acc', 0));
  steps.push(b.reject('Mas "ac" tem n+p = 1+1 = 2 (par): para em q5, que NÃO é final!', 'ac', 0));
  b.addNodes('q2', 'q3', 'q4')
   .addEdges(['q1', 'a', 'q2'], ['q2', 'a', 'q1'], ['q1', 'b', 'q3'], ['q2', 'b', 'q4'],
             ['q3', 'b', 'q3'], ['q4', 'b', 'q4'], ['q2', 'c', 'q6'], ['q3', 'c', 'q5'],
             ['q4', 'c', 'q6'], ['q6', 'c', 'q5']);
  steps.push(b.draw('Vai-e-volta de "a", bloco de "b" e caminhos de "c" (paridade de n+p).', 1));
  steps.push(b.test('"aac" tem n=2, p=1 (soma 3 ímpar): q0→q1→q2→q6 (final). Aceita!', 'aac', 1));
  steps.push(b.test('"abcc" tem n=1, m=1, p=2: q0→q1→q3→q5→q6 (final). Aceita!', 'abcc', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 50, label: "L50", formula: "L = {a^n b^m c^p / n > 0, p > 0, m >= 0 e (n+p) é impar}",          desc: "",                                                                 shortestWord: "ac",       regex: /^.*$/, validate: w => /^a+b*c+$/.test(w) && ([...w].filter(c=>c==='a').length + [...w].filter(c=>c==='c').length)%2===1, alphabet: ['a', 'b', 'c'],        acceptedWords: ["acc","aac","abcc"],       rejectedWords: ["ac","aacc","c"],        hint: "Se a quantidade de 'a's for ímpar, os 'c's precisam ser pares, e vice versa.",                                     successMsg: "Paridade correlacionada funcionando!",
    tutorials: {
      onStart: { type: 'theory', title: 'a+ b* c+ com (n+p) impar!', dialog: [
        'L50: a^n b^m c^p. n>0, p>0, m>=0. Mas a quantidade (n+p) tem que ser impar.',
        '"acc" ✓ (1a+2c=3 impar). "aac" ✓ (2a+1c=3). "abcc" ✓ (1a+2c=3).',
        '"ac" ✗ (1+1=2 par). "aacc" ✗ (2+2=4 par). 7 estados: paridade de a e c.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: Paridade a + c', dialog: [
        'q0—a→q1 (ímpar-a). q1—a→q2 (par-a). q2—a→q1 (ciclo). q1—c→q5, q2—c→q6(f).',
        'b-phase: q1—b→q3(ímpar-a+b), q2—b→q4. q3,q4 loop b. q3—c→q5, q4—c→q6(f).',
        'c-phase: q5—c→q6(f). q6—c→q5. "abcc": q1—b→q3—c→q5—c→q6(f) ✓.',
      ] },
    },
    boardWords: ['acc', 'ac', 'aac', 'abcc'],
    guidedLesson: buildLessonL50() };
