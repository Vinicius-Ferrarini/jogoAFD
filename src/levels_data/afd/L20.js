import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL20() {
  const b = makeBuilder(LEVEL_GRAPHS[20], {
    q0: [4, 14], q1: [34, 6], q2: [71, 6], q3: [71, 28], q4: [37, 28],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q3').addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q3']);
  steps.push(b.draw('Menor palavra "ab": q0—a→q1—b→q3 (final).', -1));
  steps.push(b.test('Veja "ab" chegar a q3 (final). Aceita!', 'ab', 0));
  steps.push(b.reject('Mas "a" tem só 1 letra (|w|≥2): para em q1, que NÃO é final!', 'a', 0));
  b.addNodes('q2').addEdges(['q1', 'a', 'q2'], ['q2', 'a', 'q2'], ['q2', 'b', 'q3']);
  steps.push(b.draw('Adicionamos q2 (final, laço a): múltiplos "a"s antes dos "b"s.', 1));
  steps.push(b.test('"aab" lê dois "a"s e fecha com "b": q0→q1→q2→q3 (final). Aceita!', 'aab', 1));
  b.addEdges(['q3', 'b', 'q3']);
  steps.push(b.draw('E o laço q3—b→q3 para os "b"s finais repetidos.', 1));
  steps.push(b.test('"abb" lê "a" e depois "b"s: q0→q1→q3→q3 (final). Aceita!', 'abb', 1));
  b.addNodes('q4').addEdges(['q0', 'b', 'q4'], ['q4', 'b', 'q3']);
  steps.push(b.draw('Por fim, q0→q4(b)→q3: palavras iniciadas com "b" (sem "a" antes).', 2));
  steps.push(b.reject('"ba" tem "a" depois de "b": q3 não tem seta para "a" e a máquina trava!', 'ba', 2));
  steps.push(b.test('Já "bb" são dois "b"s: q0→q4→q3 (final). Aceita!', 'bb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 20, label: "L20", formula: "L = {w ∈ {a,b}* / |w| >= 2 e os a's precedem os b's}",             desc: "",                                                                 shortestWord: "aa",       regex: /^(aa+|a+b+|bb+)$/,                                          alphabet: ['a', 'b'],             acceptedWords: ["aa","ab","bb"],            rejectedWords: ["λ","a","ba"],          hint: "Depois que o primeiro 'b' for lido, um 'a' nunca mais poderá aparecer.",                                            successMsg: "Transição irreversível dominada.",
    tutorials: {
      onStart: { type: 'theory', title: 'Transição Irreversível a→b!', dialog: [
        'L20: comprimento ≥ 2, e todos os "a"s ANTES de todos os "b"s.',
        '"aa", "ab", "bb" — válidas. "ba", "bba" — inválidas (b veio antes do a).',
        'Regra: uma vez que o primeiro "b" é lido, a porta para "a" fecha para sempre!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '5 Estados: Dois Caminhos', dialog: [
        'Cima: <b>q0</b>(ini)→<b>q1</b>(a)→<b>q2</b>(final, loop a). q1→<b>q3</b>(final,b).',
        'Base: <b>q0</b>→<b>q4</b>(b)→<b>q3</b>(final, loop b). q2→<b>q3</b>(b) também!',
        'q4 sem seta para "a": dead-state implícito rejeita "ba...". q3 sem seta para "a": rejeita "...ab".',
      ] },
    },
    boardWords: ['ab', 'a', 'aab', 'abb', 'ba', 'bb'],
    guidedLesson: buildLessonL20() };
