# 📝 AutoQuest v3.0 — CHANGELOG

## ✨ Novas Features Implementadas

### 1. **Undo/Redo — Ctrl+Z e Ctrl+Y** ✅
   - **Histórico completo** de todas as ações:
     - Adicionar/deletar nós
     - Mover nós
     - Renomear nós
     - Adicionar/deletar transições
     - Mudar símbolos de transições
     - Toggle estado inicial/final
   
   - **Como usar:**
     - `Ctrl+Z` — Desfazer última ação
     - `Ctrl+Y` — Refazer ação desfeita
     - Atalhos funcionam em **Windows, Mac (Cmd+Z/Y) e Linux**

   - **Como funciona:**
     - Cada ação grava um snapshot do estado `(nodes, transitions)`
     - O histórico é limitado pela memória disponível
     - Rastreamento ocorre automaticamente em: `recordHistory(newNodes, newTrans)`

### 2. **Simulação Passo a Passo no Rodapé** ✅
   - **Antes**: Modal centralizado que cobria o gráfo
   - **Depois**: Painel flexível no rodapé (onde estavam as cartas)
   
   - **Comportamento:**
     - Clica em "🔬 Simular" → abre painel no rodapé
     - Mostra: palavra, passos, estado atual, botões de navegação
     - **Auto-fecha em 4 segundos** após terminar a simulação
     - Se abrir nova simulação, fecha a anterior (Opção A)
   
   - **Componente novo:** `SimPanel` (renderizado no `.bottom-hand`)
   - **Estado:** `showSimPanel` controla visibilidade
   - **CSS:** `.sim-panel-container`, `.sim-panel-header`, `.sim-panel-content`

### 3. **Corrigido: Bug de Duplicata "q1"** ✅
   - **Problema:** Ao renomear dois nós para o mesmo nome, movimento bugava tudo
   - **Solução:** 
     - Validação **rigorosa** em `handleNodeLabelBlur()`
     - Bloqueia renomeação se **outra node** já tiver esse nome
     - Toast de erro: `"⚠️ Já existe um estado chamado..."`
     - Reverte para nome anterior automaticamente
   
   - **Código:**
     ```jsx
     const isDuplicate = nodes.some(n => n.uid !== uid && (n.label === trimmed || n.id === trimmed));
     ```
   - Usa **UID interno** (não label) para evitar confusão

### 4. **Cores Corrigidas no Zoom HUD** ✅
   - **Antes:** Botões `−` e `+` brancos em fundo branco → invisíveis
   - **Depois:** Botões agora são **pretos** (`color: #000`) e visíveis
   
   - **CSS alterado:**
     ```css
     color: '#000' /* adicionado em + e − buttons */
     ```

---

## 🔄 Melhorias de UX/Performance

- ✅ **History slicing:** Histórico é "cortado" quando você desfaz + faz nova ação
- ✅ **Toast feedback:** "↶ Desfeito" / "↷ Refeito" aparecem ao usar Ctrl+Z/Y
- ✅ **Auto-close da simulação:** Desaparece após 4s do último step
- ✅ **Validação duplicata:** Impede grafos inconsistentes
- ✅ **Memoização de transições:** Mantida para perf

---

## 📦 Arquivos Modificados

| Arquivo | Alterações |
|---------|-----------|
| `App.jsx` | Adicionado: undo/redo system, SimPanel, validação duplicata aprimorada, Ctrl+Z/Y listeners |
| `App.css` | Novas classes: `.sim-panel-*`, cor nos botões zoom |
| `FormalDescriptionModal.jsx` | Sem alterações (copiado para referência) |
| `FormalDescriptionModal.css` | Sem alterações |

---

## 🎮 Como Testar

### Teste 1: Undo/Redo
```
1. Adicione 3 nós
2. Pressione Ctrl+Z → deve remover último nó
3. Pressione Ctrl+Y → deve readicionar
4. Mova um nó com mouse
5. Ctrl+Z → volta para posição anterior
```

### Teste 2: Duplicata Bloqueada
```
1. Crie node com label "q0"
2. Clique em outro node e renomeie para "q0"
3. Deve ver toast: "⚠️ Já existe um estado chamado..."
4. Node reverte para nome anterior
```

### Teste 3: Simulação no Rodapé
```
1. Monte um AFD simples
2. Digite palavra no campo direito
3. Clique "🔬 Simular"
4. Cartas desaparecem, simulação aparece no rodapé
5. Após 4s da última ação, painel se fecha automaticamente
6. Cartas reaparacem
```

### Teste 4: Zoom Buttons Legíveis
```
1. Desbloqueie o tabuleiro (acerte a menor palavra)
2. Veja os botões − e + no canto superior direito
3. Devem estar PRETOS e legíveis
```

---

## 🚀 Próximas Sugestões

- [ ] Salvar/carregar histórico em localStorage
- [ ] Limite visual para quantidade de história (ex: máx 50 snapshots)
- [ ] Animação suave ao fechar SimPanel
- [ ] Suporte a touch gestures para undo/redo em mobile
- [ ] Feedback visual de qual ação foi desfeita (ex: "Nó removido")

---

## ⚠️ Observações Importantes

1. **UID vs Label:** O sistema usa `uid` (interno, único) para identidade e `label` (visível) para exibição
2. **Snapshot por Ação:** Cada `recordHistory()` grava estado completo (não incremental)
3. **Auto-close da Sim:** Usa `setTimeout` em `useEffect` — funciona mesmo se usuário não clicar
4. **Validação em Blur:** Renomeação só é salva ao sair do campo (soltando foco)

---

✅ **Versão 3.0 — PRONTA PARA DEPLOY!**
