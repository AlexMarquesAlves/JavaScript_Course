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
const caneca = Object.assign({}, produto, { material: "Porcelana" });

caneca.nome = "Outro nome";
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
