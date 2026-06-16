// # Homework 

// 1) https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj გააკეთეთ ეს პროექტი, და მონაცემები შეინახეთ localstorag ში

// 2) დაასრულეთ საკლასო დავალება

// 3) გადახედეთ ჩანაწერს





// title function
const title = (str) => {
    str =  str.toLowerCase().split(" ");
    return str.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

// creating variables
const users = [];
const form = document.getElementById("form");

// Event Listener
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

    localStorage.setItem("user", JSON.stringify(user));

    users.push(user);
    console.log(users);
    form.reset();

});



// localStorage.setItem("key","value") → ინახავს რაიმე მონაცემს ბრაუზერში

// localStorage.getItem("key") → აბრუნებს შენახულ მონაცემს, value-ს

// JSON.stringify(object) → ობიექტს გადააქცევს JSON-ის ტექსტად

// JSON.parse(text) → JSON-ის ტექსტს გადააქცევს ობიექტად


