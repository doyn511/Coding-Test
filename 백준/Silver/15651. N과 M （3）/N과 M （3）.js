const fs = require("fs");
const [n, m] = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const getCombination = (arr, n) => {
  if (n === 1) return arr.map((el) => [el]);
  const result = [];

  arr.forEach((fixed) => {
    const combis = getCombination(arr, n - 1);
    const attatched = combis.map((c) => [fixed, ...c]);
    result.push(...attatched);
  });

  return result;
};

const arr = Array.from({ length: n }, (_, idx) => idx + 1);

console.log(
  getCombination(arr, m)
    .map((el) => el.join(" "))
    .join("\n")
);
