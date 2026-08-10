// ── MT Reconhecedora L13: {aⁿb²ⁿ⁺² / n > 0} ──────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/reconhecedora/L13.xml
// (verificado por fuzz contra a linguagem formal antes da conversão).

const MT_RECON_L13 = {
  id:          'MT_RECON_L13',
  label:       'L13',
  type:        'recognizer',
  level:       'medium',
  alphabet:    ["a","b"],
  tapeAlphabet: ["A","B","a","b","□"],
  language:    '{aⁿb²ⁿ⁺² / n > 0}',
  description: 'Reconheça aⁿb²ⁿ⁺²: para cada "a", dois "b", mais dois "b" extras no final (n estritamente positivo).',
  hint:        'Como no aⁿb²ⁿ, mas separe DOIS "b" extras antes de parear o resto.',
  acceptedWords: ["abbbb","aabbbbbb","aaabbbbbbbb"],
  rejectedWords: ["","a","b","bbbb","abbb","abbbbb","aabbbbb"],
  formalDescription: {
    sigma:   '{a,b}',
    gamma:   '{A,B,a,b,□}',
    states:  '{q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14}',
    initial: 'q1',
    final:   '{q14}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
    {
      "prof": {
        "message": "Bem-vindo! Vamos construir a MT Reconhecedora da linguagem {aⁿb²ⁿ⁺² / n > 0}.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [],
        "transitions": []
      }
    },
    {
      "prof": {
        "message": "Vamos testar a palavra \"abbbb\". Começamos no estado inicial q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3475,
            "y": 3870,
            "isInitial": true,
            "isFinal": false
          }
        ],
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "a",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'a', vamos para q2, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,{"uid":"q2","id":"q2","label":"q2","x":3726,"y":3758,"isInitial":false,"isFinal":false}]},
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "a",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'b', vamos para q3, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,{"uid":"q3","id":"q3","label":"q3","x":3990,"y":3758,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[{"from":"q2","to":"q3","read":"b","write":"B","move":"R"},0]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q2"
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
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'b', vamos para q4, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,{"uid":"q4","id":"q4","label":"q4","x":4215,"y":3754,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,{"from":"q3","to":"q4","read":"b","write":"B","move":"R"},1]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler 'b', vamos para q5, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,{"uid":"q5","id":"q5","label":"q5","x":4456,"y":3749,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[{"from":"q4","to":"q5","read":"b","write":"B","move":"R"},0,1,2]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "b",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'b', vamos para q6, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,{"uid":"q6","id":"q6","label":"q6","x":4671,"y":3846,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[{"from":"q5","to":"q6","read":"b","write":"B","move":"L"},0,1,2,3]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "b",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler 'B', vamos para q6, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,{"from":"q6","to":"q6","read":"B","write":"B","move":"L"},3,4]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler 'A', vamos para q7, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,{"uid":"q7","id":"q7","label":"q7","x":3726,"y":3852,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,1,2,3,4,{"from":"q6","to":"q7","read":"A","write":"A","move":"R"},5]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'B', vamos para q11, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,{"uid":"q11","id":"q11","label":"q11","x":3330,"y":4233,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,1,2,{"from":"q7","to":"q11","read":"B","write":"B","move":"R"},3,4,5,6]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Nova regra: em q11, ao ler 'B', vamos para q11, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,{"from":"q11","to":"q11","read":"B","write":"B","move":"R"},6,7]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Nova regra: em q11, ao ler '□', vamos para q12, escrevemos '□' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,{"uid":"q12","id":"q12","label":"q12","x":3641,"y":4242,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,1,{"from":"q11","to":"q12","read":"","write":"","move":"L"},2,3,4,5,6,7,8]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Nova regra: em q12, ao ler 'B', vamos para q12, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,{"from":"q12","to":"q12","read":"B","write":"B","move":"L"},6,7,8,9]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Nova regra: em q12, ao ler 'A', vamos para q13, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,{"uid":"q13","id":"q13","label":"q13","x":3870,"y":4248,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[{"from":"q12","to":"q13","read":"A","write":"A","move":"L"},0,1,2,3,4,5,6,7,8,9,10]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Nova regra: em q13, ao ler '□', vamos para q14, escrevemos '□' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,{"uid":"q14","id":"q14","label":"q14","x":4143,"y":4251,"isInitial":false,"isFinal":true}]},
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,{"from":"q13","to":"q14","read":"","write":"","move":"R"},6,7,8,9,10,11]}
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Chegamos em q14 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abbbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q14",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"aaabbbbbbbb\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "a",
        "a",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'a', vamos para q2, escrevemos 'a' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,{"from":"q2","to":"q2","read":"a","write":"a","move":"R"},10,11,12]}
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
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
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 4,
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
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q2"
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
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler 'a', vamos para q6, escrevemos 'a' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,{"from":"q6","to":"q6","read":"a","write":"a","move":"L"},8,9,10,11,12,13]}
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'a', vamos para q8, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,{"uid":"q8","id":"q8","label":"q8","x":4039,"y":4132,"isInitial":false,"isFinal":false},7,8,9,10]},
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,{"from":"q7","to":"q8","read":"a","write":"A","move":"R"},7,8,9,10,11,12,13,14]}
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Nova regra: em q8, ao ler 'a', vamos para q8, escrevemos 'a' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,{"from":"q8","to":"q8","read":"a","write":"a","move":"R"},13,14,15]}
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Nova regra: em q8, ao ler 'B', vamos para q8, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,{"from":"q8","to":"q8","read":"B","write":"B","move":"R"},14,15,16]}
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Nova regra: em q8, ao ler 'b', vamos para q9, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,{"uid":"q9","id":"q9","label":"q9","x":4311,"y":4134,"isInitial":false,"isFinal":false},8,9,10,11]},
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,{"from":"q8","to":"q9","read":"b","write":"B","move":"R"},11,12,13,14,15,16,17]}
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler 'b', vamos para q10, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,{"uid":"q10","id":"q10","label":"q10","x":4624,"y":4132,"isInitial":false,"isFinal":false},9,10,11,12]},
        "transitions": {"base":"prev","items":[0,1,2,3,{"from":"q9","to":"q10","read":"b","write":"B","move":"L"},4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]}
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler 'B', vamos para q10, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,{"from":"q10","to":"q10","read":"B","write":"B","move":"L"},11,12,13,14,15,16,17,18,19]}
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler 'a', vamos para q10, escrevemos 'a' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,{"from":"q10","to":"q10","read":"a","write":"a","move":"L"},12,13,14,15,16,17,18,19,20]}
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler 'A', vamos para q7, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,{"from":"q10","to":"q7","read":"A","write":"A","move":"R"},16,17,18,19,20,21]}
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 13,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Nova regra: em q13, ao ler 'A', vamos para q13, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,{"from":"q13","to":"q13","read":"A","write":"A","move":"L"},14,15,16,17,18,19,20,21,22]}
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q14.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q14"
    },
    {
      "prof": {
        "message": "Chegamos em q14 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aaabbbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q14",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Grafo finalizado! 🎉 Agora vamos formalizar matematicamente a nossa Máquina de Turing.",
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
        "message": "Q é o conjunto de ESTADOS: {q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "states": "{q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14}"
      }
    },
    {
      "prof": {
        "message": "Σ é o alfabeto de ENTRADA: {a,b}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "sigma": "{a,b}"
      }
    },
    {
      "prof": {
        "message": "Γ é o alfabeto da FITA: {A,B,a,b,□}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "gamma": "{A,B,a,b,□}"
      }
    },
    {
      "prof": {
        "message": "q0 é o estado INICIAL: q1",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "initial": "q1"
      }
    },
    {
      "prof": {
        "message": "O símbolo BRANCO: □",
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
        "message": "F é o conjunto de estados de ACEITAÇÃO: {q14}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "final": "{q14}"
      }
    },
    {
      "prof": {
        "message": "Por fim, a função δ completa — Máquina formalizada! ✓",
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
            "from": "q12",
            "to": "q13",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q11",
            "to": "q12",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q14",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q7",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q8",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          }
        ]
      }
    }
  ],
  },
};

export default MT_RECON_L13;
