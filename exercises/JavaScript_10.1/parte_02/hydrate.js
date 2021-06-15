function hydrate(string) {
  const sum = string.split(' ').filter((char) => !Number.isNaN(+char)).reduce((total, qty) => total + +qty, 0);
  return sum === 1 ? `${sum} copo de água` : `${sum} copos de água`;
}

module.exports = hydrate;
