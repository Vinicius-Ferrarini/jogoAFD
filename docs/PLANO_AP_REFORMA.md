# Plano: 4 novos exercícios AP (L17-L20) + Reforma visual/mecânica do módulo AP

> ✅ **PLANO CONCLUÍDO** — todas as 9 tarefas implementadas, testadas e
> validadas (1077/1077 testes, zero regressão no AFD). Documento mantido
> como registro histórico das decisões e achados de cada tarefa.

> Rascunho de planejamento — NÃO EXECUTAR direto. Cada tarefa deve ser
> implementada, testada (`npm test` + verificação manual no navegador) e
> confirmada com o usuário antes de avançar para a próxima, pois o escopo
> total é grande e corre risco de estourar o limite de contexto/tokens se
> feito de uma vez.

## Contexto

O usuário pediu 4 exercícios novos no módulo AP (Autômato com Pilha):
duas fases de "Trabalho" (L17, L18) e duas de "Prova" (L19, L20), com
gabaritos JFLAP já adicionados em `gabaritos_jflap/ap/L17.xml` a `L20.xml`.
Além disso, pediu uma reforma para o módulo AP usar o mesmo "motor" visual
e mecânico do AFD Parte 1 (canvas fixo + zoom responsivo, mesmo header,
mesmo estilo geral), preparando terreno para uma futura função de
importar/exportar comum aos dois módulos.

**Descoberta crítica durante a investigação**: o módulo AP está **100%
quebrado hoje** (tela em branco). O código busca gabaritos com
`import.meta.glob('.../gabaritos_jflap/ap/*.jff', ...)`, mas os arquivos
foram renomeados de `.jff` para `.xml` (mencionado pelo próprio usuário).
Isso afeta os 15 exercícios já existentes, não só os 4 novos — é a
**Tarefa 1**, bloqueante, antes de qualquer outra coisa.

Decisões já confirmadas com o usuário:
- Corrigir o código para ler `.xml` (não renomear os arquivos de volta).
- Portar o sistema de canvas fixo (8000×8000px) + zoom real (Ctrl+scroll)
  do AFD Parte 1 para o AP — não só a técnica de zoom responsivo, o motor
  inteiro (`useCanvasState.js` + `CanvasArea.jsx` como referência).
- Criar suíte de testes automatizados para AP nos moldes de
  `afd_levels.test.js` (validar que cada gabarito parseia e que a bateria
  de testes bate com o enunciado, para os 20 níveis).

## Achados-chave da investigação (para não redescobrir)

- **Dados dos níveis AP** (`src/levels_data/ap/Lk.js`) são muito mais
  enxutos que os do AFD: só `{ level, language, hint, truth? }` (+
  `impossible/alphabet/stackAlphabet/note` no caso do L16). Tudo mais
  (`alphabet`, `stackAlphabet`, `solution`/grafo) é **derivado em runtime**
  do gabarito `.jff`/`.xml` parseado — não há "hand-authoring" de grafo
  como o AFD faz em `_MANUAL`. Ou seja, criar L17-L20 é barato: só 4
  arquivos de metadados + entrada no `META` de `src/levels_data/ap/index.js`.
- **Não existe `migrador_ap.js`** nem geração de arquivo estático — o AP
  faz parse dinâmico via `import.meta.glob` + `parseJff()`
  (`src/modules/ap/utils/pdaAlgorithms.js`). Não rodar nenhum script de
  migração para os novos níveis, só ajustar o glob (Tarefa 1) e registrar
  os metadados (Tarefa 2).
- **L16 (impossível)** não tem gabarito; usa `impossible: true` +
  `alphabet`/`stackAlphabet` manuais + `note` explicativa. Está excluído do
  cálculo de estrelas totais e não aparece no `UNAVAILABLE_LEVELS` (esse
  Set é exclusivo do AFD hoje).
- **Visual já está ~80% convergido** com o AFD via reuso direto de CSS
  (`AFDPart1.css`, `TestPanel.css`, `FooterDeck.css`,
  `FormalDescriptionModal.css`, `BlackboardPanel.css` — todos importados
  diretamente pelos componentes do AP). As divergências reais são:
  1. O header do AP (`.ap-header` em `APPart1.css`) recria HTML/CSS
     equivalente ao `GameHeader.jsx` do AFD em vez de reusar o componente.
  2. O canvas do AP é 100% responsivo por **porcentagem** (0-100%,
     `ResizeObserver` em `APCanvas.jsx`), sem zoom nem pan — diferente do
     AFD que usa canvas fixo 8000×8000px com zoom real (`useCanvasState.js`
     + `CanvasArea.jsx`).
- **Bug de seta torta já conhecido e replicado no AP**: `APCanvas.jsx`
  usa o mesmo padrão de marker com `refX=48` (maior que a largura do
  marker) tanto para retas quanto para curvas bidirecionais — o mesmo bug
  que corrigimos recentemente em `GraphView.jsx`/`useAFDGraph.js` do AFD
  (ponta da seta desalinhada em curvas). Precisa da mesma correção aqui.
- **Simulação de pilha em tempo real já existe e é rica**
  (`APStackSim.jsx` + `pdaAlgorithms.js`: `pdaAcceptingRun`,
  `pdaRejectingTrace`) — não é um gap a preencher do zero, é um recurso a
  preservar/adaptar ao layout do simulador do AFD.
- **Núcleo de simulação puro e testável**: `pdaAlgorithms.js` já expõe
  `parseJff`, `pdaAccepts`, `buildBattery`, `validateStudentPda` sem
  dependência de React/DOM — ótimo para a suíte de testes automatizados.
- **`GameHeader.jsx` do AFD está acoplado** a `GAME_LEVELS`/
  `LEVEL_DIFFICULTY`/`DIFF_COLOR` importados fixamente de `src/levels.js`
  (que hoje é só `AFD_LEVELS`). Para reusar no AP, precisa generalizar
  essas props (recebê-las como parâmetros em vez de import fixo).

## Ordem de execução (cada item = 1 sessão/tarefa, parar e validar entre elas)

### ✅ Tarefa 1 — CONCLUÍDA — Corrigir o bug crítico do glob `.jff` → `.xml` (BLOQUEANTE)
**Escopo:** só `src/levels_data/ap/index.js`, linha do `import.meta.glob`
e da função `gabarito()`.
- Trocar o padrão do glob para casar `*.xml` (manter compatibilidade com
  `.jff` também, com `or`, custa pouco e evita quebrar de novo se alguém
  usar a outra extensão no futuro).
- Ajustar `gabarito(name)` para procurar por `${name}.xml` (ou `.jff`).
- **Verificação:** `npm run dev`, abrir módulo AP no navegador, confirmar
  que o menu carrega os 16 níveis atuais (L1-L16) sem erro no console, e
  que abrir um nível (ex. L1) renderiza o grafo gabarito corretamente.
- Rodar `npm test` (garantir que nada em AFD quebrou — é mudança isolada
  em arquivo exclusivo do AP, risco baixíssimo).
- **Não mexer em mais nada nesta tarefa** — é a correção mínima para
  destravar todo o resto.

### ✅ Tarefa 2 — CONCLUÍDA — Registrar os 4 novos níveis (L17-L20) como dados

**Nota de execução**: a dúvida sobre "trabalho/prova" foi resolvida sem
precisar perguntar — o AFD já usa exatamente esses dois valores em
`LEVEL_DIFFICULTY`/`DIFF_COLOR` (`src/levels.js`), e o AP já consome
`DIFF_COLOR[level.level]` diretamente na UI. Usei `level: 'trabalho'`
para L17/L18 e `level: 'prova'` para L19/L20 — funcionou sem nenhuma
mudança de UI (cores corretas confirmadas visualmente: roxo/azul).

**Escopo:** `src/levels_data/ap/L17.js` .. `L20.js` (novos arquivos) +
`src/levels_data/ap/index.js` (registrar no `META`).
- Para cada nível, escrever o objeto de metadados seguindo o padrão dos
  existentes: `{ level: 'trabalho'|'prova', language: '<enunciado exato
  do usuário>', hint: '<dica pedagógica>' }`. Note que os níveis atuais
  usam `level` como dificuldade (`easy/medium/hard/impossible`) — como
  L17-L20 são "Trabalho"/"Prova", será necessário decidir se `level` vira
  um novo valor (`'trabalho'`/`'prova'`, análogo ao AFD que tem essas
  cores em `DIFF_COLOR`) ou se a categoria "trabalho/prova" é um campo
  novo separado do "nível de dificuldade" visual. **Perguntar ao usuário**
  se ficar ambíguo ao chegar nesta tarefa.
- Rodar cada gabarito (`L17.xml`..`L20.xml`) pela leitura do parser
  (script ad-hoc ou dentro da suíte da Tarefa 3) para conferir que
  `parseJff` os interpreta sem erro e que a linguagem aceita bate com o
  enunciado dado pelo usuário — usar `buildBattery`/`validateStudentPda`
  contra o próprio gabarito (deve dar 100% ok, já que é o gabarito
  validando a si mesmo) como sanity check antes de escrever o `truth`
  (só precisa de `truth` se houver divergência nas bordas, ex. λ).
- **Verificação:** `npm run dev`, abrir cada um dos 4 níveis no menu do
  AP, conferir que o grafo do gabarito aparece corretamente ao clicar
  "Aula" (usa auto-derivação de `buildApLesson.js`, então isso também
  valida a Tarefa 4 preliminarmente).
- `npm test`.

### ✅ Tarefa 3 — CONCLUÍDA — Suíte de testes automatizados para AP

**Nota de execução**: decidido sem precisar perguntar (a pergunta em
aberto era exatamente sobre isso) — implementei o teste "fraco"
(auto-consistência bateria↔gabarito, para os 20 níveis) **mais** o teste
"forte" (`validate(word)` de referência independente) para L18, L19 e
L20. L17 ficou de fora do teste forte por decisão de risco: sua pilha usa
um padrão de empilhamento não-trivial (cada `a` triplica o bloco de X's
em vez de somar 1 por símbolo, mais troca aninhada X↔Y via blocos de
`b`), então uma função de referência escrita à mão correria risco real de
replicar — ou pior, mascarar — o mesmo tipo de erro de transcrição que o
teste deveria pegar; para L17 o teste fraco (auto-consistência) já cobre
regressão estrutural. Achado interessante: ao escrever a função de
referência do L19 (`{ccwcc | ...}`), cometi um erro (`"cc"` sobrepondo os
dois pares em vez do mínimo real `"cccc"`) que o teste de fuzz pegou
imediatamente — boa evidência de que a suíte é sensível o bastante.
Também descobri que `getBattery`'s verdicts aplicam `level.truth` (ajuste
de borda) antes de rotular accepted/rejected — o teste de
auto-consistência replica essa mesma lógica (`level.truth ? truth(w, g) :
g`), senão os níveis que já usam `truth` (L7, L9, L10, L11, etc.) dariam
falso-positivo de regressão.

**Escopo:** novo arquivo `src/__tests__/ap_levels.test.js` (nome análogo a
`afd_levels.test.js`), seguindo o padrão de teste do AFD adaptado ao PDA:
- Para cada nível não-impossível de `AP_LEVELS`: parsear o gabarito,
  gerar a bateria (`buildBattery`), e confirmar
  `validateStudentPda(pdaFromGabarito, battery).ok === true` (sanity: o
  próprio gabarito deve passar 100% na própria bateria).
- Para o L16 (impossível): confirmar que `impossible === true`,
  `solution === null`, e que `alphabet`/`stackAlphabet` estão presentes.
- Fuzz/enumeração: reaproveitar a técnica de enumerar palavras até um
  comprimento N sobre o alfabeto e comparar `pdaAccepts(gabarito, w)` com
  o enunciado (via `regex`/função equivalente, se decidirmos escrever uma
  validação textual por nível — ver observação abaixo).
- **Observação importante**: diferente do AFD (que tem `regex`/`validate`
  hand-authored por nível para comparar contra o grafo), o AP **não tem**
  hoje uma "fonte da verdade" independente do próprio gabarito — a bateria
  é gerada a partir do gabarito, então testar "gabarito bate com a
  bateria gerada do próprio gabarito" é uma tautologia fraca (não pega
  erros de transcrição do enunciado pro JFLAP). Para um teste
  genuinamente forte, seria necessário escrever, para cada nível, uma
  função `validate(word)` em JS pura (equivalente ao `regex`/`validate` do
  AFD) e comparar contra o gabarito nas mesmas palavras enumeradas — isso
  é trabalho extra (16-20 funções de validação escritas à mão). **Decisão
  a alinhar com o usuário nesta tarefa**: vale o esforço de escrever essas
  funções de referência para todos os 20 níveis (teste forte, mais caro),
  ou o teste "fraco" (só valida parse + auto-consistência, mais barato) é
  suficiente por ora, com as `truth` existentes servindo de correção
  pontual? Recomendo começar pelo teste fraco (rápido, pega erros de XML
  malformado/regressão de parser) e escrever `validate` manual só para os
  4 níveis novos (L17-L20), que são os que realmente precisam de
  verificação extra por serem recém-criados.
- **Verificação:** `npm test` deve incluir a nova suíte e passar.

### ✅ Tarefa 4 — CONCLUÍDA — Aula com o Maurílio para L17-L20

**Nota de execução**: confirmado que a auto-derivação de `buildApLesson.js`
funciona sem ajuste manual para os 4 níveis. Achados:
- `pruneToEnunciado` **não removeu nenhuma transição** em nenhum dos 4
  (gabarito e grafo da aula têm exatamente a mesma contagem: L17=23,
  L18=19, L19=10, L20=11) — ou seja, os 4 gabaritos já casam 100% com o
  enunciado sem precisar de `truth`, e a aula sempre mostra o grafo
  completo do gabarito.
- Inspecionei a narração `prof.message` de todos os passos da FASE 1
  (GRAPH) dos 4 níveis (dump de texto via teste ad-hoc) — frases como
  "empilha Y sobre X" e "troca Z por Y" descrevem corretamente a mecânica
  real (`push`/`pop` do JFLAP), sem ambiguidade, mesmo nos casos mais
  intrincados do L17 (ex. `pop=X, push=YX` → "empilha Y sobre X", que
  preserva X abaixo — confirmado batendo com o XML).
- L17 (23 transições) e L18 (19) são de longe os gabaritos mais longos
  do módulo (o máximo anterior nos 16 níveis existentes era L7 com 12) —
  a aula guiada fica proporcionalmente mais longa (51 e 43 passos
  totais), mas é o mesmo mecanismo já usado nos demais, não uma
  regressão. Não escrevi `apLesson` manual para nenhum: a narração
  auto-derivada ficou coerente mesmo no L17.
- `boardWords` (quadro de palavras-alvo) ficou sensato nos 4:
  L17=`["cc","cdec","accaa"]`, L18=`["","ab","ba","cd","dc","aabb"]`,
  L19=`["cccc","ccabcc","ccbacc"]`, L20=`["aca","acca","abcba",...]`.
- Joguei as 4 aulas guiadas do início ao fim via Playwright em viewport
  1366×768 (FASE 1 + FASE 2 completas, ~25-51 cliques em "Próx. →" por
  nível), zero erro de console/página em todos, chegando ao botão final
  "✓ Fechar". Confirmei visualmente (screenshot) que o grafo do L17 (o
  maior, 7 estados) renderiza sem cortes no canvas atual do AP.

**Escopo original:** confirmar que `buildApLesson.js` (auto-derivação) já produz
uma aula coerente para os 4 novos níveis sem precisar de narração manual
(`apLesson` no META). Isso já deve funcionar "de graça" após a Tarefa 2,
já que a Aula é 100% auto-derivada do gabarito para todos os 16 níveis
atuais (nenhum usa `apLesson` manual hoje).
- Jogar a Aula guiada dos 4 níveis manualmente no navegador, prestar
  atenção a: (a) narração das transições faz sentido dado o enunciado
  (L17/L18 são mais complexos, com múltiplas seções — conferir que o
  `describe()` de `buildApLesson.js` não gera frases confusas para
  transições incomuns, ex. troca de símbolo no meio da pilha); (b) se
  `pruneToEnunciado` remove alguma transição indevidamente (checar
  visualmente que o grafo final da aula bate com o grafo do gabarito
  completo).
- Se a narração ficar ruim/confusa para algum nível (comum em autômatos
  mais complexos como L17, que tem 2 blocos simétricos + `c` central),
  **só então** escrever `apLesson` manual para esse nível específico
  (última opção, mais trabalho).
- **Verificação:** rodar a Aula guiada dos 4 níveis do início ao fim no
  navegador (Playwright ou manual), sem travar, com o quadro de palavras
  (`boardWords`) acendendo corretamente.

### ✅ Tarefa 5 — CONCLUÍDA (sem trabalho adicional) — Casos de teste para os níveis AP

**Nota de execução**: perguntado ao usuário — confirmado que "casos de
teste" significa cobertura de validação, não uma lista curada na UI. A
cobertura automática via `buildBattery`/`getBattery` (enumeração por
alfabeto + veredito do próprio gabarito, já coberta pela suíte da
Tarefa 3 para os 20 níveis, incluindo L17-L20) já satisfaz o pedido.
Nenhuma UI nova ou lista `acceptedWords`/`rejectedWords` por nível é
necessária — essa é uma diferença de design intencional do AP em relação
ao AFD, não uma lacuna a preencher.

### ✅ Tarefa 6 — CONCLUÍDA — Corrigir bug da seta torta em curvas bidirecionais (AP)

**Nota de execução**: aplicada a mesma correção do AFD. Em
`edgeRenders` (bloco `bidir`), o fim do path agora é recuado ao longo da
TANGENTE real da curva (vetor do ponto de controle da Bézier até o
destino, não a reta origem→destino) por `NR=32` unidades, e a aresta
passou a usar o marker `apahs` (refX=18, pequeno) em vez de `apah`
(refX=48) — mesmo padrão de correção, replicado porque AP e AFD não
compartilham esse código de renderização. `selfLoop` já usava `apahs`
corretamente, não precisou de mudança. Testado com L17 (tem par
bidirecional q1↔q2): joguei a Aula guiada completa via Playwright, zero
erros de console, screenshot confirma a ponta da seta alinhada e reta
entre os dois nós (antes cortava torta perto do nó de destino — mesmo
sintoma documentado no AFD). `npm test` (1077/1077) sem regressão; lint
limpo (1 warning pré-existente, linha 87, não relacionado a esta mudança).

**Escopo:** `src/modules/ap/components/APCanvas.jsx`, defs de marker
(linhas ~259-261) e uso do marker por aresta (linha ~267).
- Aplicar a mesma correção já validada no AFD: para arestas
  bidirecionais, recuar o ponto final do path ao longo da tangente real
  da curva (não da reta sp→tp) por um valor ~raio do nó, e usar o marker
  de `refX` pequeno (`apahs`, já existe, hoje só usado por self-loop) em
  vez do `apah` de `refX=48`.
- **Verificação:** abrir um nível AP com par bidirecional (conferir
  quais dos 20 níveis têm isso — provavelmente algum com transições
  simétricas, ex. push/pop no mesmo par de estados) e conferir viewport
  visual (screenshot Playwright antes/depois).
- Este item é pequeno e independente — pode ser feito em paralelo com
  qualquer outra tarefa se for mais conveniente.

### ✅ Tarefa 7 — CONCLUÍDA — Portar o header do AFD para o AP (`GameHeader.jsx` compartilhado)

**Nota de execução**: perguntei ao usuário se as estrelas do header do AP
deveriam virar `SvgStars` (como o AFD) ou continuar como texto
★★★☆☆ — confirmado `SvgStars` para os dois módulos, unificando 100%.
Generalizei `GameHeader.jsx` com props opcionais que preservam o
comportamento do AFD por default:
- `objective`/`label`/`diffColor`/`stars`/`starsMax`/`isFirst`/`isLast`
  substituem os cálculos internos fixos (`GAME_LEVELS`,
  `LEVEL_DIFFICULTY`, `DIFF_COLOR` importados de `src/levels.js`); o AFD
  agora calcula e passa esses valores explicitamente em `AFDPart1.jsx`
  (import de `LEVEL_DIFFICULTY`/`DIFF_COLOR` adicionado lá). Mantive
  fallback legado (`progress`/`currentLevel`) para não obrigar reescrever
  tudo de uma vez — funcionou sem quebra.
- `toggleSidebar` (☰) é opcional — omitida no AP, que não tem sidebar.
- `secondaryAction` (novo): botão extra opcional só usado pelo AP para
  "📝 Descrição Formal".
- `lessonToggleMode`: `'badge'` (default, comportamento do AFD — botão
  opaco + badge ✕ flutuante fecha a aula) vs `'swap'` (AP — o próprio
  botão alterna texto entre "👨‍🏫 Assistir Aula" ↔ "✕ Sair da Aula").
  Precisei dessa opção porque o AP já tinha esse padrão de UX diferente
  do AFD antes da unificação, e não fazia sentido forçar o badge ali.
- `APPart1.jsx` trocou `.ap-header` (JSX próprio) pelo `<GameHeader>`
  compartilhado; removidas as classes CSS órfãs correspondentes
  (`.ap-header*`, `.ap-mission-*`, `.ap-formal-toggle`, `.ap-level-label`)
  de `APPart1.css` (confirmado com grep que nenhum JSX as referenciava
  mais antes de remover).
- Verificação visual via Playwright (1366×768): AFD com zero mudança
  visual/funcional (screenshot idêntico ao anterior); AP com o novo
  header no estilo do AFD (mesmos botões `.menu-btn`, mesma navegação
  ◀/▶, `SvgStars`, cor de dificuldade no badge L17=roxo/L20=azul
  confirmadas), incluindo o swap de texto ao entrar na Aula. Zero erros
  de console em ambos.
- `npm test`: 1077/1077. Lint: contagem idêntica de erros pré-existentes
  do React Compiler em `AFDPart1.jsx` (12 problemas, confirmado via
  `git stash`/`stash pop` que já existiam antes desta tarefa);
  `APPart1.jsx` e `GameHeader.jsx`100% limpos.

**Escopo original:** generalizar `src/modules/afd/components/GameHeader.jsx` para
não depender fixamente de `GAME_LEVELS`/`LEVEL_DIFFICULTY`/`DIFF_COLOR`
importados de `src/levels.js` — vai precisar receber isso como props
(`gameLevels`, `levelDifficulty`, `diffColor` ou equivalente), OU criar
uma pequena camada de adaptação no AP que exponha os dados no mesmo
formato esperado. Depois, trocar o header HTML/CSS inline do
`APPart1.jsx` (`.ap-header` etc.) pelo componente compartilhado.
- Atenção: o header do AFD assume campos como `currentLevel.formula` (o
  AP usa `language`, não `formula`) e `currentLevel.guidedLesson`
  (booleano; no AP a aula é sempre auto-derivada, então esse campo
  provavelmente será sempre "verdadeiro" ou precisa de um equivalente).
  Mapear os nomes de campo com cuidado para não quebrar o AFD ao mesmo
  tempo (usar as MESMAS props, adaptando os dados no lado do AP, não
  alterando os nomes esperados pelo componente).
- **Verificação:** `npm run dev`, abrir AFD Parte 1 normalmente (garantir
  ZERO regressão visual/funcional — rodar os testes existentes do AFD +
  conferir visualmente um nível), depois abrir o AP e conferir que o novo
  header aparece e funciona (voltar, trocar de fase, abrir aula, abrir
  painel formal).
- `npm test` obrigatório após esta tarefa (é a que mais mexe em código
  compartilhado com o AFD).

### ✅ Tarefa 8 — CONCLUÍDA — Portar o motor de canvas fixo + zoom
(`useCanvasState.js` / `CanvasArea.jsx`) para o AP

**Nota de execução — achado que mudou o plano**: a 8a original (adaptar
`usePDAGraph.js` para px absolutos) **não existia de fato** — investigando
o código, `usePDAGraph.js` já é 100% agnóstico de unidade (nunca faz
`Math.max/min` de clamp; `addNode`/`moveNode` só armazenam o `x`/`y` que
recebem). O clamping sempre viveu em `APCanvas.jsx` (camada de
interação), exatamente como no AFD (`useAFDGraph.js` também é agnóstico;
o clamp mora em `CanvasArea.jsx`). Sub-tarefas reais executadas:
- **8b**: `buildApLesson.js`'s `layout()` trocou a saída de percentual
  (0-100) para pixels absolutos (`INNER_W`/`INNER_H`, importados de
  `useCanvasState.js`), preservando 100% a lógica de centralização por
  bounding-box + escala proporcional uniforme já existente (mais
  sofisticada que a do AFD, que usa um multiplicador fixo `*20` sem
  centralizar — decidi manter a lógica do AP, só trocar a unidade de
  saída, por ser estritamente melhor).
- **8c**: `APCanvas.jsx` reescrito para o padrão do AFD — viewport
  scrollável (`<div overflow:auto>`) + canvas-inner 8000×8000 com
  `transform: scale(actualScale)`, HUD de zoom (%, +/−, reset) idêntico
  ao `CanvasArea.jsx`. Mantive 100% a lógica de INTERAÇÃO própria do AP
  (clique-clique para conectar via modo `CONNECTING`, não o drag-de-seta
  estilo JFLAP do AFD) — só a camada de coordenadas mudou de %/tamanho-
  visível para px-absolutos/canvas-fixo. `usePDAGraph.js` não precisou de
  nenhuma mudança (confirma o achado da 8a). `APPart1.jsx` ganhou
  `useCanvasState()` (reusado sem clonar — o hook já era genérico o
  suficiente, só recebeu `isDrawingUnlocked: true` e `tela: 'JOGO'` fixos
  já que o AP não tem a noção de "desenho bloqueado" do AFD) e
  `innerCanvasRef`; `handleDeckDrop` (drag da carta "Novo Estado" do
  footer deck) passou a calcular px absolutos relativos ao canvas-inner
  em vez de % relativo ao container visível. `useAPDrawing.js` (rabisco)
  também migrou de coordenadas relativas ao container visível para
  coordenadas relativas ao canvas-inner fixo — sem essa mudança os
  traços ficariam desalinhados dos nós após a migração.
- **8d**: auto-fit-zoom do Modo Aula portado para dentro do
  `APCanvas.jsx` (mesmo algoritmo do `CanvasArea.jsx`: mede a bounding
  box dos nós exibidos, calcula o zoom mínimo necessário para caber no
  viewport com 10% de margem, nunca excede 100%). Testado com L17 (o
  maior grafo do módulo, 7 estados): o zoom caiu automaticamente para
  25% (mínimo) e o grafo completo ficou visível sem cortes em 1366×768.
- **Verificação**: suíte de testes automatizados (61 testes AP + 1016
  AFD = 1077, todos passando — a lógica pura não foi afetada, só a
  camada visual). Verificação visual via Playwright cobrindo: criar nó
  (clique), mover nó (drag), conectar dois nós (clique-clique), zoom
  in/out, rabisco (lápis), "Validar AP" com grafo incompleto (mensagem de
  erro tratada corretamente), aula guiada completa em L1/L13/L17/L18/
  L19/L20 (zero erros de console em todos), e o AFD (Parte 1) sem
  qualquer mudança visual/funcional. `useCanvasState.js` e
  `CanvasArea.jsx` do AFD não foram modificados — só importados/reusados
  pelo lado do AP.
- **Decisão de escopo**: NÃO portei o drag-de-seta estilo JFLAP do AFD
  (arrastar do nó de origem até o destino para criar aresta) — isso seria
  uma mudança de UX não solicitada. O AP manteve seu fluxo próprio
  (clicar "Criar Seta" → clicar origem → clicar destino), só ganhou o
  motor de canvas/zoom por baixo.

**Escopo original (para referência):**
Esta é a mudança mecânica mais profunda pedida pelo usuário. Envolve:
- **8a.** Adaptar `usePDAGraph.js` para armazenar `x`/`y` dos nós em
  pixels absolutos de um canvas grande (mesma constante `INNER_W/INNER_H
  = 8000` do AFD) em vez de percentual 0-100. Isso muda o range de
  clamp em `addNode`/`moveNode` (hoje `Math.max(3, Math.min(97, ...))`
  em %, precisa virar `Math.max(5, Math.min(7995, ...))` em px, análogo
  ao `useAFDGraph.js`/`CanvasArea.jsx` do AFD).
- **8b.** Reescrever `buildApLesson.js`'s `layout(states)` para escalar
  as coordenadas JFLAP originais (px) para o novo canvas 8000×8000 em vez
  de 0-100%, preservando a lógica de proporção já existente (só trocar a
  escala de saída).
- **8c.** Substituir `APCanvas.jsx` por uma versão que segue o padrão de
  `CanvasArea.jsx` do AFD: `<div ref={viewportRef} style="overflow:auto">`
  + `<div className="canvas-inner">` com `transform: scale(actualScale)`,
  reusando `useCanvasState.js` do AFD diretamente (é genérico o
  suficiente? conferir se tem qualquer acoplamento a nomes específicos do
  AFD antes de decidir se reusa ou clona) para ganhar zoom
  Ctrl+scroll/pan de graça. Portar também o HUD de zoom (%, botões +/-,
  reset) que já existe em `CanvasArea.jsx`.
- **8d.** Conferir e portar o auto-centering/auto-fit-zoom do Modo Aula
  que corrigimos recentemente no AFD (recalcula o zoom a cada passo para
  caber o grafo inteiro no viewport) — o AP precisa do mesmo
  comportamento, já que os grafos variam de tamanho entre os 20 níveis.
- **Verificação incremental**: testar cada sub-tarefa isoladamente
  (8a: consegue adicionar/mover nó sem quebrar; 8b: a Aula guiada
  continua posicionando os nós corretamente; 8c: zoom/pan funcionam,
  scroll normal do mouse não é capturado indevidamente; 8d: abrir a Aula
  de um nível com grafo grande — ex. L17/L18 — em viewport pequeno
  simulando 1366×768 e confirmar que nada corta).
- Este item por si só provavelmente precisa ser dividido em 2-4 sessões
  de trabalho separadas dada a extensão. **Ao iniciar esta tarefa,
  recomeçar com um plano de sub-tarefas mais granular**, não tentar fazer
  tudo de uma vez.
- `npm test` após CADA sub-tarefa (garantir zero regressão em AFD, que
  não deveria ser tocado nesta tarefa exceto se `useCanvasState.js` for
  generalizado com alguma prop nova — nesse caso, generalizar com
  defaults que preservam 100% o comportamento atual do AFD).

### ✅ Tarefa 9 — CONCLUÍDA — Layout do simulador ("Simular") do AP no
estilo do AFD + pilha visível em tempo real

**Nota de execução**: perguntei ao usuário onde a pilha deveria ficar
(rodapé ao lado do painel / card flutuante sobre o canvas / painel
lateral onde já estava) — confirmado "rodapé ao lado do painel". Criei
`src/modules/ap/components/APSimPanel.jsx` (substitui `APStackSim.jsx`,
removido — órfão após a migração) e removi o bloco CSS `.ap-sim2-*`
inteiro de `APPart1.css` (mantido só `@keyframes ap-block-push`,
reaproveitado pelo novo `.ap-simp-stack-block.just-pushed`):
- **Layout**: o simulador agora ocupa o RODAPÉ inteiro (mesmo lugar do
  `SimPanel` do AFD, substituindo as cartas de ação), com duas colunas:
  à esquerda o painel compacto reusando as classes `.sim-panel-*` do AFD
  (fita de entrada com caractere ativo/consumido, badge ACEITA/REJEITADA,
  card da transição atual, navegação ⏮◀▶); à direita uma coluna vertical
  estreita (74px) com os blocos da pilha atual, cada um com a cor do seu
  símbolo (paleta reaproveitada de `APStackSim.jsx`), destacando com a
  animação `just-pushed` o bloco recém-empilhado.
- `APFooterDeck.jsx` ganhou a prop `simPanel`: quando presente, substitui
  as cartas de ação (mesmo padrão condicional do `FooterDeck.jsx` do AFD
  com `showSimPanel`). Adicionei a classe `.ap-simp-footer` (230px de
  altura, vs. 168px do rodapé padrão) só quando o simulador está ativo,
  para caber a coluna da pilha confortavelmente.
- `APPart1.jsx`: `<APStackSim>` (que ficava no painel lateral direito,
  abaixo de "Validar AP") foi substituído por `sim && <APSimPanel .../>`
  passado como prop `simPanel` ao `<APFooterDeck>`. `title`/`message`
  (usados pelo card cartoon antigo para uma introdução textual) não são
  mais necessários — o contexto continua chegando ao jogador via o balão
  do Maurílio (`say()`, já existente e reaproveitado por `narrateSim`).
- **Verificação**: construí um AP funcional completo para L1 (aⁿbⁿ) via
  UI (clique a clique: 1 estado, self-loop com 4 triplas — 2 de push,
  1 de pop, 1 de esvaziar Z por λ) e testei via Playwright: (a) "Validar
  AP" com contraexemplo — painel/pilha aparecem corretamente no rodapé;
  (b) simular "aabb" (aceita) — avancei todos os 5 passos, fita
  sublinhada em verde, badge "✅ ACEITA", pilha mostrando "✓ vazia!" no
  passo final; (c) simular "aab" (rejeitada) — badge "❌ REJEITADA",
  mensagem "Pilha não esvaziou!", pilha mostrando os 2 blocos residuais
  (X sobre Z) que explicam visualmente a rejeição. Pilha anima
  corretamente empilhando/desempilhando a cada navegação de passo. Zero
  erros de console em todo o fluxo.

## Testes e validação transversal (repetir a cada tarefa)

1. `npm test` — suíte Vitest completa (AFD +, a partir da Tarefa 3, AP).
   **Nunca deve haver regressão nos testes do AFD já existentes** (1016
   testes hoje) — se algum quebrar, é sinal de que algo compartilhado foi
   tocado incorretamente.
2. `npm run lint` — conferir que não introduz novos erros (o projeto já
   tem alguns erros pré-existentes de regras experimentais do React
   Compiler, documentados como fora de escopo; não introduzir NOVOS).
3. Verificação manual no navegador (`npm run dev` + Playwright ad-hoc ou
   interação manual) — screenshots antes/depois para mudanças visuais.
4. Para tarefas que tocam `useCanvasState.js`/`GameHeader.jsx`/qualquer
   arquivo hoje exclusivo do AFD: testar explicitamente que o AFD Parte 1
   continua idêntico (visualmente e funcionalmente) antes de considerar a
   tarefa concluída.

## Perguntas em aberto (retomar quando a tarefa correspondente chegar)

- **Tarefa 9**: onde exatamente a pilha visual fica na tela do simulador
  (lateral, card flutuante, etc.)?
