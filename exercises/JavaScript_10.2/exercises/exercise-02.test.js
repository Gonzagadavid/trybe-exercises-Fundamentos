const getUserName = require('./getUserName');

// 2 - Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função
// getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em
// que o usuário não é encontrado.
// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users,
// para saber quais IDs existem.
describe('verifica se getUserName se retorna os nomes corretos de acordo com id passado usando then e catch', () => {
  it('verifica se passado o id 4 ele retorna o nome Mark', () => {
    expect.assertions(1);
    return getUserName(4).then((name) => expect(name).toBe('Mark'));
  });

  it('verifica se passado o id 5 ele retorna o nome Paul', () => {
    expect.assertions(1);
    return getUserName(5).then((name) => expect(name).toBe('Paul'));
  });

  it('verifica se passado o id inexistente ele retorna a mensagem de erro correta', () => {
    expect.assertions(1);
    return getUserName(7).catch((error) => expect(error.message).toMatch('User with 7 not found.'));
  });
});

describe('verifica se getUserName se retorna os nomes corretos de acordo com id passado usando .resolves e .rejects', () => {
  it('verifica se passado o id 4 ele retorna o nome Mark', () => expect(getUserName(4)).resolves.toBe('Mark'));

  it('verifica se passado o id 5 ele retorna o nome Paul', () => expect(getUserName(5)).resolves.toBe('Paul'));

  it('verifica se passado o id inexistente ele retorna a mensagem de erro correta', () => expect(getUserName(7)).rejects.toThrow({ message: 'User with 7 not found.' }));
});
