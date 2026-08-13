> **[ARQUIVADO]** Planejamento pré-implementação. Ver docs/adr/ para o resumo executivo das decisões que sobreviveram — este arquivo é referência histórica, não roadmap ativo.

# PLAN — AP: fluxo único (desenhar → descrição formal) + visual igual ao AFD

> Objetivo desta fase: (1) juntar "desenhar o AP" e "descrição formal" num **único fluxo**
> (desenha → formaliza), (2) deixar a tela de desenho com a **mesma aparência do AFD_1**
> (deck de cartas, layout, professor no rodapé), mantendo só as diferenças legítimas do AP
> (transição de 3 campos, sem estado final, descrição com Γ/B em vez de F).

---

## 0. Verificação dos gabaritos (feito)

- **L2** — bate 100% (6 transições + tupla idênticas ao `L2.jff`).
- **L1** — bate, com 1 ressalva: o `L1.jff` tem **uma transição a mais**, `T(q0, λ, Z) = (q0, λ)`
  (o `λ,Z;λ`), ou seja é a versão **n ≥ 0**; a resposta do usuário é a versão **n > 0** (correta
  para o enunciado fixado).
- **Consequência de design:** a **descrição formal** deve ser validada contra **o autômato que o
  aluno desenhou** (como o `FormalDescriptionModal` do AFD faz), **não** contra o `.jff`. Assim o
  L1 não exige o `λ,Z;λ`, e cada aluno formaliza o próprio desenho.

---

## 1. Fluxo único (remover o submódulo `ap-formal`)

- **App.jsx** — `SubmoduleSelection.ap`: remover a carta `ap-formal`. O módulo AP passa a ter só
  **"Autômato com Pilha"** (`ap-pilha`), que engloba desenhar **e** formalizar.
- (Opcional) Se o módulo AP tiver só 1 atividade, podemos pular a tela de submódulos e ir direto
  ao menu de fases. **Decidir** (manter a tela por consistência com AFD/MT, ou pular).
- Sequência dentro do exercício: **desenhar o AP → Validar (bateria) → Descrição Formal → vitória.**

---

## 2. Visual do desenho = AFD_1

### 2.1 Deck de cartas no rodapé (`APFooterDeck`)
- Criar `components/APFooterDeck.jsx` **reusando `FooterDeck.css`** (`.bottom-hand`, `.card`,
  `.card-header`, `.card-icon`, `.card-separator`, `.professor-*`). Mesma estética das cartas.
- Cartas de ação (sem ◎ "Definir Final"):
  `▶ Estado Inicial` · `◯ Novo Estado` · `↗ Criar Seta` · `🗑 Apagar` · `↶ Desfazer` · `↷ Refazer`.
- **Professor Maurílio no HUD do rodapé** (como no AFD), substituindo o `createPortal` atual.
- Drag da carta `◯` → canvas (mesmo padrão do AFD: ghost via `createPortal` p/ furar o `zoom:0.9`).

### 2.2 Alinhar nomes de modo aos do AFD
- No `APCanvas`/`APPart1`: `CONNECT → CONNECTING`, `INITIAL → TOGGLE_INITIAL`
  (mantém `IDLE`, `ADD_NODE`, `ERASE`). Facilita reuso do deck e fica idêntico ao AFD.

### 2.3 Canvas
- Já usa `.canvas-area`/`.node`/`.connections-svg`/`.transition-line` (visual do AFD).
- Adicionar o **HUD de zoom** (canto sup. direito) + `.canvas-action-label` para igualar.
- Transição continua com `APTransitionLabel` (3 campos `lê, desempilha ; empilha`) — diferença
  legítima do AP. (Cartas de símbolo do AFD **não** se aplicam: o editor de 3 campos cobre isso.)

### 2.4 Painel direito = estilo `TestPanel`
- Trocar o `.ap-side` atual por um painel com a estética do `TestPanel` do AFD:
  botão **"Validar AP"**, campo **"Simular palavra"** + lista de palavras testadas (✓/✗),
  e a `APStackSim` (pilha desenhada) aparecendo igual.

### 2.5 Limpeza
- Remover `.ap-deck*`, `.ap-side*`, `.ap-header*` que destoam do AFD; usar as classes do AFD
  onde possível (`.bottom-hand`, `.formal-panel`, header no padrão do `GameHeader`).

---

## 3. Descrição formal do AP (`APFormalDescription`)

- Fork de `FormalDescriptionModal` **reusando `FormalDescriptionModal.css`** (mesma cara), na
  sidebar `.formal-panel` (abre após "Validar AP", como no AFD).
- **Campos (tupla do AP):** `E` (estados) · `Σ` (alfabeto de entrada) · `Γ` (alfabeto da pilha)
  · `i` (inicial) · `B = Z` (fundo). **Sem F** (aceita por pilha vazia — deixar isso escrito).
- **Validação dos elementos contra o GRAFO do aluno:**
  - `E` = labels dos nós; `Σ` = `level.alphabet` (símbolos de `read` do grafo);
  - `Γ` = símbolos de `pop`/`push` do grafo ∪ `{Z}`; `i` = nó inicial; `B` = `Z`.
- **Tabela δ (DECIDIDO: linhas geradas do grafo):** uma linha por transição existente no grafo,
  lado esquerdo fixo `T(estado, lê, desempilha)`, o aluno preenche **`(destino, empilha)`** (2
  campos, λ p/ vazio). Validar cada célula contra o grafo (igual ao AFD valida o destino).
- Sucesso (elementos = ★2; tabela δ = ★3) → tela de vitória (`EndScreen`).

---

## 4. Estrelas e progresso — DECIDIDO: 3 estrelas

Fluxo **desenhar → formal** (sem etapa "menor palavra" antes do desenho). As 3 estrelas
aproveitam as duas validações naturais da descrição formal:
- **★1** — AP validado pela bateria (linguagem correta, pilha vazia).
- **★2** — Descrição formal: **elementos** `(E, Σ, Γ, i, B)` corretos ("Validar Elementos").
- **★3** — Descrição formal: **tabela δ** correta ("Validar Transições") → `EndScreen` de vitória.

Progresso por nível em `ap-<id>` com `stars` 0–3; menu usa `SvgStars max={3}`.

---

## 5. Ordem incremental (build + lint a cada passo)

1. **App.jsx** — remover `ap-formal`, deixar só `ap-pilha` (rápido).
2. **APFooterDeck** — cartas estilo AFD + professor no rodapé + drag do `◯`; remover o `.ap-deck`.
3. **APCanvas/APPart1** — renomear modos, HUD de zoom, painel direito estilo `TestPanel`.
4. **APFormalDescription** — sidebar `.formal-panel`, tupla `(E,Σ,Γ,i,B)` + tabela δ validada
   contra o grafo; ligar o fluxo "Validar AP → Formal → Vitória".
5. **(Opcional)** undo/redo via `useHistory`; `EndScreen` de vitória.
6. Verificar: `npm run build` + ESLint limpos; testar desenhando L01 e L02 (respostas conhecidas).

---

## 6. Decisões (confirmadas — 2026-06-15)

1. **Estrelas:** ✅ **3** (★ AP validado · ★ formal elementos · ★ formal δ). Ver §4.
2. **Tabela δ:** ✅ **linhas geradas do grafo** (preencher `destino` + `empilha`). Ver §3.
3. **undo/redo:** ✅ **fase 2** (depois).
4. **Tela de submódulos do AP:** manter (só "Autômato com Pilha"); pode ir direto ao menu de
   fases — decidir na implementação (baixo impacto).
