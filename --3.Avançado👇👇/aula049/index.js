// Declaração de função (Function hoisting)
falaOi();

function falaOi() {
  console.log("Oie");
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado.");
};

function executaFuncao(funcao) {
  console.log("vou executar sua função abaixo");
  funcao();
}

executaFuncao(souUmDado);
