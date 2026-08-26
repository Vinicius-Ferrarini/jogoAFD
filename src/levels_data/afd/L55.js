import { LEVEL_GRAPHS } from '../../levels_graphs.js';
import { makeBuilder } from '../lessonBuilder.js';

const LAYOUT = {
    q0:  [ 8, 12], q1:  [8,  3], q2:  [34,  3], q3:  [34,  8],
    q6:  [54, 18], q7:  [54, 13], q4:  [83, 18], q5:  [83, 11],
    q8:  [25, 22], q9:  [50, 22], q10: [25, 28], q11: [50, 28],
  };

function buildLessonL55() {
  // q0=ini+final, q1-q3=seção ab, q4=final cd, q5-q7=seção cd, q8-q9=ef(q4), q10-q11=ef(q0)
  const b = makeBuilder(LEVEL_GRAPHS[55], LAYOUT);
  const steps = [];
  b.addNodes('q0').addEdges();
  steps.push(b.draw('3 seções em ordem: [ab]* → [cd]* → [ef]*. Todos os 6 com qtd par!', -1));
  steps.push(b.test('q0 é inicial e final (0 de tudo = todos pares). λ aceita!', '', 0));
  b.addNodes('q1', 'q2', 'q3').addEdges(
    ['q0', 'a', 'q1'], ['q1', 'a', 'q0'],
    ['q1', 'b', 'q2'], ['q2', 'b', 'q1'],
    ['q2', 'a', 'q3'], ['q3', 'a', 'q2'],
    ['q0', 'b', 'q3'], ['q3', 'b', 'q0'],
  );
  steps.push(b.draw('Seção ab: quadrado de paridade. q0↔q1(a), q0↔q3(b), q1↔q2(b), q2↔q3(a).', 1));
  steps.push(b.test('"aabb": q0→q1→q2→q1→q0 (par,par). Aceita!', 'aabb', 1));
  steps.push(b.reject('"ab": q0→q1→q2 — q2 não é final! Rejeita!', 'ab', 1));
  b.addNodes('q4', 'q5', 'q6', 'q7').addEdges(
    ['q0', 'c', 'q5'],
    ['q5', 'c', 'q4'], ['q4', 'c', 'q5'],
    ['q0', 'd', 'q6'],
    ['q6', 'd', 'q4'], ['q4', 'd', 'q6'],
    ['q5', 'd', 'q7'], ['q7', 'd', 'q5'],
    ['q6', 'c', 'q7'], ['q7', 'c', 'q6'],
  );
  steps.push(b.draw('Seção cd: q0→q5(c)↔q4(c), q0→q6(d)↔q4(d). q4 é final (c e d pares).', 2));
  steps.push(b.test('"aabbccdd": seção ab ok → q0 → seção cd ok → q4 (final). Aceita!', 'aabbccdd', 2));
  steps.push(b.reject('"ccdd": q0→q5(c-ímpar)→q4(cc-par)→q6(d-ímpar)→q4(dd-par). Aceita! Mas "ccd": q0→q5→q4→q6 — q6 não é final. Rejeita!', 'ccd', 2));
  b.addNodes('q8', 'q9', 'q10', 'q11').addEdges(
    ['q0', 'e', 'q9'],
    ['q0', 'f', 'q10'],
    ['q9', 'e', 'q11'], ['q11', 'e', 'q9'],
    ['q10', 'f', 'q11'], ['q11', 'f', 'q10'],
    ['q9', 'f', 'q8'], ['q8', 'f', 'q9'],
    ['q10', 'e', 'q8'], ['q8', 'e', 'q10'],
    ['q4', 'e', 'q10'],
    ['q4', 'f', 'q9'],
  );
  steps.push(b.draw('Seção ef: q0→q9(e)↔q11(e,f), q0→q10(f)↔q11(f,e). q11 é final (e e f pares).', 3));
  steps.push(b.test('"eeff": q0→q9(e-ímpar)→q11(ee-par)→q10(f-ímpar)→q11(ff-par). q11 é final! Aceita!', 'eeff', 3));
  steps.push(b.test('"aabbccdd": seção ab (q0) + cd (q4) + ef via q4. Grafo completo!', 'aabbccdd', 3));
  steps.push(b.formalIntro('12 estados: seção ab (q0-q3), cd (q0+q4-q7), ef (q0/q4+q8-q11). q0,q4,q11 são finais. Agora a Descrição Formal.', 3));
  return steps;
}

export default { id: 55, layout: LAYOUT, label: "L55", formula: "L = { wxy | w∈{a,b}*, x∈{c,d}*, y∈{e,f}* e cada símbolo tem qtd par }", desc: "", shortestWord: "", validate: (w) => { if (!/^([ab]*)([cd]*)([ef]*)$/.test(w)) return false; const counts = ['a','b','c','d','e','f'].map(ch => (w.match(new RegExp(ch,'g'))||[]).length); return counts.every(c => c%2===0); }, fuzzMaxLen: 0, alphabet: ['a','b','c','d','e','f'], acceptedWords: ['','aabb','ccdd','aabbccdd','abba'], rejectedWords: ['a','abccdd','ac','ba','c','aabbcde'], hint: "Três seções: [ab]* [cd]* [ef]*. Paridade independente em cada par. 80+ estados!", successMsg: "Mestre das seis paridades!",
    tutorials: {
      onStart: { type: 'theory', title: '6 Letras, 3 Seções, Paridade Total!', dialog: [
        'L55: forma [ab]*[cd]*[ef]* com TODAS as 6 contagens pares.',
        '"λ"✓ "aabb"✓ "ccdd"✓. "a"✗ (a=1 ímpar). "ac"✗ (a=1,c=1). "abccdd"✗ (a=1,b=1).',
        '3 seções ordenadas. Seção ab: 4 estados. Seção cd: 4 estados. Seção ef: 4 estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Seção ab (q0–q3) + cd (q4–q7) + ef (q8–q11)', dialog: [
        'Seção ab: q0(ini,f)↔q1(a), q0↔q3(b), q1↔q2(b), q2↔q3(a). Final: só q0.',
        'Seção cd: q0→q5(c)↔q4(f,c), q0→q6(d)↔q4(d). q4 é final.',
        'Seção ef: q0→q10(f)↔q11(f,e), q0→q9(e)↔q11(e). q11 é final.',
      ] },
    },
    boardWords: ['λ', 'aabb', 'aabbccdd'],
    guidedLesson: buildLessonL55() };
