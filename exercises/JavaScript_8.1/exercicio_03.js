// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo
// será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa
// se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF
// deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver
// resposta ("N.A") não altera-se a contagem.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkCorrect = (item1, item2) => (item1 === 'N.A' ? 0 : item1 === item2 ? 1 : -0.5);

const checkResponses = (arr1, arr2) => {
  let points = 0;
  for (let index = 0; index < arr1.length; index += 1) {
    points += checkCorrect(arr1[index], arr2[index]);
  }
  return points;
};

const feedback = (arr1, arr2, callback) => callback(arr1, arr2);

console.log(feedback(studentAnswers, rightAnswers, checkResponses));
