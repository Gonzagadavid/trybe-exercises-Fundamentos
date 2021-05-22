const assert = require('assert');
// Crie uma classe de verificação de senha chamada “PasswordVerifier”.

// 1. Adicione as seguintes verificações a uma função mestre chamada “Verify()”
class PasswordVerifier {
  constructor(password) {
    this.password = password;
  }

  Verify() {
    if (this.password === null) throw Error('a senha não deve ser null');
    if (this.password.length <= 8) throw Error('a senha deve ter mais de 8 caracteres');
    if (/^(\d+)?[a-z]+(\d+)?$/g.test(this.password)) throw Error('a senha deve ter pelo menos uma letra maiúscula');
    if (/^(\d+)?[A-Z]+(\d+)?$/g.test(this.password)) throw Error('a senha deve ter pelo menos uma letra minúscula');
    if (/^\D+$/g.test(this.password)) throw Error('a senha deve ter pelo menos um número');

    return true;
  }
}

const passwordLenght = new PasswordVerifier('Senha123');
const passwordNull = new PasswordVerifier(null);
const passwordLower = new PasswordVerifier('senha1234');
const passwordUpper = new PasswordVerifier('SENHA1234');
const passwordNumber = new PasswordVerifier('SenhaSenha');

//    1. - a senha deve ter mais de 8 caracteres
assert.throws(() => passwordLenght.Verify(), /^Error: a senha deve ter mais de 8 caracteres$/);

//    2. - a senha não deve ser null
assert.throws(() => passwordNull.Verify(), /^Error: a senha não deve ser null$/);

//    3. - a senha deve ter pelo menos uma letra maiúscula
assert.throws(() => passwordLower.Verify(), /^Error: a senha deve ter pelo menos uma letra maiúscula$/);

//    4. - a senha deve ter pelo menos uma letra minúscula
assert.throws(() => passwordUpper.Verify(), /^Error: a senha deve ter pelo menos uma letra minúscula$/);

//    5. - a senha deve ter pelo menos um número
assert.throws(() => passwordNumber.Verify(), /^Error: a senha deve ter pelo menos um número$/);

//  Cada um deles deve lançar uma exceção com uma mensagem diferente de sua escolha
