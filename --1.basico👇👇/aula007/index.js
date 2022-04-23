/**
 * Regras para uso de Constantes
 *
 * Não podemos usar palavras reservadas para criá-las.
 * Precisam possuir nomes significativos.
 * Não pode iniciar-se com um número.
 * Não pode conter espaços ou traços.
 * Utiliza-se camelCase.
 * Case-sensitive.
 * Não pode-se modificar o valor de uma constante
 * NÃO UTILIZE VAR, UTILIZE COST.
 */

const nome = `João`;
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);
let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);
