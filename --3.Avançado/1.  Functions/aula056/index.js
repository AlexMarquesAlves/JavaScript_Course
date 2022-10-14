// Factory Function
function ciraPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome=valor.join();
    }

    fala(assunto) {
      return `${nome} está ${assunto}.`;
    },
    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = ciraPessoa("Luiz", "Otávio", 1.8, 80);
console.log(p1.imc());
const p2 = ciraPessoa("Maria", "Joaquina", 1.6, 42);
console.log(p2.imc());
console.log(p2.fala("falando sobre JS"));
