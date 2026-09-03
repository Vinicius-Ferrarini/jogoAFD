// ── MT Transdutora L23: número decimal × 9 ──────────────────────────────
// Construção parametrizada — ver src/levels_data/mt/_decimalMult.js (mesma
// máquina do L16 oficial, com N = 9). Gabarito validado por fuzz: validate()
// = w×9, a bateria de testWords é aceita e produz a saída correta, e o
// cabeçote termina no 1º dígito do resultado (Padrão Rewind qc→qR→qf).
import { makeDecimalMultLevel } from './_decimalMult.js';

export default makeDecimalMultLevel(9, 'MT_L23', 'L23');
