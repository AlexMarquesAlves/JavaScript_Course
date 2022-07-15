// const pessoa1 = {
//   nome: `Luiz`,
//   sobrenome: `Miranda`,
//   idade: 25,
// };
// const pessoa2 = {
//   nome: `Maria`,
//   sobrenome: `Oliveira`,
//   idade: 55,
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa1 = criaPessoa("Luiz", "Otavio", 25);
