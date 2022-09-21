const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function createTodo(textoInput) {
  // const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  // limpaInput();
  // criaBotaoApagar(li);
  // salvarTarefas();
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  createTodo(inputTarefa.value);
});
