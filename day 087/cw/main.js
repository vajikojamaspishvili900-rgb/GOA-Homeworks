// 1) ახსენით რაში გვეხმარება Error Handling ი და დაწერეთ 1 მაგალითი მასზე


// Error Handling გვეხმარება პროგრამის გაშვების დროს წარმოქმნილი შეცდომების მართვაში, 
// სიტყვაზე თუ ვცდილობთ მონაცემების ამოღებას სერვერიდან და ამ დროს სერვერი არ არის ხელმისაწვდომი ამ მომენტში Error Handling საშუალებას 
// გვაძლევს მოვაგვაროთ ეს ყველაფერი ისე, რომ პროგრამის მუშაობა არ შეწყდეს


// მაგალითი:

// function fetchData() {
//     try {
//         let response = fetch("https://api.example.com/data");
//         let data = response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("მონაცემების ამოღება ვერ მოხერხდა:", error.message);
//     }
// }

// fetchData();










// 2) შექმენი ასინქრონული ფუნქცია loadPlayerProfile().

// ფუნქციის შიგნით გახსენი try...catch ბლოკი.

// try-ს შიგნით await Promise.all()-ის გამოყენებით გააშვი სამივე ფუნქცია (fetchPlayerStats(), fetchInventory(), fetchMatchHistory()) ერთდროულად და შედეგი შეინახე ცვლადში.

// for ციკლის გამოყენებით (ან მასივის ინდექსებით) გამოიტანე სამივე მიღებული შედეგი კონსოლში.

// catch ბლოკში დაბეჭდე შეცდომის შეტყობინება (error.message ან error).

// ბოლოს გამოიძახე loadPlayerProfile().





// 2 

async function loadPlayerProfile() {
    try {
        const [stats, inventory, matchHistory] = await Promise.all([
            fetchPlayerStats(),
            fetchInventory(),
            fetchMatchHistory()
        ]);
        console.log("Player Stats:", stats);
        console.log("Inventory:", inventory);
        console.log("Match History:", matchHistory);
    } catch (error) {
        console.log("შეცდომა მოხდა მონაცემების ჩატვირთვისას:", error.message);
    }
}

function fetchPlayerStats() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name: "Leon Kennedy", level: 1000, experience: 1000, health: 100 });
        }, 1000);
    });
}

function fetchInventory() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ items: ["knife", "pistol", "hand grenade", "heavy grenade", "flashbang", "body armor", "First aid spray"] });
        }, 1000);
    });
}

function fetchMatchHistory() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, result: "win" }, { id: 2, result: "loss" }, { id: 3, result: "tie" }]);
        }, 1000);
    });
}


loadPlayerProfile();





// 3) 

// --
// დაწერე 3 ცალკეული ფუნქცია, რომლებიც აბრუნებენ ახალ Promise-ს და სიმულაციას უკეთებენ დროში გაწელილ პროცესებს (setTimeout-ის გამოყენებით):

// პირველი ფუნქცია: ვიდეოს ფაილის ატვირთვა. უნდა ელოდებოდეს 2 წამს და resolve-ით აბრუნებდეს ტექსტს: "ვიდეო აიტვირთა".

// მეორე ფუნქცია: თამბნეილის (ყდის) შექმნა. უნდა ელოდებოდეს 1 წამს და resolve-ით აბრუნებდეს ტექსტს: "თამბნეილი მზადაა".

// მესამე ფუნქცია: საავტორო უფლებების შემოწმება. უნდა ელოდებოდეს 1.5 წამს და resolve-ით აბრუნებდეს ტექსტს: "საავტორო უფლებები სუფთაა".

// ----
// შექმენი მთავარი ფუნქცია, რომელმაც ეს 3 პროცესი უნდა მართოს:

// გამოცხადება: გამოიყენე async საკვანძო სიტყვა ფუნქციის შექმნისას.

// უსაფრთხოება: მთელი შიდა ლოგიკა მოათავსე try...catch ბლოკში.

// პარალელური გაშვება: try ბლოკის შიგნით გამოიყენე await Promise.all(), რომ სამივე ფუნქცია ერთდროულად გაუშვა და მიღებული პასუხების მასივი შეინახო ცვლადში.

// შედეგის გამოტანა: იქვე, try-ს შიგნით, გადაუარე მიღებულ მასივს (ციკლით ან დესტრუქტურიზაციით) და თითოეული შედეგი გამოიტანე კონსოლში. ბოლოს დაბეჭდე ტექსტი: "ვიდეო წარმატებით გამოქვეყნდა!".

// შეცდომის დაჭერა: catch ბლოკში დაბეჭდე შეცდომის ტექსტი (error).

// გამოძახება: ბოლოს გამოიძახე ეს ფუნქცია.

// ---
// სცენარი 1 (წარმატება): გაუშვი კოდი ისე, რომ სამივე ფუნქცია resolve-ს აბრუნებდეს. დარწმუნდი, რომ ლოდინის დრო არის ზუსტად 2 წამი (ყველაზე ნელი დავალების დრო) და ეკრანზე იბეჭდება სამივე შეტყობინება.

// სცენარი 2 (შეცდომა): შეცვალე მესამე ფუნქცია ისე, რომ resolve-ის ნაცვლად დააბრუნოს reject("Copyright Strike!"). გაუშვი კოდი და შეამოწმე, რომ Promise.all() ეგრევე შეწყვეტს მუშაობას, try ბლოკი დაიტოვება და ამოქმედდება catch ბლოკი.





//3


function uploadVideo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("ვიდეო აიტვირთა");
        }, 2000);
    });
}

function createThumbnail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("თამბნეილი მზადაა");
        }, 1000);
    });
}


function checkCopyright() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("საავტორო უფლებები სუფთაა");
            // reject("Copyright Strike!");
        }, 1500);
    });
}




async function manageVideoUpload() {
    try {
        const results = await Promise.all([
            uploadVideo(),
            createThumbnail(),
            checkCopyright()
        ]);
        results.forEach(result => console.log(result));
        console.log("ვიდეო წარმატებით გამოქვეყნდა!");
    } catch (error) {
        console.log("შეცდომა მოხდა:", error);
    }
}

manageVideoUpload();



