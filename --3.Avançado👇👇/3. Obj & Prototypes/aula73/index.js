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
Object.freeze(produto);
produto.nome = "outro nome";
const caneca = Object.assign({}, produto, { material: "Porcelana" });

console.log(Object.keys(produto));
