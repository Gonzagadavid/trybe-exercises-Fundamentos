const myRemoveWithoutCopy = require('./exercicio_03');

// implemente seus testes aqui

// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array
// sem o elemento item caso
// ele exista no array

describe('exercicio 3', () => {
  // 1-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  test('a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', (() => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  }));

  // 2-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  // assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
  test(' a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', (() => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  }));

  // 3-Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado
  // por parâmetro
  // sofreu alterações
  const array = [1, 2, 3, 4];
  myRemoveWithoutCopy(array, 3);
  test('chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', (() => {
    expect(array).not.toEqual([1, 2, 3, 4]);
  }));

  // 4-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
  // assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
  test(' a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', (() => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  }));
});
