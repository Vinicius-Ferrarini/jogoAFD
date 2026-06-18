// Pure brute-force equivalence checker for DFAs.
// Generates every word over `alphabet` in BFS order (shortest first) up to
// `maxLen` and compares oracleFn vs simulateFn.
// Returns first counterexample { word, shouldAccept } or null if all words agree.
//
// Word counts per alphabet size at default maxLen:
//   |Σ|=0 → 1 word (""),  |Σ|=1 → 8,  |Σ|=2 → 255,  |Σ|=3 → 364,  |Σ|=4 → 341
// All run in <3ms in V8.
export function fuzzDFA(alphabet, oracleFn, simulateFn, maxLen) {
  const alph = alphabet ?? [];
  const limit = maxLen ?? (
    alph.length === 0 ? 0 :
    alph.length <= 2  ? 7 :
    alph.length === 3 ? 5 : 4
  );
  const queue = [''];
  while (queue.length > 0) {
    const word = queue.shift();
    const ra = oracleFn(word);
    const ua = simulateFn(word);
    if (ra !== ua) return { word, shouldAccept: ra };
    if (word.length < limit) {
      for (const sym of alph) queue.push(word + sym);
    }
  }
  return null;
}
