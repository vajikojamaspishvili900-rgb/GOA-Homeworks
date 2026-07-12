// console.log("hello world");

// Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser


// 1) გააკეთეთ ორი ფაილი helper.js და script.js 

// helper.js ში შექმენით სხვადასხვა ფუნქციები და დააიმპორტეთ ისინი script.js ში და გატესტეთ მისი მუშაობა.



const {
    sum,
    subtract,
    multiply,
    divide,
    misalmeba,
    evenOrOdd,
    positiveOrNegative
} = require("./helper.js");

// 1
console.log(sum(21, 1));

// 2
console.log(subtract(23, 1));

// 3
console.log(multiply(11, 2));

// 4
console.log(divide(44, 2));

// 5
console.log(misalmeba("jemali"));

// 6
console.log(evenOrOdd(22));

// 7
console.log(positiveOrNegative(-22));
console.log(positiveOrNegative(22));
console.log(positiveOrNegative(0));
