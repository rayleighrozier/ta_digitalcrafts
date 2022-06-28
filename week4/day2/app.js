const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

const strikeThrough = (element) => {
  if (element.classList == "strikethrough") {
    element.classList = "";
  } else {
    element.classList = "strikethrough";
  }
};
const deleteItem = (element) => {
  let task = document.getElementById(`${element.id}`);
  list.removeChild(task);
};
const addItem = () => {
  let task = document.createElement("div");
  task.id = input.value;
  let text = document.createElement("p");
  text.innerText = input.value;
  let check = document.createElement("button");
  check.innerHTML = "&#9989";
  check.onclick = () => strikeThrough(task);
  let trash = document.createElement("button");
  trash.innerHTML = "&#128465";
  trash.name = input.value;
  trash.onclick = () => deleteItem(task);
  task.append(text, check, trash);
  list.append(task);
  input.value = "";
};

submit.onclick = addItem;
