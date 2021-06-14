const myFizzBuzz = require('./exercicio_04');

// implemente seus testes aqui

// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível
//  por 3 e 5 ,
// retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 ,
// retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false
// caso num não seja um número
describe('exercicio 4', () => {
  // 1-Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  // assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
  test('chamada com um número divisível por 3 e 5 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  // 2-Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  // assert.strictEqual(myFizzBuzz(9), 'fizz');
  test('chamada com um número divisível por 3 e verifique se o retorno é  fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  // 3-Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  // assert.strictEqual(myFizzBuzz(20), 'buzz');
  test('chamada com um número divisível por 5 e verifique se o retorno é  buzz', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });

  // 4-Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o
  // retorno é o esperado
  // assert.strictEqual(myFizzBuzz(13), 13);
  test('chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o proprio numero', () => {
    expect(myFizzBuzz(13)).toBe(13);
  });
  // 5-Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  // assert.strictEqual(myFizzBuzz('fizzbuzz'), false);
  test('chamada com um parâmetro que não é um número e verifique se o retorno é false', () => {
    expect(myFizzBuzz('fizzbuzz')).toBe(false);
  });
});
