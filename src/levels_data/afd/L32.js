import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0: [4, 15], q1: [20, 5], q2: [25, 15], q3: [20, 25],
    q4: [55, 5], q5: [40, 15], q6: [55, 25], q7: [70, 15],
  };

function buildLessonL32() {
  const b = makeBuilder(LEVEL_GRAPHS[32], LAYOUT);
  const steps = [];
  b.addNodes('q0');
  steps.push(b.draw('λ tem 0 de cada símbolo (tudo par): q0 é inicial+final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1', 'q2', 'q4')
   .addEdges(['q0', '0', 'q1'], ['q1', '0', 'q0'], ['q0', '1', 'q2'], ['q2', '1', 'q0'],
             ['q1', '1', 'q4'], ['q4', '1', 'q1'], ['q2', '0', 'q4'], ['q4', '0', 'q2']);
  steps.push(b.draw('Quadrado das paridades de 0 e 1: cada "0" troca a paridade dos 0s, cada "1" a dos 1s.', 1));
  steps.push(b.test('"0011" tem 0s e 1s pares: volta a q0 (final). Aceita!', '0011', 1));
  steps.push(b.reject('Mas "0" deixa os 0s ímpares: termina em q1, que NÃO é final!', '0', 1));
  b.addNodes('q3', 'q5', 'q6', 'q7')
   .addEdges(['q0', '2', 'q3'], ['q3', '2', 'q0'], ['q1', '2', 'q5'], ['q5', '2', 'q1'],
             ['q2', '2', 'q6'], ['q6', '2', 'q2'], ['q4', '2', 'q7'], ['q7', '2', 'q4'],
             ['q3', '0', 'q5'], ['q5', '0', 'q3'], ['q3', '1', 'q6'], ['q6', '1', 'q3'],
             ['q5', '1', 'q7'], ['q7', '1', 'q5'], ['q6', '0', 'q7'], ['q7', '0', 'q6']);
  steps.push(b.draw('Adicionamos o símbolo "2": cubo completo com 8 estados.', 2));
  steps.push(b.test('"001122" tem 0s, 1s e 2s pares: volta a q0 (final). Aceita!', '001122', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 32, layout: LAYOUT, label: "L32", formula: "L = {w ∈ {0,1,2}* / w tem número par de 0's, 1's e 2's}",          desc: "",                                                                 shortestWord: "",         regex: /^.*$/, validate: w => ['0','1','2'].every(c => [...w].filter(x=>x===c).length%2===0), alphabet: ['0', '1', '2'],        acceptedWords: ["λ","0011","001122"],      rejectedWords: ["0","1","012"],         hint: "Paridade tripla! Vai precisar de estados para todas as combinações de par/ímpar.",                                  successMsg: "Autômato massivo concluído.",
    tutorials: {
      onStart: { type: 'theory', title: 'Explosão de Estados — 2³ = 8!', dialog: [
        'Paridade tripla simultânea: par/ímpar de 0s, de 1s e de 2s — totalmente independentes.',
        'Cada combinação possível exige seu próprio estado: 2³ = 8 estados no total!',
        'Só o estado (par-0, par-1, par-2) é final. Os outros 7 são não-finais.',
        'Princípio geral: N paridades independentes → 2^N estados no AFD mínimo.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Cubo de Paridade 3D', dialog: [
        'Cada estado = vetor (par_0, par_1, par_2). q0=(0,0,0) é o único final.',
        'Ler 0 inverte bit-0, ler 1 inverte bit-1, ler 2 inverte bit-2.',
        'O autômato forma um cubo: 8 vértices, cada aresta troca exatamente um bit.',
      ] },
    },
    boardWords: ['', '0011', '0', '001122'],
    guidedLesson: buildLessonL32() };
