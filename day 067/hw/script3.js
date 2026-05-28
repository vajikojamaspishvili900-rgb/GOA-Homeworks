// 3. სტილების მასიური შეცვლა (Class)
// მიზანი: getElementsByClassName - ის გამოყენება.

// დავალება: შექმენით 3 პარაგრაფი (<p>) ერთი და იგივე კლასით "text-item".

// ინსტრუქცია: JavaScript-ით იპოვეთ ყველა ეს პარაგრაფი კლასის მიხედვით და თითოეულს შეუცვალეთ ფერი (მაგალითად, გახადეთ წითელი).


// 3)
let paragraphs = document.getElementsByClassName("text-item");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

