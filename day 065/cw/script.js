// # Classwork 

// 1) შექმენი constructor სახელით book კონსტრუქტორში უნდა გადაეცეს properties: სათაური, ავტორი, ფასი შიგნით შექმენი მეთოდი getInfo() რომელიც კონსოლში დაბეჭდავს ტექსტს ასე "წიგნის სათაურია [სათაური] ავტორი [ავტორი], და ფასი [ფასი]" შემდეგ გამოიძახე ეს კონსტრუქტორი და გადაეცი ორი მაგალითი

// 1)
function book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.getInfo = () => {
        console.log(`წიგნის სათაურია ${this.title}, ავტორი ${this.author}, და ფასი ${this.price} ლარი`);
    }
}

const book1 = new book("magari wigni", "wignis avtori", 0.99999);
const book2 = new book("აი-ია", "იაკობ გოგებაშვილი", 15);

book1.getInfo();
book2.getInfo();


// 2) შექმენი ფუნქცია-კონსტრუქტორი სახელით .PiggyBank() ამ ფუნქციის შიგნით შექმენი უბრალო ცვლადი .money = 0; ამავე ფუნქციის შიგნით, შექმენი ორი მეთოდი:this
// this.setMoney — რომელიც შეცვლის ყულაბაში არსებულ თანხას.
// this.getMoney — რომელიც დააბრუნებს ყულაბაში არსებულ თანხას.

// new ოპერატორით შექმენი ახალი ყულაბა.
// setMoney მეთოდით ჩააგდე შიგნით 50 ლარი.
// getMoney მეთოდით შეამოწმე და ეკრანზე გამოიტანე რამდენი ლარია ყულაბაში.

// 2)
function piggyBank() {
    this.money = 0
    this.setMoney = (amount) => {
        this.money += amount
    }
    this.getMoney = () => {
        return this.money
    }
}

const mybank = new piggyBank()
mybank.setMoney(20)
mybank.setMoney(100)
console.log(`ყულაბაში ${mybank.getMoney()} ლარი აგდია`)

