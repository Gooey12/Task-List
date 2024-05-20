document.getElementById('AddTask').addEventListener('click', function() {
    const random = 'n' + Math.floor(Math.random() * 10000) * 173;

    const TaskName = document.getElementById('TaskName');
    const Task = TaskName.value;

    if(Task == '')
        return;

    const TaskList = document.getElementById('TaskList');
    const TaskItem = document.createElement('li');

    TaskItem.setAttribute('id', random);
    TaskItem.innerHTML = "<div class=\"row rounded bg-white mx-4 p-2 taskList-Item mb-2\"><div class=\"col-10\">" + Task + "</div><div class=\"col-2\"><button class=\"btn btn-primary btn-sm\"><i class=\"bi bi-check-lg\"></i></button></div></div>";
    TaskList.appendChild(TaskItem);
    TaskName.value = '';

    document.getElementById(random).addEventListener('click', function() {
        const Taskdiv = document.getElementById(random);
        Taskdiv.remove();
    });
});

document.getElementById('ClearAll').addEventListener('click', function() {
    const TaskList = document.getElementById('TaskList');
    TaskList.innerHTML = '';
});



// Save & Load
function saveTask() {
    const TaskList = document.getElementById('TaskList');
    const TasksHTML = TaskList.innerHTML;
    localStorage.setItem('TaskHTML', TasksHTML);
}

function loadTasks() {
    TasksHTML = localStorage.getItem('TaskHTML');
    if (TasksHTML) {
        const TaskList = document.getElementById('TaskList');
        TaskList.innerHTML = TasksHTML;
    }
}

setInterval(saveTask, 1000);
window.onload = loadTasks;