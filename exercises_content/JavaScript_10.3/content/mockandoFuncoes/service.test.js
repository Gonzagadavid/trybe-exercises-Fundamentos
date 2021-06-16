const service = require('./service');

// test('#randomRgbColor', () => {
//   // testando se a função foi chamada
//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
// });

// test('#randomRgbColor', () => {
//   // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois,
//   // para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
//   service.randomRgbColor = jest.fn();

//   service.randomRgbColor();
//   expect(service.randomRgbColor).toHaveBeenCalled();
// });

test('#randomRgbColor', () => {
  // testando se a função foi chamada e qual seu retorno
  service.randomRgbColor = jest.fn().mockReturnValue('rgb(255, 255, 255)');

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe('rgb(255, 255, 255)');
});

test('#randomRgbColor encadeamento', () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe('first call');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe('second call');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe('default value');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});
