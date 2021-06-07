// // Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
// // 1-A 2-B 3-C
// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: 'Mars',
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: 'kilometers',
//   },
// };

// const venus = {
//   name: 'Venus',
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: 'kilometers',
//   },
// };

// const jupiter = {
//   name: 'Jupiter',
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: 'kilometers',
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?
// 1-A 2-C 3-B
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: 'Mars',
  distanceFromSun: {
    value: 227900000,
    measurementUnit: 'kilometers',
  },
};

const venus = {
  name: 'Venus',
  distanceFromSun: {
    value: 108200000,
    measurementUnit: 'kilometers',
  },
};

const jupiter = {
  name: 'Jupiter',
  distanceFromSun: {
    value: 778500000,
    measurementUnit: 'kilometers',
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C
