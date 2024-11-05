import "./styles.css";

document.addEventListener("DOMContent)", () => {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    // Function to add a new task
    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this task?")) {
                taskList.removeChild(taskItem);
            }
        });
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskSpan.addEventListener("click", () => {
            taskSpan.classList.toggle("completed");
        });
    }
    // Form submission event with validation
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        
    // BOM alerts and confirmations//
        if (taskText.length < 5) {
            alert("Task must be at least 5 characters long.");
        } else {
            addTask(taskText);
            taskInput.value = "";  // Clear input
        }
    });
});
// Access DOM elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Handle form submission
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload on form submission
    const taskText = taskInput.value.trim();

    // Validate input
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create new list item (li) element for the task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Create a delete button for the task item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    taskItem.appendChild(deleteButton);

    // Add the task item to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";

    // Focus back on the input field for convenience
    taskInput.focus();
});

// Event delegation to handle deleting tasks
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
});
