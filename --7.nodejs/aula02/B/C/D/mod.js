/** Função */
// module.exports = function (x, y) {
//   return x * y;
// };

/** Numero */
// module.exports = 2;

/** Classe */
module.exports = class Dog {
  constructor(name) {
    this.name = name;
  }

  latir() {
    console.log(`${this.name} está fazendo au au`);
  }
};
