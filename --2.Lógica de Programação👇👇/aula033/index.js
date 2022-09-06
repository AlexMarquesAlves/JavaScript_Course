const person = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 230,
  },
};

const {
  nome: name = "",
  sobrenome,
  endereco: { rua: r, numero: n },
  ...rest
} = person;
console.log(name, sobrenome, r, n, rest);
