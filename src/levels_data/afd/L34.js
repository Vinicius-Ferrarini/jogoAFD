import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL34() {
  const b = makeBuilder(LEVEL_GRAPHS[34], {
    q0: [10, 66], q1: [27, 44], q2: [49, 49], q3: [69, 74], q4: [86, 97],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', '1', 'q1'], ['q1', '0', 'q2'], ['q2', '1', 'q3'], ['q3', '0', 'q4']);
  steps.push(b.draw('Espinha do sufixo "1010": q0→q1→q2→q3→q4 (final).', -1));
  steps.push(b.test('Veja "1010" percorrer a cadeia até q4 (final). Aceita!', '1010', 0));
  steps.push(b.reject('Mas "101" não completou o "1010": para em q3, que NÃO é final!', '101', 0));
  b.addEdges(['q0', '0', 'q0'], ['q1', '1', 'q1'], ['q2', '0', 'q0'],
             ['q3', '1', 'q1'], ['q4', '1', 'q3'], ['q4', '0', 'q0']);
  steps.push(b.draw('Adicionamos os laços e resets para rastrear o melhor sufixo.', 1));
  steps.push(b.test('"01010" tem prefixo livre e termina em "1010": q4 (final). Aceita!', '01010', 1));
  steps.push(b.test('"001010" também termina em "1010" após os zeros iniciais. Aceita!', '001010', 1));
  steps.push(b.test('Sobreposição: "101010" reusa o "10" final via q4—1→q3—0→q4 (final). Aceita!', '101010', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 34, label: "L34", formula: "L = {w ∈ {0,1}* / w tem 1010 como sufixo}",                        desc: "",                                                                 shortestWord: "1010",     regex: /^[01]*1010$/,                                               alphabet: ['0', '1'],             acceptedWords: ["1010","01010","001010"], rejectedWords: ["λ","101","1011"],       hint: "Mantenha a porta aberta para infinitos caracteres, mas só aceite se a 'memória' bater com 1010.",                  successMsg: "Detector de sufixo ativado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Detector de Sufixo "1010"!', dialog: [
        'L34: a palavra termina em "1010". O começo pode ser qualquer coisa!',
        '"01010" — válida (termina em 1010). "1011" — inválida (termina em 1011).',
        'Estratégia: 5 estados rastreiam o melhor sufixo que seja prefixo de "1010".',
        'Ao sair do padrão, backedges resetam para o estado correto — sem perder contexto.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Sufixo com Backedges', dialog: [
        'Cadeia: q0—1→q1—0→q2—1→q3—0→q4(final). Lê "1010" perfeito!',
        'Absorção: q0—0→q0 (0 antes de 1 não ajuda). q1—1→q1 (dois 1s; só o último conta).',
        'Resets: q2—0→q0, q3—1→q0, q4—0→q0. q4—1→q3 (após "1010"+1 → novo "101").',
      ] },
    },
    boardWords: ['1010', '101', '01010', '001010', '101010'],
    guidedLesson: buildLessonL34() };
