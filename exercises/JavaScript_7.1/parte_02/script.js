// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você
// utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os
// inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver
// com uma linha usando ternary operator .

const fator = (number, result = 1) =>
  number === 0 ? result : fator(number - 1, result * number);
console.log(fator(4)); // 24

// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// Copiar
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = (string) =>
  string.split(' ').sort((a, b) => b.length - a.length)[0];
console.log(
  longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
); // retorna 'aconteceu'
