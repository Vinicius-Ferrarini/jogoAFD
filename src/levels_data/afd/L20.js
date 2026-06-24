import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL20() {
  const b = makeBuilder(LEVEL_GRAPHS[20], {
    q0: [10, 50], qa: [33, 28], qaa: [60, 20], qab: [86, 45], qb: [33, 75], qbb: [64, 82],
  });
  const steps = [];
  b.addNodes('q0', 'qa', 'qab').addEdges(['q0', 'a', 'qa'], ['qa', 'b', 'qab']);
  steps.push(b.draw('Menor palavra "ab" (um "a" depois um "b"): q0→qa→qab (final).', -1));
  steps.push(b.test('Veja "ab" chegar a qab (final). Aceita!', 'ab', 0));
  steps.push(b.reject('Mas "a" tem só 1 letra (|w|≥2): para em qa, que NÃO é final!', 'a', 0));
  b.addNodes('qaa').addEdges(['qa', 'a', 'qaa'], ['qaa', 'a', 'qaa'], ['qaa', 'b', 'qab']);
  steps.push(b.draw('Adicionamos o caminho dos "a"s repetidos: qa—a→qaa (final, laço a).', 1));
  steps.push(b.test('"aab" lê dois "a"s e fecha com "b": q0→qa→qaa→qab (final). Aceita!', 'aab', 1));
  b.addEdges(['qab', 'b', 'qab']);
  steps.push(b.draw('E o laço qab—b→qab para os "b"s finais repetidos.', 1));
  steps.push(b.test('"abb" lê "a" e depois "b"s: q0→qa→qab→qab (final). Aceita!', 'abb', 1));
  b.addNodes('qb', 'qbb').addEdges(['q0', 'b', 'qb'], ['qb', 'b', 'qbb'], ['qbb', 'b', 'qbb']);
  steps.push(b.draw('Por fim, o caminho só de "b"s: q0→qb→qbb (final). Note: qb não lê "a"!', 2));
  steps.push(b.reject('"ba" tem "a" depois de "b": qb não lê "a" e a máquina trava!', 'ba', 2));
  steps.push(b.test('Já "bb" são dois "b"s: q0→qb→qbb (final). Aceita!', 'bb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 20, label: "L20", formula: "L = { w ∈ {a,b}* | |w| ≥ 2 e a's precedem os b's }",              desc: "",                                                                 shortestWord: "aa",       regex: /^(aa+|a+b+|bb+)$/,                                          alphabet: ['a', 'b'],             acceptedWords: ["aa","ab","bb"],            rejectedWords: ["λ","a","ba"],          hint: "Depois que o primeiro 'b' for lido, um 'a' nunca mais poderá aparecer.",                                            successMsg: "Transição irreversível dominada.",
    tutorials: {
      onStart: { type: 'theory', title: 'Transição Irreversível a→b!', dialog: [
        'L20: comprimento ≥ 2, e todos os "a"s ANTES de todos os "b"s.',
        '"aa", "ab", "bb" — válidas. "ba", "bba" — inválidas (b veio antes do a).',
        'Regra: uma vez que o primeiro "b" é lido, a porta para "a" fecha para sempre!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '5 Estados: Dois Caminhos', dialog: [
        'Topo: <b>q0</b>(ini)→<b>q1</b>(a)→<b>q2</b>(final, loop a). q1→<b>q3</b>(final,b).',
        'Base: <b>q0</b>→<b>q4</b>(b)→<b>q3</b>(final, loop b). q2→<b>q3</b>(b) também!',
        'q4 sem seta para "a": dead-state implícito rejeita "ba...". q3 sem seta para "a": rejeita "...ab".',
      ] },
    },
    boardWords: ['ab', 'a', 'aab', 'abb', 'ba', 'bb'],
    guidedLesson: buildLessonL20() };
