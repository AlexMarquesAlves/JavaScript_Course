// new Date(0);

function getTimeFromSeconds(seconds) {
  const data = new Date(seconds * 1000);

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    second: "2-digit",
    timeZone: `GMT`,
  });
}

const relogio = document.querySelector(`.relogio`);
const iniciar = document.querySelector(`.iniciar`);
const pausar = document.querySelector(`.pausar`);
const zerar = document.querySelector(`.zerar`);
let seconds = 0;
let timer;

function startWatch() {
  timer = setInterval(() => {
    seconds++;
    relogio.innerHTML = getTimeFromSeconds(seconds);
  }, 1000);
}

iniciar.addEventListener(`click`, (event) => {
  startWatch();
});

pausar.addEventListener(`click`, (event) => {
  clearInterval(timer);
});

zerar.addEventListener(`click`, (event) => {
  clearInterval(timer);
  relogio.innerHTML = `00:00:00`;
});
