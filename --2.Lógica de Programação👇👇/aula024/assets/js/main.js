// Capturar evento de submit do formulário
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(`Evento ${e} Previnido.`); // temp
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");
  console.log(`Peso: ${inputPeso.value}`); // temp
  console.log(`Altura: ${inputAltura.value}`); // temp

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult("Peso Inválido", false);
    return;
  }
});

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  const p = criaP();
}
