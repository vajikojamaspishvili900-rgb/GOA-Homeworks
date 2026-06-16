// # Classwork

// 1) გააკეთეთ სარეგისტრაციო ფორმა მნიშნველობები შეინახეთ ობიექტში და ფორმის დადასტურების შემდეგ დამოიტანეთ ინფორმცია localstorage ში

// 2) კომენტარებით ახსენით რა არის json და რაშ გამოიყენება და ასევე ახსენით ქვემოთ მოცემული მეთოდები

// // localStorage.setItem()
// // localStorage.getItem()

// // JSON.stringify() 
// // JSON.parse()


//1)
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.querySelector("form input[type=text]");
    const email = document.querySelector("form input[type=email]");
    const pas = document.querySelector("form input[type=password]");
    const user = {
        username: username.value,
        email: email.value,
        password: pas.value
    };
    localStorage.setItem("user", JSON.stringify(user));
    form.reset()
});

//2)

// localStorage.setItem("key","value") → ინახავს რაიმე მონაცემს ბრაუზერში

// localStorage.getItem("key") → აბრუნებს შენახულ მონაცემს, value-ს

// JSON.stringify(object) → ობიექტს გადააქცევს JSON-ის ტექსტად

// JSON.parse(text) → JSON-ის ტექსტს გადააქცევს ობიექტად


