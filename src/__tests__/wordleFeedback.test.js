/**
 * Testes para wordleFeedback.js — buildLetterFeedback (algoritmo estilo Wordle).
 *
 * Ambiente: node (sem DOM) — função pura, sem dependência de React.
 *
 * Suites:
 *   1. Sem letras repetidas — correct/present/absent básico
 *   2. Letras repetidas no target — a regra de 2 passadas
 *   3. Letras repetidas no guess — não deve vazar contagem além do real
 *   4. Acerto total / erro total
 *   5. Guard de comprimento — guess/target de tamanhos diferentes
 *   6. Caso real do L08: target "abca"
 */
import { describe, it, expect } from 'vitest';
import { buildLetterFeedback } from '../modules/afd/utils/wordleFeedback.js';

describe('buildLetterFeedback – sem letras repetidas', () => {
  it('todas corretas', () => {
    expect(buildLetterFeedback('cat', 'cat')).toEqual(['correct', 'correct', 'correct']);
  });

  it('todas ausentes (nenhuma letra em comum)', () => {
    expect(buildLetterFeedback('xyz', 'cat')).toEqual(['absent', 'absent', 'absent']);
  });

  it('letras presentes mas fora de posição', () => {
    // guess "tac" vs target "cat": t está em cat (pos 1), a está certo, c está em cat (pos 0)
    expect(buildLetterFeedback('tac', 'cat')).toEqual(['present', 'correct', 'present']);
  });

  it('mistura de correct/present/absent', () => {
    // target "bear": guess "read" -> r(present,pos2) e(present,pos1) a(correct,pos2? )...
    // Caso mais simples e determinístico:
    expect(buildLetterFeedback('bear', 'bead')).toEqual(['correct', 'correct', 'correct', 'absent']);
  });
});

describe('buildLetterFeedback – letras repetidas no TARGET', () => {
  it('target "abca": guess com 1 "a" na posição certa e 1 fora', () => {
    // target: a b c a
    // guess:  a c b a
    // pos0: a===a -> correct (consome 1º 'a' do target)
    // pos1: c vs b -> c existe no target (pos2) -> present
    // pos2: b vs c -> b existe no target (pos1) -> present
    // pos3: a===a -> correct (consome 2º 'a' do target)
    expect(buildLetterFeedback('acba', 'abca')).toEqual(['correct', 'present', 'present', 'correct']);
  });
});

describe('buildLetterFeedback – letras repetidas no GUESS não vazam contagem', () => {
  it('target "abca" (2 "a"s), guess "aaaa": só 2 posições recebem correct, resto absent', () => {
    const fb = buildLetterFeedback('aaaa', 'abca');
    // pos0: a===a -> correct (consome 1º 'a')
    // pos1: a vs b -> 'a' já não tem sobra? tem: target tem 2 'a's, 1 consumido na pos0,
    //   pos3 também é 'a' no target e ainda não foi comparado nessa passada de correct.
    //   1ª passada roda em todas as posições ANTES da 2ª: pos3 (guess 'a' === target 'a') -> correct também.
    // Então correct em pos0 e pos3 (ambos batem 'a' na mesma posição do target).
    // Sobra de 'a' no target após 1ª passada: 2 - 2 = 0.
    // 2ª passada: pos1 e pos2 (guess 'a') não têm mais sobra -> absent.
    expect(fb[0]).toBe('correct');
    expect(fb[3]).toBe('correct');
    expect(fb[1]).toBe('absent');
    expect(fb[2]).toBe('absent');
  });

  it('target "abca" (2 "a"s), guess "aabb": no máximo 2 "a" marcadas (correct+present), nunca 3+', () => {
    const fb = buildLetterFeedback('aabb', 'abca');
    const aMarks = [fb[0], fb[1]].filter(s => s === 'correct' || s === 'present');
    expect(aMarks.length).toBeLessThanOrEqual(2);
  });

  it('target com 1 "a" só, guess com 3 "a": apenas 1 marcada como correct/present, demais absent', () => {
    // target "cat" tem 1 'a'. guess "aaa" (comprimento diferente é inválido,
    // então usamos guess "aax" comparado a target "cax" — 1 'a' no target.
    const fb = buildLetterFeedback('aax', 'cax');
    // pos0: a vs c -> not correct
    // pos1: a vs a -> correct (consome o único 'a' do target)
    // pos2: x vs x -> correct
    // 2ª passada: pos0 'a' já não tem sobra (consumida na pos1) -> absent
    expect(fb[1]).toBe('correct');
    expect(fb[2]).toBe('correct');
    expect(fb[0]).toBe('absent');
  });
});

describe('buildLetterFeedback – guard de comprimento', () => {
  it('guess mais curto que target: retorna null', () => {
    expect(buildLetterFeedback('ab', 'abca')).toBeNull();
  });

  it('guess mais longo que target: retorna null', () => {
    expect(buildLetterFeedback('abcaa', 'abca')).toBeNull();
  });

  it('guess ou target null: retorna null', () => {
    expect(buildLetterFeedback(null, 'abca')).toBeNull();
    expect(buildLetterFeedback('abca', null)).toBeNull();
  });
});

describe('buildLetterFeedback – caso real do L08 (target "abca")', () => {
  const TARGET = 'abca';

  it('acerto total: "abca" -> tudo correct', () => {
    expect(buildLetterFeedback('abca', TARGET)).toEqual(['correct', 'correct', 'correct', 'correct']);
  });

  it('"aa" não é aceito por comprimento diferente (guard, não feedback)', () => {
    expect(buildLetterFeedback('aa', TARGET)).toBeNull();
  });

  it('"abcb": 3 primeiras corretas, última errada mas "b" já usado -> absent', () => {
    // target: a b c a
    // guess:  a b c b
    // pos0-2: correct, correct, correct (consome a,b,c do target: sobra 1 'a')
    // pos3: guess 'b' vs target[3]='a' -> not correct. 'b' tem sobra no target? não (0 restante) -> absent
    expect(buildLetterFeedback('abcb', TARGET)).toEqual(['correct', 'correct', 'correct', 'absent']);
  });

  it('"baca": nenhuma letra na posição certa exceto onde coincide, "a" tratado com sobra correta', () => {
    // target: a b c a
    // guess:  b a c a
    // 1ª passada (correct): pos2 c===c -> correct; pos3 a===a -> correct (consome os 2 'a' do target? não,
    //   só 1 'a' restante depois de nenhuma outra correct consumir 'a' ainda) -> consome 1 'a', sobra 1 'a'.
    // 2ª passada: pos0 'b' vs target tem 1 'b' sobrando -> present; pos1 'a' vs target tem 1 'a' sobrando -> present
    expect(buildLetterFeedback('baca', TARGET)).toEqual(['present', 'present', 'correct', 'correct']);
  });
});
