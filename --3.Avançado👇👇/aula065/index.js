// Filter, Map, Reduce

// Retorne os números maiores que 10
const num = [5, 50.8, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numMoreThanTen = num.filter(function (value) {
  return value > 10;
});
console.log(numMoreThanTen);
