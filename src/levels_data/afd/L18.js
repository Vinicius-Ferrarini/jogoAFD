import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL18() {
  const b = makeBuilder(LEVEL_GRAPHS[18], {
    q0: [20, 50], q1: [50, 50], q2: [80, 50],
  });
  const steps = [];
  b.addNodes('q0').addEdges(['q0', 'b', 'q0']);
  steps.push(b.draw('λ e qualquer sequência de "b"s: q0 é inicial+final, com laço de "b".', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1').addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q0']);
  steps.push(b.draw('Adicionamos q1 (um "a" lido): um "b" reinicia a contagem, voltando a q0.', 1));
  steps.push(b.test('"ab" lê um "a" e reinicia com "b": q0→q1→q0 (final). Aceita!', 'ab', 1));
  b.addNodes('q2').addEdges(['q1', 'a', 'q2'], ['q2', 'a', 'q2'], ['q2', 'b', 'q2']);
  steps.push(b.draw('E a armadilha q2 (não-final): um 2º "a" seguido cai aqui e nunca mais sai.', 2));
  steps.push(b.reject('"aa" tem dois "a"s seguidos: q0→q1→q2 (armadilha, não-final). Rejeita!', 'aa', 2));
  steps.push(b.test('Já "aba" intercala com "b": q0→q1→q0→q1 (final). Aceita!', 'aba', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 18, label: "L18", formula: "L = { w ∈ {a,b}* | w não contém 'aa' como subpalavra }",         desc: "",                                                                 shortestWord: "",         regex: /^(b|ab)*a?$/,                                         alphabet: ['a', 'b'],             acceptedWords: ["λ","a","b","ab","ba"],     rejectedWords: ["aa","aab","baa"],   hint: "Se dois 'a's aparecerem seguidos, o autômato trava. 'b' reinicia a contagem.",                                      successMsg: "Sem 'aa' consecutivos!",
    tutorials: {
      onStart: { type: 'theory', title: 'Proibido: dois \'a\'s seguidos!', dialog: [
        'A linguagem L18 aceita qualquer palavra que NÃO contenha "aa" como subpalavra.',
        '2 estados: q0 (nenhum "a" pendente, inicial e final) e q1 (um "a" pendente, final).',
        'Um segundo "a" em q1 não tem seta: dead-state implícito rejeita "aa", "aab", "baa"!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Estados, Dead-State Implícito', dialog: [
        '<b>q0</b>(ini, final): loop de "b". <b>q1</b>(final): "b" volta para q0.',
        'q0 —a→ q1: leu um "a". q1 —b→ q0: "b" reinicia. q1 sem seta para "a" = dead!',
        '"ab": q0→q1→q0 ✔ "ba": q0→q0→q1 ✔ "aa": q0→q1→<b>trava</b> ✗',
      ] },
    },
    boardWords: ['', 'ab', 'aa', 'aba'],
    guidedLesson: buildLessonL18() };
