export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

funcao.call(new Date(), "Leo", 22);
funcao.apply(new Date(), ["Leo", 22]);
