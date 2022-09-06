const h1 = document.querySelector(".container h1");
const data = new Date();

function getDayWeek(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "segunda-feira";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "terça-feira";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "quarta-feira";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "quinta-feira";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "sexta-feira";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = ``;
      return diaSemanaTexto;
  }
}
function getMonthName(monthNumber) {
  let monthName;

  switch (monthName) {
    case 0:
      monthName = "janeiro";
      return monthName;
    case 1:
      monthName = "fevereiro";
      return monthName;
    case 2:
      monthName = "março";
      return monthName;
    case 3:
      monthName = "abril";
      return monthName;
    case 4:
      monthName = "maio";
      return monthName;
    case 5:
      monthName = "junho";
      return monthName;
    case 6:
      monthName = "julho";
      return monthName;
    case 7:
      monthName = "agosto";
      return monthName;
    case 8:
      monthName = "setembro";
      return monthName;
    case 9:
      monthName = "outubro";
      return monthName;
    case 10:
      monthName = "novembro";
      return monthName;
    case 11:
      monthName = "dezembro";
      return monthName;

    default:
      monthName = "";
      return monthName;
  }
}

h1.innerHTML = getDayWeek(data.getDay());
