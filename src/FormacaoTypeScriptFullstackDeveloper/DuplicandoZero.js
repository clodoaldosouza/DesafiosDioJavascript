const {gets, print} = require('../utils/utils');
// Desafios Avançados II - Formação Typescript
// 1 / 3 - Duplicando Zero

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let N = parseInt(gets());

let arr = new Array(N);

for (let i = 0; i < N; i++) {
    arr[i] = parseInt(gets());
}

// TODO: Retorne uma saída com os zeros devidamente duplicados
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        arr.splice(i + 1, 0, 0);
        i++;
    }
}
if (arr.length !== N) {
    arr.length = N;
}
print(`${arr}`);
