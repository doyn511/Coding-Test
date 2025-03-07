const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("").sort();

const ALPH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const FAIL = "I'm Sorry Hansoo";

const len = input.length;
let count = [];
let res = "";

for (let i = 0; i < ALPH.length; i++) {
  const cnt = input.filter((el) => el === ALPH[i]).length;
  count.push([ALPH[i], cnt]);
}

count = count.filter((el) => el[1] !== 0);

if (count.filter((el) => el[1] % 2 === 1).length > 1) {
  return console.log(FAIL);
}

for (let i = 0; i < count.length; i++) {
  const [letter, num] = count[i];
  res += letter.repeat(Math.floor(num / 2));
}

let oddStr = "";
const oddIdx = count.findIndex((el) => el[1] % 2 === 1);
if (oddIdx !== -1) oddStr += count[oddIdx][0];

const answer = res + oddStr + res.split("").reverse().join("");
console.log(answer);
