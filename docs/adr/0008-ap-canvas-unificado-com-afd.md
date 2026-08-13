# 0008 — AP migrou para o motor de canvas fixo + zoom do AFD

**Status:** aceita

## Contexto

O AP nasceu com um canvas 100% responsivo por porcentagem (`ResizeObserver`,
coordenadas 0-100%), sem zoom nem pan real — diferente do AFD, que usa canvas
fixo 8000×8000px com zoom real via `useCanvasState.js`/`CanvasArea.jsx`. Isso
divergia visualmente do resto do jogo e limitava a legibilidade de grafos
maiores (ex. L17, 7 estados) em viewports pequenos.

## Decisão

O AP foi migrado para o mesmo motor de canvas do AFD: canvas fixo
8000×8000px, zoom Ctrl+scroll real, mesmo HUD de zoom (%, +/−, reset), mesmo
auto-fit-zoom do Modo Aula. `usePDAGraph.js` já era agnóstico de unidade (não
precisou mudar); a migração real foi em `APCanvas.jsx` (reescrito no padrão
`CanvasArea.jsx`) e em `buildApLesson.js` (`layout()` trocou saída percentual
por pixels absolutos). A lógica de **interação** própria do AP (clique-clique
para conectar, em vez do drag-de-seta estilo JFLAP do AFD) foi mantida — só a
camada de coordenadas/zoom foi unificada, não o fluxo de UX de criar aresta.

## Alternativas consideradas

- **Manter canvas percentual próprio do AP** — descartada, divergia
  visualmente do resto do jogo e não escalava para grafos grandes.
- **Portar também o drag-de-seta estilo JFLAP do AFD para o AP** — descartada
  explicitamente como fora de escopo: seria uma mudança de UX não solicitada,
  não relacionada ao problema de canvas/zoom que motivou a migração.

## Consequências / Trade-offs

- `useCanvasState.js`/`CanvasArea.jsx` do AFD não foram modificados, só
  importados/reusados pelo AP — zero risco de regressão no AFD.
- `APCanvas.jsx`/`useAPDrawing.js` precisaram migrar de coordenadas relativas
  ao container visível para coordenadas relativas ao canvas-inner fixo —
  mudança de unidade em toda a camada de desenho/drag do AP.
- Grafos grandes (L17, L18) agora fazem auto-fit-zoom corretamente em
  viewports pequenos (confirmado zoom mínimo de 25% em 1366×768) — ganho de
  legibilidade direto.

## Referências

- Plano original: `docs/archive/PLANO_AP_REFORMA.md` (Tarefas 7, 8, 9)
- Código: `src/modules/ap/components/APCanvas.jsx`, `src/modules/afd/hooks/useCanvasState.js`
