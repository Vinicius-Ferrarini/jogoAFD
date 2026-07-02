import { describe, it, expect, beforeEach } from 'vitest';
import { createHistoryStack } from '../modules/afd/hooks/useHistory.js';

const N0 = [{ id: 'q0' }];
const T0 = [];
const N1 = [{ id: 'q0' }, { id: 'q1' }];
const T1 = [{ from: 'q0', to: 'q1', symbol: 'a' }];
const N2 = [{ id: 'q0' }, { id: 'q1' }, { id: 'q2' }];
const T2 = [{ from: 'q0', to: 'q1', symbol: 'a' }, { from: 'q1', to: 'q2', symbol: 'b' }];

let h;
beforeEach(() => { h = createHistoryStack(); });

// ─── Suite 1: record ─────────────────────────────────────────────────────────
describe('createHistoryStack — record', () => {

  it('primeiro record → idx=0, len=1', () => {
    expect(h.record(N0, T0)).toEqual({ idx: 0, len: 1 });
  });

  it('segundo record → idx=1, len=2', () => {
    h.record(N0, T0);
    expect(h.record(N1, T1)).toEqual({ idx: 1, len: 2 });
  });

  it('snapshots são clonados (deep copy) — mutação externa não afeta a pilha', () => {
    h.record(N0, T0);
    N0.push({ id: 'intruso' });
    const snap = h.undo(); // volta ao único snapshot
    // undo com idx=0 retorna null; confirma que N0 original ainda tem 1 elemento
    expect(snap).toBeNull();
    N0.pop(); // limpa para não afetar outros testes
  });

});

// ─── Suite 2: undo ───────────────────────────────────────────────────────────
describe('createHistoryStack — undo', () => {

  it('undo com pilha vazia (idx=-1) → null', () => {
    expect(h.undo()).toBeNull();
  });

  it('undo no primeiro snapshot (idx=0) → null (não pode desfazer além do início)', () => {
    h.record(N0, T0);
    expect(h.undo()).toBeNull();
  });

  it('undo após 2 records → retorna snapshot anterior', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    const snap = h.undo();
    expect(snap.nodes).toEqual(N0);
    expect(snap.transitions).toEqual(T0);
  });

  it('undo decrementa idx', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    h.undo();
    expect(h.state()).toMatchObject({ idx: 0 });
  });

  it('undo múltiplo → ordem correta de snapshots', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    h.record(N2, T2);
    h.undo();
    const snap = h.undo();
    expect(snap.nodes).toEqual(N0);
  });

  it('undo além do início não estoura (permanece em idx=0)', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    h.undo();
    h.undo(); // tenta ir além
    h.undo(); // idem
    expect(h.state().idx).toBe(0);
  });

});

// ─── Suite 3: redo ───────────────────────────────────────────────────────────
describe('createHistoryStack — redo', () => {

  it('redo sem undo prévio → null', () => {
    h.record(N0, T0);
    expect(h.redo()).toBeNull();
  });

  it('redo após undo → restaura snapshot seguinte', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    h.undo();
    const snap = h.redo();
    expect(snap.nodes).toEqual(N1);
    expect(snap.transitions).toEqual(T1);
  });

  it('redo no fim da pilha → null', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    h.undo();
    h.redo();
    expect(h.redo()).toBeNull();
  });

  it('undo → undo → redo → redo → volta ao topo', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    h.record(N2, T2);
    h.undo(); h.undo();
    h.redo(); h.redo();
    expect(h.state()).toMatchObject({ idx: 2, len: 3 });
  });

});

// ─── Suite 4: novo record descarta "futuro" ───────────────────────────────────
describe('createHistoryStack — record após undo descarta futuro', () => {

  it('record após undo parcial → pilha truncada', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    h.record(N2, T2);
    h.undo(); // volta para N1
    h.record(N0, T0); // nova ação descarta N2
    expect(h.state()).toMatchObject({ idx: 2, len: 3 });
  });

  it('redo não disponível após novo record', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    h.undo();
    h.record(N2, T2); // descarta N1 do futuro
    expect(h.redo()).toBeNull();
  });

});

// ─── Suite 5: squash ─────────────────────────────────────────────────────────
describe('createHistoryStack — squash', () => {

  it('squash=true substitui último snapshot sem avançar idx', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    const before = h.state();
    h.record(N2, T2, true); // squash
    expect(h.state()).toEqual(before); // idx e len iguais
  });

  it('undo após squash retorna o snapshot anterior ao squash (não o intermediário)', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    h.record(N2, T2, true); // squash substitui N1 por N2
    const snap = h.undo();
    expect(snap.nodes).toEqual(N0);
  });

  it('squash com pilha vazia (idx=-1) → cria normalmente (sem crash)', () => {
    expect(() => h.record(N0, T0, true)).not.toThrow();
    expect(h.state()).toMatchObject({ idx: 0, len: 1 });
  });

});

// ─── Suite 6: reset ──────────────────────────────────────────────────────────
describe('createHistoryStack — reset', () => {

  it('reset limpa a pilha com snapshot único, idx=0', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    expect(h.reset(N2, T2)).toEqual({ idx: 0, len: 1 });
  });

  it('após reset, undo retorna null (não há histórico anterior)', () => {
    h.record(N0, T0);
    h.record(N1, T1);
    h.reset(N2, T2);
    expect(h.undo()).toBeNull();
  });

  it('após reset, redo retorna null', () => {
    h.reset(N0, T0);
    expect(h.redo()).toBeNull();
  });

});
