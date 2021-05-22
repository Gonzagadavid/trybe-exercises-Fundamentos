// Escreva a função removeMiddle para passar nos testes já implementados.

const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (arrayWords) => {
  let middleIndex = Math.floor(arrayWords.length / 2);
  const middleWord = arrayWords.splice(middleIndex, 1);
  return middleWord;
};

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
