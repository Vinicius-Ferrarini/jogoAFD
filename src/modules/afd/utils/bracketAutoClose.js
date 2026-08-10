// ─── bracketAutoClose: auto-fecha "{" em inputs de texto da Descrição Formal ──
// Ao digitar "{", insere "{}" e posiciona o cursor entre as chaves — mesmo
// comportamento de editores de código. Usado nos campos de tupla (Q/Σ/Γ/F
// etc.) de AFD, AP e MT, que são os únicos campos do domínio que aceitam "{}"
// (campos "single" como q₀/i/B/blank e células da tabela δ nunca usam chaves,
// então não recebem este handler — ver chamadas em cada módulo).
// NÃO usar nos campos de "testar palavra" (não fazem parte da Descrição Formal).
//
// `setValue` é o setter de state do React (controlado) — a função já cuida do
// preventDefault e do reposicionamento do cursor após o próximo render.
export function onBracketKeyDown(e, setValue) {
  if (e.key !== '{') return;
  const el = e.target;
  const { selectionStart, selectionEnd, value } = el;
  // Já há um "}" logo após o cursor (ex.: usuário reabrindo o par existente)?
  // Deixa digitar normalmente, sem duplicar o fecha-chave.
  if (selectionStart === selectionEnd && value[selectionStart] === '}') return;

  e.preventDefault();
  const next = value.slice(0, selectionStart) + '{}' + value.slice(selectionEnd);
  setValue(next);
  requestAnimationFrame(() => el.setSelectionRange(selectionStart + 1, selectionStart + 1));
}
