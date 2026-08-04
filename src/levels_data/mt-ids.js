// ATENÇÃO: este arquivo é importado por App.jsx (NÃO lazy — carrega sempre,
// mesmo só na tela de submódulos). Por isso expõe só os IDs dos níveis de MT
// (Reconhecedora/Transdutora), NUNCA os arrays completos MT_RECON_LEVELS/
// MT_LEVELS (payload pesado: guidedLesson com storyboard frame a frame de
// cada nível, ~14 MB de código-fonte combinado) — mesmo padrão de LEVEL_IDS
// em src/levels.js (ver OPTIMIZATION_PROGRESS.md #2). Quem precisa só da
// contagem de estrelas/progresso (tela de submódulos) deve usar os arrays
// abaixo; quem precisa do payload completo (MTPart1.jsx/MTReconPart1.jsx)
// já importa MT_LEVELS/MT_RECON_LEVELS direto de levels_data/mt(-recon),
// dentro do próprio chunk lazy do módulo.

// Mesmos números de nível usados em levels_data/mt-recon/index.js.
const MT_RECON_LEVEL_NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
export const MT_RECON_LEVEL_IDS = MT_RECON_LEVEL_NUMS.map((n) => `MT_RECON_L${n}`);

// Mesmos números de nível usados em levels_data/mt/index.js.
const MT_LEVEL_NUMS = [1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24];
export const MT_LEVEL_IDS = MT_LEVEL_NUMS.map((n) => `MT_L${n}`);
