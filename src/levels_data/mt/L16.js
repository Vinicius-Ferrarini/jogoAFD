// ── MT Transdutora L16 (lista nova) ──────────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/transdutora/L16.xml
// (verificado por fuzz contra a transformação esperada antes da conversão).

const MT_L16 = {
  id:          'MT_L16',
  label:       'L16',
  type:        'transducer',
  level:       'medium',
  alphabet:    ["0","1","2","3","4","5","6","7","8","9"],
  tapeAlphabet: ["0","1","2","3","4","5","6","7","8","9","□"],
  description: "Tem como entrada um número qualquer em decimal e gera como saída o número multiplicado por 2 – Decimal vezes 2.",
  hint:        "Dobre cada dígito e propague o carry (vem do dígito seguinte à direita) da direita para a esquerda.",
  validate:    (w) => String(parseInt(w,10)*2),
  testWords:   ["0","1","5","10","99","123"],
  skipEmptyWord: true,
  formalDescription: {
    sigma:   '{0,1,2,3,4,5,6,7,8,9}',
    gamma:   '{0,1,2,3,4,5,6,7,8,9,□}',
    states:  '{q0,q1,MUL,VAI 1,q4}',
    initial: 'q1',
    final:   '{q4}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
      {
        "prof": {
          "message": "Bem-vindo! Vamos construir a MT Transdutora que tem como entrada um número qualquer em decimal e gera como saída o número multiplicado por 2 – decimal vezes 2.",
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
              "x": 3219,
              "y": 4352,
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
              "x": 3219,
              "y": 4352,
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
              "x": 3219,
              "y": 4352,
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
          "message": "Nova regra: em q1, ao ler '□', vamos para MUL, escrevemos '□' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
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
              "to": "MUL",
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
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em MUL.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
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
              "to": "MUL",
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
        "activeNode": "MUL"
      },
      {
        "prof": {
          "message": "Nova regra: em MUL, ao ler '1', vamos para MUL, escrevemos '2' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "to": "MUL",
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
        "activeNode": "MUL"
      },
      {
        "prof": {
          "message": "Executou: leu '1', escreveu '2' e moveu. Agora em MUL.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "to": "MUL",
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
          "2",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "MUL"
      },
      {
        "prof": {
          "message": "Nova regra: em MUL, ao ler '□', vamos para q4, escrevemos '□' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "to": "MUL",
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
          "2",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "MUL"
      },
      {
        "prof": {
          "message": "Chegamos em q4 (estado final). A fita ficou \"2\". ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "to": "MUL",
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
          "2",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q4",
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
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em MUL.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
        "activeNode": "MUL"
      },
      {
        "prof": {
          "message": "Nova regra: em MUL, ao ler '5', vamos para VAI 1, escrevemos '0' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
        "activeNode": "MUL"
      },
      {
        "prof": {
          "message": "Executou: leu '5', escreveu '0' e moveu. Agora em VAI 1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
        "activeNode": "VAI 1"
      },
      {
        "prof": {
          "message": "Nova regra: em VAI 1, ao ler '□', vamos para q0, escrevemos '1' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
        "activeNode": "VAI 1"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '1' e moveu. Agora em q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "5",
        "tape": [
          "□",
          "1",
          "0",
          "□",
          "□"
        ],
        "head": 0,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Nova regra: em q0, ao ler '□', vamos para q4, escrevemos '□' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "5",
        "tape": [
          "□",
          "1",
          "0",
          "□",
          "□"
        ],
        "head": 0,
        "activeNode": "q0"
      },
      {
        "prof": {
          "message": "Chegamos em q4 (estado final). A fita ficou \"10\". ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "5",
        "tape": [
          "□",
          "1",
          "0",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q4",
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
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "7",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "2",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "0",
              "write": "1",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "to": "q1",
              "read": "3",
              "write": "3",
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
              "read": "0",
              "write": "0",
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
              "read": "2",
              "write": "2",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "7",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "2",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "0",
              "write": "1",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "to": "q1",
              "read": "3",
              "write": "3",
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
              "read": "0",
              "write": "0",
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
              "read": "2",
              "write": "2",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "formalIntro": true
      },
      {
        "prof": {
          "message": "Q é o conjunto de ESTADOS: {q0,q1,MUL,VAI 1,q4}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "7",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "2",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "0",
              "write": "1",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "to": "q1",
              "read": "3",
              "write": "3",
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
              "read": "0",
              "write": "0",
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
              "read": "2",
              "write": "2",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "states": "{q0,q1,MUL,VAI 1,q4}"
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
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "7",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "2",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "0",
              "write": "1",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "to": "q1",
              "read": "3",
              "write": "3",
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
              "read": "0",
              "write": "0",
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
              "read": "2",
              "write": "2",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "7",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "2",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "0",
              "write": "1",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "to": "q1",
              "read": "3",
              "write": "3",
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
              "read": "0",
              "write": "0",
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
              "read": "2",
              "write": "2",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "7",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "2",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "0",
              "write": "1",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "to": "q1",
              "read": "3",
              "write": "3",
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
              "read": "0",
              "write": "0",
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
              "read": "2",
              "write": "2",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "7",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "2",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "0",
              "write": "1",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "to": "q1",
              "read": "3",
              "write": "3",
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
              "read": "0",
              "write": "0",
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
              "read": "2",
              "write": "2",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
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
          "message": "F é o conjunto de estados de ACEITAÇÃO: {q4}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "7",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "2",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "0",
              "write": "1",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "to": "q1",
              "read": "3",
              "write": "3",
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
              "read": "0",
              "write": "0",
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
              "read": "2",
              "write": "2",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "final": "{q4}"
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
              "x": 4781,
              "y": 4158,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3219,
              "y": 4352,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "MUL",
              "id": "MUL",
              "label": "MUL",
              "x": 3437,
              "y": 4350,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "VAI 1",
              "id": "VAI 1",
              "label": "VAI 1",
              "x": 4382,
              "y": 4368,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4248,
              "y": 3632,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "7",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "2",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "0",
              "write": "1",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "to": "q1",
              "read": "3",
              "write": "3",
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
              "read": "0",
              "write": "0",
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
              "read": "2",
              "write": "2",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "delta": [
            {
              "from": "MUL",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "9",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "4",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q0",
              "to": "q4",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "2",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "7",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "7",
              "write": "4",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "2",
              "write": "5",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "8",
              "write": "7",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "9",
              "write": "9",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "6",
              "write": "2",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "3",
              "write": "7",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "3",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "6",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "8",
              "write": "6",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "1",
              "write": "3",
              "move": "L"
            },
            {
              "from": "MUL",
              "to": "MUL",
              "read": "4",
              "write": "8",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "VAI 1",
              "read": "5",
              "write": "1",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "MUL",
              "read": "0",
              "write": "1",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "to": "q1",
              "read": "3",
              "write": "3",
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
              "read": "0",
              "write": "0",
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
              "read": "2",
              "write": "2",
              "move": "R"
            },
            {
              "from": "MUL",
              "to": "VAI 1",
              "read": "5",
              "write": "0",
              "move": "L"
            },
            {
              "from": "VAI 1",
              "to": "q0",
              "read": "",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "MUL",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        }
      }
    ],
  },
};

export default MT_L16;
