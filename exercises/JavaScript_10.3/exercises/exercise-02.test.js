// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
// que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.
// Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const randomNumber = require('./randomNumber');

jest.mock('./randomNumber.js');

test('testando a funcao randomNumber com outra implementacao', () => {
  randomNumber.randomNumber.mockImplementation((a, b) => a / b);
  randomNumber.randomNumber(64, 4);
  expect(randomNumber.randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber.randomNumber(64, 4)).toBe(16);
  expect(randomNumber.randomNumber).toHaveBeenCalledTimes(2);
  expect(randomNumber.randomNumber(45, 3)).toBe(15);
  expect(randomNumber.randomNumber).toHaveBeenCalledTimes(3);
  expect(randomNumber.randomNumber(20, 4)).toBe(5);
  expect(randomNumber.randomNumber).toHaveBeenCalledTimes(4);
});
