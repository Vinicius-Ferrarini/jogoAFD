# 0004 — Minimização de AFD como minigame de Table Filling com "juiz invisível"

**Status:** aceita

## Contexto

O primeiro `AFDMinimizer.jsx` tinha 3 fases simples (`REQUISITOS`/`BUILD`/`RESULT`),
com `BuildPhase.jsx` escondendo 4 sub-passos internos via `useState`. Isso
dificultava dar feedback rico por sub-passo e tornava o algoritmo de
minimização (Myhill-Nerode) pouco visível — o aluno via o resultado, não o
processo.

## Decisão

Minimização virou um minigame de 5 passos explícitos (`PREP → SETUP →
TRIVIAL → PROP → RESULT`), onde o aluno **executa o algoritmo com as próprias
mãos** — monta a tabela δ, monta o grid triangular, marca os pares triviais,
propaga a distinguibilidade par a par. Toda a lógica de algoritmo mora em
`src/modules/afd/utils/dfaAlgorithms.js` (puro, sem UI); o hook
`src/modules/afd/hooks/useMinimizationGame.js` é o "gabarito invisível" —
calcula o resultado uma vez (memoizado) e expõe só validadores puros
(`{ ok, errorCells, message }`) que os componentes de passo consomem. O aluno
nunca vê o gabarito, só sinais de certo/errado.

## Alternativas consideradas

- **Manter o fluxo de 3 fases com sub-passos escondidos** — descartada: não
  dava para destacar erro por sub-passo nem preparar terreno para o Modo Aula
  (ver ADR 0005) sem reescrever de qualquer forma.
- **Hard-codar o roteiro por exercício** — descartada: o gabarito é computado
  dinamicamente a partir dos dados do AFD (`states`/`transitions`/`finalStates`
  do exercício); nada é hard-coded além dos próprios dados do autômato, o que
  permite adicionar exercícios novos (inclusive o L15 "prova") sem tocar em
  lógica de algoritmo.

## Consequências / Trade-offs

- Componentes de passo ficam "burros" (só UI + estado de edição local),
  testáveis e simples — mas qualquer mudança de regra do algoritmo central
  precisa passar pelo hook único, criando um ponto de acoplamento forte
  (aceito propositalmente: é o único lugar que sabe minimizar).
- O padrão "juiz invisível" (ação do aluno → validador puro → `errorCells`
  pintado) se repetiu depois no Modo Aula (ADR 0005), então o investimento
  compensou além do minigame original.
- `pairKey` usa comparação de string (`'q10' < 'q2'`) — seguro até 10 estados;
  exercícios maiores precisariam de ordenação por índice (não é problema hoje,
  mas é uma limitação conhecida e documentada no plano original).

## Referências

- Plano original: `docs/archive/PLAN_MINIMIZACAO_GAME.md`
- Código: `src/modules/afd/hooks/useMinimizationGame.js`, `src/modules/afd/utils/dfaAlgorithms.js`, `src/modules/afd/MinGame.jsx`
