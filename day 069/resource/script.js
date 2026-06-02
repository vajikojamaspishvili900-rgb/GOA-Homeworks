const form = document.querySelector("form")
const users = []
const user = {}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const email = form.email.value
    const password = form.pass.value
    user.email = email
    user.password = password
    users.push(user)
})
console.log(users)
