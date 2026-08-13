# 0002 — AP: aceitação por pilha vazia, não por estado final

**Status:** aceita

## Contexto

Ao desenhar o módulo de Autômato com Pilha (AP), era preciso escolher o
critério de aceitação: estado final (como AFD) ou pilha vazia (convenção
alternativa comum em livros-texto e no próprio JFLAP). O gabarito `.jff` do
L1 usava uma transição que esvazia explicitamente a pilha
(`λ, Z ; λ`), sugerindo que o critério pretendido era pilha vazia.

## Decisão

O AP aceita uma palavra `w` se existe uma computação que consome toda a
entrada **e** esvazia a pilha (incluindo o símbolo de fundo `Z`). Não há
conceito de estado final no AP — a tupla formal é `(Q, Σ, Γ, δ, q₀, Z)`, sem
`F`. Ver `src/modules/ap/utils/pdaAlgorithms.js` (`pdaAccepts`).

## Alternativas consideradas

- **Aceitação por estado final** (como AFD) — descartada porque diverge da
  convenção didática usada em sala (confirmado pelo gabarito `.jff` do L1, que
  esvazia a pilha propositalmente) e do que o print de referência do JFLAP
  mostrava (tupla sem `F`).

## Consequências / Trade-offs

- A UI de desenho do AP não tem carta "Definir Final" (não existe no domínio).
- A Descrição Formal do AP mostra `(E, Σ, Γ, i, B=Z)`, explicitamente sem `F`
  — precisa deixar claro na tela que "aceita por pilha vazia" é a regra, para
  não confundir quem já viu AFD.
- Simulação/validação de palavra precisa checar pilha vazia como critério de
  parada de sucesso, não estado marcado como final.

## Referências

- Plano original: `docs/archive/PLAN_AUTOMATO_PILHA.md` (§12, decisão 1)
- Código: `src/modules/ap/utils/pdaAlgorithms.js`
