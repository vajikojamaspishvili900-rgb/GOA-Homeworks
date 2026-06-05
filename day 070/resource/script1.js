const form = document.querySelector("form");

const users = [];

form.addEventListener("submit", (e) => {

    e.preventDefault()
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {
        username,
        email,
        password
    }


    const exists = users.some(single => single.email === email)
    if (exists) {
        alert("User with this email already exists");
        return;
    }

    if (password.length < 8) {
        alert("Password length should be minimum 8 symbols ")
    } else {
        alert("successfully registered")
        users.push(user)
        renderUser(user)
    }
    console.log(users)
})



const div = document.querySelector("div")

const renderUser = (user) =>{
    const p = document.createElement("p");
    p.innerHTML = user.email
    div.appendChild(p)

}























