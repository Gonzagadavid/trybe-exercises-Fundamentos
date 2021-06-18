// Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois
// testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor
// "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor
// "request failed". Crie todos os testes que achar necessário.

const fetch = require('node-fetch');
const dogPicAPI = require('./fetchAPI');

jest.mock('node-fetch');

const resolveFake = {
  message: 'https://images.dog.ceo/breeds/redbone/n02090379_1379.jpg',
  status: 'request success',
};

describe('testa a requisicao da api dog pictures para sucesso e falha ', () => {
  beforeEach(() => fetch.mockReset());

  it('testa a resposta da requisicao com sucesso', async () => {
    expect.assertions(1);
    fetch.mockImplementation(async () => ({ ok: true, json: async () => resolveFake }));

    const image = await dogPicAPI();

    expect(image.status).toBe('request success');
  });

  it('testa a resposta da requisicao rejeitada', async () => {
    fetch.mockImplementation(async () => ({ ok: false }));
    try {
      await dogPicAPI();
    } catch (error) {
      expect(error.message).toMatch('request failed');
    }
  });
});
