// 1) მომხმარებელს შეამოატანინეთ მისი ინფორმაცია ჩასვით ობიექტში და კონსოლში გამოიტანეთ რამდენი მომხმარებელიც შემოვა ყველა მომხმარებელი გამოიტანეთ ერთ ობიექტში.

// 2) გააკეთეთ counter addEventListener ის გამოყენებით html ში გააკეთეთ ორი ღილაკი "-" და "+" და ერთი პარაგრაფი რიცხვის მთვლელისთვის როდესაც "+" დააკლიკებთ პარაგრაფს მოემატოს რიცხვი ერთით "-" ზეც ანალოგიურად ოღონდ დააკლდეს რიცხვი.

// 3) გააკეთეთ ერთ შავი დივი და ქვემოთ სამი ღილაკი: "მწვანე", "წითელი", "ლურჯი" თითოეულ ღილაკზე დაჭერისას უნდა შეიცვალოს ფერი დივმა და გახდეს ის ფერი რომელზეც დააკლიკეთ აქაც გამოიყენეთ addEventListener.

// 4) დაასრულეთ საკლასო დავალება.

// 5) გადახედეთ ჩანაწერს.





// 1)
const userForm = document.getElementById('userForm');
const users = [];
userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const user = {
        name: name,
        surname: surname,
        age: age
    };
    users.push(user);
});
console.log(users);


// 2)
const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
let count = 0;
incrementButton.addEventListener('click', function() {
    count+=1;
    counter.textContent = count;
});
decrementButton.addEventListener('click', function() {
    count--;
    counter.textContent = count;
});

// 3)
const box = document.getElementById('box');
const change1 = document.getElementById('change1');
const change2 = document.getElementById('change2');
const change3 = document.getElementById('change3');
const def = document.getElementById('def');
change1.addEventListener('click', function() {
    box.style.backgroundColor = 'green';
});
change2.addEventListener('click', function() {
    box.style.backgroundColor = 'red';
});
change3.addEventListener('click', function() {
    box.style.backgroundColor = 'blue';
});
def.addEventListener('click', function() {
    box.style.backgroundColor = 'black';
});