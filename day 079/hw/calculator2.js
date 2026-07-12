// დავალება 4: "კალკულატორის მოდული"
// შექმენი ორი ფაილი:

// ფაილი 1: calculator.js

// შექმენი და დააექსპორტე (named export) მარტივი ფუნქციები: add(a, b) და subtract(a, b).

// შექმენი და დააექსპორტე (default export) კლასი Calculator, რომელსაც ექნება მეთოდი multiply(a, b).

// ფაილი 2: main.js

// დააიმპორტე ფუნქციები და კლასი calculator.js-დან.

// გამოიყენე ყველა ფუნქცია და დაბეჭდე შედეგები კონსოლში.



export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export default class Calculator{
    multiply(a, b) {
        return a * b;
    }
}

