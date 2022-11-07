const path = require("path");

/** Função */
// const multiplicacao = require("./B/C/D/mod");
// console.log(multiplicacao(2, 2));

/** Numero */
// const n = require("./B/C/D/mod");
// console.log(n);

/** Classe */
const Dog = require("./z/mod2.js");

const pug = new Dog("Rex");
pug.latir();
console.log("");
/** Navegação
 * ./ => seguir adiante
 * ../ => volver atrás
 */

console.log(path.resolve(__dirname, "..", "..", "arquivos", "imagens"));
console.log(path.resolve(__dirname, ".", ".", "arquivos", "imagens"));
