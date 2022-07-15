/**
 * Primitivos (imutáveis) - string, number, boolean, undefined null (bigint, symbol)
 */

/*
let nome = "Luiz";
nome[0] = "R"; // não ocorre nada
console.log(nome[0], nome);

*/

let a = "A";
let b = a; // Cópia
console.log(a, b);

a = "Outra coisa";
console.log(a, b);
