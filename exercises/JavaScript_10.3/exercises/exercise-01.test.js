const randomNumber = require('./randomNumber');

test('testando numero randomico de forma controlada', () => {
  randomNumber.randomNumber = jest.fn().mockReturnValue(10);

  expect(randomNumber.randomNumber()).toBe(10);
  expect(randomNumber.randomNumber).toHaveBeenCalledTimes(1);

  expect(randomNumber.randomNumber()).toBe(10);
  expect(randomNumber.randomNumber).toHaveBeenCalledTimes(2);

  expect(randomNumber.randomNumber()).toBe(10);
  expect(randomNumber.randomNumber).toHaveBeenCalledTimes(3);
});
