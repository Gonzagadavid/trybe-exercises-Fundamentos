const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('testes de funcionamento da função uppercase', () => {
  it('verifica se uppercase e uma funcao', () => expect(typeof uppercase).toBe('function'));

  it('verifica se a funcao uppercase retorna a  palavra com todas as letras Maiucula', () => {
    uppercase('javascript', (str) => expect(str).toBe('JAVASCRIPT'));
  });

  it('verifica se retorna uma frase com todas as palavras com letras maiusculas', () => {
    uppercase('this is javascript power', (str) => expect(str).toBe('THIS IS JAVASCRIPT POWER'));
  });
});
