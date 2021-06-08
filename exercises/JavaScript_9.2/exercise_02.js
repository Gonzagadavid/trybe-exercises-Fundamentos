// -Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// -Primeiramente, instancie uma Promise
// -Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// -Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve
// ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um
// console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
// -Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

const promise = new Promise((resolve, reject) => {
  const arrayRandom = Array(10)
    .fill(0)
    .map((zero) => Math.round(Math.random() * 50) ** 2);
  const total = arrayRandom.reduce((sum, number) => sum + number);
  total < 8000 ? resolve(total) : reject(`Promise rejeitada, total = ${total}`);
})
  .then((resp) => console.log(`Promise resolvida, total = ${resp}`))
  .catch((err) => console.log(err));
