// Exercicio
let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

// Solução
// const temp = varA;
// varA = varB;
// varB = varC;
// varC = temp;

// Solução moderna
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
