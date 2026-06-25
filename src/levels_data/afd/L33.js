import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL33() {
  const b = makeBuilder(LEVEL_GRAPHS[33], {
    q0: [10, 66], q1: [25, 66], q2: [45, 65], q3: [62, 67],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3').addEdges(['q0', '0', 'q1'], ['q1', '0', 'q2'], ['q2', '1', 'q3']);
  steps.push(b.draw('Prefixo exato "001": trilho q0—0→q1—0→q2—1→q3 (final).', -1));
  steps.push(b.test('Veja "001" percorrer o trilho até q3 (final). Aceita!', '001', 0));
  steps.push(b.reject('Mas "010" erra o 2º símbolo: q1 só lê "0", então trava!', '010', 0));
  b.addEdges(['q3', '0', 'q3'], ['q3', '1', 'q3']);
  steps.push(b.draw('Confirmado o prefixo, q3—{0,1}→q3 absorve qualquer sufixo.', 1));
  steps.push(b.test('"001100" tem o prefixo e o resto livre: fecha em q3 (final). Aceita!', '001100', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 33, label: "L33", formula: "L = {w ∈ {0,1}* / w tem 001 como prefixo}",                         desc: "",                                                                 shortestWord: "001",      regex: /^001[01]*$/,                                                alphabet: ['0', '1'],             acceptedWords: ["001","0011","001100"],    rejectedWords: ["λ","1","010"],         hint: "O começo tem que ser rigorosamente '0' -> '0' -> '1'.",                                                             successMsg: "Prefixo amarrado!",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo Obrigatório: "001"!', dialog: [
        'L33: toda palavra aceita DEVE começar com "001". O resto pode ser qualquer coisa.',
        '"001100" — válida (começa com 001). "010" — inválida (2° símbolo é 1, não 0).',
        'Estratégia: 3 estados de checagem (q0→q1→q2) + estado final q3 com loop.',
        'Qualquer desvio no prefixo cai em dead-state implícito. Sem volta!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho de Prefixo + Loop Final', dialog: [
        'q0—0→q1—0→q2—1→q3(final). Cadeia linear exata para "001".',
        'q3—{0,1}→q3: após confirmar o prefixo, qualquer símbolo é aceito.',
        'Dead implícito: q0—1, q1—1, q2—0 — qualquer desvio rejeita permanentemente.',
      ] },
    },
    boardWords: ['001', '010', '001100'],
    guidedLesson: buildLessonL33() };
