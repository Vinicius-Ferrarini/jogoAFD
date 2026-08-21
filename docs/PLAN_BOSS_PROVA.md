# Plano — Boss "Prova" (Desafio de Prova)

Implementa o modo **Prova** no submódulo *Desafio*, análogo ao **Trabalho** já existente.
Executar **um passo por vez**, com `npm run build` + testes ao fim de cada passo, para
não estourar limite de tokens.

## Exercícios da Prova (ordem fixa = bossId)

| bossId | Rótulo | Módulo      | id original    | dificuldade |
|:------:|:------:|-------------|----------------|:-----------:|
| 1      | L01    | afd-p1      | `59`           | prova ✓     |
| 2      | L02    | afd-p1      | `60`           | prova ✓     |
| 3      | L03    | afd-p2      | `61`           | prova ✓     |
| 4      | L04    | afd-min     | `15`           | prova ✓     |
| 5      | L05    | ap-pilha    | `'L19'`        | prova ✓     |
| 6      | L06    | ap-pilha    | `'L20'`        | prova ✓     |
| 7      | L07    | mt-recon    | `'MT_RECON_L18'` | prova ✓   |
| 8      | L08    | mt-trans    | `'MT_L25'`     | prova ✓     |

> `originalId` sempre no **formato nativo** de cada módulo: AFD/minimização = número;
> AP = `'L##'`; MT = `'MT_[RECON_]L##'`.

## Checklist de paridade com o Trabalho (o que NÃO pode faltar)

- [x] **Cores** por módulo no botão da grade + **dentro** da fase (rótulo).
- [x] **Legenda** (uma entrada por módulo presente na grade).
- [x] **Passar/voltar fase** (setas ◀/▶ navegam entre exercícios do Boss, atravessando módulos).
- [x] **Estrela separada** da fase original (grava em `boss-prova-${bossId}`, chave própria).

## Descobertas da arquitetura (validado no código)

- Módulos que **já** suportam modo forçado (usados pelo Trabalho): `afd-p1`, `afd-p2`, `ap-pilha`.
  Props: `forceLevelId, forceLevelLabel, progress, updateProgress, onBack, onForcedPrev, onForcedNext, forceLabelColor`.
- Módulos que **precisam** ganhar modo forçado:
  - `afd-min` (`AFDMinimizer` + `MinGame`) — dados síncronos (`EXERCISES`), id numérico, chave `afd-min-${id}`.
  - `mt-recon` (`MTReconPart1`) — nível **async** (`loadMTReconLevel`), id `MT_RECON_L##`, chave `mt-recon-${id}`.
  - `mt-trans` (`MTPart1`) — nível **async** (`loadMTLevel`), id `MT_L##`, chave `mt-trans-${id}`.
    `loadLevel` já aceita string id → dá pra carregar direto o nível forçado.
- `App.jsx` já tem o card **Prova** (`boss-prova`) em `SubmoduleSelection`, hoje `locked: true`.
- Total da Home ignora qualquer chave `boss-` (MainMenu.jsx) → Prova já fica fora do total, como o Trabalho.

## Decisão de design: generalizar o Boss

Em vez de duplicar `BossTrabalho`, extrair um **`BossMode`** genérico parametrizado por
`{ exercises, progressPrefix, badge, badgeBg, doneText }`. Cor/legenda vêm de um
**`MODULE_META` global** (afd-p1=verde, afd-p2=amarelo, ap-pilha=vermelho — idênticos ao
Trabalho hoje — + afd-min, mt-recon, mt-trans com cores novas). A legenda é derivada dos
módulos distintos presentes na lista. Assim o Trabalho continua **pixel-idêntico** e o
Prova reusa toda a lógica de navegação/proxy/progresso já testada.

## Passos (executar em ordem, build+test entre cada um)

- [x] **P1 — Minimização forçada.** `AFDMinimizer`: aceitar `forceLevelId/forceLevelLabel/
  onForcedPrev/onForcedNext/forceLabelColor/onBack` e montar `MinGame` direto no exercício.
  `MinGame`: aceitar `labelColor` e pintar o chip do rótulo. ✅
- [x] **P2 — MT Reconhecedora forçada.** `MTReconPart1`: `forceLevelId` (carrega async o nível
  e entra em GAME, pulando o menu), rótulo/cor/onBack forçados, setas usam `onForcedPrev/Next`,
  header usa `forceLabelColor`. Placeholder "Carregando exercício…" evita flash do menu. ✅
- [x] **P3 — MT Transdutora forçada.** Mesmo de P2 em `MTPart1`. ✅
- [x] **P4 — Núcleo do Boss.** `bossModules.js` (`MODULE_META`, `MODULE_COMPONENT`,
  `internalKey`, `legendFor`) + `BossMode.jsx` genérico (cor/legenda/título por prop). ✅
- [x] **P5 — Refatorar Trabalho.** `BossTrabalho.jsx` virou wrapper fino de `BossMode`;
  grade/cores/legenda idênticas; teste do Trabalho segue verde. ✅
- [x] **P6 — Dados da Prova.** `bossProvaExercises.js` + `bossProva.test.js` (6 testes,
  inclui carga async dos níveis MT). ✅
- [x] **P7 — BossProva + wiring.** `BossProva.jsx` + `App.jsx` (import lazy, `case
  'boss-prova'`, card desbloqueado com `earned/total`). ✅
- [x] **P8 — Build + testes.** Build limpo; suíte completa 1807/1807; +showToast repassado
  ao módulo filho no BossMode (corrige bug latente do afd-p2 no Boss). ✅

## Riscos / notas

- MT em modo forçado ainda dispara o prefetch de TODOS os níveis (mount effect). Funcional,
  só desperdício; aceitável (não regride nada). Otimizar depois se necessário.
- `afd-p2` no Boss não recebe `showToast` (herdado do Trabalho, já funciona assim). Fora de escopo.
