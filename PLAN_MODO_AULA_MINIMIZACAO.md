# Plano — Modo Aula da Minimização de AFD

## 1. Objetivo

Adicionar um **Modo Aula** ao minigame de minimização: o professor Maurílio
**demonstra** cada passo (o "como se faz"), sobre o exercício atual, sem que o
aluno perca o próprio trabalho e **sem conceder estrelas**. A aula é apenas uma
demonstração; quem ganha estrela é o aluno fazendo de verdade.

## 2. Comportamento desejado (requisitos do usuário → regras)

1. **Por passo.** A minimização tem 6 etapas (`PREP → SETUP → TRIVIAL → PROP →
   GROUPS → DRAW`). Cada etapa tem sua própria demonstração do professor.
2. **Entra no passo atual.** Ao abrir a Aula estando na etapa N, a demonstração
   **começa na etapa N** (pula as etapas anteriores que o aluno já fez). Ex.: na
   etapa 2, a aula começa demonstrando a etapa 2, não a 1.
3. **Duas opções ao fim de cada etapa demonstrada:**
   - **▶ Continuar assistindo** → demonstra a próxima etapa (N+1).
   - **✋ Fazer eu mesmo** → fecha a aula e volta ao jogo.
4. **A aula NUNCA avança o progresso real.** Assistir às etapas 1 e 2 na aula
   **não** faz o aluno "pular" para a etapa 2 no jogo. Ao sair (✋), ele volta
   **exatamente para a etapa real em que estava**, com o seu próprio estado
   intacto (tabela δ que digitou, marcações, etc.).
5. **Sem estrela pela aula.** Concluir as etapas dentro da aula não dá estrela.
   Estrela só vem fazendo de verdade (validação real). Não há penalidade por ter
   assistido — depois de assistir, o aluno ainda pode fazer e ganhar a estrela.

## 3. Princípios de design (reaproveitar o que já existe)

- **Espelhar o "Modo Aula" do AFD_1** (`useGuidedLesson`, `GuidedLessonOverlay`,
  `BlackboardPanel`): demonstração roda sobre um **estado separado** (no AFD_1,
  `displayNodes` vêm de `guidedLesson[step].stateUpdate`, não do estado do aluno)
  e, ao terminar, restaura o trabalho do aluno. No AFD_1 isso exige snapshot
  porque a aula compartilha `nodes/transitions`; **na minimização é mais simples**:
  a aula é um **overlay separado** que não toca em `prep/axisRows/marks/...`, então
  não precisa de snapshot — basta esconder o overlay ao sair.
- **Juiz invisível (`useMinimizationGame`).** Toda a lógica continua no hook. A
  aula é **gerada automaticamente a partir do gabarito** já computado
  (`fullTransTable`, `rStates`, `trivialTable`, `distTable`, `allPairs`,
  `minimized`/`classMap`/`displayName`, `transTable`). **Vantagem enorme sobre o
  AFD_1**: não precisa escrever roteiro à mão por exercício — um único motor de
  aula serve para os 14 exercícios.
- **Reaproveitar os componentes visuais read-only** já existentes:
  `DeltaTableView`, `TriangularTable` (já tem `readOnly`, `highlightEquiv`,
  `validatedCells`), `GraphView`, o markup de grupos do `Step5_Result`, e o
  `ProfessorMaurilio` para a narração. Estilo do overlay no padrão de
  `GuidedLessonOverlay` (faixa "👨‍🏫 Modo Aula" + blocker + controles).

## 4. Arquitetura

### 4.1 Estado novo no `MinGame.jsx`
```js
// null quando a aula está fechada
const [lesson, setLesson] = useState(null); // { stepIdx, frameIdx }
```
- `stepIdx` = índice em `STEP_ORDER` da etapa sendo demonstrada.
- `frameIdx` = índice do sub-quadro (narração) dentro daquela etapa.
- O `step` real (gameplay) **nunca** é alterado pela aula.

### 4.2 Entrada
- Botão **"👨‍🏫 Aula"** no header do MinGame (ao lado dos selos de passo).
- `onClick` → `setLesson({ stepIdx: STEP_ORDER.indexOf(step), frameIdx: 0 })`
  (começa na etapa real atual — atende a regra 2).

### 4.3 Navegação (dentro do overlay)
- **◀ / ▶** andam entre os sub-quadros (`frameIdx`) da etapa atual.
- No **último** sub-quadro da etapa, aparecem as duas opções (regra 3):
  - **▶ Continuar assistindo — Passo N+1**: `stepIdx++`, `frameIdx = 0`
    (se houver próxima etapa).
  - **✋ Fazer eu mesmo**: `setLesson(null)` (volta ao `step` real; regra 4).
- Um botão **✋ Sair e fazer** fica sempre visível (sair a qualquer momento).
- **Nenhum** caminho da aula chama `setStep`, `updateProgress`, nem altera
  `prep/axisRows/marks/lockedCells` (garante regras 4 e 5).

### 4.4 Componente novo: `components/MinLessonOverlay.jsx`
Recebe `{ game, lesson, onNav, onContinue, onExit }` e renderiza, por etapa:
- a **faixa** "👨‍🏫 Modo Aula — Passo N: <nome>";
- a **visual read-only** apropriada preenchida pelo gabarito (ver §5);
- a **narração** do quadro atual (texto) — no balão do `ProfessorMaurilio`
  (reaproveita `min-prof-*`) e/ou numa faixa;
- os **controles** (◀ ▶, e as duas opções no fim da etapa);
- um **blocker** por baixo para impedir interação com o jogo enquanto a aula roda.

### 4.5 Roteiro gerado no hook
Adicionar ao `useMinimizationGame` um gerador memoizado:
```js
lessonScript = { PREP:[frame...], SETUP:[...], TRIVIAL:[...], PROP:[...], GROUPS:[...], DRAW:[...] }
```
onde cada `frame = { text, view }` e `view` descreve o que desenhar
(ex.: `{ kind:'delta' }`, `{ kind:'tri', marks, equiv?, highlight? }`,
`{ kind:'groups' }`, `{ kind:'graph', nodes, transitions }`). O `MinLessonOverlay`
só lê esse roteiro e desenha — **toda a lógica fica no hook**.

## 5. Conteúdo da aula por etapa (derivado do gabarito)

| Etapa | Visual reaproveitado | O que o professor demonstra | Fonte no hook |
|------|----------------------|------------------------------|----------------|
| **PREP** | `DeltaTableView` | "δ tem 1 linha por estado e 1 coluna por símbolo"; preenche a tabela. | `fullTransTable`, `states`, `alphabet` |
| **SETUP** | `TriangularTable` (eixos preenchidos, células vazias) | "Comparamos cada par 1 vez → tabela triangular, sem diagonal". | `rStates` |
| **TRIVIAL** | `TriangularTable` (`userTable`=marcações parciais) | Marca os pares final×não-final, um a um. | `trivialTable`, `allPairs` |
| **PROP** | `TriangularTable` (marcações acumulando) | Cada propagação: "(p,q) lendo 'a' vai p/ (p',q') que já é × → marca (p,q)". | **`distSequence`** (novo, ver §6) |
| **GROUPS** | markup de grupos do `Step5_Result` | "Pares sem × são equivalentes e viram um estado: {q0,q1}→q0q1". | `minimized.classMap` / `displayName` |
| **DRAW** | `GraphView` | Mostra o AFD mínimo: "um estado por grupo; transições saem de um representante". | `minimized.nodes` / `transitions` |

Cada etapa pode ter 1+ sub-quadros (`frames`). PROP terá um sub-quadro por
marcação de propagação (narração rica, passo a passo).

## 6. Suporte de algoritmo (em `utils/dfaAlgorithms.js` + hook)

Para a etapa PROP narrar "na ordem", adicionar uma função pura que **registra a
sequência** de marcações da propagação (mesmo laço de `computeDistTable`, mas
gravando ordem + testemunha):
```js
// retorna [{ pair, sym, dest }] na ordem em que cada par vira distinguível,
// além das marcações triviais iniciais.
export function computeDistSequence(states, finalStates, transitions, alphabet) { ... }
```
Expor no hook como `distSequence` (memoizado) e construir os `frames` de PROP a
partir dele. As demais etapas usam dados já existentes (sem nova lógica).

## 7. Passo a passo de implementação (build + ESLint após cada item)

1. **`dfaAlgorithms.js`**: implementar `computeDistSequence` (reusa o laço de
   `computeDistTable`, gravando ordem e símbolo-testemunha). Sem tocar nas funções
   existentes.
2. **`useMinimizationGame.js`**: memoizar `distSequence` e um `lessonScript`
   (objeto por etapa → array de `frames` `{ text, view }`), derivado do gabarito.
   Exportar `lessonScript` (e `distSequence` se útil). Nada de UI aqui.
3. **`MinLessonOverlay.jsx`** (novo): renderiza o `frame` atual (faixa + visual
   read-only + narração + controles + blocker), reaproveitando `DeltaTableView`,
   `TriangularTable`, `GraphView`, o markup de grupos e `ProfessorMaurilio`.
4. **`AFDMinimizer.css`**: classes `.min-lesson-*` (faixa, blocker, controles,
   botões "Continuar"/"Fazer"). Reusar visual do `GuidedLessonOverlay` (faixa
   amarela `#fde047`, borda preta, blocker). Manter `color:#000` (tema claro).
5. **`MinGame.jsx`**: estado `lesson`; botão "👨‍🏫 Aula" no header (abre em
   `STEP_ORDER.indexOf(step)`); renderizar `<MinLessonOverlay>` quando `lesson`;
   handlers `onNav(±1)`, `onContinue()` (stepIdx++), `onExit()` (`setLesson(null)`).
   Garantir que nenhum handler da aula chame `setStep`/`updateProgress`.
6. **DRAW na aula**: como o passo DRAW substitui o `min-main`, o overlay deve
   renderizar **por cima** (z-index) e o "Fazer eu mesmo" volta ao `MinDrawStep`
   normal. A demonstração de DRAW usa `GraphView` com `minimized`.
7. **Polimento**: textos didáticos ("como uma aula"), realces (ex.: na PROP,
   destacar o par sendo marcado e o par-destino testemunha via `selectedPair`/
   `validatedCells` do `TriangularTable`).

## 8. Reuso (arquivos/funções existentes)

- Gabarito: `src/modules/afd/hooks/useMinimizationGame.js`
  (`fullTransTable`, `rStates`, `trivialTable`, `distTable`, `allPairs`,
  `minimized`, `transTable`, `inspectPair`, `nextPropagationHint`).
- Visuais: `components/DeltaTableView.jsx`, `components/TriangularTable.jsx`
  (props `readOnly`, `highlightEquiv`, `validatedCells`, `selectedPair`),
  `components/GraphView.jsx`, markup de grupos em `components/Step5_Result.jsx`.
- Professor/estilo: `components/ProfessorMaurilio.jsx` (`min-prof-*`), padrão de
  overlay de `GuidedLessonOverlay.jsx` (faixa + blocker + dots).
- Máquina de passos e header: `MinGame.jsx` (`STEP_ORDER`, `STEP_LABELS`, `step`).

## 9. Casos de borda / regras a garantir

- Abrir a aula em qualquer etapa começa naquela etapa (nunca antes).
- "Continuar assistindo" no **último** passo (DRAW) some — só resta "Fazer eu mesmo".
- Sair da aula **sempre** retorna ao `step` real, com `prep/axisRows/marks/
  lockedCells` intactos (a aula não escreve neles).
- A aula não chama `updateProgress` em lugar nenhum (sem estrela).
- A barra DEV (🔧) e o Maurílio normal continuam funcionando fora da aula.
- Tema claro: textos do overlay em preto (a tela já está sob `.min-screen`).

## 10. Decisões em aberto (confirmar)

- **Penalidade por assistir?** Interpretação adotada: a **aula não dá estrela**,
  mas **não penaliza** — depois de assistir, o aluno faz normalmente e ganha a
  estrela pelo trabalho real. (Se o desejado for "assistiu a etapa → perde a
  estrela daquela etapa", é uma regra extra a definir.)
- **Granularidade da PROP:** um sub-quadro por marcação (mais didático) vs. um
  sub-quadro só com a tabela final. Recomendado: um por marcação.
- **DRAW:** mostrar o grafo mínimo pronto (recomendado) vs. construir nó a nó
  animado (mais trabalho).

## 11. Verificação (como testar de ponta a ponta)

1. `npm run build` e `npx eslint` limpos a cada etapa.
2. Entrar na minimização (ex. 5+), abrir "👨‍🏫 Aula" na **etapa 1** → o professor
   demonstra só a etapa 1; ao fim aparecem **Continuar assistindo** e
   **Fazer eu mesmo**.
3. Clicar **Continuar** algumas vezes (assistir 1→2→3…) e então **Fazer eu mesmo**
   → volta para a **etapa 1** (real), com a tabela δ que eu tinha digitado intacta,
   **sem** ter pulado e **sem** estrela.
4. Fazer a etapa 1 de verdade (validar) → avança para etapa 2 e ganha estrela
   normalmente. Abrir a Aula na etapa 2 → demonstra a partir da **etapa 2**.
5. Repetir até DRAW; conferir que "Continuar assistindo" some no último passo.
6. Conferir o contador de estrelas: assistir não altera; só o fazer real altera.
