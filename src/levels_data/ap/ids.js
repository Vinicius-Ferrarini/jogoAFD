// Lightweight: ids dos exercícios de AP + quais são "impossível" (só resolvem
// com MT, sem gabarito .jff), para quem precisa só da CONTAGEM/progresso sem
// puxar o payload pesado de AP_LEVELS (gabaritos .jff + parsing). Mesmo padrão
// de mt-ids.js e LEVEL_IDS. Guardado contra drift em src/__tests__/starTotals.test.js
// (compara com AP_LEVELS real).
const AP_LEVEL_NUMS = Array.from({ length: 20 }, (_, i) => i + 1); // L1..L20
export const AP_LEVEL_IDS = AP_LEVEL_NUMS.map((n) => `L${n}`);

// Único nível AP sem AP que o resolva (ver L16.js: impossible → só MT).
export const AP_IMPOSSIBLE_IDS = new Set(['L16']);

// Jogáveis (contam estrela) = todos menos os impossíveis.
export const AP_AVAILABLE_LEVEL_IDS = AP_LEVEL_IDS.filter((id) => !AP_IMPOSSIBLE_IDS.has(id));
