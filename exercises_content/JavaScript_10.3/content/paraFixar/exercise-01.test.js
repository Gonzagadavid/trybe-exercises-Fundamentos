const math = require('../math');
// Faça o mock da funcão subtrair e teste sua chamada.

jest.mock('../math');
describe('testendo subtrair com jest.moc', () => {
  test('#subtrair', () => {
    math.subtrair.mockImplementation((a, b) => a - b);
    math.subtrair(15, 5);

    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair).toHaveBeenCalledWith(15, 5);
    expect(math.subtrair(15, 5)).toBe(10);
    expect(math.subtrair).toHaveBeenCalledTimes(2);
  });
});

describe('testando com jest,spyOn', () => {
  test('#subtrair', () => {
    const mockSubtrair = jest.spyOn(math, 'subtrair');

    mockSubtrair(15, 10);
    expect(mockSubtrair).toHaveBeenCalledTimes(3);
    expect(mockSubtrair).toHaveBeenCalled();

    expect(mockSubtrair).toHaveBeenCalledTimes(3);
    expect(mockSubtrair).toHaveBeenCalledWith(15, 10);
    expect(mockSubtrair(15, 10)).toBe(5);

    expect(mockSubtrair).toHaveBeenCalledTimes(4);
    expect(mockSubtrair).toHaveBeenCalledWith(15, 5);
    expect(mockSubtrair(15, 5)).toBe(10);
    expect(mockSubtrair).toHaveBeenCalledTimes(5);
  });
});
