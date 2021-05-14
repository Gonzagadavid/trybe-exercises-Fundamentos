
/*Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/
//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.
// (Não gaste tempo pensando no texto e sim realizando o exercício)
const paragraphs = document.getElementsByTagName('p')
paragraphs[1].innerText = 'Daqui a dois anos serei um desenvolvedor web full stack e estarei aprendendo uma linguagem de baixo nível!'

//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
const mainContent = document.getElementById('main-content')
mainContent.style.backgroundColor = 'rgb(76,164,109)'

//  Crie uma função que mude a cor do quadrado vermelho para branco.
const centerContent = document.getElementById('center-content')
centerContent.style.backgroundColor = 'white'

//  Crie uma função que corrija o texto da tag <h1>.
const title = document.getElementsByTagName('h1')
title[0].innerText = 'Exercício 5.1 - JavaScrpit'

//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.textTransform = 'uppercase'
}

//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].innerText)
}
