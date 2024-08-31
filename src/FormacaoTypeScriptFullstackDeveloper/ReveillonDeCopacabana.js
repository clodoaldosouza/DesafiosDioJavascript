const {gets, print} = require('../utils/utils');
// Desafios Intermediário II - Formação Typescript
// 1 / 3 - Réveillon de Copacabana

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let T = parseInt(gets());
let N;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

while (T !== 0) {
    for (let i = 1; i <= T; i++) {
        N = parseInt(gets());
        if (N % 2 === 0) {
            print(N * 2 - 2);
        } else {
            print(N * 2 - 1);
        }
    }
    T = parseInt(gets());
}

