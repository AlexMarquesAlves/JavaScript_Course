/*
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa["nome"]);
console.log(pessoa["sobrenome"]);
*/

const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Otávio";
pessoa1.idade = 30;
pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome`;
};
pessoa1.getBirthday = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getBirthday());

// Factory function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Luiz", "Otávio");
console.log(p1.nomeCompleto);
