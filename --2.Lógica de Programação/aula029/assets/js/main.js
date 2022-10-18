const h1 = document.querySelector(".container h1");
const data = new Date();
// const options = {
//   dateStyle: "full",
//   timeStyle: "short",
// };
h1.innerHTML = data.toLocaleDateString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
});
