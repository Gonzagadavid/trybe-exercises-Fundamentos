const books = require('./books.js');
const assert = require('assert');

// Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
const expectedResult = true;

const someBookWasReleaseOnThe80s = () => books.some((book) => book.releaseYear >= 1980 && book.releaseYear < 1990);

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);
