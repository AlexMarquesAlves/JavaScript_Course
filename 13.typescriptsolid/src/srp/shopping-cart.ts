type CartItem = { name: string; price: number };

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem>[] {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: "Camisa", price: 49.91 });
shoppingCart.addItem({ name: "Caderno", price: 9.9123 });
shoppingCart.addItem({ name: "Lápis", price: 1.59 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
