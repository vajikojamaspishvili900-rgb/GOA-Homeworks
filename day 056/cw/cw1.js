// 1)გადახედეთ ამ გვერდს https://www.w3schools.com/js/js_scope.asp


// 2)ახსენით რა არის block scope, global scope და მოიძიეთ ინფორმაცია lexical scope ზე და ეგეც ახსენით (lexical არა გინდათო)

// 3)გააკეთეთ თითო მაგალითი თითო scope ზე და ახსენით კომენტარებით


// 2)
// Block scope - სივრცე სადაც ცვლადები და ფუნქციები იქნებიან მხოლოდ იმ ბლოკში 
// სადაც ისინი არიან შექმნილნი,
// ანუ ბლოკში შექმნილი ცვლადები ხელმისაწვდომი იქნება მხოლოდ ამ ბლოკში
// (ფუნქციაში, ციკლში, if-else ბლოკში და აშ.) და არა მის გარეთ

// Global scope - სივრცე სადაც ცვლადები და ფუნქციები იქნებიან მთელ პროგრამაში. 
// თუ ჩვენ შევქმენით ცვლადი გლობალურ სივრცეში, ის იქნება ხელმისაწვდომი ნებისმიერ ადგილას პროგრამაში,
// ანუ ფუნქციების შიგნითაც და გარეთაც.


// 3)
// Block scope მაგალითი
function blockScopeExample() {
    let block = "block scope";
    console.log(block);
}

// Global scope მაგ.
let global = "global scope";

function globalScopeExample() {
    console.log(global);
}

