import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL23() {
  const b = makeBuilder(LEVEL_GRAPHS[23], { q0: [12, 48], q1: [36, 49] });
  const steps = [];
  b.addNodes('q0', 'q1').addEdges(['q0', '1', 'q1']);
  steps.push(b.draw('Menor palavra "1" (termina em 1): q0—1→q1 (final).', -1));
  steps.push(b.test('Veja "1" chegar a q1 (final). Aceita!', '1', 0));
  b.addEdges(['q0', '0', 'q0'], ['q1', '0', 'q0']);
  steps.push(b.draw('Adicionamos o laço q0—0→q0 e o retorno q1—0→q0 (um "0" leva ao não-final).', 1));
  steps.push(b.reject('Mas "10" termina em "0" (par): volta a q0, que NÃO é final!', '10', 1));
  steps.push(b.test('Já "01" tem um zero à frente e fecha em "1": q0→q0→q1 (final). Aceita!', '01', 1));
  b.addEdges(['q1', '1', 'q1']);
  steps.push(b.draw('E o laço q1—1→q1 para vários "1"s seguidos.', 2));
  steps.push(b.test('"11" termina em "1": q0→q1→q1 (final). Aceita!', '11', 2));
  steps.push(b.test('"101" alterna e fecha em "1": q0→q1→q0→q1 (final). Aceita!', '101', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 23, label: "L23", formula: "L = {w ∈ {0,1}* / w é um número impar}",
    aliases: [
      "L = { w ∈ {0,1}* | w é ímpar }",
      "L = { w ∈ {0,1}* | w termina em 1 }",
      "L = { w ∈ {0,1}* | w termina com 1 }",
    ],
    desc: "",                                                                 shortestWord: "1",        regex: /^[01]*1$/,                                                  alphabet: ['0', '1'],             acceptedWords: ["1","11","101"],            rejectedWords: ["0","10","100"],        hint: "Números ímpares em binário sempre terminam com '1'.",                                                               successMsg: "Lógica binária! Terminou em um.",
    tutorials: {
      onStart: { type: 'theory', title: 'ÍMPAR em Binário Termina em "1"!', dialog: [
        'Espelho de L22: número binário ÍMPAR termina em "1". PAR termina em "0".',
        '"1", "11", "101" — válidos. "0", "10" — inválidos (terminam em 0).',
        'O AFD só precisa lembrar o ÚLTIMO dígito lido para decidir.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Estados Espelhados', dialog: [
        '2 estados: <b>q0</b>(inicial, último=0 ou vazio) e <b>q1</b>(último=1, FINAL).',
        '"1" de qualquer estado vai para <b>q1</b>. "0" de qualquer estado volta para <b>q0</b>.',
        'Espelho do L22: loop q0(0) e q1(1). Só o ÚLTIMO bit decide. "101": q0→q1→q0→q1 ✔',
      ] },
    },
    boardWords: ['1', '10', '01', '11', '101'],
    guidedLesson: buildLessonL23() };
