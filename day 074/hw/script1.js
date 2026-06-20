// 1) დაამთავრეთ საკლასო დავალება


// დავალება 1: "წიგნების ბიბლიოთეკა" (მარტივი)
// ეს დავალება დაეხმარებათ კონსტრუქტორის და მარტივი მეთოდების გათავისებაში.

// შექმენით კლასი Book.

// კონსტრუქტორი: უნდა იღებდეს წიგნის სათაურს (title), ავტორს (author) და გამოცემის წელს (year).

// მეთოდი getSummary(): უნდა აბრუნებდეს ტექსტს: "წიგნი 'სათაური' დაწერილია 'ავტორი'-ს მიერ 'წელი' წელს."

// მეთოდი getAge(): უნდა აბრუნებდეს, რამდენი წლისაა წიგნი (მიმდინარე წელს გამოკლებული გამოცემის წელი).


// დავალება 2: "მართკუთხედის კალკულატორი" (Getter/Setter)
// აქ სტუდენტებმა უნდა ისწავლონ, როგორ გამოიყენონ get და set მონაცემების ვალიდაციისთვის.

// შექმენით კლასი Rectangle.

// კონსტრუქტორი: იღებს სიგანეს (width) და სიმაღლეს (height).

// Getter-ები: area (ფართობი) და perimeter (პერიმეტრი). ეს მნიშვნელობები არ უნდა იყოს შენახული როგორც ცვლადები, არამედ უნდა ითვლებოდეს დინამიურად.

// Setter-ები: სიგანის და სიმაღლის შეცვლისას დაამატეთ შემოწმება: თუ გადაცემული მნიშვნელობა ნაკლებია ან ტოლია 0-ზე, გამოიტანეთ შეცდომა (ან დააყენეთ დეფოლტ მნიშვნელობა 1).


// დავალება 3: "მომხმარებლის პროფილი" (კომპლექსური)
// ეს დავალება აერთიანებს ყველაფერს და ამატებს უსაფრთხოების ელემენტს.

// შექმენით კლასი User.

// პარამეტრები: username, email და _password (ქვედა ტირე მიანიშნებს, რომ ეს "Private" ცვლადია).

// Getter password: პაროლის წაკითხვის მცდელობისას უნდა აბრუნებდეს დაფარულ ტექსტს (მაგ: "********"), უსაფრთხოების მიზნით.

// Setter password: პაროლის შეცვლამდე უნდა ამოწმებდეს, არის თუ არა ახალი პაროლი მინიმუმ 8 სიმბოლო. თუ არ არის, დაბეჭდოს: "პაროლი ძალიან მოკლეა!".

// მეთოდი changeEmail(newEmail): რომელიც შეცვლის იმეილს მხოლოდ იმ შემთხვევაში, თუ ახალი იმეილი შეიცავს @ სიმბოლოს.





// 1

class Book {

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `წიგნი '${this.title}' დაწერილია '${this.author}'-ს მიერ ${this.year} წელს.`;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }

}

// test

console.log("\nN1")

const book1 = new Book("ვეფხისტყაოსანი", "იაკობ გოგებაშვილი", 2077);
console.log(book1.getSummary());
console.log("book's age:", book1.getAge(), "year");










// 2

class Rectangle {

    constructor(width, height) {
        this._width = width > 0 ? width : 1
        this._height = height > 0 ? height : 1
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (value <= 0) {
            console.log("width should be more than 0");
            this._width = 1;
        } else {
            this._width = value;
        }
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (value <= 0) {
            console.log("height should be more than 0");
            this._height = 1;
        } else {
            this._height = value;
        }
    }

    get area() {
        return this._width * this._height;
    }

    get perimeter() {
        return 2 * (this._width + this._height);
    }

}


// test

console.log("\nN2")

const rect = new Rectangle(5, 10);

console.log("width:", rect.width, ", height:", rect.height);
console.log("area:", rect.area);
console.log("perimeter:", rect.perimeter);

rect.width = -3;
console.log(rect.width);

rect.height = 8;
console.log("new height:", rect.height);
console.log("new area:", rect.area);






// 3

class User {

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this._password = password;
    }

    get password() {
        return "*".repeat(8);
    }

    set password(newPassword) {
        if (newPassword.length < 8) {
            console.log("password is too short (8 characters at least!).");
        } else {
            this._password = newPassword;
            console.log("password has changed succesfully!");
        }
    }

    changeEmail(newEmail) {
        if (newEmail.includes("@")) {
            this.email = newEmail;
            console.log("email has changed succesfully!");
        } else {
            console.log("email should include @ symbol!");
        }
    }

}


// test

console.log("\nN3")

const user = new User("vaja2000", "vaja@gmail.com", "paroli123");
console.log("username:", user.username, "| email:",user.email, "| password:",user.password);

user.password = "123";
user.password = "axaliparoli2020";

user.changeEmail("arasworiemaili.com");
user.changeEmail("sworiemaili@gmail.com");

console.log("new email:", user.email);





