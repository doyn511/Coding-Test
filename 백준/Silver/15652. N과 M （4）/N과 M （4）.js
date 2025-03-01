const fs = require("fs");
const [max, n] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array.from({ length: max }, (_, idx) => idx + 1);

const getCombination = (arr, n) => {
  if (n === 1) return arr.map((el) => [el]);

  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.filter((el) => el >= fixed);
    const combis = getCombination(rest, n - 1);

    const attatched = combis.map((el) => [fixed, ...el]);
    result.push(...attatched);
  });

  return result;
};

console.log(
  getCombination(arr, n)
    .map((el) => el.join(" "))
    .join("\n")
);
