export function analyzeArray(array) {
  let min = Infinity;
  let max = -Infinity;
  let total = 0;

  array.forEach((number) => {
    min = number < min ? number : min;
    max = number > max ? number : max;
    total += number;
  });

  return {
    average: array.length === 0 ? null : total / array.length,
    min: min === Infinity ? null : min,
    max: max === -Infinity ? null : max,
    length: array.length,
  };
}
