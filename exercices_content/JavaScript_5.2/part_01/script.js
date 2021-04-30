// Acesse o elemento elementoOndeVoceEsta .
const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = ondeVoceEsta.parentElement;
pai.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula
//anterior, como fazer isso?
const primeiroFilho = pai.firstElementChild;
primeiroFilho.innerHTML = '<p>Texto Adicionado</p>';

// Acesse o primeiroFilho a partir de pai .
const primeiroFilhoaPartirDoPai = pai.firstChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
const primeiroFilhoOndeVoceEsta = ondeVoceEsta.firstChild;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
const atecao = ondeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
const terceiroFilho = ondeVoceEsta.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.
const terceiroFilhoAPartirDoPai = pai.lastElementChild.previousElementSibling;
