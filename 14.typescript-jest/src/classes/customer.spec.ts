import { EnterpriseCustomer, IndividualCustomer } from "./customer";

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};
const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

describe("IndividualCustomer", () => {
  afterEach(() => jest.clearAllMocks());

  it("should be able to have properties firstName, lastName, cpf", () => {
    // System under test
    const sut = createIndividualCustomer("Leo", "Yuki", "123.456.123-99");
    expect(sut).toHaveProperty("firstName", "Leo");
    expect(sut).toHaveProperty("lastName", "Yuki");
    expect(sut).toHaveProperty("cpf", "123.456.123-99");
  });

  it("should be able to have methods getName and getIdn for IndividualCustomer", () => {
    // System under test
    const sut = createIndividualCustomer("Leo", "Yuki", "123.456.123-99");
    expect(sut.getName()).toBe("Leo Yuki");
    expect(sut.getIDN()).toBe("123.456.123-99");
  });
});

describe("EnterpriseCustomer", () => {
  afterEach(() => jest.clearAllMocks());

  it("should be able to have properties name, cnpj", () => {
    // System under test
    const sut = createEnterpriseCustomer("Fantasy name", "35.913.359/0001-34");
    expect(sut).toHaveProperty("name", "Fantasy name");
    expect(sut).toHaveProperty("cnpj", "35.913.359/0001-34");
  });

  it("should be able to have methods getName and getIdn for EnterpriseCustomer", () => {
    // System under test
    const sut = createEnterpriseCustomer("Fantasy name", "35.913.359/0001-34");
    expect(sut.getName()).toBe("Fantasy name");
    expect(sut.getIDN()).toBe("35.913.359/0001-34");
  });
});
