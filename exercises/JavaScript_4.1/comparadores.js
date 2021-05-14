/*
Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com 
os valores que serão comparados.
*/

const a = 60
const b = 20

if (a > b) {
  console.log(a)
} else {
  console.log(b)
}

/*
Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com 
os valores que serão comparados.
*/

const c = 40

if (a > b && a > c) {
  console.log(a)
} else if ( b > a && b > c) {
  console.log(b)
} else {
  console.log(c)
}

/*
Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for 
positivo, "negative" se for negativo e "zero" caso contrário. 
*/

if (a > 0) {
  console.log('positive')
} else {
  console.log('negative')
}

/*
Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 
*/

if (a < 0 || b < 0 || c < 0) {
  console.log('erro, angulo invalido')
} else if (a + b + c === 180) {
  console.log(true)
} else {
  console.log(false)
}
