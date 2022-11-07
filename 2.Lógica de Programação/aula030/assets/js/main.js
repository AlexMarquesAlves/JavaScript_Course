const h1 = document.querySelector(".container h1");
const data = new Date();

function getDayWeek(dayWeek) {
  const daysWeek = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  return daysWeek[daysWeek];
}

function getMonthName(monthNumber) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return meses[monthNumber];
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function createDate(data) {
  const dayWeek = data.getDay();
  const monthNumber = data.getMonth();

  const dayName = getDayWeek(dayWeek);
  const monthName = getMonthName(monthNumber);

  return (
    `${dayName}, ${data.getDate()} de ${monthName}` +
    ` de ${data.getFullYear()} ` +
    `${zeroAEsquerda(data.getHours()}:${zeroAEsquerda(data.getMinutes()}`
  );
}

h1.innerHTML = createDate(data);
