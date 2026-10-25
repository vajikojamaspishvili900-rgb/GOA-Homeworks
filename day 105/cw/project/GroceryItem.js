function GroceryItem({ name }) {
    function handleClick() {
        alert(`${name} has been added to the cart!`);
    }

    return <button onClick={handleClick}>{name}</button>;
}

export default GroceryItem;