const exercise = require('./exercise-01');

test('testando numero randomico de forma controlada', () => {
  exercise.randomNumber = jest.fn().mockReturnValue(10);

  expect(exercise.randomNumber()).toBe(10);
  expect(exercise.randomNumber).toHaveBeenCalledTimes(1);

  expect(exercise.randomNumber()).toBe(10);
  expect(exercise.randomNumber).toHaveBeenCalledTimes(2);

  expect(exercise.randomNumber()).toBe(10);
  expect(exercise.randomNumber).toHaveBeenCalledTimes(3);
});
