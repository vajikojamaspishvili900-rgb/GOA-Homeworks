// 1) CodeCademy
// shevasrule (Screenshot 2026-08-03 203604.png)


// 2) 

// • პირობა: 
// 1. ჯერ შექმენი ჩვეულებრივი ფუნქცია სახელად `delay`, რომელიც არგუმენტად მიიღებს მილიწამებს (მაგ. 2000). ამ ფუნქციამ უნდა დააბრუნოს ახალი `Promise`, რომელიც `setTimeout`-ის დახმარებით დარეზოლვდება (resolve) მითითებული დროის გასვლის შემდეგ.
// 2. შექმენი მეორე, `async` ფუნქცია სახელად `greet`.
// 3. `greet` ფუნქციის შიგნით ჯერ დაბეჭდე ტექსტი `"ველოდები მონაცემებს..."`.
// 4. შემდეგ, `await`-ის გამოყენებით გამოიძახე შენი `delay(2000)` ფუნქცია, რათა კოდი 2 წამით გააჩერო.
// 5. ლოდინის დასრულების შემდეგ დაბეჭდე: `"მონაცემები წარმატებით ჩაიტვირთა!"`.
// 6. გამოიძახე `greet()` და დააკვირდი შედეგს.

// 3) 

// • პირობა: უნდა დაწერო კოდი, სადაც მეორე მოქმედება პირველის პასუხზეა დამოკიდებული.
// 1. შექმენი ფუნქცია `fetchUser(id)`, რომელიც აბრუნებს პრომისს. 1 წამის შემდეგ მან უნდა დაარეზოლვოს ობიექტი: `{ userId: id, role: "admin" }`.
// 2. შექმენი მეორე ფუნქცია `getPermissions(role)`, რომელიც ასევე პრომისს აბრუნებს. 1 წამის შემდეგ მან უნდა დაარეზოლვოს მასივი: `["წაკითხვა", "ჩაწერა", "წაშლა"]` (მხოლოდ იმ შემთხვევაში, თუ გადაცემული `role` არის `"admin"`).
// 3. დაწერე `async` ფუნქცია `loadUserDashboard(id)`.
// 4. მის შიგნით `await`-ით დაელოდე `fetchUser`-ს, ამოიღე მიღებული ობიექტიდან `role` და ეს როლი `await`-ით გადააწოდე `getPermissions` ფუნქციას.
// 5. ბოლოს დაბეჭდე მიღებული უფლებების მასივი.






// 2)
function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds)
    })
}

async function greet() {
    console.log("ველოდები მონაცემებს...")
    await delay(2000)
    console.log("მონაცემები წარმატებით ჩაიტვირთა!")
}


// greet()





// 3)
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId: id, role: "admin" })
        }, 1000)
    })
}

function getPermissions(role) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (role === "admin") {
                resolve(["წაკითხვა", "ჩაწერა", "წაშლა"])
            } else {
                resolve([])
            }
        }, 1000)
    })
}

async function loadUserDashboard(id) {
    const user = await fetchUser(id)
    const permissions = await getPermissions(user.role)
    console.log(permissions)
}

loadUserDashboard(5)





