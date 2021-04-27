// Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles
// sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser
// removidas e transformadas em parâmetros das funções.

const a = 60
const b = 20
const c = 40

function adicao (a, b) {
  return a + b
}

console.log(adicao(a, b))

function subtracao (a, b) {
  return a - b
}
console.log(subtracao(a, b))

function multiplicacao (a, b) {
  return a * b
}
console.log(multiplicacao(a, b))

function divisao (a, b) {
  return a / b
}
console.log(divisao(a, b))

function modulo (a, b) {
  return a % b
}
console.log(modulo(a, b))

function maior (a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}
console.log(maior(a, b))

function maiorDeTres (a, b, c) {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  } else {
    return c
  }
}
console.log(maiorDeTres(a, b, c))

function positiveOrNegative (a) {
  if (a > 0) {
    return 'positive'
  } else {
    return 'negative'
  }
}
console.log(positiveOrNegative(a))

function isTriangle (a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    return 'erro, angulo invalido'
  } else if (a + b + c === 180) {
    return true
  } else {
    return false
  }
}
console.log(isTriangle(a, b, c))

const custo = 5
const venda = 10

function custoTotal (custo) {
  return custo + (custo * 0.2)
}
function lucro (venda, custoTotal) {
  return venda - custoTotal
}
console.log(lucro(venda, custoTotal(custo)) * 1000)

const nota = 55

function note (percentage) {
  if (nota > 100 || nota < 0) {
    return 'erro'
  } else if (nota < 50) {
    return 'F'
  } else if (nota < 60) {
    return 'E'
  } else if (nota < 70) {
    return 'D'
  } else if (nota < 80) {
    return 'C'
  } else if (nota < 90) {
    return 'B'
  } else {
    return 'A'
  }
}
console.log(note(nota))

function isEven (a, b, c) {
  if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(isEven(a, b, c))

const bruto = 3000

function calcLiquido (bruto) {
  let inss = null
  let ir = null

  if (bruto < 1556.94) {
    inss = bruto * 0.08
  } else if (bruto < 2594.92) {
    inss = (bruto * 0.09)
  } else if (bruto < 5189.82) {
    inss = (bruto * 0.11)
  } else {
    inss = bruto - 570.88
  }

  const deduzido = bruto - inss

  if (deduzido < 1903.98) {
    ir = 0
  } else if (deduzido < 2826.65) {
    ir = (deduzido * 0.075) - 142.8
  } else if (deduzido < 3751.05) {
    ir = (deduzido * 0.15) - 354.80
  } else if (deduzido < 4664.68) {
    ir = (deduzido * 0.22) - 636.13
  } else {
    ir = (deduzido * 0.27) - 869.36
  }
  return deduzido - ir
}
console.log(calcLiquido(bruto))

const peça = 'Rainha'

function moves (peça) {
  switch (peça.toLowerCase()) {
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
  }
}

moves(peça)
