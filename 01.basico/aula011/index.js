/** Aritméticos
 * + Adição / Concatenação
 * ** Potenciação
 * % Resto da divisão
 */

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log(`Exemplo 1`);
console.log((num1 + num2) * num3);

/**  Precedência dos operadores aritméticos
 * () Parenteses
 * ** Potenciação
 * * Multiplicação
 * / % Divisão y Resto da divisão
 * + - Adição y Subtração
 */

let contador = 10;
contador++; // 11
++contador; // 12
contador++; // 13
++contador; // 14
console.log(`Exemplo incremento ++`);
console.log(contador);

console.log(`Exemplo decremento --`);
console.log(--contador); // 13
console.log(--contador); // 12
console.log(--contador); // 11
console.log(--contador); // 10

console.log(`Exemplo ++ incremento com valor definido`);
contador = 0;
contador += 2; // contador = contador + 2
contador += 2; // contador = contador + 2
contador += 2; // contador = contador + 2
console.log(contador);

console.log(`Exemplo -- Decremento com valor definido`);
contador = 8;
contador -= 2; // contador = contador - 2
contador -= 2; // contador = contador - 2
contador -= 2; // contador = contador - 2
console.log(contador);

console.log(`Exemplo * Multiplicação com valor definido`);
contador = 2;
contador *= 2; // contador = contador * 2
contador *= 2; // contador = contador * 2
contador *= 2; // contador = contador * 2
console.log(contador);

console.log(`Exemplo ** Potenciação com valor definido`);
contador = 2;
contador **= 10; // contador = contador ** 2
console.log(contador);

// NaN - Not a Number
const num4 = 10;
const num5 = "5";
console.log(num4 * num5);

// convertendo string de numero em um 'Int'
let num6 = 10;
let num7 = parseInt("5");
console.log(`Convertendo string de numero em um Int`);
console.log(num6 + num7);

// convertendo string de numero em um 'Float'
num6 = 10;
num7 = parseFloat("5.2");
console.log(`Convertendo string de numero em um Float`);
console.log(num6 + num7);

// convertendo string de numero em um 'Number'
num6 = 10;
num7 = Number("5.5");
console.log(`Convertendo string de numero em um 'Number'`);
console.log(num6 + num7);

// convertendo string em um 'Number' ⁉️
num6 = 10;
num7 = Number("Luiz");
console.log(`Convertendo string em um 'Number' ⁉️`);
console.log(num6 + num7);
