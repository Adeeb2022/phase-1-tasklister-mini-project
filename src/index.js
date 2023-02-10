document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("new-task-description");
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    let newTask = input.value;

    event.preventDefault();
    if (newTask.length === 0) {
      alert("Task cannot be empty");
    } else {
      handleToDo(newTask);
    }
    form.reset();
  });
});


function handleToDo(newTask) {
  let task = document.querySelector("#tasks");
  let list = document.createElement("ol");
  let listItem = document.createElement("li");
  let done = document.createElement("p");
  task.appendChild(list);
  list.appendChild(listItem);
  done.textContent = "x";


  done.addEventListener("click", handleDone);
  listItem.innerText = `${newTask}`;
  listItem.appendChild(done);
}

function handleDone(e) {
  e.target.parentNode.style.textDecoration = 'line-through';
}
