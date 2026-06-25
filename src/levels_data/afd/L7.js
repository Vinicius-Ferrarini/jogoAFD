import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL7() {
  const b = makeBuilder(LEVEL_GRAPHS[7], {
    q0: [15, 50], q1: [40, 50], q2: [40, 40], q3: [64, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q3').addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q3']);
  steps.push(b.draw('Menor palavra "aa" (zero "b"s no meio): q0—a→q1—a→q3 (final).', -1));
  steps.push(b.test('Veja "aa" percorrer a espinha até q3 (final). Aceita!', 'aa', 0));
  b.addNodes('q2').addEdges(['q1', 'b', 'q2'], ['q2', 'b', 'q1']);
  steps.push(b.draw('Adicionamos o ping-pong q1↔q2 para contar os "b"s em pares.', 1));
  steps.push(b.reject('Mas "aba" tem 1 "b" (ímpar): para em q2, que não lê "a". B\'s vêm em duplas!', 'aba', 1));
  steps.push(b.test('Já "abba" tem 2 "b"s (par): volta a q1 e fecha em q3. Aceita!', 'abba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 7,  label: "L07", formula: "L = { a b^n a | n ≥ 0 e n é par }",                                  desc: "",                                                                 shortestWord: "aa",       regex: /^a(bb)*a$/,                                                 alphabet: ['a', 'b'],             acceptedWords: ["aa","abba","abbbba"],      rejectedWords: ["a","aba","abbba","b","ba","baa","babba","aab","aaba","abbab","aaa"],     hint: "A palavra começa com 'a', termina com 'a', e no meio os 'b's andam em duplas.",                                    successMsg: "Excelente! Você controlou o sanduíche de 'b's pares.",
    tutorials: {
      onStart: { type: 'theory', title: 'Linguagem Sanduíche!', dialog: [
        'Linguagem SANDUÍCHE! 🥪 Início e fim fixos, meio variável.',
        'Começa com "a", seguido de um número PAR de "b"s (0, 2, 4...), termina com "a".',
        'Dica: rastreie o "a" inicial, a paridade dos "b"s e feche com o "a" final.',
      ] },
      onDrawGraph: { type: 'theory', title: '≥ 0 vs > 0: Detalhe Crucial!', dialog: [
        'Atenção: n ≥ 0 significa ZERO ou mais "b"s — portanto "aa" é válida (zero b\'s no meio)!',
        'Se fosse n > 0, pelo menos um "b" seria obrigatório. Com ≥ 0, o meio pode ser vazio.',
        'Para cobrir n=0: crie uma transição do estado "b-par" direto para o estado que lê o "a" final.',
      ] },
    },
    boardWords: ['aa', 'aba', 'abba'],
    guidedLesson: buildLessonL7() };
