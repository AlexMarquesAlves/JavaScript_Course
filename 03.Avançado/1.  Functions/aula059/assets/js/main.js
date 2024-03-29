function Calculadora() {
  this.display = document.querySelector(`.display`);

  this.start = () => {
    this.clickCapture();
    this.enterCapture();
  };

  this.enterCapture = () => {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.resolve();
        return;
      }
    });
  };

  this.clickCapture = () => {
    document.addEventListener(`click`, (event) => {
      const el = event.target;

      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.resolve();
    });
  };

  this.resolve = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert("Conta inválida");
        return;
      }
    } catch (error) {
      alert("Conta inválida");
      return;
    }
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  this.clear = () => (this.display.value = ``);
  this.del = () => (this.display.value = this.display.slice(0, -1));
}

const calculadora = new Calculadora();
calculadora.start();
