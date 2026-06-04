# Mapa de Telas — Laboratório das Linguagens

> Use este documento como referência quando falarmos sobre uma tela específica do jogo. Cada seção descreve o nome, o que aparece visualmente e como chegar nela.

---

## Hierarquia de Navegação

```
Tela Inicial (HOME)
└── Seleção de Módulos (MODULES)
    └── Seleção de Submódulo (SUBMODULES)
        ├── [afd-p1] Desenhar & Formalizar ─────────────────────────────────┐
        │     ├── Lista de Fases (MENU interno)                             │
        │     │     ├── [JOGO] Canvas principal                            │
        │     │     │     └── Painel Descrição Formal (sidebar esquerda)   │
        │     │     └── Painel de Simulação (rodapé do JOGO)               │
        ├── [afd-p2] Grafo → Linguagem                                      │
        │     ├── Lista de Fases (P2)                                       │
        │     └── Tela de Exercício (P2)                                    │
        └── [afd-min] Minimização                                           │
              └── Tela de Exercício (Minimizador)                          ─┘
```

---

## 1. Tela Inicial

**Nome no código:** `screen === 'HOME'` → componente `MainMenu.jsx`

**O que aparece:**
- Maurílio na pose "explicando" com balão de fala de boas-vindas
- Título grande **Laboratório das Linguagens**
- Círculo de progresso global (% das estrelas conquistadas)
- Botão azul grande **"🚀 Começar Aventura"**

**Como chegar:** É a primeira tela ao abrir o jogo.

**Como sair:** Clicar em "Começar Aventura" → vai para Seleção de Módulos.

---

## 2. Seleção de Módulos

**Nome no código:** `screen === 'MODULES'` → componente `ModuleSelection` (dentro de `App.jsx`)

**O que aparece:**
- Botão "← Voltar" no topo
- Três cards grandes: **Autômatos Finitos**, **Autômatos com Pilha**, **Máquinas de Turing**

**Como chegar:** Botão "Começar Aventura" na Tela Inicial.

**Como sair:**
- Clicar em um módulo → vai para Seleção de Submódulo do módulo escolhido
- "← Voltar" → volta para Tela Inicial

---

## 3. Seleção de Submódulo

**Nome no código:** `screen === 'SUBMODULES'` → componente `SubmoduleSelection` (dentro de `App.jsx`)

**O que aparece:**
- Botão "← Voltar" no topo
- Título do módulo escolhido (ex: "Autômatos Finitos")
- Cards dos submódulos disponíveis:
  - **🎨 Desenhar & Formalizar** (`afd-p1`)
  - **📊 Grafo → Linguagem** (`afd-p2`)
  - **⚡ Minimização** (`afd-min`)
  - Autômatos com Pilha e Máquinas de Turing aparecem como **"Em breve!"** (desabilitados)

**Como chegar:** Clicar em um módulo na Seleção de Módulos.

**Como sair:**
- Clicar em um submódulo ativo → carrega o jogo correspondente
- "← Voltar" → volta para Seleção de Módulos

---

## 4. Desenhar & Formalizar — Lista de Fases

**Nome no código:** `tela === 'MENU'` dentro de `AFDPart1.jsx`

**O que aparece:**
- Título "Laboratório das Linguagens" + barra de progresso (X/Y ★)
- Grade de botões, cada um sendo uma **fase** (ex: "Fase 1", "Fase 2"...) com estrelinhas embaixo
- Paginação: botões "⬅ Anterior" / "Próxima ➡"
- Botão "← Voltar ao Menu" no final

**Como chegar:** Selecionar "🎨 Desenhar & Formalizar" na Seleção de Submódulo.

**Como sair:**
- Clicar em uma fase → entra no **Canvas** dessa fase
- "← Voltar ao Menu" → volta para Seleção de Submódulo

---

## 5. Desenhar & Formalizar — Canvas (JOGO)

**Nome no código:** `tela === 'JOGO'` dentro de `AFDPart1.jsx`

**O que aparece:**

```
┌────────────────────────────────────────────────────────────────┐
│  HEADER: [☰ Sidebar] [⬅ Voltar]   Objetivo / Fórmula   Fase ★ │
├────────────────────────────┬───────────────────────────────────┤
│                            │ PAINEL DIREITO (Palavras)         │
│   CANVAS (área central)    │  - Campo de entrada               │
│                            │  - Lista de palavras testadas     │
│  Aqui o usuário desenha    │  - Botão "🔬 Simular"             │
│  estados e setas do AFD    │  - Botão "Validar Desenho"        │
│                            │                                   │
├────────────────────────────┴───────────────────────────────────┤
│  RODAPÉ: Cartas de ação (ou Painel de Simulação quando ativo)  │
└────────────────────────────────────────────────────────────────┘
```

**Detalhes de cada área:**

- **Header:** botão `⬅ Voltar` (volta ao Hub/Menu principal), botão `☰` abre o Painel de Descrição Formal, fórmula da fase no centro, nome e estrelas da fase à direita.
- **Canvas:** área onde o usuário cria estados (nós) e setas (transições) arrastando. Fica bloqueado (com Maurílio na tela) até o usuário descobrir a menor palavra aceita.
- **Painel Direito:** caixa de texto + botão `+` para testar palavras. Após descobrir a menor palavra, aparece o botão de Simular e o botão de Validar.
- **Rodapé (Cartas):** fileira de cartas deslizáveis — cartas de ação (Novo Estado, Criar Seta, etc.) e cartas de símbolo (letras do alfabeto).
- **Rodapé (SimPanel):** substitui as cartas quando a simulação está ativa. Mostra a palavra caractere a caractere, o passo atual, e botões ◀ ▶ para navegar. Exibe badge **ACEITA** ou **REJEITADA** ao final.

**Sub-painel: Descrição Formal (Sidebar)**

Abre ao clicar em `☰` no header. Ocupa a lateral esquerda. O usuário preenche os conjuntos Q, Σ, estado inicial, estados finais e a tabela de transições em formato formal para ganhar estrelas extras.

**Como chegar:** Clicar em uma fase na Lista de Fases (acima).

**Como sair:** Botão `⬅ Voltar` no header → volta ao Hub.

---

## 6. Grafo → Linguagem — Lista de Fases (P2)

**Nome no código:** `selectedLevel === null` → componente `LevelList` dentro de `AFDPart2.jsx`

**O que aparece:**
- Título "Laboratório das Linguagens" + badge azul "📊 Grafo → Linguagem"
- Barra de progresso geral
- Grade de botões de fase com estrelinhas
- Paginação

**Como chegar:** Selecionar "📊 Grafo → Linguagem" na Seleção de Submódulo.

**Como sair:**
- Clicar em uma fase → vai para Tela de Exercício (P2)
- Botão "← Voltar" → volta para Seleção de Submódulo

---

## 7. Grafo → Linguagem — Tela de Exercício (P2)

**Nome no código:** `selectedLevel !== null` → componente `ExerciseScreen` dentro de `AFDPart2.jsx`

**O que aparece:**
- Grafo do AFD já montado (somente leitura), desenhado automaticamente
- Campo de texto para o usuário **digitar a linguagem** que o grafo representa (ex: `L = {a^n | n ≥ 1}`)
- Maurílio com balão de dica ao clicar
- Feedback visual: resposta certa (verde) ou errada (vermelho)
- Overlay de vitória com estrelas ganhas ao acertar

**Como chegar:** Clicar em uma fase na Lista de Fases (P2).

**Como sair:**
- Botão "← Voltar" → volta para Lista de Fases (P2)
- Botão "Próxima →" (após acertar) → abre o próximo exercício

---

## 8. Minimização — Tela de Exercício

**Nome no código:** componente `AFDMinimizer.jsx` (tela única, sem subrotas internas)

**O que aparece:**
- Header com "← Voltar", título "Minimização de AFD" e contador "Ex X / 5"
- Card do exercício: título, nível (easy/medium/hard), estrelinhas, descrição
- Tabela de estados do AFD original
- Área interativa para o usuário montar o AFD minimizado
- Botão de verificar e botão de dica

**Como chegar:** Selecionar "⚡ Minimização" na Seleção de Submódulo.

**Como sair:** Botão "← Voltar" no header → volta para Seleção de Submódulo.

---

## Resumo Rápido (Referência Rápida)

| Nome curto que usaremos | O que é | Arquivo |
|---|---|---|
| **Tela Inicial** | Logo + Maurílio + botão Começar | `MainMenu.jsx` |
| **Seleção de Módulos** | Grade: AFD / AP / MT | `App.jsx` |
| **Seleção de Submódulo** | Lista das atividades do módulo | `App.jsx` |
| **Lista de Fases (P1)** | Grade de fases do Desenhar & Formalizar | `AFDPart1.jsx` (MENU) |
| **Canvas** | Onde o usuário desenha o AFD | `AFDPart1.jsx` (JOGO) |
| **Sidebar Formal** | Painel lateral de descrição formal | `FormalDescriptionModal.jsx` |
| **SimPanel** | Rodapé de simulação passo-a-passo | dentro de `AFDPart1.jsx` |
| **Lista de Fases (P2)** | Grade de fases do Grafo → Linguagem | `AFDPart2.jsx` (LevelList) |
| **Exercício P2** | Tela de resposta (digitar a linguagem) | `AFDPart2.jsx` (ExerciseScreen) |
| **Minimizador** | Tela dos 5 exercícios de minimização | `AFDMinimizer.jsx` |
