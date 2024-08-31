const {gets, print} = require('../utils/utils');
// Desafios Avançados - Formação Typescript
// 1 / 3 - Dragão Berrador World

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

var s = gets().split(" ");

//TODO: imprima uma única linha com o número visitantes que podem passear na montanha-russa

let n = parseInt(s[0]);
let min = parseInt(s[1]);
let max = parseInt(s[2]);

let altura, conta = 0;
for (let x = 0; x < n; x++) {
    altura = parseInt(gets());
    if (altura >= min && altura <= max)
        conta++;
}
print(conta);