const bruto = 3000
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

const liquido = deduzido - ir

console.log('inss:', inss)
console.log('deduzido:', deduzido)
console.log('ir:', ir)
console.log('liquido:', liquido)
