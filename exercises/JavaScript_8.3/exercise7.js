const assert = require('assert');
const books = require('./books.js');

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.
const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => books.filter(book => /^(\w.\s){3}\w+/g.test(book.author.name))[0].name

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);