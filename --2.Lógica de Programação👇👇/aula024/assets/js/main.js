// Capturar evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(`Evento ${e} Previnido.`);
});

function criaP() {
  const p = document.createElement("p");
  return p;
}
