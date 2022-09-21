const relogio = document.querySelector(`.relogio`);
const iniciar = document.querySelector(`.iniciar`);
const pausar = document.querySelector(`.pausar`);
const zerar = document.querySelector(`.zerar`);

iniciar.addEventListener(`click`, (event) => {
  alert(`Cliquei no iniciar`);
});

pausar.addEventListener(`click`, (event) => {
  alert(`Cliquei no pausar`);
});

zerar.addEventListener(`click`, (event) => {
  alert(`Cliquei no zerar`);
});
