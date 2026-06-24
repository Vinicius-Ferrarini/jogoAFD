import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL38() {
  const b = makeBuilder(LEVEL_GRAPHS[38], {
    q0: [10, 50], qa1: [30, 15], qa2: [52, 15], qa3: [72, 15], qf: [90, 50],
    qd1: [30, 85], qd2: [52, 85], qd3: [72, 85],
  });
  const steps = [];
  b.addNodes('q0', 'qa1', 'qa2', 'qa3', 'qf')
   .addEdges(['q0', 'a', 'qa1'], ['qa1', 'b', 'qa2'], ['qa2', 'c', 'qa3'], ['qa3', 'd', 'qf']);
  steps.push(b.draw('Caça à subpalavra "abcd": q0→qa1→qa2→qa3→qf (final).', -1));
  steps.push(b.test('Veja "abcd" atingir qf (final). Aceita!', 'abcd', 0));
  steps.push(b.reject('Mas "abc" não completou "abcd": para em qa3, que NÃO é final!', 'abc', 0));
  b.addNodes('qd1', 'qd2', 'qd3')
   .addEdges(
     // ramo "dcba": q0→qd1→qd2→qd3→qf
     ['q0', 'd', 'qd1'], ['qd1', 'c', 'qd2'], ['qd2', 'b', 'qd3'], ['qd3', 'a', 'qf'],
     // q0 ignora lixo (b,c) e qf absorve o resto
     ['q0', 'b', 'q0'], ['qf', 'a', 'qf'],
     // resets KMP do ramo "abcd": todo estado reaproveita "a" (→qa1) e "d" (→qd1)
     ['qa1', 'a', 'qa1'], ['qa1', 'c', 'q0'], ['qa1', 'd', 'qd1'],
     ['qa2', 'a', 'qa1'], ['qa2', 'b', 'q0'], ['qa2', 'd', 'qd1'],
     ['qa3', 'a', 'qa1'], ['qa3', 'b', 'q0'],
     // resets KMP do ramo "dcba"
     ['qd1', 'a', 'qa1'], ['qd1', 'b', 'q0'], ['qd1', 'd', 'qd1'],
     ['qd2', 'a', 'qa1'], ['qd2', 'c', 'q0'], ['qd2', 'd', 'qd1'],
     ['qd3', 'b', 'q0'], ['qd3', 'd', 'qd1'],
   );
  steps.push(b.draw('Ramo "dcba" (q0→qd1→qd2→qd3→qf) + resets KMP: cada "a" reinicia em qa1 e cada "d" em qd1, sem desperdiçar nenhum símbolo.', 1));
  steps.push(b.test('"babcd" ignora o "b" inicial (laço q0) e acha "abcd": qf (final). Aceita!', 'babcd', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 38, label: "L37", formula: "L = { w ∈ {a,b,c,d}* | tem abcd ou dcba como subpalavra }",        desc: "",                                                                 shortestWord: "abcd",     regex: /^[abcd]*(abcd|dcba)[abcd]*$/,                               alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcd","dcba","aabcdb"],  rejectedWords: ["λ","abc","dcb"],       hint: "Dois caminhos independentes saindo do início que caem num mesmo estado de vitória.",                                successMsg: "Bifurcação de subpalavras dominada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Subpalavra: "abcd" ou "dcba"!', dialog: [
        'L37: basta conter "abcd" ou "dcba" em qualquer posição da palavra.',
        '"abcd" ✓, "dcba" ✓, "aabcdb" ✓ (contém "abcd"). "abc", "dcb" ✗ (incompletos).',
        'Dois caminhos independentes do q0 convergem para o mesmo estado final q4.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Dois Ramos + Resets KMP', dialog: [
        'Ramo "abcd" (topo): q0—a→qa1—b→qa2—c→qa3—d→qf(f). "abcd" aceito!',
        'Ramo "dcba" (base): q0—d→qd1—c→qd2—b→qd3—a→qf(f). "dcba" aceito!',
        'qf é poço (loop a,b,c,d). Resets KMP: todo "a" reinicia em qa1 e todo "d" em qd1 — nenhum símbolo é desperdiçado.',
      ] },
    },
    boardWords: ['abcd', 'abc', 'babcd'],
    guidedLesson: buildLessonL38() };
