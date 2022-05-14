// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filterBtn = document.querySelector("#filter");
const taskInput = document.querySelector("#tasks");

// Load all EventListeners
loadEventListener();
// Load all EventListeners
function loadEventListener() {
  // Add Event Listeners
  form.addEventListener("sumit", handleAddTask);
}

// Add Tasks
function handleAddTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }

  e.preventDefault();
}
