// Testes do registro compartilhado dos Boss (bossModules): a chave interna de
// progresso por módulo (precisa bater com o que cada componente lê/grava) e a
// derivação da legenda (um item por módulo distinto, na ordem de 1ª aparição).
import { describe, it, expect } from 'vitest';
import { internalKey, legendFor, MODULE_META, MODULE_COMPONENT } from '../modules/boss/bossModules.js';

describe('internalKey — chave de progresso no formato que cada módulo espera', () => {
  it('AFD 1/2 usam o id cru (numérico)', () => {
    expect(internalKey({ module: 'afd-p1', originalId: 59 })).toBe(59);
    expect(internalKey({ module: 'afd-p2', originalId: 61 })).toBe(61);
  });
  it('demais módulos usam prefixo + id nativo', () => {
    expect(internalKey({ module: 'ap-pilha', originalId: 'L19' })).toBe('ap-L19');
    expect(internalKey({ module: 'afd-min', originalId: 15 })).toBe('afd-min-15');
    expect(internalKey({ module: 'mt-recon', originalId: 'MT_RECON_L18' })).toBe('mt-recon-MT_RECON_L18');
    expect(internalKey({ module: 'mt-trans', originalId: 'MT_L25' })).toBe('mt-trans-MT_L25');
  });
});

describe('legendFor — um item por módulo distinto, na ordem de aparição', () => {
  it('dedup: módulo repetido gera só uma entrada', () => {
    const ex = [
      { module: 'afd-p1' }, { module: 'afd-p1' }, { module: 'ap-pilha' }, { module: 'ap-pilha' },
    ];
    expect(legendFor(ex)).toEqual([
      ['afd-p1', 'AFD 1'],
      ['ap-pilha', 'AP'],
    ]);
  });
  it('preserva a ordem de primeira aparição', () => {
    const ex = [{ module: 'mt-trans' }, { module: 'afd-p1' }, { module: 'mt-trans' }];
    expect(legendFor(ex).map(([m]) => m)).toEqual(['mt-trans', 'afd-p1']);
  });
});

describe('MODULE_META — consistência com os componentes', () => {
  it('todo módulo com componente tem cor e rótulo definidos', () => {
    for (const mod of Object.keys(MODULE_COMPONENT)) {
      expect(MODULE_META[mod]?.color).toBeTruthy();
      expect(MODULE_META[mod]?.label).toBeTruthy();
    }
  });
  it('as cores dos módulos são todas distintas (legenda legível)', () => {
    const colors = Object.values(MODULE_META).map(m => m.color);
    expect(new Set(colors).size).toBe(colors.length);
  });
});
