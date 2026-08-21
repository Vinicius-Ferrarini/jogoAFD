// ─── bossTrabalhoExercises: mapeia a numeração do Boss (bossId 1..5, fixa,
// controla ordem de exibição na grade) para os exercícios já existentes
// marcados 'trabalho' no AFD (levels.js → LEVEL_DIFFICULTY) e no AP
// (levels_data/ap/*.js → level: 'trabalho'). Não duplica dado nenhum —
// só referencia pelo id original de cada módulo.
//
// bossId é a chave de progresso do Boss (`boss-trabalho-${bossId}`),
// independente do id original — ver BossTrabalho.jsx.
// originalId usa o formato NATIVO do id de cada módulo: AFD indexa por número
// (56, 57, 58); AP indexa por string 'L##' ('L17', 'L18'). É esse id cru que
// cada módulo procura em modo forçado (AFDPart*: GAME_LEVELS.find; APPart1:
// AP_LEVELS.find) e que o internalKey usa para montar a chave de progresso.
export const BOSS_TRABALHO_EXERCISES = [
  { bossId: 1, module: 'afd-p1', originalId: 56 },
  { bossId: 2, module: 'afd-p1', originalId: 57 },
  { bossId: 3, module: 'afd-p2', originalId: 58 },
  { bossId: 4, module: 'ap-pilha', originalId: 'L17' },
  { bossId: 5, module: 'ap-pilha', originalId: 'L18' },
];
