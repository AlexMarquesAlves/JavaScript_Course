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

  if (!altura) {
    setResult("Altura Inválida", false);
    return;
  }

  const imc = getIMC(peso, altura);
  console.log(imc);
});

function getIMCLevel(imc) {}

function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  const p = criaP();
  p.innerHTML = msg;
  result.appendChild(p);
}
