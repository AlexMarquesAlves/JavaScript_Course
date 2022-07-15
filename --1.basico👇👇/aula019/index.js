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

const pessoa1 = criaPessoa("Luiz", "Miranda", 25);
const pessoa2 = criaPessoa("Maria", "Oliveira", 25);
const pessoa3 = criaPessoa("Joao", "Moreira", 25);
const pessoa4 = criaPessoa("Junior", "Lara", 25);
const pessoa5 = criaPessoa("Jean", "Otavio", 25);

console.log(
  pessoa1.nome,
  pessoa2.nome,
  pessoa3.nome,
  pessoa4.nome,
  pessoa5.nome
);
console.log(
  pessoa1.sobrenome,
  pessoa2.sobrenome,
  pessoa3.sobrenome,
  pessoa4.sobrenome,
  pessoa5.sobrenome
);
