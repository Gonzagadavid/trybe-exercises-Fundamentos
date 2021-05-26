import books from './books.js';
// const assert = require('assert');
import assert from 'assert';

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find .

const authorBornIn1947 = () => books.find((book) => book.author.birthYear === 1947).author.name;

assert.strictEqual(authorBornIn1947(), 'Stephen King');
