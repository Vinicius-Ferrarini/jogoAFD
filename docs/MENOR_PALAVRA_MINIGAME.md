# Minigame "Menor Palavra" — Plano de Implementação

## Objetivo

Novo módulo standalone no menu principal (**🔤 Menor Palavra**) que reaproveita
a mecânica do Termo (já implementada no AFD-L08) como um minigame independente,
com 1 exercício por nível real do jogo — todos os níveis de AFD, AP e MT-Recon
que têm menor palavra definida.

**Decisão-chave**: a mecânica do Termo (grid clicável, feedback verde/amarelo/
cinza, estágios de dica) precisa ficar em um lugar único, usado tanto pelas
fases normais (hoje só AFD-L08) quanto pelo minigame novo — **sem duplicar
código**. Este documento decide a arquitetura e guia a implementação em ordem,
marcando o checklist conforme cada passo é concluído e testado.

## Decisões já confirmadas com o usuário

1. **Escopo de módulos**: AFD + AP + MT-Recon juntos (não só AFD).
2. **Unidade do exercício**: 1 exercício por nível real do jogo (mesma
   linguagem/alfabeto do nível original — não é uma curadoria manual tipo Boss).
3. **Local no menu**: módulo próprio na tela inicial, ao lado de Autômatos
   Finitos / Pilha / Turing / Desafio.
4. **Leveza / lazy loading**: o minigame nunca importa `AFDPart1.jsx`/
   `APPart1.jsx`/`MTReconPart1.jsx` (componentes de tela pesados — canvas,
   drag-and-drop, undo/redo, aula guiada). Importa só de `levels_data/*` e das
   funções utilitárias de validação já existentes (`lvlAccepts`,
   `getShortestWord`, `getBattery`, `simulateTM`). O próprio módulo do
   minigame também é `lazy()` no `App.jsx`, como os outros módulos de tela.
5. **Progresso separado, 1 estrela por nível**: `progress['word-guess-<id>']`
   próprio, independente do progresso do módulo de origem. Estrela é binária
   (0 ou 1) — ganha ao acertar a menor palavra, **independente de ter usado
   dica ou não**. Mais simples que o sistema de 3 estrelas do jogo principal,
   condizente com o minigame ser "só a etapa de descobrir a palavra", sem o
   passo a passo de desenhar o autômato/aula guiada.
6. **Deduplicação por linguagem equivalente**: se dois níveis de módulos
   diferentes (ex.: 1 do AFD e 1 do AP) tiverem a **mesma linguagem formal**,
   contam como 1 exercício só no minigame (não 2 cards repetidos). Critério
   confirmado com o usuário: comparar a **linguagem/especificação formal**
   diretamente (não um proxy como "mesma shortestWord") — como a menor
   palavra, o alfabeto e as palavras aceitas/rejeitadas são todos derivados
   da linguagem, comparar a própria linguagem é a fonte de verdade correta.
   Isso exige normalizar a notação primeiro (ver Fase 3 abaixo) — AFD e
   AP/MT-Recon escrevem a mesma linguagem de formas textualmente diferentes.
7. **Escopo confirma só AFD+AP+MT-Recon, sem MT Transdutora**: o módulo `mt`
   (Transdutora, com os níveis pesados L23/L24 citados na memória do projeto)
   fica de fora do minigame — não faz parte do escopo combinado inicialmente.
8. **Paginação de 20 em 20 na grade**: ao entrar no minigame, carrega os
   primeiros 20 exercícios (metadado + checkWord); os próximos só carregam ao
   paginar. Ordem da lista combinada: **AFD → AP → MT-Recon** — como MT-Recon
   é o único módulo com lazy-load por nível já existente (`import()` dinâmico,
   ver decisão 9), ficar por último na paginação significa que o custo de
   carregar seus arquivos (o maior, L8, tem ~140KB) só é pago quando o aluno
   já rolou bastante a grade, não instantaneamente ao abrir o minigame.
9. **MT-Recon mantém seu lazy-load original**: `levels_data/mt-recon/index.js`
   já carrega cada nível sob demanda via `import()` dinâmico (comentário no
   código: "17 níveis, import estático somava ~11MB de source"). O adaptador
   `fromMTRecon.js` **não** deve forçar um `prefetchAllMTReconLevels()` de
   uma vez só — a paginação da decisão 8 é o que evita precisar disso.
10. **Dedupe pré-computado offline, nunca em runtime**: calcular duplicatas
    toda vez que o minigame abre exigiria carregar todos os 18 níveis
    MT-Recon de uma vez (~90 exercícios comparados par-a-par), anulando o
    lazy-load da decisão 9 e degradando performance. Em vez disso, um script
    Node (`scripts/generate-deduped-word-exercises.mjs`) roda manualmente e
    gera um arquivo estático (`dedupedLevelIds.js`) com os ids a excluir — os
    adaptadores só leem esse arquivo. Reexecutar o script quando níveis forem
    adicionados/editados (não é automático a cada build).

## Arquitetura: extrair a mecânica antes de construir o minigame

Decisão sobre a pergunta do usuário ("fazer tudo do minigame e depois acoplar,
ou fazer separado e a fase importa"): **fazer separado**. Motivo:

- A mecânica do Termo hoje está espalhada dentro de `AFDPart1.jsx` (estado
  `wordleHintStage`, `handleWordleHint`, gate `currentLevel?.id === 8`) e
  `CanvasArea.jsx` (overlay posicionado sobre o Maurílio). Isso é acoplado ao
  layout do canvas de desenho, que o minigame **não tem** (ele só teria a fase
  "descobrir a palavra", sem desenhar autômato depois).
- Se construíssemos o minigame primeiro copiando esse código, teríamos 2 cópias
  divergentes da lógica de feedback/estágios/submit — exatamente o problema que
  o usuário quer evitar.
- Extrair primeiro um **hook puro** (`useWordGuessGame`) com toda a lógica de
  estado (tentativas, guess atual, estágio de dica, submit, resultado) resolve
  isso: tanto a fase AFD-L08 quanto o minigame chamam o mesmo hook. Cada um
  decide como renderizar em volta (com ou sem Maurílio/overlay).
- `WordleBoard.jsx` (a grade visual) já é bastante desacoplado — vira o
  componente de apresentação puro, usado nos dois lugares sem mudança.

### Camadas (de baixo para cima)

```
wordleFeedback.js       (já existe — puro, sem mudança)
        │
useWordGuessGame.js      (NOVO — hook puro: estado + regras, sem JSX)
        │
WordleBoard.jsx           (existe, pequenos ajustes de props)
        │
   ┌────┴─────┐
   │           │
AFDPart1.jsx   MinWordGame.jsx (NOVO — tela standalone do minigame)
(fase L08,     (grade de níveis + 1 exercício por vez, sem canvas)
 dentro do
 canvas)
```

### Fonte de dados por módulo (heterogênea — resolvida por um adaptador)

| Módulo | Como obter shortestWord | Como obter alphabet | Como validar uma palavra | Campo de linguagem (texto) |
|---|---|---|---|---|
| AFD | `level.shortestWord` (campo estático) | `level.alphabet` | `lvlAccepts(level, word)` — já existe em `useAFDGraph.js` | `level.formula` — ex.: `"L = { a(bc)ⁿ a \| n > 0 }"` (Unicode sobrescrito desde a normalização AFD, ver nota abaixo; prefixo `L =`) |
| AP | `getShortestWord(level)` (derivado da bateria) | `level.alphabet` (derivado do gabarito) | bateria (`getBattery(level).accepted`) | `level.language` — ex.: `"{ aⁿbⁿ / n ≥ 0 }"` (Unicode sobrescrito, sem prefixo) |
| MT-Recon | `getShortestWord(level)` (BFS sobre o gabarito) | `level.alphabet` | `simulateTM(graph, word, ...)` contra o gabarito | `level.language` — mesmo formato do AP (`"{aⁿbⁿ / n ≥ 0}"`) |

Cada módulo tem uma função de origem diferente — o minigame não deve importar
`AFDPart1.jsx`/`APPart1.jsx`/`MTReconPart1.jsx` (são componentes de tela
inteiros, com canvas, undo/redo, etc. — ver decisão 4 acima). Em vez disso,
cria um **adaptador pequeno por módulo** (`buildWordExercisesFromAFD()`, etc.)
que lê os arrays de níveis já existentes e as já existentes
`lvlAccepts`/`getBattery`/`simulateTM`, produzindo uma lista plana de `{ id,
moduleId, levelId, label, language, languageNormalized, alphabet,
shortestWord, checkWord(word) }`. O hook `useWordGuessGame` e o `WordleBoard`
só enxergam essa forma genérica — nunca os detalhes de cada módulo.
`languageNormalized` é o que a Fase 3 (abaixo) produz e o que a Fase 4 usa
para deduplicar.

## Checklist de implementação

Ordem pensada para: (1) nunca deixar o L08 quebrado, (2) ter testes reais a
cada etapa, (3) só integrar ao menu principal quando o minigame já funciona
sozinho.

### Fase 1 — Extrair o hook puro `useWordGuessGame` (sem mudar comportamento do L08) ✅

- [x] Criar `src/modules/shared/wordGuessLogic.js` — núcleo 100% puro, sem
      React (`nextHintStage`, `typeChar`, `backspaceChar`, `distinctLetters`,
      `classifyAttempt`), seguindo o mesmo padrão de `useHistory.js`
      (`createHistoryStack` separado do hook React).
- [x] Criar `src/modules/shared/useWordGuessGame.js` — wrapper fino de
      `useState`/`useEffect` por cima da lógica pura (assinatura inicial;
      simplificada na Fase 2 depois de ler `handleTestWord` real — ver abaixo)
      — sem depender de `currentLevel`, `nodes`, `transitions` ou qualquer
      coisa do canvas AFD.
- [x] Testes unitários da lógica pura em `src/__tests__/wordGuessLogic.test.js`
      (23 testes: nextHintStage 0→1→2 travando em 2, typeChar só na próxima
      célula livre, backspaceChar só na última preenchida/vazia seguinte,
      distinctLetters ordenado sem repetição e filtrando 'λ', classifyAttempt
      shortest/correct/wrong). Hook React em si não tem teste próprio ainda —
      não há padrão de `renderHook` no projeto; a lógica que importa já está
      100% coberta na camada pura, e a Fase 2 valida o hook via Playwright.
- [x] `npx vitest run` — 1913/1913 (1890 + 23 novos). `npm run lint` — 0
      errors/36 warnings (baseline mantido). Nada em `AFDPart1.jsx` foi
      tocado ainda nesta fase.

### Fase 2 — Migrar AFD-L08 para usar o hook (sem regressão visual)

**Decisão de escopo (confirmada com o usuário após ler `handleTestWord` real)**:
`handleTestWord` em `AFDPart1.jsx` faz muito mais que a mecânica do Termo —
progressão de estrelas, abertura da Aula Guiada do L14, montagem do deck de
cartas, telemetria. Reescrever esse fluxo por trás do hook é arriscado (afeta
os 61 níveis de AFD, não só o L08). Por isso `useWordGuessGame` cobre **só a
parte 100% mecânica** (estágio de dica + digitação letra-a-letra da grade);
`handleTestWord`/`testWords` continuam exatamente como são hoje, cuidando de
estrelas/aula/deck — o hook só substitui `wordleHintStage`/`handleWordleHint`
locais e o estado de digitação que hoje vive espalhado em `WordleBoard.jsx`.

- [x] Simplificado `useWordGuessGame`: sem `checkWord`/`onResult`/submit
      interno (abordagem "tudo no hook" descartada). API final: `hintStage,
      targetLength, letters, requestHint, typeAt, backspaceAt, reset,
      setHintStage`. `guess` é CONTROLADO de fora (`guess`/`setGuess` passados
      ao hook) — no AFD-P1 isso é o próprio `newWord`/`setNewWord` do
      TestPanel, sem estado duplicado.
- [x] Hook é chamado em `AFDPart1.jsx` (não dentro do `WordleBoard`) — decidido
      assim porque o botão 💡 Dica vive no `GameHeader`, fora do `WordleBoard`/
      `CanvasArea`; o hook precisa ficar num nível que os dois conseguem
      alcançar via props.
- [x] `WordleBoard.jsx` virou componente de apresentação puro: recebe
      `guess/hintStage/typeAt/backspaceAt` como props, não reimplementa mais
      `typeChar`/`backspaceChar`/`distinctLetters` (importa de
      `wordGuessLogic.js`) — só desenha.
- [x] `wordleHintStage`/`handleWordleHint`/`setWordleHintStage` removidos de
      `AFDPart1.jsx`; substituídos por `wordleGame` (o hook) + `handleWordleHint`
      fino que chama `wordleGame.requestHint()`. `loadLevel` chama
      `wordleGame.reset()` em vez de `setWordleHintStage(0)`.
- [x] `CanvasArea.jsx` recebe `wordleGame` (objeto do hook) em vez de
      `wordleHintStage` solto; `setNewWord` removido das props (não usado mais
      ali — digitação passa por `wordleGame.typeAt/backspaceAt`).
- [x] Teste manual via Playwright: L08, clicar Dica 2x, digitar tentativa
      errada "bcab" (feedback amarelo/cinza correto), digitar a certa "abca"
      (tabuleiro libera) — idêntico ao comportamento pré-refatoração,
      confirmado via screenshot.
- [x] `npx vitest run` — 1913/1913. `npm run lint` — 1 erro novo detectado
      (`setNewWord` não usado em `CanvasArea.jsx`) e corrigido removendo o
      parâmetro; baseline restaurado (0 errors/36 warnings).

### Fase 3 — Normalização de linguagem ✅

Objetivo: uma função `normalizeLanguage(text)` que converte tanto
`level.formula` (AFD) quanto `level.language` (AP/MT-Recon) para uma única
forma canônica — o padrão de notação do AP (Unicode sobrescrito, sem prefixo
`L =`), conforme decidido com o usuário. Essa é a fonte de comparação da Fase
4 (dedupe).

**Levantamento real (concluído)** — extraído de todos os 61 níveis AFD + 20
AP + 15 MT-Recon via grep, não amostra:

- [x] **Achado principal (histórico — ver nota de atualização abaixo): AFD é
      quase 100% prosa, não fórmula com expoentes.** Um levantamento mais
      completo, feito depois desta Fase 3 (ver
      `docs/AFD_NOTACAO_ELEVADO.md`), encontrou na verdade 21 níveis com
      `a^n`/`b^m` (não "1 nível + uns poucos"), a maioria em `formula` —
      subestimativa corrigida quando `level.formula` do AFD foi normalizado
      para usar Unicode sobrescrito nativamente (ver nota abaixo). O restante
      (~40 níveis) continua sendo prosa tipo
      `"L = {w ∈ {0,1}* / w tem tamanho 3}"`. Isso não muda a prioridade da
      normalização em si: (1) remover o prefixo `L = `, (2) normalizar
      `>=`→`≥`/`<=`→`≤`, (3) trim/collapse de espaços continuam sendo o que
      mais frequentemente entra em jogo — só o mapeamento ASCII→Unicode de
      expoentes afeta mais níveis do que se pensava originalmente.
- [x] AP e MT-Recon já usam o mesmo formato-alvo (Unicode sobrescrito, sem
      prefixo) — divergem só em espaçamento (`{aⁿbⁿ / n ≥ 0}` vs
      `{aⁿbⁿ/² / n > 0 e n par}` vs variações de espaço em torno de `/`).
      Normalização entre os dois é essencialmente trim/collapse.
- [x] **Teste de comparação cross-módulo real (rodado após implementar, sobre
      as 97 strings reais — 62 AFD + 20 AP + 15 MT-Recon)**: a estimativa
      inicial manual ("só 1 par bate, e esse sai do pool") estava incompleta
      — era baseada numa amostra pequena, não no dataset inteiro. O resultado
      real, rodando `normalizeLanguage` sobre todos os arquivos: **8 grupos
      cross-módulo** batem por igualdade textual exata, todos entre
      **AP ↔ MT-Recon** (L1, L4, L10, L11, L12, L13, L16 — o mesmo material
      reaproveitado nos dois módulos, com a mesma notação Unicode) + o caso
      já prático **AFD-L14 ↔ MT-Recon-L6** (que sai do pool por
      `impossible: true`, então não gera um card duplicado de verdade).
      Também apareceram 2 duplicatas DENTRO do próprio AFD (L40/L47 e
      L49/L51 — mesma fórmula, ids diferentes), que também merecem dedupe.
      **Conclusão corrigida: o dedupe tem valor prático real** — evita ~8-10
      cards repetidos no minigame, não é só uma salvaguarda para o futuro.
- [x] Decisão explícita sobre o que **não** normalizar: linguagens
      logicamente equivalentes mas descritas com estruturas ou palavras
      diferentes (ex.: AP descrever em prosa "w tem quantidade igual de a e
      de b" onde AFD/MT-Recon usam `|w|a = |w|b`) **não** serão detectadas
      como duplicata — é uma limitação aceita da normalização textual (não é
      comparação semântica). Documentar no código e no relatório final.

**Implementação**:

- [x] `src/modules/shared/wordExercises/normalizeLanguage.js`: remove prefixo
      `L = `/`L=`, normaliza `>=`→`≥`, `<=`→`≤`, `!=`→`≠`, colapsa espaços
      múltiplos e trim geral (incluindo espaço logo após `{` e antes de `}`).
      Mapeamento de expoentes ASCII→Unicode caractere a caractere (dígitos +
      `n,m,p,r,s,t,u,k,i,j`) — `q` não tem sobrescrito Unicode oficial (não é
      uma limitação desta função: o Unicode simplesmente não define esse
      glyph). Continua documentado aqui para o caso de texto de OUTRO módulo
      vir a usar `^q` no futuro — mas depois da normalização AFD (ver
      `docs/AFD_NOTACAO_ELEVADO.md`), os 2 níveis do dataset que usavam essa
      variável (`c^q` em L58/L59) foram renomeados para `c^k`, então não há
      mais nenhum `^q` real no dataset atual.
- [x] Testes em `src/__tests__/normalizeLanguage.test.js` — 24 testes
      (prefixo, expoentes incluindo o caso sem sobrescrito `q`, operadores,
      espaçamento, guards de null/vazio, casos reais dos 3 módulos incluindo
      o par AFD-L14/MT-Recon-L6 batendo após normalização).
- [x] Validação extra rodando `normalizeLanguage` sobre as 97 strings reais
      via script descartável (não faz parte da suite) — confirmou 0
      exceções, 0 `^` sobrando, 0 prefixo `L=` sobrando, e revelou os 8
      grupos cross-módulo reais descritos acima (achado que corrigiu a
      estimativa inicial).
- [x] `npx vitest run` — 1937/1937 (1913 + 24 novos). `npm run lint` — 0
      errors/36 warnings (baseline mantido).

### Fase 4 — Adaptadores de dados por módulo (com dedupe) ✅

**Mudança de desenho importante (confirmada com o usuário)**: o dedupe NÃO é
calculado em runtime. MT-Recon é lazy-loaded por nível (`import()` dinâmico) —
calcular duplicatas toda vez que o minigame abre exigiria carregar os 18
arquivos MT-Recon de uma vez, sempre, anulando a otimização original e
degradando performance. Em vez disso: um **script Node offline**
(`scripts/generate-deduped-word-exercises.mjs`) roda 1x manualmente, compara
todas as linguagens normalizadas dos 3 módulos, e gera um arquivo estático
(`dedupedLevelIds.js`) com os ids a excluir — os adaptadores só importam e
filtram por esse `Set`, sem nenhum cálculo em tempo real. Reexecutar o script
sempre que níveis forem adicionados/editados (não é automático no build).

- [x] `src/modules/shared/wordExercises/fromAFD.js` — mapeia `AFD_LEVELS`
      (excluindo `UNAVAILABLE_LEVELS`/`HIDDEN_LEVELS`, `impossible`) usando
      `lvlAccepts` + `normalizeLanguage(level.formula)`, filtra por
      `EXCLUDED_WORD_EXERCISE_IDS`.
- [x] `src/modules/shared/wordExercises/fromAP.js` — idem para `AP_LEVELS`,
      usando `getShortestWord`/`pdaAccepts(level.solution, word)` (aplicando
      `level.truth` quando existe, igual ao `buildBattery` faz) +
      `normalizeLanguage(level.language)`.
- [x] `src/modules/shared/wordExercises/fromMTRecon.js` — **assíncrono**
      (só módulo lazy): expõe `MT_RECON_EXERCISE_IDS` (lista leve de ids, já
      filtrada pelo dedupe, sem carregar nenhum arquivo) e
      `buildWordExercisesFromMTRecon(ids)` que dispara `loadMTReconLevel` só
      para os ids pedidos — nunca `prefetchAllMTReconLevels()`.
- [x] `src/modules/shared/wordExercises/index.js` — `ALL_EXERCISE_STUBS`
      (AFD+AP resolvidos + MT-Recon como stub leve `{id, moduleId}`, nessa
      ordem) e `getExercisesPage(pageIndex)` assíncrona que resolve 20 por vez
      (`PAGE_SIZE`), carregando MT-Recon só quando a página pedida o contém.
- [x] **`scripts/generate-deduped-word-exercises.mjs`** — script standalone
      (não usa `migrador_afd.js` nem nenhum script existente, arquivo novo e
      isolado) que extrai `formula`/`language` de todos os arquivos de nível
      via regex de arquivo (sem precisar do bundler), normaliza, agrupa por
      linguagem, e escreve `dedupedLevelIds.js` com critério de desempate
      afd > ap > mt-recon, depois id. Rodado — resultado real: **8 exercícios
      excluídos** (2 intra-AFD: afd-47/afd-51; 6 cross-módulo AP↔MT-Recon:
      L1/L4/L10/L11/L12/L13).
- [x] **Achado extra (bug pré-existente, fora do escopo do minigame)**:
      `afd-50` (`L50`) tem `shortestWord: "ac"` mas a própria `validate()` do
      nível REJEITA "ac" (a fórmula exige `n+p` ímpar; "ac" dá soma par — "ac"
      inclusive está em `rejectedWords` do próprio arquivo). Confirmado com o
      usuário: **não mexer em `L50.js`** (afetaria a fase normal de AFD) — só
      excluir do minigame. Implementada uma guarda genérica em todos os 3
      adaptadores (`checkWord(shortestWord)` deve ser `true`, senão exclui com
      `console.warn`) — não hardcoded só pro L50, protege contra qualquer
      inconsistência de dados equivalente, existente ou futura.
- [x] Testes em `src/__tests__/wordExercisesAdapters.test.js` (15 testes,
      rodando sobre o dataset real, não fixtures): campos genéricos presentes,
      `checkWord(shortestWord)` aceita em todos os exercícios restantes,
      exclusão de impossible/hidden/L50 confirmada, dedupe intra-AFD
      confirmado (afd-47/51 ausentes, afd-40/49 presentes), ordem AFD→AP→
      MT-Recon nos stubs, paginação síncrona (página 0 sem MT-Recon) e
      assíncrona (última página resolve MT-Recon com `checkWord` funcional),
      drift guard entre `TOTAL_WORD_EXERCISE_COUNT` (leve) e
      `TOTAL_EXERCISE_COUNT` (real) — ver bug real pego por esse teste abaixo.
- [x] **Bug real pego pelo drift guard**: o script offline usava uma regex
      que só reconhecia `language: '...'` (aspas simples) — os arquivos
      `L5.js`/`L8.js`/`L9.js` do MT-Recon usam um formato JSON-like com
      `"language": "..."` (aspas duplas na chave E no valor), então esses 3
      níveis silenciosamente desapareciam da contagem/dedupe do script
      (mas não dos adaptadores reais, que leem o objeto JS já parseado).
      Corrigido: regex aceita ambas as formas de aspas. Resultado final após
      o fix: 84 exercícios (54 AFD + 19 AP + 12 MT-Recon, pós-dedupe/L50),
      9 grupos deduplicados (o fix revelou mais 1: `mt-recon-9`↔`ap-L9`).
- [x] `npx vitest run` — 1952/1952 (1937 + 15 novos). `npm run lint` — 0
      errors/36 warnings (baseline mantido).

### Fase 5 — Tela do minigame (leve, sem canvas) ✅

- [x] `src/modules/word-guess/WordGuessLevelList.jsx` — grade reaproveitando
      `LevelGridScreen` (mesmo padrão do `AFDMinimizer.jsx`/`MinGame.jsx`),
      badge "🔤 Menor Palavra", 1 card por exercício já deduplicado,
      colorido por módulo de origem (AFD azul/AP roxo/MT-Recon laranja) em
      vez de dificuldade. Paginação de 20 (`getExercisesPage`), loading state
      derivado de `{forPage, list}` em vez de um 2º `setState` síncrono no
      efeito (evitou um warning novo de lint, corrigido antes de prosseguir).
- [x] `src/modules/word-guess/WordGuessGame.jsx` — usa `useWordGuessGame` +
      `WordleBoard` diretamente (sem canvas, sem Maurílio aula-guiada, sem
      undo/redo) — layout simples: título do exercício + linguagem
      (`languageNormalized`, nunca escondida), grade do Termo sempre visível
      desde o início (diferente do L08 — aqui não há Maurílio pra esconder
      atrás), botão de dica avança pro estágio 2 (letras), mensagem de
      vitória ao acertar.
- [x] `src/modules/word-guess/WordGuess.jsx` — raiz que alterna grade/jogo
      com estado local (mesmo padrão de `AFDMinimizer.jsx`).
- [x] Sistema de estrelas: **1 estrela binária por nível** (decisão 5) — ganha
      ao acertar a menor palavra, independente de dica usada.
- [x] **Bug de UI pego na verificação visual**: `exercise.language` bruto tem
      prefixo `"L = "` só no AFD (não em AP/MT-Recon) — concatenar
      `"L = " + exercise.language` produzia `"L = L = {...}"` pro AFD.
      Corrigido usando `exercise.languageNormalized` (já sem prefixo nos 3
      módulos, gerado pela Fase 3) + o `"L = "` fixo do template.
- [x] Teste unitário dedicado da tela não implementado (o projeto não tem
      padrão de teste de componente React — os demais módulos de tela também
      não têm; a lógica de dados/dedupe/normalização já está 100% coberta em
      `wordExercisesAdapters.test.js`/`wordGuessLogic.test.js`, e o
      comportamento visual foi validado via Playwright na integração, Fase 6).
- [x] `npx vitest run` + `npm run lint` — verde (ver números na Fase 6, feita
      junto para permitir o teste ponta a ponta).

### Fase 6 — Integração no menu principal ✅

- [x] `App.jsx`: novo módulo `word-guess` **lazy-loaded**
      (`lazy(() => import('./modules/word-guess/WordGuess'))`) — adicionado a
      `DIRECT_GAME` (pula a tela de submódulos, mesmo padrão do AP) e ao case
      `'word-guess-play'` no switch de `GAME`.
- [x] Card no `ModuleSelection` (tela `MODULES`), ao lado de afd/ap/mt/desafio
      — ícone/cor `🔤`/amarelo, total vindo de `TOTAL_WORD_EXERCISE_COUNT`
      (arquivo leve gerado pelo script, evita importar os adaptadores pesados
      no bundle sempre-carregado do `App.jsx` — mesmo padrão de
      `services/starTotals.js` para AP/MT).
- [x] Progresso: `progress['word-guess-<id>']`, `updateProgress(key, 1)` ao
      acertar — reaproveita o `updateProgress` genérico existente (já suporta
      qualquer `moduleId` string e só grava se `stars > cur`).
- [x] Teste manual via Playwright, ponta a ponta: menu principal → card
      "Menor Palavra" → grade paginada (5 páginas, 84 exercícios) → abre
      exercício AFD-L05 (`{aⁿ | n > 0}`) → digita "a" → vence, estrela salva
      e visível ao voltar pra grade → navega até a última página → abre
      exercício MT-Recon (L15, `{aⁿbⁿ/³ / ...}`) → grade carrega via
      `import()` dinâmico, `checkWord` funcional. 0 exceções no console.
- [x] `npx vitest run` — 1952/1952. `npm run lint` — 0 errors/36 warnings.

### Fase 7 — Limpeza e revisão final ✅

- [x] Relido `AFDPart1.jsx`/`CanvasArea.jsx` — sem código morto: única
      referência restante é `handleWordleHint` (atual, delega pra
      `wordleGame.requestHint()`), nenhuma referência a `wordleHintStage`/
      `setWordleHintStage` (removidos na Fase 2) sobrou em lugar nenhum.
- [x] `README.md` atualizado — item novo na árvore de módulos (`## Módulos`)
      e parágrafo novo em `## ⭐ Sistema de Estrelas` explicando a estrela
      binária separada do total geral, seguindo o mesmo padrão de nota já
      usado pro Boss Mode.
- [x] `DEDUPE_REPORT` (Fase 4) listado e reportado ao usuário — ver
      resumo final abaixo.
- [x] Resumo final reportado ao usuário (ver mensagem de fechamento da
      conversa) — build de produção confirmou chunk do módulo leve:
      `WordGuess-*.js` 6,95 kB (gzip 2,91 kB) + `useWordGuessGame-*.js`
      0,51 kB (gzip 0,33 kB), sem arrastar `AFDPart1`/`APPart1`/
      `MTReconPart1` no bundle do minigame.

## Notas / riscos identificados

- **L14 (AFD)**: `shortestWord: ''` mas `impossible: true` — não deve virar
  exercício no minigame (não há "descobrir" nada, é λ direto e a lição é sobre
  impossibilidade). Mesma exclusão vale para qualquer nível `impossible` de
  AP/MT-Recon.
- **BUG CORRIGIDO — `shortestWord === ''` em exercícios normais (não
  `impossible`)**: 25 exercícios (14 AFD + 9 AP + 2 MT-Recon) têm λ como
  menor palavra mas SÃO jogáveis (não são `impossible`). A grade
  (`WordleBoard`) desenha `targetLength` células — com `targetLength=0` isso
  gera 0 células e o gatilho de auto-envio (`guess.length===targetLength`
  guardado por `targetLength>0`) nunca dispara, então a fase ficava
  impossível de vencer na prática. Corrigido com `findSecondShortestWord.js`
  (mesma técnica de BFS de `afd_levels.test.js`): os 3 adaptadores calculam
  `secondShortestWord` (a 1ª palavra NÃO-vazia aceita, em ordem de tamanho
  crescente, até `maxLen=8`) só quando `shortestWord===''`; `WordGuessGame.jsx`
  usa esse valor como `targetWord` (o alvo jogável da grade) nesse caso. Um
  exercício cuja linguagem não aceite NADA além de λ até `maxLen` (nenhum
  caso real encontrado nos 25) seria excluído do minigame, mesma lógica de
  `impossible`.
- **Alfabetos multi-símbolo**: a mecânica do Termo foi pilotada só no L08
  (alfabeto pequeno `{a,b,c}`), depois expandida para todo AFD_1 (ver nota
  "Grade Termo expandida" acima) — confirmado que AFD é sempre 1 caractere
  por símbolo em todos os 57 níveis ativos, então célula = caractere segue
  válido sem ajuste no `WordleBoard`/hook. Ao abrir para AP/MT-Recon no
  minigame standalone, alguns podem ter alfabetos maiores ou símbolos de mais
  de 1 caractere (checar antes da Fase 4) — decidir se isso afeta a exibição
  da grade (célula por símbolo, não por caractere) e ajustar se necessário.
  **Não assumir 1 caractere = 1 símbolo sem checar os dados.** AP (`t.read`)
  ainda não foi confirmado — checar na Fase 4.
- **Performance do `getShortestWord`/`getBattery`**: já são memoizados
  (`Map` cache) nos módulos de origem — o adaptador do minigame deve
  reaproveitar essas mesmas funções (não recalcular na mão) para não pagar
  custo duplicado nem divergir do valor usado nas fases normais.
- **Leveza dos imports (decisão 4)**: os adaptadores (`fromAFD.js`/
  `fromAP.js`/`fromMTRecon.js`) devem importar só de `levels_data/*` e das
  funções utilitárias — nunca dos componentes de tela. Vale a pena, ao final
  da Fase 6, checar o bundle gerado (`npm run build` + inspecionar o chunk do
  módulo `word-guess`) para confirmar que ele não arrastou código pesado por
  import transitivo acidental (ex.: se `levels_data/ap/index.js` importar
  algo de `modules/ap/` que puxa componentes React sem querer).
- **Dedupe é textual, não semântico (decisão 6)**: `normalizeLanguage`
  compara strings normalizadas, não roda um comparador de linguagens formais
  de verdade. Duas linguagens escritas de formas diferentes mas logicamente
  equivalentes não serão unificadas — isso é uma limitação aceita e deve
  ficar documentada no código, não é um bug a corrigir depois.
- **Critério de desempate no dedupe**: quando 2+ níveis colidem por
  `languageNormalized`, qual módulo/nível "vence" e fica como o card exibido
  (os outros viram `DEDUPED_OUT`)? Ainda não decidido — resolver na Fase 4,
  depois de ver quantas colisões reais existem (pode ser tão raro que a regra
  de desempate importa pouco, ou comum o bastante para merecer critério
  explícito, ex.: preferir o módulo "mais simples" AFD > AP > MT-Recon).
- **Grade Termo expandida para todos os níveis ativos de AFD_1**: a mecânica
  (grade + balão de dica do Maurílio anunciando o tamanho da menor palavra)
  saiu do piloto L08 e passou a valer para TODO nível ativo de AFD_1 — todo
  `id` fora de `HIDDEN_LEVELS`/`UNAVAILABLE_LEVELS`, exceto L14 (impossível
  em AFD, tem fluxo próprio de Aula Guiada automática). `WORDLE_GRID_LEVEL_IDS`
  em `AFDPart1.jsx` deixou de ser uma lista fixa e passou a ser calculada a
  partir de `GAME_LEVELS`, então acompanha sozinha qualquer nível
  reativado/ocultado depois. Ao clicar em Dica pela 1ª vez, o Maurílio fala
  "A menor palavra tem tamanho N." (ou a variante com λ/2ª menor palavra nos
  14 níveis onde `shortestWord===''`: L11, L15, L18, L21, L25, L27, L28, L30,
  L31, L32, L46, L53, L55, L59 — todos com `secondShortestWord` calculável).
  Verificado que alfabeto/tamanho da menor palavra não quebram a grade: L45
  (12 caracteres) e L56 (11 caracteres) — as maiores palavras entre os 57
  níveis ativos — renderizam a grade normalmente, sem overflow nem quebra de
  layout (células de largura fixa em `flex` sem wrap, cabem no espaço
  central do canvas). Nenhum tratamento diferente por dificuldade/tamanho:
  Trabalho (L56-L58) e Prova (L59-L61) usam a mesma mecânica normal.
