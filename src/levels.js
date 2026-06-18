import { lote1 } from './levels_data/lote1.js';
import { lote2 } from './levels_data/lote2.js';
import { lote3 } from './levels_data/lote3.js';

export const GAME_LEVELS = [...lote1, ...lote2, ...lote3];

export const DIFF_COLOR = { easy: '#4ade80', medium: '#facc15', hard: '#f87171', impossible: '#ddd6fe', unavailable: '#d1d5db' };

// Fases temporariamente INDISPONÍVEIS (complexas de implementar/explicar). Não
// são clicáveis, não mostram estrelas e não contam no total. Para reativar uma
// fase, basta removê-la deste conjunto. Vale para AFD_1 (fases) e AFD_2 (exercícios).
export const UNAVAILABLE_LEVELS = new Set([1, 2, 3, 4, 14]);

export const LEVEL_DIFFICULTY = {
   1:'easy',  2:'easy',  3:'easy',  4:'easy',  5:'easy',
   6:'easy',  7:'easy',  8:'easy',  9:'easy', 10:'medium',
  11:'easy', 12:'easy', 13:'medium',14:'impossible', 15:'easy',
  16:'easy', 17:'medium',18:'medium',19:'hard',20:'easy',
  21:'easy', 22:'easy', 23:'easy', 24:'easy', 25:'easy',
  26:'easy', 27:'easy', 28:'medium',29:'hard',30:'medium',
  31:'hard', 32:'hard', 33:'easy', 34:'medium',35:'medium',
  36:'easy', 37:'medium',38:'hard', 39:'hard', 40:'hard',
  41:'medium',42:'medium',43:'medium',44:'hard',45:'hard',
  46:'hard', 47:'hard', 48:'medium',49:'hard', 50:'hard',
  51:'hard', 52:'medium',53:'easy', 54:'hard',
};
