let cart = JSON.parse(localStorage.getItem("cart")) || [];

const products = Array.from(document.getElementsByClassName("product"));

products.forEach(product => {
    const btn = product.querySelector("button");

    btn.addEventListener("click", () => {
        const productInfo = {
            name: product.querySelector("h2").textContent,
            price: product.querySelector("p").textContent,
            quantity: 1
        };

        const existingProduct = cart.find(item => item.name === productInfo.name);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(productInfo);
        }

        renderCart();
    });
});

function renderCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "<h2>Cart:</h2>";

    cart.forEach(item => {
        const cartItem = document.createElement("div");

        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <button>Delete</button>
        `;

        cartItem.querySelector("button").addEventListener("click", () => {
            cart = cart.filter(product => product.name !== item.name);
            renderCart();
        });

        cartContainer.appendChild(cartItem);
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    console.clear();
    console.log(cart);
}

renderCart();