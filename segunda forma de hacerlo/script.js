const taskForm = document.getElementById("taskForm");
const taskName = document.getElementById("taskName");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");

let tasks = [];

function addTask(name, description) {
  const task = {
    name,
    description,
    completed: false
  };
  tasks.push(task);
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const task = tasks[index];
  taskName.value = task.name;
  taskDescription.value = task.description;
  deleteTask(index);
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "taskItem";

    const taskNameSpan = document.createElement("span");
    taskNameSpan.className = "taskName";
    taskNameSpan.textContent = task.name;
    li.appendChild(taskNameSpan);

    const taskDescriptionSpan = document.createElement("span");
    taskDescriptionSpan.className = "taskDescription";
    taskDescriptionSpan.textContent = task.description;
    li.appendChild(taskDescriptionSpan);

    const taskActionsSpan = document.createElement("span");
    taskActionsSpan.className = "taskActions";

    const completedButton = document.createElement("button");
    completedButton.className = "completedButton";
    completedButton.textContent = "Hecho";
    completedButton.addEventListener("click", () => {
      completeTask(index);
    });
    taskActionsSpan.appendChild(completedButton);

    const editButton = document.createElement("button");
    editButton.className = "editButton";
    editButton.textContent = "Editar";
    editButton.addEventListener("click", () => {
      editTask(index);
    });
    taskActionsSpan.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => {
      deleteTask(index);
    });
    taskActionsSpan.appendChild(deleteButton);

    li.appendChild(taskActionsSpan);

    if (task.completed) {
      li.classList.add("completed");
    }

    taskList.appendChild(li);
  });
}

taskForm.addEventListener("submit", event => {
  event.preventDefault();
  addTask(taskName.value, taskDescription.value);
  taskName.value = "";
  taskDescription.value = "";
});

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
  }
  

