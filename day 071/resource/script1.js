const form = document.querySelector("form");

let tasks = [];


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const task = form.task.value;
    tasks.push(task);
    renderTask()
})


const ol = document.querySelector("ol");

const renderTask = () => {
    ol.innerHTML = ""
    tasks.forEach((task,index) => {
        ol.innerHTML += `<li onclick="deleteTask(${index})">${task}</li>`
        
    })
}


const deleteTask = (index) => {
    tasks = tasks.filter((_, i) => index !== i)
    renderTask()
}