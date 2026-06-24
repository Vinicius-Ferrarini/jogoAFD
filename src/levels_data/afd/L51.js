import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL51() {
  const b = makeBuilder(LEVEL_GRAPHS[51], {
    q0: [8, 50], ai: [26, 30], ae: [26, 70], bi: [50, 30], be: [50, 70], ci: [74, 30], ce: [90, 60],
  });
  const steps = [];
  b.addNodes('q0', 'ai', 'ci', 'ce').addEdges(['q0', 'a', 'ai'], ['ai', 'c', 'ci'], ['ci', 'c', 'ce']);
  steps.push(b.draw('Espinha "acc": q0—a→ai, depois os "c" (ai→ci→ce, final).', -1));
  steps.push(b.test('Veja "acc" (n=1, p=2, soma 3 ímpar) chegar a ce (final). Aceita!', 'acc', 0));
  steps.push(b.reject('Mas "ac" tem n+p = 1+1 = 2 (par): para em ci, que NÃO é final!', 'ac', 0));
  b.addNodes('ae', 'bi', 'be')
   .addEdges(['ai', 'a', 'ae'], ['ae', 'a', 'ai'], ['ai', 'b', 'bi'], ['ae', 'b', 'be'],
             ['bi', 'b', 'bi'], ['be', 'b', 'be'], ['ae', 'c', 'ce'], ['bi', 'c', 'ci'],
             ['be', 'c', 'ce'], ['ce', 'c', 'ci']);
  steps.push(b.draw('Adicionamos o vai-e-volta de "a", o bloco de "b" e os caminhos de "c" (paridade de n+p).', 1));
  steps.push(b.test('"aac" tem n=2, p=1 (soma 3 ímpar): q0→ai→ae→ce (final). Aceita!', 'aac', 1));
  steps.push(b.test('"abcc" tem n=1, m=1, p=2 (soma 3 ímpar): q0→ai→bi→ci→ce (final). Aceita!', 'abcc', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 51, label: "L50", formula: "L = { a^n b^m c^p | n, p > 0, m ≥ 0 e (n+p) é ímpar }",           desc: "",                                                                 shortestWord: "ac",       regex: /^.*$/, validate: w => /^a+b*c+$/.test(w) && ([...w].filter(c=>c==='a').length + [...w].filter(c=>c==='c').length)%2===1, alphabet: ['a', 'b', 'c'],        acceptedWords: ["acc","aac","abcc"],       rejectedWords: ["ac","aacc","c"],        hint: "Se a quantidade de 'a's for ímpar, os 'c's precisam ser pares, e vice versa.",                                     successMsg: "Paridade correlacionada funcionando!",
    tutorials: {
      onStart: { type: 'theory', title: 'a+ b* c+ com (n+p) impar!', dialog: [
        'L50: a^n b^m c^p. n>0, p>0, m>=0. Mas a quantidade (n+p) tem que ser impar.',
        '"acc" ✓ (1a+2c=3 impar). "aac" ✓ (2a+1c=3). "abcc" ✓ (1a+2c=3).',
        '"ac" ✗ (1+1=2 par). "aacc" ✗ (2+2=4 par). 7 estados: paridade de a e c.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: Paridade a + c', dialog: [
        'q0—a→q1 (impar-a). q1—a→q2 (par-a). q2—a→q1 (ciclo). q1—c→q5, q2—c→q6(f).',
        'b-phase: q1—b→q4(impar), q2—b→q3(par). q3,q4 loop b. q3—c→q6(f), q4—c→q5.',
        'c-phase: q5—c→q6(f). q6—c→q5. "abcc": q1—b→q4—c→q5—c→q6(f) ✓.',
      ] },
    },
    boardWords: ['acc', 'ac', 'aac', 'abcc'],
    guidedLesson: buildLessonL51() };
