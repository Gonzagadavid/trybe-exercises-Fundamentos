// 4 - O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios,
// e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos',
// faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e
// 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
const fetch = require('node-fetch');
const url = 'https://api.github.com/orgs/tryber/repos'
const todoList = 'sd-01-week4-5-project-todo-list'
const memeGenerator = 'sd-01-week4-5-project-meme-generator'

const getRepos = (url) => fetch(url)
  .then((response) => response.json())
  .then((data) => data.map((repo) => repo.name));

describe('verifica se o array retornado pelo getRepo possui dois itens especificos', () => {
  it('verifica se a lista retornada inclui o todo list e  o meme generator usando then', () => {
    expect.assertions(2);
    return getRepos(url).then((list) => {
      expect(list).toContain(todoList)
      expect(list).toContain(memeGenerator)
    });
  });

  it('verifica se a lista retornada inclui o todo list e  o meme generator usando async await', async () => {
    const list = await getRepos(url)
    expect(list).toContain(todoList)
    expect(list).toContain(memeGenerator)
  });
});
