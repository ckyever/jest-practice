import { reverseString } from "../reverseString.js";

test("Reverse word", () => {
  expect(reverseString("Aura")).toBe("aruA");
});

test("Reverse sentence", () => {
  expect(reverseString("Lorem ipsum")).toBe("muspi meroL");
});

test("Reverse single character", () => {
  expect(reverseString("a")).toBe("a");
});

test("Reverse empty string", () => {
  expect(reverseString("")).toBe("");
});
