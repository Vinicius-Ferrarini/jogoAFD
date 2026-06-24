import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL30() {
  const b = makeBuilder(LEVEL_GRAPHS[30], {
    q0: [10, 50], q1: [48, 20], q2: [85, 20], q3: [48, 80], q4: [12, 80],
  });
  const steps = [];
  b.addNodes('q0');
  steps.push(b.draw('λ não tem nenhuma sequência proibida: q0 é inicial+final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1', 'q3').addEdges(['q0', '0', 'q1'], ['q0', '1', 'q3'], ['q1', '1', 'q3'], ['q3', '0', 'q1']);
  steps.push(b.draw('q1 (um 0) e q3 (um 1), ambos finais, alternando 0↔1 sem repetir.', 1));
  steps.push(b.test('"01" alterna sem repetir: q0→q1→q3 (final). Aceita!', '01', 1));
  b.addNodes('q2', 'q4').addEdges(['q1', '0', 'q2'], ['q2', '1', 'q3'], ['q3', '1', 'q4'], ['q4', '0', 'q1']);
  steps.push(b.draw('q2 (dois 0\'s) e q4 (dois 1\'s): um 3º igual seguido não tem saída (armadilha).', 2));
  steps.push(b.reject('"000" tem três 0\'s: q0→q1→q2→ trava (sem saída de "0")!', '000', 2));
  steps.push(b.reject('E "111" tem três 1\'s: q0→q3→q4→ trava (sem saída de "1")!', '111', 2));
  steps.push(b.test('Já "0011" tem só pares: q0→q1→q2→q3→q4 (final). Aceita!', '0011', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 30, label: "L30", formula: "L = { w ∈ {0,1}* | w NÃO contém 000 nem 111 }",                    desc: "",                                                                 shortestWord: "",         regex: /^(?!.*000)(?!.*111)[01]*$/,                                 alphabet: ['0', '1'],             acceptedWords: ["λ","01","0101"],          rejectedWords: ["000","111","1000"],    hint: "Se 3 zeros ou 3 uns aparecerem, jogue a palavra num estado de erro.",                                                successMsg: "Evitou a bomba tripla!",
    tutorials: {
      onStart: { type: 'theory', title: 'Evitando Subpalavras Proibidas!', dialog: [
        'Novo padrão: NÃO CONTÉM — rejeitar quando uma sequência específica aparecer.',
        'Estratégia: rastrear o "progresso" da sequência proibida com estados intermediários.',
        '"0" visto → alerta. "00" visto → alerta máximo. "000" visto → ARMADILHA irrecuperável!',
        'São duas sequências proibidas independentes (000 e 111), cada uma com sua trilha de estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Duas Trilhas, Dois Limites', dialog: [
        '5 estados todos finais: <b>q0</b>(ini), <b>q1</b>(um 0), <b>q2</b>(dois 0s), <b>q3</b>(um 1), <b>q4</b>(dois 1s).',
        'Cruzamentos: q1—1→q3 e q3—0→q1 (troca de corrida cancela a contagem anterior).',
        'Dead implícito: q2 lê 0 = terceiro zero = 000. q4 lê 1 = terceiro um = 111. Sem seta = rejeitado!',
      ] },
    },
    boardWords: ['', '01', '000', '111', '0011'],
    guidedLesson: buildLessonL30() };
