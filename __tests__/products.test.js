const { getFullName, getProductsPurchased } = require("../src/products");

describe("getFullName()", () => {
  it("should return a string that joins the first name and surname", () => {
    const input = { names: { first: "Chelsea", surname: "Hernandez" } };
    const actual = getFullName(input);
    const expected = "Chelsea Hernandez";
    expect(actual).toEqual(expected);
  });
});

describe("getProductsPurchased()", () => {
  it("should return an array containing the names of all purchased products", () => {
    const input = {
      purchased: [{ name: "A" }, { name: "B" }, { name: "C" }],
    };
    const actual = getProductsPurchased(input);
    const expected = ["A", "B", "C"];
    expect(actual).toEqual(expected);
  });

  it("should return a string message if the `purchased` key is an empty array", () => {
    const input = { purchased: [] };
    const actual = getProductsPurchased(input);
    const expected = "No products purchased.";
    expect(actual).toEqual(expected);
  });

  it("should return the string name of the product if the `purchased` key has one product", () => {
    const input = { purchased: [{ name: "A" }] };
    const actual = getProductsPurchased(input);
    const expected = "A";
    expect(actual).toEqual(expected);
  });
});
