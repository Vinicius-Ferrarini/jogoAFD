// AFDMinimizer.jsx – Minimização de AFD interativa (v2)
import { useState, useMemo, useCallback, useRef } from 'react';
import './AFDPart1.css';
import './AFDMinimizer.css';
import { SvgStar, SvgStars, DifficultyLegend } from './SvgStar';
import { DIFF_COLOR } from '../../levels';
import imgMaurilioSerio from '../../assets/maurilio1_serio.webp';
import imgBalaoFala     from '../../assets/balao_fala_redondo.webp';

// ─── Exercises ────────────────────────────────────────────────────────────────
const EXERCISES = [
  {
    id: 1, level: 'easy', title: 'Lista Ex. 15',
    desc: 'AFD com 6 estados e alfabeto {a,b}. Estados finais: q2, q3 e q4. Encontre o AFD mínimo.',
    hint: 'Olhe as linhas de q2, q3 e q4 na tabela de transições — elas são idênticas!',
    explanation: 'q2≡q3≡q4 pois têm transições idênticas entre si. q0≡q1 pois ambos vão para o mesmo grupo em cada símbolo. O AFD minimizado tem 3 estados: {q0q1}, {q2q3q4} e {q5}.',
    initial: {
      states: ['q0','q1','q2','q3','q4','q5'],
      alphabet: ['a','b'],
      initialState: 'q0',
      finalStates: ['q2','q3','q4'],
      transitions: [
        {from:'q0',symbol:'a',to:'q1'},{from:'q0',symbol:'b',to:'q2'},
        {from:'q1',symbol:'a',to:'q0'},{from:'q1',symbol:'b',to:'q3'},
        {from:'q2',symbol:'a',to:'q4'},{from:'q2',symbol:'b',to:'q5'},
        {from:'q3',symbol:'a',to:'q4'},{from:'q3',symbol:'b',to:'q5'},
        {from:'q4',symbol:'a',to:'q4'},{from:'q4',symbol:'b',to:'q5'},
        {from:'q5',symbol:'a',to:'q5'},{from:'q5',symbol:'b',to:'q5'},
      ],
    },
  },
  {
    id: 2, level: 'medium', title: 'Lista Ex. 17',
    desc: 'AFD com 6 estados e alfabeto {a,b}. Apenas q2 e q3 são finais (diferente do Ex.15!). Encontre o AFD mínimo.',
    hint: 'Compare as transições de q2 e q3 (finais). Faça o mesmo para q4 e q5 (não-finais).',
    explanation: 'q2≡q3, q0≡q1 e q4≡q5 — três fusões distintas! O AFD minimizado tem 3 estados: {q0q1}, {q2q3} e {q4q5}.',
    initial: {
      states: ['q0','q1','q2','q3','q4','q5'],
      alphabet: ['a','b'],
      initialState: 'q0',
      finalStates: ['q2','q3'],
      transitions: [
        {from:'q0',symbol:'a',to:'q1'},{from:'q0',symbol:'b',to:'q2'},
        {from:'q1',symbol:'a',to:'q0'},{from:'q1',symbol:'b',to:'q3'},
        {from:'q2',symbol:'a',to:'q4'},{from:'q2',symbol:'b',to:'q5'},
        {from:'q3',symbol:'a',to:'q4'},{from:'q3',symbol:'b',to:'q5'},
        {from:'q4',symbol:'a',to:'q4'},{from:'q4',symbol:'b',to:'q5'},
        {from:'q5',symbol:'a',to:'q5'},{from:'q5',symbol:'b',to:'q5'},
      ],
    },
  },
  {
    id: 3, level: 'hard', title: 'Lista Ex. 16',
    desc: 'AFD com alfabeto {a,b,c} e finais q2 e q4. O estado qd é o estado morto (transições ausentes no original). O AFD pode ser minimizado?',
    hint: 'Verifique q2 e q4 (ambos finais): δ(q2,a)=qd mas δ(q4,a)=q4. Eles são distinguíveis!',
    explanation: 'Todos os estados são distinguíveis entre si — este AFD já é mínimo! Nenhum par pode ser fundido. O estado morto qd é indispensável para completar as transições ausentes do original.',
    initial: {
      states: ['q0','q1','q2','q3','q4','qd'],
      alphabet: ['a','b','c'],
      initialState: 'q0',
      finalStates: ['q2','q4'],
      transitions: [
        {from:'q0',symbol:'a',to:'q0'},{from:'q0',symbol:'b',to:'q1'},{from:'q0',symbol:'c',to:'q3'},
        {from:'q1',symbol:'a',to:'qd'},{from:'q1',symbol:'b',to:'q1'},{from:'q1',symbol:'c',to:'q2'},
        {from:'q2',symbol:'a',to:'qd'},{from:'q2',symbol:'b',to:'q3'},{from:'q2',symbol:'c',to:'q2'},
        {from:'q3',symbol:'a',to:'q4'},{from:'q3',symbol:'b',to:'qd'},{from:'q3',symbol:'c',to:'q3'},
        {from:'q4',symbol:'a',to:'q4'},{from:'q4',symbol:'b',to:'q1'},{from:'q4',symbol:'c',to:'qd'},
        {from:'qd',symbol:'a',to:'qd'},{from:'qd',symbol:'b',to:'qd'},{from:'qd',symbol:'c',to:'qd'},
      ],
    },
  },
  {
    id: 4, level: 'easy', title: 'Extra 1 — Comprimento par',
    desc: 'AFD com 4 estados e alfabeto {a,b}. Estados finais: q0 e q3. O AFD aceita strings de comprimento par (incluindo λ). Encontre o AFD mínimo.',
    hint: 'Observe q1 e q2: independente do símbolo lido, ambos levam sempre ao mesmo estado. Eles são distinguíveis entre si?',
    explanation: 'q1≡q2 (ambos não-finais que levam a q3 em qualquer símbolo) e q0≡q3 (ambos finais com transições simétricas). O AFD mínimo tem 2 estados: {q0,q3} e {q1,q2}.',
    initial: {
      states: ['q0','q1','q2','q3'],
      alphabet: ['a','b'],
      initialState: 'q0',
      finalStates: ['q0','q3'],
      transitions: [
        {from:'q0',symbol:'a',to:'q1'},{from:'q0',symbol:'b',to:'q2'},
        {from:'q1',symbol:'a',to:'q3'},{from:'q1',symbol:'b',to:'q3'},
        {from:'q2',symbol:'a',to:'q3'},{from:'q2',symbol:'b',to:'q3'},
        {from:'q3',symbol:'a',to:'q1'},{from:'q3',symbol:'b',to:'q2'},
      ],
    },
  },
  {
    id: 5, level: 'easy', title: 'Extra 2 — Subpalavra "ab"',
    desc: 'AFD com 5 estados e alfabeto {a,b}. Estados finais: q2 e q4. O AFD aceita strings que contêm "ab" como subpalavra. Encontre o AFD mínimo.',
    hint: 'Compare q0 e q3: em qual símbolo eles diferem de comportamento? Compare q2 e q4: é possível sair de algum deles para um estado não-final?',
    explanation: 'q0≡q3 (ainda não leram "ab", comportamento idêntico) e q2≡q4 (estados-armadilha finais — nunca saem da classe final). O AFD mínimo tem 3 estados: {q0,q3}, {q1} e {q2,q4}.',
    initial: {
      states: ['q0','q1','q2','q3','q4'],
      alphabet: ['a','b'],
      initialState: 'q0',
      finalStates: ['q2','q4'],
      transitions: [
        {from:'q0',symbol:'a',to:'q1'},{from:'q0',symbol:'b',to:'q3'},
        {from:'q1',symbol:'a',to:'q1'},{from:'q1',symbol:'b',to:'q2'},
        {from:'q2',symbol:'a',to:'q2'},{from:'q2',symbol:'b',to:'q4'},
        {from:'q3',symbol:'a',to:'q1'},{from:'q3',symbol:'b',to:'q3'},
        {from:'q4',symbol:'a',to:'q4'},{from:'q4',symbol:'b',to:'q4'},
      ],
    },
  },
  {
    id: 6, level: 'medium', title: 'Extra 3 — Zeros múltiplos de 3',
    desc: 'AFD com 6 estados e alfabeto {0,1}. Estados finais: q0 e q1. O AFD aceita strings onde o número de zeros é divisível por 3. Encontre o AFD mínimo.',
    hint: 'Há 3 pares de estados equivalentes escondidos entre 6 estados. Leia o símbolo "1": ele não muda a contagem de zeros — quais pares têm comportamento simétrico sob "1"?',
    explanation: 'q0≡q1 (finais simétricos), q2≡q3 (precisam de 2 zeros a mais), q4≡q5 (precisam de 1 zero a mais). O AFD mínimo tem 3 estados: {q0,q1}, {q2,q3} e {q4,q5}.',
    initial: {
      states: ['q0','q1','q2','q3','q4','q5'],
      alphabet: ['0','1'],
      initialState: 'q0',
      finalStates: ['q0','q1'],
      transitions: [
        {from:'q0',symbol:'0',to:'q2'},{from:'q0',symbol:'1',to:'q1'},
        {from:'q1',symbol:'0',to:'q3'},{from:'q1',symbol:'1',to:'q0'},
        {from:'q2',symbol:'0',to:'q4'},{from:'q2',symbol:'1',to:'q3'},
        {from:'q3',symbol:'0',to:'q5'},{from:'q3',symbol:'1',to:'q2'},
        {from:'q4',symbol:'0',to:'q0'},{from:'q4',symbol:'1',to:'q5'},
        {from:'q5',symbol:'0',to:'q1'},{from:'q5',symbol:'1',to:'q4'},
      ],
    },
  },
  {
    id: 7, level: 'hard', title: 'Extra 4 — Paridade dupla',
    desc: 'AFD com 7 estados e alfabeto {a,b}. Estados finais: q0 e q1. O AFD aceita strings onde o número de \'a\'s É par E o número de \'b\'s É par. Encontre o AFD mínimo.',
    hint: 'Identifique quais estados não-finais chegam a um final lendo \'a\' (par de q2/q3) e quais chegam lendo \'b\' (par de q4/q5). O estado q6 é único — por quê?',
    explanation: 'q0≡q1 (finais), q2≡q3 (→a→final, →b→q6) e q4≡q5 (→a→q6, →b→final). q6 é único (→a→classe01, →b→classe10). O AFD mínimo tem 4 estados: {q0,q1}, {q2,q3}, {q4,q5} e {q6}.',
    initial: {
      states: ['q0','q1','q2','q3','q4','q5','q6'],
      alphabet: ['a','b'],
      initialState: 'q0',
      finalStates: ['q0','q1'],
      transitions: [
        {from:'q0',symbol:'a',to:'q2'},{from:'q0',symbol:'b',to:'q4'},
        {from:'q1',symbol:'a',to:'q3'},{from:'q1',symbol:'b',to:'q5'},
        {from:'q2',symbol:'a',to:'q1'},{from:'q2',symbol:'b',to:'q6'},
        {from:'q3',symbol:'a',to:'q0'},{from:'q3',symbol:'b',to:'q6'},
        {from:'q4',symbol:'a',to:'q6'},{from:'q4',symbol:'b',to:'q0'},
        {from:'q5',symbol:'a',to:'q6'},{from:'q5',symbol:'b',to:'q1'},
        {from:'q6',symbol:'a',to:'q5'},{from:'q6',symbol:'b',to:'q3'},
      ],
    },
  },
  {
    id: 8, level: 'medium', title: 'Gemini Ex. 1 — Dois pares fundidos',
    desc: 'AFD com 6 estados e alfabeto {a,b}. Estados finais: q4 e q5. Dois pares de estados podem ser fundidos. Encontre o AFD mínimo.',
    hint: 'Olhe q2 e q3: ambos vão para finais nos dois símbolos. Agora olhe q4 e q5: para onde vão lendo \'a\' e \'b\'?',
    explanation: 'q2≡q3 (ambos levam a finais em a e b). q4≡q5 (ambos levam para a classe q2q3 em ambos símbolos). q0 e q1 são distinguíveis: q0→a→q2 (classe q2q3), mas q1→a→q1 (própria classe). O AFD mínimo tem 4 estados: {q0}, {q1}, {q2q3}, {q4q5}.',
    initial: {
      states: ['q0','q1','q2','q3','q4','q5'],
      alphabet: ['a','b'],
      initialState: 'q0',
      finalStates: ['q4','q5'],
      transitions: [
        {from:'q0',symbol:'a',to:'q2'},{from:'q0',symbol:'b',to:'q1'},
        {from:'q1',symbol:'a',to:'q1'},{from:'q1',symbol:'b',to:'q0'},
        {from:'q2',symbol:'a',to:'q4'},{from:'q2',symbol:'b',to:'q5'},
        {from:'q3',symbol:'a',to:'q5'},{from:'q3',symbol:'b',to:'q4'},
        {from:'q4',symbol:'a',to:'q3'},{from:'q4',symbol:'b',to:'q2'},
        {from:'q5',symbol:'a',to:'q2'},{from:'q5',symbol:'b',to:'q3'},
      ],
    },
  },
  {
    id: 9, level: 'easy', title: 'Gemini Ex. 2 — Todos os estados finais',
    desc: 'AFD com 3 estados e alfabeto {a,b}. TODOS os estados são finais. O que acontece ao minimizar?',
    hint: 'Se todos os estados são finais, nenhum par pode ser distinguido pela condição "um final e um não-final". Olhe apenas as transições: todos os estados chegam ao mesmo grupo?',
    explanation: 'Como todos são finais, a partição inicial é {q0,q1,q2}. Como todos os estados transitam entre si dentro desse único grupo, nenhum par é distinguível. Todos fundem em 1 único estado — o AFD mínimo tem 1 estado.',
    initial: {
      states: ['q0','q1','q2'],
      alphabet: ['a','b'],
      initialState: 'q0',
      finalStates: ['q0','q1','q2'],
      transitions: [
        {from:'q0',symbol:'a',to:'q2'},{from:'q0',symbol:'b',to:'q1'},
        {from:'q1',symbol:'a',to:'q2'},{from:'q1',symbol:'b',to:'q0'},
        {from:'q2',symbol:'a',to:'q1'},{from:'q2',symbol:'b',to:'q0'},
      ],
    },
  },
  {
    id: 10, level: 'easy', title: 'Gemini Ex. 3 — Dois pares simétricos',
    desc: 'AFD com 5 estados e alfabeto {a,b}. Estados finais: q3 e q4. Encontre o AFD mínimo.',
    hint: 'Separe os não-finais {q0,q1,q2}: q0 vai para não-finais nos dois símbolos — isso o distingue de q1 e q2. Agora compare q1 e q2 entre si.',
    explanation: 'q1≡q2 (ambos vão para não-final em \'a\' e para final em \'b\'). q3≡q4 (ambos vão para a classe q1q2 em \'a\' e para a própria classe em \'b\'). q0 é único. O AFD mínimo tem 3 estados: {q0}, {q1q2}, {q3q4}.',
    initial: {
      states: ['q0','q1','q2','q3','q4'],
      alphabet: ['a','b'],
      initialState: 'q0',
      finalStates: ['q3','q4'],
      transitions: [
        {from:'q0',symbol:'a',to:'q1'},{from:'q0',symbol:'b',to:'q2'},
        {from:'q1',symbol:'a',to:'q2'},{from:'q1',symbol:'b',to:'q3'},
        {from:'q2',symbol:'a',to:'q1'},{from:'q2',symbol:'b',to:'q4'},
        {from:'q3',symbol:'a',to:'q2'},{from:'q3',symbol:'b',to:'q3'},
        {from:'q4',symbol:'a',to:'q1'},{from:'q4',symbol:'b',to:'q4'},
      ],
    },
  },
  {
    id: 11, level: 'medium', title: 'Gemini Ex. 4 — Um único par',
    desc: 'AFD com 6 estados e alfabeto {a,b}. Estados finais: q4 e q5. Apenas um par de estados pode ser fundido. Encontre-o.',
    hint: 'Comece separando não-finais {q0,q1,q2,q3} em subgrupos por destino. q0 e q1 são distinguíveis entre si? E q2 e q3?',
    explanation: 'q2≡q3 (únicos não-finais que levam a finais em ambos símbolos). Todos os outros são distinguíveis entre si: q4 e q5 vão a classes diferentes em \'a\'. O AFD mínimo tem 5 estados: {q0}, {q1}, {q2q3}, {q4}, {q5}.',
    initial: {
      states: ['q0','q1','q2','q3','q4','q5'],
      alphabet: ['a','b'],
      initialState: 'q0',
      finalStates: ['q4','q5'],
      transitions: [
        {from:'q0',symbol:'a',to:'q1'},{from:'q0',symbol:'b',to:'q0'},
        {from:'q1',symbol:'a',to:'q2'},{from:'q1',symbol:'b',to:'q3'},
        {from:'q2',symbol:'a',to:'q5'},{from:'q2',symbol:'b',to:'q4'},
        {from:'q3',symbol:'a',to:'q5'},{from:'q3',symbol:'b',to:'q4'},
        {from:'q4',symbol:'a',to:'q3'},{from:'q4',symbol:'b',to:'q4'},
        {from:'q5',symbol:'a',to:'q4'},{from:'q5',symbol:'b',to:'q2'},
      ],
    },
  },
  {
    id: 12, level: 'medium', title: 'Gemini Ex. 5 — Tripla fusão em {a,b,c}',
    desc: 'AFD com 6 estados e alfabeto {a,b,c}. Estados finais: q3, q4 e q5. Encontre o AFD mínimo.',
    hint: 'Os não-finais {q0,q1,q2} são todos distinguíveis entre si (cada um tem perfil único de símbolos que levam a finais). Compare agora os finais {q3,q4,q5} em cada símbolo.',
    explanation: 'q3≡q4≡q5 (todos finais com transições idênticas entre si: →a→final, →b→{q1}, →c→final). Os não-finais q0, q1 e q2 são todos distinguíveis. O AFD mínimo tem 4 estados: {q0}, {q1}, {q2}, {q3q4q5}.',
    initial: {
      states: ['q0','q1','q2','q3','q4','q5'],
      alphabet: ['a','b','c'],
      initialState: 'q0',
      finalStates: ['q3','q4','q5'],
      transitions: [
        {from:'q0',symbol:'a',to:'q1'},{from:'q0',symbol:'b',to:'q0'},{from:'q0',symbol:'c',to:'q2'},
        {from:'q1',symbol:'a',to:'q3'},{from:'q1',symbol:'b',to:'q1'},{from:'q1',symbol:'c',to:'q2'},
        {from:'q2',symbol:'a',to:'q2'},{from:'q2',symbol:'b',to:'q4'},{from:'q2',symbol:'c',to:'q5'},
        {from:'q3',symbol:'a',to:'q3'},{from:'q3',symbol:'b',to:'q1'},{from:'q3',symbol:'c',to:'q4'},
        {from:'q4',symbol:'a',to:'q5'},{from:'q4',symbol:'b',to:'q1'},{from:'q4',symbol:'c',to:'q4'},
        {from:'q5',symbol:'a',to:'q3'},{from:'q5',symbol:'b',to:'q1'},{from:'q5',symbol:'c',to:'q4'},
      ],
    },
  },
  {
    id: 13, level: 'hard', title: 'Gemini Ex. 6 — Armadilha: já é mínimo',
    desc: 'AFD com 4 estados e alfabeto {a,b}. Estados finais: q2 e q3. Este AFD pode ser minimizado?',
    hint: 'Separe os finais {q2,q3}: δ(q2,a)=q1 (não-final) mas δ(q3,a)=q2 (final). Isso já é suficiente para distingui-los!',
    explanation: 'Nenhum par é equivalente: q0≢q1 (q1 vai a finais em \'a\'), q2≢q3 (q2→a→não-final, q3→a→final), q0≢q2 (classes diferentes), q1≢q3 (classes diferentes). O AFD já está em sua forma mínima com 4 estados.',
    initial: {
      states: ['q0','q1','q2','q3'],
      alphabet: ['a','b'],
      initialState: 'q0',
      finalStates: ['q2','q3'],
      transitions: [
        {from:'q0',symbol:'a',to:'q1'},{from:'q0',symbol:'b',to:'q2'},
        {from:'q1',symbol:'a',to:'q2'},{from:'q1',symbol:'b',to:'q3'},
        {from:'q2',symbol:'a',to:'q1'},{from:'q2',symbol:'b',to:'q3'},
        {from:'q3',symbol:'a',to:'q2'},{from:'q3',symbol:'b',to:'q1'},
      ],
    },
  },
  {
    id: 14, level: 'hard', title: 'Gemini Ex. 7 — Estado de erro explícito',
    desc: 'AFD com 6 estados e alfabeto {a,b}. Estados finais: q3 e q4. O estado qe é o estado de erro (adicionado para tornar o AFD completo). Encontre o AFD mínimo.',
    hint: 'Compare q2 e qe: ambos são não-finais com transições que levam a não-finais nos dois símbolos. Verifique se seus destinos pertencem sempre à mesma classe.',
    explanation: 'q2≡qe (ambos não-finais, ambos levam a {q2,qe} em qualquer símbolo — indistinguíveis). q3≡q4 (ambos finais com destinos simétricos). q0 e q1 são únicos. O AFD mínimo tem 4 estados: {q0}, {q1}, {q2qe}, {q3q4}.',
    initial: {
      states: ['q0','q1','q2','q3','q4','qe'],
      alphabet: ['a','b'],
      initialState: 'q0',
      finalStates: ['q3','q4'],
      transitions: [
        {from:'q0',symbol:'a',to:'q0'},{from:'q0',symbol:'b',to:'q1'},
        {from:'q1',symbol:'a',to:'q4'},{from:'q1',symbol:'b',to:'q2'},
        {from:'q2',symbol:'a',to:'q2'},{from:'q2',symbol:'b',to:'qe'},
        {from:'q3',symbol:'a',to:'qe'},{from:'q3',symbol:'b',to:'q4'},
        {from:'q4',symbol:'a',to:'q2'},{from:'q4',symbol:'b',to:'q3'},
        {from:'qe',symbol:'a',to:'qe'},{from:'qe',symbol:'b',to:'qe'},
      ],
    },
  },
];

// ─── Algorithm ────────────────────────────────────────────────────────────────
const pairKey = (a, b) => a <= b ? `${a},${b}` : `${b},${a}`;

function computeDistTable(states, finalStates, transitions, alphabet) {
  const table = {};
  const n = states.length;

  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      table[pairKey(states[i], states[j])] = false;

  // Step 1: mark final × non-final
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      const [p, q] = [states[i], states[j]];
      if (finalStates.includes(p) !== finalStates.includes(q))
        table[pairKey(p, q)] = true;
    }

  // Step 2: propagate
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const [p, q] = [states[i], states[j]];
        const key = pairKey(p, q);
        if (table[key]) continue;
        for (const sym of alphabet) {
          const tp = transitions.find(t => t.from === p && t.symbol === sym)?.to;
          const tq = transitions.find(t => t.from === q && t.symbol === sym)?.to;
          if (!tp || !tq || tp === tq) continue;
          if (table[pairKey(tp, tq)]) { table[key] = true; changed = true; break; }
        }
      }
    }
  }
  return table;
}

function computeMinimized(states, initialState, finalStates, transitions, alphabet, table) {
  const parent = {};
  states.forEach(s => { parent[s] = s; });

  const find = s => { if (parent[s] !== s) parent[s] = find(parent[s]); return parent[s]; };
  const union = (a, b) => {
    const [ra, rb] = [find(a), find(b)];
    if (ra === rb) return;
    if (states.indexOf(ra) <= states.indexOf(rb)) parent[rb] = ra;
    else parent[ra] = rb;
  };

  const n = states.length;
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (!table[pairKey(states[i], states[j])])
        union(states[i], states[j]);

  const classMap = {};
  states.forEach(s => {
    const rep = find(s);
    (classMap[rep] = classMap[rep] || []).push(s);
  });

  const displayName = {};
  Object.entries(classMap).forEach(([rep, members]) => {
    displayName[rep] = members
      .sort((a, b) => states.indexOf(a) - states.indexOf(b))
      .join('');
  });

  const newStates = Object.keys(classMap).sort((a, b) => states.indexOf(a) - states.indexOf(b));
  const newInitial = find(initialState);
  const newFinals  = [...new Set(finalStates.map(f => find(f)))];

  const newNodes = newStates.map(rep => ({
    id: rep, label: displayName[rep],
    isInitial: rep === newInitial,
    isFinal: newFinals.includes(rep),
  }));

  const seen = new Set();
  const newTransitions = [];
  newStates.forEach(rep => {
    const orig = classMap[rep][0];
    alphabet.forEach(sym => {
      const dest = transitions.find(t => t.from === orig && t.symbol === sym)?.to;
      if (!dest) return;
      const destRep = find(dest);
      const k = `${rep}|${sym}|${destRep}`;
      if (!seen.has(k)) { seen.add(k); newTransitions.push({ from: rep, symbol: sym, to: destRep }); }
    });
  });

  return { nodes: newNodes, transitions: newTransitions, classMap, displayName };
}

// ─── Graph Layout (BFS) ───────────────────────────────────────────────────────
const VW = 580, VH = 320, NR = 22, MX = 62, MY = 40;

function computeLayout(nodes, transitions) {
  if (!nodes.length) return {};
  const initId = nodes.find(n => n.isInitial)?.id ?? nodes[0].id;
  const layer = { [initId]: 0 };
  const visited = new Set([initId]);
  let queue = [initId];
  while (queue.length) {
    const next = [];
    for (const id of queue)
      for (const t of transitions)
        if (t.from === id && t.from !== t.to && !visited.has(t.to)) {
          visited.add(t.to); layer[t.to] = layer[id] + 1; next.push(t.to);
        }
    queue = next;
  }
  const maxL = Math.max(...Object.values(layer));
  nodes.forEach(n => { if (!(n.id in layer)) layer[n.id] = maxL + 1; });
  const groups = {};
  nodes.forEach(n => { const l = layer[n.id]; (groups[l] = groups[l] || []).push(n.id); });
  const numLayers = Math.max(...Object.keys(groups).map(Number)) + 1;
  const positions = {};
  Object.entries(groups).forEach(([l, ids]) => {
    const li = parseInt(l);
    const x = numLayers === 1 ? VW / 2 : MX + (li / (numLayers - 1)) * (VW - 2 * MX);
    ids.forEach((id, i) => {
      const rows = ids.length;
      const y = rows === 1 ? VH / 2 : MY + (i / (rows - 1)) * (VH - 2 * MY);
      positions[id] = { x: Math.round(x), y: Math.round(y) };
    });
  });
  return positions;
}

// ─── SVG Graph View ────────────────────────────────────────────────────────────
function GraphView({ nodes, transitions }) {
  const positions = useMemo(() => computeLayout(nodes, transitions), [nodes, transitions]);

  const edges = useMemo(() => {
    const map = {};
    transitions.forEach(t => {
      const key = `${t.from}→${t.to}`;
      if (!map[key]) map[key] = { from: t.from, to: t.to, syms: [] };
      t.symbol.split(',').forEach(s => {
        const tr = s.trim();
        if (tr && !map[key].syms.includes(tr)) map[key].syms.push(tr);
      });
    });
    return Object.values(map);
  }, [transitions]);

  const hasBidir = useCallback((a, b) => edges.some(e => e.from === b && e.to === a), [edges]);

  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width: '100%', height: '100%', display: 'block' }}
      preserveAspectRatio="xMidYMid meet">
      <defs>
        <marker id="mah"   markerWidth="18" markerHeight="14" refX="48" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#000"/></marker>
        <marker id="mahsl" markerWidth="18" markerHeight="14" refX="18" refY="7" orient="auto" markerUnits="userSpaceOnUse"><polygon points="0 0,18 7,0 14" fill="#000"/></marker>
      </defs>

      {edges.map((edge, i) => {
        const sp = positions[edge.from], tp = positions[edge.to];
        if (!sp || !tp) return null;
        const label = edge.syms.join(',');

        if (edge.from === edge.to) return (
          <g key={i}>
            <path d={`M ${sp.x-13} ${sp.y-NR+5} C ${sp.x-46} ${sp.y-NR-56} ${sp.x+46} ${sp.y-NR-56} ${sp.x+13} ${sp.y-NR+5}`}
              fill="none" stroke="#000" strokeWidth="4" markerEnd="url(#mahsl)" />
            <text x={sp.x} y={sp.y - NR - 30} textAnchor="middle" dominantBaseline="middle" className="p2-edge-label">{label}</text>
          </g>
        );

        const dx = tp.x - sp.x, dy = tp.y - sp.y;
        const dist = Math.sqrt(dx*dx + dy*dy) || 1;
        const nx = -dy/dist, ny = dx/dist;
        const bidir = hasBidir(edge.from, edge.to);
        let pathD, lx, ly;
        if (bidir) {
          const off = 38;
          const cx1 = (sp.x+tp.x)/2 + nx*off, cy1 = (sp.y+tp.y)/2 + ny*off;
          pathD = `M ${sp.x} ${sp.y} Q ${cx1} ${cy1} ${tp.x} ${tp.y}`;
          lx = ((sp.x+tp.x)/2 + cx1)/2 + nx*10;
          ly = ((sp.y+tp.y)/2 + cy1)/2 + ny*10;
        } else {
          pathD = `M ${sp.x} ${sp.y} L ${tp.x} ${tp.y}`;
          lx = (sp.x+tp.x)/2 + nx*15; ly = (sp.y+tp.y)/2 + ny*15;
        }
        return (
          <g key={i}>
            <path d={pathD} fill="none" stroke="#000" strokeWidth="4" markerEnd="url(#mah)" />
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" className="p2-edge-label">{label}</text>
          </g>
        );
      })}

      {nodes.map(nd => {
        const p = positions[nd.id];
        if (!p) return null;
        const lbl = nd.label ?? nd.id;
        const fs = lbl.length > 4 ? 8 : lbl.length > 3 ? 9 : lbl.length > 2 ? 11 : 13;
        return (
          <g key={nd.id}>
            {nd.isInitial && (
              <text x={p.x - NR - 5} y={p.y} textAnchor="end" dominantBaseline="middle"
                style={{ fontSize:22, fontWeight:'bold', fill:'#000', paintOrder:'stroke',
                  stroke:'#fff', strokeWidth:3, userSelect:'none', pointerEvents:'none' }}>▶</text>
            )}
            {nd.isFinal && <circle cx={p.x} cy={p.y} r={NR+7} fill="none" stroke="#000" strokeWidth="3" />}
            <circle cx={p.x} cy={p.y} r={NR}
              fill={nd.isInitial ? '#bae6fd' : nd.isFinal ? '#bbf7d0' : '#fff'}
              stroke="#000" strokeWidth="3" />
            <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle"
              className="p2-node-label" style={{ fontSize: fs }}>{lbl}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Triangular Table ──────────────────────────────────────────────────────────
function TriangularTable({ states, userTable, onToggle, correctTable, showErrors }) {
  return (
    <div className="min-table-scroll">
      <table className="min-tri-table">
        <tbody>
          {states.slice(1).map((rowState, ri) => (
            <tr key={rowState}>
              <th className="min-th">{rowState}</th>
              {states.slice(0, ri + 1).map(colState => {
                if (colState === rowState) return null;
                const key = pairKey(rowState, colState);
                const val  = !!userTable[key];
                const isWrong = showErrors && correctTable && val !== !!correctTable[key];
                return (
                  <td key={colState}
                    className={`min-cell${val ? ' marked' : ''}${isWrong ? ' wrong' : ''}`}
                    onClick={() => onToggle(key)}
                    title={`(${colState}, ${rowState})`}
                  >
                    {val ? '×' : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className="min-corner" />
            {states.slice(0, -1).map(s => <th key={s} className="min-th">{s}</th>)}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

// ─── Level List ───────────────────────────────────────────────────────────────
const LEVEL_ORDER = { easy: 0, medium: 1, hard: 2 };
const SORTED_EXERCISES = [...EXERCISES].sort((a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]);


function LevelList({ progress, onSelect, onBack }) {
  const maxStars   = EXERCISES.length * 3;
  const totalStars = EXERCISES.reduce((s, ex) => s + (progress[`afd-min-${ex.id}`]?.stars || 0), 0);
  return (
    <div className="menu-screen menu-screen-fases" style={{ justifyContent:'flex-start', paddingTop:20 }}>
      <div style={{ display:'flex', alignItems:'center', marginBottom:14, width:'100%' }}>
        <div style={{ flex:1 }}>
          <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        </div>
        <h1 className="menu-title" style={{ margin:0 }}>TuringLab</h1>
        <div style={{ flex:1 }} />
      </div>
      <p style={{ fontWeight:900, fontSize:16, color:'#555', marginBottom:12,
        background:'#bbf7d0', border:'3px solid #000', borderRadius:8,
        padding:'4px 16px', boxShadow:'3px 3px 0 #000' }}>
        ⚡ Minimização
      </p>
      <div style={{ marginBottom:18, fontWeight:'bold', fontSize:16 }}>
        Progresso: {maxStars > 0 ? Math.round((totalStars/maxStars)*100) : 0}% ({totalStars}/{maxStars} ★)
      </div>
      <div className="levels-grid">
        {SORTED_EXERCISES.map((ex, i) => {
          const stars = progress[`afd-min-${ex.id}`]?.stars || 0;
          return (
            <button key={ex.id} className="menu-btn primary"
              onClick={() => onSelect(ex)}
              style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8,
                background: DIFF_COLOR[ex.level],
                border: '3px solid #000',
                boxShadow: 'none' }}>
              <span>Ex. {i + 1}</span>
              <span style={{ display:'flex', gap:2 }}>
                {[1,2,3].map(n => <SvgStar key={n} filled={n <= stars} />)}
              </span>
            </button>
          );
        })}
      </div>
      <DifficultyLegend />
    </div>
  );
}

// ─── Main Game ────────────────────────────────────────────────────────────────
function MinGame({ exercise, progress, onBack, updateProgress, showToast }) {
  const [phase, setPhase]           = useState('BUILD');
  const [userTable, setUserTable]   = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [profMsg,   setProfMsg]     = useState('');
  const [buildAxisX, setBuildAxisX] = useState(['']);
  const [buildAxisY, setBuildAxisY] = useState(['']);
  const [buildSelfPairs, setBuildSelfPairs]       = useState(new Set());
  const [buildInvalidInputs, setBuildInvalidInputs] = useState(new Set()); // "y-ri" | "x-ci"
  const [banner, setBanner]         = useState(null); // { msg, type }
  const speechRef  = useRef(null);
  const bannerRef  = useRef(null);

  const showBanner = useCallback((msg, type = 'info') => {
    setBanner({ msg, type });
    if (bannerRef.current) clearTimeout(bannerRef.current);
    bannerRef.current = setTimeout(() => setBanner(null), 4000);
  }, []);

  const showProf = useCallback((msg, dur = 6000) => {
    setProfMsg(msg);
    if (speechRef.current) clearTimeout(speechRef.current);
    speechRef.current = setTimeout(() => setProfMsg(''), dur);
  }, []);

  const { states, alphabet, initialState, finalStates, transitions } = exercise.initial;

  const origNodes = useMemo(() => states.map(s => ({
    id: s, label: s,
    isInitial: s === initialState,
    isFinal: finalStates.includes(s),
  })), [states, initialState, finalStates]);

  const correctTable = useMemo(
    () => computeDistTable(states, finalStates, transitions, alphabet),
    [states, finalStates, transitions, alphabet]
  );

  const firstPassTable = useMemo(() => {
    const table = {};
    for (let i = 0; i < states.length; i++)
      for (let j = i + 1; j < states.length; j++) {
        const [p, q] = [states[i], states[j]];
        table[pairKey(p, q)] = finalStates.includes(p) !== finalStates.includes(q);
      }
    return table;
  }, [states, finalStates]);

  // Pre-computed Set of valid pair keys — O(1) lookup in handleValidate
  const firstPassKeySet = useMemo(
    () => new Set(Object.keys(firstPassTable)),
    [firstPassTable]
  );

  const minimized = useMemo(
    () => computeMinimized(states, initialState, finalStates, transitions, alphabet, correctTable),
    [states, initialState, finalStates, transitions, alphabet, correctTable]
  );

  const correctAxisX = states.slice(0, -1);
  const correctAxisY = states.slice(1);
  const buildAllFilled = buildAxisX.every(s => s.trim()) && buildAxisY.every(s => s.trim());

  const handleValidateBuild = () => {
    const xT = buildAxisX.map(s => s.trim());
    const yT = buildAxisY.map(s => s.trim());
    const n = states.length;

    if (xT.length !== n - 1 || yT.length !== n - 1) {
      showBanner('A tabela triangular deve ter (quantidade de estados − 1) posições em cada eixo.', 'error');
      return;
    }

    const stateSet = new Set(states);
    const invalidKeys = new Set();
    xT.forEach((s, i) => { if (s && !stateSet.has(s)) invalidKeys.add(`x-${i}`); });
    yT.forEach((s, i) => { if (s && !stateSet.has(s)) invalidKeys.add(`y-${i}`); });
    if (invalidKeys.size > 0) {
      setBuildInvalidInputs(invalidKeys);
      showBanner('Estado inválido — verifique os campos em vermelho.', 'error');
      return;
    }
    setBuildInvalidInputs(new Set());

    if (new Set(xT).size !== xT.length) { showBanner('O eixo X tem estados repetidos.', 'error'); return; }
    if (new Set(yT).size !== yT.length) { showBanner('O eixo Y tem estados repetidos.', 'error'); return; }

    const xSet = new Set(xT), ySet = new Set(yT);
    const setsEq = (a, b) => a.size === b.size && [...a].every(v => b.has(v));
    const canonXSet = new Set(states.slice(0, -1));
    const canonYSet = new Set(states.slice(1));

    if (!((setsEq(xSet, canonXSet) && setsEq(ySet, canonYSet)) ||
          (setsEq(xSet, canonYSet) && setsEq(ySet, canonXSet)))) {
      showBanner('Eixos incorretos. Um eixo deve excluir o primeiro estado; o outro, o último.', 'error');
      return;
    }

    // Self-pair check: collect all (ri,ci) where yT[ri] === xT[ci]
    const pairs = new Set();
    for (let ri = 0; ri < yT.length; ri++)
      for (let ci = 0; ci <= ri; ci++)
        if (yT[ri] === xT[ci]) pairs.add(`${ri},${ci}`);

    if (pairs.size > 0) {
      setBuildSelfPairs(pairs);
      showBanner(
        `Autopar: ${[...pairs].map(k => { const [r,c]=k.split(','); return `${yT[r]}↔${xT[c]}`; }).join(', ')} — a tabela triangular só compara estados DIFERENTES.`,
        'error'
      );
      return;
    }

    setBuildSelfPairs(new Set());
    setBuildInvalidInputs(new Set());
    setPhase('TABLE');
    showBanner('Eixos corretos! Agora marque os pares Final × não-Final.', 'success');
  };

  const handleToggle = useCallback(key => {
    const [a, b] = key.split(',');
    if (a === b) return; // never mark a state against itself
    setUserTable(prev => ({ ...prev, [key]: !prev[key] }));
    setShowErrors(false);
  }, []);

  const handleValidate = () => {
    let extras = 0, missing = 0;

    // Single pass: check every valid pair
    for (const [key, shouldBe] of Object.entries(firstPassTable)) {
      const is = !!userTable[key];
      if (shouldBe && !is) missing++;
      else if (!shouldBe && is) extras++;
    }

    // Catch any marks outside valid pairs (self-pairs qi,qi or phantom keys)
    for (const [key, marked] of Object.entries(userTable)) {
      if (marked && !firstPassKeySet.has(key)) extras++;
    }

    if (extras === 0 && missing === 0) {
      updateProgress(`afd-min-${exercise.id}`, 3);
      setPhase('RESULT');
      showBanner('Correto! 3 estrelas!', 'success');
    } else {
      setShowErrors(true);
      const parts = [];
      if (extras  > 0) parts.push(`${extras} marcação${extras>1?'ões':''} indevida${extras>1?'s':''} — pares do mesmo tipo (ambos finais ou ambos não-finais) não se distinguem nesta etapa`);
      if (missing > 0) parts.push(`${missing} par${missing>1?'es':''} Final×não-Final sem marcação`);
      showProf(parts.join(' · '), 8000);
      showBanner('Tabela incorreta — veja o balão do professor.', 'error');
    }
  };

  const stars = progress[`afd-min-${exercise.id}`]?.stars || 0;
  const PHASE_ORDER = ['BUILD', 'TABLE', 'RESULT'];

  return (
    <div className="workspace-wrapper" style={{ position:'relative' }}>
      {banner && (
        <div className={`toast-notification ${banner.type}`}>{banner.msg}</div>
      )}
      <header className="game-header">
        <div className="header-left">
          <button className="back-btn" onClick={onBack}>⬅ Voltar</button>
        </div>
        <div style={{ flex:1, display:'flex', justifyContent:'center', alignItems:'center', gap:8 }}>
          <span className="mission-label">Minimização</span>
          <span style={{ fontWeight:'bold', fontSize:13 }}>{exercise.title}</span>
        </div>
        <div style={{ display:'flex', gap:5, marginRight:10 }}>
          {['1 Construir','2 F×NF','3 Resultado'].map((lbl, i) => {
            const p = PHASE_ORDER[i];
            const done = PHASE_ORDER.indexOf(phase) > i;
            return (
              <span key={p} style={{
                padding:'2px 8px', borderRadius:4, fontSize:10, fontWeight:'bold',
                border:'2px solid #000',
                background: phase === p ? '#fde047' : done ? '#bbf7d0' : '#eee'
              }}>{lbl}</span>
            );
          })}
        </div>
      </header>

      <div className="min-main">
        {/* Left: graph */}
        <section className="min-graph-panel">
          <div style={{ position:'absolute', inset:4 }}>
            <GraphView
              nodes={phase === 'RESULT' ? minimized.nodes : origNodes}
              transitions={phase === 'RESULT' ? minimized.transitions : transitions}
            />
          </div>
          <div className="min-graph-tag">
            {phase === 'RESULT' ? 'AFD Minimizado' : 'AFD Original'}
          </div>
          <div className="min-graph-legend">
            <span>
              <span style={{ fontWeight:'bold', fontSize:11, marginRight:3 }}>▶</span>
              <span className="min-legend-dot initial" />
              {' '}Inicial
            </span>
            <span>
              <span className="min-legend-dot final" style={{ outline:'2px solid #000', outlineOffset:2 }} />
              {' '}Final
            </span>
          </div>
        </section>

        {/* Right: phase content */}
        <section className="min-right">

          {/* ── BUILD ── */}
          {phase === 'BUILD' && (
            <div className="min-panel">
              <div className="section-header" style={{ fontSize:11 }}>Construir Tabela</div>
              <p style={{ fontSize:11, color:'#555', marginBottom:0 }}>
                Monte a tabela triangular: defina quantas linhas (Y) e colunas (X) precisa, depois digite os estados.
              </p>

              {/* Controles de tamanho */}
              <div style={{ display:'flex', gap:12, fontSize:11, flexWrap:'wrap' }}>
                <div style={{ display:'flex', alignItems:'center', gap:4 }}>
                  <span style={{ fontWeight:900 }}>Linhas (Y):</span>
                  <button onClick={() => { setBuildAxisY(p => [...p, '']); setBuildSelfPairs(new Set()); setBuildInvalidInputs(new Set()); }}
                    style={{ width:22, height:22, fontWeight:900, fontSize:14, lineHeight:1,
                      border:'2px solid #000', borderRadius:4, background:'#bbf7d0', cursor:'pointer' }}>+</button>
                  <button onClick={() => { setBuildAxisY(p => p.length > 1 ? p.slice(0, -1) : p); setBuildSelfPairs(new Set()); setBuildInvalidInputs(new Set()); }}
                    disabled={buildAxisY.length <= 1}
                    style={{ width:22, height:22, fontWeight:900, fontSize:16, lineHeight:1,
                      border:'2px solid #000', borderRadius:4,
                      background: buildAxisY.length <= 1 ? '#eee' : '#fca5a5',
                      cursor: buildAxisY.length <= 1 ? 'not-allowed' : 'pointer' }}>−</button>
                  <span style={{ fontWeight:700 }}>{buildAxisY.length}</span>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:4 }}>
                  <span style={{ fontWeight:900 }}>Colunas (X):</span>
                  <button onClick={() => { setBuildAxisX(p => [...p, '']); setBuildSelfPairs(new Set()); setBuildInvalidInputs(new Set()); }}
                    style={{ width:22, height:22, fontWeight:900, fontSize:14, lineHeight:1,
                      border:'2px solid #000', borderRadius:4, background:'#bbf7d0', cursor:'pointer' }}>+</button>
                  <button onClick={() => { setBuildAxisX(p => p.length > 1 ? p.slice(0, -1) : p); setBuildSelfPairs(new Set()); setBuildInvalidInputs(new Set()); }}
                    disabled={buildAxisX.length <= 1}
                    style={{ width:22, height:22, fontWeight:900, fontSize:16, lineHeight:1,
                      border:'2px solid #000', borderRadius:4,
                      background: buildAxisX.length <= 1 ? '#eee' : '#fca5a5',
                      cursor: buildAxisX.length <= 1 ? 'not-allowed' : 'pointer' }}>−</button>
                  <span style={{ fontWeight:700 }}>{buildAxisX.length}</span>
                </div>
              </div>

              {/* Tabela com inputs */}
              <div className="min-table-scroll">
                <table className="min-tri-table">
                  <tbody>
                    {buildAxisY.map((rowS, ri) => (
                      <tr key={ri}>
                        <th className="min-th" style={{
                          background: buildInvalidInputs.has(`y-${ri}`) ? '#fca5a5' : '#fef9c3',
                          padding:0,
                          border: buildInvalidInputs.has(`y-${ri}`) ? '2.5px solid #dc2626' : undefined,
                        }}>
                          <input
                            value={rowS}
                            onChange={e => {
                              const v = e.target.value;
                              setBuildAxisY(prev => { const n=[...prev]; n[ri]=v; return n; });
                              setBuildSelfPairs(new Set());
                              setBuildInvalidInputs(new Set());
                            }}
                            style={{ width:34, textAlign:'center', border:'none', background:'transparent',
                              fontFamily:"'Comic Sans MS','Comic Neue',cursive,sans-serif",
                              fontWeight:900, fontSize:11, outline:'none',
                              color: buildInvalidInputs.has(`y-${ri}`) ? '#dc2626' : undefined,
                            }}
                            placeholder="?"
                            maxLength={3}
                          />
                        </th>
                        {Array(ri + 1).fill(0).map((_, ci) => {
                          const isSelf = buildSelfPairs.has(`${ri},${ci}`);
                          return (
                            <td key={ci} className="min-cell"
                              style={{
                                background: isSelf ? '#fca5a5' : '#f1f5f9',
                                cursor: 'default',
                                color: isSelf ? '#dc2626' : '#d1d5db',
                                border: isSelf ? '2.5px solid #dc2626' : undefined,
                                fontWeight: isSelf ? 900 : undefined,
                              }}
                            >{isSelf ? '×' : ''}</td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="min-corner" />
                      {buildAxisX.map((s, i) => (
                        <th key={i} className="min-th" style={{
                          background: buildInvalidInputs.has(`x-${i}`) ? '#fca5a5' : '#fef9c3',
                          padding:0,
                          border: buildInvalidInputs.has(`x-${i}`) ? '2.5px solid #dc2626' : undefined,
                        }}>
                          <input
                            value={s}
                            onChange={e => {
                              const v = e.target.value;
                              setBuildAxisX(prev => { const n=[...prev]; n[i]=v; return n; });
                              setBuildSelfPairs(new Set());
                              setBuildInvalidInputs(new Set());
                            }}
                            style={{ width:34, textAlign:'center', border:'none', background:'transparent',
                              fontFamily:"'Comic Sans MS','Comic Neue',cursive,sans-serif",
                              fontWeight:900, fontSize:11, outline:'none',
                              color: buildInvalidInputs.has(`x-${i}`) ? '#dc2626' : undefined,
                            }}
                            placeholder="?"
                            maxLength={3}
                          />
                        </th>
                      ))}
                    </tr>
                  </tfoot>
                </table>
              </div>

              <button className="add-test-btn"
                style={{ alignSelf:'stretch', padding:'10px', fontSize:13,
                  fontWeight:'bold', marginTop:4,
                  background: buildAllFilled ? '#4ade80' : '#d1d5db',
                  cursor: buildAllFilled ? 'pointer' : 'not-allowed' }}
                onClick={handleValidateBuild}
                disabled={!buildAllFilled}
              >
                Confirmar Eixos →
              </button>
            </div>
          )}

          {/* ── TABLE ── */}
          {phase === 'TABLE' && (
            <div className="min-panel">
              <div className="section-header" style={{ fontSize:11 }}>
                Final Vs não Final
              </div>
              <p style={{ fontSize:11, color:'#444', marginBottom:4 }}>
                Marque <b>×</b> nos pares onde um estado é final e o outro não é. Deixe em branco os pares do mesmo tipo.
              </p>

              <TriangularTable
                states={states}
                userTable={userTable}
                onToggle={handleToggle}
                correctTable={firstPassTable}
                showErrors={showErrors}
              />

              <button className="add-test-btn"
                style={{ alignSelf:'stretch', padding:'10px', fontSize:13,
                  fontWeight:'bold', background:'#4ade80', marginTop:4 }}
                onClick={handleValidate}>
                Validar Tabela ✓
              </button>
            </div>
          )}

          {/* ── RESULT ── */}
          {phase === 'RESULT' && (
            <div className="min-panel">
              <div className="section-header" style={{ fontSize:11 }}>
                AFD Minimizado
              </div>

              <div className="min-groups">
                {Object.entries(minimized.classMap).map(([rep, members]) => (
                  <div key={rep} className="min-group-row">
                    <span className="min-group-members">
                      {'{'}{members.join(', ')}{'}'}
                    </span>
                    <span className="min-group-arrow">→</span>
                    <span className="min-group-rep">
                      {minimized.displayName[rep]}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ background:'#fff9c4', border:'2px solid #000', borderRadius:8,
                padding:'8px 10px', fontSize:11, lineHeight:1.5 }}>
                {exercise.explanation}
              </div>

              <div style={{ display:'flex', alignItems:'center', gap:6,
                background:'#fff', border:'3px solid #000', borderRadius:8,
                padding:'8px 14px', boxShadow:'4px 4px 0 #000' }}>
                <SvgStars count={stars} size={22} />
                <span style={{ fontWeight:'bold', fontSize:13 }}>
                  {stars === 3 ? 'Perfeito!' : stars === 2 ? 'Ótimo!' : 'Continue!'}
                </span>
              </div>

              <button className="add-test-btn"
                style={{ alignSelf:'stretch', padding:'10px', fontSize:13,
                  fontWeight:'bold', background:'#a78bfa' }}
                onClick={onBack}>
                ← Ver outros exercícios
              </button>
            </div>
          )}

        </section>
      </div>

      {/* Professor HUD — canto inferior direito */}
      <div className="professor-hud">
        {profMsg && (
          <div className="professor-balloon">
            <img src={imgBalaoFala} alt="" />
            <div className="professor-balloon-text">{profMsg}</div>
          </div>
        )}
        <img
          src={imgMaurilioSerio}
          alt="Professor Maurílio"
          className="prof-img"
          onClick={() => showProf(exercise.hint)}
        />
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function AFDMinimizer({ onBack, progress, updateProgress, showToast }) {
  const [selected, setSelected] = useState(null);

  if (selected) return (
    <MinGame
      exercise={selected}
      progress={progress}
      onBack={() => setSelected(null)}
      updateProgress={updateProgress}
      showToast={showToast}
    />
  );

  return (
    <LevelList
      progress={progress}
      onSelect={setSelected}
      onBack={onBack}
    />
  );
}
