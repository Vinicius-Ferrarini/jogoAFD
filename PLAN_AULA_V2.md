# PLAN_AULA_V2 — Reformulação do Modo Aula Guiada

## 1. Visão Geral

Objetivo: separar claramente a **explicação pedagógica** (balão do Maurílio) da
**gestão visual de palavras** (quadro negro), e dar ao canvas mais espaço durante
a aula, ocultando o deck de cartas e o painel de testes.

---

## 2. Impacto em Componentes

### 2.1 Arquivos modificados

| Arquivo | Mudança |
|---|---|
| `src/modules/afd/AFDPart1.jsx` | Passa `isLessonActive` para `FooterDeck`; troca `<TestPanel>` por `<BlackboardPanel>` quando `guidedLessonStep !== null` |
| `src/modules/afd/components/FooterDeck.jsx` | Quando `isLessonActive === true`, suprime o `cards-scroll-wrapper`; mantém o HUD do professor |
| `src/modules/afd/AFDPart1.css` | Adiciona `.blackboard-panel` + estilos de quadro; ajusta `.bottom-hand` com classe condicional `--lesson` para reduzir altura quando as cartas somem |
| `src/levels_data/lote1.js` | Adiciona `boardWords` por fase e `boardDoneUpTo` por passo (ver §3) |
| `src/levels_data/lote2.js` | Idem |
| `src/levels_data/lote3.js` | Idem (quando injetado) |

### 2.2 Arquivo novo

`src/modules/afd/components/BlackboardPanel.jsx` — painel direito que substitui
`TestPanel` durante a aula.

### 2.3 Diagrama de layout — modo normal vs. modo aula

```
MODO NORMAL
┌──────────────────────────────────────────────────────┐
│                    GameHeader                        │
├──────────────────────────────────────────────────────┤
│                  words-hint-bar                      │
├────────────────────────────────┬─────────────────────┤
│                                │                     │
│          CanvasArea            │    TestPanel        │
│                                │   (teste palavras)  │
│                                │                     │
├────────────────────────────────┴─────────────────────┤
│   FooterDeck  (cartas + professor HUD)               │
└──────────────────────────────────────────────────────┘

MODO AULA  (guidedLessonStep !== null)
┌──────────────────────────────────────────────────────┐
│                    GameHeader                        │
├──────────────────────────────────────────────────────┤
│                  words-hint-bar                      │
├────────────────────────────────┬─────────────────────┤
│                                │                     │
│       CanvasArea (maior)       │  BlackboardPanel    │
│   (canvas ganha altura extra   │   (quadro negro)    │
│    pois FooterDeck encolheu)   │                     │
│                                │                     │
├────────────────────────────────┴─────────────────────┤
│  FooterDeck sem cartas — só professor HUD            │
└──────────────────────────────────────────────────────┘
```

---

## 3. Nova Estrutura de Dados nos `levels_data`

### 3.1 Campo novo no objeto da fase: `boardWords`

```js
{
  id: 21, label: 'L21', formula: '...',
  // ... demais campos existentes ...

  // NOVO — lista ordenada de palavras a exibir no quadro durante a aula
  boardWords: ['λ', 'ab', 'abcd', 'bcd', 'd'],

  guidedLesson: [ /* passos — ver abaixo */ ],
}
```

`boardWords` fica no nível raiz da fase porque é uma propriedade do *nível*,
não de um passo específico.

### 3.2 Campo novo por passo: `boardDoneUpTo`

```js
guidedLesson: [
  {
    // Passo 0 — intro, nenhuma palavra concluída, nenhuma destacada
    text: 'Construímos um AFD para a*b*c*d*...',
    boardDoneUpTo: -1,          // -1 = intro; todas pendentes, nenhuma amarela
    stateUpdate: { nodes: [], transitions: [] },
  },
  {
    // Passo 1 — resolvendo λ e "a"
    text: 'q0 inicial e final — loop "a". Resolve λ e todas as seqs só de a!',
    boardDoneUpTo: 0,           // words[0] = λ é AMARELA (atual); nenhuma riscada ainda
    stateUpdate: { nodes: [...], transitions: [...] },
  },
  {
    // Passo 2 — "ab" resolvido
    text: 'Adicionamos q1 com loop "b" — resolve "ab", "abb", "aabbb"...',
    boardDoneUpTo: 1,           // words[0] riscada; words[1] = "ab" AMARELA
    stateUpdate: { nodes: [...], transitions: [...] },
  },
  {
    // Último passo — tudo resolvido
    text: 'Bloco "d": q2→q3. Atalhos q0→q3 e q1→q3 cobrem pulos de bloco!',
    boardDoneUpTo: 5,           // = boardWords.length → todas riscadas ✔
    stateUpdate: { nodes: [...], transitions: [...] },
  },
]
```

**Regras de interpretação** do `boardDoneUpTo: N`:

| Valor | Palavra `words[i]` |
|---|---|
| `i < N` | Riscada com line-through (cinza) |
| `i === N` | **Destacada em amarelo** (atual) |
| `i > N` | Pendente (cor normal) |
| `N === -1` (ou campo ausente) | Todas pendentes, nenhuma destacada — para passo intro |
| `N === boardWords.length` | Todas riscadas — para último passo |

### 3.3 Campo `text` limpo (sem HTML de status)

Antes (v1):
```
text: '"abc": q1→q2(c, final, loop c).<br/>Status: <s>λ</s>, <s>ab</s>, <s>abc</s>. E "abcd"?'
```

Depois (v2):
```
text: '"abc": q1→q2(c, final, loop c). E "abcd"?'
```

O campo `text` passa a conter **apenas a explicação teórica**. A lista de palavras
com status visual fica inteiramente no `BlackboardPanel`.

---

## 4. Componente `BlackboardPanel`

```jsx
// src/modules/afd/components/BlackboardPanel.jsx
export default function BlackboardPanel({ boardWords = [], step, steps }) {
  const doneUpTo = steps[step]?.boardDoneUpTo ?? -1;

  return (
    <aside className="blackboard-panel">
      <div className="blackboard-title">📋 Palavras da Aula</div>
      <ul className="blackboard-words">
        {boardWords.map((word, i) => {
          const isDone    = i < doneUpTo;
          const isCurrent = i === doneUpTo;
          const isPending = i > doneUpTo;
          return (
            <li key={word} className={
              isDone    ? 'bw-done'    :
              isCurrent ? 'bw-current' :
              'bw-pending'
            }>
              {word === '' ? 'λ' : word}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
```

**CSS (adicionar em `AFDPart1.css`)**:
```css
.blackboard-panel {
  width: 180px;
  flex-shrink: 0;
  background: #2d2d2d;    /* quadro escuro */
  border-left: 3px solid #000;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: 'Comic Sans MS', cursive;
}
.blackboard-title {
  color: #facc15;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  border-bottom: 1px dashed #888;
  padding-bottom: 6px;
  margin-bottom: 4px;
}
.blackboard-words { list-style: none; display: flex; flex-direction: column; gap: 5px; }
.bw-done    { color: #888; text-decoration: line-through; font-size: 14px; }
.bw-current { color: #fde047; font-weight: 900; font-size: 16px; }
.bw-pending { color: #e5e7eb; font-size: 14px; }
```

---

## 5. Mudanças em `AFDPart1.jsx`

```jsx
// ── Tela do Jogo ──
const isLessonActive = guidedLessonStep !== null;

// No render — substituição condicional do TestPanel
{!isLessonActive && (
  <TestPanel ... />
)}
{isLessonActive && (
  <BlackboardPanel
    boardWords={currentLevel?.boardWords}
    step={guidedLessonStep}
    steps={currentLevel?.guidedLesson}
  />
)}
```

```jsx
// FooterDeck recebe nova prop
<FooterDeck
  ...
  isLessonActive={isLessonActive}
/>
```

---

## 6. Mudanças em `FooterDeck.jsx`

```jsx
export default function FooterDeck({ ..., isLessonActive }) {
  return (
    <footer className={`bottom-hand${isLessonActive ? ' bottom-hand--lesson' : ''}`}>
      {!isLessonActive && (showSimPanel ? <SimPanel ... /> : <div className="cards-scroll-wrapper">...</div>)}
      {/* Professor HUD — sempre visível quando isDrawingUnlocked */}
      {isDrawingUnlocked && ( /* ... HUD existente ... */ )}
    </footer>
  );
}
```

CSS a adicionar:
```css
.bottom-hand--lesson {
  min-height: 80px;      /* reduz de ~100px para só o HUD */
  justify-content: flex-end;  /* apenas o professor, alinhado à direita */
}
```

---

## 7. Diretriz Pedagógica: Sem Estados Trap Explícitos

A partir da V2, **todos os `guidedLesson.stateUpdate`** omitem nós de erro/trap
(`qT`, `qErr`, `dead`). A narrativa explica no `text` que:

> "q2 não tem seta para '0' — palavra com '0' após dois '1's é automaticamente
> rejeitada (dead state implícito)."

Isso vale retroativamente para L27-L35 (lote2) e prospectivamente para L36+.

Fases binárias longas (ex: sequências de 0s e 1s) devem usar a progressão
granular `λ → 0 → 1 → 00 → 01 → 10 → 11 → ...` nos `boardWords`.

---

## 8. Estratégia de Migração (L01–L35)

### 8.1 O que existe hoje

Os campos `text` de cada passo contêm o status das palavras inline:
```
"Status: <s>λ</s>, <s>ab</s>, abcd"
```

### 8.2 Abordagem: prompt de automação dirigido

Um único prompt ao Claude (com o arquivo lote1.js + lote2.js em contexto)
executará a seguinte lógica para cada fase com `guidedLesson`:

1. **Extrair `boardWords`**: varrer todos os `text` de todos os passos da fase;
   coletar palavras em `<s>...</s>` + palavras soltas após "Status:"; desduplicar
   mantendo ordem de primeira ocorrência.

2. **Calcular `boardDoneUpTo` por passo**: para cada passo, contar quantas
   palavras aparecem como `<s>X</s>` naquele `text` → esse é o `boardDoneUpTo`.
   Se nenhuma `<s>` encontrada, usar `-1`.

3. **Limpar `text`**: remover o fragmento `<br/>Status: ...` inteiro do `text`.

4. **Injetar `boardWords`** no objeto raiz da fase (acima de `guidedLesson`).

5. **Injetar `boardDoneUpTo`** em cada passo (ao lado de `text` e `stateUpdate`).

### 8.3 Exemplo de migração

**Antes** (passo 3 de L21):
```js
{
  text: '"abc": q1→q2(c, final). Atalho q0→q2(c) aceita "cd"!<br/>Status: <s>λ</s>, <s>a</s>, <s>ab</s>, <s>abc</s>, <s>cd</s>. E "abcd"?',
  stateUpdate: { nodes: [...], transitions: [...] },
}
```

**Depois** (passo 3 de L21):
```js
{
  text: '"abc": q1→q2(c, final). Atalho q0→q2(c) aceita "cd"! E "abcd"?',
  boardDoneUpTo: 4,    // λ, a, ab, abc, cd riscados; próxima = "abcd" (amarela)
  stateUpdate: { nodes: [...], transitions: [...] },
}
```

**Adição no objeto raiz** de L21:
```js
boardWords: ['λ', 'a', 'ab', 'abc', 'cd', 'abcd', 'ad', 'bd', 'd'],
```

### 8.4 Divisão do trabalho

Dado o tamanho dos arquivos, a migração deve ser executada em **dois prompts**:
- Prompt A: migrar L01–L20 (`lote1.js`)
- Prompt B: migrar L21–L35 (`lote2.js`, apenas as fases já injetadas)

---

## 9. Ordem de Execução Recomendada

1. **Criar `BlackboardPanel.jsx`** + CSS.
2. **Modificar `FooterDeck.jsx`** para aceitar `isLessonActive`.
3. **Modificar `AFDPart1.jsx`** para trocar `TestPanel` ↔ `BlackboardPanel`.
4. **Executar `npm run build`** e verificar o layout visualmente sem dados.
5. **Migrar `lote1.js`** (Prompt A) — adicionar `boardWords` + `boardDoneUpTo`.
6. **Migrar `lote2.js`** (Prompt B) — idem para L21–L35.
7. **Verificar** 3–4 fases representativas no browser.
8. **Manter pipeline** de novos níveis (L36+) já usando o formato V2.

---

## 10. Pontos em Aberto para Discussão

| Questão | Opção A | Opção B |
|---|---|---|
| **Professor HUD durante aula** | Mantém no FooterDeck (posição atual) | Move para dentro do BlackboardPanel (balloon acima do quadro) |
| **words-hint-bar durante aula** | Ocultar (reduz ruído visual) | Manter (contextualiza acertos/erros) |
| **GuidedLessonOverlay** (banner amarelo + dots + botões) | Mantém dentro do CanvasArea (atual) | Move para o topo do BlackboardPanel |
| **boardWords ausente** | BlackboardPanel mostra mensagem vazia graciosamente | Fase sem `boardWords` não exibe painel (fallback para layout antigo) |
