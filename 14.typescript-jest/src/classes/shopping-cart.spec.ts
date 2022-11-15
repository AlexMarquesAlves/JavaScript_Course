import { Discount } from "./discount";
import { CartItem } from "./interfaces/cart-item";
import { ShoppingCart } from "./shopping-cart";

const createSut = () => {
  const discountMock = createdDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createdDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem1 = createCartItem("Item 1", 40);
  const cartItem2 = createCartItem("Item 2", 1);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};

describe("ShoppingCart", () => {
  afterEach(() => jest.clearAllMocks());

  it("should return an empty cart when is no product", () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it("should have 2 items on cart", () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it("should return total and total with discount", () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(41);
    expect(sut.totalWithDiscount()).toBe(41);
  });

  it("should be able to add products and clear cart", () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it("should be able to remove products", () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.items.length).toBe(0);
  });

  it("should be able to call calculate discount once", () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, "calculate");
    sut.totalWithDiscount();

    expect(discountMockSpy).toBeCalledTimes(1);
  });

  it("should be able to return total price", () => {
    const { sut, discountMock } = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock, "calculate");
    sut.totalWithDiscount();

    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
