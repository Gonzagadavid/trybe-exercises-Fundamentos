/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas
 quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas 
(lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) 
*/

const peça = 'Rainha'

switch(peça.toLowerCase()){
  case 'rei':
    console.log('horizontal, vertical e diagonal')
    break
  case 'rainha':
    console.log('horizontal, vertical e diagonal mas não pode pular outras peças')
    break
  case 'bispo':
    console.log('diagonal')
    break
  case 'cavalo':
    console.log('uas casas em sentido horizontal e mais uma na vertical ou vice-versa')
    break
  case 'torre':
    console.log('horizontal e vertical')
    break
  case 'rei':
    console.log('uma casa para frente e somente captura outras peças na diagonal')
    break
}