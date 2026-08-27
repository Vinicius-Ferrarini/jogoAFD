/**
 * Testes para sizeHint.js — "Dica de Tamanho" da fase "Descubra a Menor Palavra"
 * (AFD Parte 1, Autômatos com Pilha, MT Reconhecedora).
 *
 * Ambiente: node (sem DOM) — buildSizeHintMessage/buildNoAttemptHintMessage são
 * funções puras, sem dependência de React.
 *
 * Suites:
 *   1. Tamanho de referência — shortestWord null/vazio → 0
 *   2. Mensagem — diff positivo, negativo e zero
 *   3. Singular vs. plural de "caractere(s)"
 *   4. Mensagem neutra (nenhuma tentativa ainda)
 *   5. A palavra em si nunca aparece na mensagem (só o tamanho)
 *   6. Regressão — classificação shortest/correct/wrong dos 3 módulos intacta
 */
import { describe, it, expect } from 'vitest';
import { buildNoAttemptHintMessage, buildSizeHintMessage } from '../modules/afd/utils/sizeHint.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ══════════════════════════════════════════════════════════════════════════════
// Suite 1 — Tamanho de referência: shortestWord null/vazio → 0
// ══════════════════════════════════════════════════════════════════════════════
describe('buildSizeHintMessage – tamanho de referência quando shortestWord é null/vazio', () => {
  it('shortestWord null: tratado como tamanho 0', () => {
    const msg = buildSizeHintMessage(null, 'ab');
    expect(msg).toContain('2 caracteres a mais');
    expect(msg).toContain('apenas 0 caractere');
  });

  it('shortestWord undefined: tratado como tamanho 0 (mesmo comportamento que null)', () => {
    const msg = buildSizeHintMessage(undefined, 'ab');
    expect(msg).toContain('2 caracteres a mais');
    expect(msg).toContain('apenas 0 caractere');
  });

  it('shortestWord vazio (\'\'): tamanho 0, igual a null', () => {
    const msgNull  = buildSizeHintMessage(null, 'ab');
    const msgEmpty = buildSizeHintMessage('', 'ab');
    expect(msgEmpty).toBe(msgNull);
  });

  it('attemptedWord null/vazio: tratado como tamanho 0', () => {
    const msg = buildSizeHintMessage('aabb', null);
    expect(msg).toContain('4 caracteres a menos');
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 2 — Mensagem: diff positivo, negativo e zero
// ══════════════════════════════════════════════════════════════════════════════
describe('buildSizeHintMessage – diff positivo/negativo/zero', () => {
  it('diff > 0: "a mais"', () => {
    const msg = buildSizeHintMessage('aa', 'aaaa'); // 4 - 2 = +2
    expect(msg).toMatch(/a mais/);
    expect(msg).not.toMatch(/a menos/);
  });

  it('diff < 0: "a menos"', () => {
    const msg = buildSizeHintMessage('aaaa', 'aa'); // 2 - 4 = -2
    expect(msg).toMatch(/a menos/);
    expect(msg).not.toMatch(/a mais/);
  });

  it('diff === 0: mensagem de "tamanho certo, mas não é a menor palavra"', () => {
    const msg = buildSizeHintMessage('aa', 'bb'); // 2 - 2 = 0, palavras diferentes
    expect(msg).toContain('tamanho certo');
    expect(msg).toContain('não é a menor palavra');
  });

  it('diff === 0 nunca contém "a mais" nem "a menos"', () => {
    const msg = buildSizeHintMessage('ab', 'ba');
    expect(msg).not.toMatch(/a mais/);
    expect(msg).not.toMatch(/a menos/);
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 3 — Singular vs. plural de "caractere(s)"
// ══════════════════════════════════════════════════════════════════════════════
describe('buildSizeHintMessage – singular vs. plural de "caractere(s)"', () => {
  it('diff = 1 (a mais): singular "1 caractere a mais"', () => {
    const msg = buildSizeHintMessage('a', 'aa'); // 2 - 1 = +1
    expect(msg).toContain('1 caractere a mais');
    expect(msg).not.toContain('1 caracteres');
  });

  it('diff = -1 (a menos): singular "1 caractere a menos"', () => {
    const msg = buildSizeHintMessage('aa', 'a'); // 1 - 2 = -1
    expect(msg).toContain('1 caractere a menos');
    expect(msg).not.toContain('1 caracteres');
  });

  it('diff = 2: plural "2 caracteres a mais"', () => {
    const msg = buildSizeHintMessage('a', 'aaa'); // 3 - 1 = +2
    expect(msg).toContain('2 caracteres a mais');
  });

  it('tamanho de referência = 1: singular "apenas 1 caractere"', () => {
    const msg = buildSizeHintMessage('a', 'aaa');
    expect(msg).toContain('apenas 1 caractere.');
    expect(msg).not.toContain('1 caracteres');
  });

  it('tamanho de referência = 0 (λ): plural "apenas 0 caracteres" (0 é plural em português)', () => {
    const msg = buildSizeHintMessage('', 'aa');
    expect(msg).toContain('apenas 0 caracteres.');
  });

  it('diff === 0 com tamanho de referência 1: singular na cláusula final', () => {
    const msg = buildSizeHintMessage('a', 'b');
    expect(msg).toContain('combinação de 1 caractere.');
    expect(msg).not.toContain('1 caracteres');
  });

  it('diff === 0 com tamanho de referência 2: plural na cláusula final', () => {
    const msg = buildSizeHintMessage('aa', 'bb');
    expect(msg).toContain('combinação de 2 caracteres.');
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 4 — Mensagem neutra (nenhuma tentativa ainda)
// ══════════════════════════════════════════════════════════════════════════════
describe('buildNoAttemptHintMessage – mensagem neutra sem tentativa', () => {
  it('retorna uma mensagem convidando a testar uma palavra primeiro', () => {
    const msg = buildNoAttemptHintMessage();
    expect(msg).toMatch(/teste uma palavra/i);
    expect(msg).toMatch(/tamanho/i);
  });

  it('não depende de nenhum argumento (função pura sem estado)', () => {
    expect(buildNoAttemptHintMessage()).toBe(buildNoAttemptHintMessage());
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 5 — A palavra em si nunca aparece na mensagem (é dica, não resposta)
// ══════════════════════════════════════════════════════════════════════════════
describe('buildSizeHintMessage – nunca revela a palavra, só o tamanho', () => {
  it('a menor palavra literal não aparece na mensagem (diff > 0)', () => {
    const shortest = 'xyz';
    const msg = buildSizeHintMessage(shortest, 'xyzxyz');
    expect(msg).not.toContain(shortest);
  });

  it('a menor palavra literal não aparece na mensagem (diff < 0)', () => {
    const shortest = 'xyzxyz';
    const msg = buildSizeHintMessage(shortest, 'xyz');
    expect(msg).not.toContain('xyzxyz');
  });

  it('a menor palavra literal não aparece na mensagem (diff === 0)', () => {
    const shortest = 'qwerty';
    const msg = buildSizeHintMessage(shortest, 'asdfgh');
    expect(msg).not.toContain(shortest);
    expect(msg).not.toContain('asdfgh');
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// Suite 6 — Regressão: classificação shortest/correct/wrong não foi alterada
// ══════════════════════════════════════════════════════════════════════════════
// A feature de dica é aditiva (só lê currentLevel.shortestWord / getShortestWord
// e a última tentativa via um ref separado). Estes testes leem o código-fonte
// dos 3 orquestradores para garantir que a lógica de classificação continua
// exatamente como antes — nenhuma condição de shortest/correct/wrong foi tocada
// pela integração da dica.
describe('REG — integração da Dica de Tamanho não altera a classificação shortest/correct/wrong', () => {
  const readSrc = (relPath) => fs.readFileSync(path.join(__dirname, relPath), 'utf-8');

  it('AFDPart1.jsx: isShortest ainda depende de word.length === gridTarget.length && lvlAccepts (gridTarget === target em todo nível fora de WORDLE_GRID_LEVEL_IDS — ver AFDPart1.jsx)', () => {
    const src = readSrc('../modules/afd/AFDPart1.jsx');
    expect(src).toMatch(/word\.length === gridTarget\.length && lvlAccepts\(currentLevel, word\)\) isShortest = true/);
  });

  it('AFDPart1.jsx: branch target === null (L01) continua a exigir isSpecialNull', () => {
    const src = readSrc('../modules/afd/AFDPart1.jsx');
    expect(src).toMatch(/if \(target === null\) \{ if \(isSpecialNull\) isShortest = true; \}/);
  });

  it('APPart1.jsx: isShortest ainda depende de acceptedByTruth && word === shortest', () => {
    const src = readSrc('../modules/ap/APPart1.jsx');
    expect(src).toMatch(/const isShortest = acceptedByTruth && word === shortest;/);
  });

  it('APPart1.jsx: status ainda é shortest/correct/wrong nessa ordem de precedência', () => {
    const src = readSrc('../modules/ap/APPart1.jsx');
    expect(src).toMatch(/const status = isShortest \? 'shortest' : acceptedByTruth \? 'correct' : 'wrong';/);
  });

  it('MTReconPart1.jsx: isShortest ainda depende de accepted && word === shortest', () => {
    const src = readSrc('../modules/mt-recon/MTReconPart1.jsx');
    expect(src).toMatch(/const isShortest = accepted && word === shortest;/);
  });

  it('MTReconPart1.jsx: resultado ainda é shortest/correct/wrong nessa ordem de precedência', () => {
    const src = readSrc('../modules/mt-recon/MTReconPart1.jsx');
    expect(src).toMatch(/const resultado = isShortest \? 'shortest' : accepted \? 'correct' : 'wrong';/);
  });

  it('L14.js: shortestWord agora é \'\' (string vazia), não mais null', () => {
    const src = readSrc('../levels_data/afd/L14.js');
    expect(src).toMatch(/shortestWord: ''/);
    expect(src).not.toMatch(/shortestWord: null/);
  });

  it('L14.js: continua impossible:true (não virou jogável normalmente)', () => {
    const src = readSrc('../levels_data/afd/L14.js');
    expect(src).toMatch(/impossible: true/);
  });

  it('L1.js: shortestWord continua null (L = ∅, não tem menor palavra nenhuma)', () => {
    const src = readSrc('../levels_data/afd/L1.js');
    expect(src).toMatch(/shortestWord: null/);
  });
});
