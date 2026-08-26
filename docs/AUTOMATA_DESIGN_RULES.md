# Regras de Design de Autômatos — AutoQuest / TuringLab

> Leis destiladas das correções feitas durante o desenvolvimento dos módulos AFD (L21–L61).
> Consulte este arquivo antes de projetar novos grafos.

---

## 1. Armadilhas Clássicas (Bugs Frequentes)

### 1.1 Paridade / Contagem — Proibido Self-Loop no Símbolo Contado

**Regra:** Estados que rastreiam paridade ou contagem de um símbolo **não podem ter self-loop** no próprio símbolo contado.

**Por quê:** Um self-loop em `qi` lendo `x` significa que `qi` é tanto "viu um `x`" quanto "viu dois `x`" — o estado perde a capacidade de distinguir par de ímpar. O resultado visual é o padrão "Borboleta" (dois ciclos se encontrando no mesmo nó) ou "Quadrado Perfeito" que aceita palavras erradas.

**Exemplo correto (L38 / L39):**
```
q0=(par,par) --a--> q2=(ímpar,par)  // q0 NÃO tem loop em 'a'
q2 --a--> q0                         // par de 'a' volta ao par
```

**Sinal de alarme:** Se um estado de contagem tem `{ from: qi, to: qi, symbol: 'x' }` onde `x` é o símbolo que esse estado conta, o grafo está errado.

---

### 1.2 KMP (Detectores de Subpalavra / Sufixo) — Backedges Devem Respeitar o Sufixo Mais Longo

**Regra:** Nos estados de um detector KMP, a aresta de "mismatch" nunca deve voltar cegamente para `q0`. Ela deve avançar para o estado que representa **o maior sufixo do padrão que também é prefixo** do que foi lido.

**Por quê:** Voltar sempre para `q0` descarta informação já processada. Por exemplo, no detector de `"1010"` (L34): ao estar em `q4` e ler `1`, o AFD já leu o prefixo `"101"` de um novo sufixo — a aresta correta é `q4 --1--> q3`, não `q4 --1--> q0`.

**Exemplo incorreto (anti-padrão):**
```
// L34 — ERRADO: todas as falhas voltam para q0
q4 --1--> q0   // descarta "101" já lido
```

**Exemplo correto (L34, L37, L36):**
```
// L34 — CORRETO: backedge conserva o contexto
q4 --1--> q3   // "101" já foi lido; q3 representa 3 símbolos do sufixo
q4 --0--> q0   // nenhum contexto aproveitável, volta para q0
```

**Como calcular o backedge:** Para cada estado `qi` no caminho feliz e cada símbolo `s` que causa mismatch, encontre o maior sufixo de `(caminho percorrido até qi) + s` que seja prefixo do padrão. O estado correspondente a esse sufixo é o destino do backedge.

**Casos cobertos:** L34 (sufixo `1010`), L36/L37 (sufixo `dcba`, `abcd` ou `dcba`).

---

### 1.3 Ordem Estrita (Interleaving) — Isolamento de Blocos

**Regra:** Para linguagens do tipo `a* b* c* ...` (blocos em ordem estrita), o estado que começa a processar o bloco `b` **não pode ter transição de volta para `a`**. Estados de blocos devem ser isolados unidirecionalmente.

**Por quê:** Permitir `a` depois que `b` foi lido viola a ordem estrita. O autômato precisa "travar" na progressão: uma vez avançado ao bloco seguinte, não há retorno.

**Exemplo correto (L21 — `a*b*c*d*`):**
```
q0(a,ini,f) --b--> q1(b,f)  // q1 NÃO tem aresta de volta para 'a'
q1 --c--> q2(c,f)            // q2 NÃO tem aresta para 'a' ou 'b'
```

**Exceção válida:** Atalhos para frente são permitidos (ex: `q0 --d--> q3` para pular blocos b e c), mas nunca para trás.

**Casos cobertos:** L21 (`a*b*c*d*`), L40 / L47 (`aⁿ b²ᵐ d c³ᵖ d`).

---

## 2. Regras de Layout Visual

### 2.1 Grafos com Dois Ramos Paralelos (ex: L37 — 8 estados)

Use o layout **Faixas Paralelas**:
- Ramo A no topo (`y ≈ 15`)
- Nó inicial e final no centro (`y ≈ 50`)
- Ramo B na base (`y ≈ 85`)

```
coords exemplo para L37:
  q0:[10,50]  qa1:[30,15]  qa2:[52,15]  qa3:[72,15]  qf:[90,50]
              qd1:[30,85]  qd2:[52,85]  qd3:[72,85]
```

As arestas de reset KMP (backedges transversais) ficam naturalmente curvadas entre as faixas, sem cobrir o caminho feliz.

### 2.2 Grafos com Dois Ciclos Satélites (ex: L40 / L47 — 7 estados)

Use o layout **Hexagonal**:
- Estado inicial (`q0`) à esquerda
- Ciclo 1 (bb-pares) no topo
- Estado ponte (`q2`) no centro-direita
- Ciclo 2 (ccc-trios) na base
- Estado final (`q5`) à direita

```
coords exemplo para L40 / L47:
  q0:[8,50]  q1:[22,18]  qe:[44,10]
             q2:[62,50]
             q3:[48,84]  q4:[70,84]  q5:[90,50]
```

### 2.3 Grafos de Cubo de Paridade (ex: L32, L46, L47 — 8 estados)

Use o layout **Retângulo 4×2**:
```
ppp [15,28]  pip [38,28]  ppi [62,28]  pii [85,28]
ipp [15,72]  iip [38,72]  ipi [62,72]  iii [85,72]
```

As arestas de cada símbolo formam linhas paralelas no eixo correspondente (a = vertical, b = horizontal, c = cruzada). Evita espaguete.

### 2.4 Grafos Lineares / Trilho (ex: L24, L25, L26, L33, L36)

Use posições uniformemente espaçadas no eixo X, todos na mesma altura (`y = 50`):
```
q0:[12,50]  q1:[38,50]  q2:[64,50]  q3:[88,50]
```

---

## 3. Padrão de Nomeação de Estados

| Padrão       | Uso                                       |
|--------------|-------------------------------------------|
| `q0, q1, ..` | Estado genérico sequencial                |
| `qe`         | Estado de "b-par" (even) no ciclo bb      |
| `qf`         | Estado final único (sink final)           |
| `pp, pi, ip, ii` | Paridade dupla (par/ímpar × par/ímpar)|
| `ppp..iii`   | Paridade tripla (cubo de 8 estados)       |
| `qa1..qa3`   | Caminho do padrão A (ex: `abcd`)          |
| `qd1..qd3`   | Caminho do padrão D (ex: `dcba`)          |

---

## 4. Checklist Antes de Publicar um Novo Grafo

- [ ] Self-loops nos estados de contagem/paridade **não usam o símbolo contado**
- [ ] Backedges KMP calculados pela regra do sufixo mais longo (não todos voltam a `q0`)
- [ ] Blocos de ordem estrita **sem aresta reversa** entre blocos
- [ ] Layout visual escolhido pelo padrão topológico (faixas, hexágono, cubo, trilho)
- [ ] Menor palavra testada manualmente no grafo estático (`LEVEL_GRAPHS`)
- [ ] `boardWords` inclui pelo menos 1 aceita e 1 rejeitada representativa
- [ ] `guidedLesson` termina com `b.formalIntro(...)` no último step
