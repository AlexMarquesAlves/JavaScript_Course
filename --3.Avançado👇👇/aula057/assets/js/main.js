function criaCalculadora() {
  return {
    // Atributos
    display: document.querySelector(".display"),

    start() {
      this.buttonClicks();
      this.pressEnter();
    },
  };
}
