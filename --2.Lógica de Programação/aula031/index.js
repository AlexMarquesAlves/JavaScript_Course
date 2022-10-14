const verdadeira = true;

let nome = "Luiz";
var nome2 = "Luiz";

if (verdadeira) {
  let nome = "Otávio";
  // console.log(nome, nome2);

  if (verdadeira) {
    let nome = "Outra coisa";
    console.log(nome, nome2);
  }
}
