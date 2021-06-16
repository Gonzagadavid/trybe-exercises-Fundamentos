const math = require('../math');
// Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua somar.
//  Teste a chamada, o retorno e os parâmetros passados.
jest.mock('../math');
describe('testendo somar com jest.moc', () => {
  test('#somar', () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(15, 5);

    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(15, 5);
    expect(math.somar(15, 5)).toBe(20);
    expect(math.somar).toHaveBeenCalledTimes(2);
  });
});

describe('testando com jest,spyOn', () => {
  test('#somar', () => {
    const mockSomar = jest.spyOn(math, 'somar');

    mockSomar(15, 10);
    expect(mockSomar).toHaveBeenCalledTimes(3);
    expect(mockSomar).toHaveBeenCalled();

    expect(mockSomar).toHaveBeenCalledTimes(3);
    expect(mockSomar).toHaveBeenCalledWith(15, 10);
    expect(mockSomar(15, 10)).toBe(25);

    expect(mockSomar).toHaveBeenCalledTimes(4);
    expect(mockSomar).toHaveBeenCalledWith(15, 5);
    expect(mockSomar(15, 5)).toBe(20);
    expect(mockSomar).toHaveBeenCalledTimes(5);
  });
});
