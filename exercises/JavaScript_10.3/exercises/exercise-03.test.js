// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova
// implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos
// testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne
// seu dobro. Faça os testes necessários.
const randomNumber = require('./randomNumber');

jest.mock('./randomNumber.js');

test('testando a funcao randomNumber com outra implementacao', () => {
  randomNumber.randomNumber.mockImplementation((a, b, c) => a * b * c);
  randomNumber.randomNumber(10, 3, 5);
  expect(randomNumber.randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber.randomNumber(10, 3, 5)).toBe(150);
  expect(randomNumber.randomNumber).toHaveBeenCalledTimes(2);
  expect(randomNumber.randomNumber(4, 5, 3)).toBe(60);
  expect(randomNumber.randomNumber).toHaveBeenCalledTimes(3);
  expect(randomNumber.randomNumber(40, 4, 2)).toBe(320);
  expect(randomNumber.randomNumber).toHaveBeenCalledTimes(4);
});
