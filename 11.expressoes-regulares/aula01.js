// g - global (encontra todas as ocorrências)
// i - insensitive
const { texto } = require("./base");

// const regExp1 = /(Teve) (5 filho)s/;
const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/;
const found = regExp1.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}
