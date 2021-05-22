// Finalize a implementação da função getChange(payable, paid) .
// payable é o valor a ser pago, ou o valor total
// paid é o valor que a pessoa pagou

const calcChanges = (coins, change, remaining) => {
  let value = remaining;
  for (let index = 0; index < coins.length; index += 1) {
    if (coins[index] <= value) {
      change.push(coins[index]);
      value -= coins[index];
      index = -1;
    }
  }
};

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;

  // escreva seu código aqui...
  if (paid < payable) throw Error('paid value is not enough');
  if (remaining === 0) return change;
  calcChanges(coins, change, remaining);
  return change;
}

// Testes unitários
// os testes unitários já estão prontos, e sua implementação deve passar por todos eles.
const assert = require('assert');
const { throws } = require('assert/strict');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => {
  getChange(100, 10);
}, /^Error: paid value is not enough$/);
