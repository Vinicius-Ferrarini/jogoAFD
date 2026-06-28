import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL28() {
  const b = makeBuilder(LEVEL_GRAPHS[28], {
    q0: [24, 10], q1: [40, 20], q2: [56, 10],
  });
  const steps = [];
  b.addNodes('q0').addEdges(['q0', '1', 'q0']);
  steps.push(b.draw('λ e qualquer bloco de "1"s: q0 é inicial+final, com laço de "1".', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1', 'q2').addEdges(['q0', '0', 'q1'], ['q1', '1', 'q2'], ['q2', '1', 'q0']);
  steps.push(b.draw('Cada "0" cria uma dívida de DOIS "1"s: q0→q1→q2→q0 (o "011" volta à base).', 1));
  steps.push(b.test('"011" paga a dívida com dois "1"s e volta a q0 (final). Aceita!', '011', 1));
  steps.push(b.reject('"010" lê só um "1" e já vem outro "0": q1 não tem seta para "0" — dead-state!', '010', 1));
  steps.push(b.test('Já "1011" tem o "0" seguido de "11": q0→q0→q1→q2→q0 (final). Aceita!', '1011', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 28, label: "L28", formula: "L = {w ∈ {0,1}* / cada 0 é seguido de, no mínimo, dois 1's}",     desc: "",                                                                 shortestWord: "",         regex: /^(1*011+)*1*$/,                                             alphabet: ['0', '1'],             acceptedWords: ["λ","011","1011"],         rejectedWords: ["0","01","010"],        hint: "Leu um '0'? Então os próximos dois passos OBRIGATORIAMENTE devem ser '1'.",                                         successMsg: "Padrão de segurança estabelecido.",
    tutorials: {
      onStart: { type: 'theory', title: 'Cada 0 Exige Dois 1s!', dialog: [
        'Restrição: todo "0" lido OBRIGA que os próximos dois símbolos sejam "1".',
        '"λ" e "1011" — válidos (1s livres; cada 0 seguido de "11"). "01" — inválido (só um 1).',
        'Estratégia: rastrear a "dívida" — quantos 1s ainda devemos após o último 0.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Estados de Dívida', dialog: [
        '<b>q0</b>(ini,f): sem dívida. <b>q1</b>: deve 2 uns. <b>q2</b>: deve 1 un.',
        '1 em q0: loop. 0 em q0: gera dívida (→q1). 1 em q1: paga parcial (→q2). 1 em q2: quita (→q0).',
        'Novo 0 antes de quitar (q1 sem seta para "0") = violação irrecuperável. Dead-state implícito.',
      ] },
    },
    boardWords: ['', '011', '010', '1011'],
    guidedLesson: buildLessonL28() };
