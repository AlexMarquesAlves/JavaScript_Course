try {
  // Executado quando não há erros
  console.log("Abri um arquivo");
  console.log("manipulei o aquivo e gerou erro");
  console.log("fechei o arquivo");
} catch (error) {
  // Executado quando há erros
  console.log("tratando erro aqui");
} finally {
  // sempre
  console.log("FINALLY: Sou sempre sou executado");
}

function retornaHora(data) {
  if (data && !data instanceof Date) {
    throw new TypeError("Esperando instância de Date");
  }

  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

const hora = retornaHora(new Date());
console.log(hora);
