import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL43() {
  const b = makeBuilder(LEVEL_GRAPHS[43], {
    q0: [12, 26], q1: [30, 26], q2: [48, 26], q3: [65, 10], q4: [78, 26],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4']);
  steps.push(b.draw('Espinha "abcd": q0—a→q1—b→q2—c→q3—d→q4 (final).', -1));
  steps.push(b.test('Veja "abcd" atingir q4 (final). Aceita!', 'abcd', 0));
  steps.push(b.reject('Mas "acd" não tem o "ab": depois do "a" veio "c", trava em q1!', 'acd', 0));
  b.addEdges(['q0', 'b', 'q0'], ['q0', 'c', 'q0'], ['q0', 'd', 'q0'],
             ['q1', 'a', 'q1'], ['q1', 'c', 'q0'], ['q1', 'd', 'q0'],
             ['q2', 'a', 'q2'], ['q2', 'b', 'q2'], ['q2', 'd', 'q2'],
             ['q3', 'c', 'q3'], ['q4', 'c', 'q3'],
             ['q4', 'a', 'q2'], ['q4', 'b', 'q2'], ['q4', 'c', 'q2']);
  steps.push(b.draw('Adicionamos os laços e resets: após "abcd" (q4), qualquer símbolo recomeça a busca pelo sufixo.', 1));
  steps.push(b.test('"aabcd" repete o "a" (laço q1) antes de "bcd": q4 (final). Aceita!', 'aabcd', 1));
  steps.push(b.test('"abccd" repete o "c" (laço q3) antes do "d" final: q4 (final). Aceita!', 'abccd', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 43, label: "L43", formula: "L = {w ∈ {a,b,c,d}* / w tem ab como subpalavra e cd como sufixo}",  desc: "",                                                                shortestWord: "abcd",     regex: /^[abcd]*ab[abcd]*cd$/,                                      alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcd","aabcd","abccd"],  rejectedWords: ["λ","acd","abdc"],      hint: "Ache primeiro o 'ab'. Depois de achar, fique aguardando um 'cd' para finalizar.",                                   successMsg: "Subpalavra + Sufixo resolvido.",
    tutorials: {
      onStart: { type: 'theory', title: 'Subpalavra "ab" + Sufixo "cd"!', dialog: [
        'L43: a palavra deve conter "ab" em algum lugar E terminar com "cd".',
        '"abcd" ✓ (ab subpalavra, cd sufixo). "aabcd" ✓. "abccd" ✓.',
        '"acd" ✗ (sem "ab"). "abdc" ✗ ("ab" ok mas não termina em "cd").',
      ] },
      onDrawGraph: { type: 'mechanic', title: '5 Estados: Detectar + Esperar', dialog: [
        'q0→q1(a): buscando "ab". q1→q2(b): "ab" encontrado! q0,q1 loops e resets.',
        'q2→q3(c): primeiro "c" do sufixo. q3→q4(d): "cd" completo — final!',
        'q2,q4 loops em a,b,d. q3 loop c. Mismatches voltam ao rastreio.',
      ] },
    },
    boardWords: ['abcd', 'acd', 'aabcd', 'abccd'],
    guidedLesson: buildLessonL43() };
