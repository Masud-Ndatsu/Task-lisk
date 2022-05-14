// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filterBtn = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all EventListeners
loadEventListener();

// Load all EventListeners
function loadEventListener() {
  // Add Event Listeners
  form.addEventListener("submit", handleAddTask);
  // Remove task from list
  taskList.addEventListener("click", removeTask);
  // Remove All Tasks
  clearBtn.addEventListener("click", clearAllTask);
}

// Add Tasks
function handleAddTask(e) {
  if (taskInput.value === "") {
    return alert("Add a Task");
  }

  // Create a List
  const li = document.createElement("li");

  // Add class
  li.className = "collection-item";

  // create TextNode and Append to li
  li.append(document.createTextNode(taskInput.value));

  // create new Link Element
  const link = document.createElement("a");
  // Add class
  link.className = "delete-item secondary-content";
  // Add Icon Html
  link.innerHTML = `<i class="fa fa-remove"></i>`;
  // Append link to li
  li.append(link);
  // Append li to taskList
  taskList.append(li);
  e.preventDefault();
  taskInput.value = "";
}

function removeTask(e) {
  if (e.target.classList.contains("fa-remove")) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearAllTask() {
  //   taskList.removeChild(li);
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
