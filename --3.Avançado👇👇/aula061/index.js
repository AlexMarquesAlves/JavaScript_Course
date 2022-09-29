function* geradora1() {
  // codigo qualquer
  yield "valor 1";
  // codigo qualquer
  yield "valor 2";
  // codigo qualquer
  yield "valor 3";
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());

for (let valor of g1) {
  console.log(valor);
}
