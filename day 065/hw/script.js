// 1) უყურეთ ამ ვიდეოს
// https://youtu.be/NO5kUNxGIu0?si=Poag0cHqp0Z2yL4h

// 2) html ში შექმენით h1, შემდეგ javascript იდან გასტილეთ ეს h1 და შეცვალეთ ტექსტის innerHTML, უმჯობესი იქნება ბევრი სტილი ქონდეს

// 3) შექმენი ფუნქცია სახელით .Box() შიგნით ჩაწერე ცვლადი x = 0;

// ამავე ფუნქციაში შექმენი:this
// this.setX(value) — რომელიც ჩაწერს ახალ რიცხვს.x

// this.getX() — რომელიც დააბრუნებს ჩაწერილ რიცხვს.x

// შექმენი ახალი ყუთი .new Box()-ის გამოყენებით.

// setX მეთოდით შიგნით ჩაწერე რიცხვი 10.

// getX მეთოდით წაიკითხე ეს რიცხვი და დაბეჭდე ეკრანზე.

// 4) შექმენი ფუნქცია-კონსტრუქტორი სახელით .Profile(name)

// მას პარამეტრად გადაეცი მხოლოდ ერთი რამ —  (სახელი).name

// ფუნქციის შიგნით შექმენი ორი მეთოდი:this

// this.setName(newName) — რომელიც ძველ სახელს შეცვლის ახალი სახელით.

// this.getName() — რომელიც უბრალოდ დააბრუნებს მიმდინარე სახელს.

// new Profile("Giorgi")-ით შექმენი ახალი მომხმარებელი (სახელით გიორგი).

// ეკრანზე გამოიტანე სახელი  მეთოდით (უნდა დაწეროს "Giorgi").getName()

// ახლა  მეთოდით შეცვალე სახელი.setName("Anano")

// ხელახლა გამოიტანე სახელი ეკრანზე  მეთოდით (ახლა უნდა დაწეროს "Anano").getName()

// 5) დაასრულეთ საკლასო ვისაც არ გაქვთ დასრულებული

// 6) გადახედეთ ჩანაწერს



// 2)
let h1 = document.getElementById('h1');
h1.innerHTML = 'Oi, Hughie!';
h1.style.color = 'darkblue';
h1.style.fontSize = '30px';
h1.style.textAlign = 'center';
h1.style.textShadow = '2px 2px 5px #0000005e';
h1.style.backgroundColor = 'lightblue';
h1.style.padding = '20px';
h1.style.borderRadius = '20px';
h1.style.border = '2px solid darkblue';
h1.style.width = 'fit-content';
h1.style.margin = '0';
h1.style.boxShadow = '2px 2px 10px #0000ff9a';

let b = document.getElementById('body');
b.style.display = 'flex';
b.style.justifyContent = 'center';
b.style.alignItems = 'center';
b.style.height = '100vh';


// 3)
function Box(){
    let x = 0;
    this.setX=function(val){
        x=val;
    }
    this.getX = function(){
        return x;
    }
}
let box1 = new Box();
box1.setX(10);
console.log(box1.getX());

// 4)
function  Profile(name){
    this.name = name;
    this.setName = function(newName){
        this.name = newName;
    }
    this.getName = function(){
        return this.name;
    }
}

let user1 = new Profile("Giorgi");
console.log(user1.getName());

user1.setName("Anano");
console.log(user1.getName());

