class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }

  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

pessoa2.prototype.falar = () => {
  console.log(`${this.nome} está falando.`);
};
const p1 = new Pessoa("Luiz", "Otávio");
console.log(p1);
const p2 = new Pessoa2("Luiz", "Otávio");
console.log(p2);
