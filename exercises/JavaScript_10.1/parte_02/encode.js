const vowels = 'aeiou';

const encode = (string) => string
  .split('')
  .map((letter) => (vowels.includes(letter) ? vowels.indexOf(letter) + 1 : letter))
  .join('');

module.exports = encode;
