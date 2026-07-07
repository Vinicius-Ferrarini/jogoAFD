import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [4, 15], q1: [22, 15], q2: [40, 15], q3: [56, 15], q4: [74, 15],
  };

function buildLessonL26() {
  const b = makeBuilder(LEVEL_GRAPHS[26], LAYOUT);
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', '0', 'q1'], ['q0', '1', 'q1'], ['q1', '0', 'q2'], ['q1', '1', 'q2'],
             ['q2', '0', 'q3'], ['q2', '1', 'q3'], ['q3', '0', 'q4'], ['q3', '1', 'q4']);
  steps.push(b.draw('Trilho de 4 passos: q0→q1→q2→q3→q4 (final), cada seta lê {0,1}.', -1));
  steps.push(b.test('Veja "0000" (4 símbolos) chegar a q4 (final). Aceita!', '0000', 0));
  steps.push(b.reject('Mas "000" tem só 3 símbolos: para em q3, que NÃO é final!', '000', 0));
  b.addEdges(['q4', '0', 'q4'], ['q4', '1', 'q4']);
  steps.push(b.draw('Adicionamos o laço q4—{0,1}→q4 para palavras mais longas.', 1));
  steps.push(b.test('"01010" tem 5 símbolos: usa o laço de q4 e segue final. Aceita!', '01010', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 26, layout: LAYOUT, label: "L26", formula: "L = {w ∈ {0,1}* / w tem tamanho maior que 3}",                     desc: "",                                                                 shortestWord: "0000",     regex: /^[01]{4,}$/,                                                alphabet: ['0', '1'],             acceptedWords: ["0000","1111","01010"],    rejectedWords: ["λ","0","000"],         hint: "Passe pelos primeiros três estados sem aceitar, depois aceite tudo.",                                                successMsg: "Tamanho mínimo garantido.",
    tutorials: {
      onStart: { type: 'theory', title: 'Tamanho MAIOR que 3!', dialog: [
        'L26: aceitar palavras com 4 ou MAIS símbolos. Rejeitar qualquer coisa menor.',
        '"0000", "1111", "01010" — válidas. "λ", "0", "000" — inválidas (muito curtas).',
        'Estratégia: 4 estados não-finais (q0-q3) formam uma barreira. Só q4 é final.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Trilho de 4 Passos + Loop', dialog: [
        'Trilho: <b>q0</b>(ini)→<b>q1</b>→<b>q2</b>→<b>q3</b>→<b>q4</b>(final) com {0,1}.',
        'Após q4, loop <b>q4→q4</b> aceita palavras mais longas. Sem ele, "00000" travaria!',
        '"000" termina em q3 (não final) → rejeição automática. Posição importa, não conteúdo.',
      ] },
    },
    boardWords: ['0000', '000', '01010'],
    guidedLesson: buildLessonL26() };
