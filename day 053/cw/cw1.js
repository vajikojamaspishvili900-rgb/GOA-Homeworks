// # Classwork

// 1) კომენტარებით ახსენით რას ნიშნავს increment და decrement
// 2) მოიყვანეთ ორ-ორი მაგალით თითოეულ მათემატიკურ ოპერაციაზე
// 3) if,else ი გააკეთეთ და შეამოწმეთ არის თუ არა რიცხვი ლუწი თუ არის გამოიტანეთ "Even" 
// თუ არის ნული გამოიტანეთ "Zero" და თუ არის კენტი გამოიტანეთ "Odd" 

// 4) შექმენი 3-ი ცვლადი ჯერ შეინახეთ თქვენი სახელი,გვარი,საყვარელი სპორტი, 
// სტრინგ ლიტერალის გამოყენებით გამოიტანეთ ერთი დიდი წინადადება.




// 1) Increment - ზრდის ცვლადის მნიშვნელობას ერთი ერთეულით
let x = 5;
x++;

// Decrement - ამცირებს ცვლადის მნიშვნელობას ერთი ერთეულით
let y = 5;
y--;


// 2)

console.log(2+3);
console.log(10+67);

console.log(55-2)
console.log(12-1)

console.log(4*5)
console.log(8*9)

console.log(10 / 2)
console.log(15 / 3)

console.log(20 % 2)
console.log(40 % 4)

console.log(5 ** 2)
console.log(3 ** 3)


// 3)

let num = 61
if (num === 0){
    console.log("Zero")
}else if(num % 2 === 0){
    console.log("It's Even")
}else{
    console.log("It's Odd")
}

// 4)
let fistName = "Vaja"
let lastName = "Jamaspishvili"
let sport = "Football"
console.log(`My name is ${fistName} ${lastName}, my favorite sport is ${sport}`)