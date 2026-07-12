// ----------------------------------------
// 3. კომბინირებული დავალება: "ავტომობილების მენეჯერი"
// ეს დავალება აერთიანებს ორივე თემას და გვეხმარება ლოგიკურ დაყოფაში.

// ნაბიჯი 1: მოდულის შექმნა (Car.js)
// შექმენი კლასი Car, რომელსაც აქვს:

// კონსტრუქტორი: brand და model.

// სტატიკური მეთოდი compare(car1, car2): ეს მეთოდი უნდა იღებდეს ორ მანქანას და აბრუნებდეს ტექსტს: "ეს მანქანები ერთი ბრენდისაა", თუ მათი brand ერთნაირია.

// დააექსპორტე ეს კლასი.

// ნაბიჯი 2: გამოყენება (app.js)
// დააიმპორტე Car კლასი.

// შექმენი ორი მანქანის ობიექტი (მაგალითად: Toyota Camry და Toyota Corolla).

// გამოიყენე სტატიკური მეთოდი Car.compare() მათ შესადარებლად.



import Car from './car3.js'

const car1 = new Car("Toyota", "Camry")
const car2 = new Car("Toyota", "Corolla")
console.log(Car.compare(car1, car2))

const bmw1 = new Car("BMW", "X5")
const mercedes1 = new Car("Mercedes", "C-Class")
console.log(Car.compare(bmw1, mercedes1))

