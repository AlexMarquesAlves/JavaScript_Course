// argumentos que sustenta todos os argumentos enviados
function funcao(a, b, c) {
  let total = 0;

  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total, a, b, c);
}

// funcao("Valor");

function funcao2(a, b) {
  b = b || 0;
  console.log(a + b);
}

// funcao2(2);

function funcao3({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);

  let obj = { nome: "Luiz", sobrenome: "Otávio", idade: 20 };
}

// funcao3(obj);

function funcao4([valor1, valor2, valor4]) {
  console.log(valor1, valor2, valor3);
}

// funcao3(["Luiz Otávio", "Miranda", 30]);

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
}
conta("+", 0, 20, 30, 40, 50);
conta("-", 0, 20, 30, 40, 50);
conta("/", 0, 20, 30, 40, 50);
conta("*", 0, 20, 30, 40, 50);
