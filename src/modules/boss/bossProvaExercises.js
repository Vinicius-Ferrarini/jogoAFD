// ─── bossProvaExercises: mapeia a numeração do Boss/Prova (bossId 1..8, fixa,
// controla a ordem na grade) para exercícios já existentes marcados 'prova' em
// cada módulo. Não duplica dado nenhum — só referencia pelo id ORIGINAL de cada
// módulo, no formato NATIVO dele:
//   afd-p1/afd-p2/afd-min → número;  ap-pilha → 'L##';  mt → 'MT[_RECON]_L##'.
//
// bossId é a chave de progresso do Boss (`boss-prova-${bossId}`), independente
// do id original — ver BossMode.jsx.
export const BOSS_PROVA_EXERCISES = [
  { bossId: 1, module: 'afd-p1',   originalId: 59 },
  { bossId: 2, module: 'afd-p1',   originalId: 60 },
  { bossId: 3, module: 'afd-p2',   originalId: 61 },
  { bossId: 4, module: 'afd-min',  originalId: 15 },
  { bossId: 5, module: 'ap-pilha', originalId: 'L19' },
  { bossId: 6, module: 'ap-pilha', originalId: 'L20' },
  { bossId: 7, module: 'mt-recon', originalId: 'MT_RECON_L18' },
  { bossId: 8, module: 'mt-trans', originalId: 'MT_L25' },
];
