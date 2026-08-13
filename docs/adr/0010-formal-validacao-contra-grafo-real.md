# 0010 — Descrição Formal valida contra o grafo do aluno, nunca contra o gabarito

**Status:** aceita

## Contexto

Ao investigar os gabaritos `.jff` do AP durante o planejamento do fluxo
"desenhar → formalizar", foi encontrada uma divergência: o gabarito do L1
tinha uma transição a mais (`λ,Z;λ`, versão `n ≥ 0`) que a resposta esperada
do enunciado (versão `n > 0`). Se a Descrição Formal validasse contra o
gabarito, o aluno seria obrigado a reproduzir exatamente essa transição
extra, mesmo com um desenho correto para a versão `n > 0` do enunciado.

## Decisão

A Descrição Formal — em AFD, AP e MT — é sempre validada contra **o grafo que
o próprio aluno desenhou**, nunca contra o `.jff`/gabarito oficial. Cada
aluno formaliza o desenho que ele mesmo construiu; pequenas variações
estruturais válidas (como a do L1 do AP) não são penalizadas, desde que a
tupla e a tabela δ preenchidas batam com o que está realmente no canvas.

## Alternativas consideradas

- **Validar contra o gabarito `.jff`** — descartada: geraria falsos
  negativos sempre que o aluno desenhasse uma solução estruturalmente
  diferente (mas igualmente válida) do gabarito, como aconteceu no L1 do AP.

## Consequências / Trade-offs

- A validação da Descrição Formal precisa sempre ler do grafo real em tempo
  de jogo (nós/transições desenhados), nunca de um snapshot estático —
  acoplamento intencional entre "o que está na tela" e "o que é validado".
  MT segue explicitamente a mesma regra (ver `formalStateRows` derivado do
  grafo real em `mtFormalValidation.js`).
- Esse princípio também é o que torna possível a fase FORMAL do Modo Aula
  (ADR 0005) "demonstrar" a partir do grafo final revelado, em vez de um
  texto hard-coded — reaproveitamento direto da mesma fonte de verdade.

## Referências

- Achado original: `docs/archive/PLAN_AP_FORMAL_E_VISUAL.md` (§0)
- Código: `src/modules/afd/FormalDescriptionModal.jsx`, `src/modules/ap/components/APFormalDescription.jsx`, `src/modules/mt/utils/mtFormalValidation.js`
