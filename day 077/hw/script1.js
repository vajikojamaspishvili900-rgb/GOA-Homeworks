// # Homework 

// 1) გადახედეთ რესურსებში ჩაგდებულ კოდებს და გაიაზრეთ

// 2) დაასრულეთ საკლასო ვისაც არ დაგისრულებიათ

// 3) შექმენი კლასი Product თვისებებით: name (დასახელება) და price (ორიგინალი ფასი).
// applyDiscount(percentage) — იღებს ფასდაკლების პროცენტს (მაგალითად 20 ნიშნავს 20%-იან ფასდაკლებას) და აკლებს ამ პროცენტს პროდუქტის არსებულ ფასს (price).
// getInfo() — ბეჭდავს ტექსტს: "[პროდუქტის სახელი] ღირს [მიმდინარე ფასი] ლარი".
// შექმენი პროდუქტი 100 ლარიანი ფასით. აამუშავე 15%-იანი ფასდაკლება და გამოიძახე getInfo(), რომ ნახო ახალი ფასი.

// 4) შექმენი კლასი SmartPhone თვისებებით: model (მოდელი) და battery (ელემენტის პროცენტი, საწყისი მნიშვნელობა 50).
// charge() — ზრდის ბატარეის მუხტს 15-ით. მნიშვნელოვანია: თუ ბატარეა 100-ს გადასცდება, მნიშვნელობა მაინც 100-ზე გააჩერე.
// showStatus() — კონსოლში ბეჭდავს: "[model]-ის ბატარეა არის [battery]%".
// შექმენი ტელეფონი, გამოიძახე charge() რამდენჯერმე და ნახე, გაჩერდება თუ არა მაქსიმუმ 100-ზე.

// 5) შექმენი კლასი SchoolPupil თვისებებით: name (სახელი) და gradeLevel (კლასი, მაგალითად 5 — ანუ მეხუთე კლასელი).
// promote() — ზრდის gradeLevel-ს 1-ით (გადადის შემდეგ კლასში).
// getInfo() — აბრუნებს ტექსტს: "[name] არის მე-[gradeLevel] კლასის მოსწავლე".
// შექმენი მოსწავლე, რომელიც არის მე-6 კლასში, გამოიძახე promote() და შემდეგ დაბეჭდე getInfo().

// 6) შექმენი კლასი PiggyBank. მას აქვს მხოლოდ ერთი თვისება: coins (მონეტების რაოდენობა, თავიდან არის 0).
// addCoins(amount) — ყულაბაში ამატებს მითითებულ რაოდენობა მონეტას.
// buyToy(cost) — პარამეტრად იღებს სათამაშოს ფასს.
// თუ ყულაბაში საკმარისი მონეტებია (coins >= cost), მონეტებს აკლდება სათამაშოს ფასი და ბეჭდავს: "სათამაშო ნაყიდია!".
// თუ მონეტები არ გეყოფა, ბეჭდავს: "არ გაქვს საკმარისი მონეტები!".
// ჩააგდე ყულაბაში 10 მონეტა, სცადე 15-მონეტიანი სათამაშოს ყიდვა, შემდეგ დაამატე კიდევ 10 და სცადე თავიდან.


// 3)


class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    applyDiscount(percent) {
        const discountAmount = (this.price * percent) / 100;
        this.price -= discountAmount;
    }


    getInfo() {
        console.log(`${this.name} ღირს ${this.price} ლარი`);
    }

}

// test

const product = new Product("magari telefoni", 100);

product.applyDiscount(15);
product.getInfo();



// 4)

class SmartPhone {

    constructor(model) {
        this.model = model;
        this.battery = 50;
    }

    charge() {
        this.battery += 15;
        if (this.battery > 100) {
            this.battery = 100;
        }
    
    }

    showStatus() {
        console.log(`${this.model}-ის ბატარეა არის ${this.battery}%`);
    }


}

// test

const phone = new SmartPhone("magari samsungi");
phone.charge();
phone.charge();
phone.charge();
phone.charge();
phone.showStatus();





// 5)

class SchoolPupil {
    constructor(name, gradeLevel) {
        this.name = name;
        this.gradeLevel = gradeLevel;
    }

    promote() {
        this.gradeLevel++;
    }

    getInfo() {
        console.log(`${this.name} არის მე-${this.gradeLevel} კლასის მოსწავლე`);
    }
}

// test
const pupil = new SchoolPupil("bavshvi", 6);
pupil.getInfo();
pupil.promote();
pupil.getInfo();





// 6)

class PiggyBank {


    constructor() {
        this.coins = 0;
    }


    addCoins(amount) {
        this.coins += amount;
    }


    buyToy(cost) {

        if (this.coins >= cost) {
            this.coins -= cost;
            console.log("სათამაშო ნაყიდია!");
        } else {
            console.log(`არ გაქვს საკმარისი მონეტა! საჭიროა კიდევ ${cost - this.coins}, შენ კი მხოლოდ ${this.coins} გაქვს.`);
        }

    }


}


// test

const piggyBank = new PiggyBank();
piggyBank.addCoins(10);
piggyBank.buyToy(15);
piggyBank.addCoins(10);
piggyBank.buyToy(15);


