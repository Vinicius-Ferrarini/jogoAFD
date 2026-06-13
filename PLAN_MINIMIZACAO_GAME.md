# PLAN — Minimização de AFD como Minigame Interativo

> **Status:** proposta de arquitetura. Nenhum código foi alterado a partir deste documento.
> **Autor:** Arquitetura React + Game Design Educacional.
> **Objetivo:** transformar o processo de minimização (Myhill–Nerode / Table Filling) num
> minigame jogável, com tentativa-e-erro e feedback contínuo do Professor Maurílio.

---

## 1. Visão geral

O aluno **executa o algoritmo com as próprias mãos**, fase a fase, e o jogo valida cada ação
contra um **gabarito invisível** calculado por `dfaAlgorithms.js`. O aluno nunca vê o gabarito —
ele só recebe sinais de certo/errado (células vermelhas + fala do Maurílio) e só avança quando a
fase está 100% correta.

### Princípios de design
- **Errar é barato e informativo.** Cada erro vira uma micro-aula (fala do Maurílio explicando a *regra*, não só "errado").
- **Avanço bloqueado por correção.** Não dá pra ir pra próxima fase com a anterior incompleta/errada.
- **O algoritmo é o juiz, não o roteiro.** O gabarito é computado dinamicamente do AFD do exercício; nada é hard-coded por exercício além dos dados do autômato.
- **Estilo visual:** neo-brutalismo já existente (bordas pretas, Comic Sans, sombras `box-shadow: Npx Npx 0 #000`), classes `.min-*` em `AFDMinimizer.css`.

---

## 2. Mapeamento com o código atual

Hoje a minimização vive em `src/modules/afd/`:

| Arquivo atual | Papel hoje | Destino neste plano |
|---|---|---|
| `MinGame.jsx` | Orquestra 3 fases (`REQUISITOS`/`BUILD`/`RESULT`) | **Evolui** para máquina de 5 passos (`PREP`→`SETUP`→`TRIVIAL`→`PROP`→`RESULT`) |
| `components/RequirementsPhase.jsx` | Verifica AFD (re-monta tabela de transição) | **Vira** `Step1_Preparation` (simplificado: só completude) |
| `components/BuildPhase.jsx` | 4 sub-passos internos (PARES/TRIVIAL/PROP/EQUIV) | **É dividido** em `Step2_TableSetup`, `Step3_TrivialMarking`, `Step4_Propagation` |
| `components/TriangularTable.jsx` | Grid triangular (já com `lockedCells`/`wrongCells`/`highlightEquiv`/`readOnly`) | **Reaproveitado** e estendido com `editableAxes` e `onInspectCell` |
| `components/ResultPhase.jsx` | AFD minimizado + grupos | **Reaproveitado** como `Step5_Result` (sem mudança funcional) |
| `utils/dfaAlgorithms.js` | `computeReachable`, `computeTrivialTable`, `computeDistTable`, `computeMinimized`, `computeLayout`, `pairKey` | **O gabarito invisível.** Sem novas funções de algoritmo; talvez 1 helper de "completude". |
| `components/GraphView.jsx` | Grafo SVG read-only | Reaproveitado no painel esquerdo em todas as fases |

> **Decisão arquitetural:** quebrar `BuildPhase.jsx` em três componentes de passo de primeira
> classe. Hoje os sub-passos são `useState` interno; isso dificulta feedback rico e telas
> dedicadas. Cada passo vira um componente isolado, testável e com sua própria matriz de erros.

---

## 3. Arquitetura de componentes

```
MinGame.jsx  (orquestrador / máquina de estados)
│
├── <GraphView/>                 ← painel esquerdo, sempre visível (AFD original; minimizado no RESULT)
│
├── <StepProgressBar/>           ← NOVO: trilha 1·Prep → 2·Grid → 3·Trivial → 4·Propagação → 5·Resultado
│
├── <ProfessorMaurilio/>         ← HUD inferior direito (balão de fala reativo aos erros)
│
└── painel direito (1 por vez, conforme step):
    ├── Step1_Preparation.jsx    ← verificar se é AFD (δ total)
    ├── Step2_TableSetup.jsx     ← montar o grid: linhas/colunas + rótulos dos eixos
    ├── Step3_TrivialMarking.jsx ← marcar X nos pares final × não-final
    ├── Step4_Propagation.jsx    ← inspetor de pares + propagação (desafio principal)
    └── Step5_Result.jsx         ← grupos de equivalência + AFD mínimo (= ResultPhase atual)
```

### Componentes compartilhados (reutilizados pelos steps)
- `TriangularTable.jsx` — a grade. Props estendidas (ver §5.2 e §5.4).
- `ProfessorMaurilio` — extrair o HUD que hoje está inline no `MinGame.jsx`/`FooterDeck.jsx` para um componente próprio que recebe `message` e `mood` (`serio | explicando | feliz`).
- Hook novo `useMinimizationGame(exercise)` — concentra o gabarito invisível e expõe os validadores (ver §6).

---

## 4. Máquina de estados (fluxo do jogo)

```
        ┌─────────┐  validaδTotal()  ┌────────┐  validaGrid()  ┌─────────┐
 START ─▶│  PREP   │ ───────────────▶│ SETUP  │ ──────────────▶│ TRIVIAL │
        └─────────┘                  └────────┘                └─────────┘
                                                                     │ validaTrivial()
                                                                     ▼
                                          ┌────────┐  validaProp()  ┌──────┐
                              RESULT ◀────│ RESULT │◀───────────────│ PROP │
                                          └────────┘                └──────┘
```

- Cada seta de avanço só dispara se o validador da fase retornar **`{ ok: true }`**.
- **Voltar** é permitido (botão "←"), mas ao voltar de `PROP`→`TRIVIAL` as marcações de propagação são descartadas (mantém só as triviais travadas). Regra: nunca deixar o aluno editar dados que já travaram um passo seguinte sem reabrir o passo.
- O `MinGame` guarda o `step` atual e os dados acumulados entre fases (rótulos dos eixos, células marcadas).

---

## 5. Detalhamento por fase

> Convenção de chaves de célula:
> - **Eixos/setup:** `"ri,ci"` (índice de linha, índice de coluna) — célula física do grid em construção.
> - **Pares lógicos:** `pairKey(a, b)` de `dfaAlgorithms.js` (ordena `a,b` para chave canônica) — usado para casar com o gabarito independentemente da posição visual.

---

### 5.1 — Step1_Preparation (Verificação do AFD)

**Objetivo pedagógico:** antes de minimizar, confirmar que o autômato é um AFD com função de
transição **total** (todo estado tem saída para todo símbolo). *Estados de erro explícitos ficam
fora de escopo agora* — apenas detectamos a incompletude e bloqueamos.

**UI:**
- Painel esquerdo: `<GraphView/>` com o AFD original.
- Painel direito: tabela de transição δ **somente leitura** (gerada do exercício) + checklist de requisitos.
- Botões "Verificar" por requisito, igual ao padrão atual de `RequirementsPhase`.

**Requisitos checados:**
1. **É determinístico?** — cada `(estado, símbolo)` tem no máximo uma saída. (Dado o formato dos exercícios, sempre verdadeiro; mantido como conceito.)
2. **δ é total?** — toda célula `(estado, símbolo)` preenchida. ← **gate principal desta fase.**
3. **Sem estados inalcançáveis?** — `computeReachable` aponta quem cai fora (informativo; serão descartados no SETUP).

**Estados React (locais do Step1):**
```
reqResults   : { isDFA: bool|null, isTotal: bool|null, unreachable: string[]|null }
reqChecked   : { isDFA: bool, isTotal: bool, unreachable: bool }
```

**Gabarito invisível:**
- `isTotalDelta(states, alphabet, transitions)` → varre se existe `δ(q,a)` para todo par. *(helper trivial; pode ficar inline no step ou virar função utilitária — ver §7.)*
- `computeReachable(states, initialState, transitions)` → `Set` de alcançáveis.

**Mecânica de erro / feedback do Maurílio:**
| Situação | Vermelho onde | Fala do Maurílio |
|---|---|---|
| δ incompleta | célula(s) faltantes da tabela δ | "O estado **qX** não tem saída para **'a'**. Um AFD precisa de transição para *todo* símbolo — complete a função δ antes de minimizar." |
| Estado inalcançável | linha do estado | "**qY** nunca é alcançado a partir do inicial. Ele não influencia a linguagem e será descartado." |

**Avanço:** habilita "Avançar → Montar Tabela" só quando `isTotal === true`.

---

### 5.2 — Step2_TableSetup (Construção do Grid Triangular)

**Objetivo pedagógico:** o aluno entende que a tabela compara **pares de estados distintos** —
logo é triangular (sem diagonal, sem repetição). Ele a constrói à mão.

**UI:**
- Controles `+ / −` para **quantidade de linhas** e **colunas**.
- Inputs em cada cabeçalho de eixo para **rotular com nomes de estados**.
- Grid renderizado por `TriangularTable` em modo `editableAxes`.

**Estados React (locais do Step2):**
```
axisRows      : string[]          // rótulos das linhas (ex.: ['q1','q2',...])
axisCols      : string[]          // rótulos das colunas (ex.: ['q0','q1',...])
errorCells    : Set<string>       // chaves "ri,ci" de células inválidas (auto-pares)
errorAxes     : Set<string>       // chaves "row-ri" / "col-ci" de rótulos inválidos
sizeError     : string | null     // mensagem de erro de dimensão
```

> **`errorCells` é a "matriz de erros" pedida.** Aqui ela marca cruzamentos inválidos
> (auto-pares `qi × qi`). Nos passos seguintes a mesma ideia (um `Set` de chaves) marca pares
> logicamente errados.

**Regras de validação (ao clicar "Validar grade"):**
1. **Dimensão correta:** `axisRows.length === n−1` **e** `axisCols.length === n−1`, onde `n = |estados alcançáveis|`. (Tabela triangular de `n` estados tem `n−1` por eixo.)
2. **Rótulos válidos:** todo rótulo ∈ conjunto de estados alcançáveis; sem repetição dentro de um eixo.
3. **Cobertura canônica:** um eixo deve excluir o **primeiro** estado e o outro o **último** (padrão da tabela triangular), de modo que cada par {p,q} apareça exatamente uma vez. *(Já implementado no `BuildPhase` atual via `setsEq`; portar a lógica.)*
4. **Sem auto-pares:** nenhuma célula ativa pode cruzar `rótuloLinha === rótuloColuna`. As que cruzarem entram em `errorCells`.

**Gabarito invisível:**
- Apenas a **lista de estados alcançáveis** (`rStates` derivado de `computeReachable`) e seu tamanho. Não precisa do algoritmo de distinguibilidade aqui — é validação estrutural.

**Mecânica de erro / feedback:**
| Situação | Vermelho onde | Fala do Maurílio |
|---|---|---|
| Tamanho errado | contorno do grid + `sizeError` | "Com **n** estados, a tabela triangular tem **n−1** linhas e **n−1** colunas. Ajuste o tamanho." |
| Rótulo inexistente/repetido | input do eixo (`errorAxes`) | "**qZ** não é um estado deste AFD (ou está repetido). Use cada estado uma vez." |
| Auto-par `qi × qi` | célula (`errorCells`) | "Não comparamos um estado com ele mesmo — a diagonal não existe. Por isso a tabela é *triangular*." |
| Eixos trocados | inputs dos eixos | "Quase! Um eixo deve começar no segundo estado e o outro terminar no penúltimo, pra cada par aparecer só uma vez." |

**Avanço:** "Avançar → Marcação Trivial" só com grade válida; ao avançar, congela `axisRows/axisCols` e passa adiante.

---

### 5.3 — Step3_TrivialMarking (Marcação Trivial: Finais × Não-Finais)

**Objetivo pedagógico:** o caso-base de Myhill–Nerode — todo par com **exatamente um** estado
final é imediatamente distinguível.

**UI:**
- `TriangularTable` com os eixos já montados, células **clicáveis** (toggle `×`).
- Badges destacando quais estados são **finais** (auxílio visual).

**Estados React (locais do Step3):**
```
marks       : Record<pairKey, boolean>   // X marcados pelo aluno
errorCells  : Set<pairKey>               // pares marcados errado OU faltando
```

**Regra de validação (ao clicar "Verificar Passo 1"):**
- Para cada par {p,q}: **deve** estar marcado ⇔ `final(p) !== final(q)`.
- Comparar `marks` contra `computeTrivialTable(rStates, rFinals)` (o gabarito).
- Qualquer divergência (marcou par não-trivial **ou** deixou de marcar um trivial) entra em `errorCells`.

**Gabarito invisível:**
```
const trivial = computeTrivialTable(rStates, rFinals);   // { pairKey: bool }
// erro := marks[k] !== trivial[k]
```

**Mecânica de erro / feedback:**
| Situação | Vermelho onde | Fala do Maurílio |
|---|---|---|
| Marcou dois não-finais (ou dois finais) | célula | "Esse par tem os dois estados do *mesmo tipo*. Nesta etapa só marcamos **final × não-final**." |
| Faltou marcar um final × não-final | célula | "Faltou um! Procure pares onde **um** estado é final e o **outro** não — esses são triviais." |

**Avanço:** "Verificar Passo 1" → se `errorCells` vazio, **trava** as células triviais (`lockedCells`) e vai para `PROP`. Caso contrário, pisca vermelho e fala.

---

### 5.4 — Step4_Propagation (Propagação — Desafio Principal)

**Objetivo pedagógico:** o passo indutivo de Myhill–Nerode. Dois estados são distinguíveis se,
para **algum símbolo**, levam a um par já distinguível.

**UI — o "Inspetor de Pares" (mecânica central):**
- Células triviais aparecem travadas (`×` cinza). As demais começam vazias.
- O aluno **seleciona um par** (clica numa célula vazia) → abre o **Inspetor** abaixo da tabela.
- O Inspetor mostra, para o par selecionado `{p,q}`, **uma linha por símbolo** do alfabeto:

```
Par selecionado: (q1, q3)
┌────────┬──────────┬──────────┬──────────────────┬───────────────┐
│ símbolo│  δ(q1,·) │  δ(q3,·) │  par de destino  │  destino X?   │
├────────┼──────────┼──────────┼──────────────────┼───────────────┤
│   a    │   q0     │   q2     │   (q0, q2)       │  ❌ marcado!  │  ← conclui: marcar (q1,q3)
│   b    │   q4     │   q4     │   (q4, q4)       │  — (iguais)   │
└────────┴──────────┴──────────┴──────────────────┴───────────────┘
[ Marcar (q1,q3) com X ]   [ Deixar sem marcar ]
```

- O jogo **calcula** os destinos (`δ`) e mostra se o par de destino já está `×`. O aluno **decide** e clica. Isso ensina o raciocínio sem entregar a resposta.
- "Par de destino igual" (`δ(p,a) === δ(q,a)`) é destacado como neutro (não distingue).

**Estados React (locais do Step4):**
```
marks         : Record<pairKey, boolean>  // herda travados do Step3 + novos da propagação
lockedCells   : Set<pairKey>              // triviais (não editáveis)
selectedPair  : pairKey | null            // par aberto no Inspetor
errorCells    : Set<pairKey>              // divergências contra o gabarito final
hintedPair    : pairKey | null            // par que o Maurílio apontou na última dica
```

**Regra de validação (ao clicar "Verificar Passo 2"):**
- Gabarito = `computeDistTable(rStates, rFinals, rTransitions, alphabet)` (tabela de distinguibilidade **completa** — roda Myhill–Nerode até estabilizar).
- Para cada par {p,q}: erro se `marks[k] !== dist[k]`.
  - `should && !is` → **propagação esquecida** (faltou marcar).
  - `!should && is` → **marcação indevida**.

**Gabarito invisível & a "Dica":**
```
const dist = computeDistTable(rStates, rFinals, rTransitions, alphabet);  // resposta final
```
- **Dica dirigida (💡):** varre os pares ainda não marcados procurando o primeiro `{p,q}` onde
  algum símbolo leva a um par de destino **já marcado** em `marks`. Aponta exatamente esse
  par e símbolo ("Confira (qX,qY) lendo 'a'..."). É a mesma busca que o aluno deveria fazer —
  o jogo só evidencia *onde* olhar, sem marcar por ele.
- **Erro "esqueceu de conferir":** ao validar, para cada par faltante o Maurílio cita a
  transição que o tornaria distinguível (reconstruída a partir de `δ` + `dist`).

**Mecânica de erro / feedback:**
| Situação | Vermelho onde | Fala do Maurílio |
|---|---|---|
| Faltou propagar | célula (`errorCells`) | "Você parou cedo. Em **(qX,qY)**, lendo **'a'**, vai-se para **(qA,qB)** que já está marcado — logo (qX,qY) também é distinguível." |
| Marcou par que ainda é equivalente | célula | "Cuidado: nenhum símbolo leva **(qX,qY)** a um par marcado. Por enquanto eles podem ser equivalentes — desmarque." |
| Tentou avançar incompleto | contorno + células faltantes | "Ainda há propagações possíveis. Rode mais uma rodada: reexamine cada par à luz das novas marcações." |

**Avanço:** "Verificar Passo 2" → se `errorCells` vazio, trava tudo e vai para `RESULT`,
chamando `updateProgress(afd-min-<id>, 3)`.

---

### 5.5 — Step5_Result (Resultado)

Sem mudança funcional em relação ao `ResultPhase` atual:
- Agrupa pares **não marcados** (equivalentes) por união-find → classes de equivalência.
- Renderiza `{q0, q1} → q0q1`, o grafo minimizado (`computeMinimized`) e as estrelas.

**Gabarito invisível:** `computeMinimized(rStates, initialState, rFinals, rTransitions, alphabet, dist)`.

---

## 6. Estados React consolidados

### Nível `MinGame` (orquestrador)
```
step          : 'PREP'|'SETUP'|'TRIVIAL'|'PROP'|'RESULT'
axisRows      : string[]            // congelado após SETUP, lido por TRIVIAL/PROP
axisCols      : string[]
marks         : Record<pairKey,bool>// acumulado de TRIVIAL→PROP
lockedCells   : Set<pairKey>        // o que cada passo congela para o próximo
profMessage   : string              // fala atual do Maurílio
profMood      : 'serio'|'explicando'|'feliz'
```

### Hook `useMinimizationGame(exercise)` — o "cérebro" do gabarito
Centraliza tudo que vem de `dfaAlgorithms.js`, para os steps só consumirem validadores:
```
return {
  rStates, rFinals, rTransitions, alphabet, initialState,   // dados (já filtrados por alcançáveis)
  transTable,                                               // δ: from→sym→to (lookup O(1))
  // gabaritos memoizados:
  trivialTable,        // computeTrivialTable
  distTable,           // computeDistTable  (resposta final)
  minimized,           // computeMinimized
  // validadores puros (retornam { ok, errorCells:Set, message }):
  validateDeltaTotal(),
  validateGrid(axisRows, axisCols),
  validateTrivial(marks),
  validatePropagation(marks),
  // auxiliares de UX:
  inspectPair(pair),   // → [{ sym, dp, dq, destPair, destMarked }]
  nextPropagationHint(marks),  // → { pair, sym } | null
}
```

> Vantagem: os componentes de passo ficam **burros** (só UI + estado local de edição); toda a
> regra do algoritmo fica no hook, fácil de testar isoladamente.

### Por que `errorCells` é um `Set<string>` (e não array)
- Lookup `O(1)` no render de cada célula (`errorCells.has(key)`), evitando `array.includes` por célula.
- Imutabilidade simples: cada validação cria um `new Set(...)`, disparando re-render previsível.
- A chave é sempre **canônica** (`"ri,ci"` no SETUP; `pairKey(a,b)` nas marcações), então a mesma célula nunca gera duas entradas.

---

## 7. O gabarito invisível — uso de `dfaAlgorithms.js`

Tudo que o jogo precisa validar já tem (ou quase tem) função pronta. **Não há novo algoritmo de
minimização a escrever** — só orquestração.

| Fase | Função usada | Como valida a ação do aluno |
|---|---|---|
| PREP | `computeReachable` + `isTotalDelta`* | Compara a tabela δ do exercício; aponta células faltantes e estados inalcançáveis. |
| SETUP | (lista `rStates`) | Validação estrutural: tamanho `n−1`, rótulos ∈ estados, sem auto-par, cobertura canônica. |
| TRIVIAL | `computeTrivialTable` | `marks[k] !== trivial[k]` ⇒ célula errada. |
| PROP | `computeDistTable` | `marks[k] !== dist[k]` ⇒ célula errada; `inspectPair`/`nextPropagationHint` guiam sem entregar. |
| RESULT | `computeMinimized` | Renderiza grupos e grafo final. |

`*isTotalDelta` é o único helper possivelmente novo — uma varredura `O(|Q|·|Σ|)` que retorna os
pares `(estado,símbolo)` sem transição. Trivial; pode nascer em `dfaAlgorithms.js` ou inline no
Step1. **(Decisão deixada para a fase de implementação — não é algoritmo de minimização.)**

### Princípio do "juiz invisível"
1. O aluno age (clica célula, digita rótulo, marca propagação).
2. O componente atualiza **só o estado de edição local** (`marks`, `axisRows`...).
3. Ao pedir validação, o componente chama o **validador puro do hook**, que compara contra o
   gabarito memoizado e devolve `{ ok, errorCells, message }`.
4. O componente pinta `errorCells` e o `MinGame` exibe `message` no balão do Maurílio.
5. Avanço de fase só com `ok === true`.

O gabarito é recalculado **uma vez** por exercício (via `useMemo` no hook) e nunca exposto ao DOM.

---

## 8. Estrutura de dados da matriz de erros (resumo)

```
// SETUP — célula física do grid
errorCells : Set<"ri,ci">       // auto-pares qi×qi
errorAxes  : Set<"row-ri"|"col-ci">
sizeError  : string | null

// TRIVIAL e PROP — par lógico
errorCells : Set<pairKey>       // pairKey(a,b) de dfaAlgorithms
// distinção semântica derivável on-the-fly:
//   faltando  = errorCells onde !marks[k]   (deveria ter X)
//   indevido  = errorCells onde  marks[k]   (não deveria ter X)
```

O render de `TriangularTable` aplica as classes CSS já existentes/planejadas:
`.min-cell.wrong` (vermelho + shake), `.min-cell.locked` (cinza travado),
`.min-cell.marked` (X), `.min-cell.equiv` (≡ verde no resultado).

---

## 9. Extensões necessárias em `TriangularTable.jsx`

Hoje aceita: `states, userTable, onToggle, wrongCells, lockedCells, highlightEquiv, readOnly`.
Adicionar (sem quebrar usos atuais — todas opcionais):

| Prop nova | Tipo | Para que |
|---|---|---|
| `editableAxes` | `bool` | SETUP: renderiza inputs nos cabeçalhos em vez de rótulos fixos. |
| `axisRows`,`axisCols` | `string[]` | SETUP: valores controlados dos eixos. |
| `onAxisChange` | `(eixo, idx, valor) => void` | SETUP: edição de rótulo. |
| `errorAxes` | `Set` | SETUP: pinta cabeçalhos inválidos. |
| `selectedPair` | `pairKey\|null` | PROP: realça a célula sob inspeção. |
| `onInspectCell` | `(pairKey) => void` | PROP: abrir o Inspetor ao clicar célula vazia. |

> Mantém retrocompatibilidade: quem não passar essas props se comporta como hoje.

---

## 10. Componente novo: `ProfessorMaurilio.jsx`

Extrair o HUD hoje duplicado (inline em `MinGame.jsx` e em `FooterDeck.jsx`).
```
props: { message: string, mood: 'serio'|'explicando'|'feliz', onClick?: () => void }
```
- `mood` escolhe a imagem (`maurilio1_serio` / `maurilio3_explicando` / nova "feliz" se houver).
- Balão aparece só com `message` não-vazia; some via timeout controlado pelo `MinGame`.
- Centraliza o tom das mensagens de erro (consistência didática).

---

## 11. Plano de implementação incremental (ordem sugerida)

> Cada etapa builda e roda isolada; nada quebra o fluxo atual até o "switch" final.

1. **`useMinimizationGame.js`** — hook com gabaritos + validadores puros (testável sem UI).
2. **`isTotalDelta`** (se optar por extrair) em `dfaAlgorithms.js`.
3. **`TriangularTable.jsx`** — props novas (`editableAxes`, inspeção), retrocompatível.
4. **`ProfessorMaurilio.jsx`** — extração do HUD.
5. **`Step1_Preparation.jsx`** ← adapta `RequirementsPhase`.
6. **`Step2_TableSetup.jsx`** ← extrai o setup de eixos do `BuildPhase`.
7. **`Step3_TrivialMarking.jsx`** ← extrai o sub-passo trivial.
8. **`Step4_Propagation.jsx`** ← **novo**: inspetor de pares + propagação guiada.
9. **`Step5_Result.jsx`** ← renomeia/move `ResultPhase`.
10. **`MinGame.jsx`** — troca a orquestração de 3 fases pela máquina de 5 passos e pluga o hook.
11. Remover `BuildPhase.jsx` (absorvido pelos steps 2–4) **por último**, após paridade confirmada.

---

## 12. Verificação / critérios de aceite

- [ ] `npm run build` sem erros; lint sem **novos** warnings.
- [ ] **PREP:** AFD com δ incompleta é bloqueado e aponta a célula faltante.
- [ ] **SETUP:** tamanho errado, rótulo inválido, eixos trocados e auto-par cada um pinta o alvo certo e dá a fala certa.
- [ ] **TRIVIAL:** marcar dois não-finais → vermelho; faltar um trivial → não avança.
- [ ] **PROP:** Inspetor calcula `δ` corretamente; "Dica" aponta uma propagação real; validar com par faltante cita a transição esquecida; marcar par indevido é rejeitado.
- [ ] **RESULT:** grupos batem com `computeMinimized`; grafo mínimo correto.
- [ ] Rodar os exercícios atuais (`EXERCISES` em `AFDMinimizer.jsx`) ponta-a-ponta: Ex.15 (q0≡q1, q2≡q3≡q4), Ex.17 (três fusões), Ex.16 (já mínimo — nenhuma fusão, nenhum par equivalente sobra).
- [ ] Caso "já mínimo" (Ex.16): no PROP **todos** os pares acabam marcados; RESULT não funde nada.

---

## 13. Roadmap futuro — Modo Aula (nos moldes do AFD_1)

> **Fora do escopo da primeira entrega**, mas a arquitetura abaixo é desenhada para acomodá-lo
> sem reescrita. Confirmado como direção do projeto.

O AFD_1 já tem um **Modo Aula** guiado (`GuidedLessonOverlay` + arrays `guidedLesson` com passos
`{ text, boardWords, boardDoneUpTo, stateUpdate }`, navegação Próximo/Anterior, Maurílio
explicando cada passo). A minimização ganhará um modo equivalente: **assistir o algoritmo rodar
sozinho**, em vez de jogá-lo.

**Como o jogo (este plano) habilita o Modo Aula depois:**
- O **hook `useMinimizationGame`** já expõe todos os gabaritos e auxiliares (`trivialTable`,
  `distTable`, `inspectPair`, `nextPropagationHint`, `minimized`). O Modo Aula consome **o mesmo
  hook**, só que dirige a UI automaticamente em vez de esperar cliques.
- Cada passo da aula é um **snapshot derivável** do algoritmo:
  1. PREP → mostra δ e aponta total/alcançáveis.
  2. SETUP → desenha o grid triangular pronto.
  3. TRIVIAL → preenche os `×` triviais um a um (anima `computeTrivialTable`).
  4. PROP → para cada rodada de propagação, destaca o par {p,q}, mostra o `inspectPair` e marca o `×` (anima a convergência de `computeDistTable`).
  5. RESULT → agrupa e exibe o AFD mínimo.
- **Reuso direto de componentes:** `TriangularTable` (com `lockedCells`/`marks` controlados pela
  aula), `ProfessorMaurilio` (fala de cada passo) e `GraphView`. A diferença Jogo × Aula é só
  **quem controla o estado**: o aluno (jogo) ou um cursor de passos (aula).

**Implicação de design já incorporada neste plano:** manter os componentes de passo "burros"
(UI + estado de edição) e a lógica no hook é justamente o que permite plugar um **driver de aula**
por cima sem duplicar regra. Um futuro `MinLessonOverlay` injetaria `marks`/`selectedPair`/`step`
de forma programática, reaproveitando os mesmos `Step*`.

> **Pendência futura:** definir o array de passos da aula por exercício (texto do Maurílio +
> qual sub-marcação destacar), análogo ao `guidedLesson` do AFD_1.

---

## 14. Riscos & decisões em aberto

- **`pairKey` usa comparação de string** (`'q10' < 'q2'`). Para `q0..q9` é seguro; se algum
  exercício passar de 10 estados, padronizar a ordenação por índice. *(Fora de escopo agora.)*
- **Refator vs. reescrita:** o plano prefere **extrair** dos componentes atuais (menor risco) a
  reescrever do zero. `BuildPhase` só é removido após paridade.
- **Granularidade da Dica no PROP:** **DECIDIDO — dicas ilimitadas.** Foco é didático, não
  punitivo; o `nextPropagationHint` pode ser acionado quantas vezes o aluno quiser, sem custo de
  estrela nem cooldown. (Pode-se registrar a contagem de usos só para telemetria futura, mas isso
  **não** afeta pontuação.)
- **Estado "feliz" do Maurílio:** depende de existir asset; senão reutiliza `explicando`.
```
