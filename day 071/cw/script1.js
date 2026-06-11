// გააკეთეთ to-do list საიტი, როგორც გაკვეთილზე ვმუშაობდით, საიტზე უნდა იყოს form სადაც იქნება ინფუთი და task ის დამატების ღილაკი,

// თქვენ უნდა დაამატოთ ახალი task , tasks მასივში და დაარენდეროთ ამასთან ერთად, როდესაც რომელიმე task ს დააჭერთ უნდა წაიღალოს.


const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#task-list');

const tasks = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const task = taskInput.value.trim();

    if (task) {
        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    }

});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        li.addEventListener('click', function() {
            tasks.splice(index, 1);
            renderTasks();
        });
        taskList.appendChild(li);
    });

}

