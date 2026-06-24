import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL17() {
  const b = makeBuilder(LEVEL_GRAPHS[17], {
    q0: [15, 50], q1: [50, 50], q2: [82, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2').addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q2']);
  steps.push(b.draw('Menor palavra "aa" (começa com "a", comprimento 2): q0—a→q1—a,b→q2 (final).', -1));
  steps.push(b.test('Veja "aa" chegar a q2 (final). Aceita!', 'aa', 0));
  steps.push(b.reject('Mas "a" tem comprimento 1 (ímpar): para em q1, que NÃO é final!', 'a', 0));
  b.addEdges(['q2', 'a', 'q1']);
  steps.push(b.draw('Adicionamos o vai-e-volta q1↔q2 para manter a paridade do comprimento.', 1));
  steps.push(b.test('"abba" começa com "a" e tem 4 letras (par): q0→q1→q2→q1→q2 (final). Aceita!', 'abba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 17, label: "L17", formula: "L = { w ∈ {a,b}* | começa com a e tem tamanho par }",               desc: "",                                                                 shortestWord: "aa",       regex: /^a[ab]([ab]{2})*$/,                                         alphabet: ['a', 'b'],             acceptedWords: ["aa","ab","abba"],          rejectedWords: ["a","b","aba"],         hint: "Forçar o início e depois manter a paridade.",                                                                       successMsg: "Paridade e prefixo resolvidos.",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois Requisitos Simultâneos!', dialog: [
        'L17: a palavra deve começar com "a" E ter comprimento PAR.',
        '"aa", "ab", "abba" — válidas. "a" (ímpar), "ba" (não começa com a) — inválidas.',
        'O AFD verifica os dois ao mesmo tempo: o <u>prefixo</u> e a <u>paridade do comprimento</u>.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Vai-e-Volta Após o Primeiro "a"', dialog: [
        '<b>q0</b>(inicial) só aceita "a" como primeiro símbolo. "b"? → armadilha <b>qT</b>.',
        'Após o "a": q0→<b>q1</b>(ímpar). Vai-e-volta <b>q1</b>↔<b>q2</b>(final) para cada símbolo.',
        '<b>q2</b> é final: comprimento ≥2, par, iniciou com "a". Cada símbolo inverte a paridade!',
      ] },
    },
    boardWords: ['aa', 'a', 'abba'],
    guidedLesson: buildLessonL17() };
