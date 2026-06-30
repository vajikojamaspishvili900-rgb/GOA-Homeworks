// const colors = ["red", "blue", "black", "green", "yellow", "purple", "pink", "white", "orange", "gray", "cyan", "brown", "magenta", "aqua"]
// const randomIndex = Math.floor(Math.random() * colors.length)



// ---



// const h1 = document.querySelector("h1")

// const button = document.querySelector("button")

// button.addEventListener("click", () => {
//     h1.style.color = "red"
//     h1.style.fontSize = "large"
// })



// ---



// const name = document.getElementById("name")
// const lname = document.getElementById("lastname")
// const email = document.getElementById("email")
// const pass = document.getElementById("password")
// const button = document.querySelector("button")
// const div = document.getElementById("resultDiv")

// button.addEventListener("click", () => {
//     const username = name.value
//     const lastname = lname.value
//     const useremail = email.value
//     const userpass = pass.value

//     const userpasslenght = userpass.length
//     const userpass1 = "*".repeat(userpasslenght)

//     const userEmail1 = useremail.split("@")
//     const useremail2 = "*".repeat(userEmail1[0].length)

    
//     console.log(userEmail1);
    
//     div.innerHTML = `${username}, ${lastname}, ${useremail2}@${userEmail1[1]}, ${userpass1}`
// })



// ---



// const body = document.querySelector("body")

// const colors = ["red", "blue", "black", "green", "yellow", "purple", "pink", "white", "orange", "gray", "cyan", "brown", "magenta", "aqua"]

// button.addEventListener("click", () => {
//     const randomIndex = Math.floor(Math.random() * colors.length)

//     body.style.backgroundColor = colors[randomIndex]
// })



// ---



// const form = document.querySelector("form")
// const users = []

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     const name = document.getElementById("name").value
//     const lname = document.getElementById("lastname").value
//     const email = document.getElementById("email").value
//     const pass = document.getElementById("password").value
//     const button = document.querySelector("button")

//     const userObj = {
//         name,
//         lname,
//         email,
//         pass,
//     }
//     users.push(userObj)
//     localStorage.setItem("user", JSON.stringify(users))
//     form.reset()
// })











