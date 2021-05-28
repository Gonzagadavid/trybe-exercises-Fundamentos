const assert = require('assert');
const books = require('./books.js');

// Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult = 'George R. R. MartinJ. R. R. TolkienIsaac AsimovFrank HerbertStephen KingH. P. Lovecraft';

const averageAge = () => books.reduce((acc, crr) => acc + crr.author.name, '');

assert.strictEqual(averageAge(), expectedResult);
