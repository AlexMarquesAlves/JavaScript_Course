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
    const senhasValidas = this.senhasSaoValidas();

    if (camposValidos && senhasValidas) {
      alert("Formulario enviado");
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    let valid = true;
    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetir-senha");

    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(
        senha,
        `Os campos senha e repetir senha precisam ser iguais`
      );
      this.criaErro(
        repetirSenha,
        `Os campos senha e repetir senha precisam ser iguais`
      );
    }

    if (senha.length < 3 || senha.length < 12) {
      this.criaErro(senha, "Senha precisa ter entre 3 e 12 caracteres");
      valid = false;
    }

    return valid;
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

    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if (usuario.length < 3 || usuario.length < 12) {
      this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres");
      valid = false;
    }
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(
        campo,
        "Nome de usuário precisa conter apenas letras e/ou números"
      );
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
