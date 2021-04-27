// Usando o objeto abaixo, utilize For/in e imprima um console log 'Olá xxxxx' para cada nome no objeto.
// Copiar
const names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
}

for (const person in names) {
  console.log(names[person])
}

// Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e seu valor 'modelo:
//  A3 Sedan, marca: Audi, ano:2020' .
// Copiar
const carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

for (const key in carro) {
  console.log(`${key}: ${carro[key]}`)
}
