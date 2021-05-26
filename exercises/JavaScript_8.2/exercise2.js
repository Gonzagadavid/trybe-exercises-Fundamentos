import books from './books.js';
import assert from 'assert';

// Retorne o nome do livro de menor nome.
// Dica: use a função forEach .

function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  books.forEach((book) => {
    nameBook = nameBook.length > book.name.length ? book.name : nameBook;
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');
