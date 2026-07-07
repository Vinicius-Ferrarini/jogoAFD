import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [4, 15], q1: [20, 5], q2: [32, 5], q3: [48, 15], q4: [64, 20],
  };

function buildLessonL35() {
  const b = makeBuilder(LEVEL_GRAPHS[35], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', '1', 'q1'], ['q1', '1', 'q2'], ['q2', '1', 'q3'], ['q3', '1', 'q4']);
  steps.push(b.draw('Contador de "1"s seguidos: q0→q1→q2→q3→q4 (final, quatro 1\'s).', -1));
  steps.push(b.test('Veja "1111" atingir q4 (final). Aceita!', '1111', 0));
  steps.push(b.reject('Mas "111" tem só três "1"s: para em q3, que NÃO é final!', '111', 0));
  b.addEdges(['q0', '0', 'q0'], ['q1', '0', 'q0'], ['q2', '0', 'q0'], ['q3', '0', 'q0'], ['q4', '0', 'q4'], ['q4', '1', 'q4']);
  steps.push(b.draw('Um "0" zera a contagem (volta a q0); já q4 absorve tudo com seu laço {0,1}.', 1));
  steps.push(b.test('"01111" zera no início e depois acha "1111": q4 (final). Aceita!', '01111', 1));
  steps.push(b.test('"11110" acha "1111" e o "0" final fica no laço de q4 (final). Aceita!', '11110', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 35, layout: LAYOUT, label: "L35", formula: "L = {w ∈ {0,1}* / w tem 1111 como subpalavra}",                    desc: "",                                                                 shortestWord: "1111",     regex: /^[01]*1111[01]*/,                                           alphabet: ['0', '1'],             acceptedWords: ["1111","01111","11110"],   rejectedWords: ["λ","111","11011"],     hint: "Assim que achar quatro '1's seguidos, pode ir para um estado final que aceita tudo.",                               successMsg: "Achou a subpalavra!",
    tutorials: {
      onStart: { type: 'theory', title: 'Caçando "1111"!', dialog: [
        'L35: a palavra CONTÉM "1111" como subpalavra (em qualquer posição).',
        '"01111" — válida (contém 1111). "11011" — inválida (corrida de 1s interrompida).',
        'Estratégia: contar 1s consecutivos. Ao atingir 4, entrar em estado final permanente.',
        'Um "0" a qualquer momento zera a contagem e volta ao início.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Contador de Uns Consecutivos', dialog: [
        'q0: nenhum 1. q1: um 1. q2: dois 1s. q3: três 1s. q4(final): quatro ou mais 1s!',
        'Ler 0 em q0/q1/q2/q3 → volta para q0 (zera contagem).',
        'q4—{0,1}→q4: uma vez achados os 4 uns, a palavra já é válida. Loop eterno!',
      ] },
    },
    boardWords: ['1111', '111', '01111', '11110'],
    guidedLesson: buildLessonL35() };
