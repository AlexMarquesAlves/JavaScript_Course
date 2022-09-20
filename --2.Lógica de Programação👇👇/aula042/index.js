function ePaisagem(largura, altura) {
  return largura >= altura ? true : false;
}
console.log(ePaisagem(1920, 1080));

function ePaisagem2(largura, altura) {
  return largura >= altura;
}
console.log(ePaisagem2(1920, 1080));

const ePaisagem3 = (largura, altura) => largura >= altura;
console.log(ePaisagem3(1920, 1080));
