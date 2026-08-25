import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [20, 10], q1: [70, 10], q2: [20, 25], q3: [70, 25],
  };

function buildLessonL39() {
  const b = makeBuilder(LEVEL_GRAPHS[39], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q1', 'q3').addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q3']);
  steps.push(b.draw('Menor palavra "ab" (1 "a", 1 "b" = ímpar/ímpar): q0—a→q1—b→q3 (final).', -1));
  steps.push(b.test('Veja "ab" chegar a q3 (final). Aceita!', 'ab', 0));
  steps.push(b.reject('Mas "a" tem 1 "a" (ímpar) e 0 "b" (par): para em q1, que NÃO é final!', 'a', 0));
  b.addNodes('q2')
   .addEdges(['q0', 'b', 'q2'], ['q2', 'b', 'q0'], ['q1', 'a', 'q0'],
             ['q2', 'a', 'q3'], ['q3', 'a', 'q2'], ['q3', 'b', 'q1']);
  steps.push(b.draw('Completamos o quadrado (q3 = ímpar/ímpar é o único final).', 1));
  steps.push(b.test('"abbb" tem 1 "a" e 3 "b"s (ambos ímpares): fecha em q3 (final). Aceita!', 'abbb', 1));
  steps.push(b.test('"aaabbb" tem 3 "a"s e 3 "b"s (ambos ímpares): também fecha em q3. Aceita!', 'aaabbb', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 39, layout: LAYOUT, label: "L39", formula: "L = {w ∈ {a,b}* / a quantidade de a é impar e a quantidade de b é impar}", desc: "",                                                            shortestWord: "ab",       regex: /^.*$/, validate: w => [...w].every(c=>c==='a'||c==='b') && [...w].filter(c=>c==='a').length%2===1 && [...w].filter(c=>c==='b').length%2===1, alphabet: ['a', 'b'],             acceptedWords: ["ab","abbb","aaabbb"],     rejectedWords: ["λ","a","b"],           hint: "Parecido com a anterior, mas o estado de aceitação muda.",                                                          successMsg: "Paridade ímpar cruzada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Dupla: a-ímpar e b-ímpar!', dialog: [
        'L39: aceito quando #a ímpar E #b ímpar. Estado final: q3=(í,í) no canto oposto de q0.',
        '"ab" ✓ (1a=ímpar, 1b=ímpar). "abbb" ✓ (1a=ímpar, 3b=ímpar). "a" ✗ (1a=ímpar, 0b=par).',
        '4 estados de paridade: q0=(p,p), q2=(p,í), q1=(í,p), q3=(í,í). Só q3 é final.',
        'Mesmo quadrado do L38, mas o estado de aceitação muda.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '4 Estados — Quadrante Oposto!', dialog: [
        'q0(ini)=(p,p), q2=(p,í), q1=(í,p), q3(f)=(í,í). Só q3 é final.',
        'Ler \'a\': q0↔q1 e q2↔q3 (troca bit-a). Ler \'b\': q0↔q2 e q1↔q3 (troca bit-b).',
        '"ab": q0—a→q1—b→q3(f) ✓. "aaabbb": 3a e 3b = ímpar/ímpar → q3(f) ✓.',
      ] },
    },
    boardWords: ['ab', 'a', 'abbb', 'aaabbb'],
    guidedLesson: buildLessonL39() };
