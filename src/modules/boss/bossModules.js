// ─── bossModules: registro compartilhado dos módulos usáveis num Boss ─────────
// Fonte única de: componente lazy por módulo, cor+rótulo canônicos (botão da
// grade, chip dentro da fase e legenda) e a chave interna de progresso que cada
// módulo espera. Usado por BossMode (Trabalho e Prova).
import { lazy } from 'react';

const AFDPart1     = lazy(() => import('../afd/AFDPart1'));
const AFDPart2     = lazy(() => import('../afd/AFDPart2'));
const AFDMinimizer = lazy(() => import('../afd/AFDMinimizer'));
const APPart1      = lazy(() => import('../ap/APPart1'));
const MTReconPart1 = lazy(() => import('../mt-recon/MTReconPart1'));
const MTPart1      = lazy(() => import('../mt/MTPart1'));

export const MODULE_COMPONENT = {
  'afd-p1':   AFDPart1,
  'afd-p2':   AFDPart2,
  'afd-min':  AFDMinimizer,
  'ap-pilha': APPart1,
  'mt-recon': MTReconPart1,
  'mt-trans': MTPart1,
};

// Cor + rótulo canônicos por módulo. Verde/amarelo/vermelho em afd-p1/afd-p2/
// ap-pilha mantêm o Trabalho idêntico ao que já era; os demais entram na Prova.
// Cores da paleta do jogo (mesma família de DIFF_COLOR), todas distintas entre si.
export const MODULE_META = {
  'afd-p1':   { color: '#4ade80', label: 'AFD 1' },
  'afd-p2':   { color: '#facc15', label: 'AFD 2' },
  'afd-min':  { color: '#fb923c', label: 'Minimização' },
  'ap-pilha': { color: '#f87171', label: 'AP' },
  'mt-recon': { color: '#60a5fa', label: 'MT Rec.' },
  'mt-trans': { color: '#c084fc', label: 'MT Trans.' },
};

// Chave interna que cada módulo usa para indexar `progress[...]` — precisa bater
// com o que cada componente já espera: AFD 1/2 usam o id cru; os demais têm
// prefixo (ver APPart1 `ap-`, AFDMinimizer `afd-min-`, MT `mt-recon-`/`mt-trans-`).
const KEY_PREFIX = {
  'ap-pilha': 'ap',
  'afd-min':  'afd-min',
  'mt-recon': 'mt-recon',
  'mt-trans': 'mt-trans',
};
export function internalKey(ex) {
  const p = KEY_PREFIX[ex.module];
  return p ? `${p}-${ex.originalId}` : ex.originalId;
}

// Entradas da legenda: um item por módulo DISTINTO presente na lista, na ordem
// de primeira aparição (ex.: Prova → AFD 1, AFD 2, Minimização, AP, MT Rec., MT Trans.).
export function legendFor(exercises) {
  const seen = new Set();
  const out = [];
  for (const ex of exercises) {
    if (seen.has(ex.module)) continue;
    seen.add(ex.module);
    out.push([ex.module, MODULE_META[ex.module]?.label ?? ex.module]);
  }
  return out;
}
