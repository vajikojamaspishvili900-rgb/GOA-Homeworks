// # Homework

// 1) აუცილებლად გადახედეთ რესურსებში ჩაგდებულ კოდებს და კარგად გაიაზრეთ

// 2) გაიმეორეთ განვლილი მასალა

// 3) გადახედეთ აუცილებლად ჩანაწერს

// 4) მომხმარებელს შემოაყვანინეთ ინფორმაცია სახელი, გვარი, ემაილი, პაროლი, შეამოწმეთ პაროლი 8 character ზე ნაკლები არ უნდა იყოს შემდეგ ჩაამატეთ ინფორმაცია localstorage ში გააკეთეთ ასევე შემოწმება თუ ემაილი ერთხელ არის უკვე localstorage ში მეორეჯერ აღარ ჩაემატოს

// 5) დაასრულეთ საკლასო დავალება ვისაც არ დაგისრულებიათ



// 4)

const form = document.querySelector("form")
const users = []
const title = (str) => {
    str =  str.toLowerCase().split(" ");
    return str.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

form.addEventListener("submit", (e) => {

    e.preventDefault()

    // const name = title(`${document.getElementById("firstName").value} ${document.getElementById("lastName").value}`.trim());

    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value.trim();
    const button = document.querySelector("button")

    const existingUser = users.find(user => user.email === name);
    if (existingUser) {
        alert("THIS EMAIL ALREADY EXISTS");
        return;
    }

    if (pass.length < 8) {
        alert("password must contain at least 8 characters!");
        return;
    }

    const userObj = {
        name,
        lastname,
        email,
        pass,
    }

    users.push(userObj)
    localStorage.setItem("user", JSON.stringify(users))
    console.log(users);
    form.reset()
})



// localStorage.setItem("key","value") → ინახავს რაიმე მონაცემს ბრაუზერში

// localStorage.getItem("key") → აბრუნებს შენახულ მონაცემს, value-ს

// JSON.stringify(object) → ობიექტს გადააქცევს JSON-ის ტექსტად

// JSON.parse(text) → JSON-ის ტექსტს გადააქცევს ობიექტად


