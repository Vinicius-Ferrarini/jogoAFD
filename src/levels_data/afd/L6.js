import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL6() {
  const b = makeBuilder(LEVEL_GRAPHS[6], { q0: [28, 15], q1: [48, 15] });
  const steps = [];
  b.addNodes('q0', 'q1').addEdges(['q0', 'a', 'q1']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra ímpar: "a".', -1));
  steps.push(b.test('Veja "a" (1 = ímpar) chegar a q1 (final). Aceita!', 'a', 0));
  b.addEdges(['q1', 'a', 'q0']);
  steps.push(b.draw('Adicionamos o vai-e-volta q1—a→q0, que rastreia a paridade.', 1));
  steps.push(b.reject('Mas "aa" (2 = par) termina em q0, que NÃO é final. Por isso rastreamos a paridade!', 'aa', 1));
  steps.push(b.test('Já "aaa" (3 = ímpar) volta a q1 (final). Aceita!', 'aaa', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 6,  label: "L06", formula: "L = { a^n | n > 0 e n é ímpar }",                                    desc: "",                                                                 shortestWord: "a",        regex: /^a(aa)*$/,                                                  alphabet: ['a'],                  acceptedWords: ["a","aaa","aaaaa"],         rejectedWords: ["λ","aa","aaaa"],       hint: "Ímpar significa 1, 3, 5... Vai e volta entre dois estados!",                                                        successMsg: "Mecânica de paridade dominada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade: Ímpar vs Par', dialog: [
        'Novo conceito: PARIDADE! 🔢 Ímpar = 1,3,5... Par = 0,2,4...',
        'Para contar comprimento ímpar, use 2 estados alternando a cada "a" lido.',
        'Comece no estado "ímpar" (1 "a" já aceita). Cada novo "a" inverte: ímpar ↔ par!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Mecânica Vai-e-Volta', dialog: [
        'Mecânica VAI-E-VOLTA: dois estados trocam papéis a cada símbolo lido.',
        'q0 (par, inicial, NÃO final) ←→ q1 (ímpar, FINAL). Cada "a" alterna entre eles.',
        'Leu "a": q0→q1 (aceita, comprimento ímpar). Leu mais "a": q1→q0 (rejeita, par). E assim vai!',
      ] },
    },
    boardWords: ['a', 'aa', 'aaa'],
    guidedLesson: buildLessonL6() };
