// const nomes = ["Eduardo", "Maria", "Joana"];
const names = new Array("Eduardo", "Maria", "Joana");
nomes[2] = "joão";
delete nomes[2];
console.log(nomes);

// const nome = "Luiz Otávio Miranda";
// const nomes = nome.split(" ");
const nomes = ["Luiz", "Otávio", "Miranda"];
const nome = nomes.join(" ");

console.log(nomes);
