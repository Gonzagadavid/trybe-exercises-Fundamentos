// Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do
// numero resultante por 2, 3, 5 e 10.
const promise = new Promise((resolve, reject) => {
  const totalRandom = Array(10)
    .fill(0)
    .map(() => Math.round(Math.random() * 50) ** 2)
    .reduce((sum, number) => sum + number, 0);
  const arrayResult = [2, 3, 5, 10].map((number) => totalRandom / number);

  totalRandom < 8000 ? resolve(arrayResult) : reject(`Promise rejeitada, totalRandom = ${totalRandom}`);
})
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
