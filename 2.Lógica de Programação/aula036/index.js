const frutas = ["Pera", "Maça", "Uva"];

const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",
  idade: 30,
};

for (let key in pessoa) {
  console.log(key, pessoa[key]);
}
