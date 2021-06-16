const math = require('../math');
// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'.
// Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'.
// Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
jest.mock('../math.js');
test('#dividir', () => {
  math.dividir = jest.fn()
    .mockImplementation((a, b) => a / b)
    .mockReturnValue(15)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

  expect(math.dividir()).toBe(2);
  expect(math.dividir).toHaveBeenCalledTimes(1);
  expect(math.dividir()).toBe(5);
  expect(math.dividir).toHaveBeenCalledTimes(2);
  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(3);
  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(4);
  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveBeenCalledTimes(5);
});
