import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL32() {
  const b = makeBuilder(LEVEL_GRAPHS[32], {
    ppp: [15, 28], pip: [38, 28], ipp: [15, 72], iip: [38, 72],
    ppi: [62, 28], pii: [85, 28], ipi: [62, 72], iii: [85, 72],
  });
  const steps = [];
  b.addNodes('ppp');
  steps.push(b.draw('λ tem 0 de cada símbolo (tudo par): ppp é inicial+final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em ppp (final).', '', 0));
  b.addNodes('pip', 'ipp', 'iip')
   .addEdges(['ppp', '0', 'ipp'], ['ipp', '0', 'ppp'], ['ppp', '1', 'pip'], ['pip', '1', 'ppp'],
             ['ipp', '1', 'iip'], ['iip', '1', 'ipp'], ['pip', '0', 'iip'], ['iip', '0', 'pip']);
  steps.push(b.draw('Quadrado das paridades de 0 e 1: cada "0" troca a 1ª paridade, cada "1" a 2ª.', 1));
  steps.push(b.test('"0011" tem 0\'s e 1\'s pares: volta a ppp (final). Aceita!', '0011', 1));
  steps.push(b.reject('Mas "0" deixa os 0\'s ímpares: termina em ipp, que NÃO é final!', '0', 1));
  b.addNodes('ppi', 'pii', 'ipi', 'iii')
   .addEdges(['ppp', '2', 'ppi'], ['ppi', '2', 'ppp'], ['ipp', '2', 'ipi'], ['ipi', '2', 'ipp'],
             ['pip', '2', 'pii'], ['pii', '2', 'pip'], ['iip', '2', 'iii'], ['iii', '2', 'iip'],
             ['ppi', '0', 'ipi'], ['ipi', '0', 'ppi'], ['ppi', '1', 'pii'], ['pii', '1', 'ppi'],
             ['ipi', '1', 'iii'], ['iii', '1', 'ipi'], ['pii', '0', 'iii'], ['iii', '0', 'pii']);
  steps.push(b.draw('Duplicamos o quadrado para o símbolo "2": agora é um cubo de 8 estados.', 2));
  steps.push(b.test('"001122" tem 0\'s, 1\'s e 2\'s pares: volta a ppp (final). Aceita!', '001122', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 32, label: "L32", formula: "L = { w ∈ {0,1,2}* | par de 0's, par de 1's e par de 2's }",      desc: "",                                                                 shortestWord: "",         regex: /^.*$/, validate: w => ['0','1','2'].every(c => [...w].filter(x=>x===c).length%2===0), alphabet: ['0', '1', '2'],        acceptedWords: ["λ","0011","001122"],      rejectedWords: ["0","1","012"],         hint: "Paridade tripla! Vai precisar de estados para todas as combinações de par/ímpar.",                                  successMsg: "Autômato massivo concluído.",
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
