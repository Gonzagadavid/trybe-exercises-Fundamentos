const { obj1, obj2, obj3 } = require('./exercicio_05');
// Compare dois objetos (JSON) para verificar se são idênticos ou não
// implemente seus testes aqui

describe('exercicio 5', () => {
  test('verifica se o obj1 é igual ao obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  test('verifica se o obj1 é diferente ao obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });

  test('verifica se o obj2 é diferente ao obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});
