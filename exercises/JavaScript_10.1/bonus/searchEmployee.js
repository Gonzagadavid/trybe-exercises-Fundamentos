const professionalBoard = require('./professionalBoard');

// Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação
//  disponívelsobre ele( firstName , lastName , specialities ). Você também deverá criar os
// testes para essa função. Sua função deverá então retornar os resultados da busca pelo id
//  para aquele funcionário e a informação consultada. Caso o id não conste no quadro de
//  funcionários, sua função deve retornar o erro "ID não identificada" . Se a informação que se
//  quer acessar não existir, a função deve retornar o erro "Informação indisponível" .
const searchEmployee = (idFind, detail) => {
  if (!Object.keys(professionalBoard[0]).includes(detail)) throw new Error('Informação indisponível');
  if (!professionalBoard.some(({ id }) => id === idFind)) throw new Error('ID não identificado');
  return professionalBoard.find(({ id }) => id === idFind)[detail];
};

module.exports = searchEmployee;
