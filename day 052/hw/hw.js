/*
1) მოიძიეთ ინფორმაცია math ობიქტზე:
// Math.round()
// Math.abs()
// Math.floor()
// Math.ceil()
// Math.sign()
// Math.random()
მოიყვანეთ თითოეულზე 5 მაგალითი

2) დაასრულეთ საკლასო დავალება
*/




// ANSWERS:

// 1)
// Math.round() - ეს მეთოდი რიცხვს ამრგვალებს უახლოეს მთელ რიცხვამდე, მაგ:
console.log(Math.round(4.7));  // 5
console.log(Math.round(4.3));  // 4
console.log(Math.round(4.5));  // 5
console.log(Math.round(-4.7)); // -5
console.log(Math.round(-4.3)); // -4

// Math.abs() - ამ მეთოდით ვიღებთ რიცხვის აბსოლუტურ მნიშვნელობას, 
// ეს ნიშნავს რომ უარყოფითი რიცხვები გადაიყვანება დადებით რიცხვებად, 
// ხოლო დადებითი რიცხვები კი უცვლელი დარჩება,
// მაგ:
console.log(Math.abs(-5));    // 5
console.log(Math.abs(5));     // 5
console.log(Math.abs(-3.14)); // 3.14
console.log(Math.abs(3.14));  // 3.14
console.log(Math.abs(0));     // 0

// Math.floor() - ეს მეთოდი ამრგვალებს რიცხვს უახლოეს მცირე ინტეჯერამდე,
// მინუსების შემთხვევაში კი უახლოეს დიდ ინტეჯერამდე,
// მაგ:
console.log(Math.floor(4.7));  // 4
console.log(Math.floor(4.3));  // 4
console.log(Math.floor(4.5));  // 4
console.log(Math.floor(-4.7)); // -5
console.log(Math.floor(-4.3)); // -5

// Math.ceil() - ეს მეთოდი ამრგვალებს რიცხვს უახლოეს დიდ ინტეჯერამდე, 
// მინუსების შემთხვევაში კი უახლოეს მცირე ინტეჯერამდე,
// მაგ:
console.log(Math.ceil(4.7));  // 5
console.log(Math.ceil(4.3));  // 5
console.log(Math.ceil(4.5));  // 5
console.log(Math.ceil(-4.7)); // -4
console.log(Math.ceil(-4.3)); // -4

// Math.sign() - ეს მეთოდი აბრუნებს რიცხვს: 1-ს მივიღებთ თუ გადაცემული რიცხვი დადებითია, -1 თუ უარყოფითია და 0-ს თუ ნულია, მაგ:
console.log(Math.sign(5));  // 1
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0));  // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign(68)); // 1

// Math.random() - ამ მეთოდით ვიღებთ შემთხვევით რიცხვს 0-სა და 1-ს შორის, 
// თუმცა შეგვიძლია * სიმბოლოთი შევცვალოთ დიაპაზონი, 
// და რა რიცხვზეც გავამრავლებთ random()-ს 0-სა და მაგ რიცხვს შორის შეიქმნება დიაპაზონი და 
// დააბრუნებს ამ დიაპაზონიდან შემთხვევით რიცხვს, (ანუ მაგალითად თუ *10 დავწერეთ, 
// დააბრუნებს შემთხვევით რიცხვს 0-დან 10-მდე) მაგ.:
console.log(Math.random());       // 0-სა და 1-ს შორის
console.log(Math.random() * 10);  // 0-სა და 10-ს შორის
console.log(Math.random() * 100); // 0-სა და 100-ს შორის
console.log(Math.random() * 50);  // 0-სა და 50-ს შორის
console.log(Math.random() * 5);   // 0-სა და 5-ს შორის

