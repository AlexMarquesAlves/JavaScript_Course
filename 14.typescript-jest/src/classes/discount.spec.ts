import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from "./discount";

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe("Discount", () => {
  afterEach(() => jest.clearAllMocks());

  it("should be able return no discount", () => {
    // System under test
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it("should be able return 50% off", () => {
    // System under test
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it("should be able return 10% off", () => {
    // System under test
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
