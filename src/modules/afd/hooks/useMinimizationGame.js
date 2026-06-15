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
  const minimized    = useMemo(() => computeMinimized(rStates, initialState, rFinals, rTransitions, alphabet, distTable), [rStates, initialState, rFinals, rTransitions, alphabet, distTable]);

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

  // PROP por célula — valida a decisão do aluno sobre o par {p,q} contra o
  // ESTADO ATUAL do tabuleiro (algoritmo em rodadas, não a resposta final):
  //   markedX === true  → "distinguíveis" (×)  — só vale se algum destino já é ×
  //   markedX === false → "equivalentes" (≡)  — só vale se todos os destinos já
  //                        estão decididos (neutros/≡) OU se nada mais pode ser ×
  //                        (ponto fixo: desempata ciclos como equivalentes)
  // `marks`: { pairKey: bool } (× = true, inclui triviais); `resolved`: Set de
  // pares já validados pelo aluno (× ou ≡). Devolve { ok, message }.
  const validatePairAction = useCallback((pair, markedX, marks, resolved) => {
    const [p, q] = pair.split(',');

    // status de um par de destino (a,b) no estado atual, em relação ao dono `owner`
    const destStatus = (a, b, owner) => {
      if (!a || !b || a === b) return 'neutral';
      const dk = pairKey(a, b);
      if (dk === owner) return 'neutral';            // auto-referência
      if (marks[dk] === true) return 'x';            // já distinguível (trivial ou ×)
      if (resolved.has(dk)) return 'equiv';          // já validado como equivalente
      return 'pending';                              // ainda indeciso
    };

    // o tabuleiro ainda permite marcar × em algum par não resolvido? (ponto fixo?)
    const boardCanMarkX = () => {
      for (const key of allPairs) {
        if (marks[key] === true || resolved.has(key)) continue;
        const [a, b] = key.split(',');
        for (const sym of alphabet)
          if (destStatus(transTable[a]?.[sym], transTable[b]?.[sym], key) === 'x') return true;
      }
      return false;
    };

    // ação correta para ESTE par, dado o estado atual
    let witnessX = null, pendingDest = null, anyPending = false;
    for (const sym of alphabet) {
      const dp = transTable[p]?.[sym], dq = transTable[q]?.[sym];
      const st = destStatus(dp, dq, pair);
      if (st === 'x' && !witnessX) witnessX = { sym, dp, dq };
      if (st === 'pending') { anyPending = true; if (!pendingDest) pendingDest = { sym, dp, dq }; }
    }
    const correct = witnessX ? 'x' : (!anyPending ? 'equiv' : (boardCanMarkX() ? 'pending' : 'equiv'));

    if (markedX === true) {
      if (correct === 'x')
        return { ok: true, message: `✓ Distinguíveis! Lendo '${witnessX.sym}' caem em (${witnessX.dp},${witnessX.dq}), que já está marcado × — logo (${p},${q}) também é.` };
      if (correct === 'pending')
        return { ok: false, message: `Ainda não dá pra afirmar ×: o destino (${pendingDest.dp},${pendingDest.dq}) está indeciso. Deixe (${p},${q}) pendente e resolva o destino primeiro.` };
      return { ok: false, message: `Nenhum destino de (${p},${q}) está marcado × — não há como distingui-los. Eles são equivalentes (≡).` };
    }

    // markedX === false (≡)
    if (correct === 'equiv')
      return { ok: true, message: anyPending
        ? `✓ Equivalentes! Nada mais pode ser distinguido — os pares restantes (em ciclo) são equivalentes.`
        : `✓ Equivalentes! Todos os destinos coincidem ou já são equivalentes.` };
    if (correct === 'x')
      return { ok: false, message: `Olhe de novo: lendo '${witnessX.sym}', (${p},${q}) vão para (${witnessX.dp},${witnessX.dq}), que já está × → distinguíveis. Marque com ×.` };
    return { ok: false, message: `Cedo demais: o destino (${pendingDest.dp},${pendingDest.dq}) ainda não foi decidido. Deixe (${p},${q}) pendente e resolva o destino antes.` };
  }, [alphabet, transTable, allPairs]);

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
    trivialTable, distTable, minimized, isAlreadyMinimal,
    // validadores puros → { ok, errorCells, message, ... }
    validateIsDFA, validateIsTotal, checkUnreachable, validateTransitionTable,
    validateGrid, validateTrivial, validatePropagation, validatePairAction,
    validateInspectorTable, validateDrawnMinimized,
    // auxiliares de UX
    inspectPair, nextPropagationHint,
  };
}
