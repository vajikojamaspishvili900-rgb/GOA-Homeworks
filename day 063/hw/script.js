// # Homework 

// 1. შექმენი ფუნქცია , რომელიც იღებს ორ პარამეტრს:  და .robotFactorymodelmobile

// ფუნქციამ უნდა დააბრუნოს ობიექტი.

// დაამატე მეთოდი , რომელიც კონსოლში დაწერს: "Beep Boop! მე ვარ [model]".beep()

// 2. შექმენი ობიექტი , რომელსაც ექნება თვისება  და მეთოდი . მეთოდმა -ის გამოყენებით უნდა დაპრინტოს თქვენი სახელი.personfirstNamesayHellothis

// 3. შექმენი ობიექტი  (მართკუთხედი), რომელსაც ექნება  (სიგანე) და  (სიმაღლე). დაამატე Getter სახელად , რომელიც დააბრუნებს მათ ნამრავლს.rectanglewidthheightarea (ფორმულ არის სიგანე გამრავლებული სიმაღლეზე)




// 1)
function robotFactory(model, mobile) {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log(`Beep Boop! მე ვარ ${this.model}`);
        }
    };
}

const myRobot = robotFactory('roboti', true);
myRobot.beep(); 


// 2)
const person = {
    firstName: "vaja",
    sayHello() {
        console.log(`გამარჯობა, მე ვარ ${this.firstName}`);
    }
};

person.sayHello();


// 3)
const rectangle = {
    width: 20,
    height: 10,
    
    get area() {
        return this.width * this.height;
    }
};

console.log(`მართკუთხედის ფართობია: ${rectangle.area}`);


