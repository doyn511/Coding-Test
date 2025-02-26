const fs = require("fs");
const [number, select] = fs
  .readFileSync(0)
  .toString()
  .split(" ")
  .map((el) => +el);

const getCombination = (arr, n) => {
  if (n === 1) return arr.map((el) => [el]);

  const res = [];

  arr.forEach((fixed, idx, origin) => {
    const copy = [...origin];
    copy.splice(idx, 1);
    const rest = [...copy];

    const combis = getCombination(rest, n - 1);

    const attatched = combis.map((el) => [fixed, ...el]);
    res.push(...attatched);
  });

  return res;
};

const arr = Array.from({ length: number }, (_, idx) => idx + 1);

const answer = getCombination(arr, select).map((el) => el.join(" "));
console.log(answer.join("\n"));
