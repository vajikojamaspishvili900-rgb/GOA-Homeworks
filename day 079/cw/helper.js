// 1) გააკეთეთ ორი ფაილი helper.js და script.js 

// helper.js ში შექმენით სხვადასხვა ფუნქციები და დააიმპორტეთ ისინი script.js ში და გატესტეთ მისი მუშაობა.
// ნორმალური 5 ფუნქცია



// 1)
const sum = (a, b) => a + b;

// 2)
const subtract = (a, b) =>  a - b;

// 3)
const multiply = (a, b) => a * b;

// 4)
const divide = (a, b) => a / b;

// 5)
const misalmeba = (saxeli) =>`mogesalmebi, ${saxeli}!`;

// 6)
const evenOrOdd = (num) => num % 2 === 0 ? "Even" : "Odd";

// 7)
const positiveOrNegative = (num) => num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";

module.exports = {
    sum,
    subtract,
    multiply,
    divide,
    misalmeba,
    evenOrOdd,
    positiveOrNegative
    
}

