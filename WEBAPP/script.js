document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    addTaskButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
        taskInput.focus();
      }
    });
  
    taskInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        addTaskButton.click();
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement("li");
      const taskSpan = document.createElement("span");
      taskSpan.className = "task";
      taskSpan.textContent = taskText;
      li.appendChild(taskSpan);
  
      const deleteSpan = document.createElement("span");
      deleteSpan.className = "delete";
      deleteSpan.textContent = "X";
      li.appendChild(deleteSpan);
  
      deleteSpan.addEventListener("click", function() {
        li.remove();
      });
  
      taskList.appendChild(li);
    }
  });