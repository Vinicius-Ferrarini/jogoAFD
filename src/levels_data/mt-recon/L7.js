// ── MT Reconhecedora L7: {aⁿb³ᵐcᵐd²ⁿ / n ≥ 0, m > 0} ──────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/reconhecedora/L7.xml
// (verificado por fuzz contra a linguagem formal antes da conversão).

const MT_RECON_L7 = {
  id:          'MT_RECON_L7',
  label:       'L7',
  type:        'recognizer',
  level:       'hard',
  alphabet:    ["a","b","c","d"],
  tapeAlphabet: ["A","B","C","D","a","b","c","d","□"],
  language:    '{aⁿb³ᵐcᵐd²ⁿ / n ≥ 0, m > 0}',
  description: 'Reconheça aⁿb³ᵐcᵐd²ⁿ: blocos relacionados por proporções 1:3 (b:c) e 1:2 (a:d).',
  hint:        'Combine as duas estratégias: para "a", marque DOIS "d" no final; para cada "c", marque TRÊS "b".',
  acceptedWords: ["bbbc","abbbcdd","bbbbbbcc","aabbbcdddd"],
  rejectedWords: ["","a","d","bbc","bbbbc","abbcdd","abbbcd"],
  formalDescription: {
    sigma:   '{a,b,c,d}',
    gamma:   '{A,B,C,D,a,b,c,d,□}',
    states:  '{q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15}',
    initial: 'q0',
    final:   '{q15}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
    {
      "prof": {
        "message": "Bem-vindo! Vamos construir a MT Reconhecedora da linguagem {aⁿb³ᵐcᵐd²ⁿ / n ≥ 0, m > 0}.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [],
        "transitions": []
      }
    },
    {
      "prof": {
        "message": "Vamos testar a palavra \"bbbc\". Começamos no estado inicial q0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          }
        ],
        "transitions": "="
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "b",
        "b",
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
        "message": "Nova regra: em q0, ao ler 'b', vamos para q4, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "b",
        "b",
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
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "b",
        "b",
        "c",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler 'b', vamos para q5, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "b",
        "b",
        "c",
        "□",
        "□"
      ],
      "head": 3,
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
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "b",
        "c",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'b', vamos para q6, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "b",
        "c",
        "□",
        "□"
      ],
      "head": 4,
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
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "c",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler 'c', vamos para q7, escrevemos 'C' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
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
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "c",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'B', vamos para q8, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 3444,
            "y": 4111,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
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
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q7"
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
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Nova regra: em q8, ao ler 'C', vamos para q9, escrevemos 'C' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 3444,
            "y": 4111,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 3664,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler '□', vamos para q10, escrevemos '□' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 3444,
            "y": 4111,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 3664,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3893,
            "y": 4354,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          }
        ]
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler 'C', vamos para q12, escrevemos 'C' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 3444,
            "y": 4111,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 3664,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3893,
            "y": 4354,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 4355,
            "y": 4357,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Nova regra: em q12, ao ler 'B', vamos para q13, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 3444,
            "y": 4111,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 3664,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3893,
            "y": 4354,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 4355,
            "y": 4357,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4565,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Nova regra: em q13, ao ler 'B', vamos para q13, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Nova regra: em q13, ao ler '□', vamos para q15, escrevemos '□' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 3444,
            "y": 4111,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 3664,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3893,
            "y": 4354,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 4355,
            "y": 4357,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4565,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q15",
            "id": "q15",
            "label": "q15",
            "x": 4973,
            "y": 4343,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Chegamos em q15 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "bbbc",
      "tape": [
        "□",
        "□",
        "B",
        "B",
        "B",
        "C",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q15",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"aabbbbbbccdddd\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "a",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
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
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3586,
            "y": 3654,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 3444,
            "y": 4111,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 3664,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3893,
            "y": 4354,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 4355,
            "y": 4357,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4565,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q15",
            "id": "q15",
            "label": "q15",
            "x": 4973,
            "y": 4343,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "a",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
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
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 7,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 8,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 9,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'c', vamos para q1, escrevemos 'c' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 10,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 11,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'd', vamos para q2, escrevemos 'D' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3586,
            "y": 3654,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3876,
            "y": 3643,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 3444,
            "y": 4111,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 3664,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3893,
            "y": 4354,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 4355,
            "y": 4357,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4565,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q15",
            "id": "q15",
            "label": "q15",
            "x": 4973,
            "y": 4343,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "d",
        "d",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 12,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "d",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 13,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'd', vamos para q3, escrevemos 'D' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3586,
            "y": 3654,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3876,
            "y": 3643,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4066,
            "y": 3810,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 3444,
            "y": 4111,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 3664,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3893,
            "y": 4354,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 4355,
            "y": 4357,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4565,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q15",
            "id": "q15",
            "label": "q15",
            "x": 4973,
            "y": 4343,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "d",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 13,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'd', escreveu 'D' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'D', vamos para q3, escrevemos 'D' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'c', vamos para q3, escrevemos 'c' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'b', vamos para q3, escrevemos 'b' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 9,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 8,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 6,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 5,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 4,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'A', vamos para q0, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q1",
            "to": "q1",
            "read": "c",
            "write": "c",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q3"
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 7,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 8,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 9,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 10,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 11,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler 'D', vamos para q1, escrevemos 'D' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 12,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 13,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "d",
        "d",
        "□",
        "□"
      ],
      "head": 14,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "d",
        "□",
        "□"
      ],
      "head": 15,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'd', escreveu 'D' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 14,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 13,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 9,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 8,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 6,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 5,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 4,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q3"
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "b",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q0"
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "b",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "b",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler 'b', vamos para q6, escrevemos 'b' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "c",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'b', vamos para q7, escrevemos 'b' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q7"
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Nova regra: em q8, ao ler 'b', vamos para q4, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "b",
        "b",
        "b",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q8"
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "b",
        "b",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 8,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "b",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 9,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler 'C', vamos para q6, escrevemos 'C' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 10,
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "c",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'C', vamos para q7, escrevemos 'C' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "C",
            "write": "C",
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
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q7"
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
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler 'C', vamos para q9, escrevemos 'C' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "C",
            "write": "C",
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
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q9",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler 'D', vamos para q9, escrevemos 'D' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "C",
            "write": "C",
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
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q9",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 13,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 14,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 15,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 16,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 15,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler 'D', vamos para q11, escrevemos 'D' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3586,
            "y": 3654,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3876,
            "y": 3643,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4066,
            "y": 3810,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 3444,
            "y": 4111,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 3664,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3893,
            "y": 4354,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 4107,
            "y": 4275,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 4355,
            "y": 4357,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4565,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q15",
            "id": "q15",
            "label": "q15",
            "x": 4973,
            "y": 4343,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "C",
            "write": "C",
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
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q9",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 15,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 14,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Nova regra: em q11, ao ler 'D', vamos para q11, escrevemos 'D' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "C",
            "write": "C",
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
            "from": "q11",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q9",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 14,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 13,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 12,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'D', escreveu 'D' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Nova regra: em q11, ao ler 'C', vamos para q12, escrevemos 'C' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "C",
            "write": "C",
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
            "from": "q11",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q9",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 11,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Nova regra: em q12, ao ler 'C', vamos para q12, escrevemos 'C' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "C",
            "write": "C",
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
            "from": "q11",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q9",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 10,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 9,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 8,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 7,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 6,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 5,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q13.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Nova regra: em q13, ao ler 'A', vamos para q14, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q0",
            "id": "q0",
            "label": "q0",
            "x": 3376,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3586,
            "y": 3654,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q2",
            "id": "q2",
            "label": "q2",
            "x": 3876,
            "y": 3643,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q3",
            "id": "q3",
            "label": "q3",
            "x": 4066,
            "y": 3810,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q4",
            "id": "q4",
            "label": "q4",
            "x": 3649,
            "y": 4006,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q5",
            "id": "q5",
            "label": "q5",
            "x": 3870,
            "y": 4005,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q6",
            "id": "q6",
            "label": "q6",
            "x": 4084,
            "y": 4001,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q7",
            "id": "q7",
            "label": "q7",
            "x": 4303,
            "y": 4116,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q8",
            "id": "q8",
            "label": "q8",
            "x": 3444,
            "y": 4111,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q9",
            "id": "q9",
            "label": "q9",
            "x": 3664,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q10",
            "id": "q10",
            "label": "q10",
            "x": 3893,
            "y": 4354,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q11",
            "id": "q11",
            "label": "q11",
            "x": 4107,
            "y": 4275,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q12",
            "id": "q12",
            "label": "q12",
            "x": 4355,
            "y": 4357,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q13",
            "id": "q13",
            "label": "q13",
            "x": 4565,
            "y": 4352,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q14",
            "id": "q14",
            "label": "q14",
            "x": 4740,
            "y": 4217,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "q15",
            "id": "q15",
            "label": "q15",
            "x": 4973,
            "y": 4343,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q14",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "C",
            "write": "C",
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
            "from": "q11",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q9",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q13"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q14.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q14"
    },
    {
      "prof": {
        "message": "Nova regra: em q14, ao ler 'A', vamos para q14, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q14",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "from": "q14",
            "to": "q14",
            "read": "A",
            "write": "A",
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
            "from": "q7",
            "to": "q7",
            "read": "C",
            "write": "C",
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
            "from": "q11",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q9",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q14"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q14.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q14"
    },
    {
      "prof": {
        "message": "Nova regra: em q14, ao ler '□', vamos para q15, escrevemos '□' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q14",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q14",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "from": "q14",
            "to": "q14",
            "read": "A",
            "write": "A",
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
            "from": "q7",
            "to": "q7",
            "read": "C",
            "write": "C",
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
            "from": "q11",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q9",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "q14"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q15.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q15"
    },
    {
      "prof": {
        "message": "Chegamos em q15 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "aabbbbbbccdddd",
      "tape": [
        "□",
        "□",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "D",
        "D",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q15",
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
        "message": "Q é o conjunto de ESTADOS: {q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "states": "{q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15}"
      }
    },
    {
      "prof": {
        "message": "Σ é o alfabeto de ENTRADA: {a,b,c,d}",
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
        "message": "Γ é o alfabeto da FITA: {A,B,C,D,a,b,c,d,□}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "gamma": "{A,B,C,D,a,b,c,d,□}"
      }
    },
    {
      "prof": {
        "message": "q0 é o estado INICIAL: q0",
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
        "message": "F é o conjunto de estados de ACEITAÇÃO: {q15}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "final": "{q15}"
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
            "from": "q14",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q4",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "c",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q0",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q3",
            "read": "d",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q14",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "d",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q3",
            "to": "q3",
            "read": "c",
            "write": "c",
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
            "from": "q14",
            "to": "q14",
            "read": "A",
            "write": "A",
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
            "from": "q7",
            "to": "q7",
            "read": "C",
            "write": "C",
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
            "from": "q11",
            "to": "q11",
            "read": "D",
            "write": "D",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          },
          {
            "from": "q13",
            "to": "q13",
            "read": "B",
            "write": "B",
            "move": "L"
          },
          {
            "from": "q12",
            "to": "q13",
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
            "from": "q6",
            "to": "q6",
            "read": "b",
            "write": "b",
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
            "from": "q9",
            "to": "q9",
            "read": "C",
            "write": "C",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "D",
            "write": "D",
            "move": "R"
          },
          {
            "from": "q13",
            "to": "q15",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "q7",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q5",
            "to": "q6",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q10",
            "to": "q12",
            "read": "C",
            "write": "C",
            "move": "L"
          }
        ]
      }
    }
  ],
  },
};

export default MT_RECON_L7;
