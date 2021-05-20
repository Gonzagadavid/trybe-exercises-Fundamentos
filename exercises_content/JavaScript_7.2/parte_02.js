const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser
// exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".

const renderSkills = (object) => {
  const arrayObject = Object.keys(object);
  for (let index = 0; index < arrayObject.length; index += 1) {
    console.log(`${arrayObject[index]}, Nível: ${object[arrayObject[index]]}`);
  }
};

renderSkills(student1);
renderSkills(student2);
