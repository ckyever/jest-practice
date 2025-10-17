import { analyzeArray } from "../analyzeArray.js";

test("Simple array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Single element array", () => {
  expect(analyzeArray([67])).toEqual({
    average: 67,
    min: 67,
    max: 67,
    length: 1,
  });
});

test("Empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});
