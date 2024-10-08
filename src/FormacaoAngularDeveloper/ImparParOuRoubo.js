const {gets, print} = require('../utils/utils');
// Desafios Finais JavaScript - Formação Angular
// 1 / 3 - Ímpar, Par ou Roubo

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções

let entrada = gets().split(" ");
let p, j1, j2, r, a;

p = parseInt(entrada[0]);
j1 = parseInt(entrada[1]);
j2 = parseInt(entrada[2]);
r = parseInt(entrada[3]);
a = parseInt(entrada[4]);

if (r === 1 && a === 0) print("Jogador 1 ganha!");
else if (r === 0 && a === 1) print("Jogador 1 ganha!");
else if (r === 1 && a === 1) print("Jogador 2 ganha!");
else if (p === 0 && (j1 + j2) % 2 !== 0) print("Jogador 2 ganha!");
else if (p === 1 && (j1 + j2) % 2 === 0) print("Jogador 1 ganha!");
else print("Jogador 2 ganha!");
