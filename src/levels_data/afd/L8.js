import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [4, 10], q1: [22, 10], q2: [40, 10], q3: [74, 10], q4: [58, 10],
  };

function buildLessonL8() {
  // JFLAP_GRAPHS[8]: q0→q1(a)→q2(b)→q4(c)→q3(a,final). Ciclo: q4→q2(b)→q4(c)
  const b = makeBuilder(LEVEL_GRAPHS[8], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q4', 'q3')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q4'], ['q4', 'a', 'q3']);
  steps.push(b.draw('Menor palavra "abca" (um ciclo "bc"): cadeia q0—a→q1—b→q2—c→q4—a→q3 (final).', -1));
  steps.push(b.test('Veja "abca" percorrer a cadeia até q3 (final). Aceita!', 'abca', 0));
  steps.push(b.reject('Mas "aa" pula o ciclo "bc" obrigatório (n>0): trava em q1 sem transição de "a"!', 'aa', 0));
  b.addEdges(['q4', 'b', 'q2']);
  steps.push(b.draw('Adicionamos o retorno q4—b→q2: o ciclo "bc" pode girar quantas vezes quiser.', 1));
  steps.push(b.test('Com o retorno, "abcbca" dá duas voltas no ciclo e fecha em q3. Aceita!', 'abcbca', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 8, layout: LAYOUT,  label: "L08", formula: "L = { a(bc)^n a | n > 0 }",                                          desc: "",                                                                 shortestWord: "abca",     regex: /^a(bc)+a$/,                                                 alphabet: ['a', 'b', 'c'],        acceptedWords: ["abca","abcbca"],           rejectedWords: ["aa","aca","abba"],     hint: "Começa com 'a', depois exige o ciclo exato 'bc', 'bc', e fecha com 'a'.",                                           successMsg: "Belo ciclo! A sequência foi respeitada.",
    tutorials: {
      onStart: { type: 'theory', title: 'Agrupamento Cíclico (bc)^n', dialog: [
        'Parênteses na notação! (bc)^n significa o GRUPO "bc" repetido n vezes, com n > 0.',
        'Cada volta do ciclo consome DOIS símbolos em ordem fixa: primeiro "b", depois "c".',
        'Para isso, dois estados formam o ciclo: q2→(c)→q3→(b)→q2 — um ping-pong de dois passos.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Ciclo de Dois Passos', dialog: [
        'Estrutura: q0—(a)→q1—(b)→q2—(c)→q3—(b)→q2 (loop). Depois q3—(a)→q4 (final).',
        'O ciclo "bc" gira entre q2 e q3 indefinidamente — cada volta completa o grupo!',
        'Como n > 0, o ciclo é obrigatório: não existe atalho direto de q1 para o estado final.',
      ] },
    },
    boardWords: ['abca', 'aa', 'abcbca'],
    guidedLesson: buildLessonL8() };
