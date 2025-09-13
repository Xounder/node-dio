import * as cartService from "./cart.js";
import createItem from "./item.js";

const myCart = []
const myWishList = []

console.log('Welcome to your Shopee Cart!')

const item1 = await createItem("shoes", 30, 2);
const item2 = await createItem("pants", 70, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myWishList, item2);

await cartService.displayCart(myCart);

await cartService.deleteItem(myCart, item1.name)

await cartService.displayCart(myCart);

console.log('\nShopee Cart TOTAL:')

await cartService.calculateTotal(myCart)