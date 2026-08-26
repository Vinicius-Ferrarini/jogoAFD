# Notação de Expoente no AFD — Unicode Sobrescrito

> Documenta a normalização de `X^n` (ASCII) para `Xⁿ` (Unicode sobrescrito)
> nos 61 níveis do módulo AFD, feita para deixar a notação consistente com
> AP/MT-Recon (que já usavam Unicode desde sempre). Consulte antes de
> adicionar um novo nível AFD com expoente na `formula`/`hint`/lição guiada.

---

## 1. Padrão a seguir em níveis novos

Ao escrever `formula`, `hint`, `tutorials.*.dialog`/`title`, ou texto de
`guidedLesson`, use **sempre** o caractere Unicode de sobrescrito, nunca
`^letra` literal:

```js
// Certo
formula: "L = { aⁿ bᵐ cᵖ | n > 0, m ≥ 0, p ≥ 0 }"

// Errado (não fazer mais)
formula: "L = { a^n b^m c^p | n > 0, m ≥ 0, p ≥ 0 }"
```

Tabela de conversão (dígitos + letras já usadas no dataset — mapa completo
em `SUPERSCRIPT_MAP` de `src/modules/shared/wordExercises/normalizeLanguage.js`):

| ASCII | Unicode | ASCII | Unicode |
|---|---|---|---|
| `0`-`9` | `⁰¹²³⁴⁵⁶⁷⁸⁹` | `r` | `ʳ` |
| `n` | `ⁿ` | `s` | `ˢ` |
| `m` | `ᵐ` | `t` | `ᵗ` |
| `p` | `ᵖ` | `u` | `ᵘ` |
| `i` | `ⁱ` | `k` | `ᵏ` |
| `j` | `ʲ` | | |

Um expoente com dígito+letra colados (ex.: ASCII `b^2m`) vira os dois
caracteres sobrescritos em sequência, **sem** `^` entre eles: `b²ᵐ`.

### A letra "q" não tem sobrescrito Unicode

O padrão Unicode **não define** um caractere de sobrescrito para a letra `q`
(nem para `q`, nem para `v`, `w`, `x`, `y`, `z` maiúsculas em geral — mas
essas nunca apareceram no dataset). Não é uma limitação de fonte — o glyph
simplesmente não existe em nenhum bloco Unicode padrão.

**Se precisar de uma nova variável de expoente num nível futuro, evite `q`.**
A convenção do dataset (e da lista canônica em `useP2Answer.js`) é usar
`n, m, p, r, s, t, u, k, i, j`, nessa ordem de preferência. Quando um nível
antigo usava `q` como variável de contagem (`c^q`), a variável foi
**renomeada** para uma letra com sobrescrito disponível — ver seção 3.

### Expressões compostas e potências — exceção documentada, não normalizar

Alguns textos usam expoentes que não são uma única letra/dígito simples:

- **L14** (`tutorials.onStart.dialog[2]`): `a^(N+j)b^N` — expoente é uma
  expressão `(N+j)` entre parênteses, e `N` maiúsculo. Não há forma Unicode
  natural para "elevado a uma expressão entre parênteses", e o `N`
  maiúsculo sobrescrito (`ᴺ`, U+1D3A, bloco *Phonetic Extensions*) tem
  cobertura de fonte muito pior que os minúsculos — mesmo com a fonte de
  reposição custom deste projeto (seção 2), preferimos não introduzir mais
  um glyph raro sem necessidade. **Mantido como `^` ASCII.**
- **L32** (`tutorials.onStart.dialog[3]`): `2^N` — não é repetição de
  símbolo (`X^variável`), é uma potência de base 2 com expoente `N`
  maiúsculo. Mesma razão do caso acima. **Mantido como `^` ASCII.**
- **L46** (`tutorials.onStart.dialog[2]`): `2^3` — também é potência de
  base 2, mas com expoente **numérico** (`3`), que tem cobertura Unicode
  completa e confiável. Este caso **foi normalizado** para `2³`.

Regra geral: normalize quando o expoente for um único token conhecido
(dígito(s) e/ou uma letra do dataset) com sobrescrito Unicode confiável.
Não force uma conversão para expressões compostas ou letras maiúsculas raras
— o `^` ASCII legível é preferível a um glyph que pode não renderizar em
todo navegador/fonte.

---

## 2. Por que isso funciona em qualquer sistema operacional

A fonte "gibi" do projeto (Comic Neue, self-hosted em
`public/fonts/comic-neue-*.woff2`) **não desenha** a maioria dos glyphs de
sobrescrito usados aqui — só os 3 legados de Latin-1 (`¹²³`). Sem glyph
próprio, cada navegador/SO cai num fallback de fonte diferente para os
demais caracteres, o que causava inconsistência visual entre Windows e
Ubuntu (o motivo original desta investigação).

A correção (em `src/App.css`) é um `@font-face` adicional, com o **mesmo**
`font-family: 'Comic Neue'`, mas restrito via `unicode-range` só aos
codepoints de sobrescrito/subscrito:

```css
@font-face {
  font-family: 'Comic Neue';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('/fonts/noto-sans-super-sub.woff2') format('woff2');
  unicode-range: U+00B2-00B3, U+00B9, U+2070-209F, U+02B0-02FF, U+1D00-1D7F;
}
```

O navegador usa essa fonte **só** para glyphs dentro desse `unicode-range`
— o resto do texto continua na Comic Neue de verdade. Isso garante tamanho e
posição idênticos em qualquer SO, sem precisar tocar em nenhum componente
React. `public/fonts/noto-sans-super-sub.woff2` é um subset de ~2KB do Noto
Sans (SIL Open Font License), gerado via Google Fonts API + `fonttools`
(`pyftsubset`), contendo só os ~22 glyphs realmente usados no dataset — não
a fonte inteira.

**Se adicionar uma nova letra sobrescrita ao dataset** (fora de
`n,m,p,r,s,t,u,k,i,j` + dígitos), confirme que o glyph existe no subset
custom antes de usá-la — senão ela vai cair de volta no fallback do SO e
reintroduzir a inconsistência visual original. Para gerar um novo subset
cobrindo mais caracteres, repita o processo: baixe o TTF do Google Fonts CSS2
API (`family=Noto+Sans&text=<glyphs>`), converta para woff2 com `fonttools`,
e amplie o `unicode-range` no CSS de acordo.

---

## 3. Por que a validação de resposta (AFD Parte 2) não quebrou

A tela "Descrição Formal" (`useP2Answer.js`) compara a resposta digitada
pelo jogador com `level.formula`/`level.aliases` via uma função `normalize()`
bastante elaborada — ela entende semanticamente padrões como `bb^n` (uma
regra especial para dobras + expoente) e faz canonicalização de nomes de
variável (a ordem em que `n`, `m`, `p`... aparecem no enunciado do jogador
não precisa bater com a do gabarito, contanto que a *estrutura* seja igual).

Essa lógica inteira é construída em cima do caractere `^` ASCII — e o
jogador **só consegue digitar `^`** (não existe tecla de sobrescrito num
teclado comum). Migrar `formula` para Unicode sem mexer em `normalize()`
faria o charset final da função (que descarta qualquer caractere fora de
`[a-z0-9^*+|(),_.=><!]`) **apagar silenciosamente** todo `ⁿ`/`ᵐ`/etc. do
gabarito — a fórmula esperada perderia os expoentes e nenhuma resposta
correta seria mais aceita.

A correção: `normalize()` agora começa convertendo qualquer sobrescrito
Unicode de volta para a forma `^letra` ASCII, **antes** de qualquer outra
transformação (`superscriptToAscii()`, topo de `useP2Answer.js`). Um "^" é
inserido só no **início** de cada bloco contíguo de caracteres sobrescritos
(ex.: `b²ᵐ` → `b^2m`, não `b^2^m`), reproduzindo exatamente o formato ASCII
original. Isso significa que tanto a entrada do jogador (`a^n`, sempre
ASCII) quanto o gabarito (`aⁿ`, convertido de volta) chegam no mesmo formato
interno antes do resto do algoritmo — que não precisou de nenhuma outra
mudança.

**Se adicionar um novo caractere de sobrescrito ao dataset**, adicione-o
também em `SUPERSCRIPT_TO_ASCII` (`useP2Answer.js`) — senão a comparação de
resposta vai silenciosamente falhar para esse nível específico.

---

## 4. Variáveis renomeadas (q → k)

Dois níveis usavam a letra `q` como variável de expoente (`c^q`), que não
tem sobrescrito Unicode (seção 1). Renomeada para `k` — próxima letra livre
na lista canônica do projeto (`n, m, p, k, j, i` em `useP2Answer.js`) que
não colidia com as demais variáveis já usadas em cada nível:

- **L56**: `(bc)^q` → `(bc)^k`, condição `q > 0` → `k > 0` (as demais
  variáveis do nível, `n,m,p`, não usam `k`).
- **L58** (boss final "Trabalho"): `c^q` → `c^k`, condição `q > 0` → `k > 0`
  — L58 já usava todas as outras 7 letras da lista canônica (`n,m,p,r,s,t,u`),
  então `k` era a única livre.
- **L59** (prova): `d^q` → `d^k` (nível usava só `n,m,p,q`, sem conflito).

Isso é só uma mudança de rótulo/enunciado — a semântica e o autômato de
cada nível permanecem os mesmos, só o nome da variável de contagem mudou.
