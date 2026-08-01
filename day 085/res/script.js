// async - გამოიყენება ფუნქციის შექმნის წინ, ასინქრონული ფუნქცია ყოველთვის აბრუნებს პრომისს, თუ ფუნქცია აბრუნებს რაიმე მნიშვნელობას მაშინ პრომისი ავტოვარ გახდება resolve

// async function sayHello() {
//     return "hello"
// }

// sayHello().then(result => console.log(result))

// const calculateSum = async (a, b) => {
//     return a + b
// }

// calculateSum(2, 5).then(result => console.log(result))

// await - გამოიყენება მხოლოდ async ფუნქციის შიგნით, ის აჩერებს ფუნქციის მუშაობას სანამ მოცემული promise არ შესრულდება, await გვაძლევს საშუალებას რომ შედეგი პირდაპირ ცვლადში შევინახოთ

// const waitToSeconds = () => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("გავიდა 2 წამი"), 2000)
//     })
// }

// const runTimer = async () => {
//     console.log("მოლოდინი..")
//     const res = await waitToSeconds()
//     console.log(res);    
// }

// runTimer()

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// const countNumber = async () => {
//     console.log("1")
//     await delay(1000)
//     console.log("2")
//     await delay(1000)
//     console.log("3")
//     await delay(1000)
//     console.log("4"); 
// }

// countNumber()

// fetch - js ჩაშენებული ფუნქცია რომელიც გამოიყენება სერვერიდან რაღაც მონაცემების წამოსაღებად და დასამუშავებლად, fetch ც აბრუნებს Promise რომელიც საბოლოოდ აბრუნებს რაღაც პასუხის ობიექტს იმისთვის რომ პასუხი გადავთარგმნოთ JSON ფორმატში ვიყენებთ .json() მეთოდს ესეც აბრუნებს პრომისს

// API - Application Programming Interface, API არის შუამავალი რომელიც საშუალებას აძლევს ორ სხვადასხვა პროგრამას, აპლიკაციას ან სისტემას, დაუკავშირდნენ ერთმანეთთან და გაცვალონ მონაცემები






const getProducts = async () => {
    const container = document.getElementById("container")
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    data.forEach(product => {
        const card = document.createElement("div")
        card.classList.add("product-card")

        card.innerHTML = `
        <img src="${product.image}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <span>$${product.price}</span>
        `

        container.appendChild(card)
    });

    console.log(data);
}

getProducts()
