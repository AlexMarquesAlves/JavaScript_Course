/**
 * Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos
 */

// Retorne os números maiores que 10
const num = [5, 50.8, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = num.filter((value, index, array) => {
//   console.log(value, index, array);
//   return value > 10;
// });

const numMoreThanTen = num.filter((value) => value > 10);
console.log(numMoreThanTen);
