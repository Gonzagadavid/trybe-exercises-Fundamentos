const myRemove = require('./exercicio_02');

// implemente seus testes aqui
// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o
// elemento item caso
// ele exista no array

describe('exercicio 2', () => {
  // 1-Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  test('a chamada myRemove([1, 2, 3, 4] deve retornar o array sem o numero 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // // 2-Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  test('a chamada myRemove([1, 2, 3, 4] não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  // // 3-Verifique se o array passado por parâmetro não sofreu alterações
  const array = [1, 2, 3, 4];
  myRemove(array);
  test('-Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(array).toEqual([1, 2, 3, 4]);
  });

  // // 4-Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
