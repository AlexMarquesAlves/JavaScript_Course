const { texto, arquivos } = require("./base");

// * (opcionais) 0 ou n vezes {0,}
// + (obrigatório) 1 ou n vezes {1,}
// ? (opcionais) 0 ou n vezes {0,1}
// \ caractere de escape
// {n,m} minimum, maximum

// console.log(texto);
// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1));

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g;

for (const arquivo of arquivos) {
  const valido = arquivo.match(regExp2);
  // if (!valido) continue;

  console.log(arquivo, valido);
}
