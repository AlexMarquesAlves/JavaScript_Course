const nome = ["Luiz", "Otávio", "Henrique"];

// For Classic
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
// For in
for (let i in nome) {
  console.log(nome[i]);
}
// For of
for (const valor of nome) {
  console.log(valor);
}
