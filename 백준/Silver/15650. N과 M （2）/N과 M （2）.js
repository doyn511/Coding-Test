const fs = require("fs");
const [total, n] = fs
  .readFileSync(0)
  .toString()
  .split(" ")
  .map((el) => +el);

const getCombination = (arr, n) => {
  if (n === 1) return arr.map((el) => [el]);

  const res = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combis = getCombination(rest, n - 1);
    const attatched = combis.map((el) => [fixed, ...el]);
    res.push(...attatched);
  });

  return res;
};

const arr = Array.from({ length: total }, (_, idx) => idx + 1);

console.log(
  getCombination(arr, n)
    .map((el) => el.join(" "))
    .join("\n")
);
