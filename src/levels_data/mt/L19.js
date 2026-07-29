// ── MT Transdutora L19 (lista nova) ──────────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/transdutora/L19.xml
// (verificado por fuzz contra a transformação esperada antes da conversão).

const MT_L19 = {
  id:          'MT_L19',
  label:       'L19',
  type:        'transducer',
  level:       'hard',
  alphabet:    ["0","1","2","3","4","5","6","7","8","9"],
  tapeAlphabet: ["0","1","2","3","4","5","6","7","8","9","□"],
  description: "Tem como entrada um número qualquer em decimal e gera como saída o número multiplicado por 5 – Decimal vezes 5. [GABARITO NÃO-OFICIAL: generalização verificada do L16 oficial]",
  hint:        "Multiplique cada dígito por 5, escreva o dígito das unidades e propague o carry para o dígito à esquerda.",
  validate:    (w) => String(parseInt(w,10)*5),
  testWords:   ["0","1","5","10","99","123"],
  skipEmptyWord: true,
  formalDescription: {
    sigma:   '{0,1,2,3,4,5,6,7,8,9}',
    gamma:   '{0,1,2,3,4,5,6,7,8,9,□}',
    states:  '{q0,q1,qc0,qc1,qc2,qc3,qc4,qf}',
    initial: 'q1',
    final:   '{qf}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
      {
        "prof": {
          "message": "Bem-vindo! Vamos construir a MT Transdutora que tem como entrada um número qualquer em decimal e gera como saída o número multiplicado por 5 – decimal vezes 5. [gabarito não-oficial: generalização verificada do l16 oficial]",
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
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": []
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
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
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
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
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
          "message": "Nova regra: em q1, ao ler '□', vamos para qc0, escrevemos '□' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
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
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
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
        "head": 2,
        "activeNode": "qc0"
      },
      {
        "prof": {
          "message": "Nova regra: em qc0, ao ler '1', vamos para qc0, escrevemos '5' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
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
            },
            {
              "from": "qc0",
              "to": "qc0",
              "read": "1",
              "write": "5",
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
          "message": "Executou: leu '1', escreveu '5' e moveu. Agora em qc0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
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
            },
            {
              "from": "qc0",
              "to": "qc0",
              "read": "1",
              "write": "5",
              "move": "L"
            }
          ]
        },
        "simulateWord": "1",
        "tape": [
          "□",
          "□",
          "5",
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
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
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
          "5",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "qc0"
      },
      {
        "prof": {
          "message": "Chegamos em qf (estado final). A fita ficou \"5\". ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
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
          "5",
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
          "mood": "serio"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
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
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "read": "1",
              "write": "5",
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
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "read": "1",
              "write": "5",
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
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "read": "1",
              "write": "5",
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
          "message": "Nova regra: em qc0, ao ler '5', vamos para qc2, escrevemos '5' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
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
          "message": "Executou: leu '5', escreveu '5' e moveu. Agora em qc2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
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
        "simulateWord": "5",
        "tape": [
          "□",
          "□",
          "5",
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
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
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
        "head": 1,
        "activeNode": "qc2"
      },
      {
        "prof": {
          "message": "Chegamos em qf (estado final). A fita ficou \"25\". ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
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
          "2",
          "5",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "qf",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Para cobrir todos os casos da linguagem, completamos a máquina com as regras restantes.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3280,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 4036,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4468,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4684,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "4",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "9",
              "write": "5",
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
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "4",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "9",
              "write": "6",
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
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "8",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "9",
              "write": "7",
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "5",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "8",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "9",
              "write": "8",
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
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "5",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "9",
              "write": "9",
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
              "from": "q0",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        }
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
              "x": 3280,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 4036,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4468,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4684,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "4",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "9",
              "write": "5",
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
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "4",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "9",
              "write": "6",
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
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "8",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "9",
              "write": "7",
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "5",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "8",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "9",
              "write": "8",
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
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "5",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "9",
              "write": "9",
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
              "from": "q0",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "formalIntro": true
      },
      {
        "prof": {
          "message": "Q é o conjunto de ESTADOS: {q0,q1,qc0,qc1,qc2,qc3,qc4,qf}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3280,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 4036,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4468,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4684,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "4",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "9",
              "write": "5",
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
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "4",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "9",
              "write": "6",
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
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "8",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "9",
              "write": "7",
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "5",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "8",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "9",
              "write": "8",
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
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "5",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "9",
              "write": "9",
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
              "from": "q0",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "states": "{q0,q1,qc0,qc1,qc2,qc3,qc4,qf}"
        }
      },
      {
        "prof": {
          "message": "Σ é o alfabeto de ENTRADA: {0,1,2,3,4,5,6,7,8,9}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3280,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 4036,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4468,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4684,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "4",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "9",
              "write": "5",
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
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "4",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "9",
              "write": "6",
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
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "8",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "9",
              "write": "7",
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "5",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "8",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "9",
              "write": "8",
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
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "5",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "9",
              "write": "9",
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
              "from": "q0",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
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
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3280,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 4036,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4468,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4684,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "4",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "9",
              "write": "5",
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
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "4",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "9",
              "write": "6",
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
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "8",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "9",
              "write": "7",
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "5",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "8",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "9",
              "write": "8",
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
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "5",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "9",
              "write": "9",
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
              "from": "q0",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
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
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3280,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 4036,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4468,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4684,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "4",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "9",
              "write": "5",
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
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "4",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "9",
              "write": "6",
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
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "8",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "9",
              "write": "7",
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "5",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "8",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "9",
              "write": "8",
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
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "5",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "9",
              "write": "9",
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
              "from": "q0",
              "to": "q1",
              "read": "",
              "write": "",
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
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3280,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 4036,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4468,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4684,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "4",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "9",
              "write": "5",
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
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "4",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "9",
              "write": "6",
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
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "8",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "9",
              "write": "7",
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "5",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "8",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "9",
              "write": "8",
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
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "5",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "9",
              "write": "9",
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
              "from": "q0",
              "to": "q1",
              "read": "",
              "write": "",
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
          "message": "F é o conjunto de estados de ACEITAÇÃO: {qf}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3280,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 4036,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4468,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4684,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "4",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "9",
              "write": "5",
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
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "4",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "9",
              "write": "6",
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
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "8",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "9",
              "write": "7",
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "5",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "8",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "9",
              "write": "8",
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
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "5",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "9",
              "write": "9",
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
              "from": "q0",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
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
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3280,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3550,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3820,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 4036,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 4252,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4468,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4684,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4720,
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
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "4",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "9",
              "write": "5",
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
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "4",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "9",
              "write": "6",
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
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "8",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "9",
              "write": "7",
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "5",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "8",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "9",
              "write": "8",
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
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "5",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "9",
              "write": "9",
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
              "from": "q0",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
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
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "4",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "9",
              "write": "5",
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
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "4",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "9",
              "write": "6",
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
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "8",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "9",
              "write": "7",
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "5",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "8",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "9",
              "write": "8",
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
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "5",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "9",
              "write": "9",
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

export default MT_L19;
