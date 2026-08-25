// ─── normalizeLanguage: forma canônica de uma linguagem formal (texto) ───────
// Converte tanto level.formula (AFD) quanto level.language (AP/MT-Recon) para
// uma única notação — a que AP/MT-Recon já usam (Unicode sobrescrito, sem
// prefixo "L ="). Usada só para DEDUPE entre módulos (ver
// docs/MENOR_PALAVRA_MINIGAME.md, Fase 3/4): dois níveis com a mesma
// linguagem normalizada contam como 1 exercício só no minigame.
//
// Levantamento real (61 AFD + 20 AP + 15 MT-Recon, ver Fase 3 do plano):
// - AFD é quase todo prosa ("w ∈ {0,1}* / w tem tamanho 3"), não fórmula com
//   expoentes — só ~20 níveis usam "^n" no campo formula. A normalização que
//   importa de verdade é (1) remover o prefixo "L = ", (2) >= / <= / != →
//   ≥ / ≤ / ≠, (3) colapsar espaços. O mapeamento de expoentes ASCII→Unicode
//   cobre só os poucos níveis que de fato usam essa forma.
// - AP e MT-Recon já usam o formato-alvo entre si; divergem só em espaço.
// - Dedupe é TEXTUAL, não semântico: duas linguagens logicamente equivalentes
//   mas escritas com estrutura/palavras diferentes (ex.: AP em prosa onde
//   AFD usa "|w|a = |w|b") não são detectadas como iguais. Limitação aceita,
//   documentada — não é um bug a corrigir depois.

// Sobrescritos Unicode para os caracteres que aparecem em expoentes reais do
// dataset (dígitos + variáveis de contagem n,m,p,q,r,s,t,u,k,i,j). Caracteres
// fora desta tabela (ex.: "+" dentro de um expoente hipotético) são mantidos
// como estão — não há caso real disso no dataset atual.
const SUPERSCRIPT_MAP = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵',
  '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  n: 'ⁿ', m: 'ᵐ', p: 'ᵖ', q: 'q', r: 'ʳ', s: 'ˢ', t: 'ᵗ', u: 'ᵘ',
  k: 'ᵏ', i: 'ⁱ', j: 'ʲ',
};

function toSuperscript(token) {
  return [...token].map(ch => SUPERSCRIPT_MAP[ch] ?? ch).join('');
}

export function normalizeLanguage(text) {
  if (!text) return '';
  let s = text.trim();

  // Prefixo "L = " / "L=" (só o AFD usa) — remove antes de tudo o resto.
  s = s.replace(/^L\s*=\s*/, '');

  // Expoentes ASCII "^xyz" → sobrescrito Unicode (xyz = dígitos/letras
  // conhecidas, ex.: "a^n" → "aⁿ", "d^2p" → "d²ᵖ"). Símbolo "^" some.
  s = s.replace(/\^([0-9a-zA-Z]+)/g, (_, token) => toSuperscript(token));

  // Operadores de comparação ASCII → Unicode.
  s = s.replace(/>=/g, '≥').replace(/<=/g, '≤').replace(/!=/g, '≠');

  // Colapsa espaços múltiplos e remove espaço logo após "{" / antes de "}".
  s = s.replace(/\s+/g, ' ').trim();
  s = s.replace(/\{\s+/g, '{').replace(/\s+\}/g, '}');

  return s;
}
