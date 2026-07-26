export function calculateTotal(cart) {
    let total = 0;

    for (let product of cart) {
        total += product.price;
    }

    return total;
}

export function applyDiscount(total, discountPercent) {
    return total - (total * discountPercent / 100);
}

