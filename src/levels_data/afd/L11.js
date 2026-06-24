import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL11() {
  const b = makeBuilder(LEVEL_GRAPHS[11], {
    ae: [22, 25], ao: [78, 25], bo: [22, 80], be: [78, 80],
  });
  const steps = [];
  b.addNodes('ae');
  steps.push(b.draw('A menor palavra é λ (0+0 = par): o estado inicial "ae" já é final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em "ae" (inicial E final).', '', 0));
  b.addNodes('ao').addEdges(['ae', 'a', 'ao'], ['ao', 'a', 'ae']);
  steps.push(b.draw('Adicionamos o vai-e-volta ae↔ao para a paridade dos "a"s.', 1));
  steps.push(b.reject('Mas "a" (1 = ímpar) termina em "ao", que NÃO é final!', 'a', 1));
  steps.push(b.test('Já "aa" (2 = par) volta a "ae" (final). Aceita!', 'aa', 1));
  b.addNodes('bo', 'be')
   .addEdges(['ae', 'b', 'bo'], ['ao', 'b', 'be'], ['be', 'b', 'bo'], ['bo', 'b', 'be']);
  steps.push(b.draw('Completamos o quadrado com os "b"s (estados "be" par e "bo" ímpar).', 2));
  steps.push(b.reject('"b" sozinho (1 = ímpar) termina em "bo", que NÃO é final!', 'b', 2));
  steps.push(b.test('"ab" (1+1 = par) chega a "be" (final). Aceita!', 'ab', 2));
  steps.push(b.test('E "bb" (0+2 = par) também fecha em "be" (final). Aceita!', 'bb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 11, label: "L11", formula: "L = { a^n b^m | (n + m) é par e n,m ≥ 0 }",                         desc: "",                                                                 shortestWord: "",         regex: /^((aa)*(bb)*|a(aa)*b(bb)*)$/,                               alphabet: ['a', 'b'],             acceptedWords: ["λ","aa","ab"],            rejectedWords: ["a","b","aab"],         hint: "A soma é par se ambos forem pares, ou se ambos forem ímpares!",                                                    successMsg: "Lógica matemática aplicada no grafo. Lindo!",
    tutorials: {
      onStart: { type: 'theory', title: 'Dois Casos de Paridade!', dialog: [
        'n + m é par em dois casos: AMBOS pares (0+0, 2+2...) ou AMBOS ímpares (1+1, 3+1...).',
        'Lógica: cada "a" ou "b" lido alterna a paridade do contador parcial correspondente.',
        'Quadrado limpo: 4 estados em grid 2×2. Horizontais com "a", verticais com "b". Zero diagonais!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Quadrado Limpo de Paridade', dialog: [
        'Topo: <b>q0</b>(ini/final)↔<b>q1</b> com "a". Base: <b>q2</b>↔<b>q3</b>(final) com "a".',
        'Esquerda: <b>q0</b>↔<b>q2</b> com "b". Direita: <b>q1</b>↔<b>q3</b> com "b".',
        'Nenhuma seta diagonal — o quadrado garante clareza visual total!',
      ] },
    },
    boardWords: ['', 'a', 'aa', 'b', 'ab', 'bb'],
    guidedLesson: buildLessonL11() };
