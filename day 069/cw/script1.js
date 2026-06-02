// 1)ახსენით რა არის მოვლენა და რას აკეთებს მოვლენის მსმენელი js ში

// 2) გააკეთეთ საიტი სადაც გექნებათ ერთი div მისი სიგანე უნდა იყოს თავდაპირველად width:200px, height:200 px , როდესაც მაუსის კურსორს მიიტანთ div თან უნდა გაიზარდოს ის როგორც სიგანეში ასევე სიმაღლეში, გამოიყენეთ mouseover მოვლენა

// 3) გააკეთეთ საიტი სადაც გექნებათ ერთი პარაგრაფი და ერთი ღილაკი, როდესაც ღილაკს დააწვებით, უნდა შეიცვალოს პარაგრაფის ფერი და ტექსტი


// ეს ყველაფერი უნდა გააკეთოთ addEventListener ით

// 4) მომხმარებელს შემოატანინეთ სახელი გვარი ემაილი და პაროლი შემდეგ ესენი შეინახეთ ობიექტში და გამოიტანეთ კონსოლში მომხმარებლის ინფორმაცია



// 1)
// მოვლენა არის რაიმე მოქმედება ან შემთხვევა, რომელიც ხდება ვებ გვერდზე, როგორიცაა მაუსის მოძრაობა, კლიკი, კლავიატურის შეხება და ა.შ. მოვლენის მსმენელი (event listener) არის ფუნქცია, რომელიც ასრულებს გარკვეულ ქმედებას, როდესაც კონკრეტული მოვლენა ხდება. მაგალითად, თუ გსურთ, რომ რაღაც მოხდეს, როდესაც მომხმარებელი დააწვება ღილაკს, შეგიძლიათ დაამატოთ მოვლენის მსმენელი ამ ღილაკზე, რომელიც გამოიძახებს ფუნქციას, როდესაც კლიკი მოხდება.

// 2)
const myDiv = document.getElementById('myDiv');
myDiv.addEventListener('mouseover', function() {
    myDiv.style.width = '300px';
    myDiv.style.height = '300px';
});

// 3)
const myParagraph = document.getElementById('myParagraph');
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    myParagraph.style.color = 'red';
    myParagraph.textContent = 'პარაგრაფის ტექსტი შეიცვალა';
});

// 4)
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function() {
    const user = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    console.log(user);
});
