import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL47() {
  const b = makeBuilder(LEVEL_GRAPHS[47], {
    ppp: [15, 28], pip: [38, 28], ipp: [15, 72], iip: [38, 72],
    ppi: [62, 28], pii: [85, 28], ipi: [62, 72], iii: [85, 72],
  });
  const steps = [];
  b.addNodes('ppp');
  steps.push(b.draw('λ tem 0 de cada símbolo (tudo par): ppp é inicial+final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em ppp (final).', '', 0));
  b.addNodes('pip', 'ipp', 'iip')
   .addEdges(['ppp', 'a', 'ipp'], ['ipp', 'a', 'ppp'], ['pip', 'a', 'iip'], ['iip', 'a', 'pip'],
             ['ppp', 'b', 'pip'], ['pip', 'b', 'ppp'], ['ipp', 'b', 'iip'], ['iip', 'b', 'ipp']);
  steps.push(b.draw('Quadrado das paridades de a e b (cada símbolo troca uma paridade).', 1));
  steps.push(b.test('"aabb" zera as paridades de a e b: volta a ppp (final). Aceita!', 'aabb', 1));
  steps.push(b.reject('Mas "a" deixa os "a" ímpares: termina em ipp, que NÃO é final!', 'a', 1));
  b.addNodes('ppi', 'pii', 'ipi', 'iii')
   .addEdges(['ppp', 'c', 'ppi'], ['ppi', 'c', 'ppp'], ['ipp', 'c', 'ipi'], ['ipi', 'c', 'ipp'],
             ['pip', 'c', 'pii'], ['pii', 'c', 'pip'], ['iip', 'c', 'iii'], ['iii', 'c', 'iip'],
             ['ppi', 'a', 'ipi'], ['ipi', 'a', 'ppi'], ['pii', 'a', 'iii'], ['iii', 'a', 'pii'],
             ['ppi', 'b', 'pii'], ['pii', 'b', 'ppi'], ['ipi', 'b', 'iii'], ['iii', 'b', 'ipi']);
  steps.push(b.draw('Duplicamos o quadrado para "c": vira um cubo de 8 estados.', 2));
  steps.push(b.test('"aabbcc" zera as três paridades: volta a ppp (final). Aceita!', 'aabbcc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 47, label: "L46", formula: "L = { (a+b+c)* | qtd de a, b e c é par }",                          desc: "",                                                                 shortestWord: "",         regex: /^.*$/, validate: w => ['a','b','c'].every(c => [...w].filter(x=>x===c).length%2===0), alphabet: ['a', 'b', 'c'],        acceptedWords: ["λ","aabb","aabbcc"],      rejectedWords: ["a","b","abc"],         hint: "Isso é um cubo mágico de estados! Paridade para 3 letras exige 8 estados.",                                        successMsg: "Paridade em 3D completada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Cubo de paridade: 3 letras, 8 estados!', dialog: [
        'L46: contar a, b e c separadamente. Aceito quando TODOS pares.',
        '"λ" ✓ (0+0+0). "aabb" ✓ (2a,2b,0c). "aabbcc" ✓ (2a,2b,2c). "a" ✗ (1a impar).',
        '8 combinacoes de paridade: 2^3 = 8 estados. Apenas q0(ini,f) aceita.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '8 Estados em Cubo', dialog: [
        'Linhas "a" (vertical): q0↔q1, q2↔q4, q3↔q5, q6↔q7.',
        'Linhas "b" (horizontal): q0↔q2, q1↔q4, q3↔q6, q5↔q7.',
        'Linhas "c" (cruzadas): q0↔q3, q1↔q5, q2↔q6, q4↔q7.',
      ] },
    },
    boardWords: ['', 'aabb', 'a', 'aabbcc'],
    guidedLesson: buildLessonL47() };
