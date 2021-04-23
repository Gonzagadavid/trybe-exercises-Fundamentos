/*
Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for
par. Caso contrário, ele retorna false .
Bonus: use somente um if .
 */

const a = 3
const b = 4
const c = 7

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  console.log(true)
} else {
  console.log(false)
}
