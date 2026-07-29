# Gabaritos gerados (NÃO-oficiais) — pendentes de validação

A pasta `gabaritos_oficiais/` continha, originalmente, só os XMLs entregues
pelo professor (`Lista 04/05 - ..._gabarito/`). Os arquivos abaixo foram
**gerados automaticamente** para preencher exercícios do PDF que não tinham
gabarito — a pedido explícito, para não deixar buracos no jogo enquanto o
gabarito oficial não é criado no JFLAP. **Todos precisam de validação.**

## Transdutora

### L11 — Criptografia mono alfabética (`transdutora/L11.xml`)

O PDF (`Lista de Exercícios - 05`) diz apenas "criptografa o texto utilizando
uma cifra mono alfabética simples" — **não define qual cifra** (chave? tabela?
deslocamento?). Foi assumido, como placeholder óbvio, um deslocamento fixo
tipo Caesar **+3**, aplicado independentemente em cada classe de caractere:

- Maiúsculas A-Z: desloca 3 posições com wrap-around (X→A, Y→B, Z→C)
- Minúsculas a-z: mesma lógica
- Dígitos 0-9: desloca 3 com wrap-around (mod 10)
- Pontuação (`, . ? ! ; :`), acentos (`´ \` ^ ~`) e espaço: **mantidos sem
  alteração** (não há forma óbvia de cifrar esses símbolos com uma MT de fita
  única sem mais contexto)

**Ação necessária**: definir a cifra real pretendida (chave, símbolos
afetados, o que fazer com pontuação/acentos) e recriar o gabarito no JFLAP.

### L17–L23 — Decimal × 3 até × 9 (`transdutora/L17.xml` … `L23.xml`)

Generalização do algoritmo do **L16.xml oficial** (decimal × 2): mesma
estrutura de estados (q1 varre até o fim, depois processa dígito-a-dígito da
direita pra esquerda multiplicando por N e propagando carry). A diferença é
que N > 2 pode gerar carry maior que 1 (até 8, para N=9), então cada nível usa
mais "estados de carry" que o L16 original (que só precisa de 2, carry 0/1).

**Verificação já feita** (antes de gerar os XMLs): simulação em JS pura da
lógica dígito-a-dígito-com-carry, comparada com multiplicação real via
`BigInt`, ~500 casos aleatórios por nível + casos extremos (zero, muitos 9s) —
todos corretos. Depois, verificação end-to-end (XML → parser real do jogo →
`simulateTM` → resultado) também confirmada. Alta confiança de correção
matemática, mas **ainda não visto pelo professor** — o layout dos estados
(coordenadas) também é gerado, não desenhado à mão.

**Ação necessária**: abrir cada um no JFLAP, conferir se bate com o que o
professor pretendia (mesmo algoritmo do L16, só generalizado) e substituir se
houver uma abordagem diferente em mente.

## Reconhecedora

Nenhum gabarito gerado — a lista completa (L1-L17) já veio 100% coberta pelo
gabarito oficial do professor.

## Ainda sem gabarito nenhum (nem oficial, nem gerado)

- **Transdutora L25** — "Multiplica binários" (DESAFIO). Não gerado porque a
  multiplicação binária dígito-a-dígito é significativamente mais complexa
  que soma (não é um caso simples de generalizar a partir de outro gabarito
  existente) — melhor esperar o gabarito oficial do professor.

## Como identificar um gabarito gerado

Todo XML gerado tem um comentário logo no início:
`<!--GERADO (não-oficial): ...-->` explicando a origem e o que precisa ser
validado. Os arquivos `.js` correspondentes em `src/levels_data/mt/` também
têm `[GABARITO NÃO-OFICIAL: ...]` no campo `description`, visível na tela de
objetivo do jogo.
