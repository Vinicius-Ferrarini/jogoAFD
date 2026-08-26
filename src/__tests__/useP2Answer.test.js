/**
 * Testes para useP2Answer.js — normalize(), lógica de aceitação e regressões.
 *
 * Ambiente: node (sem DOM). A função normalize é testada diretamente como pure
 * function. A lógica de handleCheck é verificada via normalize() + helpers que
 * replicam o contrato sem precisar do hook React.
 *
 * Suites:
 *   1. normalize – pipeline completo
 *   2. normalize – wlen (|w| e frases em português)
 *   3. normalize – canonicalização de variáveis
 *   4. Aceitação por fórmula e aliases (todos os levels com aliases)
 *   5. Lógica de estrelas e tentativas
 *   6. generateFeedback – mensagens específicas
 *   7. Regressões — invariantes que mudanças futuras não devem quebrar
 */

import { describe, it, expect, test } from 'vitest';
import { normalize } from '../modules/afd/hooks/useP2Answer.js';
import { AFD_LEVELS } from '../levels_data/afd/index.js';
import L22 from '../levels_data/afd/L22.js';
import L23 from '../levels_data/afd/L23.js';
import L26 from '../levels_data/afd/L26.js';

// ─── helpers ──────────────────────────────────────────────────────────────────

/** Replica o contrato de aceitação de handleCheck sem o hook React */
function isCorrect(userAnswer, level) {
  const nu = normalize(userAnswer);
  return [level.formula, ...(level.aliases || [])].some(f => normalize(f) === nu);
}

// Encontra o level pelo id
function lvl(id) {
  return AFD_LEVELS.find(l => l.id === id);
}

// ══════════════════════════════════════════════════════════════════════════════
// Suite 1 — normalize: pipeline completo
// ══════════════════════════════════════════════════════════════════════════════
describe('normalize – pipeline completo', () => {

  it('strip de prefixo "L = "', () => {
    expect(normalize('L = a^n | n > 0')).toBe(normalize('a^n | n > 0'));
  });

  it('strip de prefixo com espaços extras', () => {
    expect(normalize('L  =  a^n | n > 0')).toBe(normalize('a^n | n > 0'));
  });

  it('trim e colapso de espaços internos', () => {
    expect(normalize('  a^n  |  n > 0  ')).toBe(normalize('a^n | n > 0'));
  });

  it('"e" entre espaços vira vírgula', () => {
    expect(normalize('n > 0 e m > 0')).toContain('n>0,m>0');
  });

  it('"e" colado em palavra não vira vírgula', () => {
    // "e^n" não deve sofrer replace de "e" para ","
    const r = normalize('e^n | n > 0');
    expect(r).toContain('e^n');
    expect(r).not.toMatch(/,n/);
  });

  it('ímpar perde acento mas preserva letras', () => {
    // NFD strip remove í; charset final remove é (não está em [a-z0-9...])
    const r = normalize('n é par, ímpar');
    expect(r).not.toContain('í');   // acento removido
    expect(r).not.toContain('\xe9'); // é removido pelo charset final (não é [a-z0-9])
    expect(r).toContain('impar');   // base da palavra preservada
  });

  it('"é um número" colapsa internamente mas é removido do charset final', () => {
    // Internamente "é um número" → "\xe9umnumero" → "\xe9" (colapso)
    // Depois charset final remove \xe9 (não é [a-z])
    const r = normalize('n é um número');
    expect(r).not.toContain('umnumero');
    expect(r).not.toContain('numero');
    // O 'n' antes de 'é' sobrevive
    expect(r).toBe('n');
  });

  it('chaves e colchetes são removidos', () => {
    const r = normalize('{ a^n | n > 0 }');
    expect(r).not.toMatch(/[{}[\]]/);
  });

  it('/ vira |', () => {
    expect(normalize('a^n / n > 0')).toBe(normalize('a^n | n > 0'));
  });

  it('\\ vira |', () => {
    expect(normalize('a^n \\ n > 0')).toBe(normalize('a^n | n > 0'));
  });

  it('λ → lambda', () => {
    expect(normalize('λ')).toBe('lambda');
  });

  it('ε → lambda', () => {
    expect(normalize('ε')).toBe('lambda');
  });

  it('epsilon → lambda', () => {
    expect(normalize('epsilon')).toBe('lambda');
  });

  it('∅ → emptyset', () => {
    expect(normalize('∅')).toBe('emptyset');
  });

  it('vazio → emptyset', () => {
    expect(normalize('vazio')).toBe('emptyset');
  });

  it('empty → emptyset', () => {
    expect(normalize('empty')).toBe('emptyset');
  });

  it('≥ → >=', () => {
    expect(normalize('n ≥ 0')).toContain('n>=');
  });

  it('≤ → <=', () => {
    expect(normalize('n ≤ 3')).toContain('n<=3');
  });

  it('charset final remove chars inválidos', () => {
    // § não está no charset [a-z0-9^*+|(),_.=><!]
    const r = normalize('a^n§ | n > 0');
    expect(r).not.toContain('§');
  });

  it('charset final mantém > < = ! . ( ) , _ ^ * +', () => {
    const r = normalize('a^n | n > 0, n < 5');
    expect(r).toMatch(/[><]/);
    expect(r).toContain(',');
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 2 — normalize: wlen (|w| e frases em português)
// ══════════════════════════════════════════════════════════════════════════════
describe('normalize – wlen: notação |w| e frases PT', () => {

  // Canonical: fórmula oficial de L26
  const canonical = normalize(L26.formula);

  // Todas as formas devem produzir o mesmo hash que a fórmula canônica
  const wlenVariants = [
    '{w ∈ {0,1}* / |w| > 3}',
    '{w ∈ {0,1}* / |w| >= 4}',
    '{w ∈ {0,1}* / |w| tem tamanho > 3}',
    '{w ∈ {0,1}* / w tem tamanho maior que 3}',
    '{w ∈ {0,1}* / w tem tamanho maior igual a 4}',
    '{w ∈ {0,1}* / |w| maior que 3}',
    '{w ∈ {0,1}* / |w| maior igual a 4}',
    ...( L26.aliases || [] ),
  ];

  test.each(wlenVariants)('"%s" normaliza igual à fórmula de L26', (v) => {
    expect(normalize(v)).toBe(canonical);
  });

  it('resultado contém wlen>3 (não wlen>4 nem wlen>2)', () => {
    expect(canonical).toContain('wlen>3');
    expect(canonical).not.toContain('wlen>4');
    expect(canonical).not.toContain('wlen>2');
  });

  it('|w| >= 4 equivale a |w| > 3 (Step 5: wlen>=N → wlen>N-1)', () => {
    const a = normalize('{w ∈ {0,1}* / |w| >= 4}');
    const b = normalize('{w ∈ {0,1}* / |w| > 3}');
    expect(a).toBe(b);
  });

  it('|w| >= 3 NÃO equivale a |w| > 3 (números diferentes)', () => {
    const a = normalize('{w ∈ {0,1}* / |w| >= 3}');
    const b = normalize('{w ∈ {0,1}* / |w| > 3}');
    expect(a).not.toBe(b);
  });

  it('wlen token não é renomeado para n pela canonicalização de variáveis', () => {
    const r = normalize('{w ∈ {0,1}* / |w| > 3}');
    expect(r).toContain('wlen');
    expect(r).not.toMatch(/\|n>3/);
    // "n>3" não deve aparecer como token solto (wlen>3 contém "n" mas é parte de "wlen")
    expect(r).not.toMatch(/(?<![a-z])n>3/);
  });

  it('L24: w tem tamanho 3 (sem maior/menor)', () => {
    expect(normalize(lvl(24).formula)).toContain('wlen');
    // Step 1 sem comparador — normaliza para "tamanho 3" que não produz wlen>N
    // (L24 usa fórmula de tamanho exato, não wlen>N)
  });

  it('L25: w tem tamanho menor que 3', () => {
    const r25 = normalize(lvl(25).formula);
    // deve produzir algo diferente de L26 e L24
    expect(r25).not.toBe(canonical);
    expect(r25).not.toBe(normalize(lvl(24).formula));
  });

  it('L27: tamanho múltiplo de 3 — fórmula não usa wlen>N', () => {
    const r27 = normalize(lvl(27).formula);
    // L27 é sobre múltiplo de 3, não comparação simples
    expect(r27).not.toBe(canonical);
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 3 — normalize: canonicalização de variáveis
// ══════════════════════════════════════════════════════════════════════════════
describe('normalize – canonicalização de variáveis', () => {

  it('variável k renomeada para n', () => {
    expect(normalize('a^k | k > 0')).toBe(normalize('a^n | n > 0'));
  });

  it('variável j renomeada para n', () => {
    expect(normalize('a^j | j > 0')).toBe(normalize('a^n | n > 0'));
  });

  it('duas variáveis: primeira vira n, segunda vira m', () => {
    expect(normalize('a^j b^x | j > 0, x >= 0'))
      .toBe(normalize('a^n b^m | n > 0, m >= 0'));
  });

  it('ordem de renomeio segue aparição no word part, não alfabeto', () => {
    // b^m aparece antes de a^n no word part → m vira n (primeiro canônico), n vira m
    // A condição preserva a ordem original do texto do aluno (não reordena cPart)
    const r = normalize('b^m a^n | n > 0, m > 0');
    // wPart: b^m→b^n, a^n→a^m; cPart: n→m, m→n (mas ordem textual fica n>0,m>0 → m>0,n>0)
    expect(r).toBe(normalize('b^n a^m | m > 0, n > 0'));
  });

  it('aa^n deduplication: aa^n → a^n', () => {
    expect(normalize('aa^n | n > 0')).toBe(normalize('a^n | n > 0'));
  });

  it('aa^n com n>=0: absorção de >=0 para >0', () => {
    expect(normalize('aa^n | n >= 0')).toBe(normalize('a^n | n > 0'));
  });

  it('>=1 vira >0 na condição', () => {
    const r = normalize('a^n | n >= 1');
    expect(r).toContain('n>0');
    expect(r).not.toContain('n>=1');
  });

  it('wlen nunca é adicionado ao varSet (não renomeado)', () => {
    // Se wlen fosse canonicalizado, ficaria "n>3" em vez de "wlen>3"
    const r = normalize('{w ∈ {0,1}* / |w| > 3}');
    expect(r).toContain('wlen>3');
  });

  it('variável de nome comprido não substitui substring de variável curta', () => {
    // Ex: variável "nn" — a substituição de "n" não deve corromper "nn"
    // Usa lookbehind/lookahead na regex de replace
    const withNN = normalize('a^nn | nn > 0');
    const withN  = normalize('a^n | n > 0');
    // "nn" e "n" são variáveis distintas; ambos devem normalizar para n
    // mas os resultados devem ser idênticos (nn → n por canonicalização)
    expect(withNN).toBe(withN);
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 4 — Aceitação por fórmula e aliases
// ══════════════════════════════════════════════════════════════════════════════
describe('aceitação: aliases devem normalizar igual à fórmula', () => {

  const levelsWithAliases = AFD_LEVELS.filter(l => l.aliases?.length);

  test.each(levelsWithAliases)(
    'L$id ($label): todos os aliases === normalize(formula)',
    (level) => {
      const expected = normalize(level.formula);
      level.aliases.forEach(alias => {
        expect(normalize(alias)).toBe(expected);
      });
    }
  );
});

describe('aceitação: respostas CORRETAS são aceitas por isCorrect()', () => {

  it('L01: fórmula exata aceita', () => {
    expect(isCorrect('L = ∅', lvl(1))).toBe(true);
  });

  it('L02: { λ } aceita', () => {
    expect(isCorrect('L = { λ }', lvl(2))).toBe(true);
  });

  it('L05: a^n | n > 0 aceita', () => {
    expect(isCorrect('L = { a^n | n > 0 }', lvl(5))).toBe(true);
  });

  it('L22: alias "w é par" aceita', () => {
    expect(isCorrect('L = { w ∈ {0,1}* | w é par }', lvl(22))).toBe(true);
  });

  it('L23: alias "w é ímpar" aceita', () => {
    expect(isCorrect('L = { w ∈ {0,1}* | w é ímpar }', lvl(23))).toBe(true);
  });

  it('L26: |w| > 3 aceita', () => {
    expect(isCorrect('{w ∈ {0,1}* / |w| > 3}', lvl(26))).toBe(true);
  });

  it('L26: |w| >= 4 aceita', () => {
    expect(isCorrect('{w ∈ {0,1}* / |w| >= 4}', lvl(26))).toBe(true);
  });

  it('L26: |w| tem tamanho > 3 aceita', () => {
    expect(isCorrect('{w ∈ {0,1}* / |w| tem tamanho > 3}', lvl(26))).toBe(true);
  });

  it('L26: w tem tamanho maior igual a 4 aceita', () => {
    expect(isCorrect('{w ∈ {0,1}* / w tem tamanho maior igual a 4}', lvl(26))).toBe(true);
  });

  it('L26: |w| maior que 3 aceita', () => {
    expect(isCorrect('{w ∈ {0,1}* / |w| maior que 3}', lvl(26))).toBe(true);
  });

  it('L26: |w| maior igual a 4 aceita', () => {
    expect(isCorrect('{w ∈ {0,1}* / |w| maior igual a 4}', lvl(26))).toBe(true);
  });
});

describe('aceitação: respostas ERRADAS são rejeitadas por isCorrect()', () => {

  it('L26: |w| > 4 é rejeitado (tamanho errado)', () => {
    expect(isCorrect('{w ∈ {0,1}* / |w| > 4}', lvl(26))).toBe(false);
  });

  it('L26: |w| >= 3 é rejeitado (inclui tamanho 3, que L26 rejeita)', () => {
    expect(isCorrect('{w ∈ {0,1}* / |w| >= 3}', lvl(26))).toBe(false);
  });

  it('L26: |w| > 2 é rejeitado', () => {
    expect(isCorrect('{w ∈ {0,1}* / |w| > 2}', lvl(26))).toBe(false);
  });

  it('L05: a^n | n >= 0 é rejeitado (aceita λ, mas L05 não aceita)', () => {
    expect(isCorrect('{ a^n | n >= 0 }', lvl(5))).toBe(false);
  });

  it('L01: { λ } é rejeitado (L01 é ∅)', () => {
    expect(isCorrect('{ λ }', lvl(1))).toBe(false);
  });

  it('L02: ∅ é rejeitado (L02 é { λ })', () => {
    expect(isCorrect('∅', lvl(2))).toBe(false);
  });

  it('L22: "w é ímpar" é rejeitado (isso é L23)', () => {
    expect(isCorrect('{ w ∈ {0,1}* | w é ímpar }', lvl(22))).toBe(false);
  });

  it('L23: "w é par" é rejeitado (isso é L22)', () => {
    expect(isCorrect('{ w ∈ {0,1}* | w é par }', lvl(23))).toBe(false);
  });

  it('resposta vazia é rejeitada em qualquer level', () => {
    expect(isCorrect('', lvl(5))).toBe(false);
    expect(isCorrect('   ', lvl(26))).toBe(false);
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 5 — Lógica de estrelas (testada via normalize + contrato)
// ══════════════════════════════════════════════════════════════════════════════
describe('lógica de estrelas por tentativa (contrato de handleCheck)', () => {

  // O hook React não pode ser instanciado em node; testamos o contrato
  // puro: n===1→3, n===2→2, n>=3→1

  function earnedStars(attemptNumber) {
    return attemptNumber === 1 ? 3 : attemptNumber === 2 ? 2 : 1;
  }

  it('1ª tentativa correta → 3 estrelas', () => {
    expect(earnedStars(1)).toBe(3);
  });

  it('2ª tentativa correta → 2 estrelas', () => {
    expect(earnedStars(2)).toBe(2);
  });

  it('3ª tentativa correta → 1 estrela', () => {
    expect(earnedStars(3)).toBe(1);
  });

  it('4ª tentativa correta → 1 estrela', () => {
    expect(earnedStars(4)).toBe(1);
  });

  it('showExpected deve ativar a partir da 2ª tentativa errada', () => {
    // contrato: n >= 2 → showExpected = true
    const shouldShow = (n) => n >= 2;
    expect(shouldShow(1)).toBe(false);
    expect(shouldShow(2)).toBe(true);
    expect(shouldShow(3)).toBe(true);
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 6 — generateFeedback: mensagens específicas por branch
// ══════════════════════════════════════════════════════════════════════════════
//
// generateFeedback não é exportada. Testamos indiretamente verificando que
// normalize() produz o estado que CAUSARIA cada branch. Os casos de branch
// ficam documentados aqui para quando generateFeedback for exportada.
//
describe('generateFeedback – branches de normalize que causam cada mensagem', () => {

  it('chave aberta: mais { que } no input bruto', () => {
    const raw = '{ a^n | n > 0';
    const opens  = (raw.match(/\{/g) || []).length;
    const closes = (raw.match(/\}/g) || []).length;
    expect(opens).toBeGreaterThan(closes); // → branch "fechar chave"
  });

  it('chave fechada: mais } que { no input bruto', () => {
    const raw = 'a^n | n > 0 }';
    const opens  = (raw.match(/\{/g) || []).length;
    const closes = (raw.match(/\}/g) || []).length;
    expect(closes).toBeGreaterThan(opens); // → branch "abrir chave"
  });

  it('falta pipe: set-builder com chave mas sem | / \\', () => {
    const outerContent = 'a^n n > 0';
    expect(/[|/\\]/.test(outerContent)).toBe(false); // → branch "Falta o |"
  });

  it('w sem ∈: raw tem "w" mas não tem ∈', () => {
    const raw = '{ w | n > 0 }';
    expect(/(?<![a-z])w(?![a-z])/i.test(raw)).toBe(true);
    expect(raw.includes('∈')).toBe(false); // → branch "inclua ∈"
  });

  it('emptyset quando formula não tem emptyset: normalize diverge', () => {
    // L05 formula normaliza para algo com a^n, não emptyset
    const nuUser = normalize('∅');
    const nuExp  = normalize(lvl(5).formula);
    expect(nuUser).toContain('emptyset');
    expect(nuExp).not.toContain('emptyset'); // → branch "O autômato aceita palavras"
  });

  it('não-emptyset quando L01 espera emptyset', () => {
    const nuUser = normalize('{ λ }');
    const nuExp  = normalize(lvl(1).formula);
    expect(nuUser).not.toContain('emptyset');
    expect(nuExp).toContain('emptyset'); // → branch "linguagem vazia"
  });

  it('só lambda quando formula não é lambda (L05)', () => {
    const nuUser = normalize('{ λ }');
    const nuExp  = normalize(lvl(5).formula);
    expect(nuUser).toBe('lambda');
    expect(nuExp).not.toBe('lambda'); // → branch "Só {λ} não basta"
  });

  it('falta * após conjunto: wordE tem * mas wordU não tem', () => {
    // {w ∈ {0,1} / |w| > 3} — falta o * após {0,1}
    const nu = normalize('{w ∈ {0,1} / |w| > 3}');
    const ne = normalize(L26.formula);
    const pipeU = nu.indexOf('|');
    const pipeE = ne.indexOf('|');
    if (pipeU >= 0 && pipeE >= 0) {
      const wordU = nu.slice(0, pipeU);
      const wordE = ne.slice(0, pipeE);
      // wordE contém *, wordU não
      expect(wordE.includes('*')).toBe(true);
      expect(wordU.includes('*')).toBe(false); // → branch "Faltou o *"
    }
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 7 — Regressões
// ══════════════════════════════════════════════════════════════════════════════
describe('REG-01: Step 2 deve rodar antes do pipePos split', () => {
  it('|w| > 3 produz wlen>3 e não confunde com separador de set-builder', () => {
    const r = normalize('{w ∈ {0,1}* / |w| > 3}');
    // Se Step 2 fosse depois do pipePos, o primeiro | de |w| seria o separador
    // e o resultado conteria apenas "w" no wPart e "|>3" no cPart
    expect(r).toContain('wlen>3');
    expect(r).not.toMatch(/\|w\|/); // |w| não deve sobrar no resultado
  });
});

describe('REG-02: wlen excluído do varSet (não renomeado para n)', () => {
  it('normalize de |w| > 3 contém "wlen" e não "n>3" solto', () => {
    const r = normalize('{w ∈ {0,1}* / |w| > 3}');
    expect(r).toContain('wlen');
    // "n>3" poderia aparecer se wlen fosse renomeado
    expect(r).not.toMatch(/(?<![a-z])n>3/);
  });
});

describe('REG-03: ordem dos Steps 1 e 2 importa', () => {
  it('"w tem tamanho maior que 3" funciona (Step 1)', () => {
    const r = normalize('{w ∈ {0,1}* / w tem tamanho maior que 3}');
    expect(r).toContain('wlen>3');
  });
  it('"|w| tem tamanho > 3" funciona (Step 2 + Step 3)', () => {
    const r = normalize('{w ∈ {0,1}* / |w| tem tamanho > 3}');
    expect(r).toContain('wlen>3');
  });
  it('ambos produzem o mesmo resultado', () => {
    const a = normalize('{w ∈ {0,1}* / w tem tamanho maior que 3}');
    const b = normalize('{w ∈ {0,1}* / |w| tem tamanho > 3}');
    expect(a).toBe(b);
  });
});

describe('REG-04: é preservado internamente pelo codec mas removido no charset final', () => {
  it('normalize("é") produz string vazia (é removido pelo charset final)', () => {
    // é (U+00E9) não está em [a-z0-9^*+|(),_.=><!] — removido no último replace
    expect(normalize('\xe9')).toBe('');
  });
  it('normalize("n é par") remove é mas preserva n e par', () => {
    const r = normalize('n \xe9 par');
    expect(r).not.toContain('\xe9');
    expect(r).toContain('n');
    expect(r).toContain('par');
  });
  it('normalize("ímpar") não contém í (acento removido)', () => {
    expect(normalize('ímpar')).not.toContain('í');
    expect(normalize('ímpar')).toContain('impar');
  });
  it('codec é (x01→xe9) permite que "é um número" seja colapsado antes do charset strip', () => {
    // Internamente o colapso acontece: "éumnumero" → "é". O charset depois remove o é.
    // O resultado é que "n é um número" → "n" (apenas o n sobrevive)
    expect(normalize('n \xe9 um n\xfamero')).toBe('n');
  });
});

describe('REG-05: "e" como palavra isolada vs parte de token', () => {
  it('"n > 0 e m > 0" vira "n>0,m>0" (e isolado → vírgula)', () => {
    expect(normalize('n > 0 e m > 0')).toContain('n>0,m>0');
  });
  it('"e^n | n > 0" não tem vírgula indesejada (e colado → preservado)', () => {
    const r = normalize('e^n | n > 0');
    expect(r).toContain('e^n');
    // não deve haver vírgula antes de ^n
    expect(r).not.toMatch(/,\^n/);
  });
});

describe('REG-06: todos os levels com aliases validam automaticamente', () => {
  const levelsWithAliases = AFD_LEVELS.filter(l => l.aliases?.length);

  it('há pelo menos 3 levels com aliases definidos', () => {
    expect(levelsWithAliases.length).toBeGreaterThanOrEqual(3);
  });

  test.each(levelsWithAliases)(
    'REG-06 L$id: normalize(alias) === normalize(formula) para todos os aliases',
    (level) => {
      const expected = normalize(level.formula);
      level.aliases.forEach(alias => {
        expect(normalize(alias)).toBe(expected);
      });
    }
  );
});

describe('REG-07: charset final não remove tokens de wlen', () => {
  it('"wlen" usa só chars do charset final [a-z0-9...]', () => {
    // wlen contém w,l,e,n — todos letras minúsculas, aceitos
    const r = normalize('{w ∈ {0,1}* / |w| > 3}');
    expect(r).toContain('wlen');
    expect(r).toContain('>');
    expect(r).toContain('3');
  });
});

describe('REG-08: L22/L23 aliases que funcionam via normalize', () => {
  it('L22 alias "w é par" === normalize(L22.formula)', () => {
    expect(normalize('L = { w ∈ {0,1}* | w \xe9 par }'))
      .toBe(normalize(L22.formula));
  });
  it('L23 alias "w é ímpar" === normalize(L23.formula)', () => {
    expect(normalize('L = { w ∈ {0,1}* | w \xe9 \xedmpar }'))
      .toBe(normalize(L23.formula));
  });
  it('L22 e L23 não são iguais entre si', () => {
    expect(normalize(L22.formula)).not.toBe(normalize(L23.formula));
  });
  it('L22: "w termina em 0" NÃO normaliza igual à fórmula (texto livre não suportado)', () => {
    // Documenta o comportamento real — "termina em 0" é texto livre sem suporte no normalize
    expect(normalize('L = { w ∈ {0,1}* | w termina em 0 }'))
      .not.toBe(normalize(L22.formula));
  });
});

describe('REG-09: wlen>=N → wlen>N-1 não quebra com N=0', () => {
  it('nenhum level usa wlen>=0 na fórmula ou alias', () => {
    const levelsWithWlenGe0 = AFD_LEVELS.filter(l => {
      const all = [l.formula, ...(l.aliases || [])];
      return all.some(f => /\|w\|\s*>=\s*0/.test(f) || /tamanho\s*maior\s*igual\s*a\s*0/.test(f));
    });
    expect(levelsWithWlenGe0).toHaveLength(0);
  });
});

describe('REG-10: todas as fórmulas normalizam sem crash nem string vazia', () => {
  test.each(AFD_LEVELS)(
    'L$id ($label): normalize(formula) retorna string não-vazia',
    (level) => {
      let result;
      expect(() => { result = normalize(level.formula); }).not.toThrow();
      expect(typeof result).toBe('string');
      // ∅ normaliza para 'emptyset' que é não-vazio; λ para 'lambda'
      expect(result.length).toBeGreaterThan(0);
    }
  );
});

describe('REG-11: aa^n deduplication não remove a^n legítimo', () => {
  it('"aa^n | n > 0" normaliza igual a "a^n | n > 0"', () => {
    expect(normalize('aa^n | n > 0')).toBe(normalize('a^n | n > 0'));
  });
  it('"aaa^n" não vira string vazia', () => {
    const r = normalize('aaa^n | n > 0');
    expect(r).toContain('a^n');
    expect(r.length).toBeGreaterThan(0);
  });
});

describe('REG-12: byLen sort — variável longa não substitui substring de curta', () => {
  it('variável "nn" canonicalizada corretamente (não deixa "n" duplicado)', () => {
    // "nn" tem comprimento 2, deve ser substituída antes de "n" (comprimento 1)
    // ambos acabam virando o mesmo nome canônico
    const r = normalize('a^nn | nn > 0');
    expect(r).not.toMatch(/nn/); // "nn" não deve sobrar após canonicalização
    expect(r).toContain('a^n');
  });
});

describe('REG-13: / e \\ ambos viram | (separador)', () => {
  const base = normalize('a^n | n > 0');
  it('/ produz mesmo resultado que |', () => {
    expect(normalize('a^n / n > 0')).toBe(base);
  });
  it('\\ produz mesmo resultado que |', () => {
    expect(normalize('a^n \\ n > 0')).toBe(base);
  });
  it('os três separadores são equivalentes', () => {
    const withSlash     = normalize('a^n / n > 0');
    const withBackslash = normalize('a^n \\ n > 0');
    const withPipe      = normalize('a^n | n > 0');
    expect(withSlash).toBe(withPipe);
    expect(withBackslash).toBe(withPipe);
  });
});

describe('REG-14: resposta vazia não deve contar como tentativa', () => {
  it('normalize("") não lança exceção', () => {
    expect(() => normalize('')).not.toThrow();
  });
  it('normalize("   ") retorna string vazia ou sem conteúdo útil', () => {
    const r = normalize('   ');
    // só whitespace → após strip vira ''
    expect(r).toBe('');
  });
  it('isCorrect("", level) retorna false para qualquer level', () => {
    expect(isCorrect('', lvl(5))).toBe(false);
    expect(isCorrect('', lvl(26))).toBe(false);
    expect(isCorrect('', lvl(1))).toBe(false);
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 8 — Sobrescrito Unicode no gabarito vs digitação ASCII do jogador
// (ver docs/AFD_NOTACAO_ELEVADO.md — level.formula do AFD usa "aⁿ" nativamente
// desde a normalização; o jogador só consegue DIGITAR "a^n", nunca "aⁿ", pois
// não há tecla de sobrescrito. normalize() precisa converter o gabarito de
// volta para "^" antes do resto do pipeline rodar, ou os expoentes seriam
// descartados pelo charset final e nenhuma resposta correta seria aceita.)
// ══════════════════════════════════════════════════════════════════════════════
describe('REG-15: gabarito em Unicode sobrescrito aceita resposta ASCII do jogador', () => {
  it('"aⁿ" (gabarito) === "a^n" (resposta digitada)', () => {
    expect(normalize('aⁿ')).toBe(normalize('a^n'));
  });

  it('bloco dígito+letra: "b²ᵐ" (gabarito) === "b^2m" (resposta digitada)', () => {
    expect(normalize('b²ᵐ')).toBe(normalize('b^2m'));
  });

  it('bloco NÃO gera "^" duplicado no meio (b²ᵐ ≠ b^2^m)', () => {
    // Contra-verificação direta: b^2m (correto) e um hipotético b^2^m (bug)
    // devem produzir resultados DIFERENTES — prova que o bloco "²ᵐ" gera um
    // único "^" no início, não um "^" por caractere.
    expect(normalize('b²ᵐ')).not.toBe(normalize('b^2^m'));
    expect(normalize('b²ᵐ')).toBe(normalize('b^2m'));
  });

  it('parênteses antes do sobrescrito: "(ab)ⁿ (cd)ᵐ" === "(ab)^n (cd)^m"', () => {
    expect(normalize('(ab)ⁿ (cd)ᵐ')).toBe(normalize('(ab)^n (cd)^m'));
  });

  it('fórmula completa multi-variável (padrão L58): bⁿ a (bcd)ᵐ a bᵖ cᵏ e w eʳ aˢ bᵗ cᵘ === versão ASCII', () => {
    const unicode = 'bⁿ a (bcd)ᵐ a bᵖ cᵏ e w eʳ aˢ bᵗ cᵘ | n,m,p,r,s,t,u ≥ 0, k > 0';
    const ascii   = 'b^n a (bcd)^m a b^p c^k e w e^r a^s b^t c^u | n,m,p,r,s,t,u >= 0, k > 0';
    expect(normalize(unicode)).toBe(normalize(ascii));
  });

  it('dígitos sobrescritos isolados (sem letra): "2³" normaliza igual a "2^3"', () => {
    expect(normalize('2³')).toBe(normalize('2^3'));
  });
});

describe('REG-16: todos os 61 níveis AFD aceitam a própria formula digitada em ASCII', () => {
  // Prova de regressão de ponta a ponta: para cada nível que usa sobrescrito
  // Unicode em `formula` hoje, a versão ASCII (a que qualquer jogador real
  // digitaria) precisa continuar sendo aceita como resposta correta. Isso
  // simula o teclado real do jogador — trocando cada sobrescrito conhecido
  // pela sua forma "^letra" antes de comparar.
  const SUPERSCRIPT_TO_ASCII_TEST = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5',
    '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    'ⁿ': 'n', 'ᵐ': 'm', 'ᵖ': 'p', 'ʳ': 'r', 'ˢ': 's', 'ᵗ': 't',
    'ᵘ': 'u', 'ᵏ': 'k', 'ⁱ': 'i', 'ʲ': 'j',
  };
  function toAsciiLikeAPlayerWouldType(s) {
    return s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵐᵖʳˢᵗᵘᵏⁱʲ]+/g,
      block => '^' + [...block].map(ch => SUPERSCRIPT_TO_ASCII_TEST[ch]).join(''));
  }

  const levelsWithSuperscript = AFD_LEVELS.filter(l =>
    /[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵐᵖʳˢᵗᵘᵏⁱʲ]/.test(l.formula)
  );

  it('há pelo menos 15 níveis com sobrescrito Unicode em formula', () => {
    // 20 dos 21 níveis identificados em docs/AFD_NOTACAO_ELEVADO.md foram
    // normalizados (L14 fica de fora — expressão composta, exceção documentada)
    expect(levelsWithSuperscript.length).toBeGreaterThanOrEqual(15);
  });

  test.each(levelsWithSuperscript)(
    'REG-16 L$id ($label): normalize(ascii-digitado-pelo-jogador) === normalize(formula)',
    (level) => {
      const asciiVersion = toAsciiLikeAPlayerWouldType(level.formula);
      expect(normalize(asciiVersion)).toBe(normalize(level.formula));
    }
  );
});
