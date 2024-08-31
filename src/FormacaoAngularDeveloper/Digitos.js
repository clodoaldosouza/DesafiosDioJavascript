const {gets, print} = require('../utils/utils');
// Desafios Finais JavaScript - Formação Angular
// 3 / 3 - Dígitos

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let C = parseInt(gets())

for (let i = 0; i < C; i++) {
    var input = gets().split(" ");
    let N = parseInt(input[0]);
    let M = parseInt(input[1]);
    let digitos = Math.floor(Math.log10(Math.pow(N, M))) + 1;
    print(digitos);
}