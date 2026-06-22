# Roadmap — MT Transdutora L2–L16

> Planejamento arquitetural para implementação em lotes.
> Cada nível lista: Objetivo · Alfabetos · Estratégia de Estados · Roteiro da Aula.
> **Nenhum código JS aqui** — codificar apenas após validação deste arquivo.

---

## Convenções

| Símbolo | Significado |
|---------|-------------|
| `□`     | Branco (BLANK) |
| `R / L` | Move cabeçote para Direita / Esquerda |
| `x;y,D` | Lê `x`, escreve `y`, move para direção `D` |
| Loop    | Transição `q → q` (self-loop) |
| `validate(w)` | Função JS que retorna a string esperada na fita após aceitar |

---

## BLOCO 1 — Varredura Direta (L2–L4) · `easy`

> Padrão: q0 faz tudo em um único sweep L→R; q_f aceita ao encontrar □.
> Sem scan-back. Introduz o conceito de escrever na fita enquanto avança.

---

### L2 — Complemento Bit-a-Bit

**Objetivo:** Inverter cada bit: `0→1`, `1→0`.
Ex.: `010` → `101`.

**Alfabetos:**
- Σ = `{0, 1}`
- Γ = `{0, 1, □}`

**Estratégia de Estados (2 estados):**
```
q0 (inicial): loop 0;1,R e loop 1;0,R → ao ler □ vai para qf sem escrever.
qf (final): estado de aceitação.
```
`validate(w)` = `w.split('').map(c => c==='0'?'1':'0').join('')`
`testWords` = `['010','1','0011','1100']`
`skipEmptyWord` = true

**Roteiro da Aula (≈10 passos):**
1. DRAW — Introdução: "Vamos inverter bits! q0 recebe cada bit e escreve o oposto."
2. DRAW — Revela q0 + aresta `0;1,R`. Simula `010`, head=0, fita=`□010□`.
3. DRAW — Revela aresta `1;0,R`. Mostra q0 lendo `0`, escrevendo `1`.
4. TEST — Roda `010` frame-a-frame: `□010□` → `□101□`. Status ACCEPTED.
5. TEST — Roda `1100`: `□1100□` → `□0011□`. Reforça o padrão.
6. REJECT — Digita `2` → bloqueado pelo validador de entrada (caractere inválido).
   *(Usar esse momento para explicar que Σ só aceita {0,1}).*
7. FORMAL — Preenche 7-tupla campo a campo.

---

### L3 — Inserir Marcador no Fim

**Objetivo:** Acrescentar `#` ao final da palavra: `aba` → `aba#`.

**Alfabetos:**
- Σ = `{a, b}`
- Γ = `{a, b, #, □}`

**Estratégia de Estados (2 estados):**
```
q0 (inicial): loop a;a,R e b;b,R (avança sem alterar) → ao ler □ escreve # e vai para qf.
qf (final): aceitação.
```
`validate(w)` = `w + '#'`
`testWords` = `['ab','a','bba','']` (palavra vazia → `#`)

**Roteiro da Aula (≈8 passos):**
1. DRAW — "Queremos marcar o fim da palavra. q0 avança sem alterar nada."
2. DRAW — Revela q0 + loops `a;a,R` e `b;b,R`.
3. TEST — Simula `ab` até chegar no □.
4. DRAW — "Ao encontrar o branco, escrevemos `#`." Revela aresta `□;#,R` → qf.
5. TEST — Fita final: `□ab#□`. Status ACCEPTED.
6. TEST — Testa palavra vazia: fita `□□` → escreve `#` imediatamente → `□#□`.
7. FORMAL — Preenche 7-tupla. Destaque: Γ inclui `#` que não está em Σ.

---

### L4 — Incremento Unário

**Objetivo:** Acrescentar um `1` ao final: `111` → `1111` (representa n+1).

**Alfabetos:**
- Σ = `{1}`
- Γ = `{1, □}`

**Estratégia de Estados (2 estados):**
```
q0 (inicial): loop 1;1,R → ao ler □ escreve 1 e vai para qf.
qf (final): aceitação.
```
`validate(w)` = `w + '1'`
`testWords` = `['1','111','11111','']` (vazio → `1`, ou seja, 0+1=1)

**Roteiro da Aula (≈8 passos):**
1. DRAW — "Unário: n `1`s representam o número n. Queremos n+1."
2. DRAW — Revela q0 + loop `1;1,R`.
3. TEST — Simula `111`: avança até o □.
4. DRAW — "No □, escrevemos mais um `1`." Revela `□;1,R` → qf.
5. TEST — Fita final: `□1111□`. ACCEPTED.
6. TEST — Testa `1` (1→11) e `11111` (5→6).
7. FORMAL.

---

## BLOCO 2 — Scan-Back e Marcação (L5–L8) · `medium`

> Padrão: dois ou mais passes na fita; usa marca temporária (X, Y) para guardar posição.
> Introduz o ciclo "avança → marca → volta → altera → limpa".

---

### L5 — Decremento Unário

**Objetivo:** Apagar o último `1`: `1111` → `111` (representa n−1).

**Alfabetos:**
- Σ = `{1}`
- Γ = `{1, □}`

**Estratégia de Estados (3 estados):**
```
q0 (inicial): loop 1;1,R → ao ler □ muda para q1 (virou).
q1: move L sem alterar; ao ler 1 escreve □ e vai para qf (apagou o último).
qf (final): aceitação.
```
`validate(w)` = `w.length > 0 ? w.slice(0,-1) : ''`
`testWords` = `['1111','11','1','111']`
`skipEmptyWord` = true

**Roteiro da Aula (≈12 passos):**
1. DRAW — "Para apagar o ÚLTIMO `1`, precisamos primeiro achar o fim."
2. DRAW — q0 + loop `1;1,R`. Simula `1111`, avança até □.
3. DRAW — "Achamos o □: hora de VOLTAR." Revela `□;□,L` → q1.
4. TEST — Frame: q0 lê □, vai para q1, head recua.
5. DRAW — "Em q1, ao ler `1`, apagamos (escrevemos □) e aceitamos." Revela `1;□,R` → qf.
6. TEST — Fita: `□111□` (o 4º `1` virou □). ACCEPTED.
7. REJECT — Testa palavra vazia (skipEmptyWord) — mostrar que a MT para imediatamente em q0 lendo □ sem transição → REJEITA. Explica por que pulamos esse caso.
8. FORMAL.

---

### L6 — Inverter 2 Símbolos (Swap ab → ba)

**Objetivo:** Dado exatamente `ab`, produzir `ba`. Introduz o padrão de marcação por posição.

**Alfabetos:**
- Σ = `{a, b}`
- Γ = `{a, b, X, Y, □}`

**Estratégia de Estados (4 estados):**
```
q0: lê 'a', escreve X (marca posição 1), move R → q1.
q1: lê 'b', escreve Y (marca posição 2), move L → q2.
q2: lê X, escreve 'b', move R → q3.
q3: lê Y, escreve 'a', move R → qf.
qf (final).
```
`validate(w)` = `w === 'ab' ? 'ba' : null` (só aceita `ab` exato)
`testWords` = `['ab']`

> **Nota de design:** Este nível é intencional em aceitar apenas `ab` — ensina marcação
> sem a complexidade de um loop. L7 generaliza para strings arbitrárias.

**Roteiro da Aula (≈10 passos):**
1. DRAW — "Queremos trocar as posições de `a` e `b`. Usaremos marcas temporárias X e Y."
2. DRAW — Revela q0 + `a;X,R` → q1.
3. TEST — Fita: `□Xb□`, head em q1.
4. DRAW — Revela q1 + `b;Y,L` → q2. Fita: `□XY□`.
5. TEST — q2 lê X, deve virar 'b'.
6. DRAW — Revela q2 + `X;b,R` → q3 e q3 + `Y;a,R` → qf.
7. TEST — Fita final: `□ba□`. ACCEPTED.
8. REJECT — Testa `ba` → q0 lê 'b', sem transição → REJEITA. Mostra que a MT é específica.
9. FORMAL.

---

### L7 — Inverter String Arbitrária

**Objetivo:** `abc` → `cba` (reverso de qualquer string sobre `{a,b}`).

**Alfabetos:**
- Σ = `{a, b}`
- Γ = `{a, b, X, □}`

**Estratégia de Estados (5 estados):**
```
q0: scan R até □ → recua para q1.
q1: lê último símbolo não-X, marca com X, vai para q2 (guarda em estado interno*).
q2: scan L até □ da esquerda → vai para q3.
q3: escreve o símbolo guardado na posição mais à esquerda livre, marca com X → q0.
qf: ao encontrar apenas X e □, limpa X→símbolo (não necessário se usarmos dois alfabetos).
```
> *Abordagem alternativa (mais didática): usar símbolos `X_a` e `X_b` no Γ para
> guardar o tipo enquanto o cabeçote percorre a fita. Estados: q0(scan→fim), q1a/q1b
> (guardou a ou b, scan←), q2a/q2b (escreve na esquerda), qf.

**Alfabeto revisado para a abordagem didática:**
- Γ = `{a, b, X, Xa, Xb, □}` (Xa = posição marcada que tinha 'a'; Xb = posição que tinha 'b')
- Estados: 6 — `q0, q1a, q1b, q2a, q2b, qf`

`validate(w)` = `w.split('').reverse().join('')`
`testWords` = `['ab','ba','aba','aab']`

**Roteiro da Aula (≈16 passos):**
1. DRAW — Contexto: "Precisamos de múltiplos passes. Cada passe pega o último símbolo e coloca no início."
2. DRAW — q0 + loops `a;a,R` e `b;b,R`. Simula `ab` avançando até □.
3. DRAW — `□;□,L` → q1 (virou). Head recua.
4. DRAW — q1 lê 'b': escreve Xb e vai para q2b (guardou o tipo). Fita: `□aXb□`.
5. DRAW — q2b loops `a;a,L`, `b;b,L`, `Xb;Xb,L`, `Xa;Xa,L`. Scan até □.
6. DRAW — q2b lê □: vai para q3b (chegou ao início).
7. DRAW — q3b lê a/Xa/Xb: escreve 'b' (deposita o símbolo guardado), move R → q0.
8. TEST — Fita após 1º passe: `□bXb□` → 2º passe começa.
9. TEST — 2º passe: q0 avança até Xb, vê que está no fim útil (Xb = marcado), recua.
10. TEST — Pega 'a' (único símbolo não-marcado), marca Xa, deposita 'a' na esquerda.
11. TEST — Fita final: `□ba□` — "Invertido! ✓"
12. REJECT — Testa palavra vazia → qf imediata com fita `□□`. Output = vazio = reverso de vazio ✓ (ACCEPTED na verdade).
13. FORMAL — Destaque em Γ (6 símbolos) vs Σ (2 símbolos).

---

### L8 — Duplicar String (w → ww)

**Objetivo:** `ab` → `abab` (palavra concatenada com ela mesma).

**Alfabetos:**
- Σ = `{a, b}`
- Γ = `{a, b, A, B, #, □}` (A/B = cópia já feita, # = separador temporário)

**Estratégia de Estados (6 estados):**
```
Passe 1 — Marcação e cópia:
  q0: lê 'a'→A (marca como "já copiado"), scan R até # ou □, escreve 'a' após o #,
      volta scan L até A, avança para próximo símbolo não-marcado.
  (idem para 'b'→B)
Passe 2 — Limpeza:
  Ao não encontrar mais símbolos por marcar (só A e B antes do #):
  qclean: percorre toda a fita, A→a, B→b, # → □.
  qf: final.
```
`validate(w)` = `w + w`
`testWords` = `['ab','a','bb','aba']`
`skipEmptyWord` = true

**Roteiro da Aula (≈18 passos):**
1. DRAW — "Duplicar é um problema clássico: copiamos símbolo a símbolo."
2. DRAW — "Estratégia: marca cada símbolo original como 'já copiado' (a→A) e deposita uma cópia no fim."
3. DRAW — Revela q0 + `a;A,R`. Head vai para a direita.
4. DRAW — Loop de scan (`A;A,R`, `B;B,R`, `b;b,R`) → ao achar □ escreve 'a' (1ª cópia).
5. TEST — Frame-a-frame `a`: `□a□` → `□A□a□`.
6. DRAW — Scan de volta (q_back): `a;a,L`, `A;A,L`, `B;B,L` → ao achar □ da esquerda, avança para próximo.
7. TEST — Testa `ab` passo a passo: `□ab□` → `□ABab□` → `□abab□` (após limpeza).
8. DRAW — Fase de limpeza: `A→a`, `B→b`.
9. TEST — Fita final `□abab□`. ACCEPTED.
10. FORMAL.

---

## BLOCO 3 — Aritmética (L9–L12) · `medium` → `hard`

---

### L9 — Soma Unária

**Objetivo:** `1^n # 1^m → 1^(n+m)`. Apaga o `#` e junta os dois blocos.
Ex.: `111#11` → `11111`.

**Alfabetos:**
- Σ = `{1, #}`
- Γ = `{1, #, □}`

**Estratégia de Estados (3 estados):**
```
q0: loop 1;1,R → ao ler # escreve 1 e vai para q1.
q1: loop 1;1,R → ao ler □ vai para q2.
q2: scan L até encontrar o 1 extra que sobrou; ele já está lá.
```
> **Mais simples:** `q0` avança até #, substitui por `1` e continua — mas cria um `1` extra.
> Alternativa correta: apagar o `#` sem criar `1` extra, depois recuar e apagar o último `1`.
> Estratégia definitiva:
```
q0: loop 1;1,R → ao ler # escreve □ e vai para q1.
q1: loop 1;1,R → ao ler □ vai para q2 (sem alterar).
q2: move L → ao ler 1 vai para qf (aceitou; a fita tem 1^(n+m) compactados).
```
> Aguarda: se apagamos o # temos `□1^n □ 1^m□` — há um buraco. Precisamos de compactação.
> **Estratégia revisada (marca e desloca):**
> `q0` → scan até `#`, marca como `X`. `q1` → scan R ao próximo `1`, troca por `□` (apaga), volta L até `X`, troca `X` por `1`, repete. Quando não há mais `1` à direita do `X`, aceita.
> Resultado: `1^(n+m)` sem buraco.

`validate(w)` = `(w) => { const [a,b] = w.split('#'); return '1'.repeat(a.length + b.length); }`
`testWords` = `['111#11','1#1','11111#1','1#11111']`

**Roteiro da Aula (≈14 passos):**
1. DRAW — "Soma em unário = juntar os dois blocos, apagando o #."
2. DRAW — "Estratégia: substituir o # e compact os dois blocos."
3. TEST — Mostra o problema do buraco se simplesmente apagamos o #.
4. DRAW — Revela a estratégia de marca-e-desloca passo a passo.
5. TEST — Simula `111#11` frame-a-frame.
6. TEST — Fita final `11111`. ACCEPTED.
7. REJECT — Testa `#11` (n=0) para mostrar comportamento de borda.
8. FORMAL.

---

### L10 — Incremento Binário (+1)

**Objetivo:** Somar 1 ao número binário escrito na fita (big-endian).
Ex.: `1011` → `1100`.

**Alfabetos:**
- Σ = `{0, 1}`
- Γ = `{0, 1, □}`

**Estratégia de Estados (3 estados):**
```
q0: scan R (sem alterar) até □ → vai para q1 (chegou ao bit menos significativo).
q1 (carry=1): move L.
  - lê 1: escreve 0, permanece em q1 (propaga carry).
  - lê 0: escreve 1, vai para q2 (carry absorvido).
  - lê □: escreve 1, vai para q2 (overflow: 1000).
q2: scan L sem alterar até □ da esquerda → vai para qf.
qf (final).
```
`validate(w)` = `(w) => (parseInt(w,2)+1).toString(2).padStart(w.length,'')`
`testWords` = `['1011','0000','1111','1000']`

**Roteiro da Aula (≈14 passos):**
1. DRAW — "Incremento binário = somar 1 do bit menos significativo, propagando carry."
2. DRAW — q0 + loops `0;0,R` e `1;1,R`. Avança até □.
3. DRAW — q1: `1;0,L` (flipa 1→0, carry continua) e `0;1,R` → qf (absorve carry).
4. TEST — Simula `1011`: q1 flipa o `1` final → `1010`, carry ainda, flipa `1` → `1000`, carry, flipa `0` → `1100`. ACCEPTED.
5. TEST — Simula `1111` (overflow): todos viram `0`, □ vira `1` → `10000`.
6. REJECT — Testa palavra vazia → incremento de 0 = 1 (`□` → `1`). Na verdade ACEITA.
7. FORMAL — Destaque no estado q1 como "carry ativo".

---

### L11 — Complemento de Dois (Negação Binária)

**Objetivo:** Calcular o complemento de dois: flip de bits + incremento.
Ex.: `0101` → `1010` + 1 = `1011`.

**Alfabetos:**
- Σ = `{0, 1}`
- Γ = `{0, 1, □}`

**Estratégia de Estados (5 estados — dois passes encadeados):**
```
Passe 1 (flip): q0 → scan R: 0→1, 1→0. Ao □ vai para q1.
Passe 2 (incremento): q1→q2 (scan L até □), q2 scan R até □:
  q2 (carry): 1;0,R (mantém carry), 0;1,R → q3 (absorve), □;1,R → q3 (overflow).
q3: scan R até □ → qf.
qf (final).
```
`validate(w)` = valor do complemento de dois em n bits.
`testWords` = `['0101','0001','1000','0000']`

> **Nota pedagógica:** Este nível é a COMPOSIÇÃO de L2 (flip) + L10 (incremento).
> Ensina que MTs podem encadear sub-rotinas usando estados como "ponteiros de fase".

**Roteiro da Aula (≈16 passos):**
1. DRAW — Recapitula L2 (flip) e L10 (incremento). "Vamos unir as duas."
2. DRAW — Passe 1 completo (flip): `0101` → `1010`.
3. TEST — Fita após flip: `□1010□`.
4. DRAW — q1: vira o cabeçote. q2: incremento (como L10).
5. TEST — Passe 2: `1010` + 1 = `1011`. ACCEPTED.
6. FORMAL — Destaque: 5 estados = 2 estados de flip + 3 de incremento − sobreposição de qf.

---

### L12 — Subtração Unária

**Objetivo:** `1^n # 1^m → 1^(n−m)` se n ≥ m. Se n < m, rejeita.
Ex.: `11111#11` → `111`.

**Alfabetos:**
- Σ = `{1, #}`
- Γ = `{1, #, X, □}`

**Estratégia de Estados (5 estados — cancelamento par-a-par):**
```
q0: scan R até 1 não-marcado antes do #, marca X, vai para q1.
q1: scan R passando o #, vai até o 1ª não-marcado após o #, marca X, vai para q2.
q2: scan L até X antes do # → q0 (repete).
Parada: quando não há mais 1 antes do # (n ≤ m):
  - se n = m: limpa Xs, apaga #, vai para qf.
  - se n < m: rejeita (há 1s sobrando após o #).
q3 (limpeza): Xs → □, # → □.
qf (final).
```
`validate(w)` = `(w) => { const [a,b] = w.split('#'); const d = a.length - b.length; return d >= 0 ? '1'.repeat(d) : null; }`
`testWords` = `['11111#11','111#111','111#11','1#1']`

**Roteiro da Aula (≈16 passos):**
1. DRAW — "Subtração por cancelamento: para cada `1` do subtraendo, apagamos um do minuendo."
2. DRAW — q0: marca primeiro `1` com X. Vai para q1.
3. DRAW — q1: passa o #, marca primeiro `1` do subtraendo com X. Vai para q2.
4. TEST — Frame `11111#11`: 2 pares cancelados → `XX111#XX□`.
5. DRAW — q2: volta ao início, repete.
6. TEST — Após 2 passos: `□XX111#XX□` → limpa → `□111□`. ACCEPTED.
7. REJECT — Testa `11#111` (n < m): sem `1` livre antes do # → REJEITA.
8. FORMAL.

---

## BLOCO 4 — Algoritmos Clássicos (L13–L16) · `hard`

---

### L13 — Ordenar String (Bubble Sort de 'b' vs 'a')

**Objetivo:** Mover todos os `b`s para após os `a`s: `bab` → `abb`, `aba` → `aab`.

**Alfabetos:**
- Σ = `{a, b}`
- Γ = `{a, b, □}`

**Estratégia de Estados (4 estados — bubble pass):**
```
q0: scan R procurando sequência 'b' seguido de 'a' → ao encontrar, faz swap (b,a → a,b).
    Após swap, reinicia o scan da esquerda (q_restart).
    Se chegou ao □ sem encontrar nenhum 'ba' → string ordenada → qf.
q_restart: scan L até □, vai para q0.
qf (final).
```
> Invariante de parada: sem nenhuma ocorrência de `ba` na fita → todos os `b`s estão após os `a`s.

`validate(w)` = `(w) => [...w].sort((x,y) => x==='a'?-1:y==='a'?1:0).join('')`
`testWords` = `['bab','ba','aba','aabb']` (aabb já ordenado, nenhum passe)

**Roteiro da Aula (≈14 passos):**
1. DRAW — "Bubble sort: cada vez que vemos 'ba', trocamos por 'ab' e reiniciamos."
2. DRAW — q0 loops `a;a,R`. Ao ler `b` vai para q_b.
3. DRAW — q_b: ao ler `a`, troca (escreve `a`, volta L, escreve `b`... na verdade escreve `a` aqui e muda q_b para escrever 'b' na posição anterior).
   > Alternativa: usar dois passes com X como marca do `b` que andou.
4. TEST — Simula `bab`: 1º pass troca posições 0-1 → `abab`... (atenção: `bab` → trocar `ba` em pos 0-1 → `ab` + `b` = `abb`). ✓
5. TEST — Simula `aba`: troca `ba` em pos 1-2 → `aab`. Sem mais `ba`, qf. ACCEPTED.
6. TEST — Simula `aabb` (já ordenado): nenhuma troca → qf direto.
7. FORMAL.

---

### L14 — Multiplicação Unária

**Objetivo:** `1^n # 1^m → 1^(n×m)`.
Ex.: `111#11` → `111111` (3×2=6).

**Alfabetos:**
- Σ = `{1, #}`
- Γ = `{1, #, X, Y, □}`

**Estratégia de Estados (7 estados):**
```
Ideia: para cada `1` não-marcado em 1^n (antes do #),
       copiar todos os `1^m` (após o #) para o fim da fita (uma nova zona à direita do #).
       Ao terminar de copiar, marcar o `1` de 1^n como X. Repetir.
       Ao final, limpar tudo entre □ e o resultado.

q0: encontra 1º `1` não-marcado em 1^n, marca X → q1.
q1: scan R até # → q2.
q2: scan R copiando cada `1` de 1^m: marca Y (já copiado), scan para resultado, escreve `1`, volta → repete.
q3: quando todos de 1^m estão Y, reseta Ys para 1 → q4.
q4: volta para q0 (próximo `1` de 1^n).
q5 (limpeza): apaga Xs, #, 1^n marcados → qf.
qf (final).
```
`validate(w)` = `(w) => { const [a,b] = w.split('#'); return '1'.repeat(a.length * b.length); }`
`testWords` = `['11#11','111#11','1#11111','11#1']`
`skipEmptyWord` = true

**Roteiro da Aula (≈20 passos — roteiro mais longo do módulo):**
1. DRAW — "Multiplicar = somar m vezes o número n. Cada `1` de n dispara uma cópia de m."
2. DRAW — q0 marca 1º `1` de n. Vai para q1.
3. DRAW — q1 scan até # → q2.
4. DRAW — q2 copia os `m` uns para zona de resultado (após o segundo □).
5. TEST — `11#11`: 1ª iteração copia `11` → resultado parcial `11`.
6. TEST — 2ª iteração (2º `1` de n): copia `11` novamente → resultado `1111`.
7. DRAW — Limpeza: apaga Xs, #, lado esquerdo.
8. TEST — Fita final `1111`. ACCEPTED.
9. FORMAL — Destaque: Γ com 5 símbolos; 7 estados.

---

### L15 — Verificar Palíndromo (Transdutor "SIM/NAO")

**Objetivo:** Se a palavra for palíndromo, escrever `SIM`; caso contrário, `NAO`.
Ex.: `aba` → `SIM`, `ab` → `NAO`.

**Alfabetos:**
- Σ = `{a, b}`
- Γ = `{a, b, X, S, I, M, N, O, A, □}`

**Estratégia de Estados (6 estados):**
```
q0: pega primeiro símbolo (a ou b), marca X, vai para q1.
q1: scan R até o último símbolo não-marcado.
q2: compara com o símbolo guardado (via estado q2a ou q2b).
    Se igual: marca X, volta para q0.
    Se diferente: vai para q_nao.
q_par: quando todos marcados, vai para q_sim.
q_sim: apaga tudo, escreve "SIM" → qf.
q_nao: apaga tudo, escreve "NAO" → qf.
qf (final).
```
`validate(w)` = `(w) => w === [...w].reverse().join('') ? 'SIM' : 'NAO'`
`testWords` = `['aba','abba','ab','a','']` (vazio → 'SIM', palindromo trivial)

**Roteiro da Aula (≈16 passos):**
1. DRAW — "Palíndromo = igual ao reverso. Vamos comparar ponta-a-ponta."
2. DRAW — q0: pega 1ª letra, marca X. Dois ramos: q0a (pegou 'a') e q0b (pegou 'b').
3. DRAW — q1: scan até último não-X.
4. DRAW — q2a: ao ler 'a' (igual) → marca X, volta. Ao ler 'b' (diferente) → q_nao.
5. TEST — `aba`: 1ª iteração compara `a` (início) e `a` (fim). Match. Marca ambos.
6. TEST — Sobra `b` no centro (comprimento ímpar) → sempre é palindromo se chegar aqui → q_sim.
7. TEST — Fita final: `□SIM□`. ACCEPTED.
8. REJECT — `ab`: compara `a` com `b`. Mismatch → q_nao. Fita final: `□NAO□`.
9. FORMAL — Destaque: Γ inclui letras de "SIM" e "NAO".

---

### L16 — Converter Unário para Binário

**Objetivo:** `1^n → representação binária de n`.
Ex.: `11111` → `101` (5 em binário).

**Alfabetos:**
- Σ = `{1}`
- Γ = `{1, 0, #, X, □}`

**Estratégia de Estados (8+ estados — algoritmo de divisão repetida):**
```
Algoritmo: divisões sucessivas por 2.
  - A cada iteração: contar os `1`s. Se par, escreve '0' na zona de resultado. Se ímpar, escreve '1'.
  - Dividir por 2: substituir cada par de `1`s por um único `1` (na zona de trabalho).
  - Repetir até restar 0 `1`s.
  - Os bits foram gerados LSB-first; inverter o resultado.

Zona de trabalho: parte esquerda da fita.
Zona de resultado: após `#`.
Inversão final: aplicar algoritmo de L7 (reverso) na zona de resultado.
```
> **Nota de complexidade:** Este é o nível mais complexo do módulo. Estados estimados: 10–12.
> Pode ser simplificado para apenas potências de 2 (n = 2^k) se o nível se mostrar muito difícil.

`validate(w)` = `(w) => w.length === 0 ? '0' : w.length.toString(2)`
`testWords` = `['1','11','111','11111','1111111']`

**Roteiro da Aula (≈22 passos — roteiro bônus, o mais longo):**
1. DRAW — "Binário = potências de 2. A técnica: divisões repetidas por 2, guardando os restos."
2. DRAW — Fase 1: "Verificar paridade" (contar 1s mod 2). q0/q1 alternam 1;X,R.
3. TEST — `11111`: 5 é ímpar → escreve `1` na zona de resultado.
4. DRAW — Fase 2: "Dividir por 2" — cada par de Xs vira um único `1` em zona de trabalho.
5. TEST — `11111` ÷ 2 = `11` (resto 1). Zona de trabalho: `11`.
6. TEST — `11` ÷ 2 = `1` (resto 0). Escreve `0`. Zona de trabalho: `1`.
7. TEST — `1` ÷ 2 = `0` (resto 1). Escreve `1`. Zona de trabalho: `□` (vazio).
8. DRAW — Bits gerados em ordem LSB→MSB: `101`. Precisa inverter.
9. DRAW — Fase 3: inverte zona de resultado (como L7).
10. TEST — Fita final: `□101□`. ACCEPTED (5 = 101₂).
11. FORMAL — "Este nível resume tudo: marcação, aritmética modular, cópia e inversão."

---

## Resumo Executivo

| Nível | Tema | Dificuldade | Estados | Técnica Principal |
|-------|------|-------------|---------|-------------------|
| L2 | Complemento bit-a-bit | easy | 2 | Varredura única |
| L3 | Inserir # no fim | easy | 2 | Varredura única |
| L4 | Incremento unário | easy | 2 | Varredura única |
| L5 | Decremento unário | medium | 3 | Scan-back |
| L6 | Swap ab→ba | medium | 4 | Marcação X/Y |
| L7 | Inverter string | medium | 6 | Marca e troca ponta-a-ponta |
| L8 | Duplicar string | medium | 6 | Marca e cópia |
| L9 | Soma unária | medium | 4 | Marca e compacta |
| L10 | Incremento binário | medium | 3 | Carry R→L |
| L11 | Complemento de 2 | hard | 5 | Composição L2+L10 |
| L12 | Subtração unária | hard | 5 | Cancelamento par-a-par |
| L13 | Ordenar (bubble) | hard | 4 | Bubble pass com reinício |
| L14 | Multiplicação unária | hard | 7 | Cópia iterativa |
| L15 | Palíndromo → SIM/NAO | hard | 6 | Comparação ponta-a-ponta |
| L16 | Unário → binário | hard | 10+ | Divisão repetida + inversão |

---

## Plano de Codificação por Lotes

| Lote | Níveis | Entregável |
|------|--------|------------|
| A | L2, L3, L4 | `buildLessonMT_L2/3/4` + entradas em `MT_LEVELS` |
| B | L5, L6, L7 | scan-back e marcação |
| C | L8, L9, L10 | cópia e aritmética básica |
| D | L11, L12 | aritmética hard |
| E | L13, L14 | algoritmos clássicos |
| F | L15, L16 | composição e bônus |

> Cada lote: implementar `validate`, `testWords`, `alphabet`, `tapeAlphabet` e
> `guidedLesson.steps` **ao mesmo tempo**, garantindo sincronismo oráculo ↔ aula.
