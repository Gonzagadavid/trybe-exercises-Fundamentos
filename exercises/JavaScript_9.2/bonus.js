// Utilize somente Higher Order Functions para fazer as operações com o array;
// Refatore a Promise para utilizar somente async e await .

const promise = () => {
  const totalRandom = Array(10)
    .fill(0)
    .map(() => Math.round(Math.random() * 50) ** 2)
    .reduce((sum, number) => sum + number, 0);
  if (totalRandom > 8000) {
    throw new Error('É mais de oito mil! Essa promise deve estar quebrada!');
  }
  const arrayResult = [2, 3, 5, 10].map((number) => totalRandom / number);
  return arrayResult;
};

const sumArray = (array) => array.reduce((sum, number) => sum + number);

async function then() {
  try {
    const array = await promise();
    const sum = await sumArray(array);
    console.log(sum);
  } catch (erro) {
    console.log(erro.message);
  }
}

then();
