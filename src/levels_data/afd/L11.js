import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [24, 10], q1: [24, 20], q2: [44, 10], q3: [44, 20],
  };

function buildLessonL11() {
  const b = makeBuilder(LEVEL_GRAPHS[11], LAYOUT);
  const steps = [];
  b.addNodes('q0');
  steps.push(b.draw('A menor palavra é λ (0+0 = par): o estado inicial q0 já é final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (inicial E final).', '', 0));
  b.addNodes('q1').addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q0']);
  steps.push(b.draw('Adicionamos o vai-e-volta q0↔q1 para a paridade dos "a"s.', 1));
  steps.push(b.reject('Mas "a" (1 = ímpar) termina em q1, que NÃO é final!', 'a', 1));
  steps.push(b.test('Já "aa" (2 = par) volta a q0 (final). Aceita!', 'aa', 1));
  b.addNodes('q2', 'q3')
   .addEdges(['q0', 'b', 'q2'], ['q1', 'b', 'q3'], ['q3', 'b', 'q2'], ['q2', 'b', 'q3']);
  steps.push(b.draw('Completamos o quadrado com os "b"s (q2 ímpar e q3 par — final).', 2));
  steps.push(b.reject('"b" sozinho (1 = ímpar) termina em q2, que NÃO é final!', 'b', 2));
  steps.push(b.test('"ab" (1+1 = par) chega a q3 (final). Aceita!', 'ab', 2));
  steps.push(b.test('E "bb" (0+2 = par) também fecha em q3 (final). Aceita!', 'bb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 11, layout: LAYOUT, label: "L11", formula: "L = {aⁿ bᵐ / (n+m) é par, n >= 0, m >= 0}",                         desc: "",                                                                 shortestWord: "",         regex: /^((aa)*(bb)*|a(aa)*b(bb)*)$/,                               alphabet: ['a', 'b'],             acceptedWords: ["λ","aa","ab"],            rejectedWords: ["a","b","aab"],         hint: "A soma é par se ambos forem pares, ou se ambos forem ímpares!",                                                    successMsg: "Lógica matemática aplicada no grafo. Lindo!",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois Casos de Paridade!', dialog: [
        'n + m é par em dois casos: AMBOS pares (0+0, 2+2...) ou AMBOS ímpares (1+1, 3+1...).',
        'Lógica: cada "a" ou "b" lido alterna a paridade do contador parcial correspondente.',
        'Quadrado limpo: 4 estados em grid 2×2. Horizontais com "a", verticais com "b". Zero diagonais!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Quadrado Limpo de Paridade', dialog: [
        'Topo: <b>q0</b>(ini/final)↔<b>q1</b> com "a". Base: <b>q2</b>↔<b>q3</b>(final) com "a" (não há).',
        'Esquerda: <b>q0</b>↔<b>q2</b> com "b". Direita: <b>q1</b>↔<b>q3</b> com "b".',
        'Nenhuma seta diagonal — o quadrado garante clareza visual total!',
      ] },
    },
    boardWords: ['', 'a', 'aa', 'b', 'ab', 'bb'],
    guidedLesson: buildLessonL11() };
