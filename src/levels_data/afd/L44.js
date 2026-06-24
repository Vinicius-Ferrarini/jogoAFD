import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL44() {
  const b = makeBuilder(LEVEL_GRAPHS[44], {
    q0: [10, 50], q1: [32, 50], q2: [54, 50], q3: [74, 50], q4: [90, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4']);
  steps.push(b.draw('Espinha "abcd": acha "ab" (q0→q1→q2) e fecha o sufixo "cd" (q2→q3→q4, final).', -1));
  steps.push(b.test('Veja "abcd" atingir q4 (final). Aceita!', 'abcd', 0));
  steps.push(b.reject('Mas "acd" não tem o "ab": depois do "a" veio "c", trava em q1!', 'acd', 0));
  b.addEdges(['q0', 'b', 'q0'], ['q1', 'a', 'q1'], ['q1', 'c', 'q0'], ['q2', 'a', 'q2'],
             ['q3', 'c', 'q3'], ['q3', 'a', 'q2'], ['q4', 'c', 'q3'], ['q4', 'a', 'q2']);
  steps.push(b.draw('Adicionamos os laços de busca (q0,q1) e os RESETS do sufixo: após "cd" (q4), qualquer outro símbolo volta a rastrear "cd" (q2/q3) — só termina se o ÚLTIMO par for "cd".', 1));
  steps.push(b.test('"aabcd" repete o "a" (laço q1) antes do "ab...cd": q4 (final). Aceita!', 'aabcd', 1));
  steps.push(b.test('"abccd" repete o "c" (laço q3) antes do "d" final: q4 (final). Aceita!', 'abccd', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 44, label: "L43", formula: "L = { w ∈ {a,b,c,d}* | subpalavra 'ab' e sufixo 'cd' }",           desc: "",                                                                 shortestWord: "abcd",     regex: /^[abcd]*ab[abcd]*cd$/,                                      alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcd","aabcd","abccd"],  rejectedWords: ["λ","acd","abdc"],      hint: "Ache primeiro o 'ab'. Depois de achar, fique aguardando um 'cd' para finalizar.",                                   successMsg: "Subpalavra + Sufixo resolvido.",
    tutorials: {
      onStart: { type: 'theory', title: 'Subpalavra "ab" + Sufixo "cd"!', dialog: [
        'L43: a palavra deve conter "ab" em algum lugar E terminar com "cd".',
        '"abcd" ✓ (ab subpalavra, cd sufixo). "aabcd" ✓. "abccd" ✓.',
        '"acd" ✗ (sem "ab"). "abdc" ✗ ("ab" ok mas não termina em "cd").',
      ] },
      onDrawGraph: { type: 'mechanic', title: '5 Estados: Detectar + Esperar', dialog: [
        'q0→q1(a): buscando "ab". q1→q2(b): "ab" encontrado! q0 e q1 voltam com c,d.',
        'q2→q3(c): primeiro "c" do sufixo. q3→q4(d): "cd" completo — final!',
        'q2 e q4 loop em a,b,d. q3 loop em c. Mismatches em q0,q1 voltam ao início.',
      ] },
    },
    boardWords: ['abcd', 'acd', 'aabcd', 'abccd'],
    guidedLesson: buildLessonL44() };
