"use script";
const wrapper = document.querySelector(".wrapper");
const input = document.querySelector(".inp");
const addTask = document.querySelector(".btn");
const container = document.querySelector(".container");
const clear = document.querySelector(".clear");

addTask.addEventListener("click", () => {
  ValueInputted = input.value;
  console.log(ValueInputted);

  const taskesBox = document.createElement("div");
  taskesBox.classList.add("taskbox");

  const cancel = document.createElement("button");
  cancel.textContent = "X";
  cancel.classList.add("cancel");

  const taskes = document.createElement("p");
  taskes.textContent = ValueInputted;

  taskesBox.appendChild(taskes);
  taskesBox.appendChild(cancel);

  container.appendChild(taskesBox);
  wrapper.appendChild(container);

  cancel.addEventListener("click", () => {
    container.removeChild(taskesBox);
  });
  clear.addEventListener("click", () => {
    wrapper.removeChild(container);
  });
});
