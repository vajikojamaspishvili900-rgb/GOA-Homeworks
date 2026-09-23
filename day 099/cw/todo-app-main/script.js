const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const itemsLeft = document.getElementById("itemsLeft");

const allBtn = document.getElementById("allBtn");
const activeBtn = document.getElementById("activeBtn");
const completedBtn = document.getElementById("completedBtn");
const clearCompleted = document.getElementById("clearCompleted");

const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("img");


let todos = [];



// TODO-ebis damateba

todoInput.addEventListener("keydown", function(event) {

    if (event.key !== "Enter") {
        return;
    }

    let text = todoInput.value.trim();

    if (text === "") {
        return;
    }

    todos.push({
        text: text,
        completed: false
    });

    todoInput.value = "";

    displayTodos(todos);
});


// DISPLAY TODOS

function displayTodos(list) {

    todoList.innerHTML = "";

    list.forEach(function(todo, index) {

        let todoDiv = document.createElement("div");

        todoDiv.classList.add("todo");

        if (todo.completed === true) {
            todoDiv.classList.add("completed");
        }


        // CHECK

        let checkDiv = document.createElement("div");

        checkDiv.classList.add("check");

        if (todo.completed === true) {
            checkDiv.textContent = "✓";
        }


        // TEXT

        let textElement = document.createElement("p");

        textElement.textContent = todo.text;


        // DELETE BUTTON

        let deleteButton = document.createElement("button");

        deleteButton.classList.add("delete");


        let deleteImage = document.createElement("img");

        deleteImage.src = "./images/icon-cross.svg";

        deleteImage.alt = "delete";


        deleteButton.appendChild(deleteImage);


        // COMPLETE TODO

        checkDiv.addEventListener("click", function() {

            todo.completed = !todo.completed;

            displayTodos(todos);

        });


        // DELETE TODO

        deleteButton.addEventListener("click", function() {

            todos.splice(index, 1);

            displayTodos(todos);

        });


        todoDiv.appendChild(checkDiv);

        todoDiv.appendChild(textElement);

        todoDiv.appendChild(deleteButton);

        todoList.appendChild(todoDiv);

    });


    updateItemsLeft();
}


// ITEMS LEFT

function updateItemsLeft() {

    let activeTodos = todos.filter(function(todo) {

        return todo.completed === false;

    });

    itemsLeft.textContent =
        activeTodos.length + " items left";
}


// ALL

allBtn.addEventListener("click", function() {

    displayTodos(todos);

});


// ACTIVE

activeBtn.addEventListener("click", function() {

    let activeTodos = todos.filter(function(todo) {

        return todo.completed === false;

    });

    displayTodos(activeTodos);

});


// COMPLETED

completedBtn.addEventListener("click", function() {

    let completedTodos = todos.filter(function(todo) {

        return todo.completed === true;

    });

    displayTodos(completedTodos);

});


// CLEAR COMPLETED

clearCompleted.addEventListener("click", function() {

    todos = todos.filter(function(todo) {

        return todo.completed === false;

    });

    displayTodos(todos);

});


// DARK / LIGHT

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light");


    if (document.body.classList.contains("light")) {

        themeIcon.src = "./images/icon-moon.svg";

    } else {

        themeIcon.src = "./images/icon-sun.svg";

    }

});


// GAMODZAXEBA

displayTodos(todos);