const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const concatInfos = (arrayInit, arrayConcat) => {
  for (let index = 0; index < arrayInit.length; index += 1) {
    arrayInit[index] += arrayConcat[index];
  }
  return arrayInit;
};

const customerInfo = (order) => {
  const arrayClient = concatInfos(['', 'Telefone: '], Object.values(order));
  const arrayAdress = concatInfos(
    ['R. ', 'Nº: ', 'AP: '],
    Object.values(order.address)
  );
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${[
    ...arrayClient,
    ...arrayAdress,
  ].join(', ')}.`;
};

console.log(customerInfo(order));

const calcTotal = (object, total = 0) => {
  const arrayKeys = Object.keys(object);
  for (let index = 0; index < arrayKeys.length; index += 1) {
    if (typeof object[arrayKeys[index]] === 'object') {
      total = calcTotal(object[arrayKeys[index]], total);
    }
  }
  if (object.price) total += object.price;
  return total;
};

const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  order.order.pizza = {
    muzzarella: {
      amount: 1,
      price: 20,
    },
    calabresa: {
      amount: 1,
      price: 15,
    },
  };
  return calcTotal(order);
};

console.log(orderModifier(order));

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para:
// Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu
// pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
