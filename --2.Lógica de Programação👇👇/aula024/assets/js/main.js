// Capturar evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(`Evento ${e} Previnido.`); // temp
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");
  console.log(`Peso: ${inputPeso.value}`);
  console.log(`Altura: ${inputAltura.value}`);
});

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  const p = criaP();
}
