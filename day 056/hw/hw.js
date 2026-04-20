// 1)ახსენით ეს მეთოდები კომენტარებით და მოიყვანეთ 2-2 მაგალითი თითოეულზე:
// .length
// .join()
// .toString()
// .pop()
// .push()
// .shift()
// Array.isArray();
// .concat()
// .slice()
// .splice()
// დავალება 2: შეასწორე Scope Pollution (დაბინძურება)
// ქვემოთ მოცემულ კოდში ფუნქცია changePrice შემთხვევით ცვლის გლობალურ ფასს. შეასწორე კოდი ისე, რომ ფუნქციამ შექმნას საკუთარი ლოკალური ცვლადი და არ შეეხოს გლობალურს.

let price = 100;

const changePrice = () => {
    price = 50; // აქ არის შეცდომა
    console.log("ახალი ფასი ფუნქციაში:", price);
};

changePrice();
console.log("გლობალური ფასი:", price); // აქ ისევ 100 უნდა ეწეროს!

// ----------------------------------------------------------------------------------------------------------------

// დავალება 3: პარამეტრები და Scope
// ფუნქციის პარამეტრებიც ლოკალური სკოუპის ნაწილია. გამოიცანი შედეგი:


let hero = "Batman";

function transform(hero) {
    hero = "Superman";
    console.log("ფუნქციის შიგნით:", hero);
}

transform("Iron Man");
console.log("გარეთ:", hero);
// კითხვა: რატომ არ შეიცვალა გლობალური hero Superman-ით? და რა როლი ითამაშა აქ "Iron Man"-მა?





//              პასუხები:
// 
// \/  \/  \/  \/  \/  \/  \/  \/  \/  \/


// 1)


// .length
// აბრუნებს მასივის ელემენტების რაოდენობას
let arr1 = [1, 2, 3];
console.log(arr1.length);

let arr2 = ["Gio", "Nika", "Vaja"];
console.log(arr2.length);


// .join()
// აერთიანებს მასივის ელემენტებს ერთ სტრინგში, ჩაემატება separator ამ ელემენტებს შორის
let arr3 = ["me", "miyvars", "GOA"];
console.log(arr3.join("-"));

let arr4 = ["Hello", "world"];
console.log(arr4.join(" "));


// .toString()
// მასივს გადააქცევს სტრინგად
let arr5 = [1, 2, 3];
console.log(arr5.toString());

let arr6 = ["x", "y"];
console.log(arr6.toString());


// .pop()
// შლის მასივის ბოლო ელემენტს
let arr7 = [1, 2, 3];
arr7.pop();
console.log(arr7);

let arr8 = ["apple", "banana"];
arr8.pop();
console.log(arr8);


// .push()
// ამატებს ელემენტს მასივის ბოლოში
let arr9 = [1, 2];
arr9.push(3);
console.log(arr9);

let arr10 = ["zura"];
arr10.push("var");
console.log(arr10);


// .shift()
// შლის მასივის პირველ ელემენტს
let arr11 = [1, 2, 3];
arr11.shift();
console.log(arr11);

let arr12 = ["red", "blue"];
arr12.shift();
console.log(arr12);


// Array.isArray()
// ამოწმებს არის თუ არა მნიშვნელობა მასივი
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("hello"));


// .concat()
// აერთიანებს მასივებს
let a = [1, 2];
let b = [3, 4];
console.log(a.concat(b));

let x = ["a"];
let y = ["b"];
console.log(x.concat(y));


// .slice()
// აბრუნებს მასივის ნაწილს (ორიგინალს არ ცვლის)
let arr13 = [1, 2, 3, 4];
console.log(arr13.slice(1, 3));

let arr14 = [10, 20, 30];
console.log(arr14.slice(0, 2));


// .splice()
// ცვლის მასივს (შლის ან ამატებს ელემენტებს), ვუთითებთ ინდექსს, რამდენი ელემენტი უნდა წაიშალოს და რა ელემენტები უნდა დაემატოს
let arr15 = [1, 2, 3];
arr15.splice(1, 1);
console.log(arr15);

let arr16 = [1, 2, 3];
arr16.splice(1, 0, 5);
console.log(arr16);


// .unshift() 
// ამატებს ელემენტს მასივის დასაწყისში
let arr17 = [2, 3];
arr17.unshift(1);
console.log(arr17);

let arr18 = ["blue"];
arr18.unshift("red");
console.log(arr18);



// 2)

let price = 100;

const changePrice = () => {
    let price = 50; // ლოკალური ცვლადი (ანუ აღარ ეხება გლობალურს)
    console.log("ახალი ფასი ფუნქციაში:", price);
};

changePrice(); // 50 ს გამოიტანს
console.log("გლობალური ფასი:", price); // ეს 100 ს



// 3)

let hero = "Batman";

function transform(hero) {
    hero = "Superman";
    console.log("ფუნქციის შიგნით:", hero);
}

transform("Iron Man");
console.log("გარეთ:", hero);

// გლობალური hero არ შეცვლილა 
// ფუნქციის პარამეტრი hero არის ლოკალური ცვლადი, 
// რომელიც ფუნქციის შიგნით არსებობს და არ ეხება გლობალურ ცვლადს


