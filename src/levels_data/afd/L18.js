import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL18() {
  const b = makeBuilder(LEVEL_GRAPHS[18], {
    q0: [4, 28], q1: [48, 2], q2: [88, 28],
  });
  const steps = [];
  b.addNodes('q0').addEdges(['q0', 'b', 'q0']);
  steps.push(b.draw('λ e qualquer sequência de "b"s: q0 é inicial+final, com laço de "b".', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1').addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q0']);
  steps.push(b.draw('Adicionamos q1 (um "a" lido, final): "b" reinicia voltando a q0.', 1));
  steps.push(b.test('"ab" lê um "a" e reinicia com "b": q0→q1→q0 (final). Aceita!', 'ab', 1));
  b.addNodes('q2').addEdges(['q1', 'a', 'q2'], ['q2', 'b', 'q0']);
  steps.push(b.draw('Adicionamos q2 (dois "a"s consecutivos, final): "b" volta a q0.', 2));
  steps.push(b.reject('"aaa" tem três a\'s consecutivos: q0→q1→q2 sem seta para "a" — dead-state!', 'aaa', 2));
  steps.push(b.test('Já "aba" intercala com "b": q0→q1→q0→q1 (final). Aceita!', 'aba', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 18, label: "L18", formula: "L = {w ∈ {a,b}* / w nunca tem mais de dois a's consecutivos}",     desc: "",                                                                 shortestWord: "",         regex: /^(b|ab|aab)*a{0,2}$/,                                         alphabet: ['a', 'b'],             acceptedWords: ["λ","a","b","ab","ba"],     rejectedWords: ["aaa","aaab","baaa"],hint: "Dois 'a's seguidos são permitidos, mas três já não. 'b' reinicia a contagem.",                                      successMsg: "Controle de consecutivos!",
    tutorials: {
      onStart: { type: 'theory', title: 'Máximo dois \'a\'s seguidos!', dialog: [
        'L18 aceita palavras que nunca tenham mais de dois "a"s consecutivos.',
        '"a", "aa", "aba", "aab" — válidos. "aaa", "baaa" — inválidos!',
        'Três estados: q0 (zero a pendentes), q1 (um a), q2 (dois a). "b" sempre volta a q0.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Contador de A\'s Consecutivos', dialog: [
        '<b>q0</b>(ini, final): laço "b". Ao ler "a": q0→<b>q1</b>(final).',
        '<b>q1</b>(final): "b"→q0. Ao ler "a": q1→<b>q2</b>(final).',
        '<b>q2</b>(final): "b"→q0. "a" não tem seta em q2 — dead-state implícito rejeita "aaa"!',
      ] },
    },
    boardWords: ['', 'ab', 'aa', 'aba'],
    guidedLesson: buildLessonL18() };
