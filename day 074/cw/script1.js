// 1) https://javascript.info/
// (image1.png)
// გადახედეთ მოცემულ რესურსს და ამიხსენით რა არის კლასი და რას აკეთებს, უნდა მომიყვანოთ 5 მაგალითი კლასებზე
// https://youtu.be/U2vxAEiaVRY?si=wfvS2QUfk24pBmT1



// 1)

// class არის მაგ სახლის ნახაზი, ხოლო ობიექტი არის თვითონ ამ ნახაზით აწყობილი ნამდვილი სახლი
// მასში ვინახავთ რაიმე მონაცემებს, მეთოდებს

// მაგალითად, თუ გვაქვს Person- ის class, მას შეიძლება ჰქონდეს:
// სახელი
// ასაკი
// რაიმე მისალმების ფუნქციაც


// 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`hi i am ${this.name}`);
    }

    showAge() {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

const person1 = new Person("adamiani", 14);

person1.greet();
person1.showAge();



// 2

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    drive() {
        console.log(`${this.brand} ${this.model} magaria`);
    }
}

const car1 = new Car("BMW", "C klasi");

car1.drive();



// 3

class Animal1 {
    eat() {
        console.log("animal is eating something");
    }
}

class Dog extends Animal1 {
    bark() {
        console.log("vaf vaf!...");
    }
}

const dog = new Dog();

dog.eat();
dog.bark();



// 4

class Animal2 {
    speak() {
        console.log("animal is talking");
    }
}

class Cat extends Animal2 {
    speak() {
        console.log("miau");
    }
}

const cat = new Cat();

cat.speak();




// 5

class Animal3 {
    constructor(name) {
        this.name = name;
    }
}



class maimuni extends Animal3 {
    constructor(name, color) {
        super(name);

        this.color = color;
    }

    showInfo() {
        console.log(`${this.name} aris ${this.color}`);
    }
}

const maimuni2 = new maimuni("maimuni", "zangi");

maimuni2.showInfo();





// =========================================



// Classwork 2

// https://www.codecademy.com/courses/learn-intermediate-javascript/lessons/classes/exercises/introduction

// I've completed this classwork (Proof: image2.png)






