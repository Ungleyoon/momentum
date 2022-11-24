const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoUl = document.querySelector("#todoUl");
const TODO_LIST = "todos";

const savedTodo = localStorage.getItem(TODO_LIST);
let todos = [];

function saveTodo() {
  localStorage.setItem(TODO_LIST, JSON.stringify(todos));
}

function printingTodo(obj) {
  const span = document.createElement("span");
  span.classList.add("todo-span");
  span.innerText = obj.text;
  const button = document.createElement("button");
  button.classList.add("todo-delete");
  button.innerHTML = '<i class="fa-solid fa-trash"></i>';
  const chk = document.createElement("input");
  chk.classList.add("todo-chk");
  chk.setAttribute("type", "checkbox");
  const li = document.createElement("li");
  li.classList.add("todo-li");
  li.id = obj.id;
  li.appendChild(button);
  li.appendChild(chk);
  li.appendChild(span);

  if (obj.check === "1") {
    span.classList.add(CHECKED);
    chk.setAttribute(CHECKED, true);
  }
  todoUl.append(li);

  chk.addEventListener("click", handleCheck);
  button.addEventListener("click", handleDeleteTodo);
}

function handleCheck(e) {
  const span = e.target.parentNode.childNodes[2];
  const li = span.parentNode;
  const changeTodoIndex = getIndex(li);
  if (span.classList.contains(CHECKED)) {
    todos[changeTodoIndex].check = "0";
    saveTodo();
    span.classList.remove(CHECKED);
  } else {
    todos[changeTodoIndex].check = "1";
    saveTodo();
    span.classList.add(CHECKED);
  }
}

function getIndex(ele) {
  var i = 0;
  while ((ele = ele.previousSibling) != null) {
    i++;
  }
  return i;
}

function handleDeleteTodo(event) {
  const li = event.path[2];
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function handleSubmitTodo(event) {
  event.preventDefault();
  const valueObj = {
    text: todoInput.value,
    id: Date.now(),
    check: 0,
  };
  todoInput.value = "";
  todos.push(valueObj);
  saveTodo();
  printingTodo(valueObj);
}

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  todos = parsedTodo;
  parsedTodo.forEach(printingTodo);
}
todoForm.addEventListener("submit", handleSubmitTodo);
