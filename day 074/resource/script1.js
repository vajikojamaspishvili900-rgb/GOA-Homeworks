const user0 = {
    firstName:"Luka",
    lastName: "sdvdfs",
    age:29,
    email:"123@gmail.com"
}

function User(firstName,lastName,age,email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
}



const user = (firstName,lastName,age,email) =>{
    return {
        firstName,
        lastName,
        age,
        email
    }
}

const userInfo = new User("Luka","asdgsda",29,"123@gmail.com");

const user2 = user("Luka","asdgsda",29,"123@gmail.com") 

console.log(userInfo)


console.log(user2)