// ─── fromAFD: adapta os níveis AFD para o formato genérico do minigame ───────
// Import leve: só levels_data/afd (dados) + lvlAccepts (validação pura já
// existente em useAFDGraph.js) — nunca AFDPart1.jsx (canvas/undo/aula guiada).
import { AFD_LEVELS } from '../../../levels_data/afd/index.js';
import { UNAVAILABLE_LEVELS, HIDDEN_LEVELS } from '../../../levels.js';
import { lvlAccepts } from '../../afd/hooks/useAFDGraph.js';
import { normalizeLanguage } from './normalizeLanguage.js';
import { EXCLUDED_WORD_EXERCISE_IDS } from './dedupedLevelIds.js';
import { findSecondShortestWord } from './findSecondShortestWord.js';

// Níveis impossíveis (L14: |w|a = |w|b) não têm "menor palavra" descobrível —
// a lição ali é sobre a linguagem não ser regular, não faz sentido no
// minigame. wordOnly (L01, L=∅) também não tem grafo/menor palavra jogável
// da mesma forma — shortestWord é null nesses casos.
export function buildWordExercisesFromAFD() {
  return AFD_LEVELS
    .filter(level => !UNAVAILABLE_LEVELS.has(level.id) && !HIDDEN_LEVELS.has(level.id))
    .filter(level => !level.impossible && level.shortestWord != null)
    .map(level => ({
      id: `afd-${level.id}`,
      moduleId: 'afd',
      levelId: level.id,
      label: level.label,
      language: level.formula,
      languageNormalized: normalizeLanguage(level.formula),
      alphabet: level.alphabet ?? [],
      shortestWord: level.shortestWord,
      checkWord: (word) => lvlAccepts(level, word),
    }))
    .filter(ex => !EXCLUDED_WORD_EXERCISE_IDS.has(ex.id))
    // Guard contra inconsistência de dados pré-existente no arquivo do nível
    // (achado real: L50 tem shortestWord "ac" que a própria regra validate()
    // do nível rejeita — bug nos dados, fora do escopo do minigame corrigir).
    // Nunca deveria filtrar nada num dataset consistente; se filtrar, é sinal
    // de alerta a reportar, não um comportamento normal esperado.
    .filter(ex => {
      const ok = ex.checkWord(ex.shortestWord);
      if (!ok) console.warn(`[wordExercises/fromAFD] ${ex.id}: shortestWord "${ex.shortestWord}" não é aceita pela própria regra do nível — excluído do minigame.`);
      return ok;
    })
    // shortestWord === '' (λ aceita): a grade do minigame não tem célula pra
    // digitar λ (targetLength=0), a fase fica impossível de vencer. Busca a
    // 1ª palavra não-vazia aceita (mesmo tamanho mínimo > 0) pra usar como
    // alvo jogável; se a linguagem não aceitar NADA além de λ até maxLen,
    // não há exercício de minigame possível — exclui, mesma lógica de
    // impossible/wordOnly acima.
    .map(ex => {
      if (ex.shortestWord !== '') return ex;
      const secondShortestWord = findSecondShortestWord(ex.checkWord, ex.alphabet);
      return { ...ex, secondShortestWord };
    })
    .filter(ex => ex.shortestWord !== '' || ex.secondShortestWord != null);
}
