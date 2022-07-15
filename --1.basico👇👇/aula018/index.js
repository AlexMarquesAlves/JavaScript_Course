// function saudacao(nome) {
//   return `Bom Dia ${nome}!`;
// }

// const variavel = saudacao("Leo");
// console.log(variavel);

function soma(x = 1, y = 1) {
  const resultado = x + y;
  return resultado;
}

// console.log(soma(2, 2));
// console.log(soma(3, 6));
// console.log(soma(5, 10));

// const resultado = soma(4, 2);
// console.log(resultado);

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
