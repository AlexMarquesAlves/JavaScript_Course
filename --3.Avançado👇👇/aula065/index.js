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

console.log("----------------------------------------------------------------");

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const pessoasWithLargeName = pessoas.filter((obj) => obj.nome.length >= 5); // Filtrado pessoas com nome com 5 letras ou mais... ✔️
const pessoasMoreThan50Years = pessoas.filter((obj) => obj.idade > 50); // Filtrado pessoas com mais de 50 anos... ✔️
console.log(pessoasWithLargeName);
console.log(pessoasMoreThan50Years);
