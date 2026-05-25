// 1) შექმენით საიტი რომელზეც იქნება ერთი პარაგრაფი და ერთი ღილაკი,

// დავალება არის შემდეგი: როდესაც ღილაკზე დავაწვებით უნდა შეიცვალოს პარაგრაფის ტექსტი და პარაგრაფის ფერი


// 2) შექმენით საიტი სადაც იქნება div რომლის ზომაა width:200px, height:200px და backgorund color არის წითელი და ასევე უნდა იყოს ღილაკი, თქვენი დავალებაა როდესაც ამ ღილაკს დავაწვებით, div გაიზარდოს სიგანეში და გახდეს 300 px და ასევე შეეცვალოს background-color და გახდეს მწვანე.


// 3) შექმენით counter საიტი, სადაც იქნება -1 ღილაკი, +1 ღილაკი და პარაგრაფი რომელიც იქნება 0,

// თქვენი დავალებაა, როდესაც +1 ღილაკს დავაწვებით პარაგრაფში მყოდი რიცხვი გაიზარდოს ერთით, ხოლო როცა -1 ს დავაჭერთ შემცირდეს 1 ით



// 1)
let paragraph = document.getElementById("text");
let button = document.getElementById("btn");
button.onclick = function () {
    paragraph.innerHTML = "Text Changed";
    paragraph.style.color = "red";
};

// 2)
let div = document.getElementById("box");
let button2 = document.getElementById("btn2");

div.style.width = "200px";
div.style.height = "200px";
div.style.backgroundColor = "red";
button2.onclick = function () {
    div.style.width = "300px";
    div.style.backgroundColor = "green";
};


// 3)
let count = 0;

let paragraph = document.getElementById("count");
let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
plusBtn.onclick = function () {
    count++;
    paragraph.innerHTML = count;
};
minusBtn.onclick = function () {
    count--;
    paragraph.innerHTML = count;
};


