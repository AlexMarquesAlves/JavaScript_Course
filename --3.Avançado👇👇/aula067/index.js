/**
 * Reduce ->
 */

// Some todos os números (Reduce)
// retorne um array com numeros pares (Filter)
// Retorne um array com o Dobro dos Valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador;
}, 0); // Somado valores do array... ✔️
const evenNumber = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []); // valores pares do array... ✔️
const oddNumber = numeros.reduce((acumulador, valor) => {
  if (valor % 2 !== 0) acumulador.push(valor);
  return acumulador;
}, []); // valores ímpares do array... ✔️
const doble = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []); // Dobrado os valores do array... ✔️
console.log(total);
console.log(evenNumber);
console.log(oddNumber);
console.log(doble);
