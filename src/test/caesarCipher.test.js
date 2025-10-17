import { caesarCipher } from "../caesarCipher.js";

test("Shift encode by 3", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("Shift encode by 1", () => {
  expect(caesarCipher("hello", 1)).toBe("ifmmp");
});

test("Shift encode with capitalisation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Shift encode with special characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Shift encode with end of alphabet", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
