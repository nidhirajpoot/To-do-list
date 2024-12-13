// Wait for the DOM content to load before running any scripts
document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the task text

        // Ensure the task text is not empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add a delete button to the task item
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        li.appendChild(deleteBtn);

        // Add event listener for delete button
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li); // Remove the task item from the list
        });

        // Toggle completion when clicking the task
        li.addEventListener('click', function() {
            li.classList.toggle('completed'); // Toggle 'completed' class
        });

        // Add the new task item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add task when clicking the "Add Task" button
    addTaskBtn.addEventListener('click', addTask);

    // Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
