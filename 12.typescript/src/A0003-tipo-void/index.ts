function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}

const pessoa = {
  nome: "João",
  sobrenome: "Vicente",
  email: "joao@gmail.com",
  idade: 19,

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno("Luiz", "Otávio");
pessoa.exibirNome();

export { pessoa };
