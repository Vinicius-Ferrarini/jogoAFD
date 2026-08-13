# 0001 — MT: Descrição Formal mantém matriz por célula (não migra pro formato do AP)

**Status:** aceita

## Contexto

MT (Reconhecedora e Transdutora) precisava ganhar validação real da Descrição
Formal, no mesmo nível de rigor que AFD/AP já tinham (hoje `validate()` do
grafo dava as 3 estrelas de uma vez, sem checar a tupla/tabela δ preenchida
pelo aluno). O AP já resolvia esse problema com uma tabela "1 linha por
transição" (`T(q0,a,Z) = (q0,AZ)`), gerada a partir do grafo do aluno.

## Decisão

MT **não** adota o formato "1 linha por transição" do AP. Mantém a matriz
Estados × Símbolos já existente, com 1 campo de texto livre por célula (o
aluno digita `"destino, escreve, move"`, ex. `"q1, a, R"`). A validação faz
parse desse texto e compara com a transição real do grafo desenhado — ver
`src/modules/mt/utils/mtFormalValidation.js`.

## Alternativas consideradas

- **Migrar para "1 linha por transição" (formato do AP)** — descartada
  explicitamente pelo usuário. A matriz por célula é mais compacta para MTs
  com poucos estados e poucos símbolos (a maioria dos níveis do jogo), e uma
  migração exigiria reescrever o parser de célula, o CSS da tabela e todos os
  testes de validação sem ganho claro — decisão de manter o formato existente.

## Consequências / Trade-offs

- Compacto para a maioria dos níveis (≤11 colunas cabem sem scroll no painel
  de 300px — ver `.mt-formal-delta-*` em `FormalDescriptionModal.css`).
- Níveis-outlier com alfabeto de fita grande (ex. L11, 75 símbolos) continuam
  precisando de `overflow-x: auto` como rede de segurança — nenhuma largura de
  painel razoável comporta 75 colunas legíveis.
- Parse de célula por texto livre (`"destino, escreve, move"`) é mais frágil a
  erro de digitação do aluno que campos estruturados — mitigado com mensagens
  de erro específicas por tipo de erro (parênteses, vírgula faltando, direção
  inválida, estado inexistente).

## Referências

- Plano original: `docs/archive/PLANO_MT_DESCRICAO_FORMAL.md`
- Código: `src/modules/mt/utils/mtFormalValidation.js`, `src/modules/afd/FormalDescriptionModal.css`
