import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL54() {
  const b = makeBuilder(LEVEL_GRAPHS[54], {
    ppp: [10, 50], ipp: [30, 20], pip: [30, 80], ppi: [50, 50],
    iip: [70, 20], ipi: [70, 80], pii: [90, 50], iii: [50, 10],
  });
  const steps = [];
  b.addNodes('ppp').addEdges();
  steps.push(b.draw('ppp = "a,b,c todos PAR" (0 ocorrências é par). É o inicial, mas não final.', -1));
  steps.push(b.reject('λ tem 0 de cada letra (par,par,par): fica em ppp, que não é final. Rejeita!', '', 0));
  b.addNodes('ipp').addEdges(['ppp', 'a', 'ipp'], ['ipp', 'a', 'ppp']);
  steps.push(b.draw('Cada "a" alterna a paridade de a: ppp↔ipp (i=ímpar, p=par).', 1));
  steps.push(b.reject('"a" só muda a paridade de a: ppp→ipp (ímpar,par,par), não final. Rejeita!', 'a', 1));
  b.addNodes('pip', 'iip').addEdges(['ppp', 'b', 'pip'], ['pip', 'b', 'ppp'], ['ipp', 'b', 'iip'], ['iip', 'b', 'ipp']);
  steps.push(b.draw('"b" alterna a paridade do meio: cada estado ganha uma aresta b para seu par.', 1));
  steps.push(b.reject('"ab": ppp→ipp→iip (ímpar,ímpar,par) ainda falta o c ímpar. Rejeita!', 'ab', 1));
  b.addNodes('ppi', 'ipi', 'pii', 'iii').addEdges(
    ['ppp', 'c', 'ppi'], ['ppi', 'c', 'ppp'],
    ['ipp', 'c', 'ipi'], ['ipi', 'c', 'ipp'],
    ['pip', 'c', 'pii'], ['pii', 'c', 'pip'],
    ['iip', 'c', 'iii'], ['iii', 'c', 'iip'],
  );
  steps.push(b.draw('"c" alterna a paridade final: completa o cubo. Só "iii" (tudo ímpar) é final.', 1));
  steps.push(b.test('"abc": ppp→ipp→iip→iii (ímpar,ímpar,ímpar) é final! Aceita!', 'abc', 1));
  steps.push(b.test('"abccc": dois "c" extras voltam e saem de iii de novo, fecha em iii. Aceita!', 'abccc', 1));
  steps.push(b.test('"aaabccc": os "a" extras passam por ipp/ppp antes do "bc", mas fecha em iii. Aceita!', 'aaabccc', 1));
  steps.push(b.formalIntro('Cubo completo: 8 estados (paridade de a,b,c), 1 final. Agora a Descrição Formal.', 1));
  return steps;
}

export default { id: 54, label: "L54", formula: "L = {w ∈ {a,b,c}* / |w|a, |w|b e |w|c são todos ímpares}",          desc: "",                                                                 shortestWord: "abc",      alphabet: ['a', 'b', 'c'],        acceptedWords: ["abc","abccc","aaabccc","cba"], rejectedWords: ["","a","ab","aabbcc"],  hint: "Pense num cubo: cada vértice é uma combinação de paridades (par/ímpar) de a, b e c. Só o vértice 'tudo ímpar' é final.",  successMsg: "Cubo de paridade dominado!",
    validate: (w) => {
      const count = (ch) => (w.match(new RegExp(ch, 'g')) || []).length;
      return count('a') % 2 === 1 && count('b') % 2 === 1 && count('c') % 2 === 1;
    },
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade de a, b e c — todas ímpares!', dialog: [
        'L54: a palavra só é aceita se a quantidade de "a", de "b" E de "c" forem todas ÍMPARES.',
        '"abc" ✓ (1,1,1 — todos ímpares). "aabbcc" ✗ (2,2,2 — todos pares). "ab" ✗ (falta c, e a contagem de c é 0, par).',
        'Cada estado guarda 3 bits de paridade (a,b,c) — 8 combinações, igual a um cubo!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '8 Estados: o Cubo de Paridades', dialog: [
        'Cada letra lida (a, b ou c) alterna SÓ a paridade daquela letra, virando para o vértice vizinho do cubo.',
        'ppp (tudo par) é o inicial. iii (tudo ímpar) é o único final.',
        '"abc": ppp—a→ipp—b→iip—c→iii(final) ✓. Qualquer ordem de a,b,c uma vez cada chega em iii.',
      ] },
    },
    boardWords: ['abc', 'aabbcc', 'ab', 'cba'],
    guidedLesson: buildLessonL54() };
