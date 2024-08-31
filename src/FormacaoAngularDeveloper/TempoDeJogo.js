const {gets, print} = require('../utils/utils');
// Desafios Finais JavaScript - Formação Angular
// 2 / 3 - Tempo de Jogo

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

var line = gets().split(" ");

var hInicial = parseInt(line[0]);
var hFinal = parseInt(line[1]);

if (hInicial < hFinal) {
    print('O JOGO DUROU ' + (hFinal - hInicial) + ' HORA(S)');
} else if (hInicial > hFinal) {
    print('O JOGO DUROU ' + (24 - (hInicial - hFinal)) + ' HORA(S)');
} else {
    print('O JOGO DUROU 24 HORA(S)');
}
