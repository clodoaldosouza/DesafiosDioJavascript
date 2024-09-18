Explorando Fundamentos de Lógica com JavaScript
-----------------------------------------------
2 / 2 - Analisando o Estoque de Brinquedos
------------------------------------------

Descrição
---------

Neste desafio, você precisa monitorar o estoque de brinquedos de forma eficiente para garantir que sempre haja produtos
disponíveis nas lojas. Dessa forma, você vai receber como entrada uma lista de brinquedos e a quantidade disponível em
estoque. Seu objetivo é identificar quais brinquedos estão com estoque baixo (menos de 5 unidades) e quais estão com
estoque adequado.

**Passo a Passo:**

1. **Entrada de Dados:** O usuário fornecerá uma lista de brinquedos e suas respectivas quantidades, no formato
   `Nome do Brinquedo:Quantidade`. As entradas serão separadas por vírgula e espaço. Por exemplo:
   `"Carrinho:10, Boneca:3, Bloco de Montar:15"`.

2. **Processamento dos Dados:** Verifique o estoque de cada brinquedo utilizando a estrutura de repetição `For`. Se a
   quantidade `for menor que 5`, o brinquedo está com "`Baixo`"; caso contrário, está com "`Adequado`".

3. **Formatação da Saída:** Para cada brinquedo, retorne **seu nome** seguido por sua situação ("`Baixo`" ou "
   `Adequado`").

Entrada
-------

Uma lista de brinquedos e suas quantidades no formato `Nome:Quantidade`, separados por vírgula.

Saída
-----

O nome do brinquedo e sua situação de estoque, separados por vírgula.

Exemplos
--------

A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de
testar seu programa com esses exemplos e com outros casos possíveis.

| **Entrada**                                            | **Saída**                                                                 |
|:-------------------------------------------------------|:--------------------------------------------------------------------------|
| Funko Pop:10,<br>Action Figure:3,<br>Lego Star Wars:15 | Funko Pop: Adequado,<br>Action Figure: Baixo,<br>Lego Star Wars: Adequado |
| Dungeons and Dragons Dice:4,<br>Xbox Controller:8      | Dungeons and Dragons Dice: Baixo,<br>Xbox Controller: Adequado            |
| Pipa:1,<br>Boneca:12,<br>Funko:3                       | Pipa: Baixo,<br>Boneca: Adequado,<br>Funko: Baixo                         |
