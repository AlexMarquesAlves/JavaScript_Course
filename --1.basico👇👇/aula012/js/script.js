let name = prompt(`Olá! Qual vosso nome? `);
alert(`Bem-Vindo! 😍 ${name}`);
// confirm(`Realmente desejas Sair 😒? `);

// Exercicio
const num1 = Number(prompt(`Digite um número. `));
const num2 = Number(prompt(`Digite outro número. `));
let soma = num1 + num2;
let diferenca = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

console.log(`  -->Soma`);
console.log(`A Soma ${num1} + ${num2} = ${soma}`);
console.log(`  -->Subtração`);
console.log(`A Subtração ${num1} - ${num2} = ${diferenca}`);
console.log(`  -->Multiplicação`);
console.log(`A Multiplicação ${num1} * ${num2} = ${multiplicacao}`);
console.log(`  -->Divisão`);
console.log(`A Divisão ${num1} / ${num2} = ${divisao}`);
