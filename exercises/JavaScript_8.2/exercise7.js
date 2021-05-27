import books from './books.js';
import assert from 'assert';

// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const expectedResult = false;

function authorUnique() {
  const birthYears = [];
  books.forEach((book) => {
    const birthYear = book.author.birthYear;
    if (birthYears.some((year) => year === birthYear)) return true;
    birthYears.push(birthYear);
  });
  return false;
}

assert.strictEqual(authorUnique(), expectedResult);
