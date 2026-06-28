import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL5() {
  const b = makeBuilder(LEVEL_GRAPHS[5], { q0: [28, 15], q1: [54, 15] });
  const steps = [];
  b.addNodes('q0', 'q1').addEdges(['q0', 'a', 'q1']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "a".', -1));
  steps.push(b.test('Veja "a" percorrer q0—a→q1 (final). Aceita!', 'a', 0));
  steps.push(b.reject('Mas "aa" trava em q1: sem um laço, não há para onde ir com o 2º "a"!', 'aa', 0));
  b.addEdges(['q1', 'a', 'q1']);
  steps.push(b.draw('Agora o laço q1—a→q1, que absorve "a"s extras para sempre.', 1));
  steps.push(b.test('Com o laço, "aaa" gira em q1 e continua aceitando.', 'aaa', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 5,  label: "L05", formula: "L = { a^n | n > 0 }",                                                 desc: "",                                                                 shortestWord: "a",        regex: /^a+$/,                                                      alphabet: ['a'],                  acceptedWords: ["a","aa","aaa"],            rejectedWords: ["λ","b","ba"],          hint: "Você precisa ler pelo menos um 'a', e depois pode ler infinitos.",                                                  successMsg: "Ótimo uso de repetição (loop) no estado final!",
    tutorials: {
      onStart: { type: 'theory', title: 'Notação a^n — Repetição Infinita!', dialog: [
        'Nova notação: a^n com n > 0 significa "pelo menos um a, podendo ser infinitos".',
        '"a", "aa", "aaa"... todos aceitos. λ NÃO — pois n > 0 exige ao menos 1 símbolo!',
        'Para aceitar infinitas palavras, o grafo precisa de um LOOP — seta que aponta para si mesma.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Mecânica de Loop!', dialog: [
        'Mecânica nova: LOOP — uma transição que parte de um estado e volta para ele mesmo.',
        'Estrutura: q0 (inicial) →(a)→ q1 (final). Mais: q1 →(a)→ q1 (o próprio loop).',
        'Assim: ler "a" chega em q1 (aceita). Ler mais "a"s fica em q1 e continua aceitando!',
      ] },
    },
    boardWords: ['a', 'aa', 'aaa'],
    guidedLesson: buildLessonL5() };
