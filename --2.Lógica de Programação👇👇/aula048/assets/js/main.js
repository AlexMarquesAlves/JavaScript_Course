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

function createDeleteButton(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.classList.add("apagar");
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(botaoApagar);
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
