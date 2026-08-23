// Testes do núcleo de algoritmos de AFD (modules/afd/utils/dfaAlgorithms) — até
// então sem cobertura direta, embora seja o coração do módulo de Minimização.
// Estratégia: unidades pequenas com AFDs feitos à mão + um teste de PROPRIEDADE
// sobre TODOS os exercícios reais (minimizar deve preservar a linguagem, produzir
// só estados alcançáveis e ser idempotente = já mínimo).
import { describe, it, expect } from 'vitest';
import {
  computeReachable, isTotalDelta, computeDistTable, computeMinimized,
  productCounterexample, analyzeDrawnDFA,
} from '../modules/afd/utils/dfaAlgorithms.js';
import { EXERCISES } from '../modules/afd/afdMinimizerExercises.js';

// {states, initial, finals[], transitions[{from,symbol,to}]} → forma que o
// productCounterexample espera ({delta:{s:{sym:to}}, initial, finals:Set}).
function toDFA(initial, finals, transitions) {
  const delta = {};
  for (const t of transitions) {
    (delta[t.from] = delta[t.from] || {})[t.symbol] = t.to;
  }
  return { delta, initial, finals: new Set(finals) };
}

describe('computeReachable', () => {
  it('inclui só o que é alcançável do inicial (descarta estado morto)', () => {
    const t = [
      { from: 'A', symbol: 'a', to: 'B' },
      { from: 'B', symbol: 'a', to: 'A' },
      { from: 'C', symbol: 'a', to: 'C' }, // C nunca é alcançado
    ];
    const r = computeReachable(['A', 'B', 'C'], 'A', t);
    expect(r.has('A')).toBe(true);
    expect(r.has('B')).toBe(true);
    expect(r.has('C')).toBe(false);
  });
});

describe('isTotalDelta', () => {
  it('detecta (estado, símbolo) sem transição', () => {
    const t = [
      { from: 'A', symbol: 'a', to: 'B' },
      { from: 'A', symbol: 'b', to: 'A' },
      { from: 'B', symbol: 'a', to: 'A' }, // falta (B, b)
    ];
    const missing = isTotalDelta(['A', 'B'], ['a', 'b'], t);
    expect(missing).toEqual([{ state: 'B', symbol: 'b' }]);
  });
  it('lista vazia quando δ é total', () => {
    const t = [
      { from: 'A', symbol: 'a', to: 'A' }, { from: 'A', symbol: 'b', to: 'A' },
    ];
    expect(isTotalDelta(['A'], ['a', 'b'], t)).toEqual([]);
  });
});

describe('productCounterexample', () => {
  const alphabet = ['a'];
  it('acha contra-exemplo λ quando a aceitação inicial diverge', () => {
    const A = toDFA('a0', ['a0'], [{ from: 'a0', symbol: 'a', to: 'a0' }]); // aceita tudo
    const B = toDFA('b0', [],     [{ from: 'b0', symbol: 'a', to: 'b0' }]); // aceita nada
    const res = productCounterexample(A, B, alphabet);
    expect(res.equivalent).toBe(false);
    expect(res.word).toBe('');
  });
  it('reconhece AFDs equivalentes (mesma linguagem, nomes diferentes)', () => {
    // Ambos aceitam "número par de a".
    const A = toDFA('p', ['p'], [
      { from: 'p', symbol: 'a', to: 'i' }, { from: 'i', symbol: 'a', to: 'p' }]);
    const B = toDFA('x', ['x'], [
      { from: 'x', symbol: 'a', to: 'y' }, { from: 'y', symbol: 'a', to: 'x' }]);
    expect(productCounterexample(A, B, alphabet).equivalent).toBe(true);
  });
});

describe('analyzeDrawnDFA', () => {
  const AB = ['a', 'b'];
  it('aceita um AFD bem-formado (δ total, 1 inicial, determinístico)', () => {
    const nodes = [{ id: 'q0', isInitial: true, isFinal: true }];
    const trans = [{ from: 'q0', symbol: 'a,b', to: 'q0' }];
    const r = analyzeDrawnDFA(nodes, trans, AB);
    expect(r.ok).toBe(true);
    expect(r.initial).toBe('q0');
  });
  it('erro sem estado inicial', () => {
    const r = analyzeDrawnDFA([{ id: 'q0', isInitial: false, isFinal: true }], [], AB);
    expect(r).toMatchObject({ ok: false, code: 'no-initial' });
  });
  it('erro de não-determinismo (dois destinos p/ mesmo símbolo)', () => {
    const nodes = [{ id: 'q0', isInitial: true, isFinal: false }, { id: 'q1', isInitial: false, isFinal: true }];
    const trans = [
      { from: 'q0', symbol: 'a', to: 'q0' }, { from: 'q0', symbol: 'a', to: 'q1' }];
    expect(analyzeDrawnDFA(nodes, trans, AB)).toMatchObject({ ok: false, code: 'nondeterministic' });
  });
  it('erro de δ incompleta', () => {
    const nodes = [{ id: 'q0', isInitial: true, isFinal: true }];
    const trans = [{ from: 'q0', symbol: 'a', to: 'q0' }]; // falta 'b'
    expect(analyzeDrawnDFA(nodes, trans, AB)).toMatchObject({ ok: false, code: 'incomplete' });
  });
  it('erro de símbolo fora do alfabeto', () => {
    const nodes = [{ id: 'q0', isInitial: true, isFinal: true }];
    const trans = [{ from: 'q0', symbol: 'a,b', to: 'q0' }, { from: 'q0', symbol: 'z', to: 'q0' }];
    expect(analyzeDrawnDFA(nodes, trans, AB)).toMatchObject({ ok: false, code: 'bad-symbol' });
  });
});

describe('computeMinimized — propriedades sobre todos os exercícios reais', () => {
  // Roda o pipeline real (alcançáveis → tabela de distinguibilidade → minimizar)
  // e converte o resultado de volta pra forma de AFD, para comparar linguagens.
  const minimize = (ex) => {
    const { alphabet, initialState, finalStates } = ex.initial;
    const reach = computeReachable(ex.initial.states, initialState, ex.initial.transitions);
    const states = ex.initial.states.filter(s => reach.has(s));
    const trans  = ex.initial.transitions.filter(t => reach.has(t.from));
    const finals = finalStates.filter(f => reach.has(f));
    const table  = computeDistTable(states, finals, trans, alphabet);
    const min    = computeMinimized(states, initialState, finals, trans, alphabet, table);
    return { states, trans, finals, alphabet, initialState, min };
  };

  for (const ex of EXERCISES) {
    it(`L${String(ex.id).padStart(2, '0')}: minimização preserva a linguagem e é mínima`, () => {
      const { alphabet, trans, finals, initialState, min } = minimize(ex);

      // (1) mesma linguagem do original (só estados alcançáveis).
      const original  = toDFA(initialState, finals, trans);
      const minimized = toDFA(
        min.nodes.find(n => n.isInitial).id,
        min.nodes.filter(n => n.isFinal).map(n => n.id),
        min.transitions,
      );
      expect(productCounterexample(original, minimized, alphabet).equivalent).toBe(true);

      // (2) não sobra estado inalcançável no resultado.
      const minInit = min.nodes.find(n => n.isInitial).id;
      const reachMin = computeReachable(min.nodes.map(n => n.id), minInit, min.transitions);
      expect(reachMin.size).toBe(min.nodes.length);

      // (3) idempotência: re-minimizar não funde mais nada (já é mínimo).
      const minStates = min.nodes.map(n => n.id);
      const minFinals = min.nodes.filter(n => n.isFinal).map(n => n.id);
      const table2 = computeDistTable(minStates, minFinals, min.transitions, alphabet);
      const min2 = computeMinimized(minStates, minInit, minFinals, min.transitions, alphabet, table2);
      expect(min2.nodes.length).toBe(min.nodes.length);
    });
  }

  it('L01 (finais equivalentes) reduz para 3 estados', () => {
    const ex = EXERCISES.find(e => e.id === 1);
    const { min } = minimize(ex);
    expect(min.nodes.length).toBe(3);
  });
});
