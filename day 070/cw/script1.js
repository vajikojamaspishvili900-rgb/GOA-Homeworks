// # Classwork 

// 1) მომხმარებელს შემოატანინეთ მისი ინფორმაცია სახელი, ემაილი, პაროლი გაუკეთეთ შემოწმებაც ემაილს და პაროლს ჩაამატეთ მასივში და დააკონსოლოგეთ, ასევე დაარენდერეთ თითოეული მომხმარებლის მონაცემი.

const form = document.querySelector('form');
const container = document.getElementById('container');
const users = [];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        alert('პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს');
        return;
    }
    const exists = users.some(user => user.email === email);
    if (exists) {
        alert('ეს ემაილი უკვე არსებობს');
        return;
    }
    const user = {
        username,
        email,
        password
    };
    users.push(user);
    console.log(users);
    renderUsers();
});
function renderUsers() {
    container.innerHTML = '';
    users.forEach(user => {
        const div = document.createElement('div');
        div.innerHTML += `
            <h3>${user.username}</h3>
            <p>Email: ${user.email}</p>
            <p>Password: ${user.password}</p>
        `;
        container.appendChild(div);
    });
}

