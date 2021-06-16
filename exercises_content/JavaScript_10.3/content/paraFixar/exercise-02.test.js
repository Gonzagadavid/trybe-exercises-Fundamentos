const math = require('../math');
// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'.
//  Teste a chamada e o retorno.
test('#multiplicar', () => {
  // testando se a função foi chamada e qual seu retorno
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.multiplicar();
  expect(math.multiplicar).toHaveBeenCalledTimes(1);
  expect(math.multiplicar).toHaveBeenCalled();
  expect(math.multiplicar()).toBe(10);
  expect(math.multiplicar).toHaveBeenCalledTimes(2);
});
