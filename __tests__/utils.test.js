const capitalise = require("../src/utils/capitalise");

describe("capitalise", () => {
  test("when passed a single lower case word in a string, capitalises the first letter", () => {
    expect(capitalise("word")).toBe("Word");
  });
  test("when passed multiple lower case words in a string, capitalises each first letter", () => {
    expect(capitalise("multiple testing words")).toBe("Multiple Testing Words");
  });
  test("works when some words are already capitalised", () => {
    expect(capitalise("Multiple testing WORDS")).toBe("Multiple Testing WORDS");
  });
  test("when passed anything other than a string, returns an empty string", () => {
    expect(capitalise(["test"])).toBe("");
    expect(capitalise()).toBe("");
    expect(capitalise("")).toBe("");
    expect(capitalise(3)).toBe("");
  });
});
