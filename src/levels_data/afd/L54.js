import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL54() {
  const b = makeBuilder(LEVEL_GRAPHS[54], {
    ppp: [15, 28], pip: [38, 28], ipp: [15, 72], iip: [38, 72],
    ppi: [62, 28], pii: [85, 28], ipi: [62, 72], iii: [85, 72],
  });
  const steps = [];
  b.addNodes('ppp', 'ipp', 'iip', 'iii')
   .addEdges(['ppp', 'a', 'ipp'], ['ipp', 'b', 'iip'], ['iip', 'c', 'iii']);
  steps.push(b.draw('Espinha "abc": ppp—a→ipp—b→iip—c→iii (final = ímpar/ímpar/ímpar).', -1));
  steps.push(b.test('Veja "abc" atingir iii (final). Aceita!', 'abc', 0));
  steps.push(b.reject('Mas "ab" tem 0 "c" (par): para em iip, que NÃO é final!', 'ab', 0));
  b.addNodes('pip', 'ppi', 'pii', 'ipi')
   .addEdges(['ipp', 'a', 'ppp'], ['pip', 'a', 'iip'], ['iip', 'a', 'pip'], ['ppi', 'a', 'ipi'],
             ['ipi', 'a', 'ppi'], ['pii', 'a', 'iii'], ['iii', 'a', 'pii'],
             ['ppp', 'b', 'pip'], ['pip', 'b', 'ppp'], ['iip', 'b', 'ipp'], ['ppi', 'b', 'pii'],
             ['pii', 'b', 'ppi'], ['ipi', 'b', 'iii'], ['iii', 'b', 'ipi'],
             ['ppp', 'c', 'ppi'], ['ppi', 'c', 'ppp'], ['ipp', 'c', 'ipi'], ['ipi', 'c', 'ipp'],
             ['pip', 'c', 'pii'], ['pii', 'c', 'pip'], ['iip', 'c', 'iii'], ['iii', 'c', 'iip']);
  steps.push(b.draw('Completamos o cubo: cada símbolo inverte a paridade da sua letra.', 2));
  steps.push(b.test('"abccc" tem 1 a, 1 b, 3 c (todos ímpares): volta a iii (final). Aceita!', 'abccc', 2));
  steps.push(b.test('"aaabccc" tem 3 a, 1 b, 3 c (todos ímpares): também fecha em iii. Aceita!', 'aaabccc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 54, label: "L54", formula: "L = { w ∈ {a,b,c}* | |w|a é ímpar, |w|b é ímpar e |w|c é ímpar }", desc: "",                                                                 shortestWord: "abc",      validate: (w) => { const a = (w.match(/a/g)||[]).length; const b = (w.match(/b/g)||[]).length; const c = (w.match(/c/g)||[]).length; return a%2!==0 && b%2!==0 && c%2!==0; }, alphabet: ['a','b','c'],          acceptedWords: ["abc","abccc","aaabccc"],  rejectedWords: ["","ab","aabc"],         hint: "O cubo oposto ao L46! O único estado aceito é o canto (ímpar, ímpar, ímpar). Cada letra inverte apenas o seu próprio bit de paridade.", successMsg: "Cubo de paridade invertido dominado!",
    tutorials: {
      onStart: { type: 'theory', title: 'Cubo ímpar: 3 letras, 8 estados!', dialog: [
        'L54: contar a, b e c separadamente. Aceito quando TODOS são ímpares.',
        '"abc" ✓ (1a,1b,1c). "abccc" ✓ (1a,1b,3c). "λ" ✗ (todos pares). "ab" ✗ (0c=par).',
        '8 combinações de paridade: 2^3 = 8 estados. Apenas iii (ímpar,ímpar,ímpar) aceita.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '8 Estados em Cubo Ímpar', dialog: [
        'Cada letra inverte apenas o seu bit: "a" → muda 1° bit, "b" → 2°, "c" → 3°.',
        '"a": ppp↔ipp, pip↔iip, ppi↔ipi, pii↔iii.',
        '"b": ppp↔pip, ipp↔iip, ppi↔pii, ipi↔iii. "c": ppp↔ppi, ipp↔ipi, pip↔pii, iip↔iii.',
      ] },
    },
    boardWords: ['abc', 'ab', 'abccc', 'aaabccc'],
    guidedLesson: buildLessonL54() };
