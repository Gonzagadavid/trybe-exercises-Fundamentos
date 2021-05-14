// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 ';
document.body.appendChild(h1);

// 2- Adicione a tag div com a classe main-content como filho da tag body;
const div = document.createElement('div');
div.className = 'main-content';
document.body.appendChild(div);

// 3- Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
const div2 = document.createElement('div');
div2.className = 'center-content';
div.appendChild(div2);

// 4- Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
const p = document.createElement('p');
p.innerHTML =
  '"Deixe as portas abertas.<br>Permita que seus pensamentos venham e vão.<br>Só não sirva chá a eles".<br>Shunryu Suzuki (1904 - 1971)';
div2.appendChild(p);

// 5- Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
const div3 = document.createElement('div');
div3.className = 'left-content';
div.appendChild(div3);

// 6- Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
const div4 = document.createElement('div');
div4.className = 'right-content';
div.appendChild(div4);

// 7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image.
// Esse elemento deve ser filho do div criado no passo 5;
const image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
div3.appendChild(image);

// 8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista.
// Essa lista deve ser filha do div criado no passo 6;
const lista = document.createElement('ul');

for (let index = 1; index <= 10; index += 1) {
  let li = document.createElement('li');
  li.innerHTML = index;
  lista.appendChild(li);
}
div4.appendChild(lista);

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for (let index = 1; index <= 3; index += 1) {
  let h3 = document.createElement('h3');
  h3.innerHTML = 'Subtitulo ' + index;
  div.appendChild(h3);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 10- Adicione a classe title na tag h1 criada;
h1.className = 'title';

//  11- Adicione a classe description nas 3 tags h3 criadas;
const subtitulos = document.getElementsByTagName('h3');

for (let index = 0; index < subtitulos.length; index += 1) {
  subtitulos[index].className = 'description';
}

// 12- Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função.
// removeChild();
div3.parentElement.removeChild(div3);

// 13- Centralize o div criado no passo 6 (aquele que possui a classe right-content ).
// Dica: para centralizar, basta configurar o margin-right: auto do div;
div4.style.margin = 'auto';

// 14- Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe
// center-content ) para a cor verde;
div2.style.backgroundColor = 'green';

// 15- Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
lista.lastChild.remove();
lista.lastChild.remove();
