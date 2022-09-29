function criaCalculadora() {
  return {
    // Atributos
    display: document.querySelector(".display"),

    start() {
      this.buttonClicks();
      this.pressEnter();
    },

    // Métodos
    buttonClicks() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnToDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.backSpace();
        }

        if (el.classList.contains("btn-eq")) {
          this.haceCuenta();
        }
      });
    },

    btnToDisplay(valor) {
      this.display.value += valor;
    },

    clearDisplay() {
      this.display.value = ``;
    },

    backSpace() {
      this.display.value = this.display.value.slice(0, -1);
    },
  };
}
