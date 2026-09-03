// ─── buildTransducerSim: gera os frames "passo a passo" de uma simulação ──────
// Dado o grafo FINAL da MT (já revelado) e uma palavra, devolve um array de
// frames de Modo Aula — UM por transição aplicada — no mesmo formato dos níveis
// L3–L9 (gerados offline): grafo congelado + `tape`/`head`/`activeNode` do passo,
// e `status: 'ACCEPTED'|'REJECTED'` no último.
//
// Serve para substituir frames "resumão" (que só mostram o veredito e a fita
// final, sem animar cada movimento do cabeçote) — o problema corrigido no L01
// e presente ainda no L02 e no L10.
//
// A fita é montada igual à do motor real (`simulateTM`): `leadingBlanks` brancos
// + [startMarker] + palavra + `trailingBlanks` brancos, com o cabeçote sobre o
// marcador (ou 1º símbolo). O passo a passo reproduz `simulateTM` célula a
// célula, então os frames batem exatamente com o motor.

const BLANK = '□';
const DIR = { R: 'DIREITA', L: 'ESQUERDA', S: 'no lugar' };
const show = (s) => (s === '' || s == null ? BLANK : s);

/**
 * @param {string} word            palavra de entrada (sem o startMarker)
 * @param {object} opts
 * @param {Array}  opts.nodes         nós do grafo final (com isInitial/isFinal)
 * @param {Array}  opts.transitions   arestas do grafo final ({from,to,read,write,move})
 * @param {string|null} [opts.startMarker=null]  símbolo escrito antes da palavra
 * @param {number} [opts.leadingBlanks=1]   brancos à esquerda da fita inicial
 * @param {number} [opts.trailingBlanks=1]  brancos à direita da fita inicial
 * @param {number} [opts.maxSteps=4000]     trava de segurança contra loop
 * @param {string} [opts.introMessage]      texto do 1º frame (posição inicial)
 * @param {string} [opts.introMood='explicando']
 * @param {string|null} [opts.acceptedTapeLabel=null]  rótulo da fita no frame de
 *        aceitação; se null, calcula tirando brancos das bordas (e o marcador).
 * @returns {Array} frames de guidedLesson.steps
 */
export function buildTransducerSim(word, {
  nodes,
  transitions,
  startMarker = null,
  leadingBlanks = 1,
  trailingBlanks = 1,
  maxSteps = 4000,
  introMessage,
  introMood = 'explicando',
  acceptedTapeLabel = null,
}) {
  const frozen = () => ({ nodes, transitions });
  const initial = nodes.find((n) => n.isInitial);
  if (!initial) throw new Error('buildTransducerSim: grafo sem estado inicial');

  const tape = [
    ...Array(leadingBlanks).fill(BLANK),
    ...(startMarker != null ? [startMarker] : []),
    ...(word === '' ? [] : word.split('')),
    ...Array(trailingBlanks).fill(BLANK),
  ];
  let head = leadingBlanks; // sobre o marcador (ou 1º símbolo da palavra)
  let stateId = initial.id;

  const frames = [{
    prof: {
      message: introMessage
        ?? `Vamos simular "${word || 'λ'}" transição por transição. Começamos no estado inicial ${stateId}.`,
      mood: introMood,
    },
    stateUpdate: frozen(),
    simulateWord: word, tape: tape.slice(), head, activeNode: stateId,
  }];

  let steps = 0;
  for (; steps < maxSteps; steps++) {
    const read = tape[head] ?? BLANK;
    const tr = transitions.find((t) => t.from === stateId && (t.read === '' ? BLANK : t.read) === read);
    if (!tr) break; // travou — sem transição para o símbolo lido
    const wrote = tr.write === '' ? BLANK : tr.write;
    const fromState = stateId;
    tape[head] = wrote;
    stateId = tr.to;
    head += tr.move === 'R' ? 1 : tr.move === 'L' ? -1 : 0;
    if (head < 0) { tape.unshift(BLANK); head = 0; }
    if (head >= tape.length) tape.push(BLANK);

    const verb = show(read) === show(wrote) ? `manteve '${show(read)}'` : `escreveu '${show(wrote)}'`;
    frames.push({
      prof: {
        message: `${fromState} leu '${show(read)}', ${verb} e moveu à ${DIR[tr.move] ?? tr.move}. Agora em ${stateId}.`,
        mood: 'explicando',
      },
      stateUpdate: frozen(),
      simulateWord: word, tape: tape.slice(), head, activeNode: stateId,
    });
  }

  const last = frames[frames.length - 1];
  const finalState = nodes.find((n) => n.id === last.activeNode);
  if (finalState?.isFinal) {
    const label = acceptedTapeLabel ?? trimTape(last.tape, startMarker);
    last.prof = {
      message: `Chegamos em ${last.activeNode} (estado final). A fita ficou "${label}". Palavra ACEITA! ✓`,
      mood: 'feliz',
    };
    last.status = 'ACCEPTED';
  } else {
    last.prof = {
      message: `A máquina travou em ${last.activeNode}: não existe transição para o símbolo lido. Palavra REJEITADA.`,
      mood: 'triste',
    };
    last.status = 'REJECTED';
  }
  return frames;
}

function trimTape(tape, marker) {
  let lo = 0;
  let hi = tape.length - 1;
  while (lo <= hi && tape[lo] === BLANK) lo++;
  while (hi >= lo && tape[hi] === BLANK) hi--;
  if (marker != null && tape[lo] === marker) lo++;
  return tape.slice(lo, hi + 1).join('');
}
