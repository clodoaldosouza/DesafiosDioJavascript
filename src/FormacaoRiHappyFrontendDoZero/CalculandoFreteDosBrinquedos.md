Técnicas de Programação com Funções e Classes
---------------------------------------------
2 / 2 - Calculando Frete dos Brinquedos
---------------------------------------

Descrição
---------

Neste desafio, você precisará calcular o frete para as compras feitas em um e-commerce de loja de Brinquedos. Cada
compra tem um custo fixo de frete e um custo adicional por produto. Dessa forma, sua tarefa é calcular o valor total do
frete com base na lista de produtos comprados, aplicando a taxa fixa e a taxa variável por produto. Para isso, você deve
usar uma classe que gerencie a taxa fixa, a taxa por produto e calcule o frete total com base na quantidade total de
produtos.

**Passo a Passo:**

* **Entrada de Dados:** O usuário fornecerá uma lista de produtos no formato `"Nome: Quantidade"`, separados por vírgula
  e espaço. Além disso, a taxa fixa de frete e a taxa por produto serão fornecidas como dois números. Exemplo:
  `"Carrinho:2, Boneca:3"` com taxas de frete 5.00 e 2.00, respectivamente.

* **Processamento dos Dados:** Utilize uma classe para calcular o frete total. A classe deve armazenar a taxa fixa e a
  taxa por produto, e deve fornecer um método para calcular o valor total do frete com base na quantidade de produtos. A
  fórmula para o cálculo do frete é:

  `Frete Total = Taxa Fixa + (Taxa por Produto x Quantidade de Produtos)`

* **Formatação da Saída:** Retorne o valor total do frete com duas casas decimais.

Entrada
-------

Uma lista de produtos e suas quantidades, além das taxas de frete.

**Processo:**

* **Quantidade Total de Produtos:**

* Carrinho: 2

* Boneca: 3

* Total = 2 + 3 = 5


* **Cálculo do Frete Total:**

* Frete Total = 5.00 (taxa fixa) + (2.00 \* 5) = 5.00 + 10.00 = 15.00

Saída
-----

O valor total do frete.

Exemplos
--------

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de
testar seu programa com esses exemplos e com outros casos possíveis.

| **Entrada**                                          | **Saída** |
|:-----------------------------------------------------|:----------|
| Funko Pop:3, Action Figure:2, LEGO:1<br>6.00<br>3.00 | 24.00     |
| Board Game:1, Miniatura:4<br>8.50<br>2.50            | 21.00     |
| Board Game:2, LEGO:2<br>12.00<br>6.00                | 36.00     |
