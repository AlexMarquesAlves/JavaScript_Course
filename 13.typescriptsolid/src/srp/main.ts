import { Messaging } from "./messaging";
import { Order } from "./order";
import { Persistency } from "./persistency";
import { ShoppingCart } from "./shopping-cart";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);
shoppingCart.addItem({ name: "Camisa", price: 49.91 });
shoppingCart.addItem({ name: "Caderno", price: 9.9123 });
shoppingCart.addItem({ name: "Lápis", price: 1.59 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
