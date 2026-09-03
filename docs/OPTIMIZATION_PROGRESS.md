# Progresso de Otimização — TuringLab

Baseado na auditoria de performance/arquitetura (GitHub Pages, sem servidor).
Cada item: implementação → `npm run build` (checar warnings/tamanhos) → `npm test` → testes manuais pontuais → marcar feito.

## Baseline (antes de qualquer mudança)

- Chunk principal: `index-CLdwJIEL.js` 337.22 KB raw / 86.32 KB gzip
- CSS principal: `index-Ddc4EQ8x.css` 60.66 KB raw / 10.97 KB gzip
- react-vendor: 189.64 KB raw / 59.65 KB gzip
- AFDPart1: 43.94 KB / APPart1: 104.48 KB / MTPart1: 117.81 KB / AFDPart2: 35.09 KB (todos lazy, ok)
- Build acusa: `[INEFFECTIVE_DYNAMIC_IMPORT]` em `AFDMinimizer.jsx` (confirmado)
- `npm test`: **1082 testes passando** (8 arquivos, ~59s — a maior parte é o fuzzer de equivalência AFD em `afd_levels.test.js`)

## Itens

- [x] **1. Corrigir code-split quebrado do `AFDMinimizer`** ✅
      Criado `src/modules/afd/afdMinimizerExercises.js` com o array `EXERCISES` (antes vivia dentro de `AFDMinimizer.jsx`). `App.jsx` agora importa `EXERCISES` desse novo módulo (estático, leve) em vez de `AFDMinimizer.jsx` (que continua só lazy). `AFDMinimizer.jsx` importa `EXERCISES` do mesmo lugar.
      **Resultado**: warning `[INEFFECTIVE_DYNAMIC_IMPORT]` sumiu do build. Chunk principal caiu de **337.22 KB → 220.38 KB raw** (86.32 → 49.17 KB gzip), redução de ~35%. `AFDMinimizer` agora tem chunk lazy próprio de 64.85 KB (só baixado quando o usuário abre Minimização).
      Testes: `npm test` 1082/1082 passando. Manual (Playwright): Minimização abre com 14 exercícios, progresso 0/42★, Ex.1 "Finais equivalentes" carrega os dados corretos.

- [x] **2. Separar metadados leves dos 61 níveis AFD do payload pesado** ✅
      Descoberta no meio do caminho: cada um dos 61 arquivos `L*.js` já mescla metadados leves com `guidedLesson` pesado (chama `buildLessonLN()`, que usa `LEVEL_GRAPHS`/`graphs_from_jflap.js`, 1076 linhas) no mesmo objeto exportado — separar isso exigiria reescrever os 61 arquivos (alto risco). Abordagem adotada em vez disso: `src/levels.js` (importado por `App.jsx`/`MainMenu.jsx`, nunca lazy) não reexporta mais `GAME_LEVELS`; criei `LEVEL_IDS` (array leve de ids, derivado de `LEVEL_DIFFICULTY` que já existia) para os dois únicos usos não-lazy (contagem de estrelas/progresso). Os 5 arquivos que realmente precisam do payload completo (`AFDPart1.jsx`, `AFDPart2.jsx`, `EndScreen.jsx`, `ExerciseScreen.jsx`, `LevelMenu.jsx` — todos já dentro de chunks lazy) passaram a importar `AFD_LEVELS` direto de `./levels_data/afd/index.js`, sem passar por `levels.js`.
      **Armadilha encontrada**: a primeira tentativa manteve um `export { AFD_LEVELS as GAME_LEVELS } from './levels_data/afd/index.js'` dentro de `levels.js` "só para quem precisasse" — isso sozinho bastou pro Rollup tratar o payload pesado como alcançável a partir da entrada principal de novo (chunk principal nem encolheu, 220.38→220.45 KB). Corrigido removendo o reexport por completo.
      **Resultado real**: chunk principal caiu de **220.38 KB → 29.22 KB raw** (49.20 → 8.73 KB gzip) — comparado ao baseline original de 337 KB, é **~91% menor**. Os 61 níveis (regex/guidedLesson/coordenadas) agora vivem num chunk `afd-*.js` (191 KB) compartilhado só entre os lazy chunks do AFD, nunca baixado ao abrir só a Home.
      Testes: `npm test` 1082/1082 passando. Manual (Playwright): Home mostra 0/429★ corretamente, AFD_1 lista 171★ (57 níveis disponíveis), L05 abre e navega ▶ pra L06, AFD_2 lista igual, zero erros de console em todos os fluxos.

- [x] **3. Parar de içar `AFDPart1.css` pro bundle CSS principal** ✅ (já resolvido como efeito colateral do #2 + limpeza extra)
      Confirmado via build: seletores exclusivos de `AFDPart1.css` (`.node-ctx-menu`, `.canvas-column`, `.transition-chip-input`) **não aparecem mais** no CSS principal — quebrar o vínculo estático `levels.js`→`levels_data` no item 2 fez o Rollup reavaliar toda a árvore de chunking, inclusive CSS, e isso já resolveu o problema original sem mudança extra.
      Ao investigar o CSS principal restante, encontrei ~150 linhas de CSS morto em `src/App.css` (blocos `.sim-panel-*`, `.sim-step*`, `.sim-nav-btn`, `.sim-progress`) — duplicata exata de regras já existentes em `AFDPart1.css`. Os únicos consumidores reais (`SimPanel.jsx`, `APSimPanel.jsx`) vivem em chunks lazy e usam as definições de `AFDPart1.css`, nunca as de `App.css`. Removido o bloco morto de `App.css`.
      **Resultado**: CSS principal caiu de **33.44 KB → 31.30 KB raw** (6.87 → 6.57 KB gzip).
      Testes: `npm test` 1082/1082 passando. Manual (Playwright): telas de AFD_1 renderizam normalmente, botão "SIMULAR" com estilo correto (cor/borda/sombra intactos — prova que nada dependia do bloco removido).

- [x] **4. `React.memo` nos componentes de nó/aresta renderizados em loop** ✅ (parcial, por decisão do usuário)
      Aplicado `memo` em `StrokeEl.jsx`, `TransitionLabel.jsx` (AFD), `APTransitionLabel.jsx` (AP) e `TMTransitionLabel.jsx` (MT). Em cada caso, `memo` sozinho não bastava — os pais passavam `style` como objeto inline (recriado a cada render) e callbacks fechados por instância (`onClick={() => ...}` capturando `idx`/`tIdx`/`from`/`to`), o que invalidaria a comparação superficial do memo mesmo com o wrapper aplicado. Corrigido em cada um:
      - `TransitionLabel`: `style={{left,top}}` virou props escalares `left`/`top`; o `ref={el => ...}` inline no `.map()` do `CanvasArea.jsx` virou um cache de callbacks estáveis por `idx` (`getLabelRefSetter`).
      - `APTransitionLabel`: mesma troca de `style`→`left`/`top`/`pointerEventsNone`/`selfLoop`; `onAddTriple`/`onAutoEditConsumed` inline (fechados por edge) viraram `addTriple`/`clearAutoEditKey` estáveis passados direto, com `from`/`to` como props e composição feita dentro do componente memoizado.
      - `TMTransitionLabel`: `onClick` inline (fechado por `t.tIdx`/`eraseMode`/`lessonActive`) virou `onRemove`/`onEdit` estáveis (`removeTriple` já era `useCallback` de origem; criei `startEditTriple` estável em `MTCanvas.jsx`) + `tIdx` lido de `transition.tIdx`.
      **Escopo deliberadamente NÃO incluído**: o `<div>` do nó do grafo em si (`CanvasArea.jsx`/`APCanvas.jsx`/`MTCanvas.jsx`) continua inline, sem componente próprio nem `memo` — extrair isso exigiria estabilizar ~6 handlers por módulo (drag, seleção, edição de rótulo, menu de contexto) na parte mais sensível a bugs de interação do app. Por decisão explícita do usuário (pergunta feita, resposta: fazer só StrokeEl+TransitionLabel), isso fica pendente — próximo passo natural se quiser continuar otimizando renders em grafos grandes (L55, 12+ estados).
      Testes: `npm test` 1082/1082 passando após cada mudança. Manual (Playwright), cobrindo os 3 módulos: AFD_1 — adicionar/editar símbolo, arrastar nó (label acompanha), renomear estado; AP — criar tripla, adicionar 2ª via "+", editar tripla existente; MT — criar transição (read/write/move), editar via clique no chip, apagar via modo Apagar. Zero erros de console em todos os casos.

- [~] **5. Extrair lógica de interação de canvas compartilhada (AFD/AP/MT)** — ADIADO por decisão do usuário
      ~1860 linhas combinadas duplicadas (drag/pan/zoom/context-menu/seleção) entre `CanvasArea.jsx`, `APCanvas.jsx`, `MTCanvas.jsx`. Perguntado explicitamente: risco médio-alto (parte mais sensível a interação do app, 3 módulos simultâneos) vs. ganho já obtido nos itens 1/2/4 (bundle principal ~91% menor). Usuário optou por não mexer agora. Fica documentado como oportunidade futura — se retomado, fazer um módulo por vez (ex.: só AFD primeiro) com bateria extensa de testes manuais de drag/seleção múltipla/zoom/pan/menu de contexto/Modo Aula antes de migrar o próximo.

- [~] **6. Otimizar imagens do Prof. Maurílio** — ADIADO (falta ferramenta)
      3 webp (~140 KB combinados: maurilio1_serio 44.8KB, maurilio2_apontando 47.5KB, maurilio3_explicando 49.0KB). Sem `cwebp`/ImageMagick/`sharp` disponíveis neste ambiente para recomprimir com validação visual — instalar uma dependência nova só para essa tarefa pontual foi descartado pelo usuário. Já são carregadas só dentro do chunk lazy do AFD (não afetam o load inicial da Home). Se quiser revisitar: rodar as 3 imagens por https://squoosh.app (WebP, qualidade ~75-80) manualmente e comparar visualmente antes de substituir.

## Validação final

- [x] `npm run build` limpo (sem `INEFFECTIVE_DYNAMIC_IMPORT`) — confirmado
- [x] `npm test` — **1082/1082 passando**
- [x] Testes manuais (Playwright ad-hoc): Home, AFD_1 (draw/símbolos/drag/rename), AFD_2, Minimização (14 exercícios, Ex.1 correto), AP (triplas/edição), MT (transições/edição/apagar) — zero erros de console em todos

## Resultado final vs. baseline

| Métrica | Baseline | Final | Redução |
|---|---|---|---|
| Chunk JS principal (sempre carregado) | 337.22 KB raw / 86.32 KB gzip | 29.22 KB raw / 8.73 KB gzip | **~91%** |
| CSS principal (sempre carregado) | 60.66 KB raw / 10.97 KB gzip | 31.30 KB raw / 6.57 KB gzip | **~48%** |
| Warning de build | `INEFFECTIVE_DYNAMIC_IMPORT` presente | nenhum | — |

Itens 1, 2, 3, 4 (parcial) implementados e verificados. Itens 5 e 6 documentados como adiados por decisão explícita do usuário (risco/escopo e falta de ferramenta, respectivamente) — ver seções acima para retomar no futuro.
