// 1 - Escreva um teste que verifique a chamada do callback de uma função uppercase,
// que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado
// com os falso-positivos em testes assíncronos.
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('testes de funcionamento da função uppercase', () => {
  it('verifica se uppercase e uma funcao', () => expect(typeof uppercase).toBe('function'));

  it('verifica se a funcao uppercase retorna a  palavra com todas as letras Maiucula', (done) => {
    uppercase('javascript', (str) => expect(str).toBe('JAVASCRIPT'));
    done();
  });

  it('verifica se retorna uma frase com todas as palavras com letras maiusculas', (done) => {
    uppercase('this is javascript power', (str) => expect(str).toBe('THIS IS JAVASCRIPT POWER'));
    done();
  });
});
