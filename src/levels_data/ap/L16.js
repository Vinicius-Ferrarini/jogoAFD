export default { level: 'impossible', impossible: true,
         language: '{ aⁿbⁿcⁿ / n > 0 }',
         alphabet: ['a', 'b', 'c'], stackAlphabet: ['A', 'Z'],
         note: 'aⁿbⁿcⁿ NÃO é livre de contexto — nenhum Autômato com Pilha a reconhece. A pilha só "lembra" uma contagem de cada vez: dá para casar aⁿ com bⁿ, mas aí a pilha já esvaziou e não há como conferir os cⁿ. Isso exige uma Máquina de Turing (MT), que ainda não implementamos.' };
