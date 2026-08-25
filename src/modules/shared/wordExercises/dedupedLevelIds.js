// ─── dedupedLevelIds.js — GERADO por scripts/generate-deduped-word-exercises.mjs
// NÃO editar manualmente. Reexecute o script sempre que níveis de AFD/AP/
// MT-Recon forem adicionados ou tiverem sua linguagem alterada.
// Gerado em: 2026-08-25
//
// Lista de exercícios EXCLUÍDOS do minigame "Menor Palavra" por terem a
// mesma linguagem normalizada que outro exercício já incluído (dedupe
// cross-módulo e intra-módulo — ver docs/MENOR_PALAVRA_MINIGAME.md, Fase 4).
// Critério de desempate: prioridade de módulo afd > ap > mt-recon, depois id.

export const EXCLUDED_WORD_EXERCISE_IDS = new Set([
  "afd-47",
  "afd-51",
  "mt-recon-1",
  "mt-recon-10",
  "mt-recon-11",
  "mt-recon-12",
  "mt-recon-13",
  "mt-recon-4",
  "mt-recon-9"
]);

// Para o relatório da Fase 7 (o que foi unificado com o quê) — não usado em
// runtime pelo app, só documentação/depuração.
export const DEDUPE_REPORT = [
  {
    "excludedId": "afd-47",
    "keptId": "afd-40",
    "language": "{aⁿ b²ᵐ d c³ᵖ d / n ≥ 0, m ≥ 0, p ≥ 0}"
  },
  {
    "excludedId": "afd-51",
    "keptId": "afd-49",
    "language": "{aⁿ a cᵐ (ab+ba) c a²ᵖ / n ≥ 0, m > 0, p > 0}"
  },
  {
    "excludedId": "mt-recon-1",
    "keptId": "ap-L1",
    "language": "{aⁿbⁿ / n ≥ 0}"
  },
  {
    "excludedId": "mt-recon-10",
    "keptId": "ap-L10",
    "language": "{aⁱbʲcᵏ / j = i + k, i ≥ 0, k ≥ 0}"
  },
  {
    "excludedId": "mt-recon-11",
    "keptId": "ap-L11",
    "language": "{aⁿbⁿcᵐdᵐ / n ≥ 0, m ≥ 0}"
  },
  {
    "excludedId": "mt-recon-12",
    "keptId": "ap-L12",
    "language": "{aⁿb²ⁿ⁺¹ / n > 0}"
  },
  {
    "excludedId": "mt-recon-13",
    "keptId": "ap-L13",
    "language": "{aⁿb²ⁿ⁺² / n > 0}"
  },
  {
    "excludedId": "mt-recon-4",
    "keptId": "ap-L4",
    "language": "{a²ⁿbⁿ / n ≥ 0}"
  },
  {
    "excludedId": "mt-recon-9",
    "keptId": "ap-L9",
    "language": "{aⁱbʲcᵏ / k = i + j, i ≥ 0, j ≥ 0}"
  }
];
