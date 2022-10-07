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

  valida() {
    if (!this.cpflimpo) return false;
    if (typeof this.cpflimpo !== "string") return false;
    if (this.cpflimpo.lenght !== 11) return false;

    return `Cheguei aqui`;
  }
}

const validacpf = new ValidaCPF(`070.987.720-03`);
console.log(validacpf.valida());
