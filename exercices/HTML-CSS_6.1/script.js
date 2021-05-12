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

const selectionState = document.getElementById('estado');
const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const myHeaders = new Headers();
const myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
};

let obj = {};
fetch(url, myInit)
  .then((resp) => resp.text())
  .then((resp) => JSON.parse(resp))
  .then((resp) => renderStates(resp));

const curriculoPronto = `
Nome: ${nome.value}  cpf: ${cpf.value}
Email: ${email.value}
Endereço: ${endereco.value}
Cidade: ${cidade.value} Estado: ${estado.value}
Residencia: ${apartamento.value === '' ? casa.value : apartamento.value}

Resumo do curriculo:
${curriculo.value}

cargo: ${cargo.value} Data do inicio: ${dataInicio.value}

descrição do cargo:
${decricaoCargo.value}

`;

function renderStates(arrObjStates) {
  for (let index = 0; index < arrObjStates.length; index += 1) {
    const option = document.createElement('option');
    if (index === 0) option.selected = true;
    option.value = arrObjStates[index].sigla;
    option.innerHTML = arrObjStates[index].nome;
    selectionState.appendChild(option);
  }
}

function submitForm(event) {
  event.preventDefault();
  if (nome.value === '') return alert('o campo nome é obrigatório');
  if (!email.value.includes('@')) return alert('email inválido');
  if (!/\d{11}/g.test(cpf.value)) {
    return alert('use apenas digitos no campo do cpf');
  }
  if (endereco.value === '') return alert('o campo endereço é obrigatório');
  if (cidade.value === '') return alert('o campo cidade é obrigatório');
  if (curriculo.value === 'Resumo do currículo') {
    return alert('o campo resumo do curriculo é obrigatório');
  }
  if (cargo.value === '') return alert('o campo cargo é obrigatório');
  if (decricaoCargo.value === '') {
    return alert('o campo descrição de cargo é obrigatório');
  }
  if (
    !/([0-2][0-9]|[3][01])-(0[1-9]|1[0-2])-[0-9]{2}/g.test(dataInicio.value)
  ) {
    return alert('data com o formato inválido');
  }

  curriculoContainer.innerHTML = `
    Nome: ${nome.value}     cpf: ${cpf.value}<br>
    Email: ${email.value}<br>
    Endereço: ${endereco.value}<br>
    Cidade: ${cidade.value} Estado: ${estado.value}<br>
    Residencia: ${
      apartamento.value === '' ? casa.value : apartamento.value
    }<br><br>
    Resumo do curriculo:<br>
    ${curriculo.value}<br><br>
    cargo: ${cargo.value} Data do inicio: ${dataInicio.value}<br><br>
    descrição do cargo:<br>
    ${decricaoCargo.value}<br>
  `;
}

btnSubmit.addEventListener('click', submitForm);

function clear() {
  curriculoContainer.innerHTML = '';
}

btnClear.addEventListener('click', clear);
