class User{
    constructor(username,email,password,cardNumber){
        this.username = username;
        this.email = email;
        this._password = password;
        this._cardNumber = cardNumber;
    }


    set password(newPassword){
        this._password = newPassword
    }


}

const user1 = new User("goa","123@gmail.com","123","555 666 777")

user1.password = "12345678"

console.log(user1)






class Book{
    constructor(title,author,isRead){
        this.title=title;
        this.author = author;
        this.isRead = isRead;
    }

    set read(newValue){
        this.isRead = newValue
        console.log(`თქვენ წაიკითხეთ წიგნი: ${this.title}`)
    }

    getDetails(){
        console.log(`${this.title} - ${this.author}, ${this.isRead}`)
    }
}


const book1 = new Book("ტომ სოიერი", "მარკ ტვენი", false)

book1.read = true;
book1.getDetails()

console.log(book1)







class Student{
    constructor(name,grades){
        this.name = name;
        this.grades = grades;
    }

    addGrade(grade){
        if(grade >=1 && grade <= 10){
            this.grades.push(grade)
        }else{
            console.log("Wrong input")
        }
    }

    getAverage(){
        const sum = this.grades.reduce((acc,i) => acc + i,0)
        return sum / this.grades.length
    }

    
}



const student1 = new Student("Giorgi",[])


student1.addGrade(5)
student1.addGrade(6)


console.log(student1.getAverage())










class Movie{
    constructor(title,price,availableSeats){
        this.title = title;
        this.price = price;
        this.availableSeats = availableSeats;
    }

    buyTicket(quantity){
        if(this.availableSeats > quantity){
            this.availableSeats -=quantity
            console.log(`თქვენ წარმატებით შეიძინეთ ${quantity} ბილეთი. გადასახდელია: ${quantity * this.price} ლარი`)
        }else{
            console.log(`სამწუხაროდ, მხოლოდ ${this.availableSeats} ადგილია დარჩენილი`)
        }
    }
}

const movie1 = new Movie("Godfather", 5, 10)

movie1.buyTicket(5)

console.log(movie1)



