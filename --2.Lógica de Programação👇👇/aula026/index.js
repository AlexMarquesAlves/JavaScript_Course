// Object Data
function objectDateOne() {
  const tresHoras = 60 * 60 * 3 * 1000;
  const umDia = 60 * 60 * 24 * 1000;
  const data = new Date(0 + tresHoras + umDia);
  console.log(data.toString());
}

function objectDateTwo() {
  const data = new Date(2022, 8, 05, 12, 30);
  console.log(data.toString());
}

function objectDateTree() {
  const data = new Date("2019-04- 20:20:59");
  console.log("Dia", data.getDate());
  console.log("Mês", data.getMonth() + 1); // Mês começa do zero
  console.log("Ano", data.getFullYear());
  console.log("Hora", data.getHours());
  console.log("Min", data.getMinutes());
  console.log("Seg", data.getSeconds());
  console.log("ms", data.getMilliseconds());
  console.log("Dia semana", data.getDay()); // 0 - Domingo, 6 - Sábado
  console.log(data.toString());
}
console.log("");
objectDateOne();
console.log("");
objectDateTwo();
console.log("");
objectDateTree();
console.log("");

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hor = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hor}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
