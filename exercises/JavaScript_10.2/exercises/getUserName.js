// Código-base para os exercícios 2 e 3:
// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa
// busca é uma Promise , que é utilizada pelo método getUserName .
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => new Promise((resolve, reject) => {
  if (users[id]) {
    return resolve(users[id]);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userID) => findUserById(userID).then((user) => user.name);

module.exports = getUserName;
