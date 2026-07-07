import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [4, 10], q1: [24, 5], q2: [44, 10], q3: [24,20 ],
  };

function buildLessonL31() {
  const b = makeBuilder(LEVEL_GRAPHS[31], LAYOUT);
  const steps = [];
  b.addNodes('q0').addEdges(['q0', '1', 'q0']);
  steps.push(b.draw('λ e qualquer "1": q0 é inicial+final, com laço de "1".', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1', 'q2').addEdges(['q0', '0', 'q1'], ['q1', '1', 'q0'], ['q1', '0', 'q2'], ['q2', '1', 'q0']);
  steps.push(b.draw('q1 (um 0 no fim) e q2 (dois 0\'s), ambos finais; um "1" zera o sufixo.', 1));
  steps.push(b.test('"001" termina em "1": q0→q1→q2→q0 (final). Aceita!', '001', 1));
  b.addNodes('q3').addEdges(['q2', '0', 'q3'], ['q3', '0', 'q3'], ['q3', '1', 'q0']);
  steps.push(b.draw('q3 (não-final) = sufixo "000". Um "1" ainda escapa de volta a q0.', 2));
  steps.push(b.reject('"000" termina em três 0\'s: q0→q1→q2→q3 (não-final). Rejeita!', '000', 2));
  steps.push(b.test('Já "0001" escapa com o "1" final: q3→q0 (final). Aceita!', '0001', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 31, layout: LAYOUT, label: "L31", formula: "L = {w ∈ {0,1}* / os últimos três símbolos não são 000}",  desc: "",                                                                 shortestWord: "",         regex: /^(?!.*000$)[01]*$/,                                         alphabet: ['0', '1'],             acceptedWords: ["λ","1","001"],            rejectedWords: ["000","1000","10000"],  hint: "O final da palavra é o mais importante aqui.",                                                                      successMsg: "Sufixo validado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Sufixo Proibido: "000"!', dialog: [
        'Diferente de L30, L31 só proíbe "000" como SUFIXO — não em qualquer posição.',
        '"1000" é rejeitado (termina em 000). "0001" é ACEITO (não termina em 000)!',
        'Estratégia: rastrear os últimos 3 símbolos. Se forem "000", entrar em estado especial.',
        'Um "1" depois de "000" RESETA o sufixo — o autômato é escapável!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho Reversível de 4 Estados', dialog: [
        '<b>q0</b>(ini,f): sufixo OK. <b>q1</b>(f): último=0. <b>q2</b>(f): últimos=00. <b>q3</b>: últimos=000.',
        '"1" em qualquer estado → q0 (sufixo "1" não ameaça). "0" avança a trilha.',
        'q3 não é final (000 no sufixo). Mas q3—1→q0 permite escapar! "10001": termina em "001" → aceito.',
      ] },
    },
    boardWords: ['', '001', '000', '0001'],
    guidedLesson: buildLessonL31() };
