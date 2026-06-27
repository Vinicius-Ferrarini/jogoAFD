import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL37() {
  const b = makeBuilder(LEVEL_GRAPHS[37], {
    q0: [4, 11], q1: [27, 2], q2: [60, 2], q3: [79, 11], q4: [88, 28],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', 'd', 'q1'], ['q1', 'c', 'q2'], ['q2', 'b', 'q3'], ['q3', 'a', 'q4']);
  steps.push(b.draw('Espinha do sufixo "dcba": q0→q1→q2→q3→q4 (final).', -1));
  steps.push(b.test('Veja "dcba" percorrer a cadeia até q4 (final). Aceita!', 'dcba', 0));
  steps.push(b.reject('Mas "dcb" não completou o "dcba": para em q3, que NÃO é final!', 'dcb', 0));
  b.addEdges(['q0', 'a', 'q0'], ['q0', 'b', 'q0'], ['q0', 'c', 'q0'],
             ['q1', 'd', 'q1'], ['q1', 'a', 'q0'], ['q1', 'b', 'q0'],
             ['q2', 'a', 'q0'], ['q2', 'c', 'q0'], ['q2', 'd', 'q1'],
             ['q3', 'b', 'q0'], ['q3', 'd', 'q1'],
             ['q4', 'a', 'q0'], ['q4', 'b', 'q0'], ['q4', 'c', 'q0'], ['q4', 'd', 'q1']);
  steps.push(b.draw('Adicionamos os laços e resets (backedges KMP) para rastrear a subpalavra "dcba".', 1));
  steps.push(b.test('"adcba" tem prefixo livre e contém "dcba": q4 (final). Aceita!', 'adcba', 1));
  steps.push(b.test('"ddcba" reusa o "d" (laço q1) e fecha a subpalavra. Aceita!', 'ddcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 37, label: "L37", formula: "L = {w ∈ {a,b,c,d}* / w tem abcd ou dcba como subpalavra}",        desc: "",                                                                 shortestWord: "dcba",     regex: /^[abcd]*dcba[abcd]*$/,                                      alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dcba","adcba","aadcba"], rejectedWords: ["λ","dcb","abcd"],      hint: "O caminho deve soletrar 'd','c','b','a' em algum ponto.",                                                            successMsg: "Subpalavra detectada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Subpalavra "dcba"!', dialog: [
        'L37: a palavra deve CONTER "dcba" em qualquer posição.',
        '"dcba" ✓ "adcba" ✓ "aadcba" ✓. "λ", "dcb", "abcd" ✗.',
        'Técnica KMP: 5 estados rastreiam quanto de "dcba" já foi lido.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Cadeia + Retornos KMP', dialog: [
        'q0—d→q1—c→q2—b→q3—a→q4(f). Cadeia principal.',
        'q0 loop a,b,c (prefixo descartado). q1 loop d (novo "d" reinicia a busca).',
        'Mismatches em q2,q3,q4 voltam para q0 ou q1 — nunca desperdiçam um "d".',
      ] },
    },
    boardWords: ['dcba', 'dcb', 'adcba', 'ddcba'],
    guidedLesson: buildLessonL37() };
