/**
 * Testes para balloonFit.js — estimador de "cabe no balão de fala do
 * Maurílio?" (sem DOM/Canvas, por word-wrap com largura média de caractere).
 *
 * Ambiente: node — funções puras.
 *
 * Suites:
 *   1. stripToPlainText — HTML → texto (mantém <br/> como quebra de linha)
 *   2. estimateWrappedLines — contagem de linhas por word-wrap guloso
 *   3. fitsInBalloon — casos sintéticos óbvios (cabe / não cabe)
 *   4. Calibração contra o caso REAL que motivou isto (L14/AFD-P1, passo 1
 *      da aula — captura visual confirmada transbordando o balão)
 */
import { describe, it, expect } from 'vitest';
import { stripToPlainText, estimateWrappedLines, fitsInBalloon, BALLOON_PRESETS } from '../modules/afd/utils/balloonFit.js';

describe('stripToPlainText', () => {
  it('remove tags simples mantendo o texto interno', () => {
    expect(stripToPlainText('Isto é <b>importante</b> demais')).toBe('Isto é importante demais');
  });

  it('<br/> vira quebra de linha, não espaço', () => {
    expect(stripToPlainText('linha 1<br/>linha 2')).toBe('linha 1\nlinha 2');
  });

  it('<br> sem barra também funciona', () => {
    expect(stripToPlainText('a<br>b')).toBe('a\nb');
  });

  it('string vazia/null/undefined -> string vazia', () => {
    expect(stripToPlainText('')).toBe('');
    expect(stripToPlainText(null)).toBe('');
    expect(stripToPlainText(undefined)).toBe('');
  });
});

describe('estimateWrappedLines', () => {
  const box = { contentWidth: 100, fontSize: 10 }; // charWidth ~5.5px -> ~18 chars/linha

  it('texto vazio -> 0 linhas', () => {
    expect(estimateWrappedLines('', box)).toBe(0);
  });

  it('texto curto que cabe numa linha só', () => {
    expect(estimateWrappedLines('oi tudo bem', box)).toBe(1);
  });

  it('texto longo quebra em várias linhas', () => {
    const long = 'esta é uma frase bem mais longa que certamente não cabe numa única linha estreita';
    expect(estimateWrappedLines(long, box)).toBeGreaterThan(1);
  });

  it('<br/> força nova linha mesmo com texto curto', () => {
    expect(estimateWrappedLines('a<br/>b', box)).toBe(2);
  });
});

describe('fitsInBalloon — casos sintéticos', () => {
  const balloon = { contentWidth: 150, contentHeight: 60, fontSize: 12, lineHeightRatio: 1.3 };

  it('texto curto cabe', () => {
    const r = fitsInBalloon('Oi!', balloon);
    expect(r.fits).toBe(true);
  });

  it('texto muito longo não cabe', () => {
    const long = Array(30).fill('palavra').join(' ');
    const r = fitsInBalloon(long, balloon);
    expect(r.fits).toBe(false);
    expect(r.linesNeeded).toBeGreaterThan(r.linesAvailable);
  });
});

describe('fitsInBalloon — calibração contra o caso real (L14/AFD-P1, passo 1)', () => {
  // Texto real de src/levels_data/afd/L14.js, guidedLesson[0].text — captura
  // visual confirmou transbordando o balão nesse passo.
  const L14_STEP1 = 'Vamos tentar construir um AFD para <b>|w|a = |w|b</b> mesmo assim — e ver onde ele quebra.<br/>Começando pelo básico: <b>λ</b> (palavra vazia) tem 0 "a"s e 0 "b"s, então é aceita. q0 é inicial <u>e</u> final.';

  it('é detectado como NÃO cabendo no balão .afdP1 (caso real confirmado visualmente)', () => {
    const r = fitsInBalloon(L14_STEP1, BALLOON_PRESETS.afdP1);
    expect(r.fits).toBe(false);
  });

  it('um texto bem mais curto do mesmo nível (ex.: "Aceita!") cabe tranquilamente', () => {
    const r = fitsInBalloon('Aceita!', BALLOON_PRESETS.afdP1);
    expect(r.fits).toBe(true);
  });
});
