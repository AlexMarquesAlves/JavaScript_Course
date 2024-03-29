import { Product } from "./product";

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe("Product", () => {
  afterEach(() => jest.clearAllMocks());

  it("should have return properties name and price", () => {
    // System under test
    const sut = createSut("Camiseta", 49.9);

    expect(sut).toHaveProperty("name", sut.name);
    expect(sut.price).toBeCloseTo(sut.price);
  });
});
