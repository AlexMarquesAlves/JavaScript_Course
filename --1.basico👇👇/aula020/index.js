/**
 * Primitivos (imutáveis) - string, number, boolean, undefined null (bigint, symbol)
 *
 * Referência (Mutável) - array, object, function
 */

/*
let nome = "Luiz";
nome[0] = "R"; // não ocorre nada
console.log(nome[0], nome);

let a = "A";
let b = a; // Cópia
console.log(a, b);

a = "Outra coisa";
console.log(a, b);
*/

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);
