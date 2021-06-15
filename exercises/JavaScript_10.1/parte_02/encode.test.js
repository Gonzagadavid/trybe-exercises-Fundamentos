const encode = require('./encode');

describe('teste para a funcao encode', () => {
  // Teste se encode e decode são funções;
  test('Teste se encode é funcao', () => {
    expect(typeof encode).toBe('function');
  });

  test('as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('Teste se as demais letras não são convertidos para numeros', () => {
    expect(encode('abcdefghijklmnopqrstuvwxyz')).toBe('1bcd2fgh3jklmn4pqrst5vwxyz');
  });

  test('a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('paralelepipedo')).toHaveLength('paralelepipedo'.length);
  });
});
