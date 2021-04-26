// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será
// sempre ímpar:

const n = 7
const init = Math.floor(n / 2)
let count = 0

for (let i = 0; i < n; i++) {
  let str = ''
  if (i % 2 === 0) {
    for (let j = 0; j < n; j++) {
      if ((j === init && i === 0) || (j === init + count || j === init - count) || i === n - 1) {
        str += '*'
      } else {
        str += ' '
      }
    }
    console.log(str)
    count += 1
  }
}

// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

const num = 15

let isPrime = true
if (num % 2 === 0) isPrime = false
if (num % 3 === 0) isPrime = false
if (num % 5 === 0) isPrime = false

console.log(isPrime)
