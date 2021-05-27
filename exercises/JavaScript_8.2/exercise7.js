const books = require('./books.js');
const assert = require('assert');

// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const expectedResult = false;

function authorUnique() {
  const birthYears = [];
  let bool = true;
  books.forEach((book) => {
    const birthYear = book.author.birthYear;
    if (birthYears.some((year) => year === birthYear)) bool = false;
    birthYears.push(birthYear);
  });
  return bool;
}

assert.strictEqual(authorUnique(), expectedResult);
