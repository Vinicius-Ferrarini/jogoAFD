// ─── fromAP: adapta os níveis AP para o formato genérico do minigame ─────────
// Import leve: só levels_data/ap (dados) + pdaAccepts (validação pura já
// existente em pdaAlgorithms.js) — nunca APPart1.jsx (canvas/undo/aula
// guiada). ATENÇÃO: levels_data/ap/index.js já é eager (import.meta.glob com
// eager:true) — importar daqui não piora a leveza (o custo já é pago sempre
// que qualquer coisa de AP é usada), mas também não tem como ficar mais leve.
import { AP_LEVELS, getShortestWord } from '../../../levels_data/ap/index.js';
import { pdaAccepts } from '../../ap/utils/pdaAlgorithms.js';
import { normalizeLanguage } from './normalizeLanguage.js';
import { EXCLUDED_WORD_EXERCISE_IDS } from './dedupedLevelIds.js';
import { findSecondShortestWord } from './findSecondShortestWord.js';

// Níveis impossíveis não têm gabarito (solution === null) — sem "menor
// palavra" descobrível, ficam fora do minigame (mesma regra do AFD/L14).
export function buildWordExercisesFromAP() {
  return AP_LEVELS
    .filter(level => !level.impossible)
    .filter(level => !EXCLUDED_WORD_EXERCISE_IDS.has(`ap-${level.id}`))
    .map(level => {
      const shortestWord = getShortestWord(level);
      return {
        id: `ap-${level.id}`,
        moduleId: 'ap',
        levelId: level.id,
        label: level.label,
        language: level.language,
        languageNormalized: normalizeLanguage(level.language),
        alphabet: level.alphabet ?? [],
        shortestWord,
        checkWord: (word) => {
          const accepted = pdaAccepts(level.solution, word);
          return level.truth ? level.truth(word, accepted) : accepted;
        },
      };
    })
    .filter(ex => ex.shortestWord != null)
    // Guard defensivo (baixo risco em AP — shortestWord é derivado da mesma
    // bateria que checkWord usa, diferente do AFD onde é campo manual — mas
    // mantém o código consistente e protege contra futura divergência).
    .filter(ex => {
      const ok = ex.checkWord(ex.shortestWord);
      if (!ok) console.warn(`[wordExercises/fromAP] ${ex.id}: shortestWord "${ex.shortestWord}" não é aceita pela própria regra do nível — excluído do minigame.`);
      return ok;
    })
    // shortestWord === '' (λ aceita): grade sem célula pra digitar λ, fase
    // impossível de vencer (ver mesma correção em fromAFD.js). Busca a 1ª
    // palavra não-vazia aceita; sem nenhuma até maxLen, exclui do minigame.
    .map(ex => {
      if (ex.shortestWord !== '') return ex;
      const secondShortestWord = findSecondShortestWord(ex.checkWord, ex.alphabet);
      return { ...ex, secondShortestWord };
    })
    .filter(ex => ex.shortestWord !== '' || ex.secondShortestWord != null);
}
