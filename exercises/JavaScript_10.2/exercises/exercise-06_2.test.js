// 6.2 - Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve
// ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro.
//  Escreva tanto a função como o seu teste.
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age > age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui animais com essa idade!'));
    }, 100);
  })
);

const getAnimal = (age) => findAnimalByName(age);
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(1).then((animal) => {
        expect(animal).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' },
          { name: 'Preguiça', age: 5, type: 'Cat' }]);
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(7).catch((error) => expect(error.message).toMatch('Não possui animais com essa idade!'));
    });
  });
});
