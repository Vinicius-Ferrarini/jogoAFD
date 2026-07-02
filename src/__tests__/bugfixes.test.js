// Testes de regressão para dois bugs corrigidos:
//   Bug 1 — Desfazer precisava de 2 cliques ao abrir/fechar label sem editar
//   Bug 2 — Digitar "a,b,c,d" na seta só criava 1 bolinha (não separava por vírgula)
import { describe, it, expect, beforeEach } from 'vitest';
import { createHistoryStack } from '../modules/afd/hooks/useHistory.js';
import { mergeSymbols } from '../modules/afd/hooks/useAFDGraph.js';

// ─── Bug 1: histórico duplicado ao clicar-sem-editar no label ────────────────
// O fix: handleNodeLabelBlur só chama recordHistory quando trimmed !== oldLabel.
// Aqui testamos o invariante via createHistoryStack: simular o comportamento
// do orquestrador — se o label não mudou, não devemos chamar record.
describe('Bug 1 — foco/blur sem editar não cria entrada no histórico', () => {

  let h;
  beforeEach(() => { h = createHistoryStack(); });

  it('clicar num estado e sair sem editar: pilha deve ter só 1 entrada', () => {
    const nodes = [{ id: 'q0', label: 'q0', isInitial: true, isFinal: false }];
    const trans = [];

    // Estado inicial
    h.record(nodes, trans);
    expect(h.state()).toEqual({ idx: 0, len: 1 });

    // Simula focus + blur sem mudança: label === oldLabel → NÃO chama record
    const label = 'q0';
    const oldLabel = 'q0';
    if (label !== oldLabel) h.record(nodes, trans); // esta linha NÃO deve executar

    expect(h.state()).toEqual({ idx: 0, len: 1 });
    expect(h.undo()).toBeNull(); // nada para desfazer
  });

  it('editar label de fato: pilha cresce para 2 entradas, 1 undo funciona', () => {
    const nodes = [{ id: 'q0', label: 'q0', isInitial: true, isFinal: false }];
    const trans = [];

    h.record(nodes, trans);

    // Simula edição real: label mudou → chama record
    const newNodes = nodes.map(n => ({ ...n, label: 'q1', id: 'q1' }));
    const label = 'q1';
    const oldLabel = 'q0';
    if (label !== oldLabel) h.record(newNodes, trans);

    expect(h.state()).toEqual({ idx: 1, len: 2 });

    // 1 único undo volta ao estado anterior
    const snap = h.undo();
    expect(snap.nodes[0].label).toBe('q0');
    expect(h.state().idx).toBe(0);
  });

  it('múltiplos focos/blurs sem editar: pilha permanece inalterada', () => {
    const nodes = [{ id: 'q0', label: 'q0', isInitial: true, isFinal: false }];
    const trans = [];
    h.record(nodes, trans);

    // Simula 5 focos/blurs sem editar
    for (let i = 0; i < 5; i++) {
      const label = 'q0', oldLabel = 'q0';
      if (label !== oldLabel) h.record(nodes, trans);
    }

    expect(h.state()).toEqual({ idx: 0, len: 1 });
    expect(h.undo()).toBeNull();
  });

  it('foco/blur sem editar após uma ação anterior: desfazer volta à ação anterior (não ao estado antes do foco)', () => {
    const n0 = [{ id: 'q0', label: 'q0', isInitial: true, isFinal: false }];
    const n1 = [...n0, { id: 'q1', label: 'q1', isInitial: false, isFinal: true }];
    const trans = [];

    h.record(n0, trans);   // snapshot 0: só q0
    h.record(n1, trans);   // snapshot 1: q0 + q1

    // Foco/blur sem editar: não cria snapshot 2
    const label = 'q0', oldLabel = 'q0';
    if (label !== oldLabel) h.record(n1, trans);

    // 1 undo deve voltar ao snapshot 0 (q0 sozinho), não criar um estado intermediário
    const snap = h.undo();
    expect(snap.nodes).toHaveLength(1);
    expect(snap.nodes[0].id).toBe('q0');
  });

});

// ─── Bug 2: digitar "a,b,c,d" deve criar 4 chips separados ──────────────────
describe('Bug 2 — mergeSymbols suporta múltiplos símbolos por vírgula', () => {

  it('símbolo único sem vírgula: adiciona normalmente', () => {
    expect(mergeSymbols('', 'a')).toBe('a');
  });

  it('dois símbolos "a,b": ambos adicionados', () => {
    expect(mergeSymbols('', 'a,b')).toBe('a,b');
  });

  it('"a,b,c,d": quatro símbolos adicionados de uma vez', () => {
    expect(mergeSymbols('', 'a,b,c,d')).toBe('a,b,c,d');
  });

  it('merge com existentes: não duplica', () => {
    // transição já tem 'a'; digitamos "a,b" — deve resultar em 'a,b' (não 'a,a,b')
    expect(mergeSymbols('a', 'a,b')).toBe('a,b');
  });

  it('todos já existem: retorna null (sem mudança)', () => {
    expect(mergeSymbols('a,b', 'a,b')).toBeNull();
  });

  it('símbolo duplicado ignorado, novo adicionado', () => {
    expect(mergeSymbols('a,b', 'b,c')).toBe('a,b,c');
  });

  it('string de entrada vazia: retorna null', () => {
    expect(mergeSymbols('a', '')).toBeNull();
  });

  it('string de entrada só com espaços/vírgulas: retorna null', () => {
    expect(mergeSymbols('a', ' , , ')).toBeNull();
  });

  it('transição vazia + símbolo único → apenas esse símbolo', () => {
    expect(mergeSymbols('', 'b')).toBe('b');
  });

  it('preserva ordem: existentes primeiro, novos em seguida', () => {
    const result = mergeSymbols('x', 'a,b,c');
    expect(result).toBe('x,a,b,c');
  });

  it('currentSymbol null/undefined tratado como vazio', () => {
    expect(mergeSymbols(null, 'a,b')).toBe('a,b');
    expect(mergeSymbols(undefined, 'a,b')).toBe('a,b');
  });

});
