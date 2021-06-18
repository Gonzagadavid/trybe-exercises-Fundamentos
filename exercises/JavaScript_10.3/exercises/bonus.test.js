const fetch = require('node-fetch');
const fetchJoke = require('./jokeAPI');

jest.mock('node-fetch');

const responseFake = {
  json: async () => ({
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  }),
};

test('testando a função responsavel pela joke api', async () => {
  fetch.mockImplementation(async () => responseFake);
  const response = await fetchJoke();
  expect(response).toBe('Whiteboards ... are remarkable.');
});
