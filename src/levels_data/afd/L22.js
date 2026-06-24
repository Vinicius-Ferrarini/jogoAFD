import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL22() {
  const b = makeBuilder(LEVEL_GRAPHS[22], { q0: [30, 50], q1: [70, 50] });
  const steps = [];
  b.addNodes('q0').addEdges(['q0', '0', 'q0']);
  steps.push(b.draw('Termina em "0": q0 é inicial+final, com laço de "0".', -1));
  steps.push(b.test('Veja "0" ser aceita no laço de q0 (final).', '0', 0));
  b.addNodes('q1').addEdges(['q0', '1', 'q1'], ['q1', '1', 'q1']);
  steps.push(b.draw('Adicionamos q1 (último símbolo lido = "1"), com laço de "1".', 1));
  steps.push(b.reject('Mas "1" termina em "1" (ímpar): para em q1, que NÃO é final!', '1', 1));
  b.addEdges(['q1', '0', 'q0']);
  steps.push(b.draw('E o retorno q1—0→q0: um "0" volta ao estado final.', 1));
  steps.push(b.test('"10" termina em "0": q0→q1→q0 (final). Aceita!', '10', 1));
  steps.push(b.test('"110" também termina em "0": q0→q1→q1→q0 (final). Aceita!', '110', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 22, label: "L22", formula: "L = { w ∈ {0,1}* | w é um número par }",
    aliases: [
      "L = { w ∈ {0,1}* | w é par }",
      "L = { w ∈ {0,1}* | w termina em 0 }",
      "L = { w ∈ {0,1}* | w termina com 0 }",
    ],
    desc: "",                                                                 shortestWord: "0",        regex: /^[01]*0$/,                                                  alphabet: ['0', '1'],             acceptedWords: ["0","10","110"],            rejectedWords: ["1","11","101"],        hint: "Pense em binário! Todo número binário par termina com que dígito?",                                                 successMsg: "Lógica binária! Terminou em zero.",
    tutorials: {
      onStart: { type: 'theory', title: 'Bem-vindo ao Mundo Binário!', dialog: [
        'Novo contexto: alfabeto {0, 1} — o sistema BINÁRIO!',
        'Em binário, todo número PAR termina em "0". Todo ÍMPAR termina em "1". Simples!',
        'O AFD não precisa ler a palavra inteira — só o ÚLTIMO símbolo determina paridade.',
        'Isso implica: um estado "par" e um estado "ímpar", trocando a cada símbolo lido.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Estados: Par e Ímpar', dialog: [
        '2 estados: <b>q0</b>(inicial, último=1 ou vazio) e <b>q1</b>(último=0, FINAL).',
        '"0" de qualquer estado vai para <b>q1</b>. "1" de qualquer estado volta para <b>q0</b>.',
        'O AFD guarda só o ÚLTIMO bit. Loops em q0(1) e q1(0) cobrem sequências longas.',
      ] },
    },
    boardWords: ['0', '1', '10', '110'],
    guidedLesson: buildLessonL22() };
