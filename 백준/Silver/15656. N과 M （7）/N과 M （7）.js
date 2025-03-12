const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [numCnt, selectNum] = input.shift().split(" ").map(Number);
input = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const getCombination = (arr, n) => {
  if (n === 1) return arr.map((el) => [el]);
  const res = [];

  arr.forEach((fixed, _, origin) => {
    const combis = getCombination(origin, n - 1);
    const attatched = combis.map((el) => [fixed, ...el]);
    res.push(...attatched);
  });

  return res;
};

const answer = getCombination(input, selectNum)
  .map((el) => el.join(" "))
  .join("\n");

console.log(answer);
