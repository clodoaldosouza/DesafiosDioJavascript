const {gets, print} = require('../utils/utils');
// Desafios Avançados II - Formação Typescript
// 2 / 3 - Resto 2

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let lines = gets().split('\n');

let N = parseInt(lines.shift());
for (let i = 1; i < 10000; i++) {
//TODO: Imprima todos valores que quando divididos por N dão resto = 2, um por linha.
    if (i % N === 2) print(i);
}
