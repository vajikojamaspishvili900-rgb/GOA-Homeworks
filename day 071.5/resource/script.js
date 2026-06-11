//1
const users = [
    { email: "test123@gmail.com", password: "1234" },
    { email: "test234@gmail.com", password: "1010" },
    { email: "gamarjoba@gmail.com", password: "xvichakvaracxlia123" },
];

const userDetails = users.map((userr) => {
    pass1 = userr.password
    userr.password = "*".repeat(pass1.length)
    return `${ userr.email } ${ userr.password }`;
});
console.log(userDetails);


//2
const products = [
    { name: "shirt", price: 20, isAvailable: true},
    { name: "banana", price: 3, isAvailable: false},
    { name: "kurtka", price: 60, isAvailable: true},
]

const cheapAndAvailable = products.filter(product => product.isAvailable && product.price < 50)
console.log(cheapAndAvailable);


//3
const cart = [
    {name: "book", price:15, quantity: 2},
    {name: "pen", price:2, quantity: 3},
    {name: "notebook", price:5, quantity: 5}, 
]

const initialReport = {totalCartPrice: 0, totalItemsQuantity: 0}
const finalReport = cart.reduce((acc, item) => {
    acc.totalCartPrice += item.price * item.quantity
    acc.totalItemsQuantity += item.quantity
    return acc
}, initialReport)

console.log(finalReport);
const vegetables = ["tomato", "potato", "cucumber", "pumpkin"]

const minLength = vegetables.some(vegetable => vegetable.length <= 7)
console.log(minLength);


//4
const person = {
    _age: 12,
    set age(newAge) {
        if(typeof newAge === "number"){
            this._age = newAge 
        }else {
            console.log("you must assign number to age");
        }
    }
}

person.age = "15"

console.log(person._age)