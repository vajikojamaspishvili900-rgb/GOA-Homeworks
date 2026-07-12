// Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser


// ---

const {sum,name} = require("./helper.js");

console.log(name)

console.log(sum(1,2))

// ---

const sum = (num1,num2) =>{
    return num1+ num2
}

const name = "Giorgi"

module.exports = {
    sum,name
}


