// (condição) ? 'valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 500;
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuario normal";

const corUsuario = null;
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);
