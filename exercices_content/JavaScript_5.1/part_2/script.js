const paragraph = document.getElementById("paragraph");
const title = document.getElementById('page-title');
const subTitle = document.getElementById('subtitle')
const second = document.getElementById('second-paragraph')
const paragrafos = document.getElementsByClassName('paragraph')
const sub = document.getElementsByTagName('h4')

title.innerText = 'Django';
title.style = 'font-size: 50px; text-align: center';
paragraph.style = 'color: red; font-size: 25px; text-align: center';
paragraph.innerText = 'L I V R E';
subTitle.innerText = 'Snopse:';
second.innerText = 'Ao realizar seu plano, Schultz libera Django, embora os dois homens decidam continuar juntos. Desta vez, Schultz busca os criminosos mais perigosos do sul dos Estados Unidos com a ajuda de Django. Dotado de um notável talento de caçador, Django tem como objetivo principal encontrar e resgatar Broomhilda (Kerry Washington), sua esposa, que ele não vê desde que ela foi adquirida por outros proprietários, há muitos anos.'
subTitle.style = 'font-size: 20px; text-align: center';
paragrafos[0].style.color = 'green'
sub[0].style.color = 'green'