const vowels = 'aeiou';
const decode = (stringCode) => stringCode
  .split('')
  .map((char) => (Number.isNaN(+char) || +char > 5 ? char : vowels[char - 1]))
  .join('');

module.exports = decode;
