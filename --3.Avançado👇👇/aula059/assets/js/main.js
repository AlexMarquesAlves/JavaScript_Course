// function criaCalculadora() {
//   return {
//     // Atributos
//     display: document.querySelector(".display"),

//     start() {
//       this.buttonClicks();
//       this.pressEnter();
//     },

//     // Métodos
//     buttonClicks() {
//       document.addEventListener("click", (e) => {
//         const el = e.target;

//         if (el.classList.contains("btn-num")) {
//           this.btnToDisplay(el.innerText);
//         }

//         if (el.classList.contains("btn-clear")) {
//           this.clearDisplay();
//         }

//         if (el.classList.contains("btn-del")) {
//           this.backSpace();
//         }

//         if (el.classList.contains("btn-eq")) {
//           this.haceCuenta();
//         }
//       });
//     },

//     btnToDisplay(valor) {
//       this.display.value += valor;
//     },

//     clearDisplay() {
//       this.display.value = ``;
//     },

//     backSpace() {
//       this.display.value = this.display.value.slice(0, -1);
//     },

//     pressEnter() {
//       this.display.addEventListener("keyup", (e) => {
//         if (e.keyCode === 13) {
//           this.haceCuenta();
//         }
//       });
//     },

//     haceCuenta() {
//       let conta = this.display.value;

//       try {
//         conta = eval(conta);

//         if (!conta) {
//           alert(`Conta inválida`);
//           return;
//         }

//         this.display.value = String(conta);
//       } catch (e) {
//         alert(`Conta inválida`);
//         return;
//       }
//     },
//   };
// }

function Calculadora() {}
