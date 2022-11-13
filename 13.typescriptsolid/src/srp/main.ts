import { Order } from "./order";
import { ShoppingCart } from "./shopping-cart";

const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart);
shoppingCart.addItem({ name: "Camisa", price: 49.91 });
shoppingCart.addItem({ name: "Caderno", price: 9.9123 });
shoppingCart.addItem({ name: "Lápis", price: 1.59 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
