const assert = require('assert');
const assertStrict = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// A função sum(a, b) retorna a soma do parâmetro a com o b
// 1-Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9, 'a soma de 4 + 5 é igual a 9');

// 2-Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0, 'a soma de 0 + 0 é igual a 0');

// 3-Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// assert.strictEqual(sum(4, '5'), 9);

// 4-Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => {
  sum(4, '5');
}, '/^Error: parameters must be numbers$/');
