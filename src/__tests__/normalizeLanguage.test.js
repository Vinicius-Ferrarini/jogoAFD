/**
 * Testes para normalizeLanguage.js — forma canônica de linguagens formais
 * usada para dedupe entre AFD/AP/MT-Recon (ver docs/MENOR_PALAVRA_MINIGAME.md).
 *
 * Ambiente: node (sem DOM) — função pura.
 *
 * Nota (pós docs/AFD_NOTACAO_ELEVADO.md): level.formula do AFD hoje já usa
 * Unicode sobrescrito nativamente (aⁿ, não a^n) — a conversão ASCII→Unicode
 * abaixo não é mais exercitada pelo fluxo real do dataset AFD (que já chega
 * pronto), mas a função continua precisando saber fazer essa conversão por
 * robustez (ex.: um texto ASCII cru vindo de outra origem no futuro) — os
 * testes abaixo continuam validando a função pura, não mais "casos reais"
 * do dataset atual.
 *
 * Suites:
 *   1. Prefixo "L = " (só AFD) — removido
 *   2. Expoentes ASCII → Unicode (^n, ^m, ^2m etc.)
 *   3. Operadores de comparação (>=, <=, !=)
 *   4. Espaçamento (colapso de espaços, bordas de chaves)
 *   5. Casos do formato real dos 3 módulos, incluindo o único par
 *      cross-módulo idêntico do dataset (AFD-L14 ↔ MT-Recon-L6)
 */
import { describe, it, expect } from 'vitest';
import { normalizeLanguage } from '../modules/shared/wordExercises/normalizeLanguage.js';

describe('normalizeLanguage — prefixo "L ="', () => {
  it('remove "L = " no início', () => {
    expect(normalizeLanguage('L = {a^n | n > 0}')).toBe('{aⁿ | n > 0}');
  });

  it('remove "L=" sem espaço', () => {
    expect(normalizeLanguage('L={a^n}')).toBe('{aⁿ}');
  });

  it('não mexe em textos que já não têm o prefixo (AP/MT-Recon)', () => {
    expect(normalizeLanguage('{aⁿbⁿ / n ≥ 0}')).toBe('{aⁿbⁿ / n ≥ 0}');
  });
});

describe('normalizeLanguage — expoentes ASCII → Unicode', () => {
  it('^n → ⁿ', () => {
    expect(normalizeLanguage('a^n')).toBe('aⁿ');
  });

  it('múltiplas variáveis: ^n e ^m', () => {
    expect(normalizeLanguage('a^n b^m')).toBe('aⁿ bᵐ');
  });

  it('expoente com dígito + letra: ^2m → ²ᵐ', () => {
    expect(normalizeLanguage('b^2m')).toBe('b²ᵐ');
  });

  it('expoente com dígito + letra: ^3p → ³ᵖ', () => {
    expect(normalizeLanguage('c^3p')).toBe('c³ᵖ');
  });

  it('parênteses antes do expoente: (ab)^n → (ab)ⁿ', () => {
    expect(normalizeLanguage('(ab)^n (cd)^m')).toBe('(ab)ⁿ (cd)ᵐ');
  });

  it('letra sem sobrescrito Unicode oficial (q) é mantida como está', () => {
    // Unicode não define sobrescrito latino padrão para "q" — limitação
    // aceita e documentada em SUPERSCRIPT_MAP.
    expect(normalizeLanguage('d^q')).toBe('dq');
  });

  it('caso real do L59 (n,m,p,q): q fica sem sobrescrito, os demais não', () => {
    expect(normalizeLanguage('a^n b^2m c^p d^q')).toBe('aⁿ b²ᵐ cᵖ dq');
  });
});

describe('normalizeLanguage — operadores de comparação', () => {
  it('>= → ≥', () => {
    expect(normalizeLanguage('n >= 0')).toBe('n ≥ 0');
  });

  it('<= → ≤', () => {
    expect(normalizeLanguage('n <= 3')).toBe('n ≤ 3');
  });

  it('!= → ≠', () => {
    expect(normalizeLanguage('n != 0')).toBe('n ≠ 0');
  });

  it('já em Unicode (≥) permanece igual', () => {
    expect(normalizeLanguage('n ≥ 0')).toBe('n ≥ 0');
  });
});

describe('normalizeLanguage — espaçamento', () => {
  it('colapsa espaços múltiplos', () => {
    expect(normalizeLanguage('a    b')).toBe('a b');
  });

  it('remove espaço logo após "{" e antes de "}"', () => {
    expect(normalizeLanguage('{ w ∈ {a,b}* }')).toBe('{w ∈ {a,b}*}');
  });

  it('trim geral nas bordas', () => {
    expect(normalizeLanguage('   {a}   ')).toBe('{a}');
  });
});

describe('normalizeLanguage — guards', () => {
  it('string vazia → string vazia', () => {
    expect(normalizeLanguage('')).toBe('');
  });

  it('null/undefined → string vazia', () => {
    expect(normalizeLanguage(null)).toBe('');
    expect(normalizeLanguage(undefined)).toBe('');
  });
});

describe('normalizeLanguage — casos do formato real dos 3 módulos', () => {
  // AFD-L8/L40: level.formula já vem em Unicode nativamente hoje (ver nota
  // do topo do arquivo) — estes 2 casos exercitam a conversão ASCII→Unicode
  // com o MESMO texto/estrutura que os níveis tinham antes da normalização,
  // como teste de regressão da função pura (não mais um "caso real" lido
  // direto do dataset).
  it('padrão equivalente ao AFD-L8 antes da normalização: "L = { a(bc)^n a | n > 0 }"', () => {
    expect(normalizeLanguage('L = { a(bc)^n a | n > 0 }')).toBe('{a(bc)ⁿ a | n > 0}');
  });

  it('padrão equivalente ao AFD-L40 antes da normalização: "L = {a^n b^2m d c^3p d / n >= 0, m >= 0, p >= 0}"', () => {
    expect(normalizeLanguage('L = {a^n b^2m d c^3p d / n >= 0, m >= 0, p >= 0}'))
      .toBe('{aⁿ b²ᵐ d c³ᵖ d / n ≥ 0, m ≥ 0, p ≥ 0}');
  });

  it('AP: já normalizado, some só o espaço extra dentro das chaves', () => {
    expect(normalizeLanguage('{ aⁿbⁿ / n ≥ 0 }')).toBe('{aⁿbⁿ / n ≥ 0}');
  });

  it('MT-Recon: já normalizado, sem mudança', () => {
    expect(normalizeLanguage('{aⁿbⁿ / n ≥ 0}')).toBe('{aⁿbⁿ / n ≥ 0}');
  });

  it('único par cross-módulo idêntico do dataset: AFD-L14 ↔ MT-Recon-L6', () => {
    const afdL14Formula   = 'L = {w ∈ {a,b}* / |w|a = |w|b}';
    const mtReconL6Language = '{w ∈ {a,b}* / |w|a = |w|b}';
    expect(normalizeLanguage(afdL14Formula)).toBe(normalizeLanguage(mtReconL6Language));
  });
});
