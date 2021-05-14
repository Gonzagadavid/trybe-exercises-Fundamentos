//parte 01
// Acesse o elemento elementoOndeVoceEsta .
const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = ondeVoceEsta.parentElement;
pai.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula
//anterior, como fazer isso?
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
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

// parte 2

// Crie um irmão para elementoOndeVoceEsta .
const brother = document.createElement('div');
brother.innerHTML = '<h3>irmão do ondeEsta</h3>';
ondeVoceEsta.insertAdjacentElement('afterend', brother);

// Crie um filho para elementoOndeVoceEsta .
const filho = document.createElement('div');
filho.innerHTML = '<h3>filho do ondeEsta</h3>';
ondeVoceEsta.appendChild(filho);

// Crie um filho para primeiroFilhoDoFilho .
const filho2 = document.createElement('div');
primeiroFilhoDoFilho.appendChild(filho2);

// A partir desse filho criado, acesse terceiroFilho .
// console.log(
//   filho2.parentElement.parentElement.parentElement.lastElementChild
//     .previousElementSibling
// );

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e
// primeiroFilhoDoFilho .

const paiDoPai = document.querySelector('#paiDoPai');
const filhos = paiDoPai.querySelectorAll('*');

for (let element of filhos) {
  // let element = filhos[i];
  if (
    element.id !== 'pai' &&
    element.id !== 'elementoOndeVoceEsta' &&
    element.id !== 'primeiroFilhoDoFilho'
  ) {
    element.parentElement.removeChild(element);
  }
}
console.log(filhos);
