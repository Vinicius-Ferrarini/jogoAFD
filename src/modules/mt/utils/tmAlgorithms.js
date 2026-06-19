// ─── Motor da Máquina de Turing ──────────────────────────────────────────────
// Segue a convenção JFLAP: read/write '' (string vazia) = símbolo branco (□).
// graph = {
//   states:      [{ id, name, x, y, isInitial, isFinal }],
//   transitions: [{ from, to, read, write, move: 'R'|'L'|'S' }],
// }

export const BLANK = '□';
export const MOVE_DELTA = { R: 1, L: -1, S: 0 };

// ── Simulador principal ───────────────────────────────────────────────────────
export function simulateTM(graph, inputWord, maxSteps = 2000) {
  const stateMap = new Map((graph.states ?? []).map(s => [s.id, s]));
  const initial  = (graph.states ?? []).find(s => s.isInitial);
  if (!initial) return { status: 'REJECTED', tape: [BLANK], finalState: null, steps: 0 };

  // Fita: dois brancos de padding + palavra + dois brancos de padding
  const tape = [BLANK, BLANK, ...(inputWord === '' ? [] : inputWord.split('')), BLANK, BLANK];
  let head    = 2;           // índice do primeiro caractere da palavra (ou branco se vazia)
  let stateId = initial.id;
  let steps   = 0;

  while (steps < maxSteps) {
    const symbol = tape[head] ?? BLANK;

    // Busca transição determinística (primeira que bate)
    const tr = (graph.transitions ?? []).find(t => {
      const r = t.read === '' ? BLANK : t.read;
      return t.from === stateId && r === symbol;
    });

    if (!tr) break; // halted — nenhuma transição disponível

    tape[head] = tr.write === '' ? BLANK : tr.write;
    stateId    = tr.to;
    head      += MOVE_DELTA[tr.move] ?? 0;

    // Extensão infinita da fita
    if (head < 0)              { tape.unshift(BLANK); head = 0; }
    if (head >= tape.length)   tape.push(BLANK);

    steps++;
  }

  const finalState = stateMap.get(stateId) ?? null;
  const status = steps >= maxSteps
    ? 'LOOP'
    : finalState?.isFinal
    ? 'ACCEPTED'
    : 'REJECTED';

  return { status, tape: [...tape], finalState, steps };
}

// ── Validador de MT Transdutora ───────────────────────────────────────────────
// Recebe a MT do aluno e o objeto de nível.
// Para cada testWord, compara a fita resultante (sem □ das bordas) com level.validate(word).
export function fuzzTMTransducer(graph, level) {
  // Remove a palavra vazia da bateria quando o nível pede (skipEmptyWord)
  let words = level.testWords ?? [];
  if (level.skipEmptyWord) words = words.filter(w => w !== '');

  for (const word of words) {
    const { status, tape } = simulateTM(graph, word);

    if (status === 'LOOP') {
      return { ok: false, counterexample: word, reason: 'loop' };
    }
    if (status === 'REJECTED') {
      return { ok: false, counterexample: word, reason: 'rejected' };
    }

    // Strip □ das bordas
    let lo = 0, hi = tape.length - 1;
    while (lo <= hi && tape[lo] === BLANK) lo++;
    while (hi >= lo && tape[hi] === BLANK) hi--;
    const output   = tape.slice(lo, hi + 1).join('');
    const expected = level.validate(word);

    if (output !== expected) {
      return { ok: false, counterexample: word, reason: 'wrong-output', got: output, expected };
    }
  }
  return { ok: true };
}

// ── Simulador passo a passo (para animação da aula guiada) ──────────────────
// Retorna um array de configs { tape, head, stateId, step, status? }.
// status só existe na última config: 'ACCEPTED' | 'REJECTED' | 'LOOP'.
export function simulateTMSteps(graph, inputWord, maxSteps = 80) {
  const stateMap = new Map((graph.states ?? []).map(s => [s.id, s]));
  const initial  = (graph.states ?? []).find(s => s.isInitial);
  if (!initial) return [{ tape: [BLANK], head: 0, stateId: null, step: 0, status: 'REJECTED' }];

  const tape = [BLANK, BLANK, ...(inputWord === '' ? [] : inputWord.split('')), BLANK, BLANK];
  let head    = 2;
  let stateId = initial.id;
  const configs = [{ tape: [...tape], head, stateId, step: 0 }];

  for (let s = 0; s < maxSteps; s++) {
    const symbol = tape[head] ?? BLANK;
    const tr = (graph.transitions ?? []).find(t => {
      const r = t.read === '' ? BLANK : t.read;
      return t.from === stateId && r === symbol;
    });
    if (!tr) break;
    tape[head] = tr.write === '' ? BLANK : tr.write;
    stateId    = tr.to;
    head      += MOVE_DELTA[tr.move] ?? 0;
    if (head < 0)              { tape.unshift(BLANK); head = 0; }
    if (head >= tape.length)   tape.push(BLANK);
    configs.push({ tape: [...tape], head, stateId, step: s + 1 });
  }

  const finalState = stateMap.get(stateId) ?? null;
  const status = configs.length - 1 >= maxSteps
    ? 'LOOP'
    : finalState?.isFinal ? 'ACCEPTED' : 'REJECTED';
  configs[configs.length - 1] = { ...configs[configs.length - 1], status };
  return configs;
}

// ── Parser JFLAP (MT multi-fita, formato block) — para aula guiada futura ────
// Converte XML JFLAP (tipo "turing") no mesmo formato de graph acima.
export function parseJffTM(xml) {
  const doc = new DOMParser().parseFromString(xml, 'text/xml');

  const states = [...doc.querySelectorAll('block')].map(b => ({
    id:        b.getAttribute('id') ?? '',
    name:      b.getAttribute('name') ?? '',
    x:         parseFloat(b.querySelector('x')?.textContent ?? '0'),
    y:         parseFloat(b.querySelector('y')?.textContent ?? '0'),
    isInitial: !!b.querySelector('initial'),
    isFinal:   !!b.querySelector('final'),
  }));

  // Transições: read/write vazios mantidos como '' (blank) — simulateTM já trata '' → □
  const transitions = [...doc.querySelectorAll('transition')].map(t => ({
    from:  t.querySelector('from')?.textContent.trim()  ?? '',
    to:    t.querySelector('to')?.textContent.trim()    ?? '',
    read:  t.querySelector('read')?.textContent.trim()  ?? '',
    write: t.querySelector('write')?.textContent.trim() ?? '',
    move:  t.querySelector('move')?.textContent.trim()  ?? 'S',
  }));

  return { states, transitions };
}
