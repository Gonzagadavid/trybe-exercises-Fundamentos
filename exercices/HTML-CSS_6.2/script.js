const dataInicio = document.getElementById('dataInicio');
const btnSubmit = document.getElementById('btn-submit');
const curriculoContainer = document.getElementById('curriculo-container');
const btnClear = document.getElementById('clear');
const erros = document.createElement('ul');
const selectionState = document.getElementById('estado');
const dateFormat = dataInicio.DatePickerX.init({ format: 'dd/mm/yy' });

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

btnSubmit.addEventListener('click', (_) => (dataInicio.readonly = 'false'));

function clear() {
  curriculoContainer.innerHTML = '';
}

btnClear.addEventListener('click', clear);

new window.JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    endereco: {
      required: true,
    },
    cidade: {
      required: true,
    },
    curriculo: {
      required: true,
    },
    cargo: {
      required: true,
    },
    data: {
      required: true,
    },
    descricaoCargo: {
      required: true,
    },
    dataInicio: {
      required: true,
    },
    cpf: {
      required: true,
      strength: {
        custom: '[0-9]{11}',
      },
    },
  },

  messages: {
    name: {
      required: 'Campo Obrigatório',
    },
    email: {
      required: 'Campo Obrigatório',
      email: 'Por favor digite um email valido',
    },
    endereco: {
      required: 'Campo Obrigatório',
    },
    cidade: {
      required: 'Campo Obrigatório',
    },
    curriculo: {
      required: 'Campo Obrigatório',
    },
    cargo: {
      required: 'Campo Obrigatório',
    },
    data: {
      required: 'Campo Obrigatório',
    },
    descricaoCargo: {
      required: 'Campo Obrigatório',
    },
    dataInicio: {
      required: 'Campo Obrigatório',
    },
    cpf: {
      required: 'Campo Obrigatório',
      strength: 'Somente Digitos',
    },
  },

  focusWrongField: true,

  submitHandler: function (form, values, ajax) {
    curriculoContainer.innerHTML = '';
    for (let key in values) {
      const p = document.createElement('p');
      p.innerHTML = `${key}: ${values[key]}`;
      curriculoContainer.appendChild(p);
    }
  },
});
