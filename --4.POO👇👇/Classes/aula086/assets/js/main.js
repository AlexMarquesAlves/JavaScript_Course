class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");

    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
  }

  camposSaoValidos() {
    let valid = true;

    for (const campo of this.formulario.querySelector(".validar")) {
      if (!campo.value) {
        this.criaErro();
      }
    }
  }

  criaErro(campo, msg) {}
}

const valida = new ValidaFormulario();
