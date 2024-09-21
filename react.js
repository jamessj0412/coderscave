// Task Management Application Logic

// Mock user login (simple for demonstration)
function login() {
    const username = document.getElementById('username').value;
    if (username.trim()) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        loadTasks();
    } else {
        alert("Please enter a valid username.");
    }
}

// Logout function
function logout() {
    document.getElementById('login-screen').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
}

// Array to store tasks (in-memory)
let tasks = [];

// Function to add a task
function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskCategory = document.getElementById('task-category').value;

    if (taskName && taskDeadline && taskCategory) {
        const newTask = {
            id: tasks.length + 1,
            name: taskName,
            deadline: taskDeadline,
            category: taskCategory
        };

        tasks.push(newTask);
        clearTaskForm();
        loadTasks();
    } else {
        alert("Please fill in all fields.");
    }
}

// Function to clear the task form
function clearTaskForm() {
    document.getElementById('task-name').value = '';
    document.getElementById('task-deadline').value = '';
    document.getElementById('task-category').value = 'Work';
}

// Function to render the task list
function loadTasks() {
    const tasksContainer = document.getElementById('tasks-container');
    tasksContainer.innerHTML = '';

    if (tasks.length === 0) {
        tasksContainer.innerHTML = "<p>No tasks available.</p>";
        return;
    }

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <h3>${task.name}</h3>
            <p>Deadline: ${task.deadline}</p>
            <p class="task-category">Category: ${task.category}</p>
            <button onclick="deleteTask(${task.id})">Delete Task</button>
        `;
        tasksContainer.appendChild(taskDiv);
    });
}

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    loadTasks();
}
