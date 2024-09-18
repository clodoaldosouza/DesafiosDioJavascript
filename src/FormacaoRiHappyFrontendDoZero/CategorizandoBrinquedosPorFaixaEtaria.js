const {gets, print} = require('../utils/utils');
// Explorando Fundamentos de Lógica com JavaScript
// 1 / 2 - Categorizando Brinquedos por Faixa Etária

// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print" : imprime um texto de saída (output), pulando linha.

// Recebe a faixa etária recomendada
const idade = parseInt(gets());

let categoria;

// TODO: Verifique a faixa etária e define a categoria correspondente
if (idade < 10) {
    categoria = "Infantil";
} else if (idade >= 10 && idade < 15) {
    categoria = "Pre-Adolescente";
} else {
    categoria = "Adolescente";
}

// Exibe o resultado no console
print(categoria);