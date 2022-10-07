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

    for (const errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (const campo of this.formulario.querySelector(".validar")) {
      const label = campo.previousElementSibling.innerText;
      if (!campo.value) {
        this.criaErro(campo, `O campo ${label} não pode está em branco`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if (usuario.length < 3 || usuario.length < 12) {
      this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres");
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) {
    const cpf = new this.validaCPF(campo.value);

    if (!cpf.valid) {
      this.criaErro(campo, "CPF inválido");
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
