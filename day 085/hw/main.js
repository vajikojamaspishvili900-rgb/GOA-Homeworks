// ```# Homework 

// 1) გაიარეთ codecademy აქამდე https://www.codecademy.com/courses/learn-intermediate-javascript/lessons/async-await/exercises/introduction```




// 2) შექმენი ასინქრონული ფუნქცია სახელად startCountdown, რომელიც კონსოლში თანმიმდევრობით დაბეჭდის შემდეგ ტექსტებს, თითოეულ ნაბიჯს შორის 1-წამიანი დაყოვნებით:

// "მზადება იწყება..." (დაელოდე 1 წამი)

// "3..." (დაელოდე 1 წამი)

// "2..." (დაელოდე 1 წამი)

// "1..." (დაელოდე 1 წამი)

// "გაშვება!"

// მინიშნება: გამოიყენე დამხმარე ფუნქცია, რომელიც აბრუნებს Promise-ს setTimeout-ით.

// 3) შექმენი ასინქრონული ფუნქცია processOrder(orderId), რომელიც ასრულებს შეკვეთის დამუშავების სიმულაციას ეტაპობრივად. თითოეულ ეტაპს შორის უნდა იყოს 1.5-წამიანი დაყოვნება.

// კონსოლში თანმიმდევრობით უნდა იბეჭდებოდეს:

// შეკვეთა #${orderId} მიღებულია. ვამოწმებთ მარაგს... (დაელოდე 1.5 წამი)

// თანხა წარმატებით ჩამოიჭრა. მიმდინარეობს შეფუთვა... (დაელოდე 1.5 წამი)

// შეკვეთა გადაეცა კურიერს! მადლობა რომ სარგებლობთ ჩვენით.

// მინიშნება: გამოიყენე დამხმარე ფუნქცია, რომელიც აბრუნებს Promise-ს setTimeout-ით.





//2)

async function startCountdown() {
    console.log("მზადება იწყება...");
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("3...");
            resolve();
        }, 1000);
    });
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("2...");
            resolve();
        }, 1000);
    });
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("1...");
            resolve();
        }, 1000)
    });
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("გაშვება!");
            resolve();
        }, 1000)
    });
}






//3)
async function processOrder(orderId) {
    const startcountdownPromise = await startCountdown(); // await gavxade wina nomershi sheqmnili funqcia radgan orive nomeri tanmimdevrobit gaeshvas
    console.log(`შეკვეთა #${orderId} მიღებულია. ვამოწმებთ მარაგს...`);
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("თანხა წარმატებით ჩამოიჭრა. მიმდინარეობს შეფუთვა...");
            resolve();
        }, 1500);
    });
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("შეკვეთა გადაეცა კურიერს! მადლობა რომ სარგებლობთ ჩვენით.");
            resolve();
        }, 1500);
    });
}
processOrder(122);