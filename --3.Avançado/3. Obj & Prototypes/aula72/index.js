// DefineProperty - Getters e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    configurable: false, //Configurável
    get: function () {
      return estoque;
    },
    set: function (value) {
      if (typeof value === "Number") {
        console.log("Bad value");
        return;
      }

      estoquePrivado = value;
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace("coisa", "");
      nome = valor;
    },
  };
}

// const p1 = new Produto("Camiseta", 20, 3);
// console.log(p1);
// p1.estoque = "asasasas";
// console.log(p1.estoque);

const p2 = criaProduto("Camiseta");
p2.nome = "Qualquer coisa";
console.log(p2.nome);
