const assert = require('assert')
const books = require('./books.js')
// Encontre o livro com o maior nome.
const expectedResult =   {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
}

const longestNamedBook  = () => books.reduce((acc, crr) => crr.name.length > acc.name.length ? crr : acc)

assert.deepStrictEqual(longestNamedBook(), expectedResult);