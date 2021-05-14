const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
let select = '';

//  Copie esse arquivo e edite apenas ele;
//  Crie uma função que adicione a classe 'tech' ao elemento selecionado;
const tech = document.querySelector('.tech');

// 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
//  Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function alteraTech(e, elemento) {
  elemento.innerHTML = e.target.value;
  input.removeEventListener('input', (e) => alteraTech(e));
}

input.addEventListener('input', (e) => alteraTech(e, select));

//  Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 1. Que tal redirecionar para seu portifólio?
function redirect(e, location) {
  window.location = location;
  e.target.removeEventListener('dblclick', redirect);
}

myWebpage.addEventListener('dblclick', (e) =>
  redirect(e, 'https://gonzagadavid.github.io/portfolio')
);

//  Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function modifyCollor(e, color) {
  e.target.style = `color: ${color}`;
  e.target.removeEventListener(e.type, (e) => modifyCollor(e, color));
}
myWebpage.addEventListener('mouseover', (e) => modifyCollor(e, '#41197f'));
myWebpage.addEventListener('mouseout', (e) => modifyCollor(e, 'white'));

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  divUm.style.border = 'none';
  divDois.style.border = 'none';
  divTres.style.border = 'none';
  event.target.style = 'border: solid 2px white';
  select = event.target;
  event.target.removeEventListener('dblclick', resetText);
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

function toEnter(e) {
  if (e.key === 'Enter') {
    divUm.style.border = 'none';
    divDois.style.border = 'none';
    divTres.style.border = 'none';
    input.value = '';
    myWebpage.focus();
  }
  //input.removeEventListener('keypress', toEnter);
}
divUm.addEventListener('dblclick', resetText);
divDois.addEventListener('dblclick', resetText);
divTres.addEventListener('dblclick', resetText);
input.addEventListener('keypress', toEnter);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
