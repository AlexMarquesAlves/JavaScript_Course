function Calculadora() {
  this.display = document.querySelector(`.display`);

  this.clickCapture = () => {
    document.addEventListener(`click`, (event) => {
      const el = event.target;

      if (el.classList.contains("btn-num")) {
        this.addNumDisplay(el);
      }
      if (el.classList.contains("btn-clear")) {
        this.clear();
      }
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
  };
  this.clear = () => {
    this.display.value = ``;
  };

  this.start = () => {
    this.clickCapture();
  };
}

const calculadora = new Calculadora();
calculadora.start();
