import { OrderStatus } from "./interfaces/order-status";
import { ShoppingCart } from "./shopping-cart";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(private readonly cart: ShoppingCart) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Vosso carrinho está vazio");
      return;
    }

    this.sendMessage(
      `Seu pedido com total de $${this.cart.total()} foi recebido`,
    );
    this.saveOrder();
    this.cart.clear();
  }

  sendMessage(msg: string): void {
    console.log("Mensagem enviada", msg);
  }

  saveOrder(): void {
    console.log("Pedido salvo com sucesso");
  }
}
