// const capitalise = require("../src/utils/capitalise");
const getTimestampValues = require("../src/utils/getTimestampValues");

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

describe.only("getTimestampValues", () => {
  const [inputYear, inputMonth, inputDay, inputHour, inputMinute, inputSecond] =
    ["2020", "01", "04", "00", "24", "00"];
  const input = `${inputYear}-${inputMonth}-${inputDay}T${inputHour}:${inputMinute}:${inputSecond}.000Z`;
  const actual = getTimestampValues(input);
  const { year, month, day, hour, minute, second } = actual;
  test("returns date and time in an object on the keys of year, month, day, hour, minute and second", () => {
    expect(Object.keys(actual)).toEqual(
      expect.arrayContaining([
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
      ])
    );
  });
  test("returns all values as strings", () => {
    Object.values(actual).forEach((value) => {
      expect(typeof value).toBe("string");
    });
  });
  test("returns the correct values", () => {
    const monthLookup = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "Apr",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };
    expect(year).toBe(inputYear);
    expect(month).toBe(monthLookup[inputMonth]);
    expect(day).toBe(inputDay);
    expect(hour).toBe(inputHour);
    expect(minute).toBe(inputMinute);
    expect(second).toBe(inputSecond);
  });
});
