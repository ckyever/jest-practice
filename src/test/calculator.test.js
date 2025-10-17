import calculator from "../calculator.js";

// Adding tests
test("Test small integer adding", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Test large integer adding", () => {
  expect(calculator.add(1289310, 4839)).toBe(1294149);
});

test("Test decimal adding", () => {
  expect(calculator.add(0.23, 0.112)).toBe(0.342);
});

// Subtract tests
test("Subtract small integers", () => {
  expect(calculator.subtract(23, 2)).toBe(21);
});

test("Subtract decimal integers", () => {
  expect(calculator.subtract(123.9, 0.23)).toBe(123.67);
});

// Divide tests
test("Divide small integers", () => {
  expect(calculator.divide(12, 4)).toBe(3);
});

test("Divide by 0", () => {
  expect(calculator.divide(5, 0)).toBe(Infinity);
});

// Multiply tests
test("Multiply small integers", () => {
  expect(calculator.multiply(25, 4)).toBe(100);
});

test("Multiply by 0", () => {
  expect(calculator.multiply(1238901, 0)).toBe(0);
});
