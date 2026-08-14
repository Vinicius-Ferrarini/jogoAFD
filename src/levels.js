// ATENÇÃO: este arquivo é importado por App.jsx / MainMenu.jsx (NÃO lazy — carrega
// sempre, mesmo só na tela inicial). Por isso `AFD_LEVELS` (61 níveis completos,
// incluindo regex/guidedLesson/coordenadas de grafo — payload pesado) só é
// importado de forma lazy, dentro de getGameLevels() — ver OPTIMIZATION_PROGRESS.md
// #2. Quem precisa só dos IDs (contagem de estrelas/progresso na Home) deve usar
// LEVEL_IDS, que é leve e não puxa os 61 arquivos de nível.
export const DIFF_COLOR = { easy: '#4ade80', medium: '#facc15', hard: '#f87171', impossible: '#ddd6fe', unavailable: '#d1d5db', trabalho: '#9333ea', prova: 'rgb(100, 100, 255)' };

// Fases temporariamente INDISPONÍVEIS (complexas de implementar/explicar). Não
// são clicáveis, não mostram estrelas e não contam no total. Para reativar uma
// fase, basta removê-la deste conjunto. Vale para AFD_1 (fases) e AFD_2 (exercícios).
export const UNAVAILABLE_LEVELS = new Set([]);

// Fases OCULTAS (não apenas bloqueadas — não renderizam botão nenhum na grade,
// como se não existissem). L01-L04 são exercícios básicos demais: implementá-los
// exigiria ajustar a progressão/numeração de vários outros níveis só por causa
// deles, sem ganho pedagógico proporcional ao tempo gasto. Vale para AFD_1 e
// AFD_2 — a numeração dos demais níveis (L05 em diante) não muda, pois o label
// de cada nível já vem fixo do próprio arquivo (filtrar antes da paginação
// resolve sozinho, sem precisar renomear nada).
export const HIDDEN_LEVELS = new Set([1, 2, 3, 4]);

// L14 (|w|a = |w|b) é comprovadamente impossível em AFD — não existe grafo
// correto pra mostrar num exercício de "dado o grafo, identifique a linguagem".
// Por isso fica jogável em AFD_1 (onde o aluno tenta construir e recebe uma
// explicação de por que é impossível — ver L14.js) mas continua bloqueada em
// AFD_2, que dependeria de um grafo válido que não existe.
export const UNAVAILABLE_LEVELS_P2_ONLY = new Set([14]);

export const LEVEL_DIFFICULTY = {
   1:'easy',  2:'easy',  3:'easy',  4:'easy',  5:'easy',
   6:'easy',  7:'easy',  8:'easy',  9:'easy', 10:'medium',
  11:'easy', 12:'easy', 13:'medium',14:'impossible', 15:'easy',
  16:'easy', 17:'medium',18:'medium',19:'hard',20:'easy',
  21:'easy', 22:'easy', 23:'easy', 24:'easy', 25:'easy',
  26:'easy', 27:'easy', 28:'medium',29:'hard',30:'medium',
  31:'hard', 32:'hard', 33:'easy', 34:'medium',35:'medium',3502:'easy',
  36:'easy', 37:'easy', 38:'medium',39:'hard', 40:'hard',
  41:'hard', 42:'medium',43:'medium',44:'medium',45:'hard',
  46:'hard', 47:'hard', 48:'hard', 49:'medium',50:'hard',
  51:'hard', 52:'hard', 53:'medium',54:'hard', 55:'hard',
  56:'trabalho', 57:'trabalho', 58:'trabalho',
  59:'prova', 60:'prova', 61:'prova',
};

// IDs de todos os níveis AFD_1/AFD_2, na mesma ordem de `AFD_LEVELS`
// (levels_data/afd/index.js) — derivado de LEVEL_DIFFICULTY (leve) em vez de
// importar os 61 arquivos de nível só para contar/filtrar por id. Usado pela
// Home/seleção de módulo (App.jsx, MainMenu.jsx — NÃO lazy) no lugar de
// `GAME_LEVELS` quando só o `id` é necessário (contagem de estrelas/progresso).
export const LEVEL_IDS = [
  ...Array.from({ length: 35 }, (_, i) => i + 1),
  3502, // L35_ii
  ...Array.from({ length: 61 - 36 + 1 }, (_, i) => i + 36),
];

// `GAME_LEVELS` (payload completo — regex/guidedLesson/coordenadas de grafo dos
// 61 níveis) NÃO é reexportado daqui de propósito: este arquivo é importado por
// App.jsx/MainMenu.jsx (sempre carregado, nunca lazy). Se `GAME_LEVELS` fosse
// reexportado aqui, o Rollup passaria a tratar `levels.js` e sua dependência
// pesada como alcançáveis a partir da entrada principal, e o payload pesado
// voltaria a entrar no chunk sempre-carregado mesmo sem nenhum uso direto nele
// (foi exatamente o que aconteceu ao testar essa abordagem — ver
// OPTIMIZATION_PROGRESS.md #2). Quem precisa de GAME_LEVELS (código já dentro
// de um chunk lazy: AFDPart1/AFDPart2/ExerciseScreen/EndScreen/LevelMenu) deve
// importar direto de './levels_data/afd/index.js'.
