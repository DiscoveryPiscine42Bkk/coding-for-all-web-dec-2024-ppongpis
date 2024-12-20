// LOAD TODO
window.onload = () => {
    loadToDo();
};

// new TODO
document.getElementById("newBtn").onclick = () => {
    const todoText = prompt("Enter your TO DO:").trim();
    if (todoText) {
        addToDo(todoText);
        saveToDo();
    }
};

// To do to DOM
function addToDo(text) {
    const toDoDiv = document.createElement("div");
    toDoDiv.textContent = text;
    toDoDiv.onclick = () => deleteToDo(toDoDiv);
    const list = document.getElementById("ft_list");

    // add bottom of the list
    list.appendChild(toDoDiv); // ใช้ appendChild แทน insertBefore

}

// remove todo
function deleteToDo(toDoDiv) {
    if (confirm("Do you really want to delete this TO DO?")) {
        toDoDiv.remove();
        saveToDo();
    }
}

// Save todo in localstorage
function saveToDo() {
    const list = document.querySelectorAll("#ft_list div");
    const toDoArray = [];
    list.forEach(item => toDoArray.push(item.textContent));
    localStorage.setItem("todo", JSON.stringify(toDoArray)); // เก็บข้อมูลใน LocalStorage
}

// Load To-Do in LocalStorage
function loadToDo() {
    const toDoData = localStorage.getItem("todo");
    if (toDoData) {
        const toDoArray = JSON.parse(toDoData);
        toDoArray.forEach(item => addToDo(item));
    }
}