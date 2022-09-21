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

document.addEventListener(`click`, (e) => {
  const el = e.target;

  if (el.classList.contains(`zerar`)) {
    relogio.classList.remove(`pausado`);
    clearInterval(timer);
    relogio.innerHTML = `00:00:00`;
    seconds = 0;
  }

  if (el.classList.contains(`iniciar`)) {
  }

  if (el.classList.contains(`pausar`)) {
  }
});

iniciar.addEventListener(`click`, (event) => {});

pausar.addEventListener(`click`, (event) => {});

zerar.addEventListener(`click`, (event) => {});
