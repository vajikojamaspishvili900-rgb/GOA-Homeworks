const products = [
    {
        "image": "./assets/images/image-waffle-desktop.jpg",
        "name": "Waffle with Berries",
        "category": "Waffle",
        "price": 6.50
    },
    {
        "image": "./assets/images/image-creme-brulee-desktop.jpg",
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
    },
    {
        "image": "./assets/images/image-macaron-desktop.jpg",
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
    },
    {
        "image": "./assets/images/image-tiramisu-desktop.jpg",
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
    },
    {
        "image": "./assets/images/image-baklava-desktop.jpg",
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
    },
    {
        "image": "./assets/images/image-meringue-desktop.jpg",
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
    },
    {
        "image": "./assets/images/image-cake-desktop.jpg",
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
    },
    {
        "image": "./assets/images/image-brownie-desktop.jpg",
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
    },
    {
        "image": "./assets/images/image-panna-cotta-desktop.jpg",
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
    }
]

let cart = [];
const productsGrid = document.getElementById("products-grid");
const cartEmpty = document.getElementById("cart-empty");
const cartContent = document.getElementById("cart-content");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalPrice = document.getElementById("total-price");
const modal = document.getElementById("modal");
const modalItems = document.getElementById("modal-items");


const renderProducts = () => {
    productsGrid.innerHTML = "";
    products.forEach((product, index) => {
        const cartItem = cart.find(item => item.name === product.name)
        const count = cartItem ? cartItem.count : 0

        const div = document.createElement("div")
        div.className = "products-card";

        let buttonHTML = `
            <button class="btn-add" onclick="addToCart(${index})">
                Add to Cart
            </button>
        `

        if (count > 0) {
            buttonHTML = `
            <div class="btn-quantity">
                <button onclick="changeQuantity(${index}, -1)">
                    -
                </button>
                <span>${count}</span>
                <button onclick="changeQuantity(${index}, 1)">
                    +
                </button>
            </div>
            `
        }



        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            ${buttonHTML}
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        `;

        productsGrid.appendChild(div);

    });
};

const addToCart = (index) => {
    const product = products[index];
    cart.push({ ...product, count: 1 })
    updateUI();
}



const changeQuantity = (index, amount) => {
    const product = products[index]
    const item = cart.find(i => i.name === product.name)
    if (item) {
        item.count += amount;
        if (item.count <= 0) {
            cart = cart.filter(i => i.name !== product.name)
        }
    }
    updateUI();
}


function removeFromCart(name) {
    cart = cart.filter(i => i.name !== name);
    updateUI();
}


function updateUI() {
    renderProducts();

    let totalItemsCount = 0;
    let totalSum = 0;

    cartItems.innerHTML = "";

    cart.forEach(item => {
        totalItemsCount += item.count;
        totalSum += item.price * item.count;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
        <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="cart-item-details">
            <span class="count-highlight">${item.count}x</span>
            <span>@ $${item.price.toFixed(2)}</span>
          <strong>$${(item.price * item.count).toFixed(2)}</strong>
        </div>
        </div>
        <button class="btn-remove" onclick="removeFromCart('${item.name}')">✕</button>
    `;
        cartItems.appendChild(div);
    });

    cartCount.textContent = totalItemsCount;
    totalPrice.textContent = `$${totalSum.toFixed(2)}`;

    if (cart.length === 0) {
        cartEmpty.classList.remove("hidden");
        cartContent.classList.add("hidden");
    } else {
        cartEmpty.classList.add("hidden");
        cartContent.classList.remove("hidden");
    }
}


document.getElementById("confirm-btn").addEventListener("click", () => {
    modalItems.innerHTML = "";

    cart.forEach(item => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
        <div>
        <h4>${item.name}</h4>
        <div class="cart-item-details">
            <span class="count-highlight">${item.count}x</span>
            <span>@ $${item.price.toFixed(2)}</span>
        </div>
        </div>
      <strong>$${(item.price * item.count).toFixed(2)}</strong>
    `;
        modalItems.appendChild(div);
    });

    modal.classList.remove("hidden");
});


document.getElementById("new-order-btn").addEventListener("click", () => {
    cart = [];
    modal.classList.add("hidden");
    updateUI();
});


renderProducts();