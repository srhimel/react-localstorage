const addToDb = id => {
    const exist = localStorage.getItem('shopping_cart');
    let shoppingCart = {}
    if (!exist) {
        shoppingCart[id] = 1;
    }
    else {
        shoppingCart = JSON.parse(exist)
        if (shoppingCart[id]) {
            const newCount = shoppingCart[id] + 1;
            shoppingCart[id] = newCount
        }
        else {
            shoppingCart[id] = 1
        }
    }

    localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart));
}

const removeItem = id => {
    const exist = localStorage.getItem('shopping_cart');
    let shoppingCart = JSON.parse(exist);
    if (shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart));
    }
}

export { addToDb, removeItem }