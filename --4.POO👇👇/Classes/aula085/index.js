// 705.484.450-52 070.987.720-03

class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  éSequencia() {
    return this.cpfLimpo.chartAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCPF() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = this.geraNovoCPF(cpfSemDigitos);
  }

  geraDigito(cpfSemDigitos) {}

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.lenght !== 11) return false;
    if (this.éSequencia()) return false;
    if (!this.geraNovoCPF()) return false;

    return `Cheguei aqui`;
  }
}

const validacpf = new ValidaCPF(`070.987.720-03`);
console.log(validacpf.valida());
