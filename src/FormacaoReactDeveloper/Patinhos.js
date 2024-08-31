const {gets, print} = require('../utils/utils');
// Desafio de Código - Formação React Developer II
// 2 / 3 - Patinhos

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

let n = parseInt(gets());
while (n !== -1) {

// TODO: Crie as condições necessárias para resolver o desáfio
    print(n < 1 ? 0 : (n - 1));
    n = parseInt(gets());
}