const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função
// console.log() ;
for (const number of numbers) console.log('valor: ' + number)

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
console.log('some = ' + sum)

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
const media = sum / numbers.length
console.log('media = ' + media)

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem:
// "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor que 20')
}
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = 0
for (let i = 0; i < numbers.length; i++) {
  if (maior < numbers[i]) maior = numbers[i]
}
console.log('maior valor = ' + maior)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum,
//  imprima a mensagem: "nenhum valor ímpar encontrado";
let cont = 0
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) cont++
}
if (cont === 0) {
  console.log('nenhum valor ímpar encontrado')
} else {
  console.log(cont + 'valor(s) ímpar(es)')
}

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = maior
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < menor) menor = numbers[i]
}
console.log('menor valor = ' + menor)

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
const array = []
for (let i = 1; i <= 25; i++) {
  array.push(i)
}
console.log(array)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos
// elementos por 2.
for (let i = 0; i < array.length; i++) {
  console.log(array[i] + ' / 2 = ' + array[i] / 2)
}
