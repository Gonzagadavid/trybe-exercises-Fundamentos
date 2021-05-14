// Bônus
// (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a
// string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// Copiar
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados.
// Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que
// ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
const romans = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
};

function toNumber (romanos) {
  const arrNum = [];
  const arrTotal = [];
  let result = 0;

  for (let i = 0; i < romanos.length; i++) {
    arrNum.push(romans[romanos[i]]);
  }

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] < arrNum[i + 1]) {
      arrNum[i + 1] -= arrNum[i];
    } else {
      arrTotal.push(arrNum[i]);
    }
  }

  for (let i = 0; i < arrTotal.length; i++) {
    result += arrTotal[i];
  }

  return result;
}

console.log(toNumber('CMXCIX'));
console.log(toNumber('XIII'));
console.log(toNumber('XV'));

// Para o próximo exercício você irá precisar ter uma conta no CodeWars , para entender como fazê-lo
// acesse esse o conteúdo que fizemos sobre isso. Após seguir os passos para registro acesse o desafio
// proposto e então clique em TRAIN , você então será redirecionado para a página onde o desafio deve
// ser feito. Quando tiver finalizado o exercício clique em TEST para verificar, com testes simples,
// se sua solução satisfaz o que foi pedido. Passando nesses testes clique em ATTEMPT , ao fazer isso
// seu código passará por todos os testes existentes para validação da solução. Caso sua solução
// esteja correta o botão SUBMIT ficará disponível, clique nele para submeter sua resposta,
// caso contrário volte ao seu código e veja o que ainda não está satisfazendo o que se é pedido,
// repita esse processo até que sua solução esteja correta.
// Desafio - 16 + 8 = 214 ;
// Esse desafio irá exigir um pouco de conhecimento sobre alguns métodos do JavaScript, para isso
// pesquise quando for necessário e caso surja alguma dúvida peça ajuda no Slack . Dúvidas em como
// fazer uma boa pesquisa? Sem problemas! Acesse esse conteúdo sobre como pesquisar como uma pessoa
// desenvolvedora .

// Para este kata você terá que esquecer como somar dois números.
// Em termos simples, nosso método não gosta do princípio de transportar números e apenas anota
// todos os números que calcula :-)

function add (num1, num2) {
  const arrNum1 = num1.toString().split('').reverse().map(Number);
  const arrNum2 = num2.toString().split('').reverse().map(Number);
  const arrResult = [];
  const limit = arrNum1.length > arrNum2.length ? arrNum1.length : arrNum2.length;
  for (let i = 0; i < limit; i++) {
    if (isNaN(arrNum1[i])) arrResult.push(arrNum2[i]);
    if (isNaN(arrNum2[i])) arrResult.push(arrNum1[i]);
    if (!isNaN(arrNum1[i]) && !isNaN(arrNum2[i])) arrResult.push((arrNum1[i] + arrNum2[i]).toString());
  }

  return +arrResult.reverse().join('');
}

console.log(add(2, 11) === 13);
console.log(add(0, 1) === 1);
console.log(add(0, 0) === 0);
console.log(add(16, 18) === 214);
console.log(add(26, 39) === 515);
console.log(add(122, 81) === 1103);
console.log(add(1222, 30277) === 31499);
console.log(add(1236, 30977) === 31111013);
console.log(add(38810, 1383) === 391193);
console.log(add(49999, 49999) === 818181818);
