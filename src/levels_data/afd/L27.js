import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = { q0: [24, 10], q1: [40, 20], q2: [56, 10] };

function buildLessonL27() {
  const b = makeBuilder(LEVEL_GRAPHS[27], LAYOUT);
  const steps = [];
  b.addNodes('q0');
  steps.push(b.draw('λ tem comprimento 0 (múltiplo de 3): q0 é inicial E final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1', 'q2').addEdges(['q0', '0', 'q1'], ['q0', '1', 'q1'], ['q1', '0', 'q2'], ['q1', '1', 'q2'], ['q2', '0', 'q0'], ['q2', '1', 'q0']);
  steps.push(b.draw('Adicionamos o ciclo q0→q1→q2→q0, cada seta lendo {0,1}.', 1));
  steps.push(b.reject('Mas "00" tem 2 símbolos: para em q2 (não-final). Falta fechar o ciclo!', '00', 1));
  steps.push(b.test('Já "000" fecha o ciclo: q0→q1→q2→q0 (final). Aceita!', '000', 1));
  steps.push(b.test('"010101" dá duas voltas completas no ciclo. Aceita!', '010101', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 27, layout: LAYOUT, label: "L27", formula: "L = {w ∈ {0,1}* / w tem tamanho múltiplo de 3}",                   desc: "",                                                                 shortestWord: "",         regex: /^([01]{3})*$/,                                              alphabet: ['0', '1'],             acceptedWords: ["λ","000","010101"],       rejectedWords: ["0","00","0001"],       hint: "Crie um ciclo de 3 passos que volta para o estado final inicial.",                                                   successMsg: "Ciclo matemático de tamanho 3.",
    tutorials: {
      onStart: { type: 'theory', title: 'Contagem Modular — Mod 3!', dialog: [
        'Múltiplo de 3: comprimento ≡ 0 (mod 3). Ou seja, palavras de tamanho 0, 3, 6, 9...',
        'Estratégia: 3 estados formando um ciclo. Cada símbolo avança um passo no ciclo.',
        'q0 (final, mod 0) →(any)→ q1 (mod 1) →(any)→ q2 (mod 2) →(any)→ q0. Elegante!',
        'Esse padrão escala: para "múltiplo de N", use N estados em ciclo.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Ciclo de 3 Estados', dialog: [
        '<b>q0</b>(ini,final) → <b>q1</b> → <b>q2</b> → q0. Cada seta aceita {0,1}.',
        '"λ" aceita em q0. "000": q0→q1→q2→q0 ✔. "00": termina em q2 (não final) ✗.',
        '"0001" (4 símbolos): q0→q1→q2→q0→q1 → rejeitado em q1. O ciclo é exato!',
      ] },
    },
    boardWords: ['', '00', '000', '010101'],
    guidedLesson: buildLessonL27() };
