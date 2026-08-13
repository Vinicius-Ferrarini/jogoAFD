> **[ARQUIVADO]** Planejamento pré-implementação. Ver docs/adr/ para o resumo executivo das decisões que sobreviveram — este arquivo é referência histórica, não roadmap ativo.

# Plano — Modo Aula do Autômato com Pilha (AP)

> Objetivo: dar ao módulo AP um **Modo Aula** ("Assistir Aula") que ensina, passo
> a passo, **(1)** como desenhar o grafo do AP, depois **(2)** como preencher a
> descrição formal a partir do grafo já pronto, e **(3)** reaproveitar os mesmos
> elementos visuais (pilha desenhada, narração do Maurílio, quadro de palavras)
> no modo **"Testar uma palavra"**.

Reusa ao máximo a engenharia da **Aula Guiada do AFD_1** (já existe e funciona):
`useGuidedLesson`, `GuidedLessonOverlay`, `BlackboardPanel`, e o override
`displayNodes/displayTransitions` do `useAFDGraph`. O AP só precisa de **forks
finos** dessas peças, mais um modo de demonstração na descrição formal.

---

## 0. Como o Modo Aula do AFD já funciona (base que vamos espelhar)

Para não reinventar nada, estes são os pontos exatos da engine atual:

| Peça | Arquivo | Papel |
|------|---------|-------|
| Estado do passo + snapshot | [useGuidedLesson.js](src/modules/afd/hooks/useGuidedLesson.js) | `guidedLessonStep` (null = fora da aula); snapshot do trabalho do aluno; restaura ao terminar |
| Override do grafo exibido | [useAFDGraph.js:304-314](src/modules/afd/hooks/useAFDGraph.js#L304-L314) | quando em aula, `displayNodes/displayTransitions` vêm de `guidedLesson[step].stateUpdate` em vez do grafo real |
| Banner + bloqueador + navegação | [GuidedLessonOverlay.jsx](src/modules/afd/GuidedLessonOverlay.jsx) | faixa "👨‍🏫 Modo Aula", bloqueia cliques, botões Anterior/Próximo/Terminar |
| Painel direito V2 (quadro) | [BlackboardPanel.jsx](src/modules/afd/components/BlackboardPanel.jsx) | substitui o TestPanel; mostra `boardWords` com status (feita / atual / pendente) e navegação |
| Botão "Assistir Aula" | [AFDPart1.jsx:379-384](src/modules/afd/AFDPart1.jsx#L379-L384) | snapshota o trabalho do aluno e faz `setGuidedLessonStep(0)` |
| Restaurar ao sair | [AFDPart1.jsx:182-189](src/modules/afd/AFDPart1.jsx#L182-L189) | devolve o grafo que o aluno tinha antes da aula |

**Forma do dado por fase (AFD V2):**
```js
boardWords: ['', 'a', 'bc', 'abc'],          // palavras mostradas no quadro
guidedLesson: [
  { stateUpdate: { nodes:[...], transitions:[...] },  // foto do grafo nesse passo
    boardDoneUpTo: 2,                                   // índice do quadro: <i feito, =i atual
    professorMessage: '...', professorMood: 'explicando' },
  ...
]
```
**Cadência recomendada (plano V3 "spotlight + solução"):** para N palavras →
`1 + 2N` passos. Cada palavra vira **dois** passos: um que só destaca a palavra
no quadro (grafo NÃO muda) e outro que atualiza o grafo e risca a palavra. Assim
cada clique em "Próximo" muda **uma coisa só**. (Ver `zippy-chasing-zephyr.md`.)

---

## 1. O que o AP tem hoje (ponto de partida)

| Peça | Arquivo | Observação |
|------|---------|-----------|
| Fluxo da fase | [APPart1.jsx](src/modules/ap/APPart1.jsx) | desenhar → Validar (★1) → Descrição Formal (★2/★3) → vitória |
| Grafo (reducer + undo/redo) | [usePDAGraph.js](src/modules/ap/hooks/usePDAGraph.js) | `present.nodes/transitions`, `studentPda`, `validatePDA` |
| Canvas | [APCanvas.jsx](src/modules/ap/components/APCanvas.jsx) | desenha nós + transições (triplas lê/desempilha;empilha) |
| Rodapé + Maurílio | [APFooterDeck.jsx](src/modules/ap/components/APFooterDeck.jsx) | HUD do professor com balão |
| Descrição formal | [APFormalDescription.jsx](src/modules/ap/components/APFormalDescription.jsx) | tupla (E, Σ, Γ, i, B=Z) **sem F**; tabela δ gerada do grafo |
| Simulação da pilha | [APStackSim.jsx](src/modules/ap/components/APStackSim.jsx) | navega config a config, pilha desenhada (topo em cima) |
| Algoritmos | [pdaAlgorithms.js](src/modules/ap/utils/pdaAlgorithms.js) | `pdaAccepts`, `pdaAcceptingRun`, bateria |

**Lacunas para o Modo Aula:**
- O AP **não** tem botão "Assistir Aula", nem `guidedLessonStep`, nem snapshot.
- `usePDAGraph` **não** expõe `displayNodes/displayTransitions` (override de aula).
- `APFormalDescription` é **interativo** (aluno preenche); não tem modo "demonstração".
- `APStackSim` mostra a pilha, mas **não** narra cada passo com o Maurílio, e só
  funciona para palavra **aceita** (não há traço para palavra rejeitada).

---

## 2. Arquitetura do Modo Aula do AP — visão geral

A aula de cada exercício é **uma sequência única de passos** dividida em duas fases:

```
┌─ FASE 1: GRAFO ──────────────────────────────────────────────┐
│ Passo 0  Introdução: linguagem + palavras que vamos aceitar    │
│ Passo 1  (spotlight) destaca palavra W0 no quadro              │
│ Passo 2  (solução)   grafo ganha estados/transições p/ W0      │
│ ...      um par spotlight+solução por palavra (ou grupo)       │
│ Passo k  Grafo COMPLETO — "pronto, esse AP aceita tudo por      │
│          pilha vazia"                                           │
├─ FASE 2: DESCRIÇÃO FORMAL ("próximo", baseada no grafo) ──────┤
│ Passo k+1  Tupla: revela E (estados) lendo do grafo            │
│ Passo k+2  Σ e Γ a partir das transições (lê / desempilha+empilha)│
│ Passo k+3  estado inicial i e fundo B = Z                      │
│ Passo k+4  δ: revela 1 linha por vez T(e,lê,des)=(dest,emp),    │
│            destacando a transição correspondente no grafo       │
│ ...                                                            │
│ Passo final  Tupla completa + "aceita por pilha vazia, sem F"  │
└──────────────────────────────────────────────────────────────┘
```

Durante a **FASE 2** o grafo no canvas fica **fixo no grafo final** e a aula
**destaca** a transição que originou cada linha da δ, conectando visualmente
"seta no grafo ↔ linha da tabela".

O **mesmo `stateUpdate`** (grafo final) se repete em todos os passos da FASE 2 —
só muda a narração e o trecho revelado da descrição formal.

---

## 3. Modelo de dados (por exercício, em `levels_ap.js`)

Adicionar um campo opcional `apLesson` à META de cada nível:

```js
apLesson: {
  boardWords: ['', 'ab', 'aabb'],           // palavras-alvo no quadro
  steps: [
    // ── FASE 1: GRAFO ──
    { phase: 'GRAPH',
      stateUpdate: { nodes: [...], transitions: [...] },  // mesma forma do usePDAGraph
      boardDoneUpTo: -1,
      prof: { message: 'Hoje: aⁿbⁿ. Vamos aceitar λ, ab, aabb…', mood: 'explicando' } },

    // ── FASE 2: FORMAL (grafo final repetido) ──
    { phase: 'FORMAL',
      stateUpdate: <grafo final>,
      formalReveal: { kind: 'tuple', field: 'E', value: '{q0, q1}' },
      prof: { message: 'Os estados do grafo viram E.', mood: 'explicando' } },

    { phase: 'FORMAL',
      stateUpdate: <grafo final>,
      formalReveal: { kind: 'delta', rowKey: 'q0|a|Z', dest: 'q0', push: 'AZ',
                      highlightEdge: { from: 'q0', to: 'q0' } },
      prof: { message: 'Leu a no topo Z: empilha A. T(q0,a,Z)=(q0,AZ).', mood: 'explicando' } },
    // ... uma linha δ por passo ...
  ]
}
```

Regras:
- `phase`: `'GRAPH'` ou `'FORMAL'`.
- `stateUpdate`: foto do grafo **idêntica em forma** ao `present` do `usePDAGraph`
  (nós com `id/label/x/y/isInitial`; transições com triplas). Na FASE 2 é sempre
  o grafo final.
- `boardDoneUpTo`: só usado na FASE 1 (quadro de palavras).
- `formalReveal`: só na FASE 2. `kind:'tuple'` revela um campo da tupla;
  `kind:'delta'` revela uma linha da δ e (opcional) destaca a aresta no grafo.
- `prof`: fala do Maurílio nesse passo.

### 3.1 De onde vêm os dados? (decisão de escopo — ver §8)
Recomendação **híbrida**:
1. **Auto-derivar** `apLesson` de cada gabarito `.jff` (já parseado por `parseJff`):
   - FASE 1: passo 0 (intro) → revela estados+inicial → adiciona transições em
     grupos → grafo final. (`boardWords` = palavras curtas aceitas, já temos a
     bateria por nível.)
   - FASE 2: gera os passos da tupla e **uma linha δ por transição** do gabarito,
     com narração genérica derivada da própria tripla ("leu X, topo Y → empilha Z").
   - Implementar em `utils/buildApLesson.js` → roda na carga do nível.
2. **Sobrescrever** com narração rica escrita à mão (`apLesson` no nível) quando
   existir — os exercícios "flagship" (L1, L2, L5…) ganham texto pedagógico melhor.

Assim **os 15 já têm aula funcional no dia 1**, e a narração fina é incremental.

---

## 4. Mudanças de código — FASE 1 (grafo)

### 4.1 `usePDAGraph.js` — expor override de exibição
Adicionar, espelhando `useAFDGraph`:
```js
// recebe (lessonStep, level) — quando em aula, devolve a foto do passo
const displayNodes = lessonStep == null ? present.nodes
  : (level?.apLesson?.steps?.[lessonStep]?.stateUpdate?.nodes ?? present.nodes);
const displayTransitions = lessonStep == null ? present.transitions
  : (level?.apLesson?.steps?.[lessonStep]?.stateUpdate?.transitions ?? present.transitions);
```
Expor `displayNodes/displayTransitions` (ou aceitar `lessonStep` como argumento do
hook). O `APCanvas` passa a renderizar os `display*` em vez de `nodes/transitions`.

### 4.2 `useAPGuidedLesson.js` — **novo** (fork fino de `useGuidedLesson`)
- `lessonStep` (null = fora), `setLessonStep`.
- `snapshot` do `present` do grafo (nós+transições) ao iniciar; restaura ao sair.
- Sem auto-tutorial/localStorage (não precisamos do "modo iniciante" aqui — manter simples).

### 4.3 `APBlackboardPanel.jsx` — **novo** (fork de `BlackboardPanel`)
- Igual ao do AFD: quadro de `boardWords` com status + navegação Anterior/Próximo/Fechar.
- Reusa `BlackboardPanel.css`.
- Aparece no lugar do `test-panel` quando `lessonStep !== null` e há `boardWords`.

### 4.4 Banner — reusar `GuidedLessonOverlay` como está
Faixa "👨‍🏫 Modo Aula" + bloqueador + navegação. Funciona sem mudanças (recebe
`steps/step/onNext/onPrev/onFinish`).

### 4.5 Header do AP — botão "Assistir Aula"
Em [APPart1.jsx](src/modules/ap/APPart1.jsx) header (linha ~205), ao lado de
"📝 Descrição Formal", adicionar:
```jsx
<button className="ap-formal-toggle" onClick={startLesson}>👨‍🏫 Assistir Aula</button>
```
`startLesson`: snapshota o grafo do aluno e `setLessonStep(0)`.
`finishLesson`: `setLessonStep(null)` e restaura o snapshot.

### 4.6 Maurílio narra cada passo
No `useEffect` que observa `lessonStep`, chamar
`say(step.prof.message, step.prof.mood)`. O balão já tem o ✕ e `pointer-events:none`
(corrigido recentemente), então não atrapalha a navegação.

---

## 5. Mudanças de código — FASE 2 (descrição formal, "o próximo")

A descrição formal é ensinada **dentro da mesma aula**, logo após o grafo. Duas opções
de UI (ver §8): abrir o painel `APFormalDescription` em **modo demonstração**.

### 5.1 `APFormalDescription` — modo `demo`
Adicionar prop `demo={ reveal }` onde `reveal` acumula o que já foi mostrado até o
passo atual (campos da tupla + linhas δ liberadas):
- Quando `demo` ativo: os inputs ficam **read-only** e **pré-preenchidos** com o
  gabarito **derivado do grafo final** (a tabela δ já é gerada do grafo hoje).
- Campos/linhas ainda não revelados aparecem **esmaecidos** (placeholder "…").
- A linha δ do passo atual fica **realçada** (mesma cor do destaque da aresta no grafo).
- Nada de validação/estrela no modo demo (a aula não dá estrela — ver §7).

### 5.2 Sincronizar painel formal com o passo
- Ao entrar na FASE 2 (primeiro passo `phase:'FORMAL'`), abrir o painel formal
  (`setFormalOpen(true)`) em modo demo.
- `reveal` é recomputado a cada `lessonStep` somando todos os `formalReveal` dos
  passos `<= lessonStep`.
- `highlightEdge` do passo realça a aresta correspondente no canvas (reusa
  `simHighlight`/estilo de destaque já existente).

### 5.3 Ao terminar a aula
- Fechar o painel demo, restaurar o grafo do aluno, voltar ao modo normal
  (aluno desenha o seu e valida de verdade). **A aula não preenche** a descrição
  real do aluno.

---

## 6. Mudanças de código — "Testar uma palavra" reaproveitando a aula

Hoje "Testar uma palavra" já usa `APStackSim` (pilha desenhada, navegação config a
config). Vamos puxar para ele os **elementos da aula**:

### 6.1 Narração do Maurílio sincronizada com o passo da simulação
- `APStackSim` ganha callback `onStepNarrate(config)` (ou expõe o índice atual).
- O pai (`APPart1`) traduz a config atual numa fala curta e chama `say(...)`:
  - aplicou `T(q0, a, Z) = (q0, AZ)` → "Leu **a**, topo era **Z**, empilhei **A**."
  - fim aceitando → "Entrada acabou e a pilha esvaziou ✓ — **aceita**."
- Mesma linguagem da FASE-2 da aula (consistência de vocabulário).

### 6.2 Traço para palavra **rejeitada** (reuso do visual da pilha)
Hoje, se rejeita, não há `run` para mostrar. Adicionar em `pdaAlgorithms.js`:
- `pdaRejectingTrace(pda, word)` → devolve a **melhor computação parcial** (a que
  consumiu mais entrada / chegou mais perto de esvaziar) e o **motivo** da parada:
  - `'stuck'`: não há transição para `(estado, símbolo, topo)`.
  - `'input-left'`: pilha esvaziou mas sobrou entrada.
  - `'stack-left'`: entrada acabou mas a pilha não esvaziou.
- `APStackSim` passa a aceitar esse traço e mostra, no fim, a mensagem do motivo
  (em vermelho) em vez do "✓ aceita".
- Assim **toda** palavra testada vira uma lição visual passo a passo, aceita ou não.

### 6.3 Mini-quadro de palavras testadas
Reusar o estilo do `BlackboardPanel` para listar as palavras já testadas com
✓/✗, dando ao "Testar palavra" o mesmo "quadro" da aula.

---

## 7. Regras de negócio
- **A aula não dá estrela** (consistente com a minimização). Estrelas só vêm de
  Validar (★1) + descrição formal real (★2/★3).
- A aula **não** altera o trabalho do aluno: snapshot ao entrar, restauração ao sair.
- Durante a aula, o canvas fica **bloqueado** (o `GuidedLessonOverlay` já põe o blocker).
- `Esc` e "Terminar Aula ✓" saem e restauram.

---

## 8. Decisões — FECHADAS ✅ (confirmadas com o usuário em 2026-06-16)

1. **Origem do conteúdo da aula:** **Híbrido**. Auto-derivar `apLesson` (FASE 1 +
   FASE 2) dos 15 gabaritos `.jff` para cobertura total imediata; melhorar a
   narração à mão nos flagship (L1, L2, L5…) de forma incremental (Etapa E).
2. **UI da FASE 2 (descrição formal):** **Demonstração passiva** — auto-preenche
   (read-only) a tupla e revela a δ linha por linha com narração, espelhando o
   Modo Aula do AFD. O aluno só assiste. (Sem variante interativa por enquanto.)
3. **"Testar uma palavra":** implementar os **3 reusos** — (a) narração do Maurílio
   por passo, (b) `pdaRejectingTrace` para palavra rejeitada, (c) mini-quadro de
   palavras testadas (§6.3 deixa de ser opcional).
4. **Escopo de entrega:** **os 15 de uma vez**, via auto-derivação, assim que a
   infra (Etapas A–D) estiver pronta. Sem fase piloto.

---

## 9. Ordem de implementação (passo a passo)

**Etapa A — infra da aula (grafo):**
1. `usePDAGraph`: expor `displayNodes/displayTransitions` com override por `lessonStep`.
2. `useAPGuidedLesson.js` (snapshot/restore + step).
3. `APBlackboardPanel.jsx` (fork) + reuso de `GuidedLessonOverlay`.
4. Botão "Assistir Aula" no header + fiação em `APPart1` (start/finish/narração).
5. `APCanvas` renderiza `display*`.

**Etapa B — conteúdo:**
6. `utils/buildApLesson.js`: auto-derivar `apLesson` (FASE 1 + FASE 2) do gabarito.
7. Plugar na carga do nível (memoizado, igual `getBattery`).

**Etapa C — descrição formal na aula:**
8. `APFormalDescription` modo `demo` (read-only, revelação incremental, destaque).
9. Sincronizar `reveal`/`highlightEdge` com `lessonStep`; abrir/fechar painel.

**Etapa D — testar palavra:**
10. `pdaRejectingTrace` em `pdaAlgorithms.js`.
11. `APStackSim`: narração por passo + suporte a traço de rejeição.
12. Fiar narração do Maurílio no `simulate()`.

**Etapa E — polimento:**
13. Mini-quadro de palavras testadas (§6.3).
14. Narração rica à mão nos flagship (L1, L2, L5) sobre as aulas auto-derivadas.

---

## 10. Verificação
- `npx eslint src/modules/ap/` sem erros; `npm run build` sem erros novos.
- Abrir um nível → "Assistir Aula": cada "Próximo" muda **uma coisa só**
  (FASE 1: ora destaca palavra, ora atualiza grafo; FASE 2: ora revela campo da
  tupla, ora libera uma linha δ com a aresta destacada).
- "Anterior" volta corretamente em ambas as fases.
- "Terminar Aula ✓" restaura exatamente o grafo que o aluno tinha antes.
- Aula **não** mexe em estrelas nem no progresso.
- "Testar uma palavra": aceita → passos + "✓ aceita"; rejeita → passos parciais +
  motivo da parada; Maurílio narra cada passo.
```
