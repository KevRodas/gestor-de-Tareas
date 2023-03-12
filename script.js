const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const taskText = taskInput.value;
  
  if (taskText) {
    const li = document.createElement("li");
    li.className = "taskItem";
    
    const taskTextNode = document.createTextNode(taskText);
    const taskTextSpan = document.createElement("span");
    taskTextSpan.className = "taskText";
    taskTextSpan.appendChild(taskTextNode);
    li.appendChild(taskTextSpan);
    
    const taskActionsSpan = document.createElement("span");
    taskActionsSpan.className = "taskActions";
    
    const completedButton = document.createElement("button");
    completedButton.className = "completedButton";
    completedButton.innerHTML = "Hecho";
    completedButton.addEventListener("click", function() {
      li.classList.toggle("completed");
    });
    taskActionsSpan.appendChild(completedButton);
    
    const editButton = document.createElement("button");
    editButton.className = "editButton";
    editButton.innerHTML = "Editar";
    editButton.addEventListener("click", function() {
      const taskText = li.querySelector(".taskText").textContent;
      taskInput.value = taskText;
      taskList.removeChild(li);
    });
    taskActionsSpan.appendChild(editButton);
    
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.innerHTML = "Eliminar";
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(li);
    });
    taskActionsSpan.appendChild(deleteButton);
    
    li.appendChild(taskActionsSpan);
    
    taskList.appendChild(li);
    
    taskInput.value = "";
  }
});

