// ── MT Transdutora L20: número decimal × 6 ──────────────────────────────
// Construção parametrizada — ver src/levels_data/mt/_decimalMult.js (mesma
// máquina do L16 oficial, com N = 6). Gabarito validado por fuzz: validate()
// = w×6, a bateria de testWords é aceita e produz a saída correta, e o
// cabeçote termina no 1º dígito do resultado (Padrão Rewind qc→qR→qf).
import { makeDecimalMultLevel } from './_decimalMult.js';

export default makeDecimalMultLevel(6, 'MT_L20', 'L20');
