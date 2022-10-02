/**
 * Map -> retorna um novo array, com o mesmo tamanho do original
 */

// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2); // Dobrado valores do array... ✔️
console.log(numerosEmDobro);

/** Para cada Elemento
 *
 * Retorne apenas uma string com o nome da pessoa
 * remova apenas a chave "nome" do objeto
 * Adicione uma chave id em cada objeto
 */
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const nomes = pessoas.map((obj) => obj.nome); // Retornado apenas string com nome das pessoas... ✔️
console.log(nomes);
