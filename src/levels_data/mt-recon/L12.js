// ── MT Reconhecedora L12: {aⁿb²ⁿ⁺¹ / n > 0} ──────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/reconhecedora/L12.xml
// (verificado por fuzz contra a linguagem formal antes da conversão).

const MT_RECON_L12 = {
  id:          'MT_RECON_L12',
  label:       'L12',
  type:        'recognizer',
  level:       'medium',
  alphabet:    ["a","b"],
  tapeAlphabet: ["A","B","a","b","□"],
  language:    '{aⁿb²ⁿ⁺¹ / n > 0}',
  description: 'Reconheça aⁿb²ⁿ⁺¹: para cada "a", dois "b", mais um "b" extra no final (n estritamente positivo).',
  hint:        'Como no aⁿb²ⁿ, mas separe um "b" extra logo no início antes de parear o resto.',
  acceptedWords: ["abbb","aabbbbb","aaabbbbbbb"],
  rejectedWords: ["","a","b","bbb","abb","abbbb","aabbbb"],
  formalDescription: {
    sigma:   '{a,b}',
    gamma:   '{A,B,a,b,□}',
    states:  '{q1,q2,q3,q4,q5,q6,q7,q8,q9,q11,q12,q13,q10}',
    initial: 'q1',
    final:   '{q13}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
    {
      "prof": {
        "message": "Bem-vindo! Vamos construir a MT Reconhecedora da linguagem {aⁿb²ⁿ⁺¹ / n > 0}.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [],
        "transitions": []
      }
    },
    {
      "prof": {
        "message": "Vamos testar a palavra \"abbb\". Começamos no estado inicial q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          }
        ],
        "transitions": []
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "a",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          }
        ],
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
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "a",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          }
        ],
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
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler 'b', vamos para q5, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "□",
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
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "□",
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
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "□",
        "□"
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
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'A', vamos para q6, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "message": "Nova regra: em q6, ao ler 'B', vamos para q10, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "message": "Nova regra: em q10, ao ler 'B', vamos para q10, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "message": "Nova regra: em q10, ao ler '□', vamos para q11, escrevemos '□' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "message": "Nova regra: em q11, ao ler 'B', vamos para q11, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q5",
            "to": "q5",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Nova regra: em q11, ao ler 'A', vamos para q12, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Nova regra: em q12, ao ler '□', vamos para q13, escrevemos '□' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Chegamos em q13 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "abbb",
      "tape": [
        "□",
        "□",
        "A",
        "B",
        "B",
        "B",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q13",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"aaabbbbbbb\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
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
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
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
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'a', vamos para q5, escrevemos 'a' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler 'a', vamos para q7, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
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
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'a', vamos para q7, escrevemos 'a' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
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
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
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
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'B', vamos para q7, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
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
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
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
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
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
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
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
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'b', vamos para q8, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "a",
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
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Nova regra: em q8, ao ler 'b', vamos para q9, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler 'B', vamos para q9, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler 'a', vamos para q9, escrevemos 'a' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler 'A', vamos para q6, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "b",
        "b",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Nova regra: em q12, ao ler 'A', vamos para q12, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Chegamos em q13 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "simulateWord": "aaabbbbbbb",
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
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q13",
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
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "formalIntro": true
    },
    {
      "prof": {
        "message": "Q é o conjunto de ESTADOS: {q1,q2,q3,q4,q5,q6,q7,q8,q9,q11,q12,q13,q10}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "states": "{q1,q2,q3,q4,q5,q6,q7,q8,q9,q11,q12,q13,q10}"
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
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
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
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
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
        "message": "q0 é o estado INICIAL: q1",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
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
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
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
        "message": "F é o conjunto de estados de ACEITAÇÃO: {q13}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "final": "{q13}"
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
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3824,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3674,
            "y": 3732,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 3957,
            "y": 3723,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 4274,
            "y": 3719,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 4495,
            "y": 3813,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 3678,
            "y": 3827,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 3928,
            "y": 4090,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 4468,
            "y": 4092,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 4749,
            "y": 4095,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 3633,
            "y": 4274,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 3980,
            "y": 4281,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4491,
            "y": 4281,
            "isInitial": false,
            "isFinal": true
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3251,
            "y": 4270,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      },
      "phase": "FORMAL",
      "formalFill": {
        "delta": [
          {
            "from": "q1",
            "to": "q2",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "a",
            "write": "A",
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
            "from": "q11",
            "to": "q12",
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
            "from": "q5",
            "to": "q5",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q11",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "A",
            "write": "A",
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
            "to": "q9",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "b",
            "write": "B",
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
            "from": "q7",
            "to": "q7",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q6",
            "to": "q10",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "A",
            "write": "A",
            "move": "R"
          }
        ]
      }
    }
  ],
  },
};

export default MT_RECON_L12;
