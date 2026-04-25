// 1. GLOBAL SCOPE: ეს ცვლადი ყველგან ჩანს, ნებისმიერ დროს შეგვიძლია მივწვდეთ მას
const globalVar = "მე გლობალური ვარ";

function outerFunction() {
    // 2. FUNCTION SCOPE: ეს ჩანს მხოლოდ ამ ბლოკში, ანუ ამ ფუნქციის შიგნით
    const outerVar = "მე ფუნქციის შიგნით ვარ";

    if (true) {
        // 3. BLOCK SCOPE: ეს ჩანს მხოლოდ ამ { } ბლოკში
        const blockVar = "მე მხოლოდ if ბლოკში ვარ";

        // ქვემოთ მოცემული console.log-ები მუშაობს, რადგან blockVar, outerVar და globalVar ამ ბლოკშია ან მის გარეთ
        console.log(blockVar);  // იმუშავებს
        console.log(outerVar);  // იმუშავებს
        console.log(globalVar); // იმუშავებს
    }

    console.log(blockVar); // ERROR: ბლოკის გარეთ ვერ მივწვდებით blockVar-ს
}
outerFunction();

console.log(outerVar); // ERROR: ფუნქციის გარეთ ვერ მივწვდებით outerVar-ს
console.log(globalVar); // იმუშავებს, რადგან globalVar გლობალურია

