const books = require('./books.js');
const assert = require('assert');

// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const expectedResult = false;

const everyoneWasBornOnSecXX = () => books.every((book) => Math.floor(book.author.birthYear / 100) === 19);

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);
