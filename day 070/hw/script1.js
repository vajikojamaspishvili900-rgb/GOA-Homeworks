// # Homework

// 1) კომენტარებით ახსენით რა არის hoisting

// 2) https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj გააკეთეთ ეს პროექტი მასივში შეინახეთ ინფორმაცია და დააკონსოლოგეთ ასევე გააკეთეთ შემოწმებები ემაილი უკვე თუ არსებობს და პაროლი მინიმუმ 8 სიმბოლოსგან რო შედგება

// 3) დაასრულეთ საკლასო დავალება

// 4) აუცილებლად გადახედეთ ჩანაწერს



// 1)
// Hoisting არის JavaScript-ის მექანიზმი, რომელიც საშუალებას აძლევს ფუნქციებს და ცვლადებს 
// წინასწარ გამოცხადებულად ჩაითვალოს, მიუხედავად იმისა, რომ ისინი კოდში მოგვიანებით არიან დაწერილი. 
// ეს ნიშნავს, რომ ჩვენ შეგვიძლია გამოვიყენოთ ფუნქცია ან ცვლადი მანამდე, ვიდრე ის დაწერილია ჩვენს კოდში.

// მაგ.
// console.log(myVar); // undefined იქნება
// var myVar = 5;
// myVar ცვლადი "hoisted" ხდება და მისი მნიშვნელობა არის undefined, 
// სანამ ის სინამდვილეში არ არის დაწერილი და მნიშვნელობა(ანუ ამ შემთხვევაში 5) არ მიენიჭება მას.

// 2)
const title = (str) => {
    str =  str.toLowerCase().split(" ");
    return str.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};
const users = [];
const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = title(`${document.getElementById("firstName").value} ${document.getElementById("lastName").value}`.trim());
    const email = document.getElementById("email").value.trim();

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("THIS EMAIL ALREADY EXISTS");
        return;
    }
    const user = {
        name,
        email,
        message: document.getElementById("message").value.trim()
    };
    users.push(user);
    console.log(users);
    form.reset();
});


