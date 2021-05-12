const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const endereco = document.getElementById('endereco');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const casa = document.getElementById('casa');
const apartamento = document.getElementById('apartamento');
const curriculo = document.getElementById('curriculo');
const cargo = document.getElementById('cargo');
const decricaoCargo = document.getElementById('decricao-cargo');
const dataInicio = document.getElementById('data-inicio');
const btnSubmit = document.getElementById('btn-submit');
const curriculoContainer = document.getElementById('curriculo-container');
const btnClear = document.getElementById('clear');
const erros = document.createElement('ul');
const erroContainer = document.getElementById('erro-container');
const regexDate = /([0-2][0-9]|[3][01])-(0[1-9]|1[0-2])-[0-9]{2}/g;
const regexCPF = /\d{11}/g;
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
    li.innerHTML = `o campo ${msg} é obrigatório`;
    erros.appendChild(li);
    error = true;
  }
}

function checkFormat(teste, msg) {
  if (teste) {
    const li = document.createElement('li');
    li.innerHTML = msg;
    erros.appendChild(li);
    error = true;
  }
}

function checkError() {
  checkEmpty(nome.value, 'nome');
  checkEmpty(endereco.value, 'endereço');
  checkEmpty(cidade.value, 'cidade');
  checkEmpty(cargo.value, 'cargo');
  checkEmpty(decricaoCargo.value, 'descrição do cargo');

  checkFormat(!email.value.includes('@'), 'email inválido');
  checkFormat(!regexCPF.test(cpf.value), 'use apenas digitos no campo do cpf');
  checkFormat(!regexDate.test(dataInicio.value), 'data com o formato inválido');
  checkFormat(
    curriculo.value === 'Resumo do currículo',
    'o campo resumo do curriculo é obrigatório'
  );
  return error;
}

function renderErros() {
  console.log('input');
  erroContainer.appendChild(erros);
}

function renderCurriculo() {
  curriculoContainer.innerHTML = `
    Nome: ${nome.value}<br>     
    cpf: ${cpf.value}<br>
    Email: ${email.value}<br>
    Endereço: ${endereco.value}<br>
    Cidade: ${cidade.value} Estado: ${estado.value}<br>
    Residencia: ${apartamento.value === '' ? casa.value : apartamento.value}<br>
    Resumo do curriculo:<br>
    ${curriculo.value}<br>
    Cargo: ${cargo.value} 
    Data do inicio: ${dataInicio.value}<br><br>
    Descrição do cargo:<br>
    ${decricaoCargo.value}<br>
  `;
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
