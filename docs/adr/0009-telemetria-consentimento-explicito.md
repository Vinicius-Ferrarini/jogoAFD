# 0009 — Telemetria de pesquisa é opt-in com consentimento explícito

**Status:** aceita (documento-fonte continua ativo, não arquivado)

## Contexto

O TuringLab é também um instrumento de pesquisa de Iniciação Científica —
precisa coletar dados de uso (tentativas, erros, tempo por fase, uso de ajuda)
para análise empírica de como estudantes aprendem autômatos. Isso precisa
coexistir com um jogo que também funciona 100% offline/local, e sem violar
expectativas de privacidade do jogador.

## Decisão

Toda telemetria (Google Analytics 4 + Firebase/Firestore) é **opt-in**,
atrás de um gate de consentimento explícito (`hasConsent()`/`grantConsent()`
em `src/services/telemetry.js`). `logEvent` retorna cedo se `!hasConsent()`.
O gate é um banner "cookie" não bloqueante no rodapé (`ConsentGate.jsx`,
renderizado via `createPortal`) — o jogo é jogável por trás dele. Sem aceitar,
o app funciona normalmente, 100% local, com progresso salvo só em
`localStorage`. Não há cadastro nem identificação pessoal — o client ID é
gerado pelo próprio GA4.

## Alternativas consideradas

- **Coleta sempre ativa, sem gate** — descartada por razão ética/de
  privacidade: pesquisa com humanos exige consentimento informado, mesmo
  sendo dados anônimos de uso.
- **Bloquear o jogo até decidir sobre consentimento** — descartada, o banner
  é deliberadamente não bloqueante (o jogo funciona por trás dele) para não
  prejudicar a experiência de quem só quer jogar.

## Consequências / Trade-offs

- Dados de pesquisa são necessariamente incompletos (só cobrem jogadores que
  aceitaram) — troca aceita conscientemente em favor de conformidade ética.
- Todo módulo novo que quiser telemetria precisa lembrar de instrumentar
  atrás do mesmo gate — replicado manualmente em cada `Part1.jsx` (AFD, AP,
  MT-Trans, MT-Recon) e no Minimizador.
- O botão do GitHub e a checagem de "última atualização" via API pública
  foram posteriormente identificados como um vazamento de anonimato
  paralelo (não é telemetria, mas expõe o autor do projeto) — resolvido à
  parte, fora do escopo desta decisão.

## Referências

- Documento vivo (não arquivar — ainda rege o sistema): `docs/telemetria_turinglab.md`
- Código: `src/services/telemetry.js`, `src/components/ConsentGate.jsx`
