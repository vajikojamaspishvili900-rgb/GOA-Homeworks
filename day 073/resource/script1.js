const form  = document.querySelector("form");

let tasks = JSON.parse(localStorage.getItem("tasks")) || []


form.addEventListener("submit",(e) =>{
    e.preventDefault();

    const task = form.task.value;

    tasks.push(task)
    console.log(tasks)
    renderTask()
    localStorage.setItem("tasks",JSON.stringify(tasks))
})



const ol = document.querySelector("ol");

const renderTask = () => {
    ol.innerHTML = "";
    tasks.forEach((task,index)=>{
        ol.innerHTML += `
        <li onclick="deleteTask(${index})">${task}</li>
        `
    })    
}


const deleteTask = (index) =>{
    tasks = tasks.filter((_,i) => i !== index );
    localStorage.setItem("tasks",JSON.stringify(tasks))
    renderTask()
}

renderTask()