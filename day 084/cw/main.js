//  მოიძიეთ ინფორმაცია asynchronous javascript ზე და synchronous javascript ზე და ახსენით კომენტარებით რომელი რა დროს არის სასარგებლო.



// Synchronous JavaScript არის როდესაც კოდი სრულდება რიგრიგობით,
// ანუ ერთი ბრძანება სრულდება და შემდეგ იწყება მეორე.
//
// ეს კარგია მაშინ, როდესაც გვინდა რომ კოდი კონკრეტული თანმიმდევრობით შესრულდეს
// და ერთი მოქმედება დასრულდეს სანამ მეორე დაიწყება.
//
// მაგალითად, როდესაც ერთი მოქმედების შედეგი გვჭირდება შემდეგი მოქმედებისთვის,
// synchronous JavaScript გვაძლევს საშუალებას ყველაფერი სწორად დალაგდეს.



// Asynchronous JavaScript არის როდესაც ზოგიერთი ოპერაცია შეიძლება მოგვიანებით შესრულდეს,
// ხოლო ამ დროს პროგრამა აგრძელებს სხვა კოდის შესრულებას.
//
// ეს მაშინაა კარგი, როდესაც გვაქვს ისეთი ოპერაციები, რომლებსაც დრო სჭირდება,
// მაგალითად ინტერნეტიდან მონაცემების მიღება, ფაილის ჩატვირთვა ან ტაიმერი.
//
// ამის დახმარებით პროგრამა არ იყინება და შეუძლია სხვა კოდის შესრულება,
// სანამ ასინქრონული ოპერაცია დასრულდება.









// 1) შექმენით ფუნქცია waitTwoSeconds, რომელიც აბრუნებს ახალ Promise-ს. ამ Promise-მა 2 წამის (setTimeout) შემდეგ წარმატებით უნდა დააბრუნოს (resolve) ტექსტი: "2 წამი გავიდა!". გამოიძახეთ ეს ფუნქცია და მიღებული შედეგი დაბეჭდეთ კონსოლში .then() მეთოდის გამოყენებით.

// 2) შექმენით ფუნქცია checkNumber(num), რომელიც იღებს რიცხვს და აბრუნებს Promise-ს.
// თუ რიცხვი მეტია ან ტოლია 5-ზე, Promise-მა უნდა დააბრუნოს (resolve) ტექსტი: "რიცხვი ნორმალურია!".
// თუ რიცხვი 5-ზე ნაკლებია, Promise-მა უნდა გამოიწვიოს შეცდომა (reject) ტექსტით: "რიცხვი ძალიან პატარაა!".

// 3) შექმენით ფუნქცია doubleAfterDelay(num), რომელიც იღებს რიცხვს, აბრუნებს Promise-ს და 1 წამის შემდეგ აბრუნებს ამ რიცხვს გამრავლებულს 2-ზე (num * 2).




// 1)
function waitTwoSeconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("2 წამი გავიდა!");
        }, 2000);
    });
}

waitTwoSeconds().then((message) => {
    console.log(message);
});



// 2)
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num >= 5) {
            resolve("რიცხვი ნორმალურია!");
        } else {
            reject("რიცხვი ძალიან პატარაა!");
        }
    });
}

checkNumber(7).then((message) => {console.log(message);}).catch((error) => {
    console.log(error);
});

checkNumber(3).then((message) => {console.log(message);}).catch((error) => {
    console.log(error);
});



// 3)

function doubleAfterDelay(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 1000);
    });
}

doubleAfterDelay(5).then((result) => {
    console.log(result);
});


