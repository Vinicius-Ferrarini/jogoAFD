import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [4, 15], q1: [24, 15], q2: [44, 15], q3: [64, 15],
  };

function buildLessonL12() {
  const b = makeBuilder(LEVEL_GRAPHS[12], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'b', 'q3']);
  steps.push(b.draw('Menor palavra "abb" (1 "a" + 1 dupla de "b"s): q0→q1→q2→q3 (final).', -1));
  steps.push(b.test('Veja "abb" fechar em q3 (final). Aceita!', 'abb', 0));
  steps.push(b.reject('Mas "ab" tem 1 "b" só (ímpar): para em q2, que NÃO é final. B\'s vêm em duplas!', 'ab', 0));
  b.addEdges(['q1', 'a', 'q1']);
  steps.push(b.draw('Adicionamos o laço q1—a→q1 para "a"s extras (n>0).', 1));
  steps.push(b.test('"aabb" usa o laço de "a" e fecha a dupla de "b"s em q3. Aceita!', 'aabb', 1));
  b.addEdges(['q3', 'b', 'q2']);
  steps.push(b.draw('E o ping-pong q3—b→q2, que repete as duplas de "b"s.', 2));
  steps.push(b.test('"abbbb" lê duas duplas de "b"s (q2↔q3) e fecha em q3. Aceita!', 'abbbb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 12, layout: LAYOUT, label: "L12", formula: "L = {a^n b^2m / n > 0, m > 0}",                                    desc: "",                                                                 shortestWord: "abb",      regex: /^a+(bb)+$/,                                                 alphabet: ['a', 'b'],             acceptedWords: ["abb","aabb","abbbb"],      rejectedWords: ["a","ab","bb"],         hint: "Os 'b's só podem vir em duplas após pelo menos um 'a'.",                                                            successMsg: "Duplas de B controladas.",
    tutorials: {
      onStart: { type: 'theory', title: 'Armadilha Natural dos "b"s Ímpares!', dialog: [
        'b^2m com m > 0: pelo menos UM par de "b"s, nunca um "b" avulso.',
        'Segredo: o estado no "meio" de cada par NÃO é final — "b" solitário trava e morre!',
        'Isso cria um <u>ping-pong</u> natural: estado-de-ida (não-final) ↔ estado-de-chegada (final).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Montando o Ping-Pong de B', dialog: [
        'Caminho: <b>q0</b>(loop a) → <b>q1</b> → <b>q2</b>↔<b>q3</b>(final).',
        '<b>q1</b> garante n > 0: sem pelo menos um "a", nunca chega ao bloco de "b"s.',
        'O ping-pong <b>q2↔q3</b> aceita exatamente bb, bbbb, bbbbbb — pares infinitos!',
      ] },
    },
    boardWords: ['abb', 'ab', 'aabb', 'abbbb'],
    guidedLesson: buildLessonL12() };
