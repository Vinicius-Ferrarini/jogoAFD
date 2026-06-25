import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL24() {
  const b = makeBuilder(LEVEL_GRAPHS[24], {
    q0: [12, 48], q1: [28, 47], q2: [52, 48], q3: [74, 47],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3')
   .addEdges(['q0', '0', 'q1'], ['q0', '1', 'q1'], ['q1', '0', 'q2'], ['q1', '1', 'q2'], ['q2', '0', 'q3'], ['q2', '1', 'q3']);
  steps.push(b.draw('Trilho de exatamente 3 passos: q0→q1→q2→q3 (final), cada seta lê {0,1}.', -1));
  steps.push(b.test('Veja "000" percorrer os 3 passos até q3 (final). Aceita!', '000', 0));
  steps.push(b.reject('Mas "00" tem só 2 símbolos: para em q2, que NÃO é final!', '00', 0));
  steps.push(b.test('Qualquer combinação de 3 símbolos serve: "101" fecha em q3 (final). Aceita!', '101', 0));
  steps.push(b.reject('E "0000" tem 4 símbolos: q3 não tem saída e a máquina trava!', '0000', 0));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 0));
  return steps;
}

export default { id: 24, label: "L24", formula: "L = {w ∈ {0,1}* / w tem tamanho 3}",                                desc: "",                                                                 shortestWord: "000",      regex: /^[01]{3}$/,                                                 alphabet: ['0', '1'],             acceptedWords: ["000","011","101"],         rejectedWords: ["λ","00","0000"],       hint: "Você precisa de um caminho reto que só aceita na terceira etapa.",                                                  successMsg: "Controle de tamanho exato.",
    tutorials: {
      onStart: { type: 'theory', title: 'Caminho de Comprimento Exato!', dialog: [
        'L24: aceitar APENAS palavras com exatamente 3 símbolos — nem mais, nem menos.',
        '"000", "101", "010" — válidas. "00" (curto), "0000" (longo) — inválidas.',
        'Estratégia: 4 estados em linha — um por posição lida. Só o 4° é final.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho de 3 Passos', dialog: [
        'Trilho linear: <b>q0</b>→<b>q1</b>→<b>q2</b>→<b>q3</b>(final). Cada seta aceita {0,1}.',
        'Após q3, não há transições — qualquer símbolo extra vai para o dead-state implícito.',
        '"0000": lê 4° símbolo em q3, sem seta → rejeição automática. Sem estado extra!',
      ] },
    },
    boardWords: ['000', '00', '101', '0000'],
    guidedLesson: buildLessonL24() };
