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
