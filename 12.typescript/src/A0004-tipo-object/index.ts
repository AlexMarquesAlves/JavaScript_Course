const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // Index signature
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};

objetoA.chaveB = "Outro valor";
objetoA.chaveC = "Novo valor";
objetoA.chaveD = "Nova chave";

console.log(objetoA);
