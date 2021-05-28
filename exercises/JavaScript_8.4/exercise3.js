const assert = require('assert')
const books = require('./books.js')
// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

const averageAge = () => books.reduce((acc, crr) => acc + (crr.releaseYear - crr.author.birthYear),0)/books.length

assert.strictEqual(averageAge(), expectedResult);