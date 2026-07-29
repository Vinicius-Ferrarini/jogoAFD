// ── MT Transdutora L14 (lista nova) ──────────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/transdutora/L14.xml
// (verificado por fuzz contra a transformação esperada antes da conversão).

const MT_L14 = {
  id:          'MT_L14',
  label:       'L14',
  type:        'transducer',
  level:       'hard',
  alphabet:    ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],
  tapeAlphabet: ["0","1","2","3","4","5","6","7","8","9","<","A","B","C","D","E","F","□"],
  startMarker: "<",
  description: "Tem como entrada um número qualquer em hexadecimal e gera como saída o número incrementado em uma unidade – Incremento hexadecimal.",
  hint:        "Igual ao incremento decimal, mas em base 16: depois de 'F' o dígito vira '0' e propaga o carry.",
  validate:    (w) => (parseInt(w,16)+1).toString(16).toUpperCase(),
  testWords:   ["0","9","A","F","1F","FF"],
  skipEmptyWord: true,
  formalDescription: {
    sigma:   '{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F}',
    gamma:   '{0,1,2,3,4,5,6,7,8,9,<,A,B,C,D,E,F,□}',
    states:  '{q0,q1,q2,q3,q4,q5,q6}',
    initial: 'q0',
    final:   '{q6}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
      {
        "prof": {
          "message": "Bem-vindo! Vamos construir a MT Transdutora que tem como entrada um número qualquer em hexadecimal e gera como saída o número incrementado em uma unidade – incremento hexadecimal.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [],
          "transitions": []
        }
      },
      {
        "prof": {
          "message": "Vamos testar a palavra \"0\". Começamos no estado inicial q0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": []
        },
        "simulateWord": "0",
        "tape": [
          "□",
          "□",
          "<",
          "0",
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
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
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
        "simulateWord": "0",
        "tape": [
          "□",
          "□",
          "<",
          "0",
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
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
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
        "simulateWord": "0",
        "tape": [
          "□",
          "□",
          "<",
          "0",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Nova regra: em q1, ao ler '0', vamos para q1, escrevemos '0' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
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
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            }
          ]
        },
        "simulateWord": "0",
        "tape": [
          "□",
          "□",
          "<",
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
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
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
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            }
          ]
        },
        "simulateWord": "0",
        "tape": [
          "□",
          "□",
          "<",
          "0",
          "□",
          "□"
        ],
        "head": 4,
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
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
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
            },
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
              "read": "0",
              "write": "0",
              "move": "R"
            }
          ]
        },
        "simulateWord": "0",
        "tape": [
          "□",
          "□",
          "<",
          "0",
          "□",
          "□"
        ],
        "head": 4,
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
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
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
            },
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
              "read": "0",
              "write": "0",
              "move": "R"
            }
          ]
        },
        "simulateWord": "0",
        "tape": [
          "□",
          "□",
          "<",
          "0",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler '0', vamos para q3, escrevemos '1' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
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
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            }
          ]
        },
        "simulateWord": "0",
        "tape": [
          "□",
          "□",
          "<",
          "0",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu '0', escreveu '1' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
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
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            }
          ]
        },
        "simulateWord": "0",
        "tape": [
          "□",
          "□",
          "<",
          "1",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler '<', vamos para q6, escrevemos '<' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
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
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            }
          ]
        },
        "simulateWord": "0",
        "tape": [
          "□",
          "□",
          "<",
          "1",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Chegamos em q6 (estado final). A fita ficou \"1\". ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
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
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            }
          ]
        },
        "simulateWord": "0",
        "tape": [
          "□",
          "□",
          "<",
          "1",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q6",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Próxima palavra: \"F\". Mesma máquina, novo teste.",
          "mood": "serio"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
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
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "F",
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
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
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
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "F",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Nova regra: em q1, ao ler 'F', vamos para q1, escrevemos 'F' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
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
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "F",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Executou: leu 'F', escreveu 'F' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
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
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "F",
          "□",
          "□"
        ],
        "head": 4,
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
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
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
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "F",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler 'F', vamos para q2, escrevemos '0' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
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
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "F",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'F', escreveu '0' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
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
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "0",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler '<', vamos para q4, escrevemos '<' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "0",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "0",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler '0', vamos para q5, escrevemos '1' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "0",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu '0', escreveu '1' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "1",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Nova regra: em q5, ao ler '□', vamos para q3, escrevemos '0' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "1",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '0' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q1",
              "to": "q1",
              "read": "0",
              "write": "0",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "1",
          "0",
          "□"
        ],
        "head": 3,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler '1', vamos para q3, escrevemos '1' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
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
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "1",
          "0",
          "□"
        ],
        "head": 3,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
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
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "1",
          "0",
          "□"
        ],
        "head": 2,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Chegamos em q6 (estado final). A fita ficou \"10\". ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
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
              "read": "F",
              "write": "F",
              "move": "R"
            }
          ]
        },
        "simulateWord": "F",
        "tape": [
          "□",
          "□",
          "<",
          "1",
          "0",
          "□"
        ],
        "head": 3,
        "activeNode": "q6",
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
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "A",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "C",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "E",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "6",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "B",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "D",
              "write": "E",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "9",
              "write": "9",
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
              "from": "q3",
              "to": "q3",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "D",
              "write": "D",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q5",
              "to": "q5",
              "read": "0",
              "write": "0",
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
              "read": "D",
              "write": "D",
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
              "read": "7",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "E",
              "write": "E",
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
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "9",
              "write": "A",
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
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "A",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "C",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "E",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "6",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "B",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "D",
              "write": "E",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "9",
              "write": "9",
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
              "from": "q3",
              "to": "q3",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "D",
              "write": "D",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q5",
              "to": "q5",
              "read": "0",
              "write": "0",
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
              "read": "D",
              "write": "D",
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
              "read": "7",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "E",
              "write": "E",
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
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "9",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "formalIntro": true
      },
      {
        "prof": {
          "message": "Q é o conjunto de ESTADOS: {q0,q1,q2,q3,q4,q5,q6}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "A",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "C",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "E",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "6",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "B",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "D",
              "write": "E",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "9",
              "write": "9",
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
              "from": "q3",
              "to": "q3",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "D",
              "write": "D",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q5",
              "to": "q5",
              "read": "0",
              "write": "0",
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
              "read": "D",
              "write": "D",
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
              "read": "7",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "E",
              "write": "E",
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
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "9",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "states": "{q0,q1,q2,q3,q4,q5,q6}"
        }
      },
      {
        "prof": {
          "message": "Σ é o alfabeto de ENTRADA: {0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "A",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "C",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "E",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "6",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "B",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "D",
              "write": "E",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "9",
              "write": "9",
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
              "from": "q3",
              "to": "q3",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "D",
              "write": "D",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q5",
              "to": "q5",
              "read": "0",
              "write": "0",
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
              "read": "D",
              "write": "D",
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
              "read": "7",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "E",
              "write": "E",
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
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "9",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "sigma": "{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F}"
        }
      },
      {
        "prof": {
          "message": "Γ é o alfabeto da FITA: {0,1,2,3,4,5,6,7,8,9,<,A,B,C,D,E,F,□}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "A",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "C",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "E",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "6",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "B",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "D",
              "write": "E",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "9",
              "write": "9",
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
              "from": "q3",
              "to": "q3",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "D",
              "write": "D",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q5",
              "to": "q5",
              "read": "0",
              "write": "0",
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
              "read": "D",
              "write": "D",
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
              "read": "7",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "E",
              "write": "E",
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
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "9",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "gamma": "{0,1,2,3,4,5,6,7,8,9,<,A,B,C,D,E,F,□}"
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
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "A",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "C",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "E",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "6",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "B",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "D",
              "write": "E",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "9",
              "write": "9",
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
              "from": "q3",
              "to": "q3",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "D",
              "write": "D",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q5",
              "to": "q5",
              "read": "0",
              "write": "0",
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
              "read": "D",
              "write": "D",
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
              "read": "7",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "E",
              "write": "E",
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
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "9",
              "write": "A",
              "move": "L"
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
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "A",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "C",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "E",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "6",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "B",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "D",
              "write": "E",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "9",
              "write": "9",
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
              "from": "q3",
              "to": "q3",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "D",
              "write": "D",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q5",
              "to": "q5",
              "read": "0",
              "write": "0",
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
              "read": "D",
              "write": "D",
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
              "read": "7",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "E",
              "write": "E",
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
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "9",
              "write": "A",
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
          "message": "F é o conjunto de estados de ACEITAÇÃO: {q6}",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q0",
              "id": "q0",
              "label": "q0",
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "A",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "C",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "E",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "6",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "B",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "D",
              "write": "E",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "9",
              "write": "9",
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
              "from": "q3",
              "to": "q3",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "D",
              "write": "D",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q5",
              "to": "q5",
              "read": "0",
              "write": "0",
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
              "read": "D",
              "write": "D",
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
              "read": "7",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "E",
              "write": "E",
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
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "9",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "final": "{q6}"
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
              "x": 3588,
              "y": 3953,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3739,
              "y": 3946,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3960,
              "y": 3919,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4284,
              "y": 3915,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 3732,
              "y": 4076,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 4092,
              "y": 4072,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 4412,
              "y": 4085,
              "isInitial": false,
              "isFinal": true
            }
          ],
          "transitions": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "A",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "C",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "E",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "6",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "B",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "D",
              "write": "E",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "9",
              "write": "9",
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
              "from": "q3",
              "to": "q3",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "D",
              "write": "D",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q5",
              "to": "q5",
              "read": "0",
              "write": "0",
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
              "read": "D",
              "write": "D",
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
              "read": "7",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "E",
              "write": "E",
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
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "9",
              "write": "A",
              "move": "L"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "delta": [
            {
              "from": "q4",
              "to": "q5",
              "read": "0",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q3",
              "read": "",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q6",
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "1",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "3",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "5",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "7",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "F",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "A",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "C",
              "write": "D",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "E",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "2",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "6",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "B",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "4",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "D",
              "write": "E",
              "move": "L"
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
              "read": "<",
              "write": "<",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "8",
              "write": "9",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "0",
              "write": "1",
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
              "from": "q3",
              "to": "q3",
              "read": "3",
              "write": "3",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "2",
              "write": "2",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "0",
              "write": "0",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "9",
              "write": "9",
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
              "from": "q3",
              "to": "q3",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "1",
              "write": "1",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "8",
              "write": "8",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "E",
              "write": "E",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "4",
              "write": "4",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "5",
              "write": "5",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "F",
              "write": "F",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "6",
              "write": "6",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "7",
              "write": "7",
              "move": "L"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "D",
              "write": "D",
              "move": "L"
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
              "read": "4",
              "write": "4",
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
              "read": "1",
              "write": "1",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "F",
              "write": "F",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "A",
              "write": "A",
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
              "from": "q5",
              "to": "q5",
              "read": "0",
              "write": "0",
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
              "read": "D",
              "write": "D",
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
              "read": "7",
              "write": "7",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "E",
              "write": "E",
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
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q1",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "9",
              "write": "A",
              "move": "L"
            }
          ]
        }
      }
    ],
  },
};

export default MT_L14;
