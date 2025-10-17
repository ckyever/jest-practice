import { capitalise } from "./capitalise.js";

test("Capitalise lowercase short word", () => {
  expect(capitalise("ckyever")).toBe("Ckyever");
});

test("Capitalise lowercase long word", () => {
  expect(capitalise("supercalifragilisticexpialidocious")).toBe(
    "Supercalifragilisticexpialidocious"
  );
});

test("Capitalise already uppercase word", () => {
  expect(capitalise("Melbourne")).toBe("Melbourne");
});
