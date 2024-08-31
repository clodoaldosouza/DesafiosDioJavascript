const {gets, print} = require('../utils/utils');
// Desafios Intermediário II - Formação Typescript
// 3 / 3 - Quadrado e ao Cubo

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

//let linhas = parseInt(gets());

//TODO: Complete os espaços em branco com uma solução possível para o problema.

let limit = parseInt(gets());

for (let i = 1; i <= limit; i++) {
    let X = (i * i);
    let Y = (i * i * i);

    print(`${i} ${X} ${Y}`);
}
