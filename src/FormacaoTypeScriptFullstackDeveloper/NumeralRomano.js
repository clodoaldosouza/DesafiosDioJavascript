const {gets, print} = require('../utils/utils');
// Desafios Avançados II - Formação Typescript
// 3 / 3 - Numeral Romano

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// TODO: crie um conversor que altere o Numeral Romano para um Inteiro e imprima esse inteiro

const s = gets().toUpperCase();

const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

let result = 0;

for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]];

    if (next && current < next) {
        result -= current;
    } else {
        result += current;
    }
}
print(result);
