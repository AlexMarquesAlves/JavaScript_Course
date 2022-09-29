// Função Construtora => Objetos
// Factory Functions => Objetos
// Construtora => Sempre iniciada com letra maiúscula... (new) 'Constructor'

function Pessoa(nome, sobrenome) {
  // Atributos Privados
  const ID = 123456;

  const metodoInterno = function () {};

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(`${this.nome}: sou um método`);
  };
}

const p1 = new Pessoa("Luiz", "Otávio");
const p1 = new Pessoa("Maria", "Oliveira");

p2.metodo();
