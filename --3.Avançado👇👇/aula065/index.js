// Filter, Map, Reduce

// Retorne os números maiores que 10
const num = [5, 50.8, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(value, index, array) {
  if (value > 10) {
    return true;
  } else {
    return false;
  }
}

const numMoreThanTen = num.filter(callbackFilter);
console.log(numMoreThanTen);
