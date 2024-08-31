const {gets, print} = require('../utils/utils');
// Desafios de Códigos I - Formação Node.js Developer
// 3 / 3 - Lista de itens

const itens = [];

//TODO: Solicite os itens ao usuário
for (let i = 0; i < 3; i++) {
    let nomeItem = gets(); // Solicita o nome do item
    itens.push(nomeItem); // Adiciona o item à lista
}
// Exibe a lista de itens
print("Lista de itens:");
for (let i = 0; i < itens.length; i++) {
    print(`- ${itens[i]}`);
}
