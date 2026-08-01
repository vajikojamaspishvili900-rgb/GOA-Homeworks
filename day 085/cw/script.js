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

