// Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar
// quebrada!"
const promise = new Promise((resolve, reject) => {
  const totalRandom = Array(10)
    .fill(0)
    .map(() => Math.round(Math.random() * 50) ** 2)
    .reduce((sum, number) => sum + number, 0);
  const arrayResult = [2, 3, 5, 10].map((number) => totalRandom / number);

  totalRandom < 8000 ? resolve(arrayResult) : reject('É mais de oito mil! Essa promise deve estar quebrada!');
})
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
