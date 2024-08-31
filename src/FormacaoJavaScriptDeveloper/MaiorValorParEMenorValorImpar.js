const {gets, print} = require('../utils/utils');
// Desafios de Código - Formação JavaScript Developer
// 2 / 3 - Maior Valor Par e Menor Valor Ímpar

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

const N = gets();
let maiorNumeroPar = Number.MIN_VALUE;
let menorNumeroImpar = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
    const numero = parseInt(gets());

    if (numero % 2 === 0) {
        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    }
    // TODO: Criar a condição e regras para identificar também o "menorNumeroImpar".
    else {
        if (numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}

// TODO: Imprima as saídas conforme o enunciado deste desafio.
print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número impar: ${menorNumeroImpar}`);