// ── MT Transdutora L9 (lista nova) ──────────────────────────────────
// Gabarito importado de implementar/MT/gabaritos_oficiais/transdutora/L9.xml
// (verificado por fuzz contra a transformação esperada antes da conversão).

const MT_L9 = {
  id:          'MT_L9',
  label:       'L9',
  type:        'transducer',
  level:       'hard',
  alphabet:    ["a","b"],
  tapeAlphabet: ["#","1","<","A","B","a","b","□"],
  startMarker: "<",
  description: "Tem como entrada uma palavra com a e b e gera como saída a quantidade de a seguido da quantidade de b em unário – Contar a e b - w#qtdea#qtdeb.",
  hint:        "Marque cada 'a' e deposite um '1' numa zona; marque cada 'b' e deposite outro '1' noutra zona, separadas por '#'.",
  validate:    (w) => (()=>{const na=[...w].filter(c=>c==='a').length; const nb=[...w].filter(c=>c==='b').length; return w.toUpperCase()+'#'+'1'.repeat(na)+'#'+'1'.repeat(nb);})(),
  testWords:   ["a","b","ab","aab","bba"],
  skipEmptyWord: true,
  formalDescription: {
    sigma:   '{a,b}',
    gamma:   '{#,1,<,A,B,a,b,□}',
    states:  '{q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12}',
    initial: 'q0',
    final:   '{q12}',
    blank:   '□',
  },

  guidedLesson: {
    steps: [
    {
      "prof": {
        "message": "Bem-vindo! Vamos construir a MT Transdutora que tem como entrada uma palavra com a e b e gera como saída a quantidade de a seguido da quantidade de b em unário – contar a e b - w#qtdea#qtdeb.",
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
            "x": 3305,
            "y": 3812,
            "isInitial": true,
            "isFinal": false
          }
        ],
        "transitions": "="
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
        "nodes": {"base":"prev","items":[0,{"uid":"q1","id":"q1","label":"q1","x":3500,"y":3808,"isInitial":false,"isFinal":false}]},
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
      "tape": "=",
      "head": 2,
      "activeNode": "q0"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q1.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
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
        "transitions": {"base":"prev","items":[0,{"from":"q1","to":"q1","read":"a","write":"a","move":"R"}]}
      },
      "simulateWord": "ab",
      "tape": "=",
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
      "simulateWord": "ab",
      "tape": "=",
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
        "transitions": {"base":"prev","items":[0,1,{"from":"q1","to":"q1","read":"b","write":"b","move":"R"}]}
      },
      "simulateWord": "ab",
      "tape": "=",
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
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Nova regra: em q1, ao ler '□', vamos para q2, escrevemos '#' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,{"uid":"q2","id":"q2","label":"q2","x":3739,"y":3796,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,{"from":"q1","to":"q2","read":"","write":"#","move":"L"},1,2]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '#' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": {"d":[5,"#"]},
      "head": 4,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'b', vamos para q2, escrevemos 'b' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,{"from":"q2","to":"q2","read":"b","write":"b","move":"L"},1,2,3]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler 'a', vamos para q2, escrevemos 'a' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,{"from":"q2","to":"q2","read":"a","write":"a","move":"L"},1,2,3,4]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 2,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Nova regra: em q2, ao ler '<', vamos para q3, escrevemos '<' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,{"uid":"q3","id":"q3","label":"q3","x":3978,"y":3807,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,{"from":"q2","to":"q3","read":"<","write":"<","move":"R"}]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 2,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'a', vamos para q4, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,{"uid":"q4","id":"q4","label":"q4","x":4270,"y":3724,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,{"from":"q3","to":"q4","read":"a","write":"A","move":"R"},1,2,3,4,5,6]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": {"d":[3,"A"]},
      "head": 4,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler 'b', vamos para q4, escrevemos 'b' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,{"from":"q4","to":"q4","read":"b","write":"b","move":"R"},7]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler '#', vamos para q4, escrevemos '#' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,{"from":"q4","to":"q4","read":"#","write":"#","move":"R"},8]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 6,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler '□', vamos para q5, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,{"uid":"q5","id":"q5","label":"q5","x":4581,"y":3807,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,1,{"from":"q4","to":"q5","read":"","write":"1","move":"L"},2,3,4,5,6,7,8,9]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 6,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": {"d":[6,"1"]},
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler '#', vamos para q5, escrevemos '#' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,{"from":"q5","to":"q5","read":"#","write":"#","move":"L"},5,6,7,8,9,10]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'b', vamos para q5, escrevemos 'b' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,{"from":"q5","to":"q5","read":"b","write":"b","move":"L"},6,7,8,9,10,11]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'A', vamos para q5, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,{"from":"q5","to":"q5","read":"A","write":"A","move":"L"},7,8,9,10,11,12]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler '<', vamos para q3, escrevemos '<' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,{"from":"q5","to":"q3","read":"<","write":"<","move":"R"},3,4,5,6,7,8,9,10,11,12,13]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'A', vamos para q3, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,{"from":"q3","to":"q3","read":"A","write":"A","move":"R"},14]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler 'b', vamos para q3, escrevemos 'b' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,{"from":"q3","to":"q3","read":"b","write":"b","move":"R"},12,13,14,15]}
      },
      "simulateWord": "ab",
      "tape": "=",
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
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Nova regra: em q3, ao ler '#', vamos para q6, escrevemos '#' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,{"uid":"q6","id":"q6","label":"q6","x":3726,"y":4062,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,{"from":"q3","to":"q6","read":"#","write":"#","move":"R"},16]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 6,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler '1', vamos para q6, escrevemos '1' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,{"from":"q6","to":"q6","read":"1","write":"1","move":"R"},16,17]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 6,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "b",
        "#",
        "1",
        "□"
      ],
      "head": 7,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Nova regra: em q6, ao ler '□', vamos para q7, escrevemos '#' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,{"uid":"q7","id":"q7","label":"q7","x":3966,"y":4073,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[{"from":"q6","to":"q7","read":"","write":"#","move":"L"},0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 7,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '#' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": {"d":[7,"#"]},
      "head": 6,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler '1', vamos para q7, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,{"from":"q7","to":"q7","read":"1","write":"1","move":"L"},10,11,12,13,14,15,16,17,18,19]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 6,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler '#', vamos para q7, escrevemos '#' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,{"from":"q7","to":"q7","read":"#","write":"#","move":"L"},11,12,13,14,15,16,17,18,19,20]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'b', vamos para q7, escrevemos 'b' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,{"from":"q7","to":"q7","read":"b","write":"b","move":"L"},10,11,12,13,14,15,16,17,18,19,20,21]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
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
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler 'A', vamos para q7, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,{"from":"q7","to":"q7","read":"A","write":"A","move":"L"},12,13,14,15,16,17,18,19,20,21,22]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 2,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Nova regra: em q7, ao ler '<', vamos para q8, escrevemos '<' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,{"uid":"q8","id":"q8","label":"q8","x":4202,"y":4080,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,{"from":"q7","to":"q8","read":"<","write":"<","move":"R"}]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 2,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Nova regra: em q8, ao ler 'A', vamos para q8, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,{"from":"q8","to":"q8","read":"A","write":"A","move":"R"},22,23,24]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Nova regra: em q8, ao ler 'b', vamos para q9, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,{"uid":"q9","id":"q9","label":"q9","x":4448,"y":4035,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[{"from":"q8","to":"q9","read":"b","write":"B","move":"R"},0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": {"d":[4,"B"]},
      "head": 5,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler '#', vamos para q9, escrevemos '#' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,{"from":"q9","to":"q9","read":"#","write":"#","move":"R"},20,21,22,23,24,25,26]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 6,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler '1', vamos para q9, escrevemos '1' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,{"from":"q9","to":"q9","read":"1","write":"1","move":"R"},23,24,25,26,27]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 6,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 7,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "#",
        "1",
        "#",
        "□"
      ],
      "head": 8,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler '□', vamos para q10, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,{"uid":"q10","id":"q10","label":"q10","x":4668,"y":4095,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[{"from":"q9","to":"q10","read":"","write":"1","move":"L"},0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 8,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": {"d":[8,"1"]},
      "head": 7,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler '#', vamos para q10, escrevemos '#' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,{"from":"q10","to":"q10","read":"#","write":"#","move":"L"},12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 7,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 6,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler '1', vamos para q10, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,{"from":"q10","to":"q10","read":"1","write":"1","move":"L"},16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 6,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler 'B', vamos para q10, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,{"from":"q10","to":"q10","read":"B","write":"B","move":"L"},10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler 'A', vamos para q10, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,{"from":"q10","to":"q10","read":"A","write":"A","move":"L"},10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 2,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler '<', vamos para q8, escrevemos '<' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,{"from":"q10","to":"q8","read":"<","write":"<","move":"R"},5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 2,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Nova regra: em q8, ao ler 'B', vamos para q8, escrevemos 'B' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,{"from":"q8","to":"q8","read":"B","write":"B","move":"R"},23,24,25,26,27,28,29,30,31,32,33,34]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q8"
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
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Nova regra: em q8, ao ler '#', vamos para q11, escrevemos '#' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,{"uid":"q11","id":"q11","label":"q11","x":4394,"y":4276,"isInitial":false,"isFinal":false}]},
        "transitions": {"base":"prev","items":[0,1,2,3,4,{"from":"q8","to":"q11","read":"#","write":"#","move":"L"},5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 5,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Nova regra: em q11, ao ler 'B', vamos para q11, escrevemos 'B' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,{"from":"q11","to":"q11","read":"B","write":"B","move":"L"},11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 4,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Nova regra: em q11, ao ler 'A', vamos para q11, escrevemos 'A' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,{"from":"q11","to":"q11","read":"A","write":"A","move":"L"},17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 2,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Nova regra: em q11, ao ler '<', vamos para q12, escrevemos '<' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,{"uid":"q12","id":"q12","label":"q12","x":4695,"y":4276,"isInitial":false,"isFinal":true}]},
        "transitions": {"base":"prev","items":[0,{"from":"q11","to":"q12","read":"<","write":"<","move":"R"},1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38]}
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 2,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Chegamos em q12 (estado final). A fita ficou \"AB#1#1\". ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "ab",
      "tape": "=",
      "head": 3,
      "activeNode": "q12",
      "status": "ACCEPTED"
    },
    {
      "prof": {
        "message": "Próxima palavra: \"abab\". Mesma máquina, novo teste.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
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
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
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
      "simulateWord": "abab",
      "tape": "=",
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
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
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
      "simulateWord": "abab",
      "tape": "=",
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
      "simulateWord": "abab",
      "tape": "=",
      "head": 7,
      "activeNode": "q1"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '#' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": {"d":[7,"#"]},
      "head": 6,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 4,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q2.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 2,
      "activeNode": "q2"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": {"d":[3,"A"]},
      "head": 4,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler 'a', vamos para q4, escrevemos 'a' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,{"from":"q4","to":"q4","read":"a","write":"a","move":"R"},30,31,32,33,34,35,36,37,38,39]}
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 7,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 8,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": {"d":[8,"1"]},
      "head": 7,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler 'a', vamos para q5, escrevemos 'a' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,{"from":"q5","to":"q5","read":"a","write":"a","move":"L"},16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]}
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'a' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
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
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'a', escreveu 'A' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": {"d":[5,"A"]},
      "head": 6,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 7,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 8,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Nova regra: em q4, ao ler '1', vamos para q4, escrevemos '1' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,{"from":"q4","to":"q4","read":"1","write":"1","move":"R"},27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]}
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 8,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q4.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "b",
        "A",
        "b",
        "#",
        "1",
        "□"
      ],
      "head": 9,
      "activeNode": "q4"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": {"d":[9,"1"]},
      "head": 8,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Nova regra: em q5, ao ler '1', vamos para q5, escrevemos '1' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,{"from":"q5","to":"q5","read":"1","write":"1","move":"L"},13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42]}
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 8,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 7,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 4,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q5.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 2,
      "activeNode": "q5"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
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
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q3.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
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
      "simulateWord": "abab",
      "tape": "=",
      "head": 7,
      "activeNode": "q3"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 8,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 9,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q6.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "b",
        "A",
        "b",
        "#",
        "1",
        "1",
        "□"
      ],
      "head": 10,
      "activeNode": "q6"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '#' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": {"d":[10,"#"]},
      "head": 9,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 8,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 7,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
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
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 4,
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
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q7.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 2,
      "activeNode": "q7"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 4,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": {"d":[4,"B"]},
      "head": 5,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler 'A', vamos para q9, escrevemos 'A' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,{"from":"q9","to":"q9","read":"A","write":"A","move":"R"},39,40,41,42,43]}
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Nova regra: em q9, ao ler 'b', vamos para q9, escrevemos 'b' e movemos à DIREITA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,{"from":"q9","to":"q9","read":"b","write":"b","move":"R"},31,32,33,34,35,36,37,38,39,40,41,42,43,44]}
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 7,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 8,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 9,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 10,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": [
        "□",
        "□",
        "<",
        "A",
        "B",
        "A",
        "b",
        "#",
        "1",
        "1",
        "#",
        "□"
      ],
      "head": 11,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": {"d":[11,"1"]},
      "head": 10,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 9,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 8,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 7,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Nova regra: em q10, ao ler 'b', vamos para q10, escrevemos 'b' e movemos à ESQUERDA.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": {"base":"prev","items":[0,1,2,3,4,5,6,7,8,9,10,11,12,{"from":"q10","to":"q10","read":"b","write":"b","move":"L"},13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]}
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'b' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 4,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 2,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 4,
      "activeNode": "q8"
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
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'b', escreveu 'B' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": {"d":[6,"B"]},
      "head": 7,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 8,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 9,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 10,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 11,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q9.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
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
        "#",
        "1",
        "1",
        "#",
        "1",
        "□"
      ],
      "head": 12,
      "activeNode": "q9"
    },
    {
      "prof": {
        "message": "Executou: leu '□', escreveu '1' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": {"d":[12,"1"]},
      "head": 11,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 10,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 9,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 8,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '1', escreveu '1' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 7,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 4,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q10.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 2,
      "activeNode": "q10"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 4,
      "activeNode": "q8"
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
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q8.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
      "activeNode": "q8"
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
      "simulateWord": "abab",
      "tape": "=",
      "head": 7,
      "activeNode": "q8"
    },
    {
      "prof": {
        "message": "Executou: leu '#', escreveu '#' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 6,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 5,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 4,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'B', escreveu 'B' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu 'A', escreveu 'A' e moveu. Agora em q11.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 2,
      "activeNode": "q11"
    },
    {
      "prof": {
        "message": "Executou: leu '<', escreveu '<' e moveu. Agora em q12.",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q12"
    },
    {
      "prof": {
        "message": "Chegamos em q12 (estado final) e não há mais nada a ler. Palavra ACEITA! ✓",
        "mood": "feliz"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "simulateWord": "abab",
      "tape": "=",
      "head": 3,
      "activeNode": "q12",
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
        "message": "Q é o conjunto de ESTADOS: {q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "states": "{q0,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12}"
      }
    },
    {
      "prof": {
        "message": "Σ é o alfabeto de ENTRADA: {a,b}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "sigma": "{a,b}"
      }
    },
    {
      "prof": {
        "message": "Γ é o alfabeto da FITA: {#,1,<,A,B,a,b,□}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "gamma": "{#,1,<,A,B,a,b,□}"
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
        "message": "F é o conjunto de estados de ACEITAÇÃO: {q12}",
        "mood": "explicando"
      },
      "stateUpdate": {
        "nodes": "=",
        "transitions": "="
      },
      "phase": "FORMAL",
      "formalFill": {
        "final": "{q12}"
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
            "from": "q9",
            "to": "q10",
            "read": "",
            "write": "1",
            "move": "L"
          },
          {
            "from": "q11",
            "to": "q12",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q9",
            "read": "b",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q7",
            "read": "",
            "write": "#",
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
            "from": "q3",
            "to": "q4",
            "read": "a",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q11",
            "read": "#",
            "write": "#",
            "move": "L"
          },
          {
            "from": "q10",
            "to": "q8",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q5",
            "read": "",
            "write": "1",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q3",
            "read": "<",
            "write": "<",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "a",
            "write": "a",
            "move": "L"
          },
          {
            "from": "q2",
            "to": "q2",
            "read": "b",
            "write": "b",
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
            "from": "q10",
            "to": "q10",
            "read": "b",
            "write": "b",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "q5",
            "to": "q5",
            "read": "#",
            "write": "#",
            "move": "L"
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
            "from": "q5",
            "to": "q5",
            "read": "b",
            "write": "b",
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
            "from": "q11",
            "to": "q11",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "#",
            "write": "#",
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
            "from": "q7",
            "to": "q7",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "A",
            "write": "A",
            "move": "L"
          },
          {
            "from": "q10",
            "to": "q10",
            "read": "1",
            "write": "1",
            "move": "L"
          },
          {
            "from": "q7",
            "to": "q7",
            "read": "#",
            "write": "#",
            "move": "L"
          },
          {
            "from": "q1",
            "to": "q2",
            "read": "",
            "write": "#",
            "move": "L"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q1",
            "to": "q1",
            "read": "a",
            "write": "a",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q8",
            "read": "B",
            "write": "B",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "b",
            "write": "b",
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
            "read": "b",
            "write": "b",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "a",
            "write": "a",
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
            "from": "q9",
            "to": "q9",
            "read": "#",
            "write": "#",
            "move": "R"
          },
          {
            "from": "q4",
            "to": "q4",
            "read": "#",
            "write": "#",
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
            "from": "q9",
            "to": "q9",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q9",
            "to": "q9",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q6",
            "to": "q6",
            "read": "1",
            "write": "1",
            "move": "R"
          },
          {
            "from": "q8",
            "to": "q8",
            "read": "A",
            "write": "A",
            "move": "R"
          },
          {
            "from": "q3",
            "to": "q6",
            "read": "#",
            "write": "#",
            "move": "R"
          },
          {
            "from": "q2",
            "to": "q3",
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
          }
        ]
      }
    }
  ],
  },
};

export default MT_L9;
