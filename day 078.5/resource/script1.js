class User {
    constructor(email,username,password){
        this.email = email;
        this.username = username;
        this.password = password;
    }

    greet(){
        console.log(`Hello ${this.username}`)
    }
}


class Adult extends User{
    constructor(email,username,password, ccn){
        super(email,username,password);
        
        this.ccn = ccn; 
    }
}


class Kid extends User{ 
    constructor(email,username,password){
        super(email,username,password);
        this.candy = true;

    }
}

const adult1 = new Adult("123@gmail.com","Luka","1234","1234567890123456");
console.log(adult1);

const kid1 = new Kid("456@gmail.com","Ana","5678");
kid1.greet();

