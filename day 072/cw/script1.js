// # Classwork

// 1) შექმენით მაღაზიის საიტი საიტზე გქონდეს 5 პროდუქტი თავისი ინფორმაციით(სახელი, ფასი, აღწერა, ფოტო) ასევე თითოეულ პროდუქტს ქონდეს addtocart ღილაკი რის შემდეგაც პროდუქტი ჩაემატება cart მასივში, შემდეგ კონსოლში გამოიტანეთ ეს cart მასივი

// 2) თქვენ პროექტს დაუმატეთ დარენდერება და კალათიდან წაშლა

const productDivs = Array.from(document.getElementsByClassName("product"));
let cart = [];
const cartDiv = document.getElementById("cart");

const renderCart = () => {
    cartDiv.innerHTML = "";

    cart.forEach((item, index) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${item.image}" alt="${item.productName}">
            <h3>${item.productName}</h3>
            <p>${item.price}</p>
            <p>${item.description}</p>
            <button onclick="deleteProduct(${index})">Delete</button>`;
        cartDiv.appendChild(productDiv);
    });
};

const addToCart = (product) => {
    const productObj = {
        productName: product.querySelector("h3").textContent,
        price: product.querySelector(".price").textContent,
        description: product.querySelector(".description").textContent,
        image: product.querySelector("img").src
    };
    cart.push(productObj);
    console.log(cart);
};

productDivs.forEach((item) => {
    const button = item.querySelector("button");
    button.addEventListener("click", () => {
        addToCart(item);
        renderCart();
    });
});

const deleteProduct = (index) => {
    cart = cart.filter((_, i) => i !== index);
    renderCart();
};
