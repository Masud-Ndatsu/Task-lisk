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
  // DOM load Event
  document.addEventListener("DOMContentLoaded", getTask);

  form.addEventListener("submit", handleAddTask);
  // Remove task from list
  taskList.addEventListener("click", removeTask);
  // Remove All Tasks
  clearBtn.addEventListener("click", clearAllTask);

  // Filter Task
  filterBtn.addEventListener("keyup", filterTask);
}

// Get Tasks from localStorage
function getTask() {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    // Create a List
    const li = document.createElement("li");

    // Add class
    li.className = "collection-item";

    // create TextNode and Append to li
    li.append(document.createTextNode(task));

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
  });
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

  // Store in LocalStorage
  storeInLocalStorage(taskInput.value);

  // Clear Input
  taskInput.value = "";
  e.preventDefault();
}
// Store Task in LocalStorage
function storeInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if (e.target.classList.contains("fa-remove")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();

      // Remove From LocalStorage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}
// Remove Task From LocalStorage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear All Task

function clearAllTask() {
  //   taskList.removeChild(li);
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.removeItem("tasks");
}

// Filter Task
function filterTask(e) {
  const text = e.target.value.toLowerCase();

  const lists = document.querySelectorAll(".collection-item");

  lists.forEach((task) => {
    if (task.textContent.includes(text)) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
