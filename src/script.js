// adding tasks to the list
let addTaskButton = document.getElementById("add-task-button");
addTaskButton.addEventListener("click", function () {
    let listItem = document.createElement("li");
    listItem.appendChild(createCheckbox());
    listItem.appendChild(createSpan());
    listItem.appendChild(createDeleteBtn());

    let taskList = document.getElementById("task-list");
    taskList.appendChild(listItem);

    document.querySelector("input").value = "";
});

// deleting tasks
let deleteBtns = document.getElementsByClassName("delete-btn");
for(let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function () {
        deleteBtns[i].parentNode.parentNode.removeChild(deleteBtns[i].parentNode);
    });
}

function createCheckbox() {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    return checkbox;
}

function createSpan() {
    let span = document.createElement("span");
    span.classList.add("task");
    span.innerHTML = document.querySelector("input").value;

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