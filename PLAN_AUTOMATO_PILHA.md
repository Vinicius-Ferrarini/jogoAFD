# PLAN — Módulo Autômato com Pilha (AP / PDA)

> **Status:** proposta de arquitetura. Nenhum código foi alterado a partir deste documento.
> **Objetivo:** criar o módulo **AP** (Autômato com Pilha) no estilo do JFLAP — o aluno
> **desenha** o AP num canvas, com transições `(lê, desempilha ; empilha)`, e valida pelo
> critério de **pilha vazia** (não por estado final). Maurílio dá dicas, mesmo espírito dos
> módulos AFD já prontos.

---

## 1. Visão geral

O aluno constrói um AP que reconhece uma linguagem livre de contexto (ex.: `aⁿbⁿ`). O jogo:
- deixa **desenhar estados e transições** num canvas (reusa a base do AFD_1);
- cada transição carrega **três campos**: `lê (read)`, `desempilha (pop)`, `empilha (push)` —
  qualquer um pode ser **λ** (vazio);
- **simula** o AP (não-determinístico, com pilha) sobre palavras de teste;
- **aceita por pilha vazia**: a palavra é aceita se existe uma computação que **consome toda a
  entrada e esvazia a pilha** (incluindo o símbolo de fundo Z);
- mostra a **descrição formal** estilo JFLAP: `E (estados), Σ, Γ (alfabeto da pilha),
  i (inicial), B = Z (fundo), função de transição`;
- Professor Maurílio dá dicas e explica os erros.

### Print de referência (L1)
O JFLAP mostra `q0`, `q1`, setas rotuladas `a, Z ; A` / `a, A ; AA` / `b, A ; λ`, e uma tabela
formal com `E={q0,q1}`, `Σ={a,b}`, `i=q0`, `B=Z`, `Γ={A,Z}` e `T(q0,a,Z)=(q0,A)`, etc.
É exatamente esse alvo, com camada de jogo + Maurílio por cima.

---

## 2. O que muda do AFD para o AP

| Aspecto | AFD (já pronto) | AP (este plano) |
|---|---|---|
| Transição | `{from, to, symbol}` (1 símbolo) | `{from, to, read, pop, push}` — read/pop podem ser λ; push é string ou λ |
| Determinismo | determinístico (1 saída por símbolo) | **não-determinístico** (vários `(read,pop;push)` na mesma origem, incl. λ-transições) |
| Memória | nenhuma | **pilha** (Γ, fundo Z) |
| Aceitação | terminar em **estado final** | **pilha vazia** após consumir a entrada (sem estado final) |
| Tupla formal | `(Q, Σ, δ, q₀, F)` | `(Q, Σ, Γ, δ, q₀, Z)` — **sem F** (aceita por pilha vazia) |
| Validação | linguagem **inteira** via BFS (decidível) | **indecidível** → bateria de palavras de teste (ver §7) |

**Consequência central:** não dá para provar que o AP do aluno reconhece *exatamente* a linguagem
(problema indecidível). A correção é por **bateria de testes** — rodar o AP do aluno num conjunto
curado/gerado de palavras aceitas e rejeitadas e exigir 100% de acerto. (§7)

---

## 3. Mapeamento com o código existente (o que reusar)

O AFD_1 (`AFDPart1.jsx`) já tem toda a base de canvas. A maior parte é reaproveitável quase direto;
o que muda é o **modelo da transição**, a **simulação** e a **descrição formal**.

| Infra atual (AFD) | Papel | No AP |
|---|---|---|
| `CanvasArea.jsx` + `useCanvasState.js` | pan/zoom, arrastar nó, criar nó, desenhar seta, laço | **Reuso quase direto** (interação é a mesma) |
| `useHistory.js` | undo/redo de nós/transições | **Reuso direto** |
| `useAFDGraph.js` | mutações de grafo + `validateAFDSilent` | **Fork:** mutações reaproveitadas; validação trocada por `validatePDA` (§6–7) |
| `components/TransitionLabel.jsx` | edita o símbolo da seta (chips) | **Novo `APTransitionLabel`**: 3 campos `read, pop ; push` |
| `FormalDescriptionModal.jsx` | tupla `(Q,Σ,q₀,F)` + tabela δ | **Novo `APFormalDescription`**: `(Q,Σ,Γ,q₀,Z)` + tabela δ de pilha |
| `components/SimPanel.jsx` | simulação passo a passo (estado atual) | **Novo `APSimPanel`**: configura­ção `(estado, pilha)` + **pilha desenhada** estilo JFLAP |
| `components/GraphView.jsx` | grafo read-only (labels de 1 símbolo) | **Generalizar:** label da aresta vira `read,pop;push` (várias por aresta) |
| `FooterDeck.jsx` / cartas | ferramentas (estado, seta, borracha…) | **Reuso** menos a carta "estado final" (não há F); cartas de símbolo viram símbolos de Σ ∪ Γ |
| `GameHeader`, `TestPanel`, `BlackboardPanel`, `ProfessorMaurilio`, `LevelMenu`, `EndScreen` | HUD, testes, professor, menu | **Reuso** (com textos do AP) |
| `App.jsx` rota `ap-pilha` / `ap-formal` (já existem, `locked:true`) | navegação | **Destravar** e apontar para os novos componentes |

> **Decisão arquitetural:** criar `src/modules/ap/` espelhando `src/modules/afd/`, e **extrair o
> que for genérico** do canvas para reuso (idealmente `CanvasArea`/`useCanvasState`/`useHistory`
> ficam agnósticos ao tipo de transição). O orquestrador novo é `APPart1.jsx`.

---

## 4. Modelo de dados

### 4.1 Estado (nó) — igual ao AFD, **sem** `isFinal`
```js
{ uid, id, label, x, y, isInitial }   // aceitação é por pilha vazia → sem isFinal
```

### 4.2 Transição do AP
```js
{
  from, to,           // ids dos estados
  read:  'a' | '',    // símbolo lido ('' = λ)
  pop:   'A' | '',    // topo desempilhado ('' = λ, não exige/retira nada)
  push:  'AA' | '',   // string empilhada ('' = λ); 1º char vira o novo topo
}
```
Várias transições podem ligar o **mesmo par** de estados (não-determinismo). A label exibida é
`read, pop ; push`, com `λ` no lugar de campo vazio (ex.: `b, A ; λ`).

### 4.3 Nível/Exercício do AP
```js
{
  id, level: 'easy'|'medium'|'hard',
  title,                  // ex.: "L1 — aⁿbⁿ"
  language: 'L = { aⁿbⁿ | n > 0 }',
  alphabet: ['a','b'],    // Σ
  stackAlphabet: ['A','Z'], // Γ (informativo/checagem na descrição formal)
  stackBottom: 'Z',       // B
  // predicado da linguagem (define a verdade p/ gerar a bateria de testes):
  validate: (w) => /* true se w ∈ L */,
  // bateria explícita (curada) — opcional, complementa o gerado:
  acceptedWords: ['ab','aabb', ...],
  rejectedWords: ['a','b','abb','aab', ...],
  // gabarito de referência (do .jff) — p/ aula/dica/seed de layout:
  solution: { nodes:[...], transitions:[...] },
  hint, guidedLesson, // (opcional, fase futura)
}
```

---

## 5. Notação e UI estilo JFLAP

- **Label da seta:** `read, pop ; push` (vírgula entre read/pop, ponto-e-vírgula antes do push),
  com `λ` para vazio. Ex.: `a, A ; AA`, `b, A ; λ`, `λ, Z ; λ`.
- **Edição da transição (`APTransitionLabel`):** ao clicar na seta, abre um mini-editor com **3
  campos** (read | pop | push) + botão "＋ adicionar transição" (para empilhar outra label na
  mesma aresta, já que o AP é não-determinístico). λ é o default de campo vazio.
- **Várias labels por aresta:** o render desenha cada `(read,pop;push)` numa linha empilhada
  perto do meio da seta (como o JFLAP faz).
- **Símbolos disponíveis:** o rodapé oferece os símbolos de **Σ** (para `read`) e de **Γ** (para
  `pop`/`push`), além de **λ**. (Reusa a mecânica de cartas do FooterDeck.)
- **Sem carta de "estado final"** (não há F). Mantém: novo estado, inicial (▶), seta, borracha,
  desenho livre, undo/redo.

---

## 6. Simulação do AP (núcleo técnico)

AP é **não-determinístico** → simular = **busca sobre configurações** `(estado, posição_na_entrada,
pilha)`. Aceitação por **pilha vazia**.

### 6.1 Passo de transição
Uma transição `(read r, pop p ; push s)` é aplicável na config `(q, i, pilha)` se:
- `from === q`;
- `r === '' (λ)` **ou** `entrada[i] === r` (consome 1 símbolo se r≠λ);
- `p === '' (λ)` **ou** topo da pilha `=== p` (e então remove o topo);
- aplica: nova pilha = (pilha sem o topo, se p≠λ) com `s` empilhado (1º char de `s` no topo);
- nova posição = `i + (r===λ ? 0 : 1)`; novo estado = `to`.

### 6.2 Aceitação (pilha vazia)
A palavra `w` é **aceita** se alguma config alcançável tem `i === w.length` **e pilha vazia**
(Z já removido). Começa em `(q₀, 0, [Z])`.

### 6.3 Busca com limites (evita loop infinito)
λ-transições e auto-empilhamento podem gerar configs infinitas. Logo, BFS/DFS com **cortes**:
- `visited` de chaves `"estado|pos|pilhaString"` (evita repetir config idêntica);
- **teto de altura da pilha** (ex.: `|w| + C`) e **teto de passos/configs** por palavra;
- ao estourar um teto numa palavra de teste, tratamos como "não aceita por esse caminho" (os
  tetos são generosos o bastante para os exercícios da lista).

> Função pura em `utils/pdaAlgorithms.js`: `pdaAccepts(pda, word, limits) -> boolean`.
> Reaproveita a ideia do `lvlAccepts`/BFS do AFD, mas sobre configurações com pilha.

---

## 7. Validação (a decisão central) + papel do Maurílio

**Equivalência de linguagens de AP é indecidível** — não há "BFS da linguagem inteira" como no AFD.
Estratégia proposta:

### 7.1 Bateria de palavras de teste — **a verdade vem do gabarito**
**Decisão-chave:** não escrevemos um `validate(w)` à mão por exercício. A **verdade** de cada
exercício é o **próprio gabarito** `.jff` (parseado): `verdade(w) = pdaAccepts(gabarito, w)`. Assim a
bateria sai sozinha de cada Lk, sem depender das listas em markdown (que só servem para o **texto do
enunciado**). Exigimos que o AP do aluno **case 100%**:
- **Geração:** todas as palavras até comprimento **N = 7** sobre Σ (Σ derivado dos `read` do
  gabarito), rotuladas rodando o gabarito → conjunto **aceitas** / **rejeitadas**; mais **alguns
  casos longos curados** por exercício (também rotulados pelo gabarito) para pegar APs que só
  funcionam até N.
- **Correção:** para cada palavra `w`, `pdaAccepts(apDoAluno, w)` deve bater com
  `pdaAccepts(gabarito, w)`.
- **Primeiro erro vira dica:** ao falhar, o Maurílio aponta a **menor palavra** que deu errado e
  o tipo do erro ("Seu AP **rejeita** `aabb`, mas ela deveria ser **aceita**") e mostra a
  **simulação animada** dessa palavra no `APSimPanel` (pilha desenhada) — §12.4.

### 7.2 Por que é honesto
A bateria não *prova* equivalência, mas com Σ pequeno e N moderado cobre os exercícios da lista de
forma robusta (é, na prática, o que o JFLAP faz quando você "roda" várias entradas — aqui é
automatizado e exaustivo até N).

### 7.3 Pré-checagens estruturais (antes da bateria)
- existe **estado inicial**;
- toda transição tem `read`/`pop`/`push` preenchidos (λ é escolha explícita, não "em branco");
- símbolos de `read` ∈ Σ; de `pop`/`push` ∈ Γ; topo inicial = Z;
- (aviso) estados inalcançáveis.

### 7.4 Dúvida em aberto (confirmar — §12)
Rigor da bateria: **N do comprimento**, **gerado+curado vs só curado**, e se a falha mostra a
**simulação animada** da palavra-contraexemplo.

---

## 8. Descrição formal (estilo JFLAP)

Espelha o `FormalDescriptionModal` do AFD, trocando os campos:
- `E` (Q) — estados;
- `Σ` — alfabeto de entrada;
- `Γ` — alfabeto da pilha;
- `i` (q₀) — estado inicial;
- `B` (Z) — símbolo de fundo da pilha;
- **sem F** (aceita por pilha vazia — deixar isso explícito na tela);
- **Tabela δ:** linhas por `(estado, lê, desempilha)` → célula `(estado_destino, empilha)`,
  no formato `T(q0, a, Z) = (q0, A)`. Validada contra o grafo desenhado.

Submódulo `ap-formal` = preencher essa tupla a partir de um AP dado (análogo ao formal do AFD).

---

## 9. Exercícios (dados)

Fontes já disponíveis:
- **`gabaritos_jflap/ap/L1.jff … L15.jff`** — XML do JFLAP (`<type>pda</type>`, transições com
  `<read>/<pop>/<push>` e posições `<x>/<y>`). Dá para **parsear** e obter o **AP de referência** e
  o layout de cada Lk.
- **`Lista_AP_Avancado.md`** (L1–L15) e **`TC - Atividade - AFD-AP Completo.md`** — linguagens +
  tabelas de transição (texto). Servem para escrever o **`validate(w)`** e a **bateria curada** de
  cada exercício.

Plano de dados:
1. Escrever um parser `parseJff(xml) -> { nodes, transitions, stackBottom }` (one-off; XML simples).
2. Para cada Lk: definir `language`, `alphabet`, `stackAlphabet`, `validate(w)` (a partir da
   fórmula, ex.: `aⁿbⁿ` ⇒ conta a's e b's e checa ordem), e `solution` (do `.jff`).
3. Guardar em `src/modules/ap/levels_ap.js` (espelha `levels.js`/`lotes`).

> ⚠️ Os `.jff` têm encoding com `&#13;` e o tipo pode aceitar por estado final no JFLAP; aqui
> **forçamos pilha vazia** na nossa simulação. Conferir caso a caso se o gabarito do `.jff` esvazia
> o Z (alguns têm `λ, Z ; λ` exatamente para isso).

---

## 10. Arquitetura de componentes

```
src/modules/ap/
├── APPart1.jsx                 ← orquestrador (espelha AFDPart1): canvas + rodapé + formal + sim
├── APMinimizer? (não)          ← N/A
├── levels_ap.js                ← exercícios (validate, alphabet, Γ, Z, solution do .jff)
├── utils/pdaAlgorithms.js      ← pdaAccepts (config-BFS, pilha vazia, limites), parseJff
├── hooks/
│   ├── usePDAGraph.js          ← fork do useAFDGraph: mutações + validatePDA (bateria)
│   ├── useCanvasState.js       ← (reuso/compartilhado com AFD)
│   └── useHistory.js           ← (reuso/compartilhado)
└── components/
    ├── CanvasArea.jsx          ← (reuso/compartilhado; agnóstico ao tipo de transição)
    ├── APTransitionLabel.jsx   ← editor 3 campos (read, pop ; push) + multi-label
    ├── APFormalDescription.jsx ← tupla (Q,Σ,Γ,q₀,Z) + tabela δ de pilha
    ├── APSimPanel.jsx          ← simulação passo a passo + PILHA desenhada (JFLAP)
    ├── APGraphView.jsx         ← grafo read-only com labels read,pop;push
    ├── FooterDeck/GameHeader/TestPanel/ProfessorMaurilio ← (reuso)
```

> Onde possível, **promover** `CanvasArea`/`useCanvasState`/`useHistory`/`ProfessorMaurilio`/
> `GameHeader` para um espaço compartilhado em vez de duplicar. Decidir na implementação para não
> quebrar o AFD.

---

## 11. Plano incremental (build + ESLint a cada item)

1. **`utils/pdaAlgorithms.js`**: `pdaAccepts` (com limites) + `parseJff`. Testável puro, sem UI.
2. **`levels_ap.js`**: L1 (e mais 2–3 fáceis) com `validate`, Σ, Γ, Z, `solution` (parseado do .jff).
3. **Modelo + render**: estender o canvas para transição `{read,pop,push}` e `APTransitionLabel`
   (3 campos + multi-label). Render de múltiplas labels por aresta.
4. **`APPart1.jsx`**: orquestrador mínimo — desenhar AP de L1, sem validação ainda.
5. **`usePDAGraph.validatePDA`**: pré-checagens + bateria de testes; ligar ao botão "Validar".
6. **`APSimPanel`**: simulação passo a passo com pilha desenhada; usar na dica do contraexemplo.
7. **`APFormalDescription`**: tupla (Q,Σ,Γ,q₀,Z) + tabela δ.
8. **Maurílio/dicas**: textos didáticos por exercício; contraexemplo na falha.
9. **Destravar rotas** `ap-pilha`/`ap-formal` em `App.jsx` e popular o menu.
10. **Demais exercícios** L2–L15 + Atividades; aula guiada (fase futura, espelhando o Modo Aula).

---

## 12. Decisões (confirmadas pelo usuário — 2026-06-15)

1. **Critério de aceitação:** **pilha vazia**, **sem** estado final. Mecanismo do gabarito: uma
   transição que **desempilha Z e não empilha nada** (`λ, Z ; λ`) — ou que troca Z por outro símbolo
   logo na 1ª transição e depois o desempilha — leva a pilha a ficar vazia; **essa configuração de
   pilha vazia é a "aceitação"** (tratada como se fosse estado final). Confirmado pelo `.jff` do L1.
2. **Rigor da bateria:** **gerar todas as palavras até comprimento N = 7** sobre Σ **+ alguns casos
   curados mais longos** por exercício. (Ver §7.1 — a verdade vem de rodar o gabarito.)
3. **Ordem dos submódulos:** começar pelo **`ap-pilha` (desenhar o AP)**, "bem parecido com o AFD_1".
   O `ap-formal` (preencher a tupla) vem depois.
4. **Contraexemplo na falha:** **sim** — ao errar uma palavra, mostrar a **simulação animada com a
   pilha desenhada** daquela palavra, além da fala do Maurílio. (Diferencial estilo JFLAP.)
5. **λ na UI:** usar o símbolo **λ** para read/pop/push vazios (igual ao print do JFLAP).
6. **Escopo:** **somente exercícios de Pilha (AP).** As listas enviadas misturam AFD e AP; os de AFD
   ficam **fora do escopo** deste módulo.

---

## 13. Verificação (como saberei que está certo)

- `npm run build` + ESLint limpos a cada etapa.
- `pdaAccepts` bate com `validate` no **gabarito** (`solution` do .jff) para a bateria inteira de
  cada Lk implementado — ou seja, o AP de referência passa 100%.
- Desenhar o L1 à mão e validar: `ab`, `aabb`, `aaabbb` aceitas; `a`, `b`, `abb`, `aab`, `ba`
  rejeitadas.
- Pilha vazia de fato: o L1 só aceita quando o Z é consumido ao final.
- Sair/voltar preserva o desenho; Maurílio aponta o contraexemplo correto na falha.
```
