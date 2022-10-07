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
        this.criaErro(campo, `O campo ${campo} não pode está em branco`);
        valid = false;
      }
    }
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
