# 0003 — AP: validação por bateria de palavras, não por equivalência analítica

**Status:** aceita

## Contexto

AFD tem uma propriedade que AP não tem: equivalência de linguagem entre dois
AFDs é decidível (BFS sobre o produto dos dois autômatos cobre toda a
linguagem). Para AP (Autômato com Pilha), **equivalência de linguagem é
indecidível** — não existe algoritmo geral que prove que o AP desenhado pelo
aluno reconhece exatamente a mesma linguagem-alvo.

## Decisão

A correção do AP do aluno é validada por **bateria de palavras de teste**: gera
todas as palavras até comprimento N=7 sobre o alfabeto do nível, mais alguns
casos longos curados, roda o AP do aluno contra cada uma e exige 100% de
acerto comparado ao veredito do **próprio gabarito `.jff` parseado**
(`pdaAccepts(gabarito, w)`), não contra uma função `validate(w)` escrita à
mão por exercício. Ver `src/modules/ap/utils/pdaAlgorithms.js`
(`buildBattery`/`validateStudentPda`).

## Alternativas consideradas

- **Escrever `validate(w)` manual por exercício** (como o AFD faz com
  `regex`/`validate`) — parcialmente descartada: aumentaria a confiabilidade
  do teste automatizado (evita a "tautologia fraca" de comparar o gabarito
  contra si mesmo), mas custa 15-20 funções escritas à mão. Decisão em
  `docs/archive/PLANO_AP_REFORMA.md` (Tarefa 3): manter o teste "fraco"
  (auto-consistência) como padrão, e escrever `validate` de referência só
  pontualmente para níveis novos/recém-criados quando fizer sentido.
- **Provar equivalência analítica** — descartada, é literalmente indecidível
  para APs em geral.

## Consequências / Trade-offs

- A bateria não *prova* equivalência, só cobre exaustivamente até N=7 — um AP
  do aluno que erra só em palavras muito longas pode escapar da detecção
  (mitigado pelos casos curados adicionais por exercício).
- Testes automatizados que comparam bateria-gerada-do-gabarito contra
  bateria-gerada-do-mesmo-gabarito são estruturalmente uma tautologia fraca —
  pegam regressão de parser/estrutura, mas não erro de transcrição do
  enunciado para o `.jff`. Ver `docs/archive/PLANO_AP_REFORMA.md` (Tarefa 3)
  para a extensão parcial disso (teste "forte" com `validate` manual em L18-L20).
- AP não expõe `acceptedWords`/`rejectedWords` curados na UI como o AFD faz —
  diferença de design intencional, não lacuna (ver Tarefa 5 do mesmo plano).

## Referências

- Plano original: `docs/archive/PLAN_AUTOMATO_PILHA.md` (§7)
- Decisão de execução: `docs/archive/PLANO_AP_REFORMA.md` (Tarefas 3 e 5)
- Código: `src/modules/ap/utils/pdaAlgorithms.js`, `src/__tests__/ap_levels.test.js`
