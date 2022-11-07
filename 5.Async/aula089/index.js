function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Cai no erro");
        return;
      }

      resolve(msg.toUpperCase() + `- Passei na promise`);
      return;
    }, time);
  });
}

async function executa() {
  try {
    const fase1 = await wait("Fase 1", rand());
    console.log(fase1);
    const fase2 = await wait("Fase 2", rand());
    console.log(fase2);
    const fase3 = await wait("Fase 3", rand());
    console.log(fase3);
    console.log("Terminamos na fase:", fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();

/**
 * Pending => Pendente
 * Fulfilled => Resolvida
 * Rejected => Rejeitada
 */
