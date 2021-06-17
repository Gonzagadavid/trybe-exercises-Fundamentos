// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira
// função. Após repetir a implementação, restaure a implementação original e crie os testes
// necessários para validar.
const funcs = require('./funcs');

describe('atribuindo nova implementacao as funcoes', () => {
  it('teste alterar a implementacao a primeira funcao e restaura-la', () => {
    const mockUpper = jest
      .spyOn(funcs, 'upperCase')
      .mockImplementation((str) => str.toLowerCase());

    mockUpper('JAVASCRIPT');
    expect(mockUpper).toHaveBeenCalledTimes(1);
    expect(mockUpper('JAVASCRIPT')).toBe('javascript');
    expect(mockUpper).toHaveBeenCalledTimes(2);
    expect(mockUpper('JAVASCRIPT TESTADO')).toBe('javascript testado');
    expect(mockUpper).toHaveBeenCalledTimes(3);
    expect(mockUpper('JAVASCRIPT TESTADO COM JEST')).toBe('javascript testado com jest');
    expect(mockUpper).toHaveBeenCalledTimes(4);

    funcs.upperCase.mockRestore();
    const mockUpperRestore = jest.spyOn(funcs, 'upperCase');
    mockUpperRestore('javascript');
    expect(mockUpperRestore).toHaveBeenCalledTimes(1);
    expect(mockUpperRestore('javascript')).toBe('JAVASCRIPT');
    expect(mockUpperRestore).toHaveBeenCalledTimes(2);
    expect(mockUpperRestore('javascript testado')).toBe('JAVASCRIPT TESTADO');
    expect(mockUpperRestore).toHaveBeenCalledTimes(3);
    expect(mockUpperRestore('javascript testado com jest')).toBe('JAVASCRIPT TESTADO COM JEST');
    expect(mockUpperRestore).toHaveBeenCalledTimes(4);
  });
});
