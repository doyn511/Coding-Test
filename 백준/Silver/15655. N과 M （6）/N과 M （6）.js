const fs = require("fs");
const [n, input] = fs.readFileSync(0).toString().trim().split("\n");

const [nCnt, selectCnt] = n.split(" ").map(Number);
const arr = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const getCombination = (numArr, n) => {
  if (n === 1) return numArr.map((el) => [el]);
  const res = [];

  numArr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combis = getCombination(rest, n - 1);
    const attatched = combis.map((el) => [fixed, ...el]);
    res.push(...attatched);
  });

  return res;
};

const answer = getCombination(arr, selectCnt)
  .map((el) => el.join(" "))
  .join("\n");
console.log(answer);
