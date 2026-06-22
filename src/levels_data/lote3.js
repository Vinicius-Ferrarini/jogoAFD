import { LEVEL_GRAPHS } from '../levels_graphs.js';
import { makeBuilder } from './lessonBuilder.js';

// ─── Modo Aula dos níveis avançados (L56+) — desconstrução didática ──────────
// Usa o helper compartilhado makeBuilder (ver lessonBuilder.js). Metodologia:
// Caminho da Menor Palavra → Laços/Quantificadores → Ramificações → grafo
// completo (que alimenta a fase FORMAL auto-derivada).

// L40 (id41) — {a^n b^2m d c^3p d | n,m,p ≥ 0} — a* ANTES de (bb)*, c em TRIOS — menor: "dd"
function buildLessonL41() {
  const b = makeBuilder(LEVEL_GRAPHS[41], {
    q0: [10, 50], q1: [10, 16], qe: [34, 16], q2: [50, 55], q3: [44, 86], q4: [72, 86], q5: [90, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q2', 'q5').addEdges(['q0', 'd', 'q2'], ['q2', 'd', 'q5']);
  steps.push(b.draw('Menor palavra "dd": o "d" ponte (q0→q2) e o "d" final (q2→q5, final).', -1));
  steps.push(b.test('Veja "dd" chegar a q5 (final). Aceita!', 'dd', 0));
  steps.push(b.reject('Mas "d" sozinho para em q2, que NÃO é final (falta fechar com o 2º "d")!', 'd', 0));
  b.addNodes('q1', 'qe')
   .addEdges(['q0', 'a', 'q0'], ['q0', 'b', 'q1'], ['q1', 'b', 'qe'], ['qe', 'b', 'q1'], ['qe', 'd', 'q2']);
  steps.push(b.draw('Laço de "a" e o par "bb" (q1↔qe). A ponte "d" só sai do estado "b par" (qe, ou q0 com 0 "b") — e depois de um "b" NÃO se volta para "a".', 1));
  steps.push(b.test('"abbdd" usa um "a" e um par "bb": q0→q1→qe→q2→q5 (final). Aceita!', 'abbdd', 1));
  b.addNodes('q3', 'q4').addEdges(['q2', 'c', 'q3'], ['q3', 'c', 'q4'], ['q4', 'c', 'q2']);
  steps.push(b.draw('E o ciclo de TRIOS "ccc" (q2→q3→q4→q2) entre os dois "d".', 2));
  steps.push(b.test('"adcccd" usa um trio "ccc" entre os "d": q0→q2→q3→q4→q2→q5 (final). Aceita!', 'adcccd', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L41 (id42) — {a(dcb)^n a^m (bb)^p | n>0, m>0, p≥0} — exige ≥1 ciclo dcb — menor: "adcba"
function buildLessonL42() {
  const b = makeBuilder(LEVEL_GRAPHS[42], {
    q0: [8, 45], q1: [26, 28], q2: [18, 80], q3: [46, 80], q4: [48, 45], q5: [72, 45], q6: [90, 75],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4', 'q5')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'd', 'q2'], ['q2', 'c', 'q3'], ['q3', 'b', 'q4'], ['q4', 'a', 'q5']);
  steps.push(b.draw('Espinha "adcba": o "a" inicial (q0→q1), o ciclo "dcb" obrigatório (q1→q2→q3→q4) e o "a" final (q4→q5).', -1));
  steps.push(b.test('Veja "adcba" chegar a q5 (final). Aceita!', 'adcba', 0));
  steps.push(b.reject('Mas "adcb" para em q4 sem o "a" de saída: NÃO é final (o ciclo "dcb" precisa ser fechado por um "a")!', 'adcb', 0));
  b.addNodes('q6')
   .addEdges(['q4', 'd', 'q2'], ['q5', 'a', 'q5'], ['q5', 'b', 'q6'], ['q6', 'b', 'q5']);
  steps.push(b.draw('Adicionamos o retorno do ciclo (q4→q2, repetir "dcb"), o laço de "a" e o par "bb" (q5↔q6) no final.', 1));
  steps.push(b.test('"adcbabb" fecha o ciclo, sai pelo "a" e usa um par "bb": ...→q4→q5→q6→q5 (final). Aceita!', 'adcbabb', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L42 (id43) — {a^n b^2m cc d^p | n ímpar} — menor: "acc"
function buildLessonL43() {
  const b = makeBuilder(LEVEL_GRAPHS[43], {
    q0: [8, 45], q1: [28, 45], q2: [30, 78], q3: [52, 78], q4: [58, 45], q5: [84, 45],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q4', 'q5').addEdges(['q0', 'a', 'q1'], ['q1', 'c', 'q4'], ['q4', 'c', 'q5']);
  steps.push(b.draw('Menor palavra "acc": q0—a→q1, depois o "cc" obrigatório (q1→q4→q5, final).', -1));
  steps.push(b.test('Veja "acc" chegar a q5 (final). Aceita!', 'acc', 0));
  steps.push(b.reject('Mas "cc" não tem nenhum "a" (n ímpar ≥ 1): trava logo em q0!', 'cc', 0));
  b.addNodes('q2', 'q3')
   .addEdges(['q1', 'a', 'q0'], ['q1', 'b', 'q2'], ['q2', 'b', 'q3'], ['q3', 'b', 'q2'], ['q3', 'c', 'q4'], ['q5', 'd', 'q5']);
  steps.push(b.draw('Adicionamos o vai-e-volta de "a" (paridade ímpar), o ciclo "bb" e o laço de "d".', 1));
  steps.push(b.test('"aaacc" tem 3 "a"s (ímpar): q0→q1→q0→q1→q4→q5 (final). Aceita!', 'aaacc', 1));
  steps.push(b.test('"abbccdd" usa um par "bb" e dois "d" no fim: fecha em q5 (final). Aceita!', 'abbccdd', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L43 (id44) — {subpalavra 'ab' e sufixo 'cd'} — sufixo "cd" exato — menor: "abcd"
function buildLessonL44() {
  const b = makeBuilder(LEVEL_GRAPHS[44], {
    q0: [10, 50], q1: [32, 50], q2: [54, 50], q3: [74, 50], q4: [90, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4']);
  steps.push(b.draw('Espinha "abcd": acha "ab" (q0→q1→q2) e fecha o sufixo "cd" (q2→q3→q4, final).', -1));
  steps.push(b.test('Veja "abcd" atingir q4 (final). Aceita!', 'abcd', 0));
  steps.push(b.reject('Mas "acd" não tem o "ab": depois do "a" veio "c", trava em q1!', 'acd', 0));
  b.addEdges(['q0', 'b', 'q0'], ['q1', 'a', 'q1'], ['q1', 'c', 'q0'], ['q2', 'a', 'q2'],
             ['q3', 'c', 'q3'], ['q3', 'a', 'q2'], ['q4', 'c', 'q3'], ['q4', 'a', 'q2']);
  steps.push(b.draw('Adicionamos os laços de busca (q0,q1) e os RESETS do sufixo: após "cd" (q4), qualquer outro símbolo volta a rastrear "cd" (q2/q3) — só termina se o ÚLTIMO par for "cd".', 1));
  steps.push(b.test('"aabcd" repete o "a" (laço q1) antes do "ab...cd": q4 (final). Aceita!', 'aabcd', 1));
  steps.push(b.test('"abccd" repete o "c" (laço q3) antes do "d" final: q4 (final). Aceita!', 'abccd', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L44 (id45) — {prefixo 'abcd' e sufixo 'dcba'} — menor: "abcddcba"
function buildLessonL45() {
  const b = makeBuilder(LEVEL_GRAPHS[45], {
    q0: [8, 30], q1: [24, 30], q2: [40, 30], q3: [56, 30], q4: [72, 30],
    q5: [88, 30], q6: [88, 68], q7: [68, 68], q8: [48, 68],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4'],
             ['q4', 'd', 'q5'], ['q5', 'c', 'q6'], ['q6', 'b', 'q7'], ['q7', 'a', 'q8']);
  steps.push(b.draw('Espinha "abcddcba": prefixo "abcd" (q0→q4) e sufixo "dcba" (q4→q8, final).', -1));
  steps.push(b.test('Veja "abcddcba" percorrer prefixo e sufixo até q8 (final). Aceita!', 'abcddcba', 0));
  steps.push(b.reject('Mas "abcd" tem só o prefixo, sem o sufixo "dcba": para em q4, não-final!', 'abcd', 0));
  b.addEdges(['q4', 'a', 'q4'], ['q5', 'd', 'q5']);
  steps.push(b.draw('Adicionamos o miolo livre: laço de q4 ({a,b,c}) e laço de "d" em q5.', 1));
  steps.push(b.test('"abcdadcba" tem um "a" no miolo (laço q4) entre prefixo e sufixo. Aceita!', 'abcdadcba', 1));
  steps.push(b.test('"abcddddcba" usa o laço de "d" em q5 antes do "cba" final. Aceita!', 'abcddddcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L45 (id46) — {pref 'abcd', sub 'cccc', suf 'dcba'} — menor: "abcdccccdcba"
function buildLessonL46() {
  const b = makeBuilder(LEVEL_GRAPHS[46], {
    q0: [8, 30], q1: [22, 30], q2: [36, 30], q3: [50, 30], q4: [64, 30], q5: [78, 30],
    q6: [92, 30], q7: [92, 70], q8: [76, 70], q9: [60, 70], q10: [44, 70], q11: [28, 70],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'b', 'q2'], ['q2', 'c', 'q3'], ['q3', 'd', 'q4'],
             ['q4', 'c', 'q5'], ['q5', 'c', 'q6'], ['q6', 'c', 'q7'], ['q7', 'c', 'q8'],
             ['q8', 'd', 'q9'], ['q9', 'c', 'q10'], ['q10', 'b', 'q11'], ['q11', 'a', 'q11']);
  steps.push(b.draw('Espinha "abcdccccdcba": prefixo abcd, o bloco cccc e o sufixo dcba (q11 final).', -1));
  steps.push(b.test('Veja "abcdccccdcba" percorrer tudo até q11 (final). Aceita!', 'abcdccccdcba', 0));
  steps.push(b.reject('Mas "abcddcba" tem prefixo e sufixo, sem o "cccc": trava em q4!', 'abcddcba', 0));
  b.addEdges(['q4', 'a', 'q4'], ['q8', 'a', 'q8']);
  steps.push(b.draw('Adicionamos os miolos livres: laços de q4 ({a,b,d}) e q8 ({a,b,c}).', 1));
  steps.push(b.test('"abcdaccccdcba" insere um "a" no miolo (laço q4) e ainda fecha. Aceita!', 'abcdaccccdcba', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L46 (id47) — {par de a, b e c} — cubo de paridade, ppp final — menor: λ
function buildLessonL47() {
  const b = makeBuilder(LEVEL_GRAPHS[47], {
    ppp: [15, 28], pip: [38, 28], ipp: [15, 72], iip: [38, 72],
    ppi: [62, 28], pii: [85, 28], ipi: [62, 72], iii: [85, 72],
  });
  const steps = [];
  b.addNodes('ppp');
  steps.push(b.draw('λ tem 0 de cada símbolo (tudo par): ppp é inicial+final.', -1));
  steps.push(b.test('Veja λ ser aceita parada em ppp (final).', '', 0));
  b.addNodes('pip', 'ipp', 'iip')
   .addEdges(['ppp', 'a', 'ipp'], ['ipp', 'a', 'ppp'], ['pip', 'a', 'iip'], ['iip', 'a', 'pip'],
             ['ppp', 'b', 'pip'], ['pip', 'b', 'ppp'], ['ipp', 'b', 'iip'], ['iip', 'b', 'ipp']);
  steps.push(b.draw('Quadrado das paridades de a e b (cada símbolo troca uma paridade).', 1));
  steps.push(b.test('"aabb" zera as paridades de a e b: volta a ppp (final). Aceita!', 'aabb', 1));
  steps.push(b.reject('Mas "a" deixa os "a" ímpares: termina em ipp, que NÃO é final!', 'a', 1));
  b.addNodes('ppi', 'pii', 'ipi', 'iii')
   .addEdges(['ppp', 'c', 'ppi'], ['ppi', 'c', 'ppp'], ['ipp', 'c', 'ipi'], ['ipi', 'c', 'ipp'],
             ['pip', 'c', 'pii'], ['pii', 'c', 'pip'], ['iip', 'c', 'iii'], ['iii', 'c', 'iip'],
             ['ppi', 'a', 'ipi'], ['ipi', 'a', 'ppi'], ['pii', 'a', 'iii'], ['iii', 'a', 'pii'],
             ['ppi', 'b', 'pii'], ['pii', 'b', 'ppi'], ['ipi', 'b', 'iii'], ['iii', 'b', 'ipi']);
  steps.push(b.draw('Duplicamos o quadrado para "c": vira um cubo de 8 estados.', 2));
  steps.push(b.test('"aabbcc" zera as três paridades: volta a ppp (final). Aceita!', 'aabbcc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L47 (id48, revisão L40) — {a^n b^2m d c^3p d} — a* ANTES de (bb)*, c em TRIOS — menor: "dd"
function buildLessonL48() {
  const b = makeBuilder(LEVEL_GRAPHS[48], {
    q0: [10, 50], q1: [10, 16], qe: [34, 16], q2: [50, 55], q3: [44, 86], q4: [72, 86], q5: [90, 50],
  });
  const steps = [];
  b.addNodes('q0', 'q2', 'q5').addEdges(['q0', 'd', 'q2'], ['q2', 'd', 'q5']);
  steps.push(b.draw('Menor palavra "dd": o "d" ponte (q0→q2) e o "d" final (q2→q5, final).', -1));
  steps.push(b.test('Veja "dd" chegar a q5 (final). Aceita!', 'dd', 0));
  steps.push(b.reject('Mas "d" sozinho para em q2, que NÃO é final (falta o 2º "d")!', 'd', 0));
  b.addNodes('q1', 'qe')
   .addEdges(['q0', 'a', 'q0'], ['q0', 'b', 'q1'], ['q1', 'b', 'qe'], ['qe', 'b', 'q1'], ['qe', 'd', 'q2']);
  steps.push(b.draw('Laço de "a" e o par "bb" (q1↔qe). A ponte "d" só sai do estado "b par" (qe, ou q0 com 0 "b") — depois de um "b" NÃO se volta para "a".', 1));
  steps.push(b.test('"abbdd" usa um "a" e um par "bb": q0→q1→qe→q2→q5 (final). Aceita!', 'abbdd', 1));
  b.addNodes('q3', 'q4').addEdges(['q2', 'c', 'q3'], ['q3', 'c', 'q4'], ['q4', 'c', 'q2']);
  steps.push(b.draw('E o ciclo de TRIOS "ccc" (q2→q3→q4→q2) entre os dois "d".', 2));
  steps.push(b.test('"adcccd" usa um trio "ccc": q0→q2→q3→q4→q2→q5 (final). Aceita!', 'adcccd', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L48 (id49) — {zeros pares e uns ímpares} — menor: "1"
function buildLessonL49() {
  const b = makeBuilder(LEVEL_GRAPHS[49], { pp: [28, 25], pi: [72, 25], ip: [28, 78], ii: [72, 78] });
  const steps = [];
  b.addNodes('pp', 'pi').addEdges(['pp', '1', 'pi']);
  steps.push(b.draw('Menor palavra "1" (0 zeros par, 1 um ímpar): pp—1→pi (final).', -1));
  steps.push(b.test('Veja "1" chegar a pi (final). Aceita!', '1', 0));
  b.addNodes('ip', 'ii')
   .addEdges(['pp', '0', 'ip'], ['ip', '0', 'pp'], ['pi', '0', 'ii'], ['ii', '0', 'pi'],
             ['pi', '1', 'pp'], ['ip', '1', 'ii'], ['ii', '1', 'ip']);
  steps.push(b.draw('Completamos o quadrado: "0" troca a paridade dos zeros, "1" a dos uns.', 1));
  steps.push(b.reject('Mas "0" tem 1 zero (ímpar) e 0 uns (par): para em ip, que NÃO é final!', '0', 1));
  steps.push(b.test('"001" tem 2 zeros (par) e 1 um (ímpar): chega a pi (final). Aceita!', '001', 1));
  steps.push(b.test('"11100" tem 3 uns (ímpar) e 2 zeros (par): também fecha em pi. Aceita!', '11100', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L49 (id50) — {a^n a c^m (ab+ba) c a^2p | n≥0, m>0, p>0} — cauda "aa" par — menor: "acabcaa"
function buildLessonL50() {
  const b = makeBuilder(LEVEL_GRAPHS[50], {
    q0: [6, 50], q1: [20, 50], q2: [34, 50], q3: [46, 25], q4: [46, 75],
    q5: [60, 50], q6: [74, 50], q7: [86, 68], q8: [94, 32],
  });
  const steps = [];
  b.addNodes('q0', 'q1', 'q2', 'q3', 'q5', 'q6', 'q7', 'q8')
   .addEdges(['q0', 'a', 'q1'], ['q1', 'c', 'q2'], ['q2', 'a', 'q3'], ['q3', 'b', 'q5'],
             ['q5', 'c', 'q6'], ['q6', 'a', 'q7'], ['q7', 'a', 'q8']);
  steps.push(b.draw('Espinha "acabcaa": a, c, o miolo "ab", c e o par final "aa" (q7→q8 final).', -1));
  steps.push(b.test('Veja "acabcaa" chegar a q8 (final). Aceita!', 'acabcaa', 0));
  steps.push(b.reject('Mas "acabca" tem só 1 "a" no fim: para em q7 (os "a" finais vêm em pares)!', 'acabca', 0));
  b.addNodes('q4')
   .addEdges(['q1', 'a', 'q1'], ['q2', 'c', 'q2'], ['q2', 'b', 'q4'], ['q4', 'a', 'q5'], ['q8', 'a', 'q7']);
  steps.push(b.draw('Adicionamos o miolo alternativo "ba" (q2→q4→q5), o laço de "a" em q1, o laço de "c" em q2 e o par extra de "a" (q8→q7).', 1));
  steps.push(b.test('"acbacaa" usa o miolo "ba": q2→q4→q5→q6→q7→q8 (final). Aceita!', 'acbacaa', 1));
  steps.push(b.test('"accabcaaaa" usa o laço de "c" e dois pares de "a": fecha em q8 (final). Aceita!', 'accabcaaaa', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L50 (id51) — {a^n b^m c^p | n,p>0, m≥0, (n+p) ímpar} — menor: "acc"
function buildLessonL51() {
  const b = makeBuilder(LEVEL_GRAPHS[51], {
    q0: [8, 50], ai: [26, 30], ae: [26, 70], bi: [50, 30], be: [50, 70], ci: [74, 30], ce: [90, 60],
  });
  const steps = [];
  b.addNodes('q0', 'ai', 'ci', 'ce').addEdges(['q0', 'a', 'ai'], ['ai', 'c', 'ci'], ['ci', 'c', 'ce']);
  steps.push(b.draw('Espinha "acc": q0—a→ai, depois os "c" (ai→ci→ce, final).', -1));
  steps.push(b.test('Veja "acc" (n=1, p=2, soma 3 ímpar) chegar a ce (final). Aceita!', 'acc', 0));
  steps.push(b.reject('Mas "ac" tem n+p = 1+1 = 2 (par): para em ci, que NÃO é final!', 'ac', 0));
  b.addNodes('ae', 'bi', 'be')
   .addEdges(['ai', 'a', 'ae'], ['ae', 'a', 'ai'], ['ai', 'b', 'bi'], ['ae', 'b', 'be'],
             ['bi', 'b', 'bi'], ['be', 'b', 'be'], ['ae', 'c', 'ce'], ['bi', 'c', 'ci'],
             ['be', 'c', 'ce'], ['ce', 'c', 'ci']);
  steps.push(b.draw('Adicionamos o vai-e-volta de "a", o bloco de "b" e os caminhos de "c" (paridade de n+p).', 1));
  steps.push(b.test('"aac" tem n=2, p=1 (soma 3 ímpar): q0→ai→ae→ce (final). Aceita!', 'aac', 1));
  steps.push(b.test('"abcc" tem n=1, m=1, p=2 (soma 3 ímpar): q0→ai→bi→ci→ce (final). Aceita!', 'abcc', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L52 (id52) — {a^n b^m c^p | n>0 par, m ímpar, p par} — finais em b ÍMPAR — menor: "aab"
function buildLessonL52() {
  const b = makeBuilder(LEVEL_GRAPHS[52], {
    q0: [8, 50], ao: [24, 30], ae: [40, 50], bo: [56, 30], be: [70, 55], co: [84, 30], ce: [92, 62],
  });
  const steps = [];
  b.addNodes('q0', 'ao', 'ae', 'bo')
   .addEdges(['q0', 'a', 'ao'], ['ao', 'a', 'ae'], ['ae', 'b', 'bo']);
  steps.push(b.draw('Espinha "aab": dois "a" pares (q0→ao→ae) e um "b" ímpar (ae→bo, final).', -1));
  steps.push(b.test('Veja "aab" (2 "a" par, 1 "b" ímpar, 0 "c" par) chegar a bo (final). Aceita!', 'aab', 0));
  b.addNodes('be', 'co', 'ce')
   .addEdges(['ae', 'a', 'ao'], ['bo', 'b', 'be'], ['be', 'b', 'bo'],
             ['bo', 'c', 'co'], ['co', 'c', 'ce'], ['ce', 'c', 'co']);
  steps.push(b.draw('Completamos: vai-e-volta de "a" (ao↔ae), de "b" (bo↔be) e os "c" pares (bo→co→ce). Finais: bo (b ímpar) e ce (b ímpar + c par).', 1));
  steps.push(b.reject('Mas "aabb" tem 2 "b" (par): para em be, que NÃO é final (a quantidade de "b" precisa ser ímpar)!', 'aabb', 1));
  steps.push(b.test('"aabcc" fecha o par de "c": bo→co→ce (final). Aceita!', 'aabcc', 1));
  steps.push(b.test('"aaaabbb" tem 4 "a" (par) e 3 "b" (ímpar): ...→bo→be→bo (final). Aceita!', 'aaaabbb', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L53 (id53) — {cada b é seguido de pelo menos um c} — menor: λ
function buildLessonL53() {
  const b = makeBuilder(LEVEL_GRAPHS[53], { q0: [30, 50], q1: [72, 50] });
  const steps = [];
  b.addNodes('q0').addEdges(['q0', 'a', 'q0']);
  steps.push(b.draw('λ e qualquer "a"/"c": q0 é inicial+final, com laço de {a,c}.', -1));
  steps.push(b.test('Veja λ ser aceita parada em q0 (final).', '', 0));
  b.addNodes('q1').addEdges(['q0', 'b', 'q1'], ['q1', 'c', 'q0']);
  steps.push(b.draw('Um "b" cria a obrigação de um "c": q0→q1, e q1→q0 só com "c".', 1));
  steps.push(b.test('"bc" cumpre a regra (b seguido de c): q0→q1→q0 (final). Aceita!', 'bc', 1));
  steps.push(b.reject('Mas "b" no fim fica sem o "c" obrigatório: termina em q1, não-final!', 'b', 1));
  steps.push(b.test('"abc" intercala e respeita a regra: q0→q0→q1→q0 (final). Aceita!', 'abc', 1));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L54 (id54) — {|a|, |b|, |c| todos ímpares} — cubo de paridade, iii final — menor: "abc"
function buildLessonL54() {
  const b = makeBuilder(LEVEL_GRAPHS[54], {
    ppp: [15, 28], pip: [38, 28], ipp: [15, 72], iip: [38, 72],
    ppi: [62, 28], pii: [85, 28], ipi: [62, 72], iii: [85, 72],
  });
  const steps = [];
  b.addNodes('ppp', 'ipp', 'iip', 'iii')
   .addEdges(['ppp', 'a', 'ipp'], ['ipp', 'b', 'iip'], ['iip', 'c', 'iii']);
  steps.push(b.draw('Espinha "abc": ppp—a→ipp—b→iip—c→iii (final = ímpar/ímpar/ímpar).', -1));
  steps.push(b.test('Veja "abc" atingir iii (final). Aceita!', 'abc', 0));
  steps.push(b.reject('Mas "ab" tem 0 "c" (par): para em iip, que NÃO é final!', 'ab', 0));
  b.addNodes('pip', 'ppi', 'pii', 'ipi')
   .addEdges(['ipp', 'a', 'ppp'], ['pip', 'a', 'iip'], ['iip', 'a', 'pip'], ['ppi', 'a', 'ipi'],
             ['ipi', 'a', 'ppi'], ['pii', 'a', 'iii'], ['iii', 'a', 'pii'],
             ['ppp', 'b', 'pip'], ['pip', 'b', 'ppp'], ['iip', 'b', 'ipp'], ['ppi', 'b', 'pii'],
             ['pii', 'b', 'ppi'], ['ipi', 'b', 'iii'], ['iii', 'b', 'ipi'],
             ['ppp', 'c', 'ppi'], ['ppi', 'c', 'ppp'], ['ipp', 'c', 'ipi'], ['ipi', 'c', 'ipp'],
             ['pip', 'c', 'pii'], ['pii', 'c', 'pip'], ['iip', 'c', 'iii'], ['iii', 'c', 'iip']);
  steps.push(b.draw('Completamos o cubo: cada símbolo inverte a paridade da sua letra.', 2));
  steps.push(b.test('"abccc" tem 1 a, 1 b, 3 c (todos ímpares): volta a iii (final). Aceita!', 'abccc', 2));
  steps.push(b.test('"aaabccc" tem 3 a, 1 b, 3 c (todos ímpares): também fecha em iii. Aceita!', 'aaabccc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L56 — a^(n+3)(bc+cb)(ddd)^m aba e^p a(bc)+ — menor palavra: "aaabcabaabc"
function buildLessonL56() {
  const b = makeBuilder(LEVEL_GRAPHS[56], {
    q0:[6,50], q1:[14,50], q2:[21,50], q3:[29,50], q4:[36,50], q5:[44,50],
    q6:[51,50], q7:[59,50], q8:[67,50], q12:[74,50], q13:[82,50], q14:[90,50],
    q9:[32,22], q10:[40,80], q11:[50,80],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q3','q4','q5','q6','q7','q8','q12','q13','q14')
   .addEdges(['q0','a','q1'],['q1','a','q2'],['q2','a','q3'],['q3','b','q4'],
             ['q4','c','q5'],['q5','a','q6'],['q6','b','q7'],['q7','a','q8'],
             ['q8','a','q12'],['q12','b','q13'],['q13','c','q14']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "aaabcabaabc".', -1));
  steps.push(b.test('Veja como "aaabcabaabc" percorre essa espinha dorsal.', 'aaabcabaabc', 0));
  steps.push(b.reject('Mas "aabcabaabc" tem só dois "a": sem um terceiro, a máquina trava em q2!', 'aabcabaabc', 0));
  b.addEdges(['q3','a','q3'],['q8','e','q8']);
  steps.push(b.draw('Agora os laços para as repetições: a^n (em q3) e e^p (em q8).', 0));
  steps.push(b.test('Com os laços, "aaaabcabaeabc" usa um "a" extra e um "e".', 'aaaabcabaeabc', 0));
  b.addNodes('q9','q10','q11')
   .addEdges(['q3','c','q9'],['q9','b','q5'],['q5','d','q10'],['q10','d','q11'],['q11','d','q5']);
  steps.push(b.draw('E os blocos opcionais: o caminho alternativo "cb" (q9) e o ciclo (ddd).', 1));
  steps.push(b.test('"aaacbdddabaabc" entra pelo "cb" e dá uma volta no ciclo ddd.', 'aaacbdddabaabc', 1));
  b.addEdges(['q14','b','q13']);
  steps.push(b.draw('Por fim, o laço que repete o sufixo (bc)+.', 2));
  steps.push(b.test('"aaabcabaabcbc" repete o bloco "bc" no final.', 'aaabcabaabcbc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L57 — a w a x a, w,x com #b e #c PARES — menor palavra: "aaa"
function buildLessonL57() {
  const b = makeBuilder(LEVEL_GRAPHS[57], {
    q0:[8,55], q1:[28,55], q2:[18,32], q3:[38,32], q4:[28,12],
    q5:[60,55], q6:[50,32], q7:[70,32], q8:[60,12], q9:[90,55],
  });
  const steps = [];
  b.addNodes('q0','q1','q5','q9')
   .addEdges(['q0','a','q1'],['q1','a','q5'],['q5','a','q9']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "aaa".', -1));
  steps.push(b.test('Veja "aaa" percorrer q0→q1→q5→q9.', 'aaa', 0));
  b.addNodes('q2','q3','q4')
   .addEdges(['q1','b','q2'],['q2','b','q1'],['q1','c','q3'],['q3','c','q1'],
             ['q2','c','q4'],['q4','c','q2'],['q3','b','q4'],['q4','b','q3']);
  steps.push(b.draw('Adicionamos o rastreio de paridade do bloco w (par/par volta a q1).', 1));
  steps.push(b.test('"abbaa" tem w="bb" (par/par) e volta a q1 antes do "a" do meio.', 'abbaa', 1));
  steps.push(b.reject('Mas "abaa" tem w="b" (b ÍMPAR): paramos em q2, que não tem saída por "a". Rejeita!', 'abaa', 1));
  steps.push(b.reject('E "acaa" tem w="c" (c ÍMPAR): a máquina morre em q3. Por isso precisamos rastrear a paridade!', 'acaa', 1));
  b.addNodes('q6','q7','q8')
   .addEdges(['q5','b','q6'],['q6','b','q5'],['q5','c','q7'],['q7','c','q5'],
             ['q6','c','q8'],['q8','c','q6'],['q7','b','q8'],['q8','b','q7']);
  steps.push(b.draw('E o mesmo rastreio para o bloco x.', 2));
  steps.push(b.test('"abbabba" exercita os dois blocos, ambos par/par.', 'abbabba', 2));
  steps.push(b.reject('Já "aabaa" tem x="b" (ímpar): agora trava em q6, dentro do bloco x.', 'aabaa', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L58 — b^n a (bcd)^m a b^p c^q e w e^r a^s b^t c^u — menor palavra: "aaceabe"
function buildLessonL58() {
  const b = makeBuilder(LEVEL_GRAPHS[58], {
    q0:[8,48], q1:[19,48], q2:[14,20], q3:[25,20], q4:[31,48], q5:[42,48],
    q6:[53,48], q7:[64,48], q8:[75,48], q9:[86,48],
    q10:[70,80], q11:[80,80], q12:[90,80],
  });
  const steps = [];
  b.addNodes('q0','q1','q4','q5','q6','q7','q8','q9')
   .addEdges(['q0','a','q1'],['q1','a','q4'],['q4','c','q5'],['q5','e','q6'],
             ['q6','a','q7'],['q7','b','q8'],['q8','e','q9']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "aaceabe".', -1));
  steps.push(b.test('Veja como "aaceabe" percorre essa espinha dorsal até q9.', 'aaceabe', 0));
  steps.push(b.reject('Mas "aaeabae" pula o "c" obrigatório (q>0): q4 não tem saída por "e" e trava!', 'aaeabae', 0));
  b.addEdges(['q0','b','q0'],['q4','b','q4'],['q5','c','q5'],['q9','e','q9']);
  steps.push(b.draw('Agora os laços das repetições: b^n, b^p, c^q e e^r.', 0));
  steps.push(b.test('"baabcceabe" usa o "b" inicial, um "b" extra e dois "c".', 'baabcceabe', 0));
  b.addNodes('q2','q3')
   .addEdges(['q1','b','q2'],['q2','c','q3'],['q3','d','q1']);
  steps.push(b.draw('E o bloco opcional complexo: o ciclo (bcd).', 1));
  steps.push(b.test('"abcdaceabe" dá uma volta completa no ciclo bcd.', 'abcdaceabe', 1));
  b.addEdges(['q6','b','q6'],['q6','c','q6'],['q6','d','q6'],['q7','a','q7'],
             ['q7','c','q6'],['q7','d','q6'],['q8','a','q7'],['q8','b','q6'],
             ['q8','c','q6'],['q8','d','q6']);
  steps.push(b.draw('Mapeamos as transições restantes do DFA de sufixo "ab" (voltas de q6, q7, q8).', 1));
  steps.push(b.test('"aaceacabe" quebra e recupera o sufixo: w="acab" termina em "ab".', 'aaceacabe', 1));
  steps.push(b.reject('Já "aaceabcdae" tem w terminando em "da": sem o "b" final, q7 não sai por "e". Trava!', 'aaceabcdae', 1));
  b.addNodes('q10','q11','q12')
   .addEdges(['q9','a','q10'],['q9','b','q11'],['q9','c','q12'],
             ['q10','a','q10'],['q10','b','q11'],['q10','c','q12'],
             ['q11','b','q11'],['q11','c','q12'],['q12','c','q12']);
  steps.push(b.draw('Por fim, a cauda e* a* b* c*.', 2));
  steps.push(b.test('"aaceabeaabbcc" percorre a cauda com a², b² e c².', 'aaceabeaabbcc', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L59 — a* (bb)* c* d* (#b par) — espinha via "bbcd"
function buildLessonL59() {
  const b = makeBuilder(LEVEL_GRAPHS[59], {
    q0:[12,50], q1:[32,50], q2:[52,50], q3:[72,50], q4:[90,50],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q3','q4')
   .addEdges(['q0','b','q1'],['q1','b','q2'],['q2','c','q3'],['q3','d','q4']);
  steps.push(b.draw('Vamos construir o caminho da palavra "bbcd": b em par, depois c, depois d.', -1));
  steps.push(b.test('Veja como "bbcd" percorre essa espinha dorsal.', 'bbcd', 0));
  steps.push(b.reject('Mas "bbb" tem número ímpar de "b": sobra um "b" e a máquina trava em q2!', 'bbb', 0));
  b.addEdges(['q0','a','q0'],['q3','c','q3'],['q4','d','q4']);
  steps.push(b.draw('Agora os laços para as repetições: a*, c* e d*.', 1));
  steps.push(b.test('"aabbccdd" usa os laços de a, c e d (com um par de b).', 'aabbccdd', 1));
  b.addEdges(['q2','b','q1'],['q0','c','q3'],['q0','d','q4'],['q2','d','q4']);
  steps.push(b.draw('E as ramificações: o retorno do par de b e os atalhos para c e d.', 2));
  steps.push(b.test('"bbbb" repete o par de b duas vezes (usa o retorno q2→q1).', 'bbbb', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L60 — a w a x a, w,x com #b e #c ÍMPARES — menor palavra: "abcabca"
function buildLessonL60() {
  const b = makeBuilder(LEVEL_GRAPHS[60], {
    q0:[8,55], q1:[24,55], q2:[16,32], q3:[34,30], q4:[26,80],
    q5:[58,55], q6:[50,32], q7:[66,30], q8:[58,80], q9:[90,55],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q4','q5','q6','q7','q9')
   .addEdges(['q0','a','q1'],['q1','b','q2'],['q2','c','q4'],['q4','a','q5'],
             ['q5','b','q6'],['q6','c','q7'],['q7','a','q9']);
  steps.push(b.draw('Vamos construir o caminho da menor palavra válida: "abcabca".', -1));
  steps.push(b.test('Veja "abcabca" percorrer os dois blocos ímpar/ímpar.', 'abcabca', 0));
  b.addNodes('q3')
   .addEdges(['q1','c','q3'],['q2','b','q1'],['q3','b','q4'],['q3','c','q1'],['q4','b','q3'],['q4','c','q2']);
  steps.push(b.draw('Completamos o rastreio de paridade do bloco w (saída ímpar/ímpar é q4).', 1));
  steps.push(b.test('"acbabca" tem w="cb" (ímpar/ímpar) chegando a q4.', 'acbabca', 1));
  steps.push(b.reject('Mas "ababca" tem w="b" (só b, sem c ímpar): paramos em q2. Precisamos de b E c ímpares!', 'ababca', 1));
  b.addNodes('q8')
   .addEdges(['q5','c','q8'],['q6','b','q5'],['q7','b','q8'],['q7','c','q6'],['q8','b','q7'],['q8','c','q5']);
  steps.push(b.draw('E o mesmo rastreio no bloco x (saída ímpar/ímpar é q7).', 2));
  steps.push(b.test('"abcacba" tem x="cb" (ímpar/ímpar) chegando a q7.', 'abcacba', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

// L61 — binário múltiplo de 6 (autômato mod 6) — espinha via "110"
function buildLessonL61() {
  const b = makeBuilder(LEVEL_GRAPHS[61], {
    q0:[10,50], q1:[28,50], q2:[46,28], q3:[64,28], q4:[46,72], q5:[64,72], q6:[84,50],
  });
  const steps = [];
  b.addNodes('q0','q1','q2','q3')
   .addEdges(['q0','1','q2'],['q2','1','q3'],['q3','0','q1']);
  steps.push(b.draw('Vamos construir o caminho que aceita "110" (valor 6): q0→q2→q3→q1.', -1));
  steps.push(b.test('Veja "110" terminar em q1 (resto 0 = aceita).', '110', 0));
  steps.push(b.reject('Mas "1" termina em q2 (resto 1): não é estado final, então rejeita!', '1', 0));
  b.addEdges(['q0','0','q1'],['q1','0','q1'],['q1','1','q2']);
  steps.push(b.draw('q1 é o resto 0 (aceita): adicionamos seu laço e a entrada por "0".', 1));
  steps.push(b.test('"000" fica no laço de q1 (valor 0, múltiplo de 6).', '000', 1));
  b.addNodes('q4','q5','q6')
   .addEdges(['q2','0','q4'],['q4','0','q5'],['q4','1','q6'],['q3','1','q2'],
             ['q5','0','q4'],['q5','1','q3'],['q6','0','q5'],['q6','1','q6']);
  steps.push(b.draw('Cada estado é um resto mod 6: mapeamos as transições dos restos 2, 4 e 5.', 2));
  steps.push(b.test('"10010" (valor 18) passa pelos restos 2 e 4 e aceita.', '10010', 2));
  steps.push(b.formalIntro('Grafo completo! Agora vamos à Descrição Formal.', 2));
  return steps;
}

export const lote3 = [
  { id: 41, label: "L40", formula: "L = { a^n b^2m d c^3p d | n, m, p ≥ 0 }",                          desc: "",                                                                 shortestWord: "dd",       regex: /^a*(bb)*d(ccc)*d$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dd","abbdd","adcccd"],  rejectedWords: ["d","abd","abcdd"],     hint: "Essa é grande! Blocos de 'b' em duplas, o primeiro 'd' serve de ponte, e 'c' em trios.",                            successMsg: "Sintaxe complexa analisada com sucesso.",
    tutorials: {
      onStart: { type: 'theory', title: 'Blocos: a-block, b-pares, d, c-trios, d!', dialog: [
        'L40: a^n b^2m d c^3p d. a-s, depois b-pares, depois d, depois c-trios, depois d.',
        '"dd" ✓ (0a 0b 0c). "abbdd" ✓ (1a 1par-b). "adcccd" ✓ (1a 1trio-c).',
        '7 estados: q0(ini/a), q1(b-ímpar), qe(b-par), q2(após-d), q3/q4(c-trio), q5(f).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados em Sequencia', dialog: [
        'q0 loop a. q0—b→q1—b→qe (par de b); qe—b→q1 (mais pares).',
        'Ponte "d" só sai do "b par": q0—d→q2 (0 b) e qe—d→q2. q2—d→q5(f).',
        'q2—c→q3—c→q4—c→q2 (trio de c). "adcccd": q0—d→q2—c→q3—c→q4—c→q2—d→q5(f) ✓.',
      ] },
    },
    boardWords: ['dd', 'd', 'abbdd', 'adcccd'],
    guidedLesson: buildLessonL41() },
  { id: 42, label: "L41", formula: "L = { a(dcb)^n a^m (bb)^p | n > 0, m > 0, p ≥ 0 }",               desc: "",                                                                 shortestWord: "adcba",    regex: /^a(dcb)+a+(bb)*$/,                                          alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["adcba","adcbaa","adcbabb"], rejectedWords: ["a","adcb","dcba"],  hint: "Siga a receita passo a passo, o ciclo 'dcb' é o coração do automato.",                                              successMsg: "Ciclo gigante dominado.",
    tutorials: {
      onStart: { type: 'theory', title: 'Ciclo dcb: a + dcb+ + a+ + b-pares!', dialog: [
        'L41: "a", depois 1+ ciclos de "dcb", depois 1+ "a", depois b-pares opcionais.',
        '"adcba" ✓ (1 ciclo, 1a). "adcbaa" ✓ (1 ciclo, 2a). "adcbabb" ✓ (1a, 1par-b).',
        '"a" ✗ (sem dcb). "adcb" ✗ (sem a final). 7 estados em cadeia.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: Cadeia + Ciclo + b-pares', dialog: [
        'q0—a→q1—d→q2—c→q3—b→q4 (ciclo dcb). q4—d→q2 (repetir ciclo).',
        'q4—a→q5(f). q5 loop a. q5—b→q6—b→q5 (pares de b).',
        '"adcbabb": q0→q1→q2→q3→q4→q5—b→q6—b→q5(f) ✓.',
      ] },
    },
    boardWords: ['adcba', 'adcb', 'adcbabb'],
    guidedLesson: buildLessonL42() },
  { id: 43, label: "L42", formula: "L = { a^n b^2m c c d^p | n > 0 (ímpar), m, p ≥ 0 }",              desc: "",                                                                 shortestWord: "acc",      regex: /^a(aa)*(bb)*ccd*$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["acc","aaacc","accdd"],   rejectedWords: ["cc","aacc","abcc"],    hint: "O início exige vai-e-volta ímpar para os 'a's, depois 'b's em duplas.",                                             successMsg: "Paridade e duplas em sequência perfeita.",
    tutorials: {
      onStart: { type: 'theory', title: 'a-ímpar + b-pares + cc + d*!', dialog: [
        'L42: a^n b^2m cc d^p onde n > 0 ímpar, m ≥ 0, p ≥ 0.',
        '"acc" ✓ (1a, 0b). "aaacc" ✓ (3a, 0b). "abbcc" ✓ (1a, 2b). "aacc" ✗ (2a = par!).',
        '6 estados: q0 (start), q1 (odd-a), q2 (even-a), q3 (odd-b), q4 (1ºc), q5 (final).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '6 Estados: Paridade + Cadeia', dialog: [
        'q0—a→q1↔q2(a). q1 = a-ímpar (válido). q2 = a-par (precisa de mais um "a").',
        'q1—c→q4—c→q5(f). q5 loop d. "cc" obrigatório antes dos d\'s.',
        'q1—b→q3—b→q1. Pares de "b" retornam a q1. Ímpar de "b" trava em q3.',
      ] },
    },
    boardWords: ['acc', 'cc', 'aaacc', 'abbccdd'],
    guidedLesson: buildLessonL43() },
  { id: 44, label: "L43", formula: "L = { w ∈ {a,b,c,d}* | subpalavra 'ab' e sufixo 'cd' }",           desc: "",                                                                 shortestWord: "abcd",     regex: /^[abcd]*ab[abcd]*cd$/,                                      alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcd","aabcd","abccd"],  rejectedWords: ["λ","acd","abdc"],      hint: "Ache primeiro o 'ab'. Depois de achar, fique aguardando um 'cd' para finalizar.",                                   successMsg: "Subpalavra + Sufixo resolvido.",
    tutorials: {
      onStart: { type: 'theory', title: 'Subpalavra "ab" + Sufixo "cd"!', dialog: [
        'L43: a palavra deve conter "ab" em algum lugar E terminar com "cd".',
        '"abcd" ✓ (ab subpalavra, cd sufixo). "aabcd" ✓. "abccd" ✓.',
        '"acd" ✗ (sem "ab"). "abdc" ✗ ("ab" ok mas não termina em "cd").',
      ] },
      onDrawGraph: { type: 'mechanic', title: '5 Estados: Detectar + Esperar', dialog: [
        'q0→q1(a): buscando "ab". q1→q2(b): "ab" encontrado! q0 e q1 voltam com c,d.',
        'q2→q3(c): primeiro "c" do sufixo. q3→q4(d): "cd" completo — final!',
        'q2 e q4 loop em a,b,d. q3 loop em c. Mismatches em q0,q1 voltam ao início.',
      ] },
    },
    boardWords: ['abcd', 'acd', 'aabcd', 'abccd'],
    guidedLesson: buildLessonL44() },
  { id: 45, label: "L44", formula: "L = { w ∈ {a,b,c,d}* | prefixo 'abcd' e sufixo 'dcba' }",          desc: "",                                                                 shortestWord: "abcddcba", regex: /^abcd[abcd]*dcba$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcddcba","abcdadcba"],  rejectedWords: ["abcd","dcba","abcdcd"], hint: "Sanduíche de palavras! O começo e o fim são engessados.",                                                           successMsg: "Sanduíche de letras perfeito.",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo "abcd" E sufixo "dcba"!', dialog: [
        'L44: comecar com "abcd" obrigatorio, terminar com "dcba" obrigatorio.',
        '"abcddcba" ✓ (min, sobreposicao). "abcdadcba" ✓ (1a no meio).',
        '"abcd" ✗ (falta sufixo). "dcba" ✗ (falta prefixo). 9 estados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '9 Estados: Prefixo + Sufixo', dialog: [
        'Prefixo: q0—a→q1—b→q2—c→q3—d→q4. Sufixo: q4—d→q5—c→q6—b→q7—a→q8(f).',
        'q4 loop a,b,c. q5 loop d; q5—a,b→q4. q6—a,c→q4; q6—d→q5.',
        'q7—b,c→q4; q7—d→q5. q8—a,b,c→q4; q8—d→q5.',
      ] },
    },
    boardWords: ['abcddcba', 'abcd', 'abcdadcba', 'abcddddcba'],
    guidedLesson: buildLessonL45() },
  { id: 46, label: "L45", formula: "L = { w ∈ {a,b,c,d}* | pref 'abcd', sub 'cccc', suf 'dcba' }",    desc: "",                                                                 shortestWord: "abcdccccdcba", regex: /^abcd[abcd]*cccc[abcd]*dcba$/,                          alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["abcdccccdcba","abcdaccccdcba"], rejectedWords: ["abcddcba","abcdcccdcba","dcba"], hint: "Faça o caminho em três estágios lógicos na sua cabeça.",                                          successMsg: "Você construiu um autômato enorme, meus parabéns!",
    tutorials: {
      onStart: { type: 'theory', title: 'Prefixo abcd + 4c seguidos + sufixo dcba!', dialog: [
        'L45: comecar com "abcd", conter "cccc" em algum lugar, terminar com "dcba".',
        '"abcdccccdcba" ✓ (min). "abcdaccccdcba" ✓ (a no meio). 13 estados!',
        'Tres fases: prefixo fixo → detectar cccc → sufixo fixo.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '13 Estados: Tres Fases', dialog: [
        'Prefixo: q0—a→q1—b→q2—c→q3—d→q4. q4 loop a,b,d; q4—c→q5.',
        'cccc: q5—c→q6—c→q7—c→q8. Mismatch volta a q4. q8 loop a,b,c.',
        'Sufixo: q8—d→q9—c→q10—b→q11—a→q12(f). Mismatches → q8 ou q9.',
      ] },
    },
    boardWords: ['abcdccccdcba', 'abcddcba', 'abcdaccccdcba'],
    guidedLesson: buildLessonL46() },
  { id: 47, label: "L46", formula: "L = { (a+b+c)* | qtd de a, b e c é par }",                          desc: "",                                                                 shortestWord: "",         regex: /^.*$/, validate: w => ['a','b','c'].every(c => [...w].filter(x=>x===c).length%2===0), alphabet: ['a', 'b', 'c'],        acceptedWords: ["λ","aabb","aabbcc"],      rejectedWords: ["a","b","abc"],         hint: "Isso é um cubo mágico de estados! Paridade para 3 letras exige 8 estados.",                                        successMsg: "Paridade em 3D completada!",
    tutorials: {
      onStart: { type: 'theory', title: 'Cubo de paridade: 3 letras, 8 estados!', dialog: [
        'L46: contar a, b e c separadamente. Aceito quando TODOS pares.',
        '"λ" ✓ (0+0+0). "aabb" ✓ (2a,2b,0c). "aabbcc" ✓ (2a,2b,2c). "a" ✗ (1a impar).',
        '8 combinacoes de paridade: 2^3 = 8 estados. Apenas q0(ini,f) aceita.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '8 Estados em Cubo', dialog: [
        'Linhas "a" (vertical): q0↔q1, q2↔q4, q3↔q5, q6↔q7.',
        'Linhas "b" (horizontal): q0↔q2, q1↔q4, q3↔q6, q5↔q7.',
        'Linhas "c" (cruzadas): q0↔q3, q1↔q5, q2↔q6, q4↔q7.',
      ] },
    },
    boardWords: ['', 'aabb', 'a', 'aabbcc'],
    guidedLesson: buildLessonL47() },
  { id: 48, label: "L47", formula: "L = { a^n b^2m d c^3p d | n, m, p ≥ 0 }",                          desc: "(Revisão L40)",                                                    shortestWord: "dd",       regex: /^a*(bb)*d(ccc)*d$/,                                         alphabet: ['a', 'b', 'c', 'd'],   acceptedWords: ["dd","abbdd","adcccd"],  rejectedWords: ["d","abd","abcdd"],     hint: "Se chegou até aqui, já sabe: separe o problema em bloquinhos lógicos.",                                             successMsg: "Revisão bem sucedida.",
    tutorials: {
      onStart: { type: 'theory', title: 'Revisão L40: blocos a, b-pares, d, c-trios, d!', dialog: [
        'L47 e revisão de L40. Mesma linguagem a^n b^2m d c^3p d.',
        '"dd" ✓. "abbdd" ✓. "adcccd" ✓. "d" ✗. "abcdd" ✗.',
        'Relembre os 7 estados: q0(ini/a), q1(b-ímpar), qe(b-par), q2(após-d), q3/q4(c-trio), q5(f).',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Revisao: 7 Estados', dialog: [
        'q0 loop a; q0—b→q1—b→qe; qe—b→q1; ponte só do par: q0—d→q2 e qe—d→q2.',
        'q2—d→q5(f); q2—c→q3—c→q4—c→q2 (trio).',
        'Mesma logica de L40. Voce ja sabe montar isso!',
      ] },
    },
    boardWords: ['dd', 'd', 'abbdd', 'adcccd'],
    guidedLesson: buildLessonL48() },
  { id: 49, label: "L48", formula: "L = { w ∈ {0,1}* | zeros pares e uns ímpares }",                   desc: "",                                                                 shortestWord: "1",        regex: /^.*$/, validate: w => [...w].filter(c=>c==='0').length%2===0 && [...w].filter(c=>c==='1').length%2===1, alphabet: ['0', '1'],             acceptedWords: ["1","001","11100"],        rejectedWords: ["λ","0","01"],          hint: "Parecido com a L38, mas com números. Foque no estado correto de parada.",                                           successMsg: "Paridade binária.",
    tutorials: {
      onStart: { type: 'theory', title: 'Paridade Binária: 0-par e 1-ímpar!', dialog: [
        'L48: contar 0s e 1s separadamente. Aceito quando #0 par E #1 ímpar.',
        '"1" ✓ (0 zeros, 1 um). "001" ✓ (2 zeros, 1 um). "λ" ✗ (0 uns = par).',
        '4 combinações de paridade → 4 estados. Mesmo quadrado da L38 mas com 0 e 1!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '4 Estados em Quadrado Binário', dialog: [
        'q0(ini)=(p0,p1), q1(f)=(p0,í1), q2=(í0,p1), q3=(í0,í1). Só q1 é final.',
        'Ler "1": q0↔q1 e q2↔q3. Ler "0": q0↔q2 e q1↔q3.',
        '"001": q0—0→q2—0→q0—1→q1(f) ✓. "11100": q0→q1→q0→q1—0→q3—0→q1(f) ✓.',
      ] },
    },
    boardWords: ['1', '0', '001', '11100'],
    guidedLesson: buildLessonL49() },
  { id: 50, label: "L49", formula: "L = { a^n a c^m (ab+ba) c a^2p | n ≥ 0, m > 0, p > 0 }",          desc: "",                                                                 shortestWord: "acabcaa",  regex: /^a+c+(ab|ba)c(aa)+$/,                                      alphabet: ['a', 'b', 'c'],        acceptedWords: ["acabcaa","aacabcaa","acbacaa"], rejectedWords: ["a","acabca","ab"], hint: "Na bifurcação no meio, o caminho pode ir por 'ab' ou por 'ba'.",                                                   successMsg: "Expressão bifurcada com sucesso.",
    tutorials: {
      onStart: { type: 'theory', title: 'a+ c+ (ab|ba) c aa+ — bifurcacao!', dialog: [
        'L49: a-s, c-s, depois "ab" OU "ba", depois c, depois pares de a (min 1 par).',
        '"acabcaa" ✓ (ab, 1par-a). "aacabcaa" ✓ (2a). "acbacaa" ✓ (ba).',
        '9 estados: q0-q2 (a/c loops), bifurcacao q3/q4, q5-q8 (cauda).',
      ] },
      onDrawGraph: { type: 'mechanic', title: '9 Estados: Loops + Bifurcacao', dialog: [
        'q0—a→q1 loop a. q1—c→q2 loop c. q2—a→q3—b→q5 (ab). q2—b→q4—a→q5 (ba).',
        'q5—c→q6—a→q7—a→q8(f). q8—a→q7 (mais pares).',
        '"acbacaa": q2—b→q4—a→q5→q6→q7→q8(f) ✓.',
      ] },
    },
    boardWords: ['acabcaa', 'acabca', 'acbacaa', 'accabcaaaa'],
    guidedLesson: buildLessonL50() },
  { id: 51, label: "L50", formula: "L = { a^n b^m c^p | n, p > 0, m ≥ 0 e (n+p) é ímpar }",           desc: "",                                                                 shortestWord: "ac",       regex: /^.*$/, validate: w => /^a+b*c+$/.test(w) && ([...w].filter(c=>c==='a').length + [...w].filter(c=>c==='c').length)%2===1, alphabet: ['a', 'b', 'c'],        acceptedWords: ["acc","aac","abcc"],       rejectedWords: ["ac","aacc","c"],        hint: "Se a quantidade de 'a's for ímpar, os 'c's precisam ser pares, e vice versa.",                                     successMsg: "Paridade correlacionada funcionando!",
    tutorials: {
      onStart: { type: 'theory', title: 'a+ b* c+ com (n+p) impar!', dialog: [
        'L50: a^n b^m c^p. n>0, p>0, m>=0. Mas a quantidade (n+p) tem que ser impar.',
        '"acc" ✓ (1a+2c=3 impar). "aac" ✓ (2a+1c=3). "abcc" ✓ (1a+2c=3).',
        '"ac" ✗ (1+1=2 par). "aacc" ✗ (2+2=4 par). 7 estados: paridade de a e c.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: Paridade a + c', dialog: [
        'q0—a→q1 (impar-a). q1—a→q2 (par-a). q2—a→q1 (ciclo). q1—c→q5, q2—c→q6(f).',
        'b-phase: q1—b→q4(impar), q2—b→q3(par). q3,q4 loop b. q3—c→q6(f), q4—c→q5.',
        'c-phase: q5—c→q6(f). q6—c→q5. "abcc": q1—b→q4—c→q5—c→q6(f) ✓.',
      ] },
    },
    boardWords: ['acc', 'ac', 'aac', 'abcc'],
    guidedLesson: buildLessonL51() },
  { id: 52, label: "L52", formula: "L = { a^n b^m c^p | n > 0 (par), m (ímpar), p (par) }",            desc: "",                                                                 shortestWord: "aab",      regex: /^(aa)+(bb)*b(cc)*$/,                                        alphabet: ['a', 'b', 'c'],        acceptedWords: ["aab","aabcc","aaaabbb"],  rejectedWords: ["ab","aabb","b"],        hint: "É um trem de paridade. Vá de vagão em vagão cuidando da regra de cada letra.",                                     successMsg: "Combo triplo de paridades concluído.",
    tutorials: {
      onStart: { type: 'theory', title: '(aa)+ (bb)*b (cc)*: tres paridades!', dialog: [
        'L52: a-s em quantidade par (>=2), b-s impares (1,3,5...), c-s pares (0,2,4...).',
        '"aab" ✓ (2a,1b,0c). "aabcc" ✓ (2a,1b,2c). "aaaabbb" ✓ (4a,3b,0c).',
        '"ab" ✗ (1a=impar). "aabb" ✗ (2b=par). 7 estados encadeados.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '7 Estados: Trem de Paridade', dialog: [
        'aa-chain: q0—a→q1—a→q2. q2—a→q1 (mais pares). q2—b→q4(f,1b-impar).',
        'b-phase: q4—b→q3(par), q3—b→q4(impar). q4 e final.',
        'c-phase: q4—c→q5—c→q6(f). q6—c→q5. "aaaabbb": q2→q1→q2—b→q4—b→q3—b→q4(f) ✓.',
      ] },
    },
    boardWords: ['aab', 'aabb', 'aabcc', 'aaaabbb'],
    guidedLesson: buildLessonL52() },
  { id: 53, label: "L53", formula: "L = { w ∈ {a,b,c}* | cada b é seguido de pelo menos um c }",       desc: "",                                                                 shortestWord: "",         regex: /^(a|c|bc+)*$/,                                              alphabet: ['a', 'b', 'c'],        acceptedWords: ["λ","a","bc","abc"],       rejectedWords: ["b","ab","bcb"],         hint: "Leu um 'b'? A próxima letra TEM que ser 'c'. Depois tudo fica livre.",                                              successMsg: "Condicional restrita dominada. Zerou a lista!",
    tutorials: {
      onStart: { type: 'theory', title: 'Cada "b" deve ser seguido de "c"!', dialog: [
        'L53: sempre que ler um "b", a próxima letra TEM que ser "c". Senão rejeita.',
        '"bc" ✓ "abc" ✓ "λ" ✓ "a" ✓. "b" ✗ (nenhum c após b). "bcb" ✗ (o 2º b não tem c).',
        'Apenas 2 estados: livre (q0) e esperando-c (q1). Simples mas rigoroso!',
      ] },
      onDrawGraph: { type: 'mechanic', title: '2 Estados: Livre e Esperando-c', dialog: [
        'q0(ini,f): loop a,c. Ler "b" → q1 (modo de espera).',
        'q1: ler "c" → q0 (volta ao livre). Ler "a" ou "b" → morto (sem seta = rejeição).',
        '"abc": q0—a→q0—b→q1—c→q0(f) ✓. "bcb": q0→q1→q0→q1(não-f) ✗.',
      ] },
    },
    boardWords: ['', 'bc', 'b', 'abc'],
    guidedLesson: buildLessonL53() },
  { id: 54, label: "L54", formula: "L = { w ∈ {a,b,c}* | |w|a é ímpar, |w|b é ímpar e |w|c é ímpar }", desc: "",                                                                 shortestWord: "abc",      validate: (w) => { const a = (w.match(/a/g)||[]).length; const b = (w.match(/b/g)||[]).length; const c = (w.match(/c/g)||[]).length; return a%2!==0 && b%2!==0 && c%2!==0; }, alphabet: ['a','b','c'],          acceptedWords: ["abc","abccc","aaabccc"],  rejectedWords: ["","ab","aabc"],         hint: "O cubo oposto ao L46! O único estado aceito é o canto (ímpar, ímpar, ímpar). Cada letra inverte apenas o seu próprio bit de paridade.", successMsg: "Cubo de paridade invertido dominado!",
    tutorials: {
      onStart: { type: 'theory', title: 'Cubo ímpar: 3 letras, 8 estados!', dialog: [
        'L54: contar a, b e c separadamente. Aceito quando TODOS são ímpares.',
        '"abc" ✓ (1a,1b,1c). "abccc" ✓ (1a,1b,3c). "λ" ✗ (todos pares). "ab" ✗ (0c=par).',
        '8 combinações de paridade: 2^3 = 8 estados. Apenas iii (ímpar,ímpar,ímpar) aceita.',
      ] },
      onDrawGraph: { type: 'mechanic', title: '8 Estados em Cubo Ímpar', dialog: [
        'Cada letra inverte apenas o seu bit: "a" → muda 1° bit, "b" → 2°, "c" → 3°.',
        '"a": ppp↔ipp, pip↔iip, ppi↔ipi, pii↔iii.',
        '"b": ppp↔pip, ipp↔iip, ppi↔pii, ipi↔iii. "c": ppp↔ppi, ipp↔ipi, pip↔pii, iip↔iii.',
      ] },
    },
    boardWords: ['abc', 'ab', 'abccc', 'aaabccc'],
    guidedLesson: buildLessonL54() },
  { id: 55, label: "L55", formula: "L = { wxy | w∈{a,b}*, x∈{c,d}*, y∈{e,f}* e cada símbolo tem qtd par }", desc: "", shortestWord: "", validate: (w) => { if (!/^([ab]*)([cd]*)([ef]*)$/.test(w)) return false; const counts = ['a','b','c','d','e','f'].map(ch => (w.match(new RegExp(ch,'g'))||[]).length); return counts.every(c => c%2===0); }, alphabet: ['a','b','c','d','e','f'], acceptedWords: ['','aabb','ccdd','aabbccddeeff','abba'], rejectedWords: ['a','abccdd','ac','ba','c','aabbcde'], hint: "Três seções em ordem! [ab]* depois [cd]* depois [ef]*. Cada par de letras com paridade independente. O AFD completo tem mais de 80 estados!", successMsg: "Mestre das seis paridades!",
    tutorials: {
      onStart: { type: 'theory', title: '6 Letras, 3 Seções, Paridade Total!', dialog: [
        'L55: forma [ab]*[cd]*[ef]* com TODAS as 6 contagens pares.',
        '"λ"✓ "aabb"✓ "ccdd"✓. "a"✗ (a=1 ímpar). "ac"✗ (a=1,c=1). "abccdd"✗ (a=1,b=1).',
        '3 seções ordenadas. Seção ab: 4 estados. Seção cd: 16 (ab-parity × cd). Seção ef: 64. Total: >80!',
      ] },
      onDrawGraph: { type: 'mechanic', title: 'Seção ab (4) + Seção cd (16) + Seção ef (64)', dialog: [
        'Seção ab: q0(ini,f)↔q1(a), q0↔q2(b), q1↔q3(b), q2↔q3(a). Final: só q0.',
        'Ao ler c ou d em qualquer estado ab, entra na seção cd correspondente (sem retorno).',
        'Seção cd: 4 estados por paridade-ab × 4 paridades-cd = 16. Seção ef: mais 64 estados.',
      ] },
    },
    boardWords: ['λ', 'aabb', 'aabbccdd'],
    guidedLesson: [
      { text: '3 seções em ordem: [ab]* → [cd]* → [ef]*. Todos os 6 com qtd par!<br/>Aceitar: <b>λ</b>, <b>aabb</b>, <b>aabbccdd</b>. Rejeitar: a, aab, ccaa.',
        boardDoneUpTo: -1, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Foco em <b>λ</b>: q0 é inicial e final (0 de tudo = todos pares).',
        boardDoneUpTo: 0, stateUpdate: { nodes: [], transitions: [] } },
      { text: 'Solução: q0(ini,final). λ✓. Próxima: "aabb"!',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [ { id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true } ],
          transitions: [] } },
      { text: 'Foco em <b>aabb</b>: seção ab — quadrado de paridade para a e b.',
        boardDoneUpTo: 1, stateUpdate: {
          nodes: [ { id: 'q0', label: 'q0', x: 50, y: 50, isInitial: true, isFinal: true } ],
          transitions: [] } },
      { text: 'Solução: quadrado ab. q0↔q1(a), q0↔q2(b), q1↔q3(b), q2↔q3(a). "aabb"✓. Próxima: "aabbccdd"!',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 35, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 12, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 37, y: 35, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 37, y: 70, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' }, { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q2', to: 'q3', symbol: 'a' }, { from: 'q3', to: 'q2', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' }, { from: 'q2', to: 'q0', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'b' }, { from: 'q3', to: 'q1', symbol: 'b' },
          ] } },
      { text: 'Foco em <b>aabbccdd</b>: q0 lê c/d — entra na seção cd! +4 estados cd (apenas do q0).',
        boardDoneUpTo: 2, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 35, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 12, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 37, y: 35, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 37, y: 70, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' }, { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q2', to: 'q3', symbol: 'a' }, { from: 'q3', to: 'q2', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' }, { from: 'q2', to: 'q0', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'b' }, { from: 'q3', to: 'q1', symbol: 'b' },
          ] } },
      { text: 'Solução parcial: +q4(cd-pares,f), q5(c-ímpar), q6(d-ímpar), q7(c-ímpar,d-ímpar). "aabbccdd"✓ O AFD completo tem >80 estados!',
        boardDoneUpTo: 3, stateUpdate: {
          nodes: [
            { id: 'q0', label: 'q0', x: 12, y: 35, isInitial: true,  isFinal: true  },
            { id: 'q1', label: 'q1', x: 12, y: 70, isInitial: false, isFinal: false },
            { id: 'q2', label: 'q2', x: 37, y: 35, isInitial: false, isFinal: false },
            { id: 'q3', label: 'q3', x: 37, y: 70, isInitial: false, isFinal: false },
            { id: 'q4', label: 'q4', x: 62, y: 35, isInitial: false, isFinal: true  },
            { id: 'q5', label: 'q5', x: 87, y: 35, isInitial: false, isFinal: false },
            { id: 'q6', label: 'q6', x: 62, y: 70, isInitial: false, isFinal: false },
            { id: 'q7', label: 'q7', x: 87, y: 70, isInitial: false, isFinal: false },
          ],
          transitions: [
            { from: 'q0', to: 'q1', symbol: 'a' }, { from: 'q1', to: 'q0', symbol: 'a' },
            { from: 'q2', to: 'q3', symbol: 'a' }, { from: 'q3', to: 'q2', symbol: 'a' },
            { from: 'q0', to: 'q2', symbol: 'b' }, { from: 'q2', to: 'q0', symbol: 'b' },
            { from: 'q1', to: 'q3', symbol: 'b' }, { from: 'q3', to: 'q1', symbol: 'b' },
            { from: 'q0', to: 'q5', symbol: 'c' }, { from: 'q5', to: 'q4', symbol: 'c' }, { from: 'q4', to: 'q5', symbol: 'c' },
            { from: 'q6', to: 'q7', symbol: 'c' }, { from: 'q7', to: 'q6', symbol: 'c' },
            { from: 'q0', to: 'q6', symbol: 'd' }, { from: 'q6', to: 'q4', symbol: 'd' }, { from: 'q4', to: 'q6', symbol: 'd' },
            { from: 'q5', to: 'q7', symbol: 'd' }, { from: 'q7', to: 'q5', symbol: 'd' },
          ] } },
    ] },

  // L56 "trabalho" — exercício extra (roxo). Prefixo a^(n+3) (3 a's no grafo: q0→q1→q2→q3),
  // bifurcação bc|cb, ciclo (ddd)^m, trecho fixo "aba", e^p, conector "a" e (bc)^q com q>0.
  { id: 56, label: "L56", formula: "L = { a^n a a a (bc+cb)(ddd)^m aba e^p a(bc)^q | n,m,p ≥ 0, q > 0 }", desc: "(trabalho)", shortestWord: "aaabcabaabc", regex: /^a{3,}(?:bc|cb)(?:ddd)*abae*a(?:bc)+$/, alphabet: ['a', 'b', 'c', 'd', 'e'], acceptedWords: ["aaabcabaabc","aaaabcabaabc","aaacbabaabc","aaabcdddabaabc","aaabcabaeeabcbc"], rejectedWords: ["aabcabaabc","aaababaabc","aaabcddabaabc","aaabcabaa","aaabcababc"], hint: "Comece com pelo menos três 'a'. Depois bifurque em 'bc' ou 'cb', repita 'ddd' em trios, escreva o miolo fixo 'aba', solte 'e's à vontade e feche com 'a' seguido de pelo menos um 'bc'.", successMsg: "Trabalho concluído — autômato gigante dominado!",
    boardWords: ['aaabcabaabc', 'aabcabaabc', 'aaaabcabaeabc', 'aaacbdddabaabc', 'aaabcabaabcbc'],
    guidedLesson: buildLessonL56(),
  },

  // L57 "trabalho" — paridade dupla em dois blocos: a w a x a, com w,x ∈ {b,c}*
  // tendo #b par e #c par em cada bloco. Caso vazio (w=x=∅) = "aaa" (3 'a's).
  { id: 57, label: "L57", formula: "L = { a w a x a | w,x ∈ {b,c}*, |w|b é par e |w|c é par, |x|b é par e |x|c é par }", desc: "(trabalho)", shortestWord: "aaa",
    validate: (s) => { const m = /^a([bc]*)a([bc]*)a$/.exec(s); if (!m) return false; const even = (t) => (t.match(/b/g)||[]).length%2===0 && (t.match(/c/g)||[]).length%2===0; return even(m[1]) && even(m[2]); },
    alphabet: ['a', 'b', 'c'], acceptedWords: ["aaa","abbaa","aabba","abcbcaa","aabcbca","abbccabbcca"], rejectedWords: ["aabaa","aaaba","aaaa","aaaaaa","acbcaa","bbbaaaaa"], hint: "Estrutura a·w·a·x·a: três 'a's separam dois blocos de b/c. Em cada bloco, a quantidade de 'b' e de 'c' precisa ser PAR. Caso vazio = 'aaa'.", successMsg: "Trabalho concluído — paridade dupla em dois blocos dominada!",
    boardWords: ['aaa', 'abbaa', 'abbabba'],
    guidedLesson: buildLessonL57(),
  },

  // L58 "Boss Final" — b^n a (bcd)^m a b^p c^q e w e^r a^s b^t c^u, q>0, w∈{a,b,c,d}* com sufixo 'ab'.
  // validate = simulação fiel do DFA do grafo (q9..q12 finais). Caso curto = "aaceabe" (w="ab").
  { id: 58, label: "L58", formula: "L = { b^n a (bcd)^m a b^p c^q e w e^r a^s b^t c^u | n,m,p,r,s,t,u ≥ 0, q > 0, w ∈ {a,b,c,d}*, w tem 'ab' como sufixo }", desc: "(trabalho — boss final)", shortestWord: "aaceabe",
    validate: (s) => {
      const delta = {
        q0:{b:'q0',a:'q1'}, q1:{b:'q2',a:'q4'}, q2:{c:'q3'}, q3:{d:'q1'},
        q4:{b:'q4',c:'q5'}, q5:{c:'q5',e:'q6'},
        q6:{b:'q6',c:'q6',d:'q6',a:'q7'}, q7:{a:'q7',c:'q6',d:'q6',b:'q8'},
        q8:{a:'q7',b:'q6',c:'q6',d:'q6',e:'q9'},
        q9:{e:'q9',a:'q10',b:'q11',c:'q12'}, q10:{a:'q10',b:'q11',c:'q12'},
        q11:{b:'q11',c:'q12'}, q12:{c:'q12'},
      };
      const finals = new Set(['q9','q10','q11','q12']);
      let cur = 'q0';
      for (const ch of s) { cur = delta[cur] && delta[cur][ch]; if (!cur) return false; }
      return finals.has(cur);
    },
    alphabet: ['a', 'b', 'c', 'd', 'e'], acceptedWords: ["aaceabe","aaceabea","babcdabbcceabcabeeeaab","aaceabeac"], rejectedWords: ["aaceaba","aacbaabce","aaceabcdae","aaeabae"], hint: "Boss final! Estrutura: b* a (bcd)* a b* c+ — depois 'e', um w que termina em 'ab', outro 'e', e a cauda e* a* b* c*. Cada 'e' separa os blocos; o 'c' antes do primeiro 'e' é obrigatório (q>0).", successMsg: "BOSS FINAL DERROTADO! Você dominou o autômato de 13 estados! 🏆",
    boardWords: ['aaceabe', 'aaeabae', 'baabcceabe', 'abcdaceabe', 'aaceacabe', 'aaceabcdae', 'aaceabeaabbcc'],
    guidedLesson: buildLessonL58(),
  },

  // ── Prova (vermelho) ─────────────────────────────────────────────────────────
  // L59: a^n b^2m c^p d^q (quantidade de 'b' par) = a* (bb)* c* d*
  { id: 59, label: "L59", formula: "L = { a^n b^2m c^p d^q | n,m,p,q ≥ 0 }", desc: "(prova)", shortestWord: "", regex: /^a*(bb)*c*d*$/, alphabet: ['a', 'b', 'c', 'd'], acceptedWords: ["a","bb","abbc","bbdd",""], rejectedWords: ["b","bbb","abbcdb","cba"], hint: "Ordem fixa: a's, depois b's (em quantidade PAR), depois c's, depois d's. Um número ímpar de 'b' rejeita.", successMsg: "Prova L59 resolvida!",
    boardWords: ['bbcd', 'bbb', 'aabbccdd', 'bbbb'],
    guidedLesson: buildLessonL59(),
  },

  // L60: a w a x a, com w,x ∈ {b,c}* tendo #b ÍMPAR e #c ÍMPAR em cada bloco
  { id: 60, label: "L60", formula: "L = { a w a x a | w,x ∈ {b,c}*, |w|b e |w|c ímpares, |x|b e |x|c ímpares }", desc: "(prova)", shortestWord: "abcabca",
    validate: (s) => { const m = /^a([bc]*)a([bc]*)a$/.exec(s); if (!m) return false; const odd = (t) => (t.match(/b/g)||[]).length%2===1 && (t.match(/c/g)||[]).length%2===1; return odd(m[1]) && odd(m[2]); },
    alphabet: ['a', 'b', 'c'], acceptedWords: ["abcabca","abcacba","abbbcabca"], rejectedWords: ["abcaa","aabca","aba","abcabcaa"], hint: "Estrutura a·w·a·x·a (três 'a's, dois blocos de b/c). Em cada bloco a quantidade de 'b' E de 'c' precisa ser ÍMPAR. Menor palavra: 'abcabca'.", successMsg: "Prova L60 resolvida — paridade ímpar dupla!",
    boardWords: ['abcabca', 'acbabca', 'ababca', 'abcacba'],
    guidedLesson: buildLessonL60(),
  },

  // L61: w ∈ {0,1}* | valor binário múltiplo de 6 (autômato mod 6, ignora a palavra vazia)
  { id: 61, label: "L61", formula: "L = { w ∈ {0,1}* | w é múltiplo de 6 }", desc: "(prova)", shortestWord: "0",
    validate: (w) => { if (w === '' || !/^[01]+$/.test(w)) return false; let r = 0; for (const ch of w) r = (r*2 + (ch === '1' ? 1 : 0)) % 6; return r === 0; },
    alphabet: ['0', '1'], acceptedWords: ["0","110","1100","10010"], rejectedWords: ["1","10","101","111"], hint: "Leia da esquerda para a direita acumulando o resto mod 6: a cada bit, resto = (resto×2 + bit) mod 6. Aceita se terminar em resto 0. A palavra vazia não conta.", successMsg: "Prova L61 resolvida — máquina de módulo 6!",
    boardWords: ['110', '1', '000', '10010'],
    guidedLesson: buildLessonL61(),
  },
];
