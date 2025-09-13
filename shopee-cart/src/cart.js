
async function addItem(userCart, item){
    userCart.push(item);
}

async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result)
}

async function removeItem(userCart, item){
    const index = userCart.findIndex(i=> i.name === item.name);

    if (index === -1) {
        console.log('\nItem not found in cart');
        return;
    }

    if (item.quantity === 1) {
        await deleteItem(userCart, item.name)
        return;
    }

    userCart[index].quantity -= 1;
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex(item => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

async function displayCart(userCart){
    console.log('\nShopee Cart List:');

    if (userCart.length === 0) {
        console.log('\nCart is empty');
        return;
    }

    userCart.forEach((item, index) => {
        console.log(`${index + 1}: ${item.name} - R$ ${item.price} | Quantity: ${item.quantity} | Subtotal: R$ ${item.subtotal()}`);
    });
}


export { addItem, calculateTotal, removeItem, deleteItem, displayCart };