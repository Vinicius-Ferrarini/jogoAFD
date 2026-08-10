# Plano — Descrição Formal em MT (validação real, igual AFD/AP)

Contexto: hoje em MT (Transdutora e Reconhecedora) a Descrição Formal é
preenchida livremente sem NENHUMA validação — o botão "Concluir Fase" sempre
"passa", e em MT-Trans as 3 estrelas já são dadas no "Validar" do grafo, antes
mesmo do jogador abrir a Descrição Formal. Isso diverge do padrão AFD/AP, onde
a última estrela só vem depois de validar a tupla + tabela δ corretamente.

Objetivo: igualar MT ao comportamento de AFD/AP.

## Itens

- [x] **1. MT-Trans: 3ª estrela só após Descrição Formal correta**
      Hoje `validate()` já dá as 3 estrelas de uma vez (`MTPart1.jsx:383`).
      Trocar para: `validate()` dá 2 estrelas (grafo correto); a 3ª só vem
      quando a Descrição Formal for validada com sucesso (igual AFD/AP).

- [x] **2. MT-Recon: 3ª estrela deixa de ser incondicional**
      Hoje `concludePhase()` (`MTReconPart1.jsx:410-414`) dá a 3ª estrela sem
      checar nada. Passa a só dar quando a Descrição Formal for validada.
      (MT-Recon já dá 2 estrelas certas no Validar do grafo — isso não muda.)

- [x] **3. Criar validação real da Descrição Formal (campos + tabela δ)** — `mtFormalValidation.js` criado e testado (7 casos manuais, cobrindo campos+tabela).
      Novo módulo compartilhado (`mtFormalValidation.js` ou similar) com
      funções puras, no mesmo espírito de `FormalDescriptionModal.jsx` do AFD:
      - Validar formato de chaves `{}` nos campos Q, Σ, Γ, F (igual AFD/AP).
      - Validar Q/Σ/Γ/inicial/final contra o grafo REAL desenhado pelo aluno.
      - Validar símbolo branco (`blank`) contra `BLANK` ('□') fixo do nível.
      - Validar a tabela δ: mantém o formato ATUAL de matriz Estados×Símbolos
        com 1 campo de texto livre por célula (“destino, escreve, move”) —
        decisão do usuário, sem migrar para o formato "1 linha por transição"
        do AP. Faz parse do texto da célula e compara com a transição real.
      Usado por MTPart1.jsx E MTReconPart1.jsx (mesma estrutura de dados nos
      dois — reaproveitar 100%, sem duplicar a lógica).

- [x] **4. Botão "Validar Descrição Formal" no lugar de "Concluir Fase"**
      Remove `concludePhase` incondicional. Novo botão só aparece quando a
      Descrição Formal está aberta (`formalMode`), chama a validação do item 3.
      Sucesso → concede a estrela que faltar + toast de sucesso + tela de
      vitória (mesmo fluxo do `concludePhase` atual, só que condicionado).
      Falha → toast de erro + bordas vermelhas nos campos/células erradas,
      SEM avançar de tela.

- [x] **5. Destaque visual de erro (borda vermelha)**
      Reaproveitar as classes `field-error`/`field-error-msg`/`cell-error` já
      existentes em `FormalDescriptionModal.css` (import compartilhado, mesmo
      padrão que AP já faz) em vez de inventar CSS novo.

- [x] **6. Sem duplicação Maurílio + popup** — confirmado por leitura: `validateFormal` (MT-Trans e MT-Recon) só chama `showToast`, nunca `say()`.
      Confirmar que o resultado da validação da Descrição Formal usa SÓ o
      toast (como AFD/AP) — Maurílio não deve comentar erro nem repetir a
      mesma mensagem de sucesso do toast.

- [x] **7. Validar em ambos os módulos (Transdutora e Reconhecedora)**
      Aplicado em `MTPart1.jsx` E `MTReconPart1.jsx`.

- [x] **8. Testes automatizados + validação manual**
      Suíte completa: 1778/1778 (10 arquivos) — 2 execuções não precisaram,
      já saiu verde de primeira. Lint: só os 2 erros pré-existentes (linha do
      `formalFill` no useEffect, mesma nos dois arquivos antes desta mudança).
      Build de produção: limpo. Validação manual via Playwright NÃO foi
      possível nesta sessão (sem MCP de browser disponível) — a lógica de
      validação em si foi testada isoladamente com 7 casos manuais (script
      scratch, removido depois de confirmar) cobrindo: campos corretos,
      chaves faltando, estado inicial errado, δ correto, move errado, célula
      extra indevida, coluna símbolo-branco. Recomendado um passe manual no
      navegador quando possível para confirmar visualmente as bordas
      vermelhas e o fluxo completo ponta a ponta.

## Ajustes finos (2ª rodada, pós-validação inicial)

- [x] **9. Tabela δ de MT compacta — sem "zoom"/scroll no caso comum**
      Trocada a estilização inline (font-size 11px, célula 60px) por classes
      CSS dedicadas (`.mt-formal-delta-*` em `FormalDescriptionModal.css`)
      com fonte 10px e colunas de 44px — cabe nos 300px do painel para até
      ~11 colunas (a maioria dos níveis). Níveis-outlier com dezenas de
      símbolos na fita (ex.: L11, alfabeto quase-ASCII completo, 75 colunas)
      continuam com `overflow-x: auto` como rede de segurança — nenhuma
      largura de painel razoável comporta 75 colunas legíveis.

- [x] **10. Dica fixa acima da tabela δ ensinando o formato**
      Bloco `.mt-formal-delta-hint` (verde tracejado) sempre visível acima
      da tabela: "Preencha cada célula como 'destino, escreve, move' — ex:
      q1, a, R — direção só pode ser L ou R."

- [x] **11. Auto-fechamento de chaves `{ }` nos campos de tupla**
      Novo helper `src/modules/afd/utils/bracketAutoClose.js`
      (`onBracketKeyDown`), aplicado nos campos que aceitam múltiplos
      elementos: Q/Σ/F (AFD), E/Σ/Γ (AP), states/sigma/gamma/final (MT-Trans
      e MT-Recon). Campos "single" (q₀/i/B/blank) e células da tabela δ
      NÃO recebem o handler — nunca usam chaves no domínio do jogo. Campo de
      testar palavra explicitamente fora do escopo (não é Descrição Formal).

- [x] **12. Bug corrigido: validar tabela δ com erros não destacava nenhuma
      célula em vermelho**
      Causa raiz: a `<td>` da tabela δ do MT tinha `style` inline com
      `border: '1.5px solid #9ca3af'` incondicional — inline sempre vence
      CSS de arquivo externo, então a classe `cell-error` (que só mudava a
      cor da borda via stylesheet) nunca tinha efeito visual, mesmo com
      `cellErrors` corretamente populado pela validação. Corrigido movendo
      TODA a estilização da tabela para as novas classes CSS dedicadas
      (item 9), sem nenhum `border` inline conflitante.
      Mensagem também melhorada: `validateMTFormalTransitions` agora retorna
      `firstError` com diagnóstico específico da 1ª célula errada
      encontrada (faltam vírgulas, parênteses indevidos, direção inválida
      (só L/R), estado inexistente no grafo, destino/escrita errados) — as
      demais células só ficam marcadas em vermelho, sem repetir o texto.

## Notas de implementação

- `EMPTY_FORMAL` já tem os campos certos: `states, sigma, gamma, initial,
  blank, final, deltaCells`. Não muda a estrutura de dados do formulário.
- `BLANK` já é importado em `MTPart1.jsx` de `tmAlgorithms.js` — usar o mesmo
  em MTReconPart1.jsx se ainda não importado, para validar o campo `blank`.
- Célula da tabela δ: valor esperado do jogador é uma string tipo
  `"q1, a, R"` — fazer split por vírgula/trim (mesmo padrão já usado em
  `useMTGuidedLesson`/scripts de geração de nível para decompor `delta`).
- `formalStateRows` já vem do grafo real (`g.nodes` ou `lesson.displayNodes`)
  — a validação deve iterar sobre os MESMOS ids/labels que a tabela já usa,
  para não haver descompasso entre o que é mostrado e o que é validado.
- Este arquivo pode ser apagado após a validação final confirmar tudo ok.
