// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const render = document.getElementById('jokeContainer');
const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((resp) => (render.innerHTML = resp.joke));
};

window.onload = () => fetchJoke();
// Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!
