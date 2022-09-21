const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function createLi() {
  const li = document.createElement("li");
  return li;
}

function clearInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function createTodo(textoInput) {
  const li = createLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  clearInput();
  createDeleteButton(li);
  saveTodo();
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  createTodo(inputTarefa.value);
});
