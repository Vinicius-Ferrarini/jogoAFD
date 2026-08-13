# 0006 — MT: carregamento de níveis via import() dinâmico por nível, não reescrita de metadados

**Status:** aceita

## Contexto

Cada arquivo `L*.js` de MT (Reconhecedora e Transdutora) mistura metadados
leves com `guidedLesson` pesado (storyboard frame a frame — chegou a 15.5MB de
código-fonte num único arquivo, L24). Import estático de todos os 18-24 níveis
fazia o chunk lazy do módulo pesar ~23MB raw, carregado por inteiro ao abrir a
tela, mesmo que o jogador só entrasse no L01. O AFD já tinha o mesmo problema
histórico, resolvido separando metadados leves (`LEVEL_IDS`) do payload pesado
(`AFD_LEVELS`) — ver `docs/OPTIMIZATION_PROGRESS.md` #2.

## Decisão

Para MT, **não** se replicou a solução do AFD (reescrever os arquivos
separando metadados de `guidedLesson`) — mesmo risco documentado no item #2 do
AFD, mas em arquivos ainda maiores. Em vez disso: cada nível carrega via
`import()` dinâmico individual, com cache em `Map`. `MTPart1.jsx`/
`MTReconPart1.jsx` fazem prefetch silencioso de todos os níveis em paralelo ao
abrir o menu (não bloqueia a tela), e `loadMTLevel()`/`loadMTReconLevel()`
nunca reimportam um nível já resolvido. Ver comentário completo em
`src/levels_data/mt/index.js` e `src/levels_data/mt-recon/index.js`.

## Alternativas consideradas

- **Reescrever os arquivos separando metadados/guidedLesson** (replicar a
  solução do AFD) — descartada por risco: exigiria reescrever manualmente
  arquivos multi-megabyte gerados/editados com cuidado, alto risco de quebrar
  dados de storyboard válidos sem ganho proporcional (o `import()` dinâmico já
  resolve o problema de bundle sem tocar no conteúdo).
- **Manter import estático e aceitar o bundle grande** — descartada, chunk de
  ~23MB no primeiro acesso à tela era inaceitável.

## Consequências / Trade-offs

- Cada nível é seu próprio chunk JS — troca de fase no menu depende de um
  `import()` resolvido (mitigado pelo prefetch em paralelo ao montar o menu;
  import a frio medido em ~405ms em Node puro, pior caso).
- Consumidores (app real e testes) usam sempre o mesmo `loadMTLevel`/
  `loadMTReconLevel`, garantindo que todos veem os dados já expandidos (ver
  ADR relacionada de compressão de `guidedLesson.steps`, registrada só como
  comentário de código em `expandGuidedSteps.js`, não como ADR própria).
- Testes precisaram trocar `Promise.all` por `for...of` sequencial ao
  carregar todos os níveis — disparar todos os imports em paralelo sob a
  suíte completa estourava o timeout de RPC do worker do Vitest.

## Referências

- Precedente/comparação: `docs/OPTIMIZATION_PROGRESS.md` #2
- Código: `src/levels_data/mt/index.js`, `src/levels_data/mt-recon/index.js`
