/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o,'prop')
 * ... (spread)
 *
 * // ya hemos visto
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (Define varias propriedades)
 * Object.defineProperty (Define uma propriedade)
 */
const produto = { nome: "Produto", preco: 1.8 };
Object.defineProperty(produto, "nome", {
  writable: false,
  configurable: false,
});
// console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
produto.nome = "Outra coisa";
delete produto.nome;
console.log(produto);
