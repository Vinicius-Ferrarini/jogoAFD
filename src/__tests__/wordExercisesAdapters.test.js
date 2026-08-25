/**
 * Testes de integração dos adaptadores wordExercises (fromAFD/fromAP/
 * fromMTRecon/index) — rodam sobre o DATASET REAL do jogo (não fixtures),
 * conforme Fase 4 do plano (docs/MENOR_PALAVRA_MINIGAME.md).
 *
 * Ambiente: precisa do resolvedor do Vite (imports sem extensão, import.meta.glob
 * em levels_data/ap) — roda no ambiente padrão do projeto, não em node puro.
 *
 * Suites:
 *   1. fromAFD — contagem, checkWord(shortestWord) aceita, dedupe aplicado
 *   2. fromAP — contagem, checkWord(shortestWord) aceita, dedupe aplicado
 *   3. index — paginação síncrona (AFD+AP) e assíncrona (MT-Recon)
 *   4. wordExerciseCount (drift guard) — a contagem LEVE gerada pelo script
 *      offline (usada no card do menu principal) deve bater com a contagem
 *      REAL dos adaptadores — mesmo padrão de starTotals.test.js pra AP/MT.
 */
import { describe, it, expect } from 'vitest';
import { buildWordExercisesFromAFD } from '../modules/shared/wordExercises/fromAFD.js';
import { buildWordExercisesFromAP } from '../modules/shared/wordExercises/fromAP.js';
import {
  ALL_EXERCISE_STUBS, TOTAL_EXERCISE_COUNT, PAGE_SIZE, getExercisesPage,
} from '../modules/shared/wordExercises/index.js';
import { EXCLUDED_WORD_EXERCISE_IDS } from '../modules/shared/wordExercises/dedupedLevelIds.js';
import { TOTAL_WORD_EXERCISE_COUNT } from '../modules/shared/wordExercises/wordExerciseCount.js';

describe('fromAFD', () => {
  const exercises = buildWordExercisesFromAFD();

  it('gera uma lista não vazia', () => {
    expect(exercises.length).toBeGreaterThan(0);
  });

  it('todo exercício tem os campos genéricos esperados', () => {
    for (const ex of exercises) {
      expect(ex.id).toMatch(/^afd-\d+$/);
      expect(ex.moduleId).toBe('afd');
      expect(typeof ex.label).toBe('string');
      expect(typeof ex.language).toBe('string');
      expect(typeof ex.languageNormalized).toBe('string');
      expect(Array.isArray(ex.alphabet)).toBe(true);
      expect(typeof ex.shortestWord).toBe('string');
      expect(typeof ex.checkWord).toBe('function');
    }
  });

  it('checkWord(shortestWord) aceita para todo exercício (a menor palavra é sempre válida)', () => {
    for (const ex of exercises) {
      expect(ex.checkWord(ex.shortestWord), `${ex.id} deveria aceitar sua própria shortestWord`).toBe(true);
    }
  });

  it('não inclui níveis impossíveis (L14) nem os ocultos (L01-L04)', () => {
    expect(exercises.find(ex => ex.levelId === 14)).toBeUndefined();
    expect(exercises.find(ex => ex.levelId === 1)).toBeUndefined();
  });

  it('exclui L50 por inconsistência de dados pré-existente (shortestWord "ac" rejeitada pela própria regra do nível — bug fora do escopo do minigame, não corrigido aqui)', () => {
    expect(exercises.find(ex => ex.levelId === 50)).toBeUndefined();
  });

  it('dedupe aplicado: afd-47 e afd-51 (duplicatas intra-AFD) não aparecem', () => {
    expect(exercises.find(ex => ex.id === 'afd-47')).toBeUndefined();
    expect(exercises.find(ex => ex.id === 'afd-51')).toBeUndefined();
    // os "vencedores" continuam presentes
    expect(exercises.find(ex => ex.id === 'afd-40')).toBeDefined();
    expect(exercises.find(ex => ex.id === 'afd-49')).toBeDefined();
  });
});

describe('fromAP', () => {
  const exercises = buildWordExercisesFromAP();

  it('gera uma lista não vazia', () => {
    expect(exercises.length).toBeGreaterThan(0);
  });

  it('todo exercício tem os campos genéricos esperados', () => {
    for (const ex of exercises) {
      expect(ex.id).toMatch(/^ap-L\d+$/);
      expect(ex.moduleId).toBe('ap');
      expect(typeof ex.language).toBe('string');
      expect(Array.isArray(ex.alphabet)).toBe(true);
      expect(typeof ex.shortestWord).toBe('string');
      expect(typeof ex.checkWord).toBe('function');
    }
  });

  it('checkWord(shortestWord) aceita para todo exercício', () => {
    for (const ex of exercises) {
      expect(ex.checkWord(ex.shortestWord), `${ex.id} deveria aceitar sua própria shortestWord`).toBe(true);
    }
  });

  it('não inclui níveis impossíveis', () => {
    for (const ex of exercises) {
      expect(ex.shortestWord).not.toBeNull();
    }
  });
});

describe('wordExercises/index — agregação e paginação', () => {
  it('ALL_EXERCISE_STUBS combina AFD, AP e MT-Recon (nesta ordem)', () => {
    const afdCount = ALL_EXERCISE_STUBS.filter(s => s.moduleId === 'afd').length;
    const apCount = ALL_EXERCISE_STUBS.filter(s => s.moduleId === 'ap').length;
    const mtReconCount = ALL_EXERCISE_STUBS.filter(s => s.moduleId === 'mt-recon').length;
    expect(afdCount).toBeGreaterThan(0);
    expect(apCount).toBeGreaterThan(0);
    expect(mtReconCount).toBeGreaterThan(0);
    expect(afdCount + apCount + mtReconCount).toBe(TOTAL_EXERCISE_COUNT);

    // Ordem: todos os afd vêm antes de todos os ap, que vêm antes de mt-recon.
    const firstApIdx = ALL_EXERCISE_STUBS.findIndex(s => s.moduleId === 'ap');
    const firstMtReconIdx = ALL_EXERCISE_STUBS.findIndex(s => s.moduleId === 'mt-recon');
    const lastAfdIdx = ALL_EXERCISE_STUBS.map(s => s.moduleId).lastIndexOf('afd');
    const lastApIdx = ALL_EXERCISE_STUBS.map(s => s.moduleId).lastIndexOf('ap');
    expect(lastAfdIdx).toBeLessThan(firstApIdx);
    expect(lastApIdx).toBeLessThan(firstMtReconIdx);
  });

  it('MT-Recon deduplicado não aparece nos stubs (mt-recon-1, 4, 10-13)', () => {
    const mtReconIds = ALL_EXERCISE_STUBS.filter(s => s.moduleId === 'mt-recon').map(s => s.id);
    for (const excluded of EXCLUDED_WORD_EXERCISE_IDS) {
      if (excluded.startsWith('mt-recon-')) {
        expect(mtReconIds).not.toContain(excluded);
      }
    }
  });

  it('getExercisesPage(0) resolve só AFD/AP (síncrono, sem MT-Recon ainda)', async () => {
    const page0 = await getExercisesPage(0);
    expect(page0.length).toBeLessThanOrEqual(PAGE_SIZE);
    expect(page0.every(ex => ex.moduleId !== 'mt-recon')).toBe(true);
  });

  it('a última página resolve exercícios MT-Recon com checkWord funcional', async () => {
    const lastPageIdx = Math.ceil(TOTAL_EXERCISE_COUNT / PAGE_SIZE) - 1;
    const lastPage = await getExercisesPage(lastPageIdx);
    const mtReconOnes = lastPage.filter(ex => ex.moduleId === 'mt-recon');
    expect(mtReconOnes.length).toBeGreaterThan(0);
    for (const ex of mtReconOnes) {
      expect(ex.checkWord(ex.shortestWord), `${ex.id} deveria aceitar sua própria shortestWord`).toBe(true);
    }
  });
});

describe('wordExerciseCount — drift guard', () => {
  it('TOTAL_WORD_EXERCISE_COUNT (leve, gerado pelo script offline, usado no card do menu) bate com TOTAL_EXERCISE_COUNT (real, dos adaptadores) — reexecute scripts/generate-deduped-word-exercises.mjs se este teste falhar', () => {
    expect(TOTAL_WORD_EXERCISE_COUNT).toBe(TOTAL_EXERCISE_COUNT);
  });
});
