const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function createLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    createTodo(inputTarefa.value);
  }
});

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

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    saveTodo();
  }
});

function saveTodo() {
  const liTarefas = tarefas.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}
