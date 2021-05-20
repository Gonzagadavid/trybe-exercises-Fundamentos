// No exemplo acima, você viu que há diferentes formas de associar chaves e valores a um objeto.
// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles:
// um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com
// a nova chave adicionada nele.

const addProped = (object, key, value) => (object[key] = value);

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

addProped(customer, 'lastName', 'Ferreira');
console.log(customer);
addProped(customer, 'fullName', `${customer.firstName} ${customer.lastName}`);
console.log(customer);
