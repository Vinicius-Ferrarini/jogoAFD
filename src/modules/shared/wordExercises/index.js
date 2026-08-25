// ─── wordExercises/index.js: lista combinada dos exercícios do minigame ──────
// AFD e AP são eager (dados já leves em memória) — combinados numa lista
// SÍNCRONA. MT-Recon é lazy por nível — fica de fora dessa lista síncrona;
// quem quiser MT-Recon usa buildWordExercisesFromMTRecon (assíncrono).
//
// Ordem da lista combinada: AFD → AP → MT-Recon (decisão 8 do plano) — a
// grade pagina 20 em 20 nessa ordem, então o custo de carregar MT-Recon só é
// pago quando o aluno já rolou boa parte da grade.
import { buildWordExercisesFromAFD } from './fromAFD.js';
import { buildWordExercisesFromAP } from './fromAP.js';
import { MT_RECON_EXERCISE_IDS, buildWordExercisesFromMTRecon } from './fromMTRecon.js';

export const PAGE_SIZE = 20;

// Lista síncrona (AFD + AP) — já pronta, sem custo de import() adicional.
const SYNC_EXERCISES = [...buildWordExercisesFromAFD(), ...buildWordExercisesFromAP()];

// Lista combinada de METADADO LEVE (sem checkWord resolvido para MT-Recon):
// usada para paginação/contagem total sem precisar carregar nenhum arquivo
// MT-Recon. Cada entrada MT-Recon aqui é só { id, moduleId } — o adaptador
// completo (com language/checkWord) só é resolvido quando a página que a
// contém é exibida (ver getExercisesPage).
export const ALL_EXERCISE_STUBS = [
  ...SYNC_EXERCISES,
  ...MT_RECON_EXERCISE_IDS.map(id => ({ id, moduleId: 'mt-recon' })),
];

export const TOTAL_EXERCISE_COUNT = ALL_EXERCISE_STUBS.length;

// Resolve 1 página (0-indexed) de exercícios completos (com language/
// checkWord). AFD/AP resolvem na hora (já estão em memória); MT-Recon dispara
// os import()s necessários só para os ids daquela página.
export async function getExercisesPage(pageIndex) {
  const start = pageIndex * PAGE_SIZE;
  const stubs = ALL_EXERCISE_STUBS.slice(start, start + PAGE_SIZE);

  const syncOnes = stubs.filter(s => s.moduleId !== 'mt-recon');
  const mtReconIds = stubs.filter(s => s.moduleId === 'mt-recon').map(s => s.id);

  const resolvedSync = syncOnes.map(stub => SYNC_EXERCISES.find(ex => ex.id === stub.id));
  const resolvedMTRecon = mtReconIds.length > 0
    ? await buildWordExercisesFromMTRecon(mtReconIds)
    : [];

  // Mantém a ordem original da página (sync antes de mt-recon dentro dela,
  // que já é a ordem natural já que MT-Recon só aparece nas últimas páginas).
  return [...resolvedSync, ...resolvedMTRecon];
}

export { EXCLUDED_WORD_EXERCISE_IDS, DEDUPE_REPORT } from './dedupedLevelIds.js';
