# Telemetria de Pesquisa do TuringLab — Fases 2 → 6

> **Este documento substitui as versões anteriores** (`telemetria_turinglab.md`
> original e `PROMPT_fase3-6_consentimento_feedback.md`). Ele é a fonte de verdade
> viva: a seção **STATUS ATUAL** deve ser atualizada ao final de cada fase para que,
> em caso de interrupção (contexto estourado, erro, retomada em outra sessão), dê
> para continuar exatamente de onde parou.

---

## STATUS ATUAL  *(atualizar a cada fase)*

- [x] **Fase 0** — base: `src/services/firebase.js`, `src/services/telemetry.js`,
      hook `logEvent` em `updateProgress` (App.jsx). Concluída e validada (E2E OK).
- [x] **Fase 1** — tempo por fase, piloto em `AFDPart1.jsx`. Concluída, validada e
      aprovada nos 3 pontos (dificuldade crua do `LEVEL_DIFFICULTY`; 3 `fim_fase`
      por nível mantidos; `tempo_gasto_segundos` inteiro). `novo_recorde` incluído.
- [x] **Ajuste Fase 1** — campo `marco` nos 3 `fim_fase`
      (`descoberta_palavra` | `validacao` | `tabela_formal`). Feito junto da Fase 2.
- [x] **Fase 2** — tentativas + tipo de erro em `AFDPart1.jsx`. Concluída, validada.
- [x] **Fase 3** — consentimento (gate de toda a telemetria). Concluída (build/test OK;
      teste manual no browser pendente de confirmação do usuário).
- [~] **Fase 4** — tutorial. **IMPLEMENTADA — aguardando revisão.**
- [x] **Fase 5** — replicar para os demais módulos: **todos os 5 concluídos.**
  - [x] **5a** `AFDPart2.jsx` — concluída.
  - [x] **5b** `AFDMinimizer.jsx` — completo: inicio_fase + fim_fase (2 marcos) +
        tutorial + tentativa/tipo_erro (via `onAttempt` nos 5 passos avaliados).
  - [x] **5c** `APPart1.jsx` — concluída.
  - [x] **5d** `MTPart1.jsx` — completo: inicio_fase + fim_fase (2 marcos) +
        tutorial + tentativa/tipo_erro (no Validar).
  - [x] **5e** `MTReconPart1.jsx` — completo: inicio_fase + fim_fase (3 marcos,
        modelo AP) + tutorial + tentativa/tipo_erro (palavra em LANGUAGE + Validar).
- [x] **Fase 6** — balão de feedback (satisfação). **IMPLEMENTADA — aguardando revisão.**

> **🎉 Todas as fases (0 → 6) implementadas.** Pendências de revisão do usuário e
> teste manual no browser / E2E do envio de feedback (grava em Firestore real).

### Notas de implementação / decisões tomadas
- **StrictMode**: `logEvent` do `fim_fase` fica FORA do updater do `setProgress`
  em `App.jsx` (o updater roda 2x em dev). `updateProgress(moduleId, stars, extras)`
  calcula `novo_recorde` via `progressRef` e espalha `extras` do módulo.
- **`dificuldade`** = valor cru de `LEVEL_DIFFICULTY[id]` em `src/levels.js`
  (`easy|medium|hard|impossible|trabalho|prova`), gravado com `?? null`.
- **`tempo_gasto_segundos`** = inteiro, cumulativo desde `phaseStartRef` (setado no
  `loadLevel`, junto do evento `inicio_fase`).
- **Fase 2 — `tipo_erro`**: REUSA `validateAFDPure` (já exportada de
  `src/modules/afd/hooks/useAFDGraph.js` e coberta por `validateAFD.test.js`).
  `validateAFDSilent` **não** foi alterada. Códigos de motivo (canônicos do projeto):
  `no_initial | no_final | empty_symbol | invalid_symbol | nondeterministic |
  word_mismatch | language_mismatch`. (Se o pesquisador preferir rótulos em PT-BR,
  é só um mapa — decisão pendente na revisão da Fase 2.)
- **Script de validação E2E**: `scripts/validate_telemetry.js`
  (`npx vite-node scripts/validate_telemetry.js`) grava eventos de teste marcados
  por `nivel_id: "__validacao_e2e__"` — dá pra apagar no console do Firebase.
- **`.env.local`** (não versionado, `*.local`): 6 vars `VITE_FIREBASE_*`.
- **Lint pré-existente**: o repo já tinha ~37 erros de lint (AFDPart1.jsx, testes,
  CanvasArea.jsx) antes da telemetria — fora de escopo, tratar como backlog.
- **Fase 3 — consentimento**: `hasConsent()`/`grantConsent()` em `telemetry.js`
  (chave `turinglab_consent_accepted`); `logEvent` retorna cedo se `!hasConsent()`.
  `ConsentGate.jsx` é um **banner "cookie" no rodapé** (barra fina escura, texto
  branco, botão "Aceito" + "✕"), renderizado como **overlay NÃO bloqueante** via
  `createPortal(document.body)` — o jogo segue jogável por trás. Em `App.jsx` a tela
  vira `screenNode` e o retorno é `<>{screenNode}{!consented && <ConsentGate/>}</>`.
  Só "Aceito" chama `grantConsent()`; "✕" só oculta na sessão (`dismissed` local, NÃO
  é consentimento, volta no reload). Estado `consented=useState(hasConsent())`.
- **Fase 4 — tutorial ("uso de ajuda")**: `tutorialOpensRef` + `errorSinceTutorialRef`
  (reset no `loadLevel`). Helper `logTutorialOpen(origem)` unifica dica e aula guiada:
  1ª abertura da fase = `tutorial_aberto`, demais = `tutorial_reaberto`, com
  `origem: "dica" | "aula_guiada"`. Fontes: `handleProfessorClick` (só na abertura,
  `isOpening = !professorMessage`) e `onStartLesson` no GameHeader.
  `phaseExtras`: `assistiu_tutorial` = abriu ajuda em algum momento; **refinado**
  `acertou_apos_tutorial` = abriu ajuda E sucesso veio SEM erro desde a última
  abertura (`errorSinceTutorialRef` vira true em tentativa 'wrong' ou validação falha).
- **Fase 5a — afd-p2**: instrumentado em `components/ExerciseScreen.jsx` (NÃO em
  `useP2Answer.js`, que é testado em ambiente node — evita puxar firebase pro teste).
  P2 não usa o `updateProgress` do App.jsx (tem `updateP2Progress` próprio, localStorage
  `turinglab_progress_p2`). Eventos via `useEffect` reagindo a `attempts`/`result` do
  hook: `inicio_fase` (mount, `initedRef` p/ StrictMode), `tentativa` (cada avaliação),
  `fim_fase` no acerto (P2 = 1 fim_fase/nível, estrelas 3/2/1 por nº tentativas, SEM
  `marco`). `novo_recorde` via `starsBeforeRef` capturado no wrapper `handleCheckTelemetry`.
  Ajuda: só a dica do professor (`openHelp`, origem 'dica'); P2 não tem aula guiada.
- **Fase 5b — afd-min** (completo): instrumentado em `MinGame.jsx` (usa o
  `updateProgress` do App.jsx, moduleId `afd-min-${ex.id}`; dificuldade = `exercise.level`).
  `inicio_fase` via `useEffect([exercise.id])` com `lastInicioRef` (MinGame NÃO remonta
  por exercício). `fim_fase` nos 2 pontos: `finishPropagation` → marco `propagacao` (2★),
  `handleDrawSolved` → marco `desenho_minimo` (3★), via `phaseExtras`. Tutorial: dica
  (ProfessorMaurilio, origem 'dica') + Aula (MinLessonOverlay, origem 'aula_guiada').
  `tentativa`/`tipo_erro`: `MinGame` passa `onAttempt(resultado, tipo_erro)` aos 5 passos
  avaliados, chamado em cada gate do juiz invisível — Step1 `validateTransitionTable`
  (delta_incorreta), Step2 `validateGrid` (grade_incorreta), Step3 `validateTrivial`
  (trivial_incorreta), Step4 `validateInspectorTable` (tabela_par_incorreta) +
  `validatePairRow` (decisao_linha_incorreta), MinDrawStep `validateDrawnMinimized`
  (`res.code`). `onAttempt` incrementa `attemptsRef` e seta `errorSinceTutorialRef` no erro,
  então `numero_tentativas` e `acertou_apos_tutorial` são reais (não coincidem mais com
  `assistiu_tutorial`).
- **Fase 5c — ap**: `APPart1.jsx` (orquestrador único, igual AFDPart1; usa o
  `updateProgress` do App.jsx, moduleId `ap-${level.id}`; dificuldade = `level.level`).
  3 marcos: `descoberta_palavra` (★1, testWord), `validacao` (★2, validate),
  `tabela_formal` (★3, onFormalDone). `inicio_fase`+reset no `loadLevel`. `tentativa`
  nos testes de palavra em modo LANGUAGE + na falha de `validate` (`tipo_erro = res.reason`
  do `validatePDA`). PULADO: testes de palavra em modo DRAWING (exploração do próprio AP,
  como os testes de palavra do P2). Tutorial: dica (onProfClick, 'dica') + Aula (startLesson,
  'aula_guiada'). `errorSinceTutorialRef` em 'wrong'/'validacao_falhou'.
- **Fase 5d — mt-trans**: `MTPart1.jsx` (orquestrador único; usa o `updateProgress`
  do App.jsx, moduleId `mt-trans-${level.id}`; dificuldade = `level.level`
  — `easy|medium|hard`). Modelo de estrelas ≠ AFD/AP: a MT Transdutora dá as **3
  estrelas de uma vez** no Validar (`fuzzTMTransducer`) e só depois abre a Descrição
  Formal → **2 marcos**: `validacao` (★★★, no `validate`, sucesso do fuzz) e
  `tabela_formal` (no `concludePhase`, 7-tupla concluída — reenvia stars=3 só para
  registrar o fim_fase com o tempo total; `novo_recorde`=false). `inicio_fase`+reset
  no `loadLevel`. `tentativa` só no **Validar** (única resposta avaliada): helper local
  `failAttempt(tipo_erro)` incrementa `attemptsRef`, seta `errorSinceTutorialRef` e loga
  `resultado: 'validacao_falhou'` em cada saída de falha — estruturais
  `no_initial | no_final | nondeterministic` (mesmo vocabulário do AFD) e do fuzz
  `loop | rejected`. O sucesso não gera `tentativa` própria (fica no fim_fase), logo
  `numero_tentativas` = nº de Validar que falharam. Tutorial: dica (`handleProfClick`,
  só na abertura, `isOpening = !prof.message`, origem 'dica') + Aula (`startLesson`,
  origem 'aula_guiada'). PULADO (exploração, não avaliada): teste de palavra nas duas
  abas — Linguagem (gabarito estático `level.validate`) e Desenho (simulador do grafo
  do aluno).
- **Fase 5e — mt-recon**: `MTReconPart1.jsx` (orquestrador único; `updateProgress` do
  App.jsx, moduleId `mt-recon-${level.id}`; dificuldade = `level.level`). Modelo de
  estrelas = **igual ao AP** (3 marcos, ★1/★2/★3): `descoberta_palavra` (★1, a menor
  palavra que destrava o tabuleiro, em `testWord`), `validacao` (★2, `fuzzTMRecognizer`
  OK, em `validate`), `tabela_formal` (★3, `concludePhase`). `inicio_fase`+reset no
  `loadLevel`. `tentativa`: (a) testes de palavra em modo **LANGUAGE** (resposta
  avaliada contra o gabarito — `resultado` shortest/correct/wrong, tanto antes do
  destrave quanto depois, com dedupe no topo do branch) e (b) no **Validar** (helper
  `failAttempt`): estruturais `no_initial | no_final | nondeterministic` + do fuzz
  `loop | rejected | wrongly-accepted`. PULADO (exploração): modo **DRAWING** (simulador
  do grafo do aluno), como no AP. Tutorial: dica (`handleProfClick`, `isOpening =
  !prof.message`, origem 'dica') + Aula (`startLesson`, 'aula_guiada').
- **Fase 6 — pesquisa de satisfação (MÚLTIPLOS envios)**: `submitFeedback({nota, comentario})`
  em `telemetry.js` grava com `setDoc` um **doc NOVO e numerado** em
  `/sessoes/{uid}/pesquisa_inicial/avaliacao_{N}` (N = `getFeedbackCount()+1`, contador local
  `turinglab_feedback_count`, avançado só após o create dar certo). Cada envio é um create
  independente → **não sobrescreve os anteriores** e o jogador pode reenviar quantas vezes
  quiser (avaliação 1, 2, 3, …). Campos: `nota`, `comentario`, `indice`, `timestamp`.
  **⚠️ REQUER que a regra do Firestore permita create em `pesquisa_inicial/{qualquer doc}`,
  não só `/resposta`** — se estiver travada no id `resposta`, os `avaliacao_N` são negados
  (o usuário ajusta no Console; infra fora do meu escopo). Helpers no `telemetry.js`:
  `hasFeedbackShownOnce`/`markFeedbackShownOnce` (popup 1x), `hasFeedbackResponded`/
  `markFeedbackResponded` (check do FAB = "já enviou ≥1"), `getFeedbackCount`. `FeedbackButton.jsx`
  virou `<button>` (era `<a href>` p/ Google Forms) que chama `onOpen`; **`RepoButton` intocado**;
  o ✓ só indica "já enviou" e clicar sempre reabre o formulário p/ enviar outra. Modal
  `FeedbackModal.jsx` (+ `.css`): ★1-5 + comentário; **montado só quando aberto** (`{feedbackOpen && <…>}`)
  → nasce zerado sem efeito de reset. Após enviar, mostra "Avaliação N enviada!" com
  **"Enviar outra avaliação"** (volta ao formulário, próximo = N+1) + "Fechar". **MUDANÇA vs.
  versão anterior:** o lock de envio único + tela "obrigado"-só foi REMOVIDO a pedido do
  usuário (agora reenvia gravando avaliações numeradas separadas; a decisão anterior
  "só obrigado no reclique" foi revertida). Popup automático em `App.jsx` (`maybeAutoFeedback`):
  dispara ao **SAIR
  de uma fase** (`screen==='GAME'` → transição), 1x só, e só se `hasConsent()` **E**
  `Object.keys(progress) ≥ 1` (fase concluída). Pontos de disparo: `goHome`, `goModules`
  **e `goSubmodule`**. **Decisões (as 3 primeiras aprovadas pelo usuário):**
  (1) `submitFeedback` é **gated por consentimento** igual ao `logEvent` (feedback também
  é dado de pesquisa); sem consentimento o modal mostra aviso e não grava. (2) O gatilho
  **não** inclui `loadGame` (entrar numa fase contraria "nunca no meio de uma fase") —
  só dispara ao SAIR. (3) Nota = **estrelas** (não emoji). (4) `goSubmodule` foi incluído
  nos pontos de disparo porque afd/mt/min saem da fase para a tela de SUBMÓDULOS (não p/
  MODULES/HOME); sem isso, só o AP (que volta via `goModules`) acionaria o popup —
  correção sinalizada ao usuário no fechamento da Fase 6.
- **Fase 3 (banner) — teste E2E**: `e2e/consent_gate.spec.js` (Playwright) cobre
  aparecer sem consentimento / aceitar grava+some / reload não reaparece / ✕ oculta
  sem consentir (volta no reload). Roda com `npm run test:e2e` (não entra no
  `npm run test`, que é só vitest). Banner é não-bloqueante → não quebra specs existentes.
- **Fase 6 — teste E2E**: `e2e/feedback_modal.spec.js` (7 casos, mesmo padrão do consent):
  FAB abre o modal; estrela habilita "Enviar avaliação"; ✕ fecha; sem consentimento → aviso
  e segue no formulário (não marca respondido); **já enviou antes → FAB "enviado" + reabrir
  mostra o FORMULÁRIO de novo** (nota "esta será a de número N", pode reenviar); popup
  automático dispara 1x ao sair de uma fase (com consentimento + fase concluída) e NÃO
  dispara sem fase concluída. Foco em UI/UX — o envio real ao Firestore é validado à parte
  no navegador. Suíte e2e completa: **36 testes passando**.
- **Limpeza dos docs de teste `__validacao_e2e__`**: NÃO é possível pelo cliente. As regras
  são create-only, isoladas por uid e negam leitura; e cada rodada do `validate_telemetry.js`
  (vite-node, sem persistência de Auth) criou um uid anônimo novo → os docs ficaram
  espalhados por vários `/sessoes/{uid}/eventos`. Só o **Admin SDK** (conta de serviço, que
  ignora as regras + collection-group query) alcança tudo. Script pronto:
  `scripts/cleanup_e2e_telemetry.js` (`npm run cleanup:e2e`); requer `npm i -D firebase-admin`
  + `GOOGLE_APPLICATION_CREDENTIALS` apontando p/ a chave da conta de serviço. Suporta
  `--dry-run`. Alternativa manual: apagar pelo Firebase Console (collection-group query em
  `eventos` filtrando `nivel_id == "__validacao_e2e__"`).

---

## Regras gerais (valem em TODAS as fases)

1. **Uma fase por vez.** Ao final: `npm run lint && npm run build && npm run test`
   e **parar para revisão** antes da próxima. Não emendar fases.
2. **Nunca quebrar os testes existentes** (1655, todos devem continuar passando).
   Se uma fase exigir mudar comportamento testado, parar e avisar.
3. **Telemetria nunca trava o jogo**: toda gravação em `try/catch`, sem propagar
   erro, sem `await` bloqueando a UI.
4. **Não adicionar Google Analytics nem `measurementId`.**
5. **Reusar padrões existentes** (`useState`/`useCallback`/hooks de `src/modules/*`),
   não inventar libs de state/roteamento.
6. Infra do Firebase já 100% configurada (projeto `jogoafd`, Firestore
   `southamerica-east1`, Auth anônimo, regras create-only isoladas por `uid`) — não mexer.

---

## Esquema de dados alvo (Firestore)

```
/sessoes/{uid}                              (uid = Firebase Auth anônimo)
    criado_em

/sessoes/{uid}/eventos/{eventoId}           (1 documento novo por evento)
    tipo_evento: "inicio_fase" | "tentativa" | "fim_fase"
               | "tutorial_aberto" | "tutorial_reaberto" | "consentimento_aceito"
    origem: string            (tutorial_aberto/reaberto: "dica" | "aula_guiada")
    modulo: string            (ex.: "afd-p1", "afd-p2", "afd-min", "ap", "mt-trans", "mt-recon")
    nivel_id: string|number   (currentLevel.id)
    dificuldade: string       (LEVEL_DIFFICULTY[id], quando aplicável)
    marco: string             (fim_fase — vocabulário unificado, sem sufixo de módulo:
                               "descoberta_palavra"|"validacao"|"tabela_formal";
                               afd-min usa "propagacao"|"desenho_minimo")
    resultado: string         (tentativa: "shortest"|"correct"|"wrong"|"validacao_falhou")
    tipo_erro: string         (tentativa que falhou; reason estruturado do validador:
                               afd → validateAFDPure; ap → res.reason do validatePDA;
                               afd-min → delta_incorreta|grade_incorreta|trivial_incorreta|
                               tabela_par_incorreta|decisao_linha_incorreta|<code do desenho>;
                               mt-trans → no_initial|no_final|nondeterministic (estruturais)
                               | loop|rejected (fuzzTMTransducer);
                               mt-recon → no_initial|no_final|nondeterministic (estruturais)
                               | loop|rejected|wrongly-accepted (fuzzTMRecognizer))
    tempo_gasto_segundos: number
    numero_tentativas: number
    estrelas_obtidas: number
    novo_recorde: boolean
    assistiu_tutorial: boolean
    acertou_apos_tutorial: boolean
    timestamp: serverTimestamp()

/sessoes/{uid}/pesquisa_inicial/avaliacao_{N}   (Fase 6 — VÁRIOS envios, 1 doc por avaliação)
    nota: number (1-5)
    comentario: string (opcional)
    indice: number (1, 2, 3, … — N do doc, via contador local turinglab_feedback_count)
    timestamp: serverTimestamp()
    // Cada reenvio cria um doc NOVO (avaliacao_1, avaliacao_2, …) — nunca sobrescreve.
    // Compatível com regra create-only (cada envio é um create). REQUER que a regra
    // permita create em pesquisa_inicial/{qualquer doc}, não só /resposta.
```

---

## AJUSTE PEQUENO NA FASE 1 (feito junto da Fase 2)

Adicionar campo `marco` nos 3 eventos `fim_fase` por nível:
`"descoberta_palavra"` | `"validacao"` | `"tabela_formal"`, correspondendo aos 3
pontos `updateProgress(currentLevel.id, 1|2|3)` em `AFDPart1.jsx`. Deixa a análise e
a descrição da metodologia (artigo) mais claras. Mudança isolada — vai no commit da Fase 2.

---

## FASE 2 — Tentativas e tipos de erro

**Objetivo:** capturar toda tentativa (não só a que dá certo), com o tipo de erro
quando falha, ainda em `AFDPart1.jsx`.

Pontos de entrada já existentes (procurar, não recriar):
- **`handleTestWord`**: já classifica cada tentativa em
  `status: 'shortest' | 'correct' | 'wrong'`. Logar
  `{ tipo_evento: 'tentativa', modulo: 'afd-p1', nivel_id, resultado: status }` a cada
  tentativa, incrementando um contador local (`numero_tentativas`) por fase, usando o
  padrão de ref da Fase 1.
- **`validateAFDSilent`** (dentro de `validateAFD`): quando retorna falso, obter o
  motivo estruturado da falha. **RESOLVIDO**: reusar `validateAFDPure` (gêmea pura já
  exportada) → `tipo_erro`. Não reescrever `validateAFDSilent`.

Lint + build + test, e parar para revisão.

---

## FASE 3 — Consentimento (gate de toda a telemetria)

**Objetivo:** nenhum dado gravado antes do jogador aceitar explicitamente, uma vez
por navegador.

`src/services/telemetry.js` — adicionar:
```js
export function hasConsent() {
  return typeof window !== 'undefined'
    && localStorage.getItem('turinglab_consent_accepted') === 'true';
}

export async function grantConsent() {
  localStorage.setItem('turinglab_consent_accepted', 'true');
  try {
    const uid = await ensureSession();
    await addDoc(collection(db, "sessoes", uid, "eventos"), {
      tipo_evento: 'consentimento_aceito',
      timestamp: serverTimestamp(),
    });
  } catch (erro) {
    console.warn("[telemetry] falhou ao gravar consentimento:", erro);
  }
}
```
E `logEvent` passa a começar com:
```js
export async function logEvent(evento) {
  if (!hasConsent()) return; // nunca coleta nada antes do consentimento
  try {
    ...
```

**UI** — novo componente (ex.: `src/components/ConsentGate.jsx`):
- Renderizado no LUGAR da `MainMenu` (substitui, não sobrepõe) quando `!hasConsent()`.
  Ao aceitar, chama `grantConsent()` e atualiza estado local em `App.jsx` (re-render sem reload).
- Texto sucinto (~2-3 frases): coleta anônima de uso (tempo/dificuldade) p/ melhorar
  o jogo; sem dados pessoais; ao continuar, concorda.
- Botão explícito de concordância ("Concordar e Começar a Aventura"). Nada de clique implícito.
- Seguir o estilo existente (neo-brutalismo/gibi, paleta/fontes do `MainMenu.css`).

Teste: limpar localStorage → tela de consentimento antes do menu → aceitar libera →
reabrir não mostra de novo. Confirmar `consentimento_aceito` no Firestore.

Lint + build + test, e parar para revisão.

---

## FASE 4 — Tutorial

**Objetivo:** registrar se o aluno abriu o tutorial/dica, quantas vezes reabriu, e se
acertou de primeira depois de ter visto — piloto em `AFDPart1.jsx`.

- Em `handleProfessorClick`, logar `tutorial_aberto` na primeira abertura da fase, e
  `tutorial_reaberto` nas seguintes (contador local resetado a cada `inicio_fase`).
- Incluir nos `fim_fase` os campos `assistiu_tutorial` (boolean) e
  `acertou_apos_tutorial` (boolean).

Lint + build + test, e parar para revisão.

---

## FASE 5 — Replicar para os demais módulos

Aplicar o padrão validado em `AFDPart1.jsx` (Fases 1, 2 e 4) nos módulos restantes,
**um por vez**, cada um com seu próprio lint+build+test+parada:

- **5a.** `src/modules/afd/AFDPart2.jsx`
- **5b.** `src/modules/afd/AFDMinimizer.jsx`
- **5c.** `src/modules/ap/APPart1.jsx`
- **5d.** `src/modules/mt/MTPart1.jsx`
- **5e.** `src/modules/mt-recon/MTReconPart1.jsx`

Ler o código de cada módulo antes de instrumentar — não assumir que a estrutura de
`AFDPart1.jsx` se copia 1:1. Manter os mesmos nomes de campos do esquema, trocando
apenas o valor de `modulo`.

---

## FASE 6 — Balão de feedback (satisfação: 1x obrigatória + sempre disponível)

> **⚠️ PARCIALMENTE SUPERADO** — o "documento único / setDoc ID fixo / só uma vez"
> descrito abaixo foi o plano ORIGINAL. A pedido do usuário, a Fase 6 final permite
> **MÚLTIPLOS envios** (docs numerados `avaliacao_N`, cada reenvio preservado). A
> implementação real está descrita em **STATUS ATUAL → "Fase 6 — pesquisa de satisfação
> (MÚLTIPLOS envios)"** e no esquema `pesquisa_inicial/avaliacao_{N}`. Leia esta seção
> só como histórico do desenho inicial.

**Objetivo:** reaproveitar `src/components/FeedbackButton.jsx`, trocando "link externo
pro Google Forms" por "modal interno curto que salva a resposta no Firestore, vinculada
à mesma sessão anônima".

**Esquema** (documento único por sessão, não subcoleção):
```
/sessoes/{uid}/pesquisa_inicial/resposta      ← ID FIXO, documento único
    nota: number (1-5)
    comentario: string (opcional)
    timestamp: serverTimestamp()
```
Usar `setDoc` (não `addDoc`) com esse ID fixo, **sem** `{ merge: true }`. Como a regra
permite create mas nega update, a 2ª gravação falha sozinha no servidor → "só uma vez"
garantido também no servidor, sem reabrir as regras.

**Duas flags no localStorage (propositalmente separadas):**
- `turinglab_feedback_shown_once`: marcada na 1ª vez que o modal aparece
  automaticamente (respondido ou não) — garante que o popup forçado nunca reaparece sozinho.
- `turinglab_feedback_respondido`: marcada só quando o jogador ENVIA — controla o
  "check" visual no FAB.

O FAB **não** consulta o servidor (leitura negada por regra) — estado visual depende
só da flag local, igual ao resto do progresso.

**Comportamento:**
- Gatilho do popup automático (uma vez só, forçado): 1ª vez que o jogador sai de GAME
  para MODULES/HOME, ou avança de fase — nos pontos onde `App.jsx` já centraliza
  `goHome`, `goModules`, `loadGame`. Nunca no meio de uma fase. Só dispara se
  `!turinglab_feedback_shown_once` **E** já houver ≥1 fase completada em `progress`.
- Fechar sem responder → seta só `turinglab_feedback_shown_once`.
- Responder e enviar → grava no Firestore, seta as duas flags. FAB indica "já
  respondido" (check + opacidade), mas segue clicável. **Se em dúvida sobre o que fazer
  ao reclicar depois de já respondido (reabrir p/ reenviar vs. só "obrigado"), parar e perguntar.**
- Modal curto: 1 nota (estrelas/emoji 1-5) + 1 comentário livre opcional. Não é o IAQJEd completo.
- Manter `FeedbackButton.jsx` na mesma posição/estilo, só trocando `<a href target=_blank>`
  por `<button onClick>` que abre o modal. **Não mexer no `RepoButton`.**

Lint + build + test, e parar para revisão.

---

## Extensões futuras (registradas, fora do escopo atual)

- **Exploração livre (não avaliada)** — deixada de fora de `tentativa` de propósito,
  por ser investigação e não resposta avaliada; candidata a um evento próprio no futuro:
  - **afd-p2**: testes de palavra do simulador (`handleAddSimWord`).
  - **ap**: testes de palavra em modo DRAWING (contra o AP desenhado pelo aluno).
  - **mt-trans**: testes de palavra das abas Linguagem (gabarito estático) e Desenho
    (simulador do grafo do aluno) — ambos investigação, não resposta avaliada.
  - **mt-recon**: testes de palavra em modo DRAWING (contra a MT desenhada pelo aluno).
    Obs.: em mt-recon o modo LANGUAGE **é** avaliado (gabarito) e já é logado.

## Fora de escopo (prompt separado quando chegarmos lá)

Pré-teste/pós-teste de conhecimento e o IAQJEd/MEEGA+ completo ficam para a etapa de
aplicação formal e controlada com uma turma real, fora do jogo em uso livre.
