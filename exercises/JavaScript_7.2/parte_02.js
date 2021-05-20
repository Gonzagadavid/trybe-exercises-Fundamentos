const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// 1-Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três
// parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addKey = (object, key, value) => (object[key] = value);
addKey(lesson2, 'turno', 'manhã');
console.log(lesson2);

// 2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como
// parâmetro.
const keysList = (object) => Object.keys(object).join(';\n');

console.log(keysList(lesson2));

// 3-Crie uma função para mostrar o tamanho de um objeto.
const objectLength = (object) => Object.keys(object).length;

console.log(objectLength(lesson2));

// 4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como
// parâmetro.
const valuesList = (object) => Object.values(object).join(';\n');

console.log(valuesList(lesson2));

// 5-Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign.
//  Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.
//  Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = { lesson1: {}, lesson2: {}, lesson3: {} };
Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);
allLessons.lesson2.turno = 'noite';

console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

// 6-Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes
// em todas as aulas.
function totalStudent(object) {
  let total = 0;
  for (let key in object) {
    total += object[key].numeroEstudantes;
  }
  return total;
}

console.log(totalStudent(allLessons));

// 7-Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (object, index) => Object.values(object)[index];

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// 8-Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir
// três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyPair = (object, key, value) => {
  const arrayPair = Object.entries(object);
  let bool = false;

  for (let index = 0; index < arrayPair.length; index += 1) {
    if (arrayPair[index].includes(key) && arrayPair[index].includes(value)) {
      bool = true;
    }
  }

  return bool;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

//Bonus
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado
// no exercício 5.
const qtxStudents = (object, materiaSelect) => {
  let students = 0;
  for (let key in object) {
    if (object[key].materia === materiaSelect) {
      students += object[key].numeroEstudantes;
    }
  }
  return students;
};
console.log(qtxStudents(allLessons, 'Matemática'));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora,
// as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
const createReport = (object, professor) => {
  const objReport = { professor, aulas: [], estudantes: 0 };
  for (let key in object) {
    if (object[key].professor === professor) {
      objReport.aulas.push(object[key].materia);
      objReport.estudantes += object[key].numeroEstudantes;
    }
  }
  return objReport;
};
console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
