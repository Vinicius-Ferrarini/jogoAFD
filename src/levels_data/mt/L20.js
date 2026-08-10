// ── MT Transdutora L20 (lista nova) ──────────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/transdutora/L20.xml
// (verificado por fuzz contra a transformação esperada antes da conversão).

const MT_L20 = {
  id:          'MT_L20',
  label:       'L20',
  type:        'transducer',
  level:       'hard',
  alphabet:    ["0","1","2","3","4","5","6","7","8","9"],
  tapeAlphabet: ["0","1","2","3","4","5","6","7","8","9","□"],
  description: "Tem como entrada um número qualquer em decimal e gera como saída o número multiplicado por 6 – Decimal vezes 6. [GABARITO NÃO-OFICIAL: generalização verificada do L16 oficial]",
  hint:        "Multiplique cada dígito por 6, escreva o dígito das unidades e propague o carry para o dígito à esquerda.",
  validate:    (w) => String(parseInt(w,10)*6),
  testWords:   ["0","1","5","10","99","123"],
  skipEmptyWord: true,
  formalDescription: {
    sigma:   '{0,1,2,3,4,5,6,7,8,9}',
    gamma:   '{0,1,2,3,4,5,6,7,8,9,□}',
    states:  '{q0,q1,qc0,qc1,qc2,qc3,qc4,qc5,qf}',
    initial: 'q1',
    final:   '{qf}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
    {
      "prof": {
        "message": "Bem-vindo! Vamos construir a MT Transdutora que tem como entrada um número qualquer em decimal e gera como saída o número multiplicado por 6 – decimal vezes 6. [gabarito não-oficial: generalização verificada do l16 oficial]",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [],
        "transitions": []
      }
    },
    {
      "prof": {
        "message": "Vamos testar a palavra \"1\". Começamos no estado inicial q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3955,
            "isInitial": true,
            "isFinal": false
          }
        ],
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "1",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '1', vamos para q1, escrevemos '1' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          }
        ]
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "1",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "1",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '□', vamos para qc0, escrevemos '□' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3955,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "qc0",
            "id": "qc0",
            "label": "qc0",
            "x": 3730,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          }
        ]
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "1",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "1",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '1', vamos para qc0, escrevemos '6' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          }
        ]
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "1",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '6' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '□', vamos para qf, escrevemos '□' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3955,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "qc0",
            "id": "qc0",
            "label": "qc0",
            "x": 3730,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qf",
            "id": "qf",
            "label": "qf",
            "x": 4630,
            "y": 3775,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          }
        ]
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final). A fita ficou \"6\". ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"0\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "0",
      "tape": [
        "□",
        "□",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '0', vamos para q1, escrevemos '0' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          }
        ]
      },
      "simulateWord": "0",
      "tape": [
        "□",
        "□",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "0",
      "tape": [
        "□",
        "□",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "0",
      "tape": [
        "□",
        "□",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '0', vamos para qc0, escrevemos '0' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          }
        ]
      },
      "simulateWord": "0",
      "tape": [
        "□",
        "□",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "0",
      "tape": [
        "□",
        "□",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "0",
      "tape": [
        "□",
        "□",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "0",
      "tape": [
        "□",
        "□",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"1\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "1",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "1",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "1",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '6' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"2\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "2",
      "tape": [
        "□",
        "□",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '2', vamos para q1, escrevemos '2' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          }
        ]
      },
      "simulateWord": "2",
      "tape": [
        "□",
        "□",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "2",
      "tape": [
        "□",
        "□",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "2",
      "tape": [
        "□",
        "□",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '2', vamos para qc1, escrevemos '2' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3955,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "qc0",
            "id": "qc0",
            "label": "qc0",
            "x": 3730,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc1",
            "id": "qc1",
            "label": "qc1",
            "x": 3946,
            "y": 4225,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qf",
            "id": "qf",
            "label": "qf",
            "x": 4630,
            "y": 3775,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          }
        ]
      },
      "simulateWord": "2",
      "tape": [
        "□",
        "□",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "2",
      "tape": [
        "□",
        "□",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '□', vamos para qf, escrevemos '1' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          }
        ]
      },
      "simulateWord": "2",
      "tape": [
        "□",
        "□",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "2",
      "tape": [
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "2",
      "tape": [
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"3\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "3",
      "tape": [
        "□",
        "□",
        "3",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '3', vamos para q1, escrevemos '3' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          }
        ]
      },
      "simulateWord": "3",
      "tape": [
        "□",
        "□",
        "3",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '3' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "3",
      "tape": [
        "□",
        "□",
        "3",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "3",
      "tape": [
        "□",
        "□",
        "3",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '3', vamos para qc1, escrevemos '8' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          }
        ]
      },
      "simulateWord": "3",
      "tape": [
        "□",
        "□",
        "3",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '8' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "3",
      "tape": [
        "□",
        "□",
        "8",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "3",
      "tape": [
        "□",
        "1",
        "8",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "3",
      "tape": [
        "□",
        "1",
        "8",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"4\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "4",
      "tape": [
        "□",
        "□",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '4', vamos para q1, escrevemos '4' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          }
        ]
      },
      "simulateWord": "4",
      "tape": [
        "□",
        "□",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "4",
      "tape": [
        "□",
        "□",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "4",
      "tape": [
        "□",
        "□",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '4', vamos para qc2, escrevemos '4' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3955,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "qc0",
            "id": "qc0",
            "label": "qc0",
            "x": 3730,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc1",
            "id": "qc1",
            "label": "qc1",
            "x": 3946,
            "y": 4225,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc2",
            "id": "qc2",
            "label": "qc2",
            "x": 4162,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qf",
            "id": "qf",
            "label": "qf",
            "x": 4630,
            "y": 3775,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          }
        ]
      },
      "simulateWord": "4",
      "tape": [
        "□",
        "□",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "4",
      "tape": [
        "□",
        "□",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '□', vamos para qf, escrevemos '2' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          }
        ]
      },
      "simulateWord": "4",
      "tape": [
        "□",
        "□",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '2' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "4",
      "tape": [
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "4",
      "tape": [
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"5\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "5",
      "tape": [
        "□",
        "□",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '5', vamos para q1, escrevemos '5' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          }
        ]
      },
      "simulateWord": "5",
      "tape": [
        "□",
        "□",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "5",
      "tape": [
        "□",
        "□",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "5",
      "tape": [
        "□",
        "□",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '5', vamos para qc3, escrevemos '0' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3955,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "qc0",
            "id": "qc0",
            "label": "qc0",
            "x": 3730,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc1",
            "id": "qc1",
            "label": "qc1",
            "x": 3946,
            "y": 4225,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc2",
            "id": "qc2",
            "label": "qc2",
            "x": 4162,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc3",
            "id": "qc3",
            "label": "qc3",
            "x": 4378,
            "y": 4225,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qf",
            "id": "qf",
            "label": "qf",
            "x": 4630,
            "y": 3775,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          }
        ]
      },
      "simulateWord": "5",
      "tape": [
        "□",
        "□",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "5",
      "tape": [
        "□",
        "□",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Nova regra: em qc3, ao ler '□', vamos para qf, escrevemos '3' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          }
        ]
      },
      "simulateWord": "5",
      "tape": [
        "□",
        "□",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "5",
      "tape": [
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "5",
      "tape": [
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"6\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "6",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '6', vamos para q1, escrevemos '6' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          }
        ]
      },
      "simulateWord": "6",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '6' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "6",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "6",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '6', vamos para qc3, escrevemos '6' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          }
        ]
      },
      "simulateWord": "6",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '6' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "6",
      "tape": [
        "□",
        "□",
        "6",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "6",
      "tape": [
        "□",
        "3",
        "6",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "6",
      "tape": [
        "□",
        "3",
        "6",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"7\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "7",
      "tape": [
        "□",
        "□",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '7', vamos para q1, escrevemos '7' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          }
        ]
      },
      "simulateWord": "7",
      "tape": [
        "□",
        "□",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "7",
      "tape": [
        "□",
        "□",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "7",
      "tape": [
        "□",
        "□",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '7', vamos para qc4, escrevemos '2' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3955,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "qc0",
            "id": "qc0",
            "label": "qc0",
            "x": 3730,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc1",
            "id": "qc1",
            "label": "qc1",
            "x": 3946,
            "y": 4225,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc2",
            "id": "qc2",
            "label": "qc2",
            "x": 4162,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc3",
            "id": "qc3",
            "label": "qc3",
            "x": 4378,
            "y": 4225,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc4",
            "id": "qc4",
            "label": "qc4",
            "x": 4594,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qf",
            "id": "qf",
            "label": "qf",
            "x": 4630,
            "y": 3775,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          }
        ]
      },
      "simulateWord": "7",
      "tape": [
        "□",
        "□",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "7",
      "tape": [
        "□",
        "□",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Nova regra: em qc4, ao ler '□', vamos para qf, escrevemos '4' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          }
        ]
      },
      "simulateWord": "7",
      "tape": [
        "□",
        "□",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "7",
      "tape": [
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "7",
      "tape": [
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"8\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "8",
      "tape": [
        "□",
        "□",
        "8",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '8', vamos para q1, escrevemos '8' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          }
        ]
      },
      "simulateWord": "8",
      "tape": [
        "□",
        "□",
        "8",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '8' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "8",
      "tape": [
        "□",
        "□",
        "8",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "8",
      "tape": [
        "□",
        "□",
        "8",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '8', vamos para qc4, escrevemos '8' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          }
        ]
      },
      "simulateWord": "8",
      "tape": [
        "□",
        "□",
        "8",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '8' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "8",
      "tape": [
        "□",
        "□",
        "8",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "8",
      "tape": [
        "□",
        "4",
        "8",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "8",
      "tape": [
        "□",
        "4",
        "8",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"9\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "9",
      "tape": [
        "□",
        "□",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '9', vamos para q1, escrevemos '9' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          }
        ]
      },
      "simulateWord": "9",
      "tape": [
        "□",
        "□",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "9",
      "tape": [
        "□",
        "□",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "9",
      "tape": [
        "□",
        "□",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '9', vamos para qc5, escrevemos '4' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": [
          {
            "uid": "q1",
            "id": "q1",
            "label": "q1",
            "x": 3460,
            "y": 3955,
            "isInitial": true,
            "isFinal": false
          },
          {
            "uid": "qc0",
            "id": "qc0",
            "label": "qc0",
            "x": 3730,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc1",
            "id": "qc1",
            "label": "qc1",
            "x": 3946,
            "y": 4225,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc2",
            "id": "qc2",
            "label": "qc2",
            "x": 4162,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc3",
            "id": "qc3",
            "label": "qc3",
            "x": 4378,
            "y": 4225,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc4",
            "id": "qc4",
            "label": "qc4",
            "x": 4594,
            "y": 4045,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qc5",
            "id": "qc5",
            "label": "qc5",
            "x": 4810,
            "y": 4225,
            "isInitial": false,
            "isFinal": false
          },
          {
            "uid": "qf",
            "id": "qf",
            "label": "qf",
            "x": 4630,
            "y": 3775,
            "isInitial": false,
            "isFinal": true
          }
        ],
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          }
        ]
      },
      "simulateWord": "9",
      "tape": [
        "□",
        "□",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "9",
      "tape": [
        "□",
        "□",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Nova regra: em qc5, ao ler '□', vamos para qf, escrevemos '5' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "9",
      "tape": [
        "□",
        "□",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '5' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "9",
      "tape": [
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "9",
      "tape": [
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"00\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "00",
      "tape": [
        "□",
        "□",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "00",
      "tape": [
        "□",
        "□",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "00",
      "tape": [
        "□",
        "□",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "00",
      "tape": [
        "□",
        "□",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "00",
      "tape": [
        "□",
        "□",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "00",
      "tape": [
        "□",
        "□",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "00",
      "tape": [
        "□",
        "□",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "00",
      "tape": [
        "□",
        "□",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"10\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "10",
      "tape": [
        "□",
        "□",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "10",
      "tape": [
        "□",
        "□",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "10",
      "tape": [
        "□",
        "□",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "10",
      "tape": [
        "□",
        "□",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "10",
      "tape": [
        "□",
        "□",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '6' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "10",
      "tape": [
        "□",
        "□",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "10",
      "tape": [
        "□",
        "□",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "10",
      "tape": [
        "□",
        "□",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"20\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "20",
      "tape": [
        "□",
        "□",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "20",
      "tape": [
        "□",
        "□",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "20",
      "tape": [
        "□",
        "□",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "20",
      "tape": [
        "□",
        "□",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "20",
      "tape": [
        "□",
        "□",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "20",
      "tape": [
        "□",
        "□",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "20",
      "tape": [
        "□",
        "1",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "20",
      "tape": [
        "□",
        "1",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"30\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "30",
      "tape": [
        "□",
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '3' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "30",
      "tape": [
        "□",
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "30",
      "tape": [
        "□",
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "30",
      "tape": [
        "□",
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "30",
      "tape": [
        "□",
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '8' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "30",
      "tape": [
        "□",
        "□",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "30",
      "tape": [
        "□",
        "1",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "30",
      "tape": [
        "□",
        "1",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"40\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "40",
      "tape": [
        "□",
        "□",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "40",
      "tape": [
        "□",
        "□",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "40",
      "tape": [
        "□",
        "□",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "40",
      "tape": [
        "□",
        "□",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "40",
      "tape": [
        "□",
        "□",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "40",
      "tape": [
        "□",
        "□",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '2' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "40",
      "tape": [
        "□",
        "2",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "40",
      "tape": [
        "□",
        "2",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"50\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "50",
      "tape": [
        "□",
        "□",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "50",
      "tape": [
        "□",
        "□",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "50",
      "tape": [
        "□",
        "□",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "50",
      "tape": [
        "□",
        "□",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "50",
      "tape": [
        "□",
        "□",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "50",
      "tape": [
        "□",
        "□",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "50",
      "tape": [
        "□",
        "3",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "50",
      "tape": [
        "□",
        "3",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"60\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "60",
      "tape": [
        "□",
        "□",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '6' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "60",
      "tape": [
        "□",
        "□",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "60",
      "tape": [
        "□",
        "□",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "60",
      "tape": [
        "□",
        "□",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "60",
      "tape": [
        "□",
        "□",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '6' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "60",
      "tape": [
        "□",
        "□",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "60",
      "tape": [
        "□",
        "3",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "60",
      "tape": [
        "□",
        "3",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"70\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "70",
      "tape": [
        "□",
        "□",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "70",
      "tape": [
        "□",
        "□",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "70",
      "tape": [
        "□",
        "□",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "70",
      "tape": [
        "□",
        "□",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "70",
      "tape": [
        "□",
        "□",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "70",
      "tape": [
        "□",
        "□",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "70",
      "tape": [
        "□",
        "4",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "70",
      "tape": [
        "□",
        "4",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"80\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "80",
      "tape": [
        "□",
        "□",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '8' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "80",
      "tape": [
        "□",
        "□",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "80",
      "tape": [
        "□",
        "□",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "80",
      "tape": [
        "□",
        "□",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "80",
      "tape": [
        "□",
        "□",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '8' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "80",
      "tape": [
        "□",
        "□",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "80",
      "tape": [
        "□",
        "4",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "80",
      "tape": [
        "□",
        "4",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"90\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "90",
      "tape": [
        "□",
        "□",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "90",
      "tape": [
        "□",
        "□",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "90",
      "tape": [
        "□",
        "□",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "90",
      "tape": [
        "□",
        "□",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "90",
      "tape": [
        "□",
        "□",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "90",
      "tape": [
        "□",
        "□",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '5' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "90",
      "tape": [
        "□",
        "5",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "90",
      "tape": [
        "□",
        "5",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"02\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "02",
      "tape": [
        "□",
        "□",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "02",
      "tape": [
        "□",
        "□",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "02",
      "tape": [
        "□",
        "□",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "02",
      "tape": [
        "□",
        "□",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "02",
      "tape": [
        "□",
        "□",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '0', vamos para qc0, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "02",
      "tape": [
        "□",
        "□",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '1' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "02",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "02",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "02",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"12\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "12",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "12",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "12",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "12",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "12",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '1', vamos para qc0, escrevemos '7' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "12",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '7' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "12",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "12",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "12",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"22\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "22",
      "tape": [
        "□",
        "□",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "22",
      "tape": [
        "□",
        "□",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "22",
      "tape": [
        "□",
        "□",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "22",
      "tape": [
        "□",
        "□",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "22",
      "tape": [
        "□",
        "□",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '2', vamos para qc1, escrevemos '3' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "22",
      "tape": [
        "□",
        "□",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '3' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "22",
      "tape": [
        "□",
        "□",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "22",
      "tape": [
        "□",
        "1",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "22",
      "tape": [
        "□",
        "1",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"32\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "32",
      "tape": [
        "□",
        "□",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '3' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "32",
      "tape": [
        "□",
        "□",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "32",
      "tape": [
        "□",
        "□",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "32",
      "tape": [
        "□",
        "□",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "32",
      "tape": [
        "□",
        "□",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '3', vamos para qc1, escrevemos '9' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "32",
      "tape": [
        "□",
        "□",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '9' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "32",
      "tape": [
        "□",
        "□",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "32",
      "tape": [
        "□",
        "1",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "32",
      "tape": [
        "□",
        "1",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"42\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "42",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "42",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "42",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "42",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "42",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '4', vamos para qc2, escrevemos '5' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "42",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '5' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "42",
      "tape": [
        "□",
        "□",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '2' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "42",
      "tape": [
        "□",
        "2",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "42",
      "tape": [
        "□",
        "2",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"52\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "52",
      "tape": [
        "□",
        "□",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "52",
      "tape": [
        "□",
        "□",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "52",
      "tape": [
        "□",
        "□",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "52",
      "tape": [
        "□",
        "□",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "52",
      "tape": [
        "□",
        "□",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '5', vamos para qc3, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "52",
      "tape": [
        "□",
        "□",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '1' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "52",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "52",
      "tape": [
        "□",
        "3",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "52",
      "tape": [
        "□",
        "3",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"62\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "62",
      "tape": [
        "□",
        "□",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '6' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "62",
      "tape": [
        "□",
        "□",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "62",
      "tape": [
        "□",
        "□",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "62",
      "tape": [
        "□",
        "□",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "62",
      "tape": [
        "□",
        "□",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '6', vamos para qc3, escrevemos '7' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "62",
      "tape": [
        "□",
        "□",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '7' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "62",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "62",
      "tape": [
        "□",
        "3",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "62",
      "tape": [
        "□",
        "3",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"72\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "72",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "72",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "72",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "72",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "72",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '7', vamos para qc4, escrevemos '3' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "72",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '3' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "72",
      "tape": [
        "□",
        "□",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "72",
      "tape": [
        "□",
        "4",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "72",
      "tape": [
        "□",
        "4",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"82\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "82",
      "tape": [
        "□",
        "□",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '8' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "82",
      "tape": [
        "□",
        "□",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "82",
      "tape": [
        "□",
        "□",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "82",
      "tape": [
        "□",
        "□",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "82",
      "tape": [
        "□",
        "□",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '8', vamos para qc4, escrevemos '9' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "82",
      "tape": [
        "□",
        "□",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '9' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "82",
      "tape": [
        "□",
        "□",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "82",
      "tape": [
        "□",
        "4",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "82",
      "tape": [
        "□",
        "4",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"92\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "92",
      "tape": [
        "□",
        "□",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "92",
      "tape": [
        "□",
        "□",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "92",
      "tape": [
        "□",
        "□",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "92",
      "tape": [
        "□",
        "□",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "92",
      "tape": [
        "□",
        "□",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '9', vamos para qc5, escrevemos '5' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "92",
      "tape": [
        "□",
        "□",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '5' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "92",
      "tape": [
        "□",
        "□",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '5' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "92",
      "tape": [
        "□",
        "5",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "92",
      "tape": [
        "□",
        "5",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"04\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "04",
      "tape": [
        "□",
        "□",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "04",
      "tape": [
        "□",
        "□",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "04",
      "tape": [
        "□",
        "□",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "04",
      "tape": [
        "□",
        "□",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "04",
      "tape": [
        "□",
        "□",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '0', vamos para qc0, escrevemos '2' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "04",
      "tape": [
        "□",
        "□",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '2' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "04",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "04",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "04",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"14\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "14",
      "tape": [
        "□",
        "□",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "14",
      "tape": [
        "□",
        "□",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "14",
      "tape": [
        "□",
        "□",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "14",
      "tape": [
        "□",
        "□",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "14",
      "tape": [
        "□",
        "□",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '1', vamos para qc0, escrevemos '8' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "14",
      "tape": [
        "□",
        "□",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '8' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "14",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "14",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "14",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"24\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "24",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "24",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "24",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "24",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "24",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '2', vamos para qc1, escrevemos '4' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "24",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '4' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "24",
      "tape": [
        "□",
        "□",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "24",
      "tape": [
        "□",
        "1",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "24",
      "tape": [
        "□",
        "1",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"34\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "34",
      "tape": [
        "□",
        "□",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '3' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "34",
      "tape": [
        "□",
        "□",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "34",
      "tape": [
        "□",
        "□",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "34",
      "tape": [
        "□",
        "□",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "34",
      "tape": [
        "□",
        "□",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '3', vamos para qc2, escrevemos '0' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "34",
      "tape": [
        "□",
        "□",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '0' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "34",
      "tape": [
        "□",
        "□",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '2' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "34",
      "tape": [
        "□",
        "2",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "34",
      "tape": [
        "□",
        "2",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"44\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "44",
      "tape": [
        "□",
        "□",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "44",
      "tape": [
        "□",
        "□",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "44",
      "tape": [
        "□",
        "□",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "44",
      "tape": [
        "□",
        "□",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "44",
      "tape": [
        "□",
        "□",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '4', vamos para qc2, escrevemos '6' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "44",
      "tape": [
        "□",
        "□",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '6' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "44",
      "tape": [
        "□",
        "□",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '2' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "44",
      "tape": [
        "□",
        "2",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "44",
      "tape": [
        "□",
        "2",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"54\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "54",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "54",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "54",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "54",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "54",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '5', vamos para qc3, escrevemos '2' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "54",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '2' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "54",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "54",
      "tape": [
        "□",
        "3",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "54",
      "tape": [
        "□",
        "3",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"64\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "64",
      "tape": [
        "□",
        "□",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '6' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "64",
      "tape": [
        "□",
        "□",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "64",
      "tape": [
        "□",
        "□",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "64",
      "tape": [
        "□",
        "□",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "64",
      "tape": [
        "□",
        "□",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '6', vamos para qc3, escrevemos '8' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "64",
      "tape": [
        "□",
        "□",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '8' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "64",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "64",
      "tape": [
        "□",
        "3",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "64",
      "tape": [
        "□",
        "3",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"74\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "74",
      "tape": [
        "□",
        "□",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "74",
      "tape": [
        "□",
        "□",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "74",
      "tape": [
        "□",
        "□",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "74",
      "tape": [
        "□",
        "□",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "74",
      "tape": [
        "□",
        "□",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '7', vamos para qc4, escrevemos '4' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "74",
      "tape": [
        "□",
        "□",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '4' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "74",
      "tape": [
        "□",
        "□",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "74",
      "tape": [
        "□",
        "4",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "74",
      "tape": [
        "□",
        "4",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"84\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "84",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '8' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "84",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "84",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "84",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "84",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '8', vamos para qc5, escrevemos '0' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "84",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '0' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "84",
      "tape": [
        "□",
        "□",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '5' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "84",
      "tape": [
        "□",
        "5",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "84",
      "tape": [
        "□",
        "5",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"94\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "94",
      "tape": [
        "□",
        "□",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "94",
      "tape": [
        "□",
        "□",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "94",
      "tape": [
        "□",
        "□",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "94",
      "tape": [
        "□",
        "□",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "94",
      "tape": [
        "□",
        "□",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '9', vamos para qc5, escrevemos '6' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "94",
      "tape": [
        "□",
        "□",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '6' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "94",
      "tape": [
        "□",
        "□",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '5' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "94",
      "tape": [
        "□",
        "5",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "94",
      "tape": [
        "□",
        "5",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"05\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "05",
      "tape": [
        "□",
        "□",
        "0",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "05",
      "tape": [
        "□",
        "□",
        "0",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "05",
      "tape": [
        "□",
        "□",
        "0",
        "5",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "05",
      "tape": [
        "□",
        "□",
        "0",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "05",
      "tape": [
        "□",
        "□",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Nova regra: em qc3, ao ler '0', vamos para qc0, escrevemos '3' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "05",
      "tape": [
        "□",
        "□",
        "0",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '3' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "05",
      "tape": [
        "□",
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "05",
      "tape": [
        "□",
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "05",
      "tape": [
        "□",
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"15\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "15",
      "tape": [
        "□",
        "□",
        "1",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "15",
      "tape": [
        "□",
        "□",
        "1",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "15",
      "tape": [
        "□",
        "□",
        "1",
        "5",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "15",
      "tape": [
        "□",
        "□",
        "1",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "15",
      "tape": [
        "□",
        "□",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Nova regra: em qc3, ao ler '1', vamos para qc0, escrevemos '9' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "15",
      "tape": [
        "□",
        "□",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '9' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "15",
      "tape": [
        "□",
        "□",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "15",
      "tape": [
        "□",
        "□",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "15",
      "tape": [
        "□",
        "□",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"25\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "25",
      "tape": [
        "□",
        "□",
        "2",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "25",
      "tape": [
        "□",
        "□",
        "2",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "25",
      "tape": [
        "□",
        "□",
        "2",
        "5",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "25",
      "tape": [
        "□",
        "□",
        "2",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "25",
      "tape": [
        "□",
        "□",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Nova regra: em qc3, ao ler '2', vamos para qc1, escrevemos '5' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "25",
      "tape": [
        "□",
        "□",
        "2",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '5' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "25",
      "tape": [
        "□",
        "□",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "25",
      "tape": [
        "□",
        "1",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "25",
      "tape": [
        "□",
        "1",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"35\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "35",
      "tape": [
        "□",
        "□",
        "3",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '3' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "35",
      "tape": [
        "□",
        "□",
        "3",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "35",
      "tape": [
        "□",
        "□",
        "3",
        "5",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "35",
      "tape": [
        "□",
        "□",
        "3",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "35",
      "tape": [
        "□",
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Nova regra: em qc3, ao ler '3', vamos para qc2, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "35",
      "tape": [
        "□",
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "35",
      "tape": [
        "□",
        "□",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '2' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "35",
      "tape": [
        "□",
        "2",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "35",
      "tape": [
        "□",
        "2",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"45\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "45",
      "tape": [
        "□",
        "□",
        "4",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "45",
      "tape": [
        "□",
        "□",
        "4",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "45",
      "tape": [
        "□",
        "□",
        "4",
        "5",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "45",
      "tape": [
        "□",
        "□",
        "4",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "45",
      "tape": [
        "□",
        "□",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Nova regra: em qc3, ao ler '4', vamos para qc2, escrevemos '7' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "45",
      "tape": [
        "□",
        "□",
        "4",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '7' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "45",
      "tape": [
        "□",
        "□",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '2' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "45",
      "tape": [
        "□",
        "2",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "45",
      "tape": [
        "□",
        "2",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"55\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "55",
      "tape": [
        "□",
        "□",
        "5",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "55",
      "tape": [
        "□",
        "□",
        "5",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "55",
      "tape": [
        "□",
        "□",
        "5",
        "5",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "55",
      "tape": [
        "□",
        "□",
        "5",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "55",
      "tape": [
        "□",
        "□",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Nova regra: em qc3, ao ler '5', vamos para qc3, escrevemos '3' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "55",
      "tape": [
        "□",
        "□",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '3' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "55",
      "tape": [
        "□",
        "□",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "55",
      "tape": [
        "□",
        "3",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "55",
      "tape": [
        "□",
        "3",
        "3",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"65\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "65",
      "tape": [
        "□",
        "□",
        "6",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '6' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "65",
      "tape": [
        "□",
        "□",
        "6",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "65",
      "tape": [
        "□",
        "□",
        "6",
        "5",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "65",
      "tape": [
        "□",
        "□",
        "6",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "65",
      "tape": [
        "□",
        "□",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Nova regra: em qc3, ao ler '6', vamos para qc3, escrevemos '9' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "65",
      "tape": [
        "□",
        "□",
        "6",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '9' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "65",
      "tape": [
        "□",
        "□",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "65",
      "tape": [
        "□",
        "3",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "65",
      "tape": [
        "□",
        "3",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"75\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "75",
      "tape": [
        "□",
        "□",
        "7",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "75",
      "tape": [
        "□",
        "□",
        "7",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "75",
      "tape": [
        "□",
        "□",
        "7",
        "5",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "75",
      "tape": [
        "□",
        "□",
        "7",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "75",
      "tape": [
        "□",
        "□",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Nova regra: em qc3, ao ler '7', vamos para qc4, escrevemos '5' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "75",
      "tape": [
        "□",
        "□",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '5' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "75",
      "tape": [
        "□",
        "□",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "75",
      "tape": [
        "□",
        "4",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "75",
      "tape": [
        "□",
        "4",
        "5",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"85\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "85",
      "tape": [
        "□",
        "□",
        "8",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '8' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "85",
      "tape": [
        "□",
        "□",
        "8",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "85",
      "tape": [
        "□",
        "□",
        "8",
        "5",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "85",
      "tape": [
        "□",
        "□",
        "8",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "85",
      "tape": [
        "□",
        "□",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Nova regra: em qc3, ao ler '8', vamos para qc5, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "85",
      "tape": [
        "□",
        "□",
        "8",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '1' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "85",
      "tape": [
        "□",
        "□",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '5' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "85",
      "tape": [
        "□",
        "5",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "85",
      "tape": [
        "□",
        "5",
        "1",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"95\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "95",
      "tape": [
        "□",
        "□",
        "9",
        "5",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "95",
      "tape": [
        "□",
        "□",
        "9",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "95",
      "tape": [
        "□",
        "□",
        "9",
        "5",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "95",
      "tape": [
        "□",
        "□",
        "9",
        "5",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "95",
      "tape": [
        "□",
        "□",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Nova regra: em qc3, ao ler '9', vamos para qc5, escrevemos '7' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "95",
      "tape": [
        "□",
        "□",
        "9",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '7' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "95",
      "tape": [
        "□",
        "□",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '5' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "95",
      "tape": [
        "□",
        "5",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "95",
      "tape": [
        "□",
        "5",
        "7",
        "0",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"07\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "07",
      "tape": [
        "□",
        "□",
        "0",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "07",
      "tape": [
        "□",
        "□",
        "0",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "07",
      "tape": [
        "□",
        "□",
        "0",
        "7",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "07",
      "tape": [
        "□",
        "□",
        "0",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "07",
      "tape": [
        "□",
        "□",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Nova regra: em qc4, ao ler '0', vamos para qc0, escrevemos '4' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "07",
      "tape": [
        "□",
        "□",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '4' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "07",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "07",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "07",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"17\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "17",
      "tape": [
        "□",
        "□",
        "1",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "17",
      "tape": [
        "□",
        "□",
        "1",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "17",
      "tape": [
        "□",
        "□",
        "1",
        "7",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "17",
      "tape": [
        "□",
        "□",
        "1",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "17",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Nova regra: em qc4, ao ler '1', vamos para qc1, escrevemos '0' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "17",
      "tape": [
        "□",
        "□",
        "1",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '0' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "17",
      "tape": [
        "□",
        "□",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "17",
      "tape": [
        "□",
        "1",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "17",
      "tape": [
        "□",
        "1",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"27\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "27",
      "tape": [
        "□",
        "□",
        "2",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "27",
      "tape": [
        "□",
        "□",
        "2",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "27",
      "tape": [
        "□",
        "□",
        "2",
        "7",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "27",
      "tape": [
        "□",
        "□",
        "2",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "27",
      "tape": [
        "□",
        "□",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Nova regra: em qc4, ao ler '2', vamos para qc1, escrevemos '6' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "27",
      "tape": [
        "□",
        "□",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '6' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "27",
      "tape": [
        "□",
        "□",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "27",
      "tape": [
        "□",
        "1",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "27",
      "tape": [
        "□",
        "1",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"37\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "37",
      "tape": [
        "□",
        "□",
        "3",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '3' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "37",
      "tape": [
        "□",
        "□",
        "3",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "37",
      "tape": [
        "□",
        "□",
        "3",
        "7",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "37",
      "tape": [
        "□",
        "□",
        "3",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "37",
      "tape": [
        "□",
        "□",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Nova regra: em qc4, ao ler '3', vamos para qc2, escrevemos '2' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "37",
      "tape": [
        "□",
        "□",
        "3",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '2' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "37",
      "tape": [
        "□",
        "□",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '2' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "37",
      "tape": [
        "□",
        "2",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "37",
      "tape": [
        "□",
        "2",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"47\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "47",
      "tape": [
        "□",
        "□",
        "4",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "47",
      "tape": [
        "□",
        "□",
        "4",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "47",
      "tape": [
        "□",
        "□",
        "4",
        "7",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "47",
      "tape": [
        "□",
        "□",
        "4",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "47",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Nova regra: em qc4, ao ler '4', vamos para qc2, escrevemos '8' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "47",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '8' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "47",
      "tape": [
        "□",
        "□",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '2' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "47",
      "tape": [
        "□",
        "2",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "47",
      "tape": [
        "□",
        "2",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"57\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "57",
      "tape": [
        "□",
        "□",
        "5",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "57",
      "tape": [
        "□",
        "□",
        "5",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "57",
      "tape": [
        "□",
        "□",
        "5",
        "7",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "57",
      "tape": [
        "□",
        "□",
        "5",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "57",
      "tape": [
        "□",
        "□",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Nova regra: em qc4, ao ler '5', vamos para qc3, escrevemos '4' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "57",
      "tape": [
        "□",
        "□",
        "5",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '4' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "57",
      "tape": [
        "□",
        "□",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "57",
      "tape": [
        "□",
        "3",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "57",
      "tape": [
        "□",
        "3",
        "4",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"67\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "67",
      "tape": [
        "□",
        "□",
        "6",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '6' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "67",
      "tape": [
        "□",
        "□",
        "6",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "67",
      "tape": [
        "□",
        "□",
        "6",
        "7",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "67",
      "tape": [
        "□",
        "□",
        "6",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "67",
      "tape": [
        "□",
        "□",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Nova regra: em qc4, ao ler '6', vamos para qc4, escrevemos '0' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "67",
      "tape": [
        "□",
        "□",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '0' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "67",
      "tape": [
        "□",
        "□",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "67",
      "tape": [
        "□",
        "4",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "67",
      "tape": [
        "□",
        "4",
        "0",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"77\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "77",
      "tape": [
        "□",
        "□",
        "7",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "77",
      "tape": [
        "□",
        "□",
        "7",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "77",
      "tape": [
        "□",
        "□",
        "7",
        "7",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "77",
      "tape": [
        "□",
        "□",
        "7",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "77",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Nova regra: em qc4, ao ler '7', vamos para qc4, escrevemos '6' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "77",
      "tape": [
        "□",
        "□",
        "7",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '6' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "77",
      "tape": [
        "□",
        "□",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "77",
      "tape": [
        "□",
        "4",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "77",
      "tape": [
        "□",
        "4",
        "6",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"87\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "87",
      "tape": [
        "□",
        "□",
        "8",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '8' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "87",
      "tape": [
        "□",
        "□",
        "8",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "87",
      "tape": [
        "□",
        "□",
        "8",
        "7",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "87",
      "tape": [
        "□",
        "□",
        "8",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "87",
      "tape": [
        "□",
        "□",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Nova regra: em qc4, ao ler '8', vamos para qc5, escrevemos '2' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "87",
      "tape": [
        "□",
        "□",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '2' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "87",
      "tape": [
        "□",
        "□",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '5' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "87",
      "tape": [
        "□",
        "5",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "87",
      "tape": [
        "□",
        "5",
        "2",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"97\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "97",
      "tape": [
        "□",
        "□",
        "9",
        "7",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "97",
      "tape": [
        "□",
        "□",
        "9",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "97",
      "tape": [
        "□",
        "□",
        "9",
        "7",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "97",
      "tape": [
        "□",
        "□",
        "9",
        "7",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "97",
      "tape": [
        "□",
        "□",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Nova regra: em qc4, ao ler '9', vamos para qc5, escrevemos '8' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "97",
      "tape": [
        "□",
        "□",
        "9",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '8' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "97",
      "tape": [
        "□",
        "□",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '5' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "97",
      "tape": [
        "□",
        "5",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "97",
      "tape": [
        "□",
        "5",
        "8",
        "2",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"09\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "09",
      "tape": [
        "□",
        "□",
        "0",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '0' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "09",
      "tape": [
        "□",
        "□",
        "0",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "09",
      "tape": [
        "□",
        "□",
        "0",
        "9",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "09",
      "tape": [
        "□",
        "□",
        "0",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "09",
      "tape": [
        "□",
        "□",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Nova regra: em qc5, ao ler '0', vamos para qc0, escrevemos '5' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qc0",
            "read": "0",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "09",
      "tape": [
        "□",
        "□",
        "0",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '0', escreveu '5' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "09",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "09",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "09",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"19\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "19",
      "tape": [
        "□",
        "□",
        "1",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "19",
      "tape": [
        "□",
        "□",
        "1",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "19",
      "tape": [
        "□",
        "□",
        "1",
        "9",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "19",
      "tape": [
        "□",
        "□",
        "1",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "19",
      "tape": [
        "□",
        "□",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Nova regra: em qc5, ao ler '1', vamos para qc1, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qc0",
            "read": "0",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "19",
      "tape": [
        "□",
        "□",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "19",
      "tape": [
        "□",
        "□",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "19",
      "tape": [
        "□",
        "1",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "19",
      "tape": [
        "□",
        "1",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"29\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "29",
      "tape": [
        "□",
        "□",
        "2",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '2' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "29",
      "tape": [
        "□",
        "□",
        "2",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "29",
      "tape": [
        "□",
        "□",
        "2",
        "9",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "29",
      "tape": [
        "□",
        "□",
        "2",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "29",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Nova regra: em qc5, ao ler '2', vamos para qc1, escrevemos '7' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qc0",
            "read": "0",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "2",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "29",
      "tape": [
        "□",
        "□",
        "2",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '7' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "29",
      "tape": [
        "□",
        "□",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "29",
      "tape": [
        "□",
        "1",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "29",
      "tape": [
        "□",
        "1",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"39\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "39",
      "tape": [
        "□",
        "□",
        "3",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '3' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "39",
      "tape": [
        "□",
        "□",
        "3",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "39",
      "tape": [
        "□",
        "□",
        "3",
        "9",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "39",
      "tape": [
        "□",
        "□",
        "3",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "39",
      "tape": [
        "□",
        "□",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Nova regra: em qc5, ao ler '3', vamos para qc2, escrevemos '3' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qc0",
            "read": "0",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "2",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "3",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "39",
      "tape": [
        "□",
        "□",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '3' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "39",
      "tape": [
        "□",
        "□",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '2' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "39",
      "tape": [
        "□",
        "2",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "39",
      "tape": [
        "□",
        "2",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"49\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "49",
      "tape": [
        "□",
        "□",
        "4",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "49",
      "tape": [
        "□",
        "□",
        "4",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "49",
      "tape": [
        "□",
        "□",
        "4",
        "9",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "49",
      "tape": [
        "□",
        "□",
        "4",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "49",
      "tape": [
        "□",
        "□",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Nova regra: em qc5, ao ler '4', vamos para qc2, escrevemos '9' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qc0",
            "read": "0",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "2",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "3",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "4",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "49",
      "tape": [
        "□",
        "□",
        "4",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '9' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "49",
      "tape": [
        "□",
        "□",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '2' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "49",
      "tape": [
        "□",
        "2",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "49",
      "tape": [
        "□",
        "2",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"59\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "59",
      "tape": [
        "□",
        "□",
        "5",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "59",
      "tape": [
        "□",
        "□",
        "5",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "59",
      "tape": [
        "□",
        "□",
        "5",
        "9",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "59",
      "tape": [
        "□",
        "□",
        "5",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "59",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Nova regra: em qc5, ao ler '5', vamos para qc3, escrevemos '5' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qc0",
            "read": "0",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "2",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "3",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "4",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc3",
            "read": "5",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "59",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em qc3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "59",
      "tape": [
        "□",
        "□",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc3"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '3' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "59",
      "tape": [
        "□",
        "3",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "59",
      "tape": [
        "□",
        "3",
        "5",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"69\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "69",
      "tape": [
        "□",
        "□",
        "6",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '6' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "69",
      "tape": [
        "□",
        "□",
        "6",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "69",
      "tape": [
        "□",
        "□",
        "6",
        "9",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "69",
      "tape": [
        "□",
        "□",
        "6",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "69",
      "tape": [
        "□",
        "□",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Nova regra: em qc5, ao ler '6', vamos para qc4, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qc0",
            "read": "0",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "2",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "3",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "4",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc3",
            "read": "5",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc4",
            "read": "6",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "69",
      "tape": [
        "□",
        "□",
        "6",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '1' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "69",
      "tape": [
        "□",
        "□",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "69",
      "tape": [
        "□",
        "4",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "69",
      "tape": [
        "□",
        "4",
        "1",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"79\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "79",
      "tape": [
        "□",
        "□",
        "7",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "79",
      "tape": [
        "□",
        "□",
        "7",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "79",
      "tape": [
        "□",
        "□",
        "7",
        "9",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "79",
      "tape": [
        "□",
        "□",
        "7",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "79",
      "tape": [
        "□",
        "□",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Nova regra: em qc5, ao ler '7', vamos para qc4, escrevemos '7' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qc0",
            "read": "0",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "2",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "3",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "4",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc3",
            "read": "5",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc4",
            "read": "6",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc4",
            "read": "7",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "79",
      "tape": [
        "□",
        "□",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '7' e moveu. Agora em qc4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "79",
      "tape": [
        "□",
        "□",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '4' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "79",
      "tape": [
        "□",
        "4",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "79",
      "tape": [
        "□",
        "4",
        "7",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"89\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "89",
      "tape": [
        "□",
        "□",
        "8",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '8' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "89",
      "tape": [
        "□",
        "□",
        "8",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "89",
      "tape": [
        "□",
        "□",
        "8",
        "9",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "89",
      "tape": [
        "□",
        "□",
        "8",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "89",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Nova regra: em qc5, ao ler '8', vamos para qc5, escrevemos '3' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qc0",
            "read": "0",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "2",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "3",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "4",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc3",
            "read": "5",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc4",
            "read": "6",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc4",
            "read": "7",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc5",
            "read": "8",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "89",
      "tape": [
        "□",
        "□",
        "8",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '3' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "89",
      "tape": [
        "□",
        "□",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '5' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "89",
      "tape": [
        "□",
        "5",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "89",
      "tape": [
        "□",
        "5",
        "3",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"99\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "99",
      "tape": [
        "□",
        "□",
        "9",
        "9",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "99",
      "tape": [
        "□",
        "□",
        "9",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "99",
      "tape": [
        "□",
        "□",
        "9",
        "9",
        "□",
        "□"
      ],
      "head": 4,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '□' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "99",
      "tape": [
        "□",
        "□",
        "9",
        "9",
        "□",
        "□"
      ],
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '4' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "99",
      "tape": [
        "□",
        "□",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Nova regra: em qc5, ao ler '9', vamos para qc5, escrevemos '9' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": [
          {
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qc0",
            "read": "0",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "2",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "3",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "4",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc3",
            "read": "5",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc4",
            "read": "6",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc4",
            "read": "7",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc5",
            "read": "8",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc5",
            "read": "9",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          }
        ]
      },
      "simulateWord": "99",
      "tape": [
        "□",
        "□",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em qc5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "99",
      "tape": [
        "□",
        "□",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 1,
      "activeNode": "qc5"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '5' e moveu. Agora em qf.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "99",
      "tape": [
        "□",
        "5",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "99",
      "tape": [
        "□",
        "5",
        "9",
        "4",
        "□",
        "□"
      ],
      "head": 2,
      "activeNode": "qf",
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
        "message": "Q é o conjunto de ESTADOS: {q0,q1,qc0,qc1,qc2,qc3,qc4,qc5,qf}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "states": "{q0,q1,qc0,qc1,qc2,qc3,qc4,qc5,qf}"
      }
    },
    {
      "prof": {
        "message": "Σ é o alfabeto de ENTRADA: {0,1,2,3,4,5,6,7,8,9}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "sigma": "{0,1,2,3,4,5,6,7,8,9}"
      }
    },
    {
      "prof": {
        "message": "Γ é o alfabeto da FITA: {0,1,2,3,4,5,6,7,8,9,□}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "gamma": "{0,1,2,3,4,5,6,7,8,9,□}"
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
        "message": "F é o conjunto de estados de ACEITAÇÃO: {qf}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "final": "{qf}"
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
            "from": "q1",
            "to": "q1",
            "read": "0",
            "write": "0",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "2",
            "write": "2",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "3",
            "write": "3",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "4",
            "write": "4",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "5",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "6",
            "write": "6",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "7",
            "write": "7",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "8",
            "write": "8",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "9",
            "write": "9",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "qc0",
            "read": "",
            "write": "",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "0",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "1",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "2",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "3",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "5",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc3",
            "read": "6",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc4",
            "read": "8",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc5",
            "read": "9",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qf",
            "read": "",
            "write": "",
            "move": "R"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "0",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "1",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "2",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "4",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "5",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc3",
            "read": "6",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc4",
            "read": "8",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc5",
            "read": "9",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qf",
            "read": "",
            "write": "1",
            "move": "R"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "0",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "1",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "2",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "4",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "5",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc3",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc4",
            "read": "7",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "8",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc5",
            "read": "9",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qf",
            "read": "",
            "write": "2",
            "move": "R"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "0",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc0",
            "read": "1",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc1",
            "read": "2",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc2",
            "read": "4",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "5",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc3",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc4",
            "read": "7",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "8",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qc5",
            "read": "9",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc3",
            "to": "qf",
            "read": "",
            "write": "3",
            "move": "R"
          },
          {
            "from": "qc4",
            "to": "qc0",
            "read": "0",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "1",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc1",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "3",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc2",
            "read": "4",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc3",
            "read": "5",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc4",
            "read": "7",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "8",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qc5",
            "read": "9",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc4",
            "to": "qf",
            "read": "",
            "write": "4",
            "move": "R"
          },
          {
            "from": "qc5",
            "to": "qc0",
            "read": "0",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc1",
            "read": "2",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "3",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc2",
            "read": "4",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc3",
            "read": "5",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc4",
            "read": "6",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc4",
            "read": "7",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc5",
            "read": "8",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qc5",
            "read": "9",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc5",
            "to": "qf",
            "read": "",
            "write": "5",
            "move": "R"
          },
          {
            "from": "q0",
            "to": "q1",
            "read": "",
            "write": "",
            "move": "R"
          }
        ]
      }
    }
  ],
  },
};

export default MT_L20;
