const user = {
    username:"Luka",
    _email:"123@gmail.com",
    _password:"1234",
    adult:false,
    get email(){
        if(this.adult){
            return this._email
        }else{
            return "You are kid"
        }
    },
    set myUsername(name){
        if(name.length < 4){
            console.log("name must be min 4 characters")
        }else{
            this.username = name
        }
    }
}

user.myUsername = "gio"

console.log(user)




const myFactoryFunc = (username,email,password) =>{
    return {
        username,
        email,
        password,
        greet(){
            console.log(`Hello ${username}`)
        }

    }
}



function MyObj(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
    this.greet = ()=>{
        console.log(`Hello ${this.username}`)
    }
}

const user2 = new MyObj("Nika","123@gmail.com",1234)




user2.greet()