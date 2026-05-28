// 2. ტექსტის შეცვლა (Selection & Content)
// მიზანი: getElementById - ის გამოყენება.

// დავალება: შექმენით HTML ფაილი, სადაც იქნება ერთი <h1> სათაური (აიდით "main-title") და ერთი ღილაკი.

// ინსტრუქცია: ღილაკზე დაჭერისას, JavaScript-ის საშუალებით შეცვალეთ სათაურის ტექსტი და გახადეთ: "ტექსტი წარმატებით შეიცვალა!". გამოიყენეთ ორივე მეთოდი სხვადასხვა ცვლადში შესანახად.


// 2)
const mainTitle = document.getElementById("main-title");
const changeTextBtn = document.getElementById("change-text-btn");
changeTextBtn.onclick = () => {
    if(changeTextBtn.textContent === "Change back") {
        mainTitle.textContent = "სათაური";
        changeTextBtn.textContent = "Change text";
    }
    else{
        mainTitle.textContent = "ტექსტი წარმატებით შეიცვალა!";
        changeTextBtn.textContent = "Change back";
    }
}

