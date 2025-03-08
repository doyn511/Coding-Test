const fs = require("fs");
const tallArr = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

const getCombination = (arr, n) => {
  if (n == 1) return arr.map((el) => [el]);
  const res = [];
  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combis = getCombination(rest, n - 1);
    const attatched = combis.map((el) => [fixed, ...el]);
    res.push(...attatched);
  });

  return res;
};

const combinationArr = getCombination(tallArr, 7);
const answer = [];

for (const combis of combinationArr) {
  let sum = 0;

  for (let i = 0; i < 7; i++) {
    sum += combis[i];
  }

  if (sum === 100) {
    answer.push(...combis);
    break;
  }
}

return console.log(answer.join("\n"));
