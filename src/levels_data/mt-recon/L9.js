// ── MT Reconhecedora L9: {aⁱbʲcᵏ / k = i + j, i ≥ 0, j ≥ 0} ──────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/reconhecedora/L9.xml
// (verificado por fuzz contra a linguagem formal antes da conversão — ver
// notas abaixo sobre a correção estrutural aplicada).
//
// CORREÇÃO NO GABARITO: o algoritmo original só contava quantidades (i, j, k)
// mas NUNCA verificava que a palavra tinha o formato a*b*c* — os estados q2/q3
// (que procuram o "c" par de um "a"/"b") avançam livremente sobre QUALQUER
// símbolo não relevante, então uma palavra fora de ordem como "aca" ou "acb"
// era aceita incorretamente (contava 1 'a' e 1 'c', "casava" os dois, ignorando
// que havia um símbolo entre eles fora do bloco esperado).
// Correção: adicionada uma fase de pré-validação de FORMATO (estados p0-p3)
// que varre a palavra uma vez confirmando a*b*c* antes de entregar o controle
// pro algoritmo de contagem original (agora a partir de q1, que deixou de ser
// o estado inicial). Também foram necessários 2 ajustes pontuais em q1/q10
// para o caminho "sem b" (j=0) funcionar com i>1 — mesma classe de bug de
// "falta pular sobre símbolo já marcado" encontrada no L5/L8.
// Verificado por fuzz: 0 divergências em 88.573 palavras (alfabeto {a,b,c},
// comprimento até 10) comparado contra a definição formal da linguagem.

const MT_RECON_L9 = {
  "id": "MT_RECON_L9",
  "label": "L9",
  "type": "recognizer",
  "level": "hard",
  "alphabet": [
    "a",
    "b",
    "c"
  ],
  "tapeAlphabet": [
    "A",
    "B",
    "C",
    "a",
    "b",
    "c",
    "□"
  ],
  "language": "{aⁱbʲcᵏ / k = i + j, i ≥ 0, j ≥ 0}",
  "description": "Reconheça aⁱbʲcᵏ onde a quantidade de \"c\" é igual à soma das quantidades de \"a\" e \"b\".",
  "hint": "A palavra precisa estar na ordem a*b*c*; depois, cada \"a\" e cada \"b\" precisa de um \"c\" correspondente.",
  "acceptedWords": [
    "",
    "ac",
    "bc",
    "aacc",
    "abcc",
    "aabbcccc"
  ],
  "rejectedWords": [
    "a",
    "b",
    "ab",
    "aca",
    "cab",
    "acb",
    "aab",
    "aabbcc"
  ],
  "formalDescription": {
    "sigma": "{a,b,c}",
    "gamma": "{a,b,c,A,B,C,□}",
    "states": "{p0,p1,p2,p3,q1,q2,...,q11}",
    "initial": "p0",
    "final": "{q11}",
    "blank": "□"
  },
  "guidedLesson": {
    "steps": [
      {
        "prof": {
          "message": "Bem-vindo! Vamos construir a MT Reconhecedora da linguagem {aⁱbʲcᵏ / k = i + j, i ≥ 0, j ≥ 0}.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [],
          "transitions": []
        }
      },
      {
        "prof": {
          "message": "Vamos testar a palavra \"abcc\". Começamos no estado inicial p0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": []
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "p0"
      },
      {
        "prof": {
          "message": "Nova regra: em p0, ao ler 'a', vamos para p0, escrevemos 'a' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "p0"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em p0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "p0"
      },
      {
        "prof": {
          "message": "Criamos p1 e a aresta b;b,R: em p0, ao ler 'b', vamos para p1, escrevemos 'b' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "p0"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em p1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "p1"
      },
      {
        "prof": {
          "message": "Criamos p2 e a aresta c;c,R: em p1, ao ler 'c', vamos para p2, escrevemos 'c' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "p1"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em p2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "p2"
      },
      {
        "prof": {
          "message": "Nova regra: em p2, ao ler 'c', vamos para p2, escrevemos 'c' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "p2"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em p2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "p2"
      },
      {
        "prof": {
          "message": "Criamos p3 e a aresta □;□,L: em p2, ao ler '□', vamos para p3, escrevemos '□' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "p2"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Nova regra: em p3, ao ler 'c', vamos para p3, escrevemos 'c' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Nova regra: em p3, ao ler 'b', vamos para p3, escrevemos 'b' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Nova regra: em p3, ao ler 'a', vamos para p3, escrevemos 'a' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Criamos q1 e a aresta □;□,R: em p3, ao ler '□', vamos para q1, escrevemos '□' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Criamos q2 e a aresta a;A,R: em q1, ao ler 'a', vamos para q2, escrevemos 'A' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "a",
          "b",
          "c",
          "c",
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
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Criamos q3 e a aresta c;C,L: em q2, ao ler 'c', vamos para q3, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "read": "c",
              "write": "C",
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "read": "c",
              "write": "C",
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 3,
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "read": "c",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 3,
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "read": "c",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler 'A', vamos para q1, escrevemos 'A' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
      },
      {
        "prof": {
          "message": "Criamos q4 e a aresta b;B,R: em q1, ao ler 'b', vamos para q4, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "b",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q1"
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
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Nova regra: em q4, ao ler 'C', vamos para q4, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Criamos q5 e a aresta c;C,L: em q4, ao ler 'c', vamos para q5, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Nova regra: em q5, ao ler 'C', vamos para q5, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Criamos q6 e a aresta B;B,R: em q5, ao ler 'B', vamos para q6, escrevemos 'B' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Criamos q7 e a aresta C;C,R: em q6, ao ler 'C', vamos para q7, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Nova regra: em q7, ao ler 'C', vamos para q7, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
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
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Criamos q8 e a aresta □;□,L: em q7, ao ler '□', vamos para q8, escrevemos '□' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Nova regra: em q8, ao ler 'C', vamos para q8, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Criamos q9 e a aresta B;B,L: em q8, ao ler 'B', vamos para q9, escrevemos 'B' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q8"
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
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Criamos q10 e a aresta A;A,L: em q9, ao ler 'A', vamos para q10, escrevemos 'A' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Criamos q11 e a aresta □;□,R: em q10, ao ler '□', vamos para q11, escrevemos '□' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Chegamos em q11 (final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "abcc",
        "tape": [
          "□",
          "□",
          "A",
          "B",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q11",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Próxima palavra: \"aabccc\". Mesma máquina, novo teste.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "p0"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em p0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "p0"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em p0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "p0"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em p1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "p1"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em p2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "p2"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em p2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "p2"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em p2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "p2"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'c' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em p3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "p3"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "a",
          "a",
          "b",
          "c",
          "c",
          "c",
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
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "c",
          "c",
          "c",
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
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "c",
          "c",
          "c",
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
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "c",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "C",
          "c",
          "c",
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
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "C",
          "c",
          "c",
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "C",
          "c",
          "c",
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "C",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "a",
          "b",
          "C",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 3,
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
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "b",
          "C",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 4,
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
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "b",
          "C",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Nova regra: em q2, ao ler 'C', vamos para q2, escrevemos 'C' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "b",
          "C",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q2.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "b",
          "C",
          "c",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q2"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "b",
          "C",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Nova regra: em q3, ao ler 'C', vamos para q3, escrevemos 'C' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "b",
          "C",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q3.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "b",
          "C",
          "C",
          "c",
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
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "b",
          "C",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q3"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "b",
          "C",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q1"
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
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q4.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "c",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q4"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'C' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q5.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q5"
      },
      {
        "prof": {
          "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q6.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q6"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q7.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 8,
        "activeNode": "q7"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 7,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 6,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 5,
        "activeNode": "q8"
      },
      {
        "prof": {
          "message": "Executou: leu 'C', escreveu 'C' e moveu. Agora em q8.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "q8"
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
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "q9"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Nova regra: em q10, ao ler 'A', vamos para q10, escrevemos 'A' e movemos à ESQUERDA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 1,
        "activeNode": "q10"
      },
      {
        "prof": {
          "message": "Executou: leu '□', escreveu '□' e moveu. Chegamos em q11 (final) e não há mais nada a ler. Palavra ACEITA! ✓",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aabccc",
        "tape": [
          "□",
          "□",
          "A",
          "A",
          "B",
          "C",
          "C",
          "C",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "q11",
        "status": "ACCEPTED"
      },
      {
        "prof": {
          "message": "Próxima palavra: \"aca\". Mesma máquina, novo teste.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aca",
        "tape": [
          "□",
          "□",
          "a",
          "c",
          "a",
          "□",
          "□"
        ],
        "head": 2,
        "activeNode": "p0"
      },
      {
        "prof": {
          "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em p0.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aca",
        "tape": [
          "□",
          "□",
          "a",
          "c",
          "a",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "p0"
      },
      {
        "prof": {
          "message": "Nova regra: em p0, ao ler 'c', vamos para p2, escrevemos 'c' e movemos à DIREITA.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aca",
        "tape": [
          "□",
          "□",
          "a",
          "c",
          "a",
          "□",
          "□"
        ],
        "head": 3,
        "activeNode": "p0"
      },
      {
        "prof": {
          "message": "Executou: leu 'c', escreveu 'c' e moveu. A máquina PAROU em p2 — não é estado final. Palavra REJEITADA.",
          "mood": "triste"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "simulateWord": "aca",
        "tape": [
          "□",
          "□",
          "a",
          "c",
          "a",
          "□",
          "□"
        ],
        "head": 4,
        "activeNode": "p2",
        "status": "REJECTED"
      },
      {
        "prof": {
          "message": "Essa é a Máquina de Turing completa, com todas as regras que construímos — algumas ainda não apareceram nos exemplos acima, mas já estão todas aqui no grafo.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
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
          "message": "Grafo finalizado! 🎉 Agora precisamos formalizar matematicamente a nossa Máquina de Turing. Vamos lá?",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
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
          "message": "A 7-tupla é M = (Q, Σ, Γ, δ, q0, □, F). Vou preencher campo por campo! Q é o conjunto de ESTADOS: {p0,p1,p2,p3,q1,q2,...,q11}.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "states": "{p0,p1,p2,p3,q1,q2,...,q11}"
        }
      },
      {
        "prof": {
          "message": "Σ é o alfabeto de ENTRADA: {a,b,c}.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "sigma": "{a,b,c}"
        }
      },
      {
        "prof": {
          "message": "Γ é o alfabeto da FITA (entrada + marcações + branco): {a,b,c,A,B,C,□}.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "gamma": "{a,b,c,A,B,C,□}"
        }
      },
      {
        "prof": {
          "message": "p0 é o estado INICIAL.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "initial": "p0"
        }
      },
      {
        "prof": {
          "message": "O símbolo BRANCO (□) marca as células vazias da fita.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
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
          "message": "F é o conjunto de estados de ACEITAÇÃO: {q11}.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        },
        "phase": "FORMAL",
        "formalFill": {
          "final": "{q11}"
        }
      },
      {
        "prof": {
          "message": "Antes de contar, precisamos garantir que a palavra tem o FORMATO a*b*c* (blocos em ordem). p0/p1/p2 varrem a palavra uma vez, bloco por bloco, e p3 volta pro início.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
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
          "message": "Confirmado o formato, q1 decide: \"a\" (marca A, procura seu par em q2), \"b\" (marca B, vai pro scan final por q9), \"C\"/\"□\" (acabaram os a/b, vai pro scan final).",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
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
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            }
          ]
        }
      },
      {
        "prof": {
          "message": "q2 avança pulando símbolos já processados até achar o \"c\" livre mais próximo, marca C e volta (q3).",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
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
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        }
      },
      {
        "prof": {
          "message": "q3 volta até o \"A\" que abriu esse par, retornando a q1 para o próximo símbolo.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
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
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
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
            }
          ]
        }
      },
      {
        "prof": {
          "message": "Para \"b\" o caminho é análogo: q4/q5/q6/q7 avançam até o \"c\" livre, marcam C e voltam até o \"B\" que abriu o par, retornando a q1.",
          "mood": "explicando"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
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
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
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
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            }
          ]
        }
      },
      {
        "prof": {
          "message": "q8/q9/q10 fazem o scan final: varrem B/C/A restantes de volta até o início da fita, aceitando em q11.",
          "mood": "feliz"
        },
        "stateUpdate": {
          "nodes": [
            {
              "uid": "q1",
              "id": "q1",
              "label": "q1",
              "x": 3400,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q2",
              "id": "q2",
              "label": "q2",
              "x": 3780,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q3",
              "id": "q3",
              "label": "q3",
              "x": 4160,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q4",
              "id": "q4",
              "label": "q4",
              "x": 4540,
              "y": 3700,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q5",
              "id": "q5",
              "label": "q5",
              "x": 3400,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q6",
              "id": "q6",
              "label": "q6",
              "x": 3780,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q7",
              "id": "q7",
              "label": "q7",
              "x": 4160,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q8",
              "id": "q8",
              "label": "q8",
              "x": 4540,
              "y": 4000,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q9",
              "id": "q9",
              "label": "q9",
              "x": 3400,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q10",
              "id": "q10",
              "label": "q10",
              "x": 3780,
              "y": 4300,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "q11",
              "id": "q11",
              "label": "q11",
              "x": 4160,
              "y": 4300,
              "isInitial": false,
              "isFinal": true
            },
            {
              "uid": "p0",
              "id": "p0",
              "label": "p0",
              "x": 4540,
              "y": 4300,
              "isInitial": true,
              "isFinal": false
            },
            {
              "uid": "p1",
              "id": "p1",
              "label": "p1",
              "x": 3400,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p2",
              "id": "p2",
              "label": "p2",
              "x": 3780,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            },
            {
              "uid": "p3",
              "id": "p3",
              "label": "p3",
              "x": 4160,
              "y": 4600,
              "isInitial": false,
              "isFinal": false
            }
          ],
          "transitions": [
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
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
              "from": "q3",
              "to": "q3",
              "read": "C",
              "write": "C",
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
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
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
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q9",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
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
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
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
              "from": "p0",
              "to": "p0",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p0",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p1",
              "to": "p1",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p1",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p2",
              "to": "p2",
              "read": "c",
              "write": "c",
              "move": "R"
            },
            {
              "from": "p2",
              "to": "p3",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "a",
              "write": "a",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "p3",
              "read": "c",
              "write": "c",
              "move": "L"
            },
            {
              "from": "p3",
              "to": "q1",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q2",
              "read": "a",
              "write": "A",
              "move": "R"
            },
            {
              "from": "q1",
              "to": "q4",
              "read": "b",
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
              "from": "q1",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q1",
              "to": "q10",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q3",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "a",
              "write": "a",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q2",
              "to": "q2",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q3",
              "to": "q1",
              "read": "A",
              "write": "A",
              "move": "R"
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
              "from": "q4",
              "to": "q5",
              "read": "c",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "b",
              "write": "b",
              "move": "R"
            },
            {
              "from": "q4",
              "to": "q4",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q6",
              "read": "B",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q5",
              "to": "q5",
              "read": "b",
              "write": "b",
              "move": "L"
            },
            {
              "from": "q6",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q6",
              "to": "q4",
              "read": "b",
              "write": "B",
              "move": "R"
            },
            {
              "from": "q7",
              "to": "q8",
              "read": "",
              "write": "",
              "move": "L"
            },
            {
              "from": "q7",
              "to": "q7",
              "read": "C",
              "write": "C",
              "move": "R"
            },
            {
              "from": "q8",
              "to": "q9",
              "read": "B",
              "write": "B",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q8",
              "to": "q8",
              "read": "C",
              "write": "C",
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
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q9",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "A",
              "write": "A",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q10",
              "read": "C",
              "write": "C",
              "move": "L"
            },
            {
              "from": "q10",
              "to": "q11",
              "read": "",
              "write": "",
              "move": "R"
            }
          ]
        }
      }
    ]
  }
};

export default MT_RECON_L9;
