// 1.

const productDivs = Array.from(document.getElementsByClassName("product"))
let cart = []

console.log(productDivs)

const addToCart = (product) =>{
    const productObj = {
        productName: product.querySelector("h3").textContent,
        price: product.querySelector("p").textContent,
    }

    cart.push(productObj)
    console.log(cart)
}


productDivs.forEach((item,index) =>{
    const button = item.querySelector("button");

    button.addEventListener("click",() =>{
        addToCart(item)
    })
})




// 2.

const productDivs = Array.from(document.getElementsByClassName("product"))
let cart = []

const cartDiv = document.getElementById("cartDiv");



const renderCart = () => {
    cartDiv.innerHTML = ""
    cart.forEach((item,index) =>{
        let productDiv = document.createElement("div");
        productDiv.className = "product";

        productDiv.innerHTML = `
        <h3>${item.productName}</h3>
        <p>${item.price}</p>
        <button onclick="deleteProduct(${index})">Delete</button>
        `

        cartDiv.appendChild(productDiv)

    })
}



const addToCart = (product) =>{
    const productObj = {
        productName: product.querySelector("h3").textContent,
        price: product.querySelector("p").textContent,
    }

    cart.push(productObj)
    console.log(cart)
}



productDivs.forEach((item,index) =>{
    const button = item.querySelector("button");

    button.addEventListener("click",() =>{
        addToCart(item)
        renderCart()
        
    })
})


const deleteProduct = (index) => {
    cart = cart.filter((_,i) => i !== index)
    renderCart()
}