const decode = require('./decode');

describe('teste para a funcao decode', () => {
  // Teste se encode e decode são funções;
  test('a tipagem de decode deve ser function', () => {
    expect(typeof decode).toBe('function');
  });

  test('os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('os demais números não são convertidos letras', () => {
    expect(decode('123456789')).toBe('aeiou6789');
  });

  test('a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('p1r1l2l2p3p2d4')).toHaveLength('p1r1l2l2p3p2d4'.length);
  });
});
