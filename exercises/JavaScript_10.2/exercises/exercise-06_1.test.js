// 6.1 - Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá
// passar no teste abaixo.
// Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Animals.some((animal) => animal.name === name)) {
        const animalFind = Animals.find((animal) => animal.name === name);
        return resolve(animalFind);
      }

      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
);

const getAnimal = (name) => findAnimalByName(name);
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) => expect(error.message).toMatch('Nenhum animal com esse nome!'));
    });
  });
});
