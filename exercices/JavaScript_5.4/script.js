// constantes com elementos do DOM
const color = document.getElementById('color');
const background = document.getElementById('background');
const size = document.getElementById('size');
const container = document.getElementById('content');
const heigth = document.getElementById('height');
const family = document.getElementById('family');
let formatSave = {};

// salva os formatos alterado no localStoreage
function save() {
  const formatJson = JSON.stringify(formatSave);
  localStorage.setItem('formatSave', formatJson);
}

// renderiza formato salve no localStorage
function renderSave() {
  formatSave = JSON.parse(localStorage.getItem('formatSave'));
  container.style.color = formatSave.color;
  container.style.backgroundColor = formatSave.backgroundColor;
  container.style.fontSize = formatSave.fontSize;
  container.style.lineHeight = formatSave.lineHeight;
  container.style.fontFamily = formatSave.fontFamily;
}
renderSave();

// troca a cor do texto
function switchColor(e) {
  let fontColor = e.target.value;
  container.style.color = fontColor;
  formatSave.color = fontColor;
  save();
}

// troca a cor de fundo da tela
color.addEventListener('input', switchColor);

function switchBack(e) {
  const back = e.target.value;
  container.style.backgroundColor = back;
  formatSave.backgroundColor = back;
  save();
}

background.addEventListener('input', switchBack);

// troca o tamanho da fonte
function switchSize(e) {
  let sizeFont = e.target.value + 'px';
  if (sizeFont < 20) sizeFont = '20px';
  container.style.fontSize = sizeFont;
  formatSave.fontSize = sizeFont;
  save();
}

size.addEventListener('input', switchSize);

// troca altura da linha
function switchHeight(e) {
  let heightLine = e.target.value + 'px';
  if (e.target.value < 15) heightLine = '20px';
  container.style.lineHeight = heightLine;
  formatSave.lineHeight = heightLine;
  save();
}

heigth.addEventListener('input', switchHeight);

// altera o tipo da fonte
function switchFont(e) {
  familyFont = e.target.value;
  container.style.fontFamily = familyFont;
  formatSave.fontFamily = familyFont;
  save();
}

family.addEventListener('input', switchFont);
