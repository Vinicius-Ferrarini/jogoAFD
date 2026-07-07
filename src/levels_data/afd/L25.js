import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [24, 15], q1: [47, 15], q2: [68, 15],
  };

function buildLessonL25() {
  const b = makeBuilder(LEVEL_GRAPHS[25], LAYOUT);
  const steps = [];
  b.addNodes('q0');
  steps.push(b.draw('λ tem comprimento 0 (< 3): q0 é inicial E final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1').addEdges(['q0', '0', 'q1'], ['q0', '1', 'q1']);
  steps.push(b.draw('Adicionamos q1 (1 símbolo lido), também final.', 1));
  steps.push(b.test('"0" tem 1 símbolo: q0→q1 (final). Aceita!', '0', 1));
  b.addNodes('q2').addEdges(['q1', '0', 'q2'], ['q1', '1', 'q2']);
  steps.push(b.draw('E q2 (2 símbolos lidos), também final. Mas q2 NÃO tem saída!', 2));
  steps.push(b.test('"10" tem 2 símbolos: q0→q1→q2 (final). Aceita!', '10', 2));
  steps.push(b.reject('Mas "000" tem 3 símbolos: q2 não tem saída e a máquina trava!', '000', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 25, layout: LAYOUT, label: "L25", formula: "L = {w ∈ {0,1}* / w tem tamanho menor que 3}",                      desc: "",                                                                 shortestWord: "",         regex: /^[01]{0,2}$/,                                               alphabet: ['0', '1'],             acceptedWords: ["λ","0","10"],             rejectedWords: ["000","0000","010"],    hint: "Os estados iniciais já podem ser finais, mas pare no terceiro passo.",                                               successMsg: "Tamanho máximo controlado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Comprimento Menor que 3!', dialog: [
        'L25: aceitar palavras com 0, 1 ou 2 símbolos. Rejeitar com 3 ou mais.',
        '"λ", "0", "10" — válidas. "000", "0000" — inválidas (longas demais).',
        'Estratégia: 3 estados finais (q0, q1, q2). Após q2, sem transições — dead-state implícito.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho Curto com Dead-State Implícito', dialog: [
        '<b>q0</b>(ini,f), <b>q1</b>(f), <b>q2</b>(f) — todos finais, aceita em qualquer um.',
        'q0→q1→q2 com {0,1}. Após q2, sem transições — 3° símbolo dispara dead-state implícito.',
        'Dual de L24: aqui o trilho curto aceita, e a ausência de setas rejeita o extra.',
      ] },
    },
    boardWords: ['', '0', '10', '000'],
    guidedLesson: buildLessonL25() };
