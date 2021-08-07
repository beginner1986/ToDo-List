// tasks list data structure
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

for(let i = 0; i < taskList.length; i++) {
    addTask(taskList[i].isDone, taskList[i].text);
}

// add task button functionality
let addTaskButton = document.getElementById("add-task-button");
addTaskButton.addEventListener("click", function () {
    let text = document.querySelector("input[type=text]").value;
    addTask(false, text);
    document.querySelector("input[type=text]").value = "";
    let task = { "isDone": false, "text": text };
    taskList.push(task);

    saveToLocalStorage();
});

// deleting tasks
let deleteBtns = document.getElementsByClassName("delete-btn");
for(let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function () {
        taskList.splice(i, 1);
        deleteBtns[i].parentNode.parentNode.removeChild(deleteBtns[i].parentNode);

        saveToLocalStorage();
    });
}

// adding tasks to the list
function addTask(isDone, text) {
    let listItem = document.createElement("li");
    listItem.appendChild(createCheckbox(isDone));
    listItem.appendChild(createSpan(text));
    listItem.appendChild(createDeleteBtn());

    let taskList = document.getElementById("task-list");
    taskList.appendChild(listItem);
}

// marking task as done/undone
let checkboxes = document.querySelectorAll("input[type=checkbox]");
for(let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", function () {
        taskList[i].isDone = !taskList[i].isDone;
        saveToLocalStorage();
    });
}

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function createCheckbox(checked) {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = checked;

    return checkbox;
}

function createSpan(text) {
    let span = document.createElement("span");
    span.classList.add("task");
    span.innerHTML = text;

    return span;
}

function createDeleteBtn() {
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "X";
    deleteBtn.addEventListener("click", function () {
        deleteBtn.parentNode.parentNode.removeChild(deleteBtn.parentNode);
    });

    return deleteBtn;
}