import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL30() {
  const b = makeBuilder(LEVEL_GRAPHS[30], {
    q0: [4, 13], q1: [24, 8], q2: [44, 8], q3: [24, 20], q4: [52, 20],
  });
  const steps = [];
  b.addNodes('q0');
  steps.push(b.draw('λ não tem nenhuma sequência proibida: q0 é inicial+final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1', 'q3').addEdges(['q0', '0', 'q1'], ['q0', '1', 'q3']);
  steps.push(b.draw('q1 (viu um 0) e q3 (viu um 1), ambos finais.', 1));
  steps.push(b.test('"0" para em q1 (final). Aceita!', '0', 1));
  b.addNodes('q2', 'q4')
   .addEdges(['q1', '0', 'q2'], ['q2', '1', 'q3'], ['q3', '1', 'q4'], ['q4', '0', 'q1']);
  steps.push(b.draw('q2 (dois 0s seguidos) e q4 (dois 1s seguidos) — lendo um 3° igual trava!', 2));
  steps.push(b.reject('"000" tem três 0s: q0→q1→q2 sem seta para "0" — dead-state!', '000', 2));
  steps.push(b.reject('"111" tem três 1s: q0→q3→q4 sem seta para "1" — dead-state!', '111', 2));
  steps.push(b.test('"0011" alterna em pares: q0→q1→q2→q3→q4 (final). Aceita!', '0011', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 30, label: "L30", formula: "L = {w ∈ {0,1}* / w não contém 000 nem 111}",                      desc: "",                                                                 shortestWord: "",         regex: /^(?!.*000)(?!.*111)[01]*$/,                                 alphabet: ['0', '1'],             acceptedWords: ["λ","01","0101"],          rejectedWords: ["000","111","1000"],    hint: "Se 3 zeros ou 3 uns aparecerem, jogue a palavra num estado de erro.",                                                successMsg: "Evitou a bomba tripla!",
    tutorials: {
      onStart: { type: 'theory', title: 'Evitando Subpalavras Proibidas!', dialog: [
        'Novo padrão: NÃO CONTÉM — rejeitar quando uma sequência específica aparecer.',
        'Estratégia: rastrear o "progresso" da sequência proibida com estados intermediários.',
        '"0" visto → alerta. "00" visto → alerta máximo. "000" visto → ARMADILHA irrecuperável!',
        'São duas sequências proibidas independentes (000 e 111), cada uma com sua trilha de estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Duas Trilhas, Dois Limites', dialog: [
        '5 estados todos finais: <b>q0</b>(ini), <b>q1</b>(um 0), <b>q2</b>(dois 0s), <b>q3</b>(um 1), <b>q4</b>(dois 1s).',
        'Cruzamentos: q2—1→q3 e q4—0→q1 (troca de corrida cancela a contagem anterior).',
        'Dead implícito: q2 lê 0 = terceiro zero = 000. q4 lê 1 = terceiro um = 111. Sem seta = rejeitado!',
      ] },
    },
    boardWords: ['', '01', '000', '111', '0011'],
    guidedLesson: buildLessonL30() };
