// ── MT Transdutora L17: número decimal × 3 ──────────────────────────────
// Construção parametrizada — ver src/levels_data/mt/_decimalMult.js (mesma
// máquina do L16 oficial, com N = 3). Gabarito validado por fuzz: validate()
// = w×3, a bateria de testWords é aceita e produz a saída correta, e o
// cabeçote termina no 1º dígito do resultado (Padrão Rewind qc→qR→qf).
import { makeDecimalMultLevel } from './_decimalMult.js';

export default makeDecimalMultLevel(3, 'MT_L17', 'L17');
