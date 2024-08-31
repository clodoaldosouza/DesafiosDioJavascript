const {gets, print} = require('../utils/utils');
// Desafios de Códigos II - Formação Node.js Developer
// 3 / 3 - Substituição de Jogadores

const jogadores = [];

//TODO: Solicite a Entrada dos Nomes dos Jogadores
for (let i = 0; i < 5; i++) {
    const nomeJogador = gets();
    jogadores.push(nomeJogador);
}
const indiceSubstituir = gets();
const novoJogador = gets();

jogadores[indiceSubstituir - 1] = novoJogador;

//TODO: Solicite a Saída dos Nomes dos Jogadores:
for (let i = 0; i < jogadores.length; i++) {
    print(`${i + 1}. ${jogadores[i]}`);
}
