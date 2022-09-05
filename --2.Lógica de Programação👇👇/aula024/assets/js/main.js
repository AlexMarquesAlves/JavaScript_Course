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
  const nivelIMC = getIMCLevel(imc);

  const msg = `Seu IMC é ${imc} ${nivelIMC}`;

  setResult(msg, true);
});

function getIMCLevel(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5]; // Obesidade grau 3
  if (imc >= 34.9) return nivel[4]; // Obesidade grau 2
  if (imc >= 29.9) return nivel[3]; // Obesidade grau 1
  if (imc >= 24.9) return nivel[2]; // Sobrepeso
  if (imc >= 18.5) return nivel[1]; // Peso normal
  if (imc <= 18.4) return nivel[0]; // Abaixo do peso
}

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
