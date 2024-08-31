const {gets, print} = require('../utils/utils');
// Desafios de Códigos I - Formação Node.js Developer
// 1 / 3 - Gerenciamento de Tarefas

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// TODO: Crie as variáveis titulo, descricao e dataVencimento para guardar as informações das tarefas:
let titulo, descricao, dataVencimento;

// Obtém o titulo e a descricao a partir da entrada do console
titulo = gets();
descricao = gets();
dataVencimento = gets();
// TODO: Crie uma estrutura condicional 'if/else' para verificar se a descrição da tarefa excede 50 caracteres.

if (descricao.length >= 50) {
    console.log("Descricao ultrapassa limite de caracteres.");
} else {
    // TODO: Imprima a descricao e a data de vencimento como nos exemplos da tabela:
    console.log(`${descricao} ate ${dataVencimento}`);
}
