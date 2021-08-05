let addTaskButton = document.getElementById("add-task-button");

addTaskButton.addEventListener("click", function () {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    let span = document.createElement("span");
    span.classList.add("task");
    span.innerHTML = document.querySelector("input").value;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "X";

    let listItem = document.createElement("li");
    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);

    let taskList = document.getElementById("task-list");
    taskList.appendChild(listItem);

    document.querySelector("input").value = "";
});

// TODO: removing elements
