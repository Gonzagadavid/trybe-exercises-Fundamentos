const searchEmployee = require('./searchEmployee');

describe('testes para verificar a funcionalidade da funcao searchEmployee', () => {
  test('Verifica de searchEmploee é uma funcao', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  test('Verifica se passado o id e a opção firstName, é retornado o  firstName correto', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
  });

  test('Verifica se passado o id e a opção lastName, é retornado o  lastName correto', () => {
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
  });

  test('Verifica se passado o id e a opção specialities, é retornado o array de  specialities correto', () => {
    expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS']);
  });

  test('Caso o id não conste no quadro de funcionários, deve retornar o erro "ID não identificado"', () => {
    expect(() => {
      searchEmployee('1256478', 'specialities');
    }).toThrowError(new Error('ID não identificado'));
  });

  test('se a informação não existir,deve retornar o erro "Informação indisponível"', () => {
    expect(() => {
      searchEmployee('1256-4', 'fullName');
    }).toThrowError(new Error('Informação indisponível'));
  });
});
