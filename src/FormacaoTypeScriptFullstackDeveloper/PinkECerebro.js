const {gets, print} = require('../utils/utils');
// Desafios Intermediário II - Formação Typescript
// 2 / 3 - Pink e Cérebro

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: Retorne a quantidade de números múltiplos de 2, 3, 4 e 5 presentes na lista
let n = gets().split(" ");
let numeros = gets().split(" ");
let multiplos = 0;
for (let i = 2; i < 6; i++) {
    numeros.forEach(numero => {
        if (numero % i === 0) {
            multiplos++;
        }
    })
    print(multiplos + " Multiplo(s) de " + i);
    multiplos = 0;
}