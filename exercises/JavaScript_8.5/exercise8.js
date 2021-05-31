// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params .
const assert = require('assert');

const greet = (name, salutation = 'Hi') => `${salutation} ${name}`;

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');
