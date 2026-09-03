// ── MT Transdutora L19: número decimal × 5 ──────────────────────────────
// Construção parametrizada — ver src/levels_data/mt/_decimalMult.js (mesma
// máquina do L16 oficial, com N = 5). Gabarito validado por fuzz: validate()
// = w×5, a bateria de testWords é aceita e produz a saída correta, e o
// cabeçote termina no 1º dígito do resultado (Padrão Rewind qc→qR→qf).
import { makeDecimalMultLevel } from './_decimalMult.js';

export default makeDecimalMultLevel(5, 'MT_L19', 'L19');
