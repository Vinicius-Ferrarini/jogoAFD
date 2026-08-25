/**
 * Testes para wordGuessLogic.js — núcleo puro da mecânica "Termo"
 * (nextHintStage, typeChar, backspaceChar, distinctLetters, classifyAttempt).
 *
 * Ambiente: node (sem DOM) — funções puras, sem dependência de React.
 *
 * Suites:
 *   1. nextHintStage — avanço 0→1→2, trava em 2
 *   2. typeChar — só a próxima célula livre aceita, respeita targetLength
 *   3. backspaceChar — apaga a última letra preenchida, ignora índice errado
 *   4. distinctLetters — conjunto ordenado, sem repetição, filtra 'λ'
 *   5. classifyAttempt — shortest/correct/wrong
 */
import { describe, it, expect } from 'vitest';
import {
  nextHintStage, typeChar, backspaceChar, distinctLetters, classifyAttempt,
} from '../modules/shared/wordGuessLogic.js';

describe('nextHintStage', () => {
  it('0 → 1', () => { expect(nextHintStage(0)).toBe(1); });
  it('1 → 2', () => { expect(nextHintStage(1)).toBe(2); });
  it('2 → 2 (trava, não ultrapassa)', () => { expect(nextHintStage(2)).toBe(2); });
});

describe('typeChar', () => {
  it('digita na 1ª célula livre de um guess vazio', () => {
    expect(typeChar('', 0, 'a', 4)).toBe('a');
  });

  it('digita na próxima célula livre (índice == guess.length)', () => {
    expect(typeChar('ab', 2, 'c', 4)).toBe('abc');
  });

  it('ignora digitação em célula que não é a próxima livre (índice menor)', () => {
    expect(typeChar('abc', 0, 'x', 4)).toBe('abc');
  });

  it('ignora digitação em célula muito à frente (índice maior)', () => {
    expect(typeChar('a', 3, 'x', 4)).toBe('a');
  });

  it('ignora caractere vazio', () => {
    expect(typeChar('ab', 2, '', 4)).toBe('ab');
  });

  it('não ultrapassa targetLength mesmo se guess.length já bateu', () => {
    expect(typeChar('abcd', 4, 'e', 4)).toBe('abcd');
  });

  it('trunca em targetLength por segurança (guess nunca deveria já exceder)', () => {
    expect(typeChar('abc', 3, 'd', 3)).toBe('abc');
  });
});

describe('backspaceChar', () => {
  it('apaga a última letra quando o índice é a última célula preenchida', () => {
    expect(backspaceChar('abc', 2)).toBe('ab');
  });

  it('apaga a última letra quando o índice é a célula vazia seguinte', () => {
    expect(backspaceChar('abc', 3)).toBe('ab');
  });

  it('não faz nada se o índice não é a última preenchida nem a vazia seguinte', () => {
    expect(backspaceChar('abc', 0)).toBe('abc');
    expect(backspaceChar('abc', 1)).toBe('abc');
  });

  it('guess vazio + backspace na célula 0 apaga (índice == guess.length == 0)', () => {
    expect(backspaceChar('', 0)).toBe('');
  });
});

describe('distinctLetters', () => {
  it('palavra sem repetição, já ordenada', () => {
    expect(distinctLetters('abc')).toEqual(['a', 'b', 'c']);
  });

  it('remove repetições e ordena alfabeticamente', () => {
    expect(distinctLetters('cabca')).toEqual(['a', 'b', 'c']);
  });

  it('palavra vazia → lista vazia', () => {
    expect(distinctLetters('')).toEqual([]);
  });

  it('null/undefined → lista vazia (guard)', () => {
    expect(distinctLetters(null)).toEqual([]);
    expect(distinctLetters(undefined)).toEqual([]);
  });

  it('filtra o sentinela λ (não é uma letra real)', () => {
    expect(distinctLetters('λ')).toEqual([]);
  });

  it('caso real do L08: target "abca" → [a, b, c]', () => {
    expect(distinctLetters('abca')).toEqual(['a', 'b', 'c']);
  });
});

describe('classifyAttempt', () => {
  it('isShortest true → "shortest" (independente de isValid)', () => {
    expect(classifyAttempt({ isShortest: true, isValid: true })).toBe('shortest');
    expect(classifyAttempt({ isShortest: true, isValid: false })).toBe('shortest');
  });

  it('isShortest false, isValid true → "correct"', () => {
    expect(classifyAttempt({ isShortest: false, isValid: true })).toBe('correct');
  });

  it('isShortest false, isValid false → "wrong"', () => {
    expect(classifyAttempt({ isShortest: false, isValid: false })).toBe('wrong');
  });
});
