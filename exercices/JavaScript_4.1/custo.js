/*
Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto
e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo
do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada
seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o
imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto
 */

const custo = 5
const venda = 10
const custoTotal = custo + (custo * 0.2)
const lucro = venda - custoTotal
console.log(lucro * 1000)
