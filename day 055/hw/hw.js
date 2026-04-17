
// Homework

// 1) შექმენი Arrow Function, რომელიც მიიღებს ცელსიუსს (C), გადაიყვანს ფარენჰაიტში (F) ფორმულით: F = C * 1.8 + 32.

// 2) შექმენი Arrow Function, რომელიც გამოითვლის ყოველთვიურ გადასახადს. ფუნქციამ უნდა მიიღოს ორი პარამეტრი: amount (მთლიანი თანხა) და years (წლების რაოდენობა). გაყავი თანხა თვეების რაოდენობაზე და მიღებულ შედეგს დაუმატე მომსახურების საკომისიო — ფიქსირებული 5 ლარი.

// 3) შექმენი Arrow Function, რომელიც მიიღებს ერთ სტრიქონს (password). ფუნქციამ უნდა დააბრუნოს true, თუ პაროლის სიგრძე არის 8 სიმბოლოზე მეტი. სხვა შემთხვევაში დააბრუნოს false.



// Answers:
// 1)
const celsiusToFahrenheit = (c) => Math.floor(c * 1.8 + 32);
console.log(celsiusToFahrenheit(30))

// 2)
const calculateMonthlyPayment = (amount, years) => Math.floor((amount / (years * 12)) + 5);
console.log(calculateMonthlyPayment(10000, 2))

// 3)
const isPasswordValid = (password) => password.length > 8;
console.log(isPasswordValid("passwordExample"))

