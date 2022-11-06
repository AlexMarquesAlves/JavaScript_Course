/**
 * Primitivos (imutáveis) - string, number, boolean, undefined null (bigint, symbol) - Valores copiados
 *
 * Referência (Mutável) - array, object, function - Passado por referência
 */

// Valores primitivos --> São Copiados
let nome = "Luiz";
nome[0] = "R"; // não ocorre nada
console.log(nome[0], nome);

let a1 = "A";
let b1 = a1; // Cópia
console.log(a1, b1);

a1 = "Outra coisa";
console.log(a1, b1);

// Valores por referência --> São Referenciados
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

const d = {
  nome: "Luiz",
  sobrenome: "Otavio",
};
const e = { ...d };

a.nome = "Joao";
console.log(d);
console.log(e);
