/**
 * Primitivos (imutáveis) - string, number, boolean, undefined null (bigint, symbol) - Valores copiados
 *
 * Referência (Mutável) - array, object, function - Passado por referência
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

/*
let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push("Luiz");
console.log(a, c);
*/

const a = {
  nome: "Luiz",
  sobrenome: "Otavio",
};
const b = { ...a };

a.nome = "Joao";
console.log(b);
