/*
#Classwork

1) კომენტარებით ახსენით თითოეული სტრინგის მეთოდი და მოიყვანეთ თითოზე ორ-ორი მაგალითი
.length
.charAt(index)
.at()
.slice(startIndex,endIndex)
.toUpperCase()
.toLowerCase()
.trim()
.trimStart()
.trimEnd()
.repeat()
.replace()
.replaceAll()
.split()

2) კომენტარებით ახსენით რა განსხვავებაა .charAt() და .at()-ს შორის 
*/




// Answers:

// 1) .length - შეგვიძლია გავიგოთ სტრინგის სიმბოლოების რაოდენობა, მაგ.:
let str1 = "Hello";
console.log(str1.length);

// .charAt(index) - ამ მეთოდით ვიღებთ სტრინგის character-ს მითითებული ინდექსის მიხედვით, მაგ.:
let str2 = "Hello";
console.log(str2.charAt(1));

// .at() - იგივეა რაც .charAt() მაგრამ შეგვიძლია გადავცეთ ნეგატიური და პოზიტიური ინდექსიც, მაგ.:
let str3 = "Hello";
console.log(str3.at(-1));

// .slice(startIndex,endIndex) - ამ მეთოდის საშუალებით ვიღებთ სტრინგის რაღაც ნაწილს მითითებული საწყისის და დამთავრების ინდექსების მიხედვით, მაგ:
let str4 = "Hello World";
console.log(str4.slice(0, 5));

// .toUpperCase() - ვაქცევთ სტრინგის ყველა სიმბოლოს დიდ ასოებად, მაგ:
let str5 = "Hello";
console.log(str5.toUpperCase()); 

// .toLowerCase() - შეგვიძლია გადავაქციოთ სტრინგის ყველა სიმბოლო პატარა ასოებად, მაგ:
let str6 = "Hello";
console.log(str6.toLowerCase());

// .trim() - სტრინგის თავში და ბოლოში შლის ცარიელ ადგილებს, მაგ:
let str7 = "   Hello World   ";
console.log(str7.trim());

// .trimStart() - სტრინგის თავში(დასაწყისში) შლის ცარიელ ადგილებს, მაგ:
let str8 = "   Hello World   ";
console.log(str8.trimStart());

//.trimEnd() - სტრინგის ბოლოში შლის ცარიელ ადგილებს(space-ებს), მაგ:
let str9 = "   Hello World   ";
console.log(str9.trimEnd());

// .repeat() - შეგვიძლია სტრინგი მითითებული რაოდენობით გავამეოროთ (როგორც პითონში ვამრავლებთ სტრინგს რიცხვებზე), მაგ:
let str10 = "Hello";
console.log(str10.repeat(3));

// .replace() - პირველი არჩეული სიმბოლო ან სიმბოლოების ჯგუფი ჩანაცვლებულია ახალი სიმბოლოთი ან სიმბოლოების ჯგუფით, მაგ.
let str11 = "Hello World";
console.log(str11.replace("World", "Everyone"));

// .replaceAll() - ყველა არჩეული სიმბოლო ან სიმბოლოების ჯგუფი ჩანაცვლებულია ახალი სიმბოლოთი ან სიმბოლოების ჯგუფით. მაგ:
let str12 = "Hello World, Hello Everyone";
console.log(str12.replaceAll("Hello", "Hi"));


//.split() - სტრინგს ვყოფთ მითითებული გამყოფის მიხედვით. მაგ:
let str13 = "Hello World";
console.log(str13.split(" ")); // ['Hello', 'World']



// 2) .charAt() და .at() მეთოდებს შორის განსხვავება ის არის,
// რომ .charAt() მხარს უჭერს მხოლოდ დადებით ინდექსებს, ხოლო .at() მხარს უჭერს როგორც დადებით, ისე ნეგატიურ ინდექსებს.
