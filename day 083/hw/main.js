// # Homework

// 1) გადახედეთ ჩანაწერს

// 2) ყველამ დაასრულეთ საკლასო დავალება ვისაც არ დაგისრულებიათ აუცილებლად

// 3) შექმენი მოდული cartUtils.js, სადაც იქნება ფუნქციები:
// calculateTotal(cart) — ითვლის კალათაში არსებული პროდუქტების ჯამურ ღირებულებას.
// applyDiscount(total, discountPercent) — ითვლის ფასდაკლებულ თანხას.

// 4) შექმენი მოდული mathSimple.js ორი ფუნქციით: square(n) (კვადრატში აყვანა) და cube(n) (კუბში აყვანა).

// 5) შექმენი მოდული discount.js Default (ნაგულისხმევი) ექსპორტით, რომელიც იღებს საწყის ფასს და პროცენტს, შემდეგ კი აბრუნებს საბოლოო ფასს.

// 6) შექმენი მოდული arrayHelpers.js ორი მარტივი ფუნქციით:

// getFirst(arr) — აბრუნებს მასივის პირველ ელემენტს.

// getLast(arr) — აბრუნებს მასივის ბოლო ელემენტს.







import { calculateTotal, applyDiscount } from "./cartUtils.js";
import { square, cube } from "./mathSimple.js";
import discount from "./discount.js";
import { getFirst, getLast } from "./arrayHelper.js";



// cartUtils.js
const cart = [
    { name: "Laptop", price: 3000 },
    { name: "Mouse", price: 100 },
    { name: "Keyboard", price: 200 }
];

const total = calculateTotal(cart);
console.log("Total:", total);
console.log("Discounted (10%):", applyDiscount(total, 10));


// mathSimple.js
console.log(square(5));
console.log(cube(5));



// discount.js
console.log(discount(1000, 20));



// arrayHelpers.js
const nums = [10, 20, 30, 40, 50];

console.log(getFirst(nums));
console.log(getLast(nums));

