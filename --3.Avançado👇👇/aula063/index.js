const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Julia"];

//  nomes.splice(indice, delete, elem1, elem2, elem3)

/**
 *
 * const removidos = nomes.splice(-2, Number.MAX_VALUE);
 * console.log(nomes, removidos);
 * const removidos = nomes.splice(3, 0, "Luiz");
 * console.log(nomes, removidos);
 * const removidos = nomes.splice(3, 2, "Luiz", "Otávio");
 * console.log(nomes, removidos);
 *
 */

/* pop */
const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);
/* shift */
const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);
/* push */
nomes.splice(nomes.length, 0, "Luiz");
console.log(nomes);
