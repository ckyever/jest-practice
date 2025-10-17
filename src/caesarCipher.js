export function caesarCipher(string, shift) {
  return string
    .split("")
    .map((character) => {
      return getShiftedCharacter(character, shift);
    })
    .join("");
}

function getShiftedCharacter(character, shift) {
  const alphabeticRegex = /^[a-zA-Z]$/;
  if (alphabeticRegex.test(character)) {
    let shiftedCharCode = character.charCodeAt(0) + shift;
    if (!alphabeticRegex.test(String.fromCharCode(shiftedCharCode))) {
      // Ensures we wrap characters from z/Z back to a/A
      shiftedCharCode -= 26;
    }
    return String.fromCharCode(shiftedCharCode);
  } else {
    return character;
  }
}
