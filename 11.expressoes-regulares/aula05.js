const { alfabeto } = require("./base");

// [abc] -> Conjunto [^algumacoisa] negacao
// [0-9] -> minimum, maximum
console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // Negacao
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // Unicode
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W+/g));
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g));
console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S+/g));
