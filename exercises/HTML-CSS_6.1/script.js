const btnSubmit = document.getElementById('btn-submit');
const curriculoContainer = document.getElementById('curriculo-container');
const btnClear = document.getElementById('clear');
const erros = document.createElement('ul');
const erroContainer = document.getElementById('erro-container');
const regexDate = /([0-2][0-9]|[3][01])-(0[1-9]|1[0-2])-[0-9]{2}/g;
const regexCPF = /\d{11}/g;
const regexEmail = /.+@.+/g;
const selectionState = document.getElementById('estado');
const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const myHeaders = new Headers();
const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
};
let error = false;
let obj = {};

fetch(url, myInit)
  .then((resp) => resp.text())
  .then((resp) => JSON.parse(resp))
  .then((resp) => renderStates(resp));

function renderStates(arrObjStates) {
  for (let index = 0; index < arrObjStates.length; index += 1) {
    const option = document.createElement('option');
    if (index === 0) option.selected = true;
    option.value = arrObjStates[index].sigla;
    option.innerHTML = arrObjStates[index].nome;
    selectionState.appendChild(option);
  }
}

let message = false;

function checkEmpty(valor, msg) {
  if (valor === '') {
    const li = document.createElement('li');
    li.innerHTML = `O campo ${msg} é obrigatório`;
    erros.appendChild(li);
    error = true;
  }
}

const arrayIds = [
  { id: 'nome', regex: false },
  { id: 'email', regex: regexEmail },
  { id: 'cpf', regex: regexCPF },
  { id: 'cidade', regex: false },
  { id: 'cargo', regex: false },
  { id: 'decricao-cargo', regex: false },
  { id: 'data-inicio', regex: regexDate },
  { id: 'endereco', regex: false },
  { id: 'resumo-curriculo', regex: false },
];

function checkError() {
  for (let index = 0; index < arrayIds.length; index += 1) {
    const element = document.querySelector(`#${arrayIds[index].id}`);
    const msg = arrayIds[index].id.replace(/\-/g, ' ');
    checkEmpty(element.value, msg);

    if (arrayIds[index].regex && !arrayIds[index].regex.test(element.value)) {
      const li = document.createElement('li');
      li.innerHTML = `Formato invalido para ${msg}`;
      erros.appendChild(li);
      error = true;
    }
  }

  return error;
}

function renderErros() {
  erroContainer.appendChild(erros);
  window.scrollTo(0, 0);
}

function renderCurriculo() {
  for (let index = 0; index < arrayIds.length; index += 1) {
    const p = document.createElement('p');
    const element = document.querySelector(`#${arrayIds[index].id}`);
    const msg = arrayIds[index].id.replace(/\-/g, ' ');
    p.innerHTML = `${msg}: ${element.value}\n`;
    curriculoContainer.appendChild(p);
  }
}

function submitForm(event) {
  event.preventDefault();
  erros.innerHTML = '';
  error = false;
  if (checkError()) return renderErros();
  return renderCurriculo();
}

btnSubmit.addEventListener('click', submitForm);

function clear() {
  curriculoContainer.innerHTML = '';
}

btnClear.addEventListener('click', clear);
