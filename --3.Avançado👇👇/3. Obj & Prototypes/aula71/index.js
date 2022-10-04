// DefineProperty - DefineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // Valor
    writable: false, // pode alterar o valor
    configurable: false, //Configurável
  });
}

const p1=new Produto('Camiseta',20,3);
console.log(Object.keys(p1);

for (const chave in p1) {
  console.log(chave);
}
