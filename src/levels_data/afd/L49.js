import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

function buildLessonL49() {
  const b = makeBuilder(LEVEL_GRAPHS[49], {
    q0: [30, 34], q1: [51, 33], q2: [30, 65], q3: [52, 67],
  });
  const steps = [];
  b.addNodes('q0', 'q2').addEdges(['q0', '1', 'q2']);
  steps.push(b.draw('Menor palavra "1" (0 zeros par, 1 um ímpar): q0—1→q2 (final).', -1));
  steps.push(b.test('Veja "1" chegar a q2 (final). Aceita!', '1', 0));
  b.addNodes('q1', 'q3')
   .addEdges(['q0', '0', 'q1'], ['q1', '0', 'q0'], ['q2', '0', 'q3'], ['q3', '0', 'q2'],
             ['q2', '1', 'q0'], ['q1', '1', 'q3'], ['q3', '1', 'q1']);
  steps.push(b.draw('Completamos o quadrado: "0" troca a paridade dos zeros, "1" a dos uns.', 1));
  steps.push(b.reject('Mas "0" tem 1 zero (ímpar) e 0 uns (par): para em q1, que NÃO é final!', '0', 1));
  steps.push(b.test('"001" tem 2 zeros (par) e 1 um (ímpar): chega a q2 (final). Aceita!', '001', 1));
  steps.push(b.test('"11100" tem 3 uns (ímpar) e 2 zeros (par): também fecha em q2. Aceita!', '11100', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 1));
  return steps;
}

export default { id: 49, label: "L49", formula: "L = {a^n a c^m (ab+ba) c a^2p / n >= 0, m > 0, p > 0}",            desc: "",                                                                 shortestWord: "1",        regex: /^.*$/, validate: w => [...w].filter(c=>c==='0').length%2===0 && [...w].filter(c=>c==='1').length%2===1, alphabet: ['0', '1'],             acceptedWords: ["1","001","11100"],        rejectedWords: ["λ","0","01"],          hint: "Parecido com a L39, mas com números. Foque no estado correto de parada.",                                           successMsg: "Paridade binária.",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Binária: 0-par e 1-ímpar!', dialog: [
        'L49: contar 0s e 1s separadamente. Aceito quando #0 par E #1 ímpar.',
        '"1" ✓ (0 zeros, 1 um). "001" ✓ (2 zeros, 1 um). "λ" ✗ (0 uns = par).',
        '4 combinações de paridade → 4 estados. Mesmo quadrado da L39 mas com 0 e 1!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '4 Estados em Quadrado Binário', dialog: [
        'q0(ini)=(p0,p1), q2(f)=(p0,í1), q1=(í0,p1), q3=(í0,í1). Só q2 é final.',
        'Ler "1": q0↔q2 e q1↔q3. Ler "0": q0↔q1 e q2↔q3.',
        '"001": q0—0→q1—0→q0—1→q2(f) ✓.',
      ] },
    },
    boardWords: ['1', '0', '001', '11100'],
    guidedLesson: buildLessonL49() };
