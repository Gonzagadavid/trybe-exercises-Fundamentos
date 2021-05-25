// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5
// recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkDraw = (num1, num2) => (num1 === num2 ? 'Parabéns você ganhou' : 'Tente novamente');
const numberDraw = (number, callback) => callback(number, Math.round(Math.random() * 5));

console.log(numberDraw(3, checkDraw));
