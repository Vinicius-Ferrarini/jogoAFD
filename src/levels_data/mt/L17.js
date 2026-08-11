// ── MT Transdutora L17 (lista nova) ──────────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/transdutora/L17.xml
// (verificado por fuzz contra a transformação esperada antes da conversão).

const MT_L17 = {
  id:          'MT_L17',
  label:       'L17',
  type:        'transducer',
  level:       'hard',
  alphabet:    ["0","1","2","3","4","5","6","7","8","9"],
  tapeAlphabet: ["0","1","2","3","4","5","6","7","8","9","□"],
  description: "Tem como entrada um número qualquer em decimal e gera como saída o número multiplicado por 3 – Decimal vezes 3. [GABARITO NÃO-OFICIAL: generalização verificada do L16 oficial]",
  hint:        "Multiplique cada dígito por 3, escreva o dígito das unidades e propague o carry (dezenas) para o dígito à esquerda, da direita para a esquerda.",
  validate:    (w) => String(parseInt(w,10)*3),
  testWords:   ["0","1","5","10","99","123"],
  skipEmptyWord: true,
  formalDescription: {
    sigma:   '{0,1,2,3,4,5,6,7,8,9}',
    gamma:   '{0,1,2,3,4,5,6,7,8,9,□}',
    states:  '{q0,q1,qc0,qc1,qc2,qf}',
    initial: 'q1',
    final:   '{qf}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
    {
      "prof": {
        "message": "Bem-vindo! Vamos construir a MT Transdutora que tem como entrada um número qualquer em decimal e gera como saída o número multiplicado por 3 – decimal vezes 3. [gabarito não-oficial: generalização verificada do l16 oficial]",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '□', vamos para qc0, escrevemos '□' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,{"uid":"qc0","id":"qc0","label":"qc0","x":3820,"y":4045,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,{"from":"q1","to":"qc0","read":"","write":"","move":"L"}]}
      },
      "simulateWord": "1",
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '1', vamos para qc0, escrevemos '3' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,{"from":"qc0","to":"qc0","read":"1","write":"3","move":"L"}]}
      },
      "simulateWord": "1",
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '3' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": {"d":[2,"3"]},
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '□', vamos para qf, escrevemos '□' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,{"uid":"qf","id":"qf","label":"qf","x":4720,"y":3775,"isInitial":false,"isFinal":true}]},
        "transitions": {"base":"prev","items":[0,1,2,{"from":"qc0","to":"qf","read":"","write":"","move":"R"}]}
      },
      "simulateWord": "1",
      "tape": "=",
      "head": 1,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Chegamos em qf (estado final). A fita ficou \"3\". ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": "=",
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
      "tape": {"d":[2,"0"]},
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
        "transitions": {"base":"prev","items":[{"from":"q1","to":"q1","read":"0","write":"0","move":"R"},0,1,2,3]}
      },
      "simulateWord": "0",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
        "transitions": {"base":"prev","items":[0,1,2,{"from":"qc0","to":"qc0","read":"0","write":"0","move":"L"},3,4]}
      },
      "simulateWord": "0",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": {"d":[2,"1"]},
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '3' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "1",
      "tape": {"d":[2,"3"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": {"d":[2,"2"]},
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
        "transitions": {"base":"prev","items":[0,1,{"from":"q1","to":"q1","read":"2","write":"2","move":"R"},2,3,4,5]}
      },
      "simulateWord": "2",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '2', vamos para qc0, escrevemos '6' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,{"from":"qc0","to":"qc0","read":"2","write":"6","move":"L"},6]}
      },
      "simulateWord": "2",
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '6' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "2",
      "tape": {"d":[2,"6"]},
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
      "simulateWord": "2",
      "tape": "=",
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
      "tape": "=",
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
      "tape": {"d":[2,"3"]},
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
        "transitions": {"base":"prev","items":[0,1,2,{"from":"q1","to":"q1","read":"3","write":"3","move":"R"},3,4,5,6,7]}
      },
      "simulateWord": "3",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '3', vamos para qc0, escrevemos '9' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,{"from":"qc0","to":"qc0","read":"3","write":"9","move":"L"},8]}
      },
      "simulateWord": "3",
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '9' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "3",
      "tape": {"d":[2,"9"]},
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
      "simulateWord": "3",
      "tape": "=",
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
      "tape": "=",
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
      "tape": {"d":[2,"4"]},
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
        "transitions": {"base":"prev","items":[0,1,2,3,{"from":"q1","to":"q1","read":"4","write":"4","move":"R"},4,5,6,7,8,9]}
      },
      "simulateWord": "4",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '4', vamos para qc1, escrevemos '2' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,{"uid":"qc1","id":"qc1","label":"qc1","x":4036,"y":4225,"isInitial":false,"isFinal":false},2]},
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,{"from":"qc0","to":"qc1","read":"4","write":"2","move":"L"},10]}
      },
      "simulateWord": "4",
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "4",
      "tape": {"d":[2,"2"]},
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
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,{"from":"qc1","to":"qf","read":"","write":"1","move":"R"}]}
      },
      "simulateWord": "4",
      "tape": "=",
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
      "simulateWord": "4",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
        "transitions": {"base":"prev","items":[0,1,2,3,4,{"from":"q1","to":"q1","read":"5","write":"5","move":"R"},5,6,7,8,9,10,11,12]}
      },
      "simulateWord": "5",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '5', vamos para qc1, escrevemos '5' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,{"from":"qc0","to":"qc1","read":"5","write":"5","move":"L"},12,13]}
      },
      "simulateWord": "5",
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "5",
      "tape": "=",
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
      "simulateWord": "5",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,{"from":"q1","to":"q1","read":"6","write":"6","move":"R"},6,7,8,9,10,11,12,13,14]}
      },
      "simulateWord": "6",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '6', vamos para qc1, escrevemos '8' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,{"from":"qc0","to":"qc1","read":"6","write":"8","move":"L"},14,15]}
      },
      "simulateWord": "6",
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '8' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "6",
      "tape": {"d":[2,"8"]},
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
      "simulateWord": "6",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,{"from":"q1","to":"q1","read":"7","write":"7","move":"R"},7,8,9,10,11,12,13,14,15,16]}
      },
      "simulateWord": "7",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '7', vamos para qc2, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,{"uid":"qc2","id":"qc2","label":"qc2","x":4252,"y":4045,"isInitial":false,"isFinal":false},3]},
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,{"from":"qc0","to":"qc2","read":"7","write":"1","move":"L"},16,17]}
      },
      "simulateWord": "7",
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "7",
      "tape": {"d":[2,"1"]},
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
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,{"from":"qc2","to":"qf","read":"","write":"2","move":"R"}]}
      },
      "simulateWord": "7",
      "tape": "=",
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
      "simulateWord": "7",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,{"from":"q1","to":"q1","read":"8","write":"8","move":"R"},8,9,10,11,12,13,14,15,16,17,18,19]}
      },
      "simulateWord": "8",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '8', vamos para qc2, escrevemos '4' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,{"from":"qc0","to":"qc2","read":"8","write":"4","move":"L"},18,19,20]}
      },
      "simulateWord": "8",
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "8",
      "tape": {"d":[2,"4"]},
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
      "simulateWord": "8",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,{"from":"q1","to":"q1","read":"9","write":"9","move":"R"},9,10,11,12,13,14,15,16,17,18,19,20,21]}
      },
      "simulateWord": "9",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Nova regra: em qc0, ao ler '9', vamos para qc2, escrevemos '7' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,{"from":"qc0","to":"qc2","read":"9","write":"7","move":"L"},20,21,22]}
      },
      "simulateWord": "9",
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '7' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "9",
      "tape": {"d":[2,"7"]},
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
      "simulateWord": "9",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": {"d":[2,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '3' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "10",
      "tape": {"d":[2,"3"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": {"d":[2,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '6' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "20",
      "tape": {"d":[2,"6"]},
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
      "simulateWord": "20",
      "tape": "=",
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
      "tape": "=",
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
      "tape": {"d":[2,"3"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '9' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "30",
      "tape": {"d":[2,"9"]},
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
      "simulateWord": "30",
      "tape": "=",
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
      "tape": "=",
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
      "tape": {"d":[2,"4"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "40",
      "tape": {"d":[2,"2"]},
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
      "simulateWord": "40",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '5' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "50",
      "tape": "=",
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
      "simulateWord": "50",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '8' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "60",
      "tape": {"d":[2,"8"]},
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
      "simulateWord": "60",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "70",
      "tape": {"d":[2,"1"]},
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
      "simulateWord": "70",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '4' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "80",
      "tape": {"d":[2,"4"]},
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
      "simulateWord": "80",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 2,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '7' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "90",
      "tape": {"d":[2,"7"]},
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
      "simulateWord": "90",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "04",
      "tape": {"d":[3,"2"]},
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
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,{"from":"qc1","to":"qc0","read":"0","write":"1","move":"L"},22,23]}
      },
      "simulateWord": "04",
      "tape": "=",
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
      "simulateWord": "04",
      "tape": {"d":[2,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": {"d":[3,"4"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "14",
      "tape": {"d":[3,"2"]},
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '1', vamos para qc0, escrevemos '4' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,{"from":"qc1","to":"qc0","read":"1","write":"4","move":"L"},23,24]}
      },
      "simulateWord": "14",
      "tape": "=",
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '4' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "14",
      "tape": {"d":[2,"4"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "24",
      "tape": {"d":[3,"2"]},
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '2', vamos para qc0, escrevemos '7' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,{"from":"qc1","to":"qc0","read":"2","write":"7","move":"L"},24,25]}
      },
      "simulateWord": "24",
      "tape": "=",
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '7' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "24",
      "tape": {"d":[2,"7"]},
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
      "simulateWord": "24",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "34",
      "tape": {"d":[3,"2"]},
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '3', vamos para qc1, escrevemos '0' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,{"from":"qc1","to":"qc1","read":"3","write":"0","move":"L"},25,26]}
      },
      "simulateWord": "34",
      "tape": "=",
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '0' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "34",
      "tape": {"d":[2,"0"]},
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
      "simulateWord": "34",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "44",
      "tape": {"d":[3,"2"]},
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '4', vamos para qc1, escrevemos '3' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,{"from":"qc1","to":"qc1","read":"4","write":"3","move":"L"},26,27]}
      },
      "simulateWord": "44",
      "tape": "=",
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '3' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "44",
      "tape": {"d":[2,"3"]},
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
      "simulateWord": "44",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "54",
      "tape": {"d":[3,"2"]},
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '5', vamos para qc1, escrevemos '6' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,{"from":"qc1","to":"qc1","read":"5","write":"6","move":"L"},27,28]}
      },
      "simulateWord": "54",
      "tape": "=",
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '6' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "54",
      "tape": {"d":[2,"6"]},
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
      "simulateWord": "54",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "64",
      "tape": {"d":[3,"2"]},
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '6', vamos para qc1, escrevemos '9' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,{"from":"qc1","to":"qc1","read":"6","write":"9","move":"L"},28,29]}
      },
      "simulateWord": "64",
      "tape": "=",
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '9' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "64",
      "tape": {"d":[2,"9"]},
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
      "simulateWord": "64",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "74",
      "tape": {"d":[3,"2"]},
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '7', vamos para qc2, escrevemos '2' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,{"from":"qc1","to":"qc2","read":"7","write":"2","move":"L"},29,30]}
      },
      "simulateWord": "74",
      "tape": "=",
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '2' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "74",
      "tape": {"d":[2,"2"]},
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
      "simulateWord": "74",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "84",
      "tape": {"d":[3,"2"]},
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '8', vamos para qc2, escrevemos '5' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,{"from":"qc1","to":"qc2","read":"8","write":"5","move":"L"},30,31]}
      },
      "simulateWord": "84",
      "tape": "=",
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '5' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "84",
      "tape": {"d":[2,"5"]},
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
      "simulateWord": "84",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '2' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "94",
      "tape": {"d":[3,"2"]},
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Nova regra: em qc1, ao ler '9', vamos para qc2, escrevemos '8' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,{"from":"qc1","to":"qc2","read":"9","write":"8","move":"L"},31,32]}
      },
      "simulateWord": "94",
      "tape": "=",
      "head": 2,
      "activeNode": "qc1"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '8' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "94",
      "tape": {"d":[2,"8"]},
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
      "simulateWord": "94",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "07",
      "tape": {"d":[3,"1"]},
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
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,{"from":"qc2","to":"qc0","read":"0","write":"2","move":"L"},33]}
      },
      "simulateWord": "07",
      "tape": "=",
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
      "simulateWord": "07",
      "tape": {"d":[2,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "17",
      "tape": {"d":[3,"1"]},
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '1', vamos para qc0, escrevemos '5' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,{"from":"qc2","to":"qc0","read":"1","write":"5","move":"L"},34]}
      },
      "simulateWord": "17",
      "tape": "=",
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '5' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "17",
      "tape": {"d":[2,"5"]},
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
      "simulateWord": "17",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "27",
      "tape": {"d":[3,"1"]},
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '2', vamos para qc0, escrevemos '8' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,{"from":"qc2","to":"qc0","read":"2","write":"8","move":"L"},35]}
      },
      "simulateWord": "27",
      "tape": "=",
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '2', escreveu '8' e moveu. Agora em qc0.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "27",
      "tape": {"d":[2,"8"]},
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
      "simulateWord": "27",
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "37",
      "tape": {"d":[3,"1"]},
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '3', vamos para qc1, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,{"from":"qc2","to":"qc1","read":"3","write":"1","move":"L"},36]}
      },
      "simulateWord": "37",
      "tape": "=",
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '3', escreveu '1' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "37",
      "tape": {"d":[2,"1"]},
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
      "simulateWord": "37",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "47",
      "tape": {"d":[3,"1"]},
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '4', vamos para qc1, escrevemos '4' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,{"from":"qc2","to":"qc1","read":"4","write":"4","move":"L"},37]}
      },
      "simulateWord": "47",
      "tape": "=",
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '4', escreveu '4' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "47",
      "tape": "=",
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
      "simulateWord": "47",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "57",
      "tape": {"d":[3,"1"]},
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '5', vamos para qc1, escrevemos '7' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,{"from":"qc2","to":"qc1","read":"5","write":"7","move":"L"},38]}
      },
      "simulateWord": "57",
      "tape": "=",
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '5', escreveu '7' e moveu. Agora em qc1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "57",
      "tape": {"d":[2,"7"]},
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
      "simulateWord": "57",
      "tape": {"d":[1,"1"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "67",
      "tape": {"d":[3,"1"]},
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '6', vamos para qc2, escrevemos '0' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,{"from":"qc2","to":"qc2","read":"6","write":"0","move":"L"},39]}
      },
      "simulateWord": "67",
      "tape": "=",
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '6', escreveu '0' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "67",
      "tape": {"d":[2,"0"]},
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
      "simulateWord": "67",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "77",
      "tape": {"d":[3,"1"]},
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '7', vamos para qc2, escrevemos '3' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,{"from":"qc2","to":"qc2","read":"7","write":"3","move":"L"},40]}
      },
      "simulateWord": "77",
      "tape": "=",
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '3' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "77",
      "tape": {"d":[2,"3"]},
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
      "simulateWord": "77",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "87",
      "tape": {"d":[3,"1"]},
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '8', vamos para qc2, escrevemos '6' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,{"from":"qc2","to":"qc2","read":"8","write":"6","move":"L"},41]}
      },
      "simulateWord": "87",
      "tape": "=",
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '8', escreveu '6' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "87",
      "tape": {"d":[2,"6"]},
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
      "simulateWord": "87",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
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
      "tape": "=",
      "head": 3,
      "activeNode": "qc0"
    },
    {
      "prof": {
        "message": "Executou: leu '7', escreveu '1' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "97",
      "tape": {"d":[3,"1"]},
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Nova regra: em qc2, ao ler '9', vamos para qc2, escrevemos '9' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,{"from":"qc2","to":"qc2","read":"9","write":"9","move":"L"},42]}
      },
      "simulateWord": "97",
      "tape": "=",
      "head": 2,
      "activeNode": "qc2"
    },
    {
      "prof": {
        "message": "Executou: leu '9', escreveu '9' e moveu. Agora em qc2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "97",
      "tape": "=",
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
      "simulateWord": "97",
      "tape": {"d":[1,"2"]},
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
      "tape": "=",
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
        "message": "Q é o conjunto de ESTADOS: {q0,q1,qc0,qc1,qc2,qf}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "states": "{q0,q1,qc0,qc1,qc2,qf}"
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
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "2",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc0",
            "read": "3",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "4",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "5",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc1",
            "read": "6",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "7",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "8",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc0",
            "to": "qc2",
            "read": "9",
            "write": "7",
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
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc0",
            "read": "2",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "3",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "4",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "5",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc1",
            "read": "6",
            "write": "9",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "7",
            "write": "2",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "8",
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc1",
            "to": "qc2",
            "read": "9",
            "write": "8",
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
            "write": "5",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc0",
            "read": "2",
            "write": "8",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "3",
            "write": "1",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "4",
            "write": "4",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc1",
            "read": "5",
            "write": "7",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "6",
            "write": "0",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "7",
            "write": "3",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "8",
            "write": "6",
            "move": "L"
          },
          {
            "from": "qc2",
            "to": "qc2",
            "read": "9",
            "write": "9",
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

export default MT_L17;
