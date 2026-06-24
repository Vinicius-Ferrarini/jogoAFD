import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL40() {
  const b = makeBuilder(LEVEL_GRAPHS[40], { pp: [28, 25], pi: [72, 25], ip: [28, 78], ii: [72, 78] });
  const steps = [];
  b.addNodes('pp', 'ip', 'ii').addEdges(['pp', 'a', 'ip'], ['ip', 'b', 'ii']);
  steps.push(b.draw('Menor palavra "ab" (1 "a", 1 "b" = ímpar/ímpar): pp—a→ip—b→ii (final).', -1));
  steps.push(b.test('Veja "ab" chegar a ii (final). Aceita!', 'ab', 0));
  steps.push(b.reject('Mas "a" tem 1 "a" (ímpar) e 0 "b" (par): para em ip, que NÃO é final!', 'a', 0));
  b.addNodes('pi')
   .addEdges(['pp', 'b', 'pi'], ['pi', 'a', 'ii'], ['ii', 'a', 'pi'],
             ['pi', 'b', 'pp'], ['ip', 'a', 'pp'], ['ii', 'b', 'ip']);
  steps.push(b.draw('Completamos o quadrado (ii = ímpar/ímpar é o único final).', 1));
  steps.push(b.test('"abbb" tem 1 "a" e 3 "b"s (ambos ímpares): fecha em ii (final). Aceita!', 'abbb', 1));
  steps.push(b.test('"aaabbb" tem 3 "a"s e 3 "b"s (ambos ímpares): também fecha em ii. Aceita!', 'aaabbb', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 40, label: "L39", formula: "L = { (a+b)* | qtd de 'a' é ímpar, qtd de 'b' é ímpar }",          desc: "",                                                                 shortestWord: "ab",       regex: /^.*$/, validate: w => [...w].filter(c=>c==='a').length%2===1 && [...w].filter(c=>c==='b').length%2===1, alphabet: ['a', 'b'],             acceptedWords: ["ab","abbb","aaabbb"],     rejectedWords: ["λ","a","b"],           hint: "Parecido com a anterior, mas o estado de aceitação muda.",                                                          successMsg: "Paridade ímpar cruzada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Dupla: a-ímpar e b-ímpar!', dialog: [
        'L39: aceito quando #a ímpar E #b ímpar. Estado final: q3=(í,í) no canto oposto de q0.',
        '"ab" ✓ (1a=ímpar, 1b=ímpar). "abbb" ✓ (1a=ímpar, 3b=ímpar). "a" ✗ (1a=ímpar, 0b=par).',
        '4 estados de paridade: q0=(p,p), q1=(p,í), q2=(í,p), q3=(í,í). Só q3 é final.',
        'Mesmo quadrado da L38, mas o estado de aceitação muda de q1 para q3.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '4 Estados — Quadrante Oposto!', dialog: [
        'q0(ini)=(p,p), q1=(p,í), q2=(í,p), q3(f)=(í,í). Só q3 é final.',
        'Ler \'a\': q0↔q2 e q1↔q3 (troca bit-a). Ler \'b\': q0↔q1 e q2↔q3 (troca bit-b).',
        '"ab": q0—a→q2—b→q3(f) ✓. "aaabbb": 3a e 3b = ímpar/ímpar → q3(f) ✓.',
      ] },
    },
    boardWords: ['ab', 'a', 'abbb', 'aaabbb'],
    guidedLesson: buildLessonL40() };
