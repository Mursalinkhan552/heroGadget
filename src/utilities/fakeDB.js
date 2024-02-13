// Add data to local storage

const addToDB = id => {
    let shoppingCart = {};

    // get previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}


// get data to local storage
const getStoredCart = () => {
    let shoppingCart = {};

    // get previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;

}

// remove from specific element from local storage
const removeFromDB = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    const shoppingCart = JSON.parse(storedCart);
    if (shoppingCart) {
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

// Clear all data from local storage
const deleteShoppingCart = () => localStorage.removeItem('shopping-cart')

export { addToDB, getStoredCart, removeFromDB, deleteShoppingCart }