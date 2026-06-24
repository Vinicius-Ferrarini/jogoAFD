import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL52() {
  const b = makeBuilder(LEVEL_GRAPHS[52], {
    q0: [8, 50], ao: [24, 30], ae: [40, 50], bo: [56, 30], be: [70, 55], co: [84, 30], ce: [92, 62],
  });
  const steps = [];
  b.addNodes('q0', 'ao', 'ae', 'bo')
   .addEdges(['q0', 'a', 'ao'], ['ao', 'a', 'ae'], ['ae', 'b', 'bo']);
  steps.push(b.draw('Espinha "aab": dois "a" pares (q0→ao→ae) e um "b" ímpar (ae→bo, final).', -1));
  steps.push(b.test('Veja "aab" (2 "a" par, 1 "b" ímpar, 0 "c" par) chegar a bo (final). Aceita!', 'aab', 0));
  b.addNodes('be', 'co', 'ce')
   .addEdges(['ae', 'a', 'ao'], ['bo', 'b', 'be'], ['be', 'b', 'bo'],
             ['bo', 'c', 'co'], ['co', 'c', 'ce'], ['ce', 'c', 'co']);
  steps.push(b.draw('Completamos: vai-e-volta de "a" (ao↔ae), de "b" (bo↔be) e os "c" pares (bo→co→ce). Finais: bo (b ímpar) e ce (b ímpar + c par).', 1));
  steps.push(b.reject('Mas "aabb" tem 2 "b" (par): para em be, que NÃO é final (a quantidade de "b" precisa ser ímpar)!', 'aabb', 1));
  steps.push(b.test('"aabcc" fecha o par de "c": bo→co→ce (final). Aceita!', 'aabcc', 1));
  steps.push(b.test('"aaaabbb" tem 4 "a" (par) e 3 "b" (ímpar): ...→bo→be→bo (final). Aceita!', 'aaaabbb', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 52, label: "L52", formula: "L = { a^n b^m c^p | n > 0 (par), m (ímpar), p (par) }",            desc: "",                                                                 shortestWord: "aab",      regex: /^(aa)+(bb)*b(cc)*$/,                                        alphabet: ['a', 'b', 'c'],        acceptedWords: ["aab","aabcc","aaaabbb"],  rejectedWords: ["ab","aabb","b"],        hint: "É um trem de paridade. Vá de vagão em vagão cuidando da regra de cada letra.",                                     successMsg: "Combo triplo de paridades concluído.",
    tutorials: {
      onStart: { type: 'theory', title: '(aa)+ (bb)*b (cc)*: tres paridades!', dialog: [
        'L52: a-s em quantidade par (>=2), b-s impares (1,3,5...), c-s pares (0,2,4...).',
        '"aab" ✓ (2a,1b,0c). "aabcc" ✓ (2a,1b,2c). "aaaabbb" ✓ (4a,3b,0c).',
        '"ab" ✗ (1a=impar). "aabb" ✗ (2b=par). 7 estados encadeados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: Trem de Paridade', dialog: [
        'aa-chain: q0—a→q1—a→q2. q2—a→q1 (mais pares). q2—b→q4(f,1b-impar).',
        'b-phase: q4—b→q3(par), q3—b→q4(impar). q4 e final.',
        'c-phase: q4—c→q5—c→q6(f). q6—c→q5. "aaaabbb": q2→q1→q2—b→q4—b→q3—b→q4(f) ✓.',
      ] },
    },
    boardWords: ['aab', 'aabb', 'aabcc', 'aaaabbb'],
    guidedLesson: buildLessonL52() };
