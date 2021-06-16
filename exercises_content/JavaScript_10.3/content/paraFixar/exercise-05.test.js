const math = require('../math');
// Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original.
// Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno.
// Restaure a implementação original da função e teste sua execução.
describe('testando com jest de modo usar o restore', () => {
  test('#subtrair', () => {
    const mockSubtrair = jest
      .spyOn(math, 'subtrair')
      .mockImplementation((a, b) => a * b)
      .mockReturnValue(20);

    expect(mockSubtrair()).toBe(20);
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair()).toBe(20);
    expect(mockSubtrair).toHaveBeenCalledTimes(2);
    expect(mockSubtrair()).toBe(20);
    expect(mockSubtrair).toHaveBeenCalledTimes(3);

    math.subtrair.mockRestore();
    expect(math.subtrair(10, 5)).toBe(5);
  });
});
