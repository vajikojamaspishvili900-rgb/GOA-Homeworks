// # Homework

// 1. რიცხვების "ფილტრი" (for loop)
// გაქვს მასივი: const numbers = [15, 2, 8, 33, 20, 7, 44, 11];

// დავალება: გამოიყენე for ციკლი და დაბეჭდე მხოლოდ ის რიცხვები, რომლებიც 10-ზე მეტია.

// 2. შექმენით რამე პაროლი, შემდეგ მომხმარებელს შემოატანინეთ prompt ის საშუალებით და იქამდე შემოაყვანინეთ სანამ სწორი არ იქნება 

// 3. შემთხვევითი რიცხვის გამოცნობა (while loop)

// დავალება: პროგრამამ უნდა "ჩაიფიქროს" რიცხვი (მაგ: const secret = 7;). გამოიყენე while(true) ციკლი და prompt(), რომ მომხმარებელს სთხოვო რიცხვის გამოცნობა. ციკლი გაჩერდეს (break) მხოლოდ მაშინ, როცა მომხმარებელი სწორ რიცხვს შეიყვანს.

// 4. ზოგჯერ მომხმარებელს სთხოვ შემოიყვანოს რიცხვი 10-დან 20-მდე. თუ არასწორად შემოიყვანს, prompt თავიდან უნდა ამოხტეს.

// დავალება: გამოიყენე do...while, რომ მომხმარებელს მინიმუმ ერთხელ სთხოვო რიცხვი.

// პირობა: ციკლი გაგრძელდეს, სანამ შეყვანილი რიცხვი ნაკლებია 10-ზე ან მეტია 20-ზე.



// 1)
const numbers = [15, 2, 8, 33, 20, 7, 44, 11];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(numbers[i]);
    }
}

// 2)
const correctPassword = "GOA";
let userInput = prompt("Enter the password:");
while (userInput !== correctPassword) {
    userInput = prompt("Wrong password try again:");
}
alert("Correct password, Congrats!");

// 3)
const secret = Math.round(Math.random() * 10);
while (true) {
    const guess = Number(prompt("Guess the number between 0 and 10:"));
    if (guess === secret) {
        alert("Congrats! You guessed the number!");
        break;
    } else {
        alert("Wrong, try again!");
    }
}

// 4)
let userNumber;
do {
    userNumber = Number(prompt("Enter a number between 10 and 20:"));
} while (userNumber < 10 || userNumber > 20);
alert("Correct, you entered a number between 10 and 20!");

