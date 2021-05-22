// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando
// como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');

const greaterThanTen = (array) => {
  const arrayResult = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      arrayResult.push(array[index]);
    }
  }
  return arrayResult;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTen, 'function');
assert.strictEqual(typeof greaterThanTen(parameter), 'object');
assert.strictEqual(Array.isArray(greaterThanTen(parameter)), true);
assert.deepStrictEqual(greaterThanTen(parameter), result);
