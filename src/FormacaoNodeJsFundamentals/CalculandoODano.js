const {gets, print} = require('../utils/utils');
// Desafios de Códigos II - Formação Node.js Developer
// 1 / 3 - Calculando o Dano

function calcularDano(ataque, defesa) {
    //TODO: Implemente a função calcularDano
    if (ataque >= defesa) {
        return ataque - defesa;
    }
    return 0;
}

const ataque = parseFloat(gets());
const defesa = parseFloat(gets());

const danoCausado = calcularDano(ataque, defesa);
print("O dano causado pelo ataque foi: " + danoCausado);
