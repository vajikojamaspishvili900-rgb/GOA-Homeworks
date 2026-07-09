// მოიძიეთ ინფორმაცია javascript ში class ების შესახებ და ახსენით რა არის კლასი და რაში არის საჭირო.
// https://javascript.info/class


// class -- JavaScript-ში ობიექტების შემქმნელი შაბლონი, რომელიც საშუალებას გვაძლევს შევქმნათ ობიექტი, 
// ჩვენ თვითონ განვსაზღვროთ ობიექტის თვისებები და და შევქმნათ მეთოდები.





// # Classwork

// 1)შექმენი კლასი Book, რომელსაც ექნება შემდეგი თვისებები:
// title (სათაური)
// author (ავტორი)
// isRead (წაკითხულია თუ არა, საწყისი მნიშვნელობა false)
// მეთოდები:
// read() — ცვლის isRead-ს true-ზე და კონსოლში ბეჭდავს: "თქვენ წაიკითხეთ წიგნი: [სათაური]".
// getDetails() — აბრუნებს ტექსტს: "[სათაური]" - [ავტორი], [წაკითხულია/არ არის წაკითხული].
// შექმენი 2 წიგნის ობიექტი, ერთ-ერთზე გამოიძახე read() მეთოდი და ბოლოს ორივეს getDetails() დალოგე.

// 2) შექმენი კლასი Student, რომელსაც ექნება თვისებები: name (სახელი) და grades (ნიშნების მასივი, რომელიც თავიდან ცარიელია []).
// მეთოდები:
// addGrade(grade) — ამოწმებს, არის თუ არა ნიშანი 1-დან 10-მდე. თუ არის, ამატებს მასივში. თუ არა, ბეჭდავს შეტყობინებას: "არასწორი ნიშანია!".
// getAverage() — ითვლის და აბრუნებს სტუდენტის საშუალო ნიშანს (ყველა ნიშნის ჯამი გაყოფილი მათ რაოდენობაზე).
// შექმენი სტუდენტი, დაუმატე ნიშნები: 8, 9, 10 და გამოიტანე მისი საშუალო.

// 3) შექმენი კლასი Movie თვისებებით: title (ფილმის სახელი), price (ბილეთის ფასი) და availableSeats (თავისუფალი ადგილების რაოდენობა, მაგალითად 5).
// მეთოდები:
// buyTicket(quantity) — პარამეტრად იღებს ბილეთების რაოდენობას, რომლის ყიდვაც სურთ.
// თუ თავისუფალი ადგილები საკმარისია (availableSeats >= quantity), დააკელი ადგილებს ეს რაოდენობა და დალოგე: "თქვენ წარმატებით შეიძინეთ [quantity] ბილეთი. გადასახდელია: [ფასი * რაოდენობა] ლარი".
// თუ ადგილები არ არის საკმარისი, დაბეჭდე: "სამწუხაროდ, მხოლოდ [availableSeats] ადგილია დარჩენილი".
// სცადე ჯერ 3 ბილეთის ყიდვა, მავე ფილმზე შემდეგ კიდევ 3-ის ყიდვა და ნახე რა მოხდება.

// 4) შექმენი კლასი Car თვისებებით: brand (მარკა) და speed (სიჩქარე, რომელიც საწყის ეტაპზე ყოველთვის არის 0).
// მეთოდები:
// accelerate() — ზრდის სიჩქარეს 20-ით.
// showSpeed() — კონსოლში ბეჭდავს: "[brand]-ის სიჩქარეა: [speed] კმ/სთ".
// შექმენი მანქანა (მაგ: "BMW"). გამოიძახე accelerate() ორჯერ და შემდეგ შეამოწმე სიჩქარე showSpeed()-ით.



// 1)
class Book {

    constructor(title, author, isRead) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }

    read() {
        this.isRead = true;
        console.log(`თქვენ წაიკითხეთ წიგნი: ${this.title}`);
    }

    getDetails() {
        return `"${this.title}" - ${this.author}, ${this.isRead ? "წაკითხულია" : "არ არის წაკითხული"}`;
    }

}

// test

const book1 = new Book("gamarjoba", "vinme", false);
book1.read();
console.log(book1.getDetails());


// 2)

class Student {

    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(grade) {
        if (grade >= 1 && grade <= 10) {
            this.grades.push(grade);
        } else {
            console.log("არასწორი ნიშანია!");
        }
    }

    getAverage() {
        if (this.grades.length === 0){
            return 0
        };
        const sum = this.grades.reduce((acc, i) => acc + i, 0);
        return sum / this.grades.length;
    }

}

// test

const student1 = new Student("kaci");
student1.addGrade(8);
student1.addGrade(9);
student1.addGrade(10);
console.log(student1.getAverage());


// 3)
class Movie {

    constructor(title, price, availableSeats) {
        this.title = title;
        this.price = price;
        this.availableSeats = availableSeats;
    }

    buyTicket(quantity) {
        if (this.availableSeats >= quantity) {
            this.availableSeats -= quantity;
            console.log(`თქვენ წარმატებით შეიძინეთ ${quantity} ბილეთი. გადასახდელია: ${this.price * quantity} ლარი`);
        } else {
            console.log(`სამწუხაროდ, მხოლოდ ${this.availableSeats} ადგილია დარჩენილი`);
        }
    }

}


// test

const movie1 = new Movie("Avengers", 10, 5);
movie1.buyTicket(3);
movie1.buyTicket(3);


// 4)

class Car {

    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }

    accelerate() {
        this.speed += 20;
    }

    showSpeed() {
        console.log(`${this.brand}-ის სიჩქარეა: ${this.speed} კმ/სთ`);
    }

}

// test

const car1 = new Car("BMW");
car1.accelerate();
car1.showSpeed();













// 5) შექმენი კლასი SimpleCalculator. ამ კლასს კონსტრუქტორი და შიდა თვისებები საერთოდ არ სჭირდება.add(a, b) — აბრუნებს a + b-ს.multiply(a, b) — აბრუნებს a * b-ს.შექმენი კალკულატორის ობიექტი და დალოგე calculator.add(5, 10) და calculator.multiply(4, 3)

// 6)შექმენი კლასი Rectangle.
// კონსტრუქტორი იღებს ორ პარამეტრს: width (სიგანე) და height (სიმაღლე).
// getArea() — ითვლის და აბრუნებს მართკუთხედის ფართობს (სიგანე გამრავლებული სიმაღლეზე).
// შექმენი მართკუთხედი გვერდებით 5 და 4, გამოიძახე getArea() და ნახე, დაგიბრუნებს თუ არა 20-ს.





// 5)

class SimpleCalculator {

    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

}

// test

const calculator = new SimpleCalculator();
console.log(calculator.add(33, 44));
console.log(calculator.multiply(1, 2));


// 6)

class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

}

// test
const rectangle1 = new Rectangle(5, 4);
console.log(rectangle1.getArea());  // ki 20 daabruna
console.log(rectangle1.getPerimeter());



