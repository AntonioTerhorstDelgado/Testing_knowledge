function addTask() {
  const taskInput = document.getElementById("taskInput");
  const TaskList = document.getElementById("TaskList");
  if (taskInput.value !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

//Adicionando botão de remoção
const removeButton = document.createElement('button');
removeButton.textContent = 'Remover';
removeButton.onclick = () => TaskList.removeChild(newTask);
newTask.appendChild(removeButton);

    TaskList.appendChild(newTask);
    taskInput.value = "";
  }
}
