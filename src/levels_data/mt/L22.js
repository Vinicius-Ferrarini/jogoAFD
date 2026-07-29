// ── MT Transdutora L22 (lista nova) ──────────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/transdutora/L22.xml
// (verificado por fuzz contra a transformação esperada antes da conversão).

const MT_L22 = {
  id:          'MT_L22',
  label:       'L22',
  type:        'transducer',
  level:       'hard',
  alphabet:    ["0","1","2","3","4","5","6","7","8","9"],
  tapeAlphabet: ["0","1","2","3","4","5","6","7","8","9","□"],
  description: "Tem como entrada um número qualquer em decimal e gera como saída o número multiplicado por 8 – Decimal vezes 8. [GABARITO NÃO-OFICIAL: generalização verificada do L16 oficial]",
  hint:        "Multiplique cada dígito por 8, escreva o dígito das unidades e propague o carry para o dígito à esquerda.",
  validate:    (w) => String(parseInt(w,10)*8),
  testWords:   ["0","1","5","10","99","123"],
  skipEmptyWord: true,
  formalDescription: {
    sigma:   '{0,1,2,3,4,5,6,7,8,9}',
    gamma:   '{0,1,2,3,4,5,6,7,8,9,□}',
    states:  '{q0,q1,qc0,qc1,qc2,qc3,qc4,qc5,qc6,qc7,qf}',
    initial: 'q1',
    final:   '{qf}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
      {
        "prof": {
          "message": "Bem-vindo! Vamos construir a MT Transdutora que tem como entrada um número qualquer em decimal e gera como saída o número multiplicado por 8 – decimal vezes 8. [gabarito não-oficial: generalização verificada do l16 oficial]",
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
              "x": 3244,
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
              "x": 3244,
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
              "x": 3244,
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
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
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
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
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
          "message": "Nova regra: em qc0, ao ler '1', vamos para qc0, escrevemos '8' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
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
              "write": "8",
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
          "message": "Executou: leu '1', escreveu '8' e moveu. Agora em qc0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
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
              "write": "8",
              "move": "L"
            }
          ]
        },
        "simulateWord": "1",
        "tape": [
          "□",
          "□",
          "8",
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
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
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
          "8",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "qc0"
      },
      {
        "prof": {
          "message": "Chegamos em qf (estado final). A fita ficou \"8\". ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
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
          "message": "Próxima palavra: \"5\". Mesma máquina, novo teste.",
          "mood": "serio"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
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
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
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
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
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
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
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
          "message": "Nova regra: em qc0, ao ler '5', vamos para qc4, escrevemos '0' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
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
          "message": "Executou: leu '5', escreveu '0' e moveu. Agora em qc4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
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
        "activeNode": "qc4"
      },
      {
        "prof": {
          "message": "Nova regra: em qc4, ao ler '□', vamos para qf, escrevemos '4' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
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
              "from": "qc4",
              "to": "qf",
              "read": "",
              "write": "4",
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
        "activeNode": "qc4"
      },
      {
        "prof": {
          "message": "Chegamos em qf (estado final). A fita ficou \"40\". ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
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
              "from": "qc4",
              "to": "qf",
              "read": "",
              "write": "4",
              "move": "R"
            }
          ]
        },
        "simulateWord": "5",
        "tape": [
          "□",
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
          "message": "Para cobrir todos os casos da linguagem, completamos a máquina com as regras restantes.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 2974,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 3730,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 3946,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4162,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc5",
              "id": "qc5",
              "label": "qc5",
              "x": 4594,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc6",
              "id": "qc6",
              "label": "qc6",
              "x": 4810,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc7",
              "id": "qc7",
              "label": "qc7",
              "x": 5026,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "6",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc5",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc6",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "6",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc5",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc6",
              "read": "8",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "1",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "5",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc6",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "5",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc6",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "4",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "5",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc5",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "7",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc1",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc3",
              "read": "4",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc4",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc5",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "7",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc7",
              "read": "9",
              "write": "7",
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
              "from": "qc6",
              "to": "qc0",
              "read": "0",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc1",
              "read": "1",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc2",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "3",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc4",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc5",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc6",
              "read": "7",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qf",
              "read": "",
              "write": "6",
              "move": "R"
            },
            {
              "from": "qc7",
              "to": "qc0",
              "read": "0",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc1",
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc2",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "3",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc4",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc5",
              "read": "6",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc6",
              "read": "7",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qf",
              "read": "",
              "write": "7",
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
              "x": 2974,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 3730,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 3946,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4162,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc5",
              "id": "qc5",
              "label": "qc5",
              "x": 4594,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc6",
              "id": "qc6",
              "label": "qc6",
              "x": 4810,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc7",
              "id": "qc7",
              "label": "qc7",
              "x": 5026,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "6",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc5",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc6",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "6",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc5",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc6",
              "read": "8",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "1",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "5",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc6",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "5",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc6",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "4",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "5",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc5",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "7",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc1",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc3",
              "read": "4",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc4",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc5",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "7",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc7",
              "read": "9",
              "write": "7",
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
              "from": "qc6",
              "to": "qc0",
              "read": "0",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc1",
              "read": "1",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc2",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "3",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc4",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc5",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc6",
              "read": "7",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qf",
              "read": "",
              "write": "6",
              "move": "R"
            },
            {
              "from": "qc7",
              "to": "qc0",
              "read": "0",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc1",
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc2",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "3",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc4",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc5",
              "read": "6",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc6",
              "read": "7",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qf",
              "read": "",
              "write": "7",
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
          "message": "Q é o conjunto de ESTADOS: {q0,q1,qc0,qc1,qc2,qc3,qc4,qc5,qc6,qc7,qf}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 2974,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 3730,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 3946,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4162,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc5",
              "id": "qc5",
              "label": "qc5",
              "x": 4594,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc6",
              "id": "qc6",
              "label": "qc6",
              "x": 4810,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc7",
              "id": "qc7",
              "label": "qc7",
              "x": 5026,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "6",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc5",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc6",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "6",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc5",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc6",
              "read": "8",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "1",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "5",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc6",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "5",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc6",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "4",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "5",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc5",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "7",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc1",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc3",
              "read": "4",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc4",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc5",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "7",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc7",
              "read": "9",
              "write": "7",
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
              "from": "qc6",
              "to": "qc0",
              "read": "0",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc1",
              "read": "1",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc2",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "3",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc4",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc5",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc6",
              "read": "7",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qf",
              "read": "",
              "write": "6",
              "move": "R"
            },
            {
              "from": "qc7",
              "to": "qc0",
              "read": "0",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc1",
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc2",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "3",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc4",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc5",
              "read": "6",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc6",
              "read": "7",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qf",
              "read": "",
              "write": "7",
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
          "states": "{q0,q1,qc0,qc1,qc2,qc3,qc4,qc5,qc6,qc7,qf}"
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
              "x": 2974,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 3730,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 3946,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4162,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc5",
              "id": "qc5",
              "label": "qc5",
              "x": 4594,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc6",
              "id": "qc6",
              "label": "qc6",
              "x": 4810,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc7",
              "id": "qc7",
              "label": "qc7",
              "x": 5026,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "6",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc5",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc6",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "6",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc5",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc6",
              "read": "8",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "1",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "5",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc6",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "5",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc6",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "4",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "5",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc5",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "7",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc1",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc3",
              "read": "4",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc4",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc5",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "7",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc7",
              "read": "9",
              "write": "7",
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
              "from": "qc6",
              "to": "qc0",
              "read": "0",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc1",
              "read": "1",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc2",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "3",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc4",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc5",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc6",
              "read": "7",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qf",
              "read": "",
              "write": "6",
              "move": "R"
            },
            {
              "from": "qc7",
              "to": "qc0",
              "read": "0",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc1",
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc2",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "3",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc4",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc5",
              "read": "6",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc6",
              "read": "7",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qf",
              "read": "",
              "write": "7",
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
              "x": 2974,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 3730,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 3946,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4162,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc5",
              "id": "qc5",
              "label": "qc5",
              "x": 4594,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc6",
              "id": "qc6",
              "label": "qc6",
              "x": 4810,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc7",
              "id": "qc7",
              "label": "qc7",
              "x": 5026,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "6",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc5",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc6",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "6",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc5",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc6",
              "read": "8",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "1",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "5",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc6",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "5",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc6",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "4",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "5",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc5",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "7",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc1",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc3",
              "read": "4",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc4",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc5",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "7",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc7",
              "read": "9",
              "write": "7",
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
              "from": "qc6",
              "to": "qc0",
              "read": "0",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc1",
              "read": "1",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc2",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "3",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc4",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc5",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc6",
              "read": "7",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qf",
              "read": "",
              "write": "6",
              "move": "R"
            },
            {
              "from": "qc7",
              "to": "qc0",
              "read": "0",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc1",
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc2",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "3",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc4",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc5",
              "read": "6",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc6",
              "read": "7",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qf",
              "read": "",
              "write": "7",
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
              "x": 2974,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 3730,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 3946,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4162,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc5",
              "id": "qc5",
              "label": "qc5",
              "x": 4594,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc6",
              "id": "qc6",
              "label": "qc6",
              "x": 4810,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc7",
              "id": "qc7",
              "label": "qc7",
              "x": 5026,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "6",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc5",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc6",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "6",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc5",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc6",
              "read": "8",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "1",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "5",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc6",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "5",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc6",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "4",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "5",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc5",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "7",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc1",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc3",
              "read": "4",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc4",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc5",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "7",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc7",
              "read": "9",
              "write": "7",
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
              "from": "qc6",
              "to": "qc0",
              "read": "0",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc1",
              "read": "1",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc2",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "3",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc4",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc5",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc6",
              "read": "7",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qf",
              "read": "",
              "write": "6",
              "move": "R"
            },
            {
              "from": "qc7",
              "to": "qc0",
              "read": "0",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc1",
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc2",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "3",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc4",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc5",
              "read": "6",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc6",
              "read": "7",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qf",
              "read": "",
              "write": "7",
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
              "x": 2974,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 3730,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 3946,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4162,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc5",
              "id": "qc5",
              "label": "qc5",
              "x": 4594,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc6",
              "id": "qc6",
              "label": "qc6",
              "x": 4810,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc7",
              "id": "qc7",
              "label": "qc7",
              "x": 5026,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "6",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc5",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc6",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "6",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc5",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc6",
              "read": "8",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "1",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "5",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc6",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "5",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc6",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "4",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "5",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc5",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "7",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc1",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc3",
              "read": "4",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc4",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc5",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "7",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc7",
              "read": "9",
              "write": "7",
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
              "from": "qc6",
              "to": "qc0",
              "read": "0",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc1",
              "read": "1",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc2",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "3",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc4",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc5",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc6",
              "read": "7",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qf",
              "read": "",
              "write": "6",
              "move": "R"
            },
            {
              "from": "qc7",
              "to": "qc0",
              "read": "0",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc1",
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc2",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "3",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc4",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc5",
              "read": "6",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc6",
              "read": "7",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qf",
              "read": "",
              "write": "7",
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
              "x": 2974,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 3730,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 3946,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4162,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc5",
              "id": "qc5",
              "label": "qc5",
              "x": 4594,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc6",
              "id": "qc6",
              "label": "qc6",
              "x": 4810,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc7",
              "id": "qc7",
              "label": "qc7",
              "x": 5026,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "6",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc5",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc6",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "6",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc5",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc6",
              "read": "8",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "1",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "5",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc6",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "5",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc6",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "4",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "5",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc5",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "7",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc1",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc3",
              "read": "4",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc4",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc5",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "7",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc7",
              "read": "9",
              "write": "7",
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
              "from": "qc6",
              "to": "qc0",
              "read": "0",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc1",
              "read": "1",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc2",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "3",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc4",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc5",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc6",
              "read": "7",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qf",
              "read": "",
              "write": "6",
              "move": "R"
            },
            {
              "from": "qc7",
              "to": "qc0",
              "read": "0",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc1",
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc2",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "3",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc4",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc5",
              "read": "6",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc6",
              "read": "7",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qf",
              "read": "",
              "write": "7",
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
              "x": 2974,
              "y": 3775,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3244,
              "y": 3955,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "qc0",
              "id": "qc0",
              "label": "qc0",
              "x": 3514,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc1",
              "id": "qc1",
              "label": "qc1",
              "x": 3730,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc2",
              "id": "qc2",
              "label": "qc2",
              "x": 3946,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc3",
              "id": "qc3",
              "label": "qc3",
              "x": 4162,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc4",
              "id": "qc4",
              "label": "qc4",
              "x": 4378,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc5",
              "id": "qc5",
              "label": "qc5",
              "x": 4594,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc6",
              "id": "qc6",
              "label": "qc6",
              "x": 4810,
              "y": 4045,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qc7",
              "id": "qc7",
              "label": "qc7",
              "x": 5026,
              "y": 4225,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "qf",
              "id": "qf",
              "label": "qf",
              "x": 4414,
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "6",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc5",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc6",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "6",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc5",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc6",
              "read": "8",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "1",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "5",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc6",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "5",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc6",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "4",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "5",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc5",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "7",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc1",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc3",
              "read": "4",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc4",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc5",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "7",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc7",
              "read": "9",
              "write": "7",
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
              "from": "qc6",
              "to": "qc0",
              "read": "0",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc1",
              "read": "1",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc2",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "3",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc4",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc5",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc6",
              "read": "7",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qf",
              "read": "",
              "write": "6",
              "move": "R"
            },
            {
              "from": "qc7",
              "to": "qc0",
              "read": "0",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc1",
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc2",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "3",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc4",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc5",
              "read": "6",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc6",
              "read": "7",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qf",
              "read": "",
              "write": "7",
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
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc1",
              "read": "2",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc2",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc3",
              "read": "4",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc4",
              "read": "6",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc5",
              "read": "7",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc6",
              "read": "8",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc0",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc0",
              "read": "1",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc1",
              "read": "2",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc2",
              "read": "3",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc3",
              "read": "4",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc4",
              "read": "6",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc5",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc6",
              "read": "8",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc1",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "1",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc1",
              "read": "2",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc2",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc4",
              "read": "5",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "6",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc5",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc6",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc2",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc1",
              "read": "2",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc2",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc4",
              "read": "5",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "6",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc5",
              "read": "7",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc6",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc3",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc1",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "2",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc2",
              "read": "3",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc3",
              "read": "4",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc4",
              "read": "5",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc5",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "7",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc6",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc4",
              "to": "qc7",
              "read": "9",
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
              "to": "qc0",
              "read": "0",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc1",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "2",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc2",
              "read": "3",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc3",
              "read": "4",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc4",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc5",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "7",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc6",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc5",
              "to": "qc7",
              "read": "9",
              "write": "7",
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
              "from": "qc6",
              "to": "qc0",
              "read": "0",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc1",
              "read": "1",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc2",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "3",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc3",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc4",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc5",
              "read": "6",
              "write": "4",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc6",
              "read": "7",
              "write": "2",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "8",
              "write": "0",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qc7",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "qc6",
              "to": "qf",
              "read": "",
              "write": "6",
              "move": "R"
            },
            {
              "from": "qc7",
              "to": "qc0",
              "read": "0",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc1",
              "read": "1",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc2",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "3",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc3",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc4",
              "read": "5",
              "write": "7",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc5",
              "read": "6",
              "write": "5",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc6",
              "read": "7",
              "write": "3",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "8",
              "write": "1",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qc7",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "qc7",
              "to": "qf",
              "read": "",
              "write": "7",
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

export default MT_L22;
