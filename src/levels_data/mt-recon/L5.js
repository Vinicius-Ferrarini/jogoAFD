// ── MT Reconhecedora L5: {aⁿbᵐcᵐdⁿ / n ≥ 0, m > 0} ──────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/reconhecedora/L5.xml
// (verificado por fuzz contra a linguagem formal antes da conversão — ver
// notas abaixo sobre a correção aplicada).
//
// CORREÇÃO NO GABARITO: o XML oficial não tinha a transição q9-(B;B,L)->q9
// (varrer múltiplos "b"/"c" do miolo ao voltar) — sem ela, qualquer palavra
// com m > 1 (2+ pares b/c) travava e era rejeitada incorretamente. Adicionada
// por analogia direta com a regra simétrica já existente q8-(C;C,L)->q8.
// Verificado por fuzz: 0 divergências em 87.381 palavras (alfabeto {a,b,c,d},
// comprimento até 8) comparado contra a definição formal da linguagem.

const MT_RECON_L5 = {
  "id": "MT_RECON_L5",
  "label": "L5",
  "type": "recognizer",
  "level": "hard",
  "alphabet": [
    "a",
    "b",
    "c",
    "d"
  ],
  "tapeAlphabet": [
    "A",
    "B",
    "C",
    "D",
    "a",
    "b",
    "c",
    "d",
    "□"
  ],
  "language": "{aⁿbᵐcᵐdⁿ / n ≥ 0, m > 0}",
  "description": "Reconheça aⁿbᵐcᵐdⁿ: bordas \"a\"/\"d\" simétricas (n ≥ 0) envolvendo um miolo \"b\"/\"c\" também simétrico (m > 0).",
  "hint": "Marque cada \"a\" com o \"d\" correspondente nas bordas; depois marque cada \"b\" com o \"c\" correspondente no miolo.",
  "acceptedWords": [
    "bc",
    "bbcc",
    "abcd",
    "aabbccdd",
    "aaabbbcccddd"
  ],
  "rejectedWords": [
    "",
    "a",
    "b",
    "c",
    "d",
    "ab",
    "bcd",
    "abc",
    "abcc",
    "abccdd",
    "aabbcccdd"
  ],
  "formalDescription": {
    "sigma": "{a,b,c,d}",
    "gamma": "{a,b,c,d,A,B,C,D,□}",
    "states": "{q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11}",
    "initial": "q0",
    "final": "{q11}",
    "blank": "□"
  },
  "guidedLesson": {
    "steps": [
    {
      "prof": {
        "message": "Bem-vindo! Vamos construir a MT Reconhecedora da linguagem {aⁿbᵐcᵐdⁿ / n ≥ 0, m > 0}.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [],
        "transitions": []
      }
    },
    {
      "prof": {
        "message": "Vamos testar a palavra \"bc\". Começamos no estado inicial q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3400,
            "y": 3777,
            "isInitial": true,
            "isFinal": false
          }
        ],
        "transitions": "="
      },
      "simulateWord": "bc",
      "tape": [
        "□",
        "□",
        "b",
        "c",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Criamos q3 e a aresta b;B,R: em q0, ao ler 'b', vamos para q3, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,{"uid":"q3","id":"q3","label":"q3","x":3647,"y":3979,"isInitial":false,"isFinal":false}]},
        "transitions": [
          {
            "from": "q0",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bc",
      "tape": {"d":[2,"B"]},
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Criamos q4 e a aresta c;C,L: em q3, ao ler 'c', vamos para q4, escrevemos 'C' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,{"uid":"q4","id":"q4","label":"q4","x":3952,"y":4043,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[{"from":"q3","to":"q4","read":"c","write":"C","move":"L"},0]}
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bc",
      "tape": {"d":[3,"C"]},
      "head": 2,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Criamos q5 e a aresta B;B,R: em q4, ao ler 'B', vamos para q5, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,{"uid":"q5","id":"q5","label":"q5","x":3403,"y":4048,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[{"from":"q4","to":"q5","read":"B","write":"B","move":"R"},0,1]}
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 2,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Criamos q6 e a aresta C;C,R: em q5, ao ler 'C', vamos para q6, escrevemos 'C' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,{"uid":"q6","id":"q6","label":"q6","x":3593,"y":4219,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,{"from":"q5","to":"q6","read":"C","write":"C","move":"R"},1,2]}
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 4,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Criamos q7 e a aresta □;□,L: em q6, ao ler '□', vamos para q7, escrevemos '□' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,{"uid":"q7","id":"q7","label":"q7","x":3826,"y":4217,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,1,2,3,{"from":"q6","to":"q7","read":"","write":"","move":"L"}]}
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 4,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Criamos q8 e a aresta C;C,L: em q7, ao ler 'C', vamos para q8, escrevemos 'C' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,{"uid":"q8","id":"q8","label":"q8","x":3982,"y":4208,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[{"from":"q7","to":"q8","read":"C","write":"C","move":"L"},0,1,2,3,4]}
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 2,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Criamos q9 e a aresta B;B,L: em q8, ao ler 'B', vamos para q9, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,{"uid":"q9","id":"q9","label":"q9","x":4117,"y":4204,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,{"from":"q8","to":"q9","read":"B","write":"B","move":"L"},1,2,3,4,5]}
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 2,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 1,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Criamos q11 e a aresta □;□,R: em q9, ao ler '□', vamos para q11, escrevemos '□' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,{"uid":"q11","id":"q11","label":"q11","x":4188,"y":3942,"isInitial":false,"isFinal":true}]},
        "transitions": {"base":"prev","items":[{"from":"q9","to":"q11","read":"","write":"","move":"R"},0,1,2,3,4,5,6]}
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 1,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Chegamos em q11 (final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bc",
      "tape": "=",
      "head": 2,
      "activeNode": "q11",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"bbcc\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": [
        "□",
        "□",
        "b",
        "b",
        "c",
        "c",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": {"d":[2,"B"]},
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'b', vamos para q3, escrevemos 'b' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,{"from":"q3","to":"q3","read":"b","write":"b","move":"R"},7]}
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 4,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": {"d":[4,"C"]},
      "head": 3,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler 'b', vamos para q4, escrevemos 'b' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,{"from":"q4","to":"q4","read":"b","write":"b","move":"L"},5,6,7,8]}
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 3,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 2,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'b', vamos para q3, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,{"from":"q5","to":"q3","read":"b","write":"B","move":"R"},8,9]}
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": {"d":[3,"B"]},
      "head": 4,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'C', vamos para q3, escrevemos 'C' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,{"from":"q3","to":"q3","read":"C","write":"C","move":"R"},10]}
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 4,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 5,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": {"d":[5,"C"]},
      "head": 4,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler 'C', vamos para q4, escrevemos 'C' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,{"from":"q4","to":"q4","read":"C","write":"C","move":"L"},5,6,7,8,9,10,11]}
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 4,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 3,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 5,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler 'C', vamos para q6, escrevemos 'C' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,{"from":"q6","to":"q6","read":"C","write":"C","move":"R"},12]}
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 5,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 6,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 5,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 4,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Nova regra: em q8, ao ler 'C', vamos para q8, escrevemos 'C' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,{"from":"q8","to":"q8","read":"C","write":"C","move":"L"},7,8,9,10,11,12,13]}
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 4,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 3,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 2,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler 'B', vamos para q9, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,{"from":"q9","to":"q9","read":"B","write":"B","move":"L"}]}
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 2,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 1,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Chegamos em q11 (final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbcc",
      "tape": "=",
      "head": 2,
      "activeNode": "q11",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"aabcdd\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": [
        "□",
        "□",
        "a",
        "a",
        "b",
        "c",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Nova regra: em q0, ao ler 'a', vamos para q1, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,{"uid":"q1","id":"q1","label":"q1","x":3644,"y":3700,"isInitial":false,"isFinal":false},1,2,3,4,5,6,7,8]},
        "transitions": {"base":"prev","items":[0,1,2,{"from":"q0","to":"q1","read":"a","write":"A","move":"R"},3,4,5,6,7,8,9,10,11,12,13,14,15]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": {"d":[2,"A"]},
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'a', vamos para q1, escrevemos 'a' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,{"from":"q1","to":"q1","read":"a","write":"a","move":"R"},12,13,14,15,16]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'b', vamos para q1, escrevemos 'b' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,{"from":"q1","to":"q1","read":"b","write":"b","move":"R"},13,14,15,16,17]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 5,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'c', vamos para q1, escrevemos 'c' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,{"from":"q1","to":"q1","read":"c","write":"c","move":"R"},14,15,16,17,18]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 5,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 6,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'd', vamos para q2, escrevemos 'D' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,{"uid":"q2","id":"q2","label":"q2","x":3951,"y":3779,"isInitial":false,"isFinal":false},2,3,4,5,6,7,8,9]},
        "transitions": {"base":"prev","items":[{"from":"q1","to":"q2","read":"d","write":"D","move":"L"},0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 6,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'd', escreveu 'D' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": {"d":[6,"D"]},
      "head": 5,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'c', vamos para q2, escrevemos 'c' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,{"from":"q2","to":"q2","read":"c","write":"c","move":"L"},7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 5,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 4,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'b', vamos para q2, escrevemos 'b' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,{"from":"q2","to":"q2","read":"b","write":"b","move":"L"},7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 4,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 3,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'a', vamos para q2, escrevemos 'a' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,{"from":"q2","to":"q2","read":"a","write":"a","move":"L"},9,10,11,12,13,14,15,16,17,18,19,20,21,22]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 3,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 2,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'A', vamos para q0, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,{"from":"q2","to":"q0","read":"A","write":"A","move":"R"},16,17,18,19,20,21,22,23]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 2,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 3,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": {"d":[3,"A"]},
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 5,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 6,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'D', vamos para q1, escrevemos 'D' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,{"from":"q1","to":"q1","read":"D","write":"D","move":"R"},20,21,22,23,24]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 6,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 7,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'd', escreveu 'D' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": {"d":[7,"D"]},
      "head": 6,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'D', vamos para q2, escrevemos 'D' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,{"from":"q2","to":"q2","read":"D","write":"D","move":"L"},8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 6,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 5,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 4,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 3,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 4,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": {"d":[4,"B"]},
      "head": 5,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": {"d":[5,"C"]},
      "head": 4,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 6,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler 'D', vamos para q6, escrevemos 'D' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,{"from":"q6","to":"q6","read":"D","write":"D","move":"R"},24,25,26]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 6,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 7,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 8,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 7,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'D', vamos para q7, escrevemos 'D' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,{"from":"q7","to":"q7","read":"D","write":"D","move":"L"},13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 7,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 6,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 5,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 4,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 3,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler 'A', vamos para q10, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,{"uid":"q10","id":"q10","label":"q10","x":4312,"y":4208,"isInitial":false,"isFinal":false},10]},
        "transitions": {"base":"prev","items":[0,1,2,{"from":"q9","to":"q10","read":"A","write":"A","move":"L"},3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 3,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 2,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler 'A', vamos para q10, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,{"from":"q10","to":"q10","read":"A","write":"A","move":"L"},16,17,18,19,20,21,22,23,24,25,26,27,28,29]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 2,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 1,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler '□', vamos para q11, escrevemos '□' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,{"from":"q10","to":"q11","read":"","write":"","move":"R"},6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]}
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 1,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 2,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Chegamos em q11 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabcdd",
      "tape": "=",
      "head": 2,
      "activeNode": "q11",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Grafo finalizado! 🎉 Agora precisamos formalizar matematicamente a nossa Máquina de Turing. Vamos lá?",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "formalIntro": true
    },
    {
      "prof": {
        "message": "A 7-tupla é M = (Q, Σ, Γ, δ, q0, □, F). Vou preencher campo por campo! Q é o conjunto de ESTADOS: {q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11}.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "states": "{q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11}"
      }
    },
    {
      "prof": {
        "message": "Σ é o alfabeto de ENTRADA: {a,b,c,d}.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "sigma": "{a,b,c,d}"
      }
    },
    {
      "prof": {
        "message": "Γ é o alfabeto da FITA (entrada + marcações + branco): {a,b,c,d,A,B,C,D,□}.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "gamma": "{a,b,c,d,A,B,C,D,□}"
      }
    },
    {
      "prof": {
        "message": "q0 é o estado INICIAL.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "initial": "q0"
      }
    },
    {
      "prof": {
        "message": "O símbolo BRANCO (□) marca as células vazias da fita.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "blank": "□"
      }
    },
    {
      "prof": {
        "message": "F é o conjunto de estados de ACEITAÇÃO: {q11}.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "final": "{q11}"
      }
    },
    {
      "prof": {
        "message": "Em q0 decidimos: se sobrar \"a\", marcamos A e vamos varrer até achar o \"d\" par (q1). Senão (só resta \"b\"), marcamos B e vamos direto pro miolo (q3).",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "delta": [
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      }
    },
    {
      "prof": {
        "message": "Em q1 avançamos sobre tudo até achar o \"d\" livre, que marcamos D e voltamos (L).",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "delta": [
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "L"
          }
        ]
      }
    },
    {
      "prof": {
        "message": "q2 varre de volta até achar o \"A\" do par que acabamos de marcar, retornando a q0 para o próximo par.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "delta": [
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "c",
            "write": "c",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      }
    },
    {
      "prof": {
        "message": "q3/q4/q5 tratam o miolo: marcam o \"b\" mais à esquerda como B, avançam até o \"c\" correspondente (marcado C) e voltam para o próximo par.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "delta": [
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "c",
            "write": "c",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q4",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "C",
            "write": "C",
            "move": "R"
          }
        ]
      }
    },
    {
      "prof": {
        "message": "Quando não sobra mais \"a\" (só \"B\" à frente em q0), vamos para q6/q7/q8: varremos até o fim e voltamos, procurando o \"B\" mais à direita ainda não pareado.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "delta": [
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "c",
            "write": "c",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q4",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q8",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      }
    },
    {
      "prof": {
        "message": "q9 varre os \"B\"s restantes e a borda \"A\" — se achar branco direto (n=0), já aceita; se achar \"A\", vai para q10 confirmar a borda direita.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "delta": [
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "c",
            "write": "c",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q4",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q8",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "R"
          }
        ]
      }
    },
    {
      "prof": {
        "message": "q10 varre os \"A\"s restantes até o branco inicial e aceita em q11. δ completa — Máquina formalizada! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "delta": [
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "c",
            "write": "c",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q4",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q8",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "R"
          }
        ]
      }
    }
  ]
  }
};

export default MT_RECON_L5;
