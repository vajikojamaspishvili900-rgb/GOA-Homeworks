// დავალება 4: "კალკულატორის მოდული"
// შექმენი ორი ფაილი:

// ფაილი 1: calculator.js

// შექმენი და დააექსპორტე (named export) მარტივი ფუნქციები: add(a, b) და subtract(a, b).

// შექმენი და დააექსპორტე (default export) კლასი Calculator, რომელსაც ექნება მეთოდი multiply(a, b).

// ფაილი 2: main.js

// დააიმპორტე ფუნქციები და კლასი calculator.js-დან.

// გამოიყენე ყველა ფუნქცია და დაბეჭდე შედეგები კონსოლში.


import Calc, { add, subtract } from './calculator2.js'

console.log(add(21, 1))
console.log(subtract(24, 2))

const calc = new Calc()
console.log(calc.multiply(2, 11))

