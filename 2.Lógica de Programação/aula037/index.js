const nomes = ["Luiz", "Otávio", "Henrique"];

// For Classic
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
console.log("\n");
// For in
for (let i in nomes) {
  console.log(nomes[i]);
}
console.log("\n");
// For of
for (const valor of nomes) {
  console.log(valor);
}
console.log("\n");

nomes.forEach(function (valor, indice) {
  console.log(valor, indice);
});

console.log("--------------------------------------------------------");

const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",
  idade: 30,
};

for (let key in pessoa) {
  console.log(key, pessoa[i]);
}
