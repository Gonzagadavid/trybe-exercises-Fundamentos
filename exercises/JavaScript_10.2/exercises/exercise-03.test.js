const getUserName = require('./getUserName');
// 3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

describe('verifica se getUserName se retorna os nomes corretos de acordo com id passado usando then e catch', () => {
  it('verifica se passado o id 4 ele retorna o nome Mark', async () => {
    const name = await getUserName(4);
    expect(name).toBe('Mark');
  });

  it('verifica se passado o id 5 ele retorna o nome Paul', async () => {
    const name = await getUserName(5);
    expect(name).toBe('Paul');
  });

  it('verifica se passado o id inexistente ele retorna a mensagem de erro correta', async () => {
    try {
      await getUserName(7);
    } catch (error) {
      expect(error.message).toMatch('User with 7 not found.');
    }
  });
});

describe('verifica se getUserName se retorna os nomes corretos de acordo com id passado usando .resolves e .rejects', () => {
  it('verifica se passado o id 4 ele retorna o nome Mark', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toBe('Mark');
  });

  it('verifica se passado o id 5 ele retorna o nome Paul', async () => {
    expect.assertions(1);
    await expect(getUserName(5)).resolves.toBe('Paul');
  });

  it('verifica se passado o id inexistente ele retorna a mensagem de erro correta', async () => {
    expect.assertions(1);
    await expect(getUserName(7)).rejects.toThrow({ message: 'User with 7 not found.' });
  });
});
