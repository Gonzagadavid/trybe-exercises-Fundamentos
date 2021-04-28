// Parte II - Funções
// Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas
// deixam o código mais bem escrito.
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
function verificaPalindrome (string) {
  let stringInvertida = ''
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i]
  }
  return string === stringInvertida
}
console.log(verificaPalindrome('arara'))
// Retorno esperado: true
console.log(verificaPalindrome('desenvolvimento'))
// Retorno esperado: false

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// ArrayDeTeste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
const arrayDeTeste = [2, 3, 6, 7, 10, 1]

function indiceDoMaior (array) {
  let maior = 0
  for (let i = 1; i < array.length; i++) {
    if (array[maior] < array[i]) maior = i
  }
  return maior
}
console.log(indiceDoMaior(arrayDeTeste))

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
const arrayDeTeste2 = [2, 4, 6, 7, 10, 0, -3]

function indiceDoMenor (array) {
  let menor = 0
  for (let i = 1; i < array.length; i++) {
    if (array[menor] > array[i]) menor = i
  }
  return menor
}
console.log(indiceDoMenor(arrayDeTeste2))

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
const arrayDeTeste3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function maiorNome (array) {
  let maior = array[0]
  for (let i = 1; i < array.length; i++) {
    if (maior.length < array[i].length) maior = array[i]
  }
  return maior
}
console.log(maiorNome(arrayDeTeste3))

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
const arrayDeTeste4 = [2, 3, 2, 5, 8, 2, 3]

function maisRepetido (array) {
  const arrayInedito = []
  let memory = 0
  let repetido = ''

  for (let i = 0; i < array.length; i++) {
    let cont = 0
    for (let j = 0; j < arrayInedito.length; j++) {
      if (array[i] === arrayInedito[j]) cont++
    }
    if (cont === 0) arrayInedito.push(array[i])
  }

  for (let i = 0; i < arrayInedito.length; i++) {
    let cont = 0
    for (let j = 0; j < array.length; j++) {
      if (arrayInedito[i] === array[j]) cont++
    }
    if (cont > memory) {
      repetido = arrayInedito[i]
      memory = cont
    }
  }

  return repetido
}
console.log(maisRepetido(arrayDeTeste4))

// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
const n = 5

function somaAte (number) {
  let total = 0
  for (let i = 1; i <= number; i++) {
    total += i
  }
  return total
}
console.log(somaAte(n))

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o
// final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
function verificaFimPalavra (word, ending) {
  if (word < ending) return false
  const end = word.length - ending.length
  let checkString = ''

  for (let i = word.length - 1; i >= end; i--) {
    checkString = word[i] + checkString
  }
  return checkString === ending
}

console.log(verificaFimPalavra('trybe', 'be'))
// Retorno esperado: true
console.log(verificaFimPalavra('joaofernando', 'fernan'))
// Retorno esperado: false
