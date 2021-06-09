// 1-Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// -Primeiramente, instancie uma Promise
// -Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// -Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve
// ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um
// console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
// -Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

// 4-Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar
// quebrada!"
// 5-Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
const promise = new Promise((resolve, reject) => {
  const totalRandom = Array(10)
    .fill(0)
    .map(() => Math.round(Math.random() * 50) ** 2)
    .reduce((sum, number) => sum + number, 0);
  totalRandom < 8000 ? resolve(totalRandom) : reject(`Promise rejeitada, totalRandom = ${totalRandom}`);
})
  .then((resp) => console.log(`Promise resolvida, totalRandom = ${resp}`))
  .catch((err) => console.log(err));
