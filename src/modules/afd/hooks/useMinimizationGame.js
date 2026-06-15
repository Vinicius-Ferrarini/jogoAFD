// ─── useMinimizationGame: o "gabarito invisível" da minimização ──────────────
// Concentra TODA a lógica de algoritmo (Myhill–Nerode / table-filling) e expõe
// validadores puros para os componentes de passo (Step1..Step5), que ficam
// "burros" (só UI + estado de edição). É pré-requisito do futuro Modo Aula:
// um driver de aula consumiria este mesmo hook, dirigindo a UI automaticamente.
//
// Princípio do "juiz invisível":
//   1. O aluno age (clica célula, digita rótulo, marca propagação).
//   2. O componente atualiza só seu estado de edição local (marks, axis...).
//   3. Ao validar, chama um validador puro daqui, que compara contra o gabarito
//      memoizado e devolve { ok, errorCells:Set, message }.
//   4. O componente pinta errorCells; o MinGame exibe message no balão.
//   5. Avanço de fase só com ok === true.
import { useMemo, useCallback } from 'react';
import {
  pairKey,
  computeReachable,
  computeTrivialTable,
  computeDistTable,
  computeDistSequence,
  computeMinimized,
  analyzeDrawnDFA,
  productCounterexample,
} from '../utils/dfaAlgorithms';

export default function useMinimizationGame(exercise) {
  const { states, alphabet, initialState, finalStates, transitions } = exercise.initial;

  // ── δ completo do AFD original (lookup O(1): from → sym → to) ──────────────
  const fullTransTable = useMemo(() => {
    const map = {};
    for (const st of states) {
      map[st] = {};
      for (const sym of alphabet) {
        const t = transitions.find(tr => tr.from === st && tr.symbol === sym);
        map[st][sym] = t?.to ?? null;
      }
    }
    return map;
  }, [states, alphabet, transitions]);

  // ── Passo 1: descarta estados inalcançáveis antes de minimizar ─────────────
  const reachable    = useMemo(() => computeReachable(states, initialState, transitions), [states, initialState, transitions]);
  const rStates      = useMemo(() => states.filter(s => reachable.has(s)),            [states, reachable]);
  const rFinals      = useMemo(() => finalStates.filter(s => reachable.has(s)),       [finalStates, reachable]);
  const rTransitions = useMemo(() => transitions.filter(t => reachable.has(t.from)),  [transitions, reachable]);
  const unreachable  = useMemo(() => states.filter(s => !reachable.has(s)),           [states, reachable]);

  // δ restrito aos alcançáveis (usado pelo inspetor e pelas dicas)
  const transTable = useMemo(() => {
    const map = {};
    for (const st of rStates) {
      map[st] = {};
      for (const sym of alphabet) {
        const t = rTransitions.find(tr => tr.from === st && tr.symbol === sym);
        map[st][sym] = t?.to ?? null;
      }
    }
    return map;
  }, [rStates, alphabet, rTransitions]);

  // Nós do AFD original (para o GraphView)
  const origNodes = useMemo(() => states.map(s => ({
    id: s, label: s,
    isInitial: s === initialState,
    isFinal:   finalStates.includes(s),
  })), [states, initialState, finalStates]);

  // ── Todos os pares {p,q} de estados alcançáveis distintos (chave canônica) ──
  const allPairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < rStates.length; i++)
      for (let j = i + 1; j < rStates.length; j++)
        pairs.push(pairKey(rStates[i], rStates[j]));
    return pairs;
  }, [rStates]);

  // ── Gabaritos memoizados (recalculados 1× por exercício, nunca expostos) ────
  const trivialTable = useMemo(() => computeTrivialTable(rStates, rFinals),                       [rStates, rFinals]);
  const distTable    = useMemo(() => computeDistTable(rStates, rFinals, rTransitions, alphabet),  [rStates, rFinals, rTransitions, alphabet]);
  const distSequence = useMemo(() => computeDistSequence(rStates, rFinals, rTransitions, alphabet), [rStates, rFinals, rTransitions, alphabet]);
  const minimized    = useMemo(() => computeMinimized(rStates, initialState, rFinals, rTransitions, alphabet, distTable), [rStates, initialState, rFinals, rTransitions, alphabet, distTable]);

  // ── Roteiro do Modo Aula (gerado do gabarito; 1 motor p/ todos os exercícios) ─
  // Cada etapa → array de quadros { text, view }. `view.kind`: 'delta' | 'tri' |
  // 'groups' | 'graph'. O MinLessonOverlay só lê e desenha — sem lógica lá.
  const lessonScript = useMemo(() => {
    // PREP — tabela δ: estrutura vazia, depois preenchida pelo gabarito
    const emptyPrep = { rows: states, cols: alphabet, cells: {} };
    const fullCells = {};
    states.forEach((st, ri) => alphabet.forEach((sym, ci) => {
      fullCells[`${ri},${ci}`] = fullTransTable[st]?.[sym] ?? '';
    }));
    const fullPrep = { rows: states, cols: alphabet, cells: fullCells };
    const PREP = [
      { text: 'Antes de minimizar, conferimos o AFD numa tabela de transição δ: uma LINHA por estado e uma COLUNA por símbolo do alfabeto.', view: { kind: 'delta', prep: emptyPrep } },
      { text: 'Em cada célula anotamos para onde o estado vai ao ler aquele símbolo. A δ precisa estar COMPLETA (toda célula preenchida) — isso é ser uma função total.', view: { kind: 'delta', prep: fullPrep } },
    ];

    // SETUP — tabela triangular vazia (só explicação estrutural)
    const SETUP = [
      { text: 'Agora comparamos os estados aos PARES. Como (p,q) é o mesmo que (q,p) e não comparamos um estado com ele mesmo, a tabela é TRIANGULAR — sem diagonal.', view: { kind: 'tri', userTable: {}, readOnly: true } },
      { text: `Com ${rStates.length} estados alcançáveis, a tabela tem ${rStates.length - 1} linha(s) e ${rStates.length - 1} coluna(s): cada par aparece uma única vez.`, view: { kind: 'tri', userTable: {}, readOnly: true } },
    ];

    // TRIVIAL — marca final × não-final, um a um
    const TRIVIAL = [
      { text: 'Marcação trivial: todo par em que UM estado é final e o outro NÃO já é distinguível (um aceita, o outro rejeita). Vamos marcá-los com ×.', view: { kind: 'tri', userTable: {} } },
    ];
    {
      let acc = {};
      distSequence.trivial.forEach(({ pair, p, q }) => {
        acc = { ...acc, [pair]: true };
        const pf = rFinals.includes(p);
        const finalOne = pf ? p : q, otherOne = pf ? q : p;
        TRIVIAL.push({
          text: `(${p}, ${q}): ${finalOne} é final e ${otherOne} não → distinguíveis. Marca ×.`,
          view: { kind: 'tri', userTable: { ...acc }, selectedPair: pair },
        });
      });
      if (distSequence.trivial.length === 0)
        TRIVIAL.push({ text: 'Neste AFD não há par final × não-final para marcar agora — seguimos direto para a propagação.', view: { kind: 'tri', userTable: {} } });
    }

    // PROP — SIMULA o Inspetor em rodadas (igual ao jogo): para cada par branco,
    // monta a tabela de transição e decide símbolo a símbolo. × fecha na hora;
    // pendente é deixado e revisto numa próxima rodada ("voltar depois").
    const propMarks = {};                                   // × (distinguíveis)
    allPairs.forEach(k => { if (trivialTable[k]) propMarks[k] = true; });
    const propEquiv  = new Set();                            // ≡ (resolvidos equivalentes)
    const propWhite  = allPairs.filter(k => !trivialTable[k]);
    const propDone   = (k) => propMarks[k] === true || propEquiv.has(k);
    const snap = (pair, rows) => ({
      kind: 'inspector', pair,
      rows: rows.map(r => ({ ...r })),
      marks: { ...propMarks },
      resolvedEquiv: [...propEquiv],
    });
    const classifyRow = (pair, sym) => {
      const [a, b] = pair.split(',');
      const dp = transTable[a]?.[sym] ?? null;
      const dq = transTable[b]?.[sym] ?? null;
      if (!dp || !dq || dp === dq) return { decision: 'equiv', dp, dq, dest: null };
      const dest = pairKey(dp, dq);
      if (dest === pair)         return { decision: 'equiv', dp, dq, dest };
      if (propMarks[dest])       return { decision: 'x',     dp, dq, dest };
      if (propEquiv.has(dest))   return { decision: 'equiv', dp, dq, dest };
      return { decision: 'pending', dp, dq, dest };
    };

    const PROP = [
      { text: 'Agora a propagação — o passo principal. Vou resolver cada par branco como você vai fazer: monto a tabela de transição do par e decido símbolo a símbolo.', view: snap(null, []) },
    ];
    let safety = 0, roundNo = 0;
    while (safety++ < 80) {
      let changed = false, anyUndecided = false;
      roundNo++;
      if (roundNo > 1 && propWhite.some(k => !propDone(k)))
        PROP.push({ text: `Rodada ${roundNo}: volto aos pares que ficaram pendentes — agora que marquei novos ×, alguns já dá pra decidir.`, view: snap(null, []) });
      for (const pair of propWhite) {
        if (propDone(pair)) continue;
        anyUndecided = true;
        const [a, b] = pair.split(',');
        const rows = [];
        PROP.push({ text: `Par (${a}, ${b}): monto a tabela de transição — para cada símbolo, vejo aonde ${a} e ${b} vão.`, view: snap(pair, rows) });
        let concluded = null, pendingHere = false;
        for (const sym of alphabet) {
          const c = classifyRow(pair, sym);
          const dl = c.dest ? `(${c.dp}, ${c.dq})` : `${c.dp}`;
          if (c.decision === 'x') {
            rows.push({ sym, dp: c.dp, dq: c.dq, dest: c.dest, decision: 'x' });
            PROP.push({ text: `Lendo '${sym}', caem em ${dl}, que já está ×. Um símbolo que distingue já basta → (${a}, ${b}) são DISTINGUÍVEIS. Marco × e nem preciso ver o resto.`, view: snap(pair, rows) });
            concluded = 'x'; break;
          } else if (c.decision === 'pending') {
            rows.push({ sym, dp: c.dp, dq: c.dq, dest: c.dest, decision: 'pending' });
            pendingHere = true;
            PROP.push({ text: `Lendo '${sym}', caem em ${dl}, que eu ainda NÃO decidi. Deixo esta linha pendente (fica amarela) e sigo para o próximo símbolo.`, view: snap(pair, rows) });
          } else {
            rows.push({ sym, dp: c.dp, dq: c.dq, dest: c.dest, decision: 'equiv' });
            const why = c.dest ? `${dl} é equivalente — não distingue` : `os dois vão para ${c.dp} — destino igual, não distingue`;
            PROP.push({ text: `Lendo '${sym}', ${why}.`, view: snap(pair, rows) });
          }
        }
        if (concluded === 'x') { propMarks[pair] = true; changed = true; }
        else if (!pendingHere) {
          propEquiv.add(pair); changed = true;
          PROP.push({ text: `Nenhum símbolo distinguiu → (${a}, ${b}) são EQUIVALENTES (≡).`, view: snap(pair, rows) });
        } else {
          PROP.push({ text: `Ainda há símbolo com destino indeciso → deixo (${a}, ${b}) PENDENTE e volto depois, quando esses destinos estiverem resolvidos.`, view: snap(pair, rows) });
        }
      }
      if (!anyUndecided) break;
      if (!changed) {
        const rest = propWhite.filter(k => !propDone(k));
        rest.forEach(k => propEquiv.add(k));
        if (rest.length)
          PROP.push({ text: 'Ninguém mais consegue ser distinguido. Os pares que sobraram pendentes (estão num ciclo) são, então, EQUIVALENTES (≡).', view: snap(null, []) });
        break;
      }
    }
    PROP.push({ text: 'Tabela completa! Os × são pares distinguíveis; os ≡ são equivalentes. É isso que você vai reproduzir no jogo.', view: snap(null, []) });

    // GROUPS — quais estados se fundem (overlay lê minimized.classMap)
    const GROUPS = [
      { text: 'Cada conjunto de estados equivalentes vira UM estado no AFD mínimo. Estes são os grupos:', view: { kind: 'groups' } },
    ];

    // DRAW — o AFD mínimo pronto (overlay lê minimized.nodes/transitions)
    const DRAW = [
      { text: 'O AFD mínimo: um estado por grupo. As transições saem de um representante de cada grupo e vão para o grupo de destino.', view: { kind: 'graph' } },
    ];

    return { PREP, SETUP, TRIVIAL, PROP, GROUPS, DRAW };
  }, [states, alphabet, fullTransTable, transTable, rStates, rFinals, allPairs, trivialTable, distSequence]);

  // ─────────────────────────────────────────────────────────────────────────
  // Auxiliares de mensagem
  // ─────────────────────────────────────────────────────────────────────────
  // Resumo "X a mais · Y faltando" a partir de um conjunto de pares errados.
  const summarize = useCallback((wrong, marks) => {
    const extras  = [...wrong].filter(k => !!marks[k]).length;
    const missing = wrong.size - extras;
    const parts = [];
    if (extras  > 0) parts.push(`${extras} marcação${extras  > 1 ? 'ões' : ''} a mais`);
    if (missing > 0) parts.push(`${missing} par${missing > 1 ? 'es' : ''} faltando`);
    return parts.join(' · ');
  }, []);

  // ─────────────────────────────────────────────────────────────────────────
  // PREP — o aluno CONSTRÓI a tabela de transição δ e a valida.
  // `built` = { rows:string[], cols:string[], cells:{"ri,ci":string},
  //             initRow:number, finalRows:Set<number> }.
  // Chaves de erro: errorCells "ri,ci"; errorAxes "row-ri"/"col-ci"/"init"/"final-ri".
  // ─────────────────────────────────────────────────────────────────────────

  // Determinístico? (cada estado aparece numa única linha — sem nome repetido)
  const validateIsDFA = useCallback((built) => {
    const rows = built.rows.map(s => s.trim());
    const errorAxes = new Set();
    const seen = new Map();
    rows.forEach((rn, ri) => {
      if (!rn) return;
      if (seen.has(rn)) { errorAxes.add(`row-${ri}`); errorAxes.add(`row-${seen.get(rn)}`); }
      else seen.set(rn, ri);
    });
    const ok = errorAxes.size === 0;
    return {
      ok, errorCells: new Set(), errorAxes,
      message: ok
        ? 'Determinístico! ✓ Cada estado tem uma linha única — para cada (estado, símbolo) há um só destino.'
        : 'Há estados com nome repetido. Num AFD cada estado ocupa UMA linha; nomes repetidos significam não-determinismo.',
    };
  }, []);

  // δ total? (toda célula preenchida)
  const validateIsTotal = useCallback((built) => {
    const { rows, cols } = built;
    const errorCells = new Set();
    let first = null;
    for (let ri = 0; ri < rows.length; ri++)
      for (let ci = 0; ci < cols.length; ci++)
        if (!(built.cells[`${ri},${ci}`] || '').trim()) {
          errorCells.add(`${ri},${ci}`);
          if (!first) first = { rn: rows[ri].trim() || `linha ${ri + 1}`, cn: cols[ci].trim() || `coluna ${ci + 1}` };
        }
    const ok = errorCells.size === 0;
    return {
      ok, errorCells, errorAxes: new Set(),
      message: ok
        ? 'Função δ total! ✓ Todo estado tem saída definida para cada símbolo.'
        : `δ incompleta: o estado ${first.rn} não tem saída para '${first.cn}'. Um AFD precisa de transição para TODO símbolo — preencha as células vazias.`,
    };
  }, []);

  // Estados inalcançáveis? BFS a partir do estado inicial do AFD (dado do
  // exercício — não é marcado nesta etapa) sobre as transições digitadas.
  const checkUnreachable = useCallback((built) => {
    const rows = built.rows.map(s => s.trim());
    const cols = built.cols.map(s => s.trim());
    const allStates = [...new Set(rows.filter(Boolean))];
    const userTrans = [];
    rows.forEach((rn, ri) => cols.forEach((cn, ci) => {
      const dest = (built.cells[`${ri},${ci}`] || '').trim();
      if (rn && cn && dest) userTrans.push({ from: rn, to: dest });
    }));
    const reached = new Set([initialState]);
    const queue   = [initialState];
    while (queue.length) {
      const s = queue.shift();
      userTrans.filter(t => t.from === s).forEach(t => {
        if (!reached.has(t.to)) { reached.add(t.to); queue.push(t.to); }
      });
    }
    const unreachableList = allStates.filter(s => !reached.has(s));
    return {
      unreachable: unreachableList,
      message: unreachableList.length === 0
        ? `Nenhum inalcançável! ✓ Partindo de ${initialState}, todos os estados são atingíveis.`
        : `Inalcançáveis: {${unreachableList.join(', ')}}. Eles não influenciam a linguagem; num caso real seriam descartados antes de minimizar.`,
    };
  }, [initialState]);

  // GATE — a tabela δ construída bate exatamente com o AFD do exercício?
  const validateTransitionTable = useCallback((built) => {
    const rows = built.rows.map(s => s.trim());
    const cols = built.cols.map(s => s.trim());
    const errorCells = new Set();
    const errorAxes  = new Set();

    // 1 · Dimensões
    if (rows.length !== states.length) {
      return {
        ok: false, errorCells, errorAxes,
        sizeError: `A tabela deve ter ${states.length} linha(s) — uma por estado.`,
        message: `Este AFD tem ${states.length} estados, então a tabela δ tem ${states.length} linhas (uma por estado). Ajuste as linhas.`,
      };
    }
    if (cols.length !== alphabet.length) {
      return {
        ok: false, errorCells, errorAxes,
        sizeError: `A tabela deve ter ${alphabet.length} coluna(s) — uma por símbolo.`,
        message: `O alfabeto Σ tem ${alphabet.length} símbolo(s), então a tabela δ tem ${alphabet.length} colunas. Ajuste as colunas.`,
      };
    }

    const stateSet = new Set(states);
    const symSet   = new Set(alphabet);
    rows.forEach((rn, ri) => { if (!stateSet.has(rn)) errorAxes.add(`row-${ri}`); });
    cols.forEach((cn, ci) => { if (!symSet.has(cn))   errorAxes.add(`col-${ci}`); });
    rows.forEach((rn, ri) => {
      if (!stateSet.has(rn)) return;
      cols.forEach((cn, ci) => {
        if (!symSet.has(cn)) return;
        const cellVal  = (built.cells[`${ri},${ci}`] || '').trim();
        const expected = fullTransTable[rn]?.[cn] ?? '';
        if (cellVal !== (expected ?? '')) errorCells.add(`${ri},${ci}`);
      });
    });

    if (errorAxes.size > 0 || errorCells.size > 0) {
      const message = ([...errorAxes].some(k => k.startsWith('row-') || k.startsWith('col-')))
        ? 'Algum rótulo não pertence a este AFD. Use exatamente os estados e os símbolos da linguagem.'
        : 'Algumas transições não batem. Confira para onde cada estado vai ao ler cada símbolo (células em vermelho).';
      return { ok: false, errorCells, errorAxes, sizeError: null, message };
    }

    return { ok: true, errorCells, errorAxes, sizeError: null, message: 'Tabela δ correta! ✓ Agora vamos montar a tabela de pares.' };
  }, [states, alphabet, fullTransTable]);

  // ─────────────────────────────────────────────────────────────────────────
  // SETUP — construção do grid triangular (validação estrutural)
  // Convenção do grid (igual ao TriangularTable): linhas = rStates[1..],
  // colunas = rStates[0..n-2]. Cada par {p,q} aparece exatamente uma vez.
  // ─────────────────────────────────────────────────────────────────────────
  const setEq = (a, b) => {
    if (a.length !== b.length) return false;
    const sa = new Set(a);
    return b.every(x => sa.has(x)) && sa.size === a.length;
  };

  const validateGrid = useCallback((axisRows, axisCols) => {
    const n     = rStates.length;
    const rows  = axisRows.map(s => s.trim());
    const cols  = axisCols.map(s => s.trim());
    const errorCells = new Set();   // "ri,ci" — auto-pares
    const errorAxes  = new Set();   // "row-ri" / "col-ci"

    // 1 · Dimensão correta
    if (rows.length !== n - 1 || cols.length !== n - 1) {
      return {
        ok: false, errorCells, errorAxes,
        sizeError: `Com ${n} estados, a tabela triangular tem ${n - 1} linha(s) e ${n - 1} coluna(s). Ajuste o tamanho.`,
        message: `Com ${n} estados, a tabela triangular tem ${n - 1} linhas e ${n - 1} colunas. Ajuste o tamanho.`,
      };
    }

    // 2 · Rótulos válidos (∈ estados alcançáveis, sem repetição no eixo)
    const stateSet = new Set(rStates);
    let badLabel = false;
    rows.forEach((rn, ri) => {
      if (!stateSet.has(rn) || rows.indexOf(rn) !== ri) { errorAxes.add(`row-${ri}`); badLabel = true; }
    });
    cols.forEach((cn, ci) => {
      if (!stateSet.has(cn) || cols.indexOf(cn) !== ci) { errorAxes.add(`col-${ci}`); badLabel = true; }
    });
    if (badLabel) {
      return {
        ok: false, errorCells, errorAxes, sizeError: null,
        message: 'Algum rótulo não é um estado deste AFD (ou está repetido). Use cada estado uma vez.',
      };
    }

    // 3 · Cobertura canônica — linhas = todos menos o primeiro; colunas = todos
    //     menos o último. Se os eixos estiverem trocados, avisa especificamente.
    const expRows = rStates.slice(1);
    const expCols = rStates.slice(0, -1);
    if (!setEq(rows, expRows) || !setEq(cols, expCols)) {
      const swapped = setEq(rows, expCols) && setEq(cols, expRows);
      rows.forEach((_, ri) => errorAxes.add(`row-${ri}`));
      cols.forEach((_, ci) => errorAxes.add(`col-${ci}`));
      return {
        ok: false, errorCells, errorAxes, sizeError: null,
        message: swapped
          ? 'Quase! Um eixo deve começar no segundo estado e o outro terminar no penúltimo, pra cada par aparecer só uma vez.'
          : 'A cobertura está incompleta: as linhas devem listar todos os estados menos o primeiro, e as colunas todos menos o último.',
      };
    }

    // 4 · Sem auto-pares (qi × qi) nas células ativas do triângulo
    let autoPair = false;
    for (let ri = 0; ri < rows.length; ri++)
      for (let ci = 0; ci <= ri; ci++)
        if (rows[ri] === cols[ci]) { errorCells.add(`${ri},${ci}`); autoPair = true; }
    if (autoPair) {
      return {
        ok: false, errorCells, errorAxes, sizeError: null,
        message: 'Não comparamos um estado com ele mesmo — a diagonal não existe. Por isso a tabela é triangular.',
      };
    }

    return { ok: true, errorCells, errorAxes, sizeError: null, message: 'Grade válida! Cada par de estados aparece exatamente uma vez.' };
  }, [rStates]);

  // ─────────────────────────────────────────────────────────────────────────
  // TRIVIAL — marca X ⇔ final × não-final
  // ─────────────────────────────────────────────────────────────────────────
  const validateTrivial = useCallback((marks) => {
    const errorCells = new Set();
    for (const key of allPairs) {
      if (!!marks[key] !== !!trivialTable[key]) errorCells.add(key);
    }
    if (errorCells.size === 0)
      return { ok: true, errorCells, message: 'Marcação trivial correta! Esses pares já são distinguíveis.' };

    const extras = [...errorCells].some(k => !!marks[k]);
    return {
      ok: false,
      errorCells,
      message: extras
        ? 'Cuidado: algum par marcado tem os dois estados do mesmo tipo. Nesta etapa só marcamos final × não-final.'
        : `Faltou um! Procure pares onde um estado é final e o outro não — esses são triviais. (${summarize(errorCells, marks)})`,
    };
  }, [allPairs, trivialTable, summarize]);

  // ─────────────────────────────────────────────────────────────────────────
  // PROP — propagação até estabilizar (compara com a tabela de dist. completa)
  // ─────────────────────────────────────────────────────────────────────────
  const validatePropagation = useCallback((marks) => {
    const errorCells = new Set();
    for (const key of allPairs) {
      if (!!marks[key] !== !!distTable[key]) errorCells.add(key);
    }
    if (errorCells.size === 0)
      return { ok: true, errorCells, message: 'Tabela completa! Você propagou todas as distinções. ★★★' };

    // Há um par FALTANDO (deveria estar marcado)? Cite a transição que o distingue.
    const missingKey = [...errorCells].find(k => !marks[k]);
    if (missingKey) {
      const [p, q] = missingKey.split(',');
      for (const sym of alphabet) {
        const tp = transTable[p]?.[sym];
        const tq = transTable[q]?.[sym];
        if (!tp || !tq || tp === tq) continue;
        if (distTable[pairKey(tp, tq)]) {
          return {
            ok: false,
            errorCells,
            message: `Você parou cedo. Em (${p},${q}), lendo '${sym}', vai-se para (${tp},${tq}) que é distinguível — logo (${p},${q}) também é. (${summarize(errorCells, marks)})`,
          };
        }
      }
      return {
        ok: false, errorCells,
        message: `Ainda há propagações possíveis: reexamine cada par à luz das marcações novas. (${summarize(errorCells, marks)})`,
      };
    }

    // Caso contrário, há marcação indevida (par ainda equivalente).
    const extraKey = [...errorCells].find(k => !!marks[k]);
    const [p, q] = (extraKey || ',').split(',');
    return {
      ok: false,
      errorCells,
      message: `Cuidado: nenhum símbolo leva (${p},${q}) a um par distinguível. Por enquanto eles podem ser equivalentes — desmarque. (${summarize(errorCells, marks)})`,
    };
  }, [allPairs, distTable, alphabet, transTable, summarize]);

  // PROP por LINHA (símbolo) — classifica o destino de UM símbolo do par {p,q}
  // contra o estado atual do tabuleiro. Decisão da linha:
  //   'x'       → o destino já é distinguível (×) → este símbolo distingue o par
  //   'equiv'   → destinos coincidem (mesmo estado / auto-ref) OU destino já ≡
  //   'pending' → destino ainda indeciso (nem × nem ≡)
  // `display` separa "iguais" (mesmo estado) de "equiv" (par já resolvido como ≡)
  // só para a dica visual. `marks`: {pairKey:bool}; `resolved`: Set de pares já ≡.
  const classifyPairRow = useCallback((pair, sym, marks, resolved) => {
    const [p, q] = pair.split(',');
    const dp = transTable[p]?.[sym] ?? null;
    const dq = transTable[q]?.[sym] ?? null;
    if (!dp || !dq || dp === dq) return { decision: 'equiv', display: 'same', dp, dq, dest: null };
    const dest = pairKey(dp, dq);
    if (dest === pair)            return { decision: 'equiv', display: 'same', dp, dq, dest };
    if (marks[dest] === true)     return { decision: 'x',     display: 'x',    dp, dq, dest };
    if (resolved.has(dest))       return { decision: 'equiv', display: 'equiv', dp, dq, dest };
    return { decision: 'pending', display: 'pending', dp, dq, dest };
  }, [transTable]);

  // Valida a escolha do aluno para UMA linha (símbolo). `choice` ∈ 'x'|'equiv'|
  // 'pending'. Toda mensagem de erro diz ONDE (símbolo/destino) e COMO corrigir.
  const validatePairRow = useCallback((pair, sym, choice, marks, resolved) => {
    const [p, q] = pair.split(',');
    const { decision, display, dp, dq, dest } = classifyPairRow(pair, sym, marks, resolved);
    const D = dest ? `(${dp},${dq})` : (dp ? `${dp}` : '—');

    if (choice === decision) {
      const okMsg = {
        x:       `✓ Em '${sym}', (${p},${q}) caem em ${D}, que já está ×. Um símbolo que distingue basta — o par é NÃO-equivalente (×).`,
        equiv:   display === 'same'
          ? `✓ Em '${sym}', os dois vão para ${dp} — destino igual, não distingue.`
          : `✓ Em '${sym}', o destino ${D} já é equivalente — esse símbolo não distingue.`,
        pending: `✓ Em '${sym}', o destino ${D} ainda não foi decidido — fica pendente até resolvê-lo.`,
      }[choice];
      return { ok: true, decision, display, message: okMsg };
    }

    // ERRO — sempre aponta o porquê + o que fazer
    let message;
    if (decision === 'x')
      message = `❌ Em '${sym}', (${p},${q}) caem em ${D}, que JÁ está marcado × → esse símbolo distingue. Corrija a linha '${sym}' para Distinguível (×).`;
    else if (decision === 'equiv' && display === 'same')
      message = `❌ Em '${sym}', os dois vão para o MESMO estado ${dp} — não há como distinguir por aqui. Corrija a linha '${sym}' para Equivalente (≡).`;
    else if (decision === 'equiv')
      message = `❌ Em '${sym}', o destino ${D} já está decidido como equivalente (não é ×, nem está pendente). Corrija a linha '${sym}' para Equivalente (≡).`;
    else // decision === 'pending'
      message = `❌ Em '${sym}', o destino ${D} ainda NÃO foi decidido — não dá pra afirmar ${choice === 'x' ? 'que distingue' : 'que é equivalente'} agora. Corrija para Pendente e resolva ${D} antes.`;
    return { ok: false, decision, display, message };
  }, [classifyPairRow]);

  // PROP — valida a TABELA do Inspetor preenchida pelo aluno para o par {p,q}.
  // inspDelta = { [sym]: { p, q, pair } } com o que o aluno digitou.
  // Confere δ(p,sym), δ(q,sym) e o "par de destino" (estilo q0q1, qualquer ordem).
  // errors: Set de chaves "sym|p" / "sym|q" / "sym|pair".
  const validateInspectorTable = useCallback((pair, inspDelta) => {
    const [p, q] = pair.split(',');
    const errors = new Set();
    const norm = (s) => (s || '').trim().replace(/[\s,()]/g, '');
    for (const sym of alphabet) {
      const cell = inspDelta[sym] || {};
      const dp = transTable[p]?.[sym] ?? '';
      const dq = transTable[q]?.[sym] ?? '';
      if (norm(cell.p) !== dp) errors.add(`${sym}|p`);
      if (norm(cell.q) !== dq) errors.add(`${sym}|q`);
      const ipair = norm(cell.pair);
      if (ipair !== `${dp}${dq}` && ipair !== `${dq}${dp}`) errors.add(`${sym}|pair`);
    }
    const ok = errors.size === 0;
    return {
      ok, errors,
      message: ok
        ? '✓ Tabela do par correta! Agora decida: é distinguível ou equivalente?'
        : 'Algo não bate. Confira δ(·) de cada estado e o par de destino — campos em vermelho.',
    };
  }, [alphabet, transTable]);

  // ─────────────────────────────────────────────────────────────────────────
  // UX — Inspetor de pares (PROP): para o par {p,q}, uma linha por símbolo.
  // marks é opcional; quando passado, preenche destMarked (estado do aluno).
  // ─────────────────────────────────────────────────────────────────────────
  const inspectPair = useCallback((pair, marks = {}) => {
    if (!pair) return [];
    const [p, q] = pair.split(',');
    return alphabet.map(sym => {
      const dp = transTable[p]?.[sym] ?? null;
      const dq = transTable[q]?.[sym] ?? null;
      const same = !!dp && dp === dq;
      const destPair = (dp && dq && dp !== dq) ? pairKey(dp, dq) : null;
      return {
        sym, dp, dq, same, destPair,
        destMarked: destPair ? !!marks[destPair] : false,
      };
    });
  }, [alphabet, transTable]);

  // ─────────────────────────────────────────────────────────────────────────
  // UX — Dica dirigida (PROP): primeiro par não marcado cujo destino, em algum
  // símbolo, JÁ está marcado por ele. Mesma busca que o aluno deveria fazer —
  // só evidencia onde olhar, sem marcar por ele. Ilimitada, sem custo.
  // ─────────────────────────────────────────────────────────────────────────
  const nextPropagationHint = useCallback((marks) => {
    for (const key of allPairs) {
      if (marks[key]) continue;
      const [p, q] = key.split(',');
      for (const sym of alphabet) {
        const tp = transTable[p]?.[sym];
        const tq = transTable[q]?.[sym];
        if (!tp || !tq || tp === tq) continue;
        const destPair = pairKey(tp, tq);
        if (marks[destPair]) return { pair: key, sym, destPair };
      }
    }
    return null;
  }, [allPairs, alphabet, transTable]);

  // O AFD original (alcançável) já é mínimo? (nada a juntar) — só informativo.
  const isAlreadyMinimal = useMemo(() => minimized.nodes.length === rStates.length, [minimized, rStates]);

  // ─────────────────────────────────────────────────────────────────────────
  // DESENHO — o aluno desenha o AFD mínimo num canvas; aqui comparamos com o
  // gabarito `minimized` (juiz invisível). Exige: AFD bem-formado (1 inicial,
  // determinístico, δ total, símbolos ∈ Σ), linguagem EQUIVALENTE ao mínimo e
  // número MÍNIMO de estados. Devolve { ok, code, message, errorNodeIds:Set }.
  // Quando errado, aponta ONDE (estados em destaque) e o MOTIVO.
  // dnodes = [{ id, isInitial, isFinal, ... }]; dtrans = [{ from, symbol, to }].
  // ─────────────────────────────────────────────────────────────────────────
  const validateDrawnMinimized = useCallback((dnodes, dtrans) => {
    const fail = (code, message, errorIds = []) =>
      ({ ok: false, code, message, errorNodeIds: new Set(errorIds) });

    // 1 · Boa-formação do desenho
    const a = analyzeDrawnDFA(dnodes, dtrans, alphabet);
    if (!a.ok) return fail(a.code, a.message, a.errorIds);

    // δ do desenho como lista (1 símbolo por aresta) — reaproveitada adiante
    const dlist = [];
    a.ids.forEach(id => alphabet.forEach(sym => dlist.push({ from: id, symbol: sym, to: a.delta[id][sym] })));

    // 2 · Gabarito: AFD mínimo computado
    const B = {
      delta: (() => {
        const d = {};
        minimized.nodes.forEach(n => { d[n.id] = {}; });
        minimized.transitions.forEach(t => { d[t.from][t.symbol] = t.to; });
        return d;
      })(),
      initial: minimized.nodes.find(n => n.isInitial)?.id,
      finals: new Set(minimized.nodes.filter(n => n.isFinal).map(n => n.id)),
    };
    const A = { delta: a.delta, initial: a.initial, finals: a.finals };

    // 3 · Mesma linguagem? (produto + contra-exemplo)
    const ce = productCounterexample(A, B, alphabet);
    if (!ce.equivalent) {
      let cur = A.initial;
      for (const ch of ce.word) cur = A.delta[cur]?.[ch] ?? cur;
      const w = ce.word === '' ? 'λ (palavra vazia)' : `'${ce.word}'`;
      return fail('not-equivalent',
        `Linguagens diferentes: ${w} é ${ce.acceptedByDrawn ? 'ACEITA' : 'REJEITADA'} pelo seu AFD, mas o mínimo correto faz o oposto. Reveja as transições e os finais a partir do estado em destaque.`,
        [cur]);
    }

    // 4 · Sem estados inalcançáveis
    const reach = computeReachable(a.ids, a.initial, dlist);
    const unreachable = a.ids.filter(id => !reach.has(id));
    if (unreachable.length)
      return fail('unreachable',
        `Há estado(s) inalcançável(is): {${unreachable.join(', ')}}. Eles não fazem parte do AFD mínimo — remova-os.`,
        unreachable);

    // 5 · É o MÍNIMO? (mesmo nº de estados do gabarito)
    const target = minimized.nodes.length;
    if (a.ids.length > target) {
      // acha um par equivalente no próprio desenho p/ destacar e orientar
      const dFinals = a.ids.filter(id => a.finals.has(id));
      const dDist = computeDistTable(a.ids, dFinals, dlist, alphabet);
      let pair = [];
      for (let i = 0; i < a.ids.length && !pair.length; i++)
        for (let j = i + 1; j < a.ids.length && !pair.length; j++)
          if (!dDist[pairKey(a.ids[i], a.ids[j])]) pair = [a.ids[i], a.ids[j]];
      return fail('too-many',
        `Seu AFD reconhece a linguagem certa, mas tem ${a.ids.length} estados — o mínimo tem ${target}.` +
        (pair.length
          ? ` Os estados ${pair[0]} e ${pair[1]} são equivalentes: junte-os num só.`
          : ' Ainda há estados equivalentes para juntar.'),
        pair);
    }

    return { ok: true, code: 'ok', errorNodeIds: new Set(),
      message: '★★★ Perfeito! Seu AFD é mínimo e reconhece exatamente a mesma linguagem.' };
  }, [alphabet, minimized]);

  return {
    // dados (já filtrados por alcançáveis)
    states, alphabet, initialState, finalStates, transitions,
    rStates, rFinals, rTransitions, unreachable,
    transTable, fullTransTable, origNodes, allPairs,
    // gabaritos memoizados
    trivialTable, distTable, distSequence, minimized, isAlreadyMinimal,
    // roteiro do Modo Aula (derivado do gabarito)
    lessonScript,
    // validadores puros → { ok, errorCells, message, ... }
    validateIsDFA, validateIsTotal, checkUnreachable, validateTransitionTable,
    validateGrid, validateTrivial, validatePropagation, classifyPairRow, validatePairRow,
    validateInspectorTable, validateDrawnMinimized,
    // auxiliares de UX
    inspectPair, nextPropagationHint,
  };
}
