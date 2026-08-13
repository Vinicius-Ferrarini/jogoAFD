# 0005 — Modo Aula é auto-derivado do gabarito, não roteiro manual por exercício

**Status:** aceita

## Contexto

O AFD já tinha um Modo Aula funcional (`useGuidedLesson`, `GuidedLessonOverlay`,
`BlackboardPanel`), mas com roteiro **escrito à mão** por nível (array
`guidedLesson` de passos `{ text, boardWords, stateUpdate }`). Ao levar o Modo
Aula para AP e Minimização, escrever manualmente um roteiro por exercício
custaria proporcionalmente ao número de níveis (15 do AP + N da Minimização) —
inviável de manter em escala.

## Decisão

Para AP e Minimização, o Modo Aula é **gerado automaticamente** a partir do
gabarito/algoritmo, não de um roteiro hard-coded:

- **AP**: `src/modules/ap/utils/buildApLesson.js` deriva a aula (fase GRAFO +
  fase FORMAL) diretamente do `.jff`/`.xml` parseado de cada nível — narração
  genérica construída a partir da tripla `(read, pop, push)` de cada
  transição. Funciona para os 15+ níveis sem nenhuma linha de roteiro manual.
- **Minimização**: `lessonScript` em `useMinimizationGame.js` gera os frames
  de cada etapa (PREP/SETUP/TRIVIAL/PROP/GROUPS/DRAW) a partir dos mesmos
  gabaritos memoizados (`trivialTable`, `distSequence`, `minimized`) já usados
  para validar o jogo — um único motor de aula serve a todos os exercícios.

Narração manual (`apLesson` explícito no nível) fica reservada como **exceção
pontual**, só quando a narração auto-derivada ficar confusa para um caso
específico — não é o caminho padrão.

## Alternativas consideradas

- **Roteiro manual por exercício** (como o AFD fazia originalmente) —
  descartado para os módulos novos por não escalar; mantido no AFD por já
  existir e funcionar, sem custo de reescrita justificável.
- **Não ter Modo Aula em AP/Minimização** — descartada, o Modo Aula é parte
  central da identidade pedagógica do jogo nos demais módulos.

## Consequências / Trade-offs

- Cobertura de 100% dos níveis "de graça" assim que a infraestrutura de
  auto-derivação está pronta — confirmado em `docs/archive/PLANO_AP_REFORMA.md`
  (Tarefa 4): narração auto-derivada ficou coerente mesmo nos gabaritos mais
  intrincados (L17, 23 transições, blocos simétricos).
- Narração genérica é menos rica que texto pedagógico escrito à mão — troca
  aceita em favor de escala; níveis "flagship" podem ganhar `apLesson` manual
  depois, incrementalmente, sem quebrar os demais.
- A qualidade da aula depende inteiramente da qualidade do gabarito
  `.jff`/`.xml` — um gabarito com transições redundantes ou mal-organizadas
  gera uma aula didaticamente mais confusa (mitigado caso a caso).

## Referências

- Planos originais: `docs/archive/PLAN_MODO_AULA_AP.md`, `docs/archive/PLAN_MODO_AULA_MINIMIZACAO.md`
- Execução AP: `docs/archive/PLANO_AP_REFORMA.md` (Tarefa 4)
- Código: `src/modules/ap/utils/buildApLesson.js`, `src/modules/afd/hooks/useMinimizationGame.js` (`lessonScript`)
