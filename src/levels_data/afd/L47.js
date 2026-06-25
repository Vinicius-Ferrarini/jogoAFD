import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL47() {
  const b = makeBuilder(LEVEL_GRAPHS[47], {
    q0: [9, 59], q1: [22, 9], q2: [40, 60], q3: [21, 100], q4: [83, 19], q5: [61, 65], q6: [83, 100], q7: [100, 66],
  });
  const steps = [];
  b.addNodes('q0');
  steps.push(b.draw('λ tem 0 de cada símbolo (tudo par): q0 é inicial+final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1', 'q2', 'q4')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'a', 'q0'], ['q0', 'b', 'q2'], ['q2', 'b', 'q0'],
             ['q1', 'b', 'q4'], ['q4', 'b', 'q1'], ['q2', 'a', 'q4'], ['q4', 'a', 'q2']);
  steps.push(b.draw('Quadrado das paridades de a e b.', 1));
  steps.push(b.test('"aabb" zera as paridades de a e b: volta a q0 (final). Aceita!', 'aabb', 1));
  steps.push(b.reject('Mas "a" deixa os "a" ímpares: termina em q1, que NÃO é final!', 'a', 1));
  b.addNodes('q3', 'q5', 'q6', 'q7')
   .addEdges(['q0', 'c', 'q3'], ['q3', 'c', 'q0'], ['q1', 'c', 'q5'], ['q5', 'c', 'q1'],
             ['q2', 'c', 'q6'], ['q6', 'c', 'q2'], ['q4', 'c', 'q7'], ['q7', 'c', 'q4'],
             ['q3', 'a', 'q5'], ['q5', 'a', 'q3'], ['q3', 'b', 'q6'], ['q6', 'b', 'q3'],
             ['q5', 'b', 'q7'], ['q7', 'b', 'q5'], ['q6', 'a', 'q7'], ['q7', 'a', 'q6']);
  steps.push(b.draw('Duplicamos o quadrado para "c": vira um cubo de 8 estados.', 2));
  steps.push(b.test('"aabbcc" zera as três paridades: volta a q0 (final). Aceita!', 'aabbcc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export default { id: 47, label: "L47", formula: "L = {w ∈ {a,b,c}* / a quantidade de a, b e c é par}",              desc: "",                                                                 shortestWord: "",         regex: /^.*$/, validate: w => ['a','b','c'].every(c => [...w].filter(x=>x===c).length%2===0), alphabet: ['a', 'b', 'c'],        acceptedWords: ["λ","aabb","aabbcc"],      rejectedWords: ["a","b","abc"],         hint: "Isso é um cubo mágico de estados! Paridade para 3 letras exige 8 estados.",                                        successMsg: "Paridade em 3D completada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Cubo de paridade: 3 letras, 8 estados!', dialog: [
        'L47: contar a, b e c separadamente. Aceito quando TODOS pares.',
        '"λ" ✓ (0+0+0). "aabb" ✓ (2a,2b,0c). "aabbcc" ✓ (2a,2b,2c). "a" ✗ (1a impar).',
        '8 combinacoes de paridade: 2^3 = 8 estados. Apenas q0(ini,f) aceita.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '8 Estados em Cubo', dialog: [
        'q0(f)=(p,p,p). "a" inverte bit-a, "b" inverte bit-b, "c" inverte bit-c.',
        'Quadrado base (a,b): q0↔q1(a), q0↔q2(b), q1↔q4(b), q2↔q4(a).',
        'Extensão "c": cada estado do quadrado é conectado ao seu espelho no cubo.',
      ] },
    },
    boardWords: ['', 'aabb', 'a', 'aabbcc'],
    guidedLesson: buildLessonL47() };
