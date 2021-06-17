// Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois
// testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor
// "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor
// "request failed". Crie todos os testes que achar necessário.
const fetch = require('node-fetch');

async function dogPicAPI() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  if (!response.ok) throw new Error('request failed');
  const imgObj = await response.json();
  return imgObj;
}

module.exports = dogPicAPI;
