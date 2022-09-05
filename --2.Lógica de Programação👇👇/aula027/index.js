// Switch | Case

function objectDate(data) {
  const data = new Date("1987-04-21 00:00:00");
  const diaSemana = data.getDay();
  let diaSemanaTexto;

  if (diaSemanaTexto === 0) {
    diaSemanaTexto = "Domingo";
  } else if (diaSemanaTexto === 1) {
    diaSemanaTexto = "Segunda";
  } else if (diaSemanaTexto === 2) {
    diaSemanaTexto = "Terça";
  } else if (diaSemanaTexto === 3) {
    diaSemanaTexto = "Quarta";
  } else if (diaSemanaTexto === 4) {
    diaSemanaTexto = "Quinta";
  } else if (diaSemanaTexto === 5) {
    diaSemanaTexto = "Sexta";
  } else if (diaSemanaTexto === 6) {
    diaSemanaTexto = "Sábado";
  } else {
    diaSemanaTexto = ``;
  }
}
