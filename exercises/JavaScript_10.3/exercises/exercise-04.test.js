// Faça o mock do arquivo. Faça uma nova
// implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.
// Para a segunda função, uma nova implementação deve retornar a última letra de uma string.
// A terceira deve receber três strings e concatená-las.
const funcs = require('./funcs');

jest.mock('./funcs.js');

describe('atribuindo nova implementacao as funcoes', () => {
  it('teste de nova implementacao a primeira funcao', () => {
    funcs.upperCase.mockImplementation((str) => str.toLowerCase());
    funcs.upperCase('JAVASCRIPT');
    expect(funcs.upperCase).toHaveBeenCalledTimes(1);
    expect(funcs.upperCase('JAVASCRIPT')).toBe('javascript');
    expect(funcs.upperCase).toHaveBeenCalledTimes(2);
    expect(funcs.upperCase('JAVASCRIPT TESTADO')).toBe('javascript testado');
    expect(funcs.upperCase).toHaveBeenCalledTimes(3);
    expect(funcs.upperCase('JAVASCRIPT TESTADO COM JEST')).toBe('javascript testado com jest');
    expect(funcs.upperCase).toHaveBeenCalledTimes(4);
  });

  it('teste de nova implementacao a segunda funcao', () => {
    funcs.fistLetter.mockImplementation((str) => str.slice(-1));
    funcs.fistLetter('JAVASCRIPT');
    expect(funcs.fistLetter).toHaveBeenCalledTimes(1);
    expect(funcs.fistLetter('JAVASCRIPT')).toBe('T');
    expect(funcs.fistLetter).toHaveBeenCalledTimes(2);
    expect(funcs.fistLetter('JAVASCRIPT TESTADO')).toBe('O');
    expect(funcs.fistLetter).toHaveBeenCalledTimes(3);
    expect(funcs.fistLetter('JAVASCRIPT TESTADO COM JEST')).toBe('T');
    expect(funcs.fistLetter).toHaveBeenCalledTimes(4);
  });

  it('teste de nova implementacao a terceira funcao', () => {
    funcs.concatStr.mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    funcs.concatStr('JAVASCRIPT', 'NODE', 'JEST');
    expect(funcs.concatStr).toHaveBeenCalledTimes(1);
    expect(funcs.concatStr('JAVASCRIPT', 'NODE', 'JEST')).toBe('JAVASCRIPTNODEJEST');
    expect(funcs.concatStr).toHaveBeenCalledTimes(2);
    expect(funcs.concatStr('JAVASCRIPT', 'REACT', 'JSX')).toBe('JAVASCRIPTREACTJSX');
    expect(funcs.concatStr).toHaveBeenCalledTimes(3);
    expect(funcs.concatStr('JAVASCRIPT', 'ESMODULES', 'COMMONJS')).toBe('JAVASCRIPTESMODULESCOMMONJS');
    expect(funcs.concatStr).toHaveBeenCalledTimes(4);
  });
});
