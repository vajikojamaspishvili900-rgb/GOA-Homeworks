// 4) ახსენით რა არის error handling და რაში გვეხმარება ასევე დაწერეთ 1 მაგალითი მასზე


// Error handling JavaScript‑ში ხდება try catch ბლოკით.
// საშუალებას გვაძლევს, რომ შეცდომის დროს პროგრამა არ გაჩერდეს, არ ჩაიყაროს წყალში ყველაფერი

try {
    let num = parseInt("abc");
    if (isNaN(num)) {
        throw new Error("Not a number!");
    }
    console.log(num * 2);
} catch (error) {
    console.log(error.message);
}

// აქ "abc" ვერ გადაიქცევა რიცხვად რადგან ჩვეულებრივი ასოებია და არა რიცხვი, 
// მაგრამ catch ბლოკი შეცდომას იჭერს და პროგრამა მშვიდად აგრძელებს მუშაობას.

