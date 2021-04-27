// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer
// seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

const n = 5
let str = ''

for (let i = 0; i < n; i++) {
  str = ''
  for (let j = 0; j < n; j++) {
    str += '*'
  }
  console.log(str)
}
console.log('-----------------------------------------')
// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5
// asteriscos de base. Por exemplo:

str = ''
for (let i = 0; i < n; i++) {
  str += '*'
  console.log(str)
}
console.log('-----------------------------------------')

// 3- Agora inverta o lado do triângulo. Por exemplo

// const n = 5
let cont = n - 1

for (let i = 0; i < n; i++) {
  str = ''
  for (let j = 0; j < n; j++) {
    if (j < cont) {
      str += ' '
    } else {
      str += '*'
    }
  }
  cont--
  console.log(str)
}
console.log('-----------------------------------------')

// 4- Depois, faça uma pirâmide com n asteriscos de base:

const init = Math.floor(n / 2)
let count = 0

for (let i = 0; i < n; i++) {
  str = ''
  if (i % 2 === 0) {
    for (let j = 0; j < n; j++) {
      if (j === init || (j < init + count && j > init - count)) {
        str += '*'
      } else {
        str += ' '
      }
    }
    console.log(str)
  }
  count++
}
