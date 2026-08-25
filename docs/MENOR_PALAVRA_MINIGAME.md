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
| AFD | `level.shortestWord` (campo estático) | `level.alphabet` | `lvlAccepts(level, word)` — já existe em `useAFDGraph.js` | `level.formula` — ex.: `"L = { a(bc)^n a \| n > 0 }"` (ASCII, prefixo `L =`) |
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

### Fase 3 — Normalização de linguagem (PLANEJADA — não implementar ainda)

Objetivo: uma função `normalizeLanguage(text, { fromAFD })` que converte tanto
`level.formula` (AFD) quanto `level.language` (AP/MT-Recon) para uma única
forma canônica — o padrão de notação do AP (Unicode sobrescrito, sem prefixo
`L =`), conforme decidido com o usuário. Essa é a fonte de comparação da Fase
4 (dedupe). **Não implementar nesta fase — só o design abaixo, para revisão.**

- [ ] Levantar TODAS as variações de notação realmente usadas em
      `level.formula` (AFD, 61 níveis) antes de escrever qualquer regex de
      conversão — não assumir o padrão a partir de 2-3 exemplos. Catalogar:
      prefixos (`L = `, `L=`), expoentes (`^n`, `^m`, `^2`, `^(2m)` etc.),
      operadores (`>=`, `<=`, `!=`), símbolos especiais (`∅`, `λ`, `∈`),
      chaves/delimitadores.
- [ ] Levantar as variações equivalentes já usadas em `level.language` (AP +
      MT-Recon, ambos no mesmo formato-alvo) para confirmar que realmente
      convergem sem normalização adicional além de trim/collapse de espaços
      (a amostra inicial sugere isso, mas checar os ~60+ arquivos de cada,
      não só a amostra vista nesta conversa).
- [ ] Desenhar a tabela de conversão ASCII→Unicode (`^n`→`ⁿ`, `^m`→`ᵐ`,
      `>=`→`≥`, `<=`→`≤`, etc.) e decidir o que fazer com formas que não têm
      um sobrescrito Unicode direto (ex.: `^(2m)`, `^n+1`) — provavelmente
      preservar como está entre parênteses, mas decidir caso a caso ao ver os
      dados reais.
- [ ] Decidir explicitamente o que **não** normalizar: linguagens
      logicamente equivalentes mas descritas com estruturas diferentes (ex.:
      `n > 0` vs `n ≥ 1`, ou duas formas de escrever a mesma união de casos)
      **não** serão detectadas como duplicata — isso é uma limitação aceita
      da normalização textual (não é comparação semântica), documentar
      explicitamente no código e no relatório final para o usuário revisar
      manualmente se quiser.
- [ ] Só depois desse levantamento: implementar `normalizeLanguage()` em
      `src/modules/shared/wordExercises/normalizeLanguage.js`, com testes
      cobrindo casos reais dos 3 módulos (não só o L08).
- [ ] `npx vitest run` — confirmar suite verde antes de seguir para a Fase 4.

### Fase 4 — Adaptadores de dados por módulo (com dedupe)

- [ ] `src/modules/shared/wordExercises/fromAFD.js` — mapeia `AFD_LEVELS`
      (excluindo `UNAVAILABLE_LEVELS`/`HIDDEN_LEVELS`, e o L14 impossível/λ
      conforme regra abaixo) para a forma genérica, usando `lvlAccepts` +
      `normalizeLanguage(level.formula, { fromAFD: true })`.
- [ ] `src/modules/shared/wordExercises/fromAP.js` — idem para `AP_LEVELS`,
      usando `getShortestWord`/`getBattery`/`level.alphabet` +
      `normalizeLanguage(level.language)`. Níveis `impossible` (shortestWord
      null) ficam de fora do minigame — não há "menor palavra" para
      descobrir.
- [ ] `src/modules/shared/wordExercises/fromMTRecon.js` — idem para
      `MT_RECON_LEVELS`, usando `getShortestWord`/`getGabaritoGraph`/
      `simulateTM` + `normalizeLanguage(level.language)`.
- [ ] `src/modules/shared/wordExercises/index.js` — agrega os 3 num único
      array, com `id` estável tipo `afd-8`, `ap-12`, `mt-recon-5` (mesmo
      padrão de progresso `afd-min-${id}` já usado). Depois de agregar,
      **deduplica por `languageNormalized`**: quando 2+ exercícios têm a
      mesma linguagem normalizada, mantém 1 só (critério de desempate a
      definir — ex.: prioridade AFD > AP > MT-Recon, ou o de menor `id`) e
      registra os `id`s descartados num array `DEDUPED_OUT` exportado, só
      para o relatório final poder listar o que foi unificado.
- [ ] Testes: (1) para cada exercício gerado, `checkWord(shortestWord)` deve
      retornar aceito, e o tamanho/alfabeto batem com o nível original —
      roda sobre os arrays reais (não fixtures fake); (2) teste de dedupe com
      2 níveis reais que o levantamento da Fase 3 identificar como mesma
      linguagem (se nenhum par real existir, um teste com dados sintéticos
      cobrindo a função de dedupe isoladamente).
- [ ] `npx vitest run` — confirmar suite verde.

### Fase 5 — Tela do minigame (leve, sem canvas)

- [ ] `src/modules/word-guess/WordGuessLevelList.jsx` — grade reaproveitando
      `LevelGridScreen` (mesmo padrão do `AFDMinimizer.jsx`/`MinGame.jsx`),
      badge "🔤 Menor Palavra", 1 card por exercício já deduplicado,
      agrupado/colorido por módulo de origem (AFD/AP/MT-Recon) em vez de
      dificuldade.
- [ ] `src/modules/word-guess/WordGuessGame.jsx` — usa `useWordGuessGame` +
      `WordleBoard` diretamente (sem canvas, sem Maurílio aula-guiada, sem
      undo/redo) — layout propositalmente mais simples/leve que as fases
      normais: título do exercício, linguagem formal no topo (mesma regra
      "nunca esconder a linguagem"), grade do Termo no centro, resultado
      final ao acertar.
- [ ] Sistema de estrelas: **1 estrela binária por nível** (decisão 5 acima)
      — ganha ao acertar a menor palavra, independente de dica usada. Não
      precisa da complexidade de `errorSinceTutorialRef`/3-níveis das fases
      normais.
- [ ] Testes unitários da tela (se o padrão de testes de componente do
      projeto cobrir isso) ou, no mínimo, teste da regra de estrela como
      função pura extraída (trivial: `won → 1, else → 0`, mas ainda testável).
- [ ] `npx vitest run` + `npm run lint`.

### Fase 6 — Integração no menu principal

- [ ] `App.jsx`: novo módulo `word-guess` **lazy-loaded** (`lazy(() =>
      import(...))`, mesmo padrão dos outros módulos de tela) na tela inicial
      (`MODULE` screen), ícone/cor a definir, ao lado de afd/ap/mt/desafio.
- [ ] Progresso: `progress['word-guess-<id>']` seguindo o padrão existente,
      total de estrelas = número de exercícios já deduplicados (1 cada).
- [ ] Teste manual via Playwright: navegar do menu principal até o minigame,
      abrir um exercício de cada módulo de origem (AFD/AP/MT-Recon), testar
      palavra certa e errada, confirmar estrela salva.
- [ ] `npx vitest run` + `npm run lint` — rodada final.

### Fase 7 — Limpeza e revisão final

- [ ] Reler `AFDPart1.jsx`/`CanvasArea.jsx` — confirmar que não sobrou código
      morto da mecânica antiga do Termo (pré-hook).
- [ ] Atualizar `README.md` se ele documentar a lista de módulos/submódulos
      (checar antes de escrever qualquer número).
- [ ] Listar para o usuário o conteúdo de `DEDUPED_OUT` (Fase 4) — quais pares
      de níveis foram unificados por terem a mesma linguagem normalizada, para
      ele revisar se concorda com o resultado da dedupe.
- [ ] Resumo final para o usuário: o que foi criado, onde ficou a lógica
      compartilhada, quais módulos entraram, quantos exercícios no total
      (antes/depois da dedupe), tamanho do bundle do novo módulo.

## Notas / riscos identificados

- **L14 (AFD)**: `shortestWord: ''` mas `impossible: true` — não deve virar
  exercício no minigame (não há "descobrir" nada, é λ direto e a lição é sobre
  impossibilidade). Mesma exclusão vale para qualquer nível `impossible` de
  AP/MT-Recon.
- **Alfabetos multi-símbolo**: a mecânica do Termo foi pilotada só no L08
  porque ele tem alfabeto pequeno (`{a,b,c}`). Ao abrir para todos os níveis
  AFD/AP/MT-Recon, alguns podem ter alfabetos maiores ou símbolos de mais de 1
  caractere (checar antes da Fase 4) — decidir se isso afeta a exibição da
  grade (célula por símbolo, não por caractere) e ajustar `WordleBoard`/hook
  se necessário. **Não assumir 1 caractere = 1 símbolo sem checar os dados.**
  Confirmado nesta conversa que AFD é sempre 1 caractere; AP (`t.read`) ainda
  não foi confirmado — checar na Fase 4.
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
