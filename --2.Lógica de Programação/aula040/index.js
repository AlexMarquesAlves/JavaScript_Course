const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// For of
for (const numero of numeros) {
  if (numero === 2 || numero === 5) {
    continue;
  }

  console.log(numero);
  if (numero === 7) {
    console.log("Saindo...");
    break;
  }
}
// For in
for (let i in numeros) {
  let numero = numeros[i];

  if (numero === 2 || numero === 5) {
    continue;
  }

  console.log(numero);
  if (numero === 7) {
    console.log("Saindo...");
    break;
  }
}
// For Classic
for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];

  if (numero === 2 || numero === 5) {
    continue;
  }

  console.log(numero);
  if (numero === 7) {
    console.log("Saindo...");
    break;
  }
}
// While
let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];

  if (numero === 2 || numero === 5) {
    i++;
    continue;
  }

  console.log(numero);
  if (numero === 7) {
    console.log("Saindo...");
    i++;
    break;
  }

  i++;
}
// Do While
let i = 0;
do {
  let numero = numeros[i];

  if (numero === 2 || numero === 5) {
    i++;
    continue;
  }

  console.log(numero);
  if (numero === 7) {
    console.log("Saindo...");
    i++;
    break;
  }

  i++;
} while (i < numeros.length);
