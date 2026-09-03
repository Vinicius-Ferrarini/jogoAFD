// ── MT Transdutora L22: número decimal × 8 ──────────────────────────────
// Construção parametrizada — ver src/levels_data/mt/_decimalMult.js (mesma
// máquina do L16 oficial, com N = 8). Gabarito validado por fuzz: validate()
// = w×8, a bateria de testWords é aceita e produz a saída correta, e o
// cabeçote termina no 1º dígito do resultado (Padrão Rewind qc→qR→qf).
import { makeDecimalMultLevel } from './_decimalMult.js';

export default makeDecimalMultLevel(8, 'MT_L22', 'L22');
