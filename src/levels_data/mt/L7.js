// ── MT Transdutora L7 (lista nova) ──────────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/transdutora/L7.xml
// (verificado por fuzz contra a transformação esperada antes da conversão).

const MT_L7 = {
  id:          'MT_L7',
  label:       'L7',
  type:        'transducer',
  level:       'medium',
  alphabet:    ["a","b"],
  tapeAlphabet: ["<","A","B","a","b","□"],
  startMarker: "<",
  description: "Tem como entrada uma palavra qualquer com a e b, e gera como saída a mesma palavra, seguida da palavra invertida – Duplicar invertida wwr.",
  hint:        "Copie a palavra para o final na ordem original, depois copie de novo mas invertida.",
  validate:    (w) => w+[...w].reverse().join(''),
  testWords:   ["a","ab","aba","abba"],
  skipEmptyWord: true,
  formalDescription: {
    sigma:   '{a,b}',
    gamma:   '{<,A,B,a,b,□}',
    states:  '{q0,q1,q2,q3,q4,q5,q6,q7,q8}',
    initial: 'q0',
    final:   '{q8}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
    {
      "prof": {
        "message": "Bem-vindo! Vamos construir a MT Transdutora que tem como entrada uma palavra qualquer com a e b, e gera como saída a mesma palavra, seguida da palavra invertida – duplicar invertida wwr.",
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
            "x": 3013,
            "y": 4003,
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
        "<",
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
        "message": "Nova regra: em q0, ao ler '<', vamos para q1, escrevemos '<' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
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
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'b', vamos para q1, escrevemos 'b' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
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
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
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
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '□', vamos para q2, escrevemos '□' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'b', vamos para q4, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler '□', vamos para q5, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "B",
        "□"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'B', vamos para q5, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "B",
        "□"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "B",
        "□"
      ],
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'a', vamos para q3, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "B",
        "□"
      ],
      "head": 3,
      "activeNode": "q5"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
        "□"
      ],
      "head": 4,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'B', vamos para q3, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
        "□"
      ],
      "head": 6,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler '□', vamos para q5, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
        "□"
      ],
      "head": 6,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'A', vamos para q5, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler '<', vamos para q6, escrevemos '<' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 3,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler 'A', vamos para q6, escrevemos 'a' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 3,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "B",
        "A"
      ],
      "head": 4,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler 'B', vamos para q6, escrevemos 'b' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "B",
        "A"
      ],
      "head": 4,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "B",
        "A"
      ],
      "head": 5,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "A"
      ],
      "head": 6,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "a",
        "□"
      ],
      "head": 7,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler '□', vamos para q7, escrevemos '□' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "a",
        "□"
      ],
      "head": 7,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "a",
        "□"
      ],
      "head": 6,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'a', vamos para q7, escrevemos 'a' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "a",
        "□"
      ],
      "head": 6,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "a",
        "□"
      ],
      "head": 5,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'b', vamos para q7, escrevemos 'b' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "a",
        "□"
      ],
      "head": 5,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "a",
        "□"
      ],
      "head": 4,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "a",
        "□"
      ],
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "a",
        "□"
      ],
      "head": 2,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler '<', vamos para q8, escrevemos '<' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "a",
        "□"
      ],
      "head": 2,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Chegamos em q8 (estado final). A fita ficou \"abba\". ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "b",
        "a",
        "□"
      ],
      "head": 3,
      "activeNode": "q8",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"abab\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
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
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 5,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "B",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "B",
        "B",
        "□"
      ],
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "B",
        "B",
        "□"
      ],
      "head": 5,
      "activeNode": "q5"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "A",
        "B",
        "B",
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "A",
        "B",
        "B",
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "A",
        "B",
        "B",
        "□"
      ],
      "head": 8,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 7,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'b', vamos para q4, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 5,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler 'A', vamos para q4, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 5,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A"
      ],
      "head": 6,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler 'B', vamos para q4, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A",
        "□"
      ],
      "head": 9,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
      ],
      "head": 8,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
      ],
      "head": 7,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
      ],
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
      ],
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
      ],
      "head": 3,
      "activeNode": "q5"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
      ],
      "head": 5,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'A', vamos para q3, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
      ],
      "head": 5,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B"
      ],
      "head": 9,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B",
        "□"
      ],
      "head": 10,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 9,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 8,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 7,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 3,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "B",
        "A",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 4,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "A",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 5,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "B",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 6,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "B",
        "A",
        "B",
        "A"
      ],
      "head": 7,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "A",
        "B",
        "A"
      ],
      "head": 8,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "B",
        "A"
      ],
      "head": 9,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "A"
      ],
      "head": 10,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 11,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 10,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 9,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 8,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 7,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 6,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 5,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 4,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 2,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 3,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Chegamos em q8 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "a",
        "b",
        "a",
        "b",
        "b",
        "a",
        "b",
        "a",
        "□"
      ],
      "head": 3,
      "activeNode": "q8",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"baba\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "□",
        "□"
      ],
      "head": 4,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "□",
        "□"
      ],
      "head": 6,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'a', vamos para q3, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "□",
        "□"
      ],
      "head": 6,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "A",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "A",
        "A",
        "□"
      ],
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "A",
        "A",
        "□"
      ],
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "B",
        "A",
        "A",
        "□"
      ],
      "head": 6,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "B",
        "A",
        "A",
        "□"
      ],
      "head": 7,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "B",
        "A",
        "A",
        "□"
      ],
      "head": 8,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "B",
        "A",
        "A",
        "B"
      ],
      "head": 7,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "B",
        "A",
        "A",
        "B"
      ],
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "B",
        "A",
        "A",
        "B"
      ],
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "B",
        "A",
        "A",
        "B"
      ],
      "head": 4,
      "activeNode": "q5"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B"
      ],
      "head": 6,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B"
      ],
      "head": 7,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B"
      ],
      "head": 8,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B",
        "□"
      ],
      "head": 9,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
      ],
      "head": 8,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
      ],
      "head": 7,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
      ],
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
      ],
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
      ],
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
      ],
      "head": 4,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
      ],
      "head": 6,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
      ],
      "head": 7,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
      ],
      "head": 8,
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A",
        "□"
      ],
      "head": 10,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 9,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 8,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 7,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "B",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 3,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "A",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 4,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 5,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "A",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 6,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "A",
        "B",
        "A",
        "B"
      ],
      "head": 7,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "B",
        "A",
        "B"
      ],
      "head": 8,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "A",
        "B"
      ],
      "head": 9,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'a' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "B"
      ],
      "head": 10,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 11,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 10,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 9,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 8,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 7,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 6,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 5,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 4,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 2,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 3,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Chegamos em q8 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "baba",
      "tape": [
        "□",
        "□",
        "<",
        "b",
        "a",
        "b",
        "a",
        "a",
        "b",
        "a",
        "b",
        "□"
      ],
      "head": 3,
      "activeNode": "q8",
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "formalIntro": true
    },
    {
      "prof": {
        "message": "Q é o conjunto de ESTADOS: {q0,q1,q2,q3,q4,q5,q6,q7,q8}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "states": "{q0,q1,q2,q3,q4,q5,q6,q7,q8}"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
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
        "message": "Γ é o alfabeto da FITA: {<,A,B,a,b,□}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "gamma": "{<,A,B,a,b,□}"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
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
        "message": "F é o conjunto de estados de ACEITAÇÃO: {q8}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "final": "{q8}"
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
            "x": 3013,
            "y": 4003,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3313,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3556,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3837,
            "y": 3798,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3810,
            "y": 4203,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4163,
            "y": 4017,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4469,
            "y": 4019,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4753,
            "y": 4028,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4987,
            "y": 4037,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "delta": [
          {
            "from": "q5",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "a",
            "write": "A",
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
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "A",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "B",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q5",
            "read": "",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      }
    }
  ],
  },
};

export default MT_L7;
