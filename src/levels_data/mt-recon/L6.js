// ── MT Reconhecedora L6: {w ∈ {a,b}* / |w|a = |w|b} ──────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/reconhecedora/L6.xml
// (verificado por fuzz contra a linguagem formal antes da conversão).

const MT_RECON_L6 = {
  id:          'MT_RECON_L6',
  label:       'L6',
  type:        'recognizer',
  level:       'hard',
  alphabet:    ["a","b"],
  tapeAlphabet: ["A","B","a","b","□"],
  language:    '{w ∈ {a,b}* / |w|a = |w|b}',
  description: 'Reconheça palavras com a mesma quantidade de "a" e de "b", em qualquer ordem.',
  hint:        'Repita: ache um "a" e um "b" (em qualquer posição), marque os dois, volte ao início. Aceita quando não sobrar nenhum dos dois.',
  acceptedWords: ["","ab","ba","abba","baba","aabb","abab"],
  rejectedWords: ["a","b","aab","abb","aabbb","aaabb"],
  formalDescription: {
    sigma:   '{a,b}',
    gamma:   '{A,B,a,b,□}',
    states:  '{q0,q1,q2,q3,q4,q5}',
    initial: 'q0',
    final:   '{q5}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
    {
      "prof": {
        "message": "Bem-vindo! Vamos construir a MT Reconhecedora da linguagem {w ∈ {a,b}* / |w|a = |w|b}.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [],
        "transitions": []
      }
    },
    {
      "prof": {
        "message": "Vamos testar a palavra \"ab\". Começamos no estado inicial q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          }
        ],
        "transitions": []
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "a",
        "b",
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
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "b",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'b', vamos para q3, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "b",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'A', vamos para q3, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler '□', vamos para q0, escrevemos '□' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Nova regra: em q0, ao ler 'A', vamos para q0, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Nova regra: em q0, ao ler 'B', vamos para q0, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Nova regra: em q0, ao ler '□', vamos para q4, escrevemos '□' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler 'B', vamos para q4, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler 'A', vamos para q4, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler '□', vamos para q5, escrevemos '□' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Chegamos em q5 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q5",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"aabbbbaa\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "a",
        "a",
        "b",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'a', vamos para q1, escrevemos 'a' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "B",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'a', vamos para q3, escrevemos 'a' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "B",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "B",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "B",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "B",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "B",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'B', vamos para q1, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "b",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'B', vamos para q3, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Nova regra: em q0, ao ler 'b', vamos para q2, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'b', vamos para q2, escrevemos 'b' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'a', vamos para q3, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "a",
        "a",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'b', vamos para q3, escrevemos 'b' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'A', vamos para q2, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "a",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Chegamos em q5 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aabbbbaa",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q5",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Grafo finalizado! 🎉 Agora vamos formalizar matematicamente a nossa Máquina de Turing.",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "formalIntro": true
    },
    {
      "prof": {
        "message": "Q é o conjunto de ESTADOS: {q0,q1,q2,q3,q4,q5}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "states": "{q0,q1,q2,q3,q4,q5}"
      }
    },
    {
      "prof": {
        "message": "Σ é o alfabeto de ENTRADA: {a,b}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
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
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "gamma": "{A,B,a,b,□}"
      }
    },
    {
      "prof": {
        "message": "q0 é o estado INICIAL: q0",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "initial": "q0"
      }
    },
    {
      "prof": {
        "message": "O símbolo BRANCO: □",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "blank": "□"
      }
    },
    {
      "prof": {
        "message": "F é o conjunto de estados de ACEITAÇÃO: {q5}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "final": "{q5}"
      }
    },
    {
      "prof": {
        "message": "Por fim, a função δ completa — Máquina formalizada! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3538,
            "y": 3885,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3985,
            "y": 3789,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3990,
            "y": 4067,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4462,
            "y": 3894,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3798,
            "y": 4211,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4325,
            "y": 4211,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "delta": [
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q2",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q0",
            "read": "B",
            "write": "B",
            "move": "R"
          }
        ]
      }
    }
  ],
  },
};

export default MT_RECON_L6;
