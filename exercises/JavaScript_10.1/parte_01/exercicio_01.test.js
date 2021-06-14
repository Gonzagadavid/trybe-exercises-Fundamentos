const sum = require('./exercicio_01');

describe('exercicio 1', () => {
  // A função sum(a, b) retorna a soma do parâmetro a com o b
  // 1-Teste se o retorno de sum(4, 5) é 9
  test('a soma de 4 + 5 é igual a 9', () => expect(sum(4, 5)).toBe(9));

  // // 2-Teste se o retorno de sum(0, 0) é 0
  test('a soma de 0 + 0 é igual a 0', () => expect(sum(0, 0)).toBe(0));

  // // 3-Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  test('erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => { sum(4, '5'); }).toThrow();
  });

  // // 4-Teste se a mensagem de erro é "parameters must be numbers" quando realizar
  //  a chamada sum(4, "5")
  test('mensagem de erro é "parameters must be numbers"', () => {
    expect(() => { sum(4, '5'); }).toThrowError(new Error('parameters must be numbers'));
  });
});
