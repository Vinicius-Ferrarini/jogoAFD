# 0007 — Duplicação de canvas entre AFD/AP/MT não extraída (adiada)

**Status:** aceita, pendente de execução

## Contexto

`CanvasArea.jsx` (AFD), `APCanvas.jsx` (AP) e `MTCanvas.jsx` (MT) somam
~1860 linhas combinadas com lógica duplicada de drag, pan, zoom, menu de
contexto e seleção — os três módulos implementam essencialmente a mesma
interação de canvas de forma independente.

## Decisão

**Não extrair** essa lógica para um módulo compartilhado por enquanto. A
decisão foi tomada explicitamente após o usuário ser consultado: risco
médio-alto (é a parte mais sensível a bugs de interação do app, tocando os 3
módulos simultaneamente) contra o ganho já obtido nos itens de otimização de
bundle já implementados (chunk principal ~91% menor sem tocar em canvas).

## Alternativas consideradas

- **Extrair agora, um módulo por vez** — descartada por ora; ficou registrada
  como o caminho recomendado *se* a extração for retomada no futuro (fazer só
  AFD primeiro, com bateria extensa de testes manuais de drag/seleção
  múltipla/zoom/pan/menu de contexto/Modo Aula antes de migrar o próximo
  módulo).
- **Extrair tudo de uma vez nos 3 módulos** — descartada, risco alto demais
  para uma mudança sem benefício de performance mensurável (é duplicação de
  código, não bundle extra — os 3 componentes já vivem em chunks lazy
  separados).

## Consequências / Trade-offs

- Correções de bug de interação (ex. seta torta em curvas bidirecionais)
  precisam ser replicadas manualmente nos 3 arquivos — já aconteceu pelo
  menos uma vez (AFD → AP, ver `docs/archive/PLANO_AP_REFORMA.md` Tarefa 6).
- Nenhum ganho de bundle a colher aqui (chunks já são lazy e separados) — o
  valor de uma futura extração seria manutenibilidade, não performance.
- Fica como oportunidade futura explicitamente documentada, não esquecida.

## Referências

- Decisão original: `docs/OPTIMIZATION_PROGRESS.md` #5
